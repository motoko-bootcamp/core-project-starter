<script>import { onMount } from 'svelte';
import { createPopper } from '@popperjs/core';
import classNames from 'classnames';
import createEventDispatcher from './createEventDispatcher';
import Frame from './Frame.svelte';
export let activeContent = false;
export let arrow = true;
export let offset = 8;
export let placement = 'top';
export let trigger = 'hover';
export let triggeredBy = undefined;
export let strategy = 'absolute';
export let open = false;
export let yOnly = false;
const dispatch = createEventDispatcher();
let clickable;
$: clickable = trigger === 'click';
$: dispatch('show', triggerEl, open);
let triggerEl;
let contentEl;
let triggerEls = [];
let popper;
let _blocked = false; // managment of the race condition between focusin and click events
const block = () => ((_blocked = true), setTimeout(() => (_blocked = false), 250));
const showHandler = (ev) => {
    if (triggerEl === undefined)
        console.error('trigger undefined');
    if (triggerEls.includes(ev.target) && triggerEl !== ev.target) {
        triggerEl = ev.target;
        block();
    }
    if (clickable && ev.type === 'focusin' && !open)
        block();
    open = clickable && ev.type === 'click' && !_blocked ? !open : true;
};
// reactivity
$: popper && popper.setOptions({ placement });
// typescript typeguards - poper.state.element.reference: Element|HTMLElement|VirtualElement
const hasHover = (el) => el.matches && el.matches(':hover');
const hasFocus = (el) => el.contains && el.contains(document.activeElement);
const hideHandler = (ev) => {
    if (activeContent) {
        setTimeout(() => {
            const elements = Object.values(popper?.state.elements ?? {});
            if (ev.type === 'mouseleave' && elements.some(hasHover))
                return;
            if (ev.type === 'focusout' && elements.some(hasFocus))
                return;
            open = false;
        }, 100);
    }
    else
        open = false;
};
function init(node, _triggerEl) {
    popper = createPopper(_triggerEl, node, {
        placement,
        strategy,
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: ({ reference, popper }) => {
                        // for full screen mega menu
                        return [yOnly ? popper.width / 2 - reference.width / 2 - reference.x : 0, offset];
                    }
                }
            },
            { name: 'eventListeners', enabled: open },
            { name: 'flip', enabled: false }
        ]
    });
    return {
        update(_triggerEl) {
            popper.state.elements.reference = _triggerEl;
            popper.update();
        },
        destroy() {
            popper.destroy();
        }
    };
}
onMount(() => {
    const events = [
        ['focusin', showHandler, true],
        ['focusout', hideHandler, true],
        ['click', showHandler, clickable],
        ['mouseenter', showHandler, !clickable],
        ['mouseleave', hideHandler, !clickable]
    ];
    if (triggeredBy)
        triggerEls = [...document.querySelectorAll(triggeredBy)];
    else
        triggerEls = contentEl.previousElementSibling ? [contentEl.previousElementSibling] : [];
    if (!triggerEls.length) {
        console.error('No triggers found.');
    }
    triggerEls.forEach((element) => {
        if (element.tabIndex < 0)
            element.tabIndex = 0; // trigger must be focusable
        for (const [name, handler, cond] of events)
            if (cond)
                element.addEventListener(name, handler);
    });
    triggerEl = triggerEls[0];
    return () => {
        triggerEls.forEach((element) => {
            if (element) {
                for (const [name, handler] of events)
                    element.removeEventListener(name, handler);
            }
        });
    };
});
function optional(pred, func) {
    return (pred && func) || null;
}
</script>

{#if !triggerEl}
  <div bind:this={contentEl} />
{/if}

{#if open && triggerEl}
  <Frame
    use={init}
    options={triggerEl}
    role="tooltip"
    tabIndex={activeContent ? -1 : undefined}
    on:focusin={optional(activeContent, showHandler)}
    on:focusout={optional(activeContent, hideHandler)}
    on:mouseenter={optional(activeContent && !clickable, showHandler)}
    on:mouseleave={optional(activeContent && !clickable, hideHandler)}
    {...$$restProps}
    class={classNames('z-10 outline-none', $$props.class)}>
    <slot />
    {#if arrow}<div data-popper-arrow class="tooltip-arrow" />{/if}
  </Frame>
{/if}
