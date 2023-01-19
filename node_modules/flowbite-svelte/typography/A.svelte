<script>import classNames from 'classnames';
export let href = '#';
export let color = 'text-blue-600 dark:text-blue-500';
export let aClass = 'inline-flex items-center hover:underline';
</script>

<a {...$$restProps} {href} class={classNames(aClass, color, $$props.class)}>
  <slot />
</a>
