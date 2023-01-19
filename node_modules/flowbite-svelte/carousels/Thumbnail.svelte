<script>export let thumbImg = '';
export let altTag = '';
export let titleLink = '';
export let id;
export let thumbWidth;
export let selected = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<img
  class="opacity-40"
  class:active={selected}
  id={id.toString()}
  src={thumbImg}
  alt={altTag}
  title="Image from {titleLink}"
  on:click
  width="{thumbWidth}%" />

<style>
  .active {
    opacity: 1;
  }</style>
