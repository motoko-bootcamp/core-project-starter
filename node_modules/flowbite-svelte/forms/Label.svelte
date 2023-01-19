<script>import classNames from 'classnames';
export let color = 'gray';
export let defaultClass = 'text-sm font-medium block';
export let show = true;
let node;
const colorClasses = {
    gray: 'text-gray-900 dark:text-gray-300',
    green: 'text-green-700 dark:text-green-500',
    red: 'text-red-700 dark:text-red-500',
    disabled: 'text-gray-400 dark:text-gray-500'
};
// function checkDisabled(node: HTMLLabelElement) {
$: {
    const control = node?.control;
    color = control?.disabled ? 'disabled' : color;
}
$: labelClass = classNames(defaultClass, colorClasses[color], $$props.class);
</script>

{#if show}
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label bind:this={node} {...$$restProps} class={labelClass}><slot /></label>
{:else}
  <slot />
{/if}
