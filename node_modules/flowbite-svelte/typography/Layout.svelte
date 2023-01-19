<script>import classNames from 'classnames';
export let divClass = 'grid';
export let cols = 'grid-cols-1 sm:grid-cols-2';
export let gap;
let classDiv = classNames(divClass, 'gap-' + String(gap), cols);
</script>

<div {...$$restProps} class={classDiv}>
  <slot />
</div>
