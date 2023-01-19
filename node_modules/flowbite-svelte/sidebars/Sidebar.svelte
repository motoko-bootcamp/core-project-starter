<script>import classNames from 'classnames';
export let asideClass = 'w-64';
</script>

<aside {...$$restProps} class={classNames(asideClass, $$props.class)} aria-label="Sidebar">
	<slot />
</aside>
