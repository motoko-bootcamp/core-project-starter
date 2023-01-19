<script>import Wrapper from '../utils/Wrapper.svelte';
import classNames from 'classnames';
export let defaultClass = 'font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600';
export let href = undefined;
let liClass;
$: liClass = classNames(defaultClass, href ? 'block' : 'w-full text-left', $$props.class);
let wrap = true;
function init(node) {
    wrap = node.parentElement?.tagName === 'UL';
}
</script>

<Wrapper tag="li" show={wrap} use={init}>
  <svelte:element
    this={href ? 'a' : 'button'}
    {href}
    {...$$restProps}
    class={liClass}
    on:click
    on:change
    on:keydown
    on:keyup
    on:focus
    on:blur
    on:mouseenter
    on:mouseleave>
    <slot />
  </svelte:element>
</Wrapper>
