<script>import classNames from 'classnames';
export let caption = undefined;
export let src = undefined;
export let srcset = undefined;
export let size = 'max-w-full';
export let alignment = '';
export let imgClass = 'h-auto';
export let figClass = 'max-w-lg';
export let alt = '';
export let effect = '';
export let captionClass = 'mt-2 text-sm text-center text-gray-500 dark:text-gray-400';
</script>

{#if caption}
  <figure class={figClass}>
    <img
      class={classNames(imgClass, size, alignment, effect, $$props.class)}
      {src}
      {srcset}
      {alt} />
    <figcaption class={captionClass}>{@html caption}</figcaption>
  </figure>
{:else}
  <img
    {...$$restProps}
    class={classNames(imgClass, size, alignment, effect, $$props.class)}
    {src}
    {srcset}
    {alt} />
{/if}
