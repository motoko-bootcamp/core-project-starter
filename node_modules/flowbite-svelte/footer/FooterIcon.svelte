<script>import classNames from 'classnames';
export let href = '';
export let ariaLabel = '';
export let aClass = 'text-gray-500 hover:text-gray-900 dark:hover:text-white';
export let target = undefined;
</script>

{#if href}
  <a {...$$restProps} {href} {target} aria-label={ariaLabel} class={classNames(aClass, $$props.class)}>
    <slot />
  </a>
{:else}
  <slot />
{/if}
