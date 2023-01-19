<script>import classNames from 'classnames';
export let liClass = 'mr-4 last:mr-0 md:mr-6';
export let aClass = 'hover:underline';
export let href = '';
export let target = undefined;
</script>

<li class={classNames(liClass, $$props.class)}>
  <a {...$$restProps} {href} class={aClass} {target}>
    <slot />
  </a>
</li>
