<script>import classNames from 'classnames';
export let color = 'text-gray-500 dark:text-gray-400';
export let secondaryClass = 'font-semibold';
</script>

<small {...$$restProps} class={classNames(color, secondaryClass, $$props.class)}>
  <slot />
</small>
