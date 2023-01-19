<script>import classNames from 'classnames';
export let aClass = 'flex items-center';
export let spanClass = 'self-center text-2xl font-semibold whitespace-nowrap dark:text-white';
export let imgClass = 'mr-3 h-8';
export let href = '';
export let src = '';
export let alt = '';
export let name = '';
export let target = undefined;
</script>

{#if href}
  <a {...$$restProps} {href} {target} class={classNames(aClass, $$props.class)}>
    <img {src} class={imgClass} {alt} />
    <span class={spanClass}>{name}</span>
    <slot />
  </a>
{:else}
  <img {...$$restProps} {src} class={imgClass} {alt} />
{/if}
