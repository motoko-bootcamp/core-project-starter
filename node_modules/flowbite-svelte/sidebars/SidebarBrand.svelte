<script>import classNames from 'classnames';
export let site;
export let aClass = 'flex items-center pl-2.5 mb-5';
export let imgClass = 'h-6 mr-3 sm:h-7';
export let spanClass = 'self-center text-xl font-semibold whitespace-nowrap dark:text-white';
</script>

<a {...$$restProps} href={site.href} class={classNames(aClass, $$props.class)}>
	<img src={site.img} class={imgClass} alt={site.name} />
	<span class={spanClass}>{site.name}</span>
</a>
