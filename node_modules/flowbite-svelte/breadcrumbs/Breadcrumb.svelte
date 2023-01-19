<script>import classNames from 'classnames';
export let solid = false;
export let navClass = 'flex';
export let solidClass = 'flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700';
export let olClass = 'inline-flex items-center space-x-1 md:space-x-3';
let classNav = solid ? solidClass : navClass;
</script>

<nav aria-label="Breadcrumb" {...$$restProps} class={classNames(classNav, $$props.class)}>
	<ol class={classNames(olClass, $$props.classOl)}>
		<slot />
	</ol>
</nav>
