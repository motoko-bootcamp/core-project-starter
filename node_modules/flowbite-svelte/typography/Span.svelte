<script>import classNames from 'classnames';
export let italic = false;
export let underline = false;
export let linethrough = false;
export let uppercase = false;
export let gradient = false;
export let highlight = false;
export let highlightClass = 'text-blue-600 dark:text-blue-500';
export let decorationClass = 'decoration-2 decoration-blue-400 dark:decoration-blue-600';
export let gradientClass = 'text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400';
let underlineClass = classNames('underline', decorationClass);
let classSpan = classNames(italic && 'italic', underline && underlineClass, linethrough && 'line-through', uppercase && 'uppercase', gradient ? gradientClass : 'font-semibold text-gray-900 dark:text-white', highlight && highlightClass, $$props.class);
</script>

<span {...$$restProps} class={classSpan}>
  <slot />
</span>
