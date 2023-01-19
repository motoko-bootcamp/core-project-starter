<script>import ChevronDown from './ChevronDown.svelte';
import ChevronLeft from './ChevronLeft.svelte';
import ChevronUp from './ChevronUp.svelte';
import ChevronRight from './ChevronRight.svelte';
import Wrapper from './Wrapper.svelte';
export let placement = 'bottom';
export let aligned = false;
const icons = {
    top: ChevronUp,
    right: ChevronRight,
    bottom: ChevronDown,
    left: ChevronLeft
};
let icon;
$: icon = icons[placement.split('-')[0]] ?? ChevronDown;
</script>

<Wrapper class="flex items-center justify-between" show={aligned}>
  {#if placement.split('-')[0] === 'left'}
    <ChevronLeft class="h-4 w-4 mr-2" />
    <slot />
  {:else}
    <slot />
    <svelte:component this={icon} class="h-4 w-4 ml-2" />
  {/if}
</Wrapper>
