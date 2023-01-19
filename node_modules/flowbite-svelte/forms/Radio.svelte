<script context="module">// this part is shared between Radio and Checkbox
import classNames from 'classnames';
const colorClasses = {
    red: 'text-red-600 focus:ring-red-500 dark:focus:ring-red-600',
    green: 'text-green-600 focus:ring-green-500 dark:focus:ring-green-600',
    purple: 'text-purple-600 focus:ring-purple-500 dark:focus:ring-purple-600',
    teal: 'text-teal-600 focus:ring-teal-500 dark:focus:ring-teal-600',
    yellow: 'text-yellow-400 focus:ring-yellow-500 dark:focus:ring-yellow-600',
    orange: 'text-orange-500 focus:ring-orange-500 dark:focus:ring-orange-600',
    blue: 'text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600'
};
export const labelClass = (inline, extraClass) => classNames(inline ? 'inline-flex' : 'flex', 'items-center', extraClass);
export const inputClass = (custom, color, rounded, tinted, extraClass) => classNames('w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2', extraClass === true && 'mr-2', tinted ? 'dark:bg-gray-600 dark:border-gray-500' : 'dark:bg-gray-700 dark:border-gray-600', custom && 'sr-only peer', rounded && 'rounded', colorClasses[color], extraClass);
</script>

<script>import { getContext } from 'svelte';
import Label from './Label.svelte';
export let color = 'blue';
export let custom = false;
export let inline = false;
export let group = '';
export let value = '';
// tinted if put in component having its own background
let background = getContext('background');
</script>

<Label class={labelClass(inline, $$props.class)} show={$$slots.default}>
  <input
    type="radio"
    bind:group
    on:blur
    on:change
    on:click
    on:focus
    on:keydown
    on:keypress
    on:keyup
    on:mouseenter
    on:mouseleave
    on:mouseover
    on:paste
    {value}
    {...$$restProps}
    class={inputClass(custom, color, false, background, $$slots.default || $$props.class)} /><slot />
</Label>
