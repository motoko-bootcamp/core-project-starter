<script>import classNames from 'classnames';
export let href = '';
</script>

<a {href} {...$$restProps} class={classNames('flex items-center', $$props.class)}>
	<slot />
</a>
