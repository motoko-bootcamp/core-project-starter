<script>import classNames from 'classnames';
export let spanClass = 'block text-sm text-gray-500 sm:text-center dark:text-gray-400';
export let aClass = 'hover:underline';
export let year = new Date().getFullYear();
export let href = '';
export let by = '';
export let target = undefined;
export let copyrightMessage = 'All Rights Reserved.';
</script>

<span class={classNames(spanClass, $$props.class)}>
  &copy; {year}
  {#if href}
    <a {...$$restProps} {href} {target} class={aClass}>
      {by}
    </a>
  {:else}
    <span class="ml-1">{by}</span>
  {/if}
  . {copyrightMessage}
</span>
