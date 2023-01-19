<script context="module">import { writable } from 'svelte/store';
</script>

<script>import Frame from '../utils/Frame.svelte';
import classNames from 'classnames';
import { setContext } from 'svelte';
export let multiple = false;
export let flush = false;
export let activeClasses = 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800';
export let inactiveClasses = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 hover:dark:bg-gray-800';
export let defaultClass = 'text-gray-500 dark:text-gray-400';
const ctx = {
    flush,
    activeClasses,
    inactiveClasses,
    selected: multiple ? undefined : writable()
};
setContext('ctx', ctx);
let frameClass = classNames(defaultClass, 'divide-y divide-gray-200 dark:divide-gray-700', 'border-gray-200 dark:border-gray-700', 'rounded-t-xl', $$props.class);
</script>

<Frame class={frameClass} color="none" border={!flush}>
  <slot />
</Frame>
