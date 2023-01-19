<script>import classNames from 'classnames';
export let ulClass = 'text-gray-600 dark:text-gray-400';
</script>

<ul class={classNames(ulClass, $$props.class)}>
	<slot />
</ul>
