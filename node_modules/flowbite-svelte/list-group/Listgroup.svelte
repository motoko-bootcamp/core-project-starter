<script>import { setContext } from 'svelte';
import classNames from 'classnames';
import ListgroupItem from './ListgroupItem.svelte';
import Frame from '../utils/Frame.svelte';
export let items = [];
export let active = false;
$: setContext('active', active);
let groupClass;
$: groupClass = classNames('divide-y divide-gray-200 dark:divide-gray-600', $$props.class);
</script>

<Frame tag={active ? 'div' : 'ul'} {...$$restProps} rounded border class={groupClass}>
  {#each items as item, index}
    <ListgroupItem {active} {...item} {index} on:click><slot {item} {index} /></ListgroupItem>
  {:else}
    <slot />
  {/each}
</Frame>
