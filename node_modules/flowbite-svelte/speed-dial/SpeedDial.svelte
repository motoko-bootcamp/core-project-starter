<script context="module">export {};
</script>

<script>import classNames from 'classnames';
import Button from '../buttons/Button.svelte';
import Popper from '../utils/Popper.svelte';
import { setContext } from 'svelte';
import generateId from '../utils/generateId';
export let defaultClass = 'fixed right-6 bottom-6';
export let placement = 'top';
export let pill = true;
export let tooltip = 'left';
export let trigger = 'hover';
export let textOutside = false;
export let id = generateId();
setContext('speed-dial', { pill, tooltip, textOutside });
let divClass;
$: divClass = classNames(defaultClass, 'group', $$props.class);
let poperClass;
$: poperClass = classNames('flex items-center mb-4 gap-2', ['top', 'bottom'].includes(placement) && 'flex-col');
</script>

<div class={divClass}>
  <Button {pill} name="Open actions menu" aria-controls={id} aria-expanded="false" color="blue" class="!p-3">
    <slot name="icon">
      <svg
        aria-hidden="true"
        class="w-8 h-8 transition-transform group-hover:rotate-45"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
    </slot>
    <span class="sr-only">Open actions menu</span>
  </Button>
  <Popper {id} {trigger} arrow={false} color="none" activeContent {placement} class={poperClass}>
    <slot />
  </Popper>
</div>
