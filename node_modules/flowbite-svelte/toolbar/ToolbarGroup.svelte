<script>import { getContext } from 'svelte';
const options = getContext('toolbar');
if (options)
    $options = true;
</script>

<div class="flex items-center space-x-1 sm:pr-4 sm:pl-4 first:sm:pl-0 last:sm:pr-0">
	<slot />
</div>
