<script>import { getContext } from 'svelte';
import { labelClass, inputClass } from './Radio.svelte';
import Label from './Label.svelte';
// properties forwarding
export let color = 'blue';
export let custom = false;
export let inline = false;
export let group = [];
export let value = '';
export let checked = undefined;
// tinted if put in component having its own background
let background = getContext('background');
// react on external group changes
function init(_, _group) {
    if (checked === undefined)
        checked = _group.includes(value);
    onChange();
    return {
        update(_group) {
            checked = _group.includes(value);
        }
    };
}
function onChange() {
    // There's a bug in Svelte and bind:group is not working with wrapped checkbox
    // This workaround is taken from:
    // https://svelte.dev/repl/de117399559f4e7e9e14e2fc9ab243cc?version=3.12.1
    const index = group.indexOf(value);
    if (checked === undefined)
        checked = index >= 0;
    if (checked) {
        if (index < 0) {
            group.push(value);
            group = group;
        }
    }
    else {
        if (index >= 0) {
            group.splice(index, 1);
            group = group;
        }
    }
}
</script>

<Label class={labelClass(inline, $$props.class)} show={!!$$slots.default}>
  <input
    use:init={group}
    type="checkbox"
    bind:checked
    on:keyup
    on:keydown
    on:keypress
    on:focus
    on:blur
    on:click
    on:mouseover
    on:mouseenter
    on:mouseleave
    on:paste
    on:change={onChange}
    on:change
    {value}
    {...$$restProps}
    class={inputClass(custom, color, true, background, $$slots.default || $$props.class)} /><slot />
</Label>
