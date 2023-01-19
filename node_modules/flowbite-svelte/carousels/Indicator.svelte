<script>export let name = '';
export let selected = false;
export let indicatorClass = '';
</script>

<button type="button" class={indicatorClass} class:active={selected} aria-label={name} on:click />

<style>
  .active {
    opacity: 1;
  }</style>
