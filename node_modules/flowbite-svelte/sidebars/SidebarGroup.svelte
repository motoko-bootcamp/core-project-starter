<script>import classNames from 'classnames';
export let ulClass = 'space-y-2';
export let borderClass = 'pt-4 mt-4 border-t border-gray-200 dark:border-gray-700';
export let border = false;
if (border) {
    ulClass += ' ' + borderClass;
}
</script>

<ul {...$$restProps} class={classNames(ulClass, $$props.class)}>
	<slot />
</ul>
