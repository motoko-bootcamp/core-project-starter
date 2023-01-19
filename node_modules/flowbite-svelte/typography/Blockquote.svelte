<script>import classNames from 'classnames';
export let border = false;
export let italic = true;
export let borderClass = 'border-l-4 border-gray-300 dark:border-gray-500';
export let bgClass = 'bg-gray-50 dark:bg-gray-800';
export let bg = false;
export let baseClass = 'font-semibold text-gray-900 dark:text-white';
export let alignment = 'left';
let alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
};
export let size = 'lg';
const sizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl',
    '8xl': 'text-8xl',
    '9xl': 'text-9xl'
};
</script>

<blockquote
  {...$$restProps}
  class={classNames(
    baseClass,
    alignmentClasses[alignment],
    sizes[size],
    bg && bgClass,
    border && borderClass,
    italic && 'italic',
    $$props.class
  )}>
  <slot />
</blockquote>
