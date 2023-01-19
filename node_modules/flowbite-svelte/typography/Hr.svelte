<script>import classNames from 'classnames';
export let icon = false;
export let width = 'w-full';
export let height = 'h-px';
export let divClass = 'inline-flex justify-center items-center w-full';
export let hrClass = 'bg-gray-200 rounded border-0 dark:bg-gray-700';
export let iconDivClass = 'absolute left-1/2 px-4 bg-white -translate-x-1/2 ';
export let textSpanClass = 'absolute left-1/2 px-3 font-medium text-gray-900 bg-white -translate-x-1/2 dark:text-white ';
export let middleBgColor = 'dark:bg-gray-900';
let horizontalClass = classNames(hrClass, width, height, $$props.class);
let classDiv = classNames(divClass, $$slots && 'relative', $$props.classDiv);
let middleClass = classNames(middleBgColor, icon ? iconDivClass : textSpanClass);
</script>

{#if $$slots}
  <div {...$$restProps} class={classDiv}>
    <hr class={horizontalClass} />
    <div class={middleClass}>
      <slot />
    </div>
  </div>
{:else}
  <hr class={horizontalClass} />
{/if}
