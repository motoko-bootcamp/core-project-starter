<script>import classNames from 'classnames';
export let aClass = 'flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700';
export let href = '';
export let label = '';
export let activeClass = 'flex items-center p-2 pl-11 text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700';
export let active = false;
</script>

<li>
  <a
    {...$$restProps}
    {href}
    on:blur
    on:click
    on:focus
    on:keydown
    on:keypress
    on:keyup
    on:mouseenter
    on:mouseleave
    on:mouseover
    class={classNames(active ? activeClass : aClass, $$props.class)}>{label}</a>
</li>
