<script>import classNames from 'classnames';
import Input from './Input.svelte';
export let value = '';
export let files = undefined;
export let inputClass = 'border !p-0 dark:text-gray-400';
</script>

<Input {...$$restProps} class={classNames(inputClass, $$props.class)} let:props>
  <input
    type="file"
    on:change
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
    bind:value
    bind:files
    {...props} />
</Input>
