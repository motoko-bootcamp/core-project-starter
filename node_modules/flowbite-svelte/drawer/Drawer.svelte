<script>import classNames from 'classnames';
import { fly, slide, blur, fade } from 'svelte/transition';
import { clickOutside } from '../utils/clickOutside';
export let activateClickOutside = true;
export let hidden = true;
export let position = 'fixed';
export let leftOffset = 'inset-y-0 left-0';
export let rightOffset = 'inset-y-0 right-0';
export let topOffset = 'inset-x-0 top-0';
export let bottomOffset = 'inset-x-0 bottom-0';
export let width = 'w-80';
export let backdrop = true;
export let bgColor = 'bg-gray-900';
export let bgOpacity = 'bg-opacity-75';
export let placement = 'left';
export let id = 'drawer-example';
export let divClass = 'overflow-y-auto z-50 p-4 bg-white dark:bg-gray-800';
export let transitionParams = {};
export let transitionType = 'fly';
function multiple(node, params) {
    switch (transitionType) {
        case 'slide':
            return slide(node, params);
        case 'blur':
            return blur(node, params);
        case 'fade':
            return fade(node, params);
        default:
            return fly(node, params);
    }
}
const placements = {
    left: leftOffset,
    right: rightOffset,
    top: topOffset,
    bottom: bottomOffset
};
const handleDrawer = () => {
    hidden = !hidden;
};
let backdropDivClass = classNames('fixed top-0 left-0 z-50 w-full h-full', backdrop && bgColor, backdrop && bgOpacity);
</script>

{#if !hidden}
  {#if backdrop && activateClickOutside}
    <div role="presentation" class={backdropDivClass} on:click={() => !hidden && handleDrawer()} />
  {:else if backdrop && !activateClickOutside}
    <div role="presentation" class={backdropDivClass} />
  {/if}
  {#if activateClickOutside}
    <div
      use:clickOutside={() => !hidden && handleDrawer()}
      {id}
      {...$$restProps}
      class={classNames(divClass, width, position, placements[placement], $$props.class)}
      transition:multiple={transitionParams}
      tabindex="-1"
      aria-controls={id}
      aria-labelledby={id}>
      <slot {hidden} />
    </div>
  {:else}
    <div
      {id}
      {...$$restProps}
      class={classNames(divClass, width, position, placements[placement], $$props.class)}
      transition:multiple={transitionParams}
      tabindex="-1"
      aria-controls={id}
      aria-labelledby={id}>
      <slot {hidden} />
    </div>
  {/if}
{/if}
