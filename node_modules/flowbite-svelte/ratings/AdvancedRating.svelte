<script>export let ratings = [];
export let divClass = 'flex items-center mt-4';
export let labelClass = 'text-sm font-medium text-blue-600 dark:text-blue-500';
export let ratingDivClass = 'mx-4 w-2/4 h-5 bg-gray-200 rounded dark:bg-gray-700';
export let ratingClass = 'h-5 bg-yellow-400 rounded';
export let rightLabelClass = 'text-sm font-medium text-blue-600 dark:text-blue-500';
export let unit = '%';
</script>

{#if $$slots.rating}
	<slot name="rating" />
{/if}
{#if $$slots.globalText}
	<slot name="globalText" />
{/if}
{#each ratings as { label, rating }}
	<div class={divClass}>
		<span class={labelClass}>{label}</span>
		<div class={ratingDivClass}>
			<div class={ratingClass} style="width: {rating}%" />
		</div>
		<span class={rightLabelClass}>{rating}{unit}</span>
	</div>
{/each}
