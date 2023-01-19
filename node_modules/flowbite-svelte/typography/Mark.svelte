<script>import classNames from 'classnames';
export let color = 'text-white dark:bg-blue-500';
export let bgColor = 'bg-blue-600';
export let markClass = 'px-2 rounded';
</script>

<mark {...$$restProps} class={classNames(markClass, bgColor, color, $$props.class)}>
  <slot />
</mark>
