<script>import { setContext } from 'svelte';
import classNames from 'classnames';
export let size = 'md';
export let divClass = 'inline-flex rounded-lg shadow-sm';
setContext('group', { size });
</script>

<div {...$$restProps} class={classNames(divClass, $$props.class)} role="group">
  <slot />
</div>
