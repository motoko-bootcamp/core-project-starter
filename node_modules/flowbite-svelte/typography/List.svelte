<script>import classNames from 'classnames';
export let tag = 'ul';
export let list = 'disc';
export let position = 'inside';
export let color = 'text-gray-500 dark:text-gray-400';
export let olClass = 'list-decimal list-inside';
export let ulClass = 'max-w-md';
export let dlClass = 'max-w-md divide-y divide-gray-200  dark:divide-gray-700';
let lists = {
    disc: 'list-disc',
    none: 'list-none',
    decimal: 'list-decimal'
};
let positions = {
    inside: 'list-inside',
    outside: 'list-outside'
};
let classList = classNames(color, tag === 'ul' ? ulClass : 'ol' ? olClass : dlClass, lists[list], positions[position], $$props.class);
</script>

<svelte:element this={tag} {...$$restProps} class={classList}>
  <slot />
</svelte:element>
