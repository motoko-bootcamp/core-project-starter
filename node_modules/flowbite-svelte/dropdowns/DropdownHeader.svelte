<script>import classNames from 'classnames';
import DropdownDivider from './DropdownDivider.svelte';
export let divClass = 'py-2 px-4 text-gray-700 dark:text-white';
// 'block py-2 px-4 text-sm text-gray-700 dark:text-gray-200';
export let divider = true;
</script>

<div {...$$restProps} class={classNames(divClass, $$props.class)}>
	<slot />
</div>
{#if divider}
	<DropdownDivider />
{/if}
