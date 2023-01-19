<script>import classNames from 'classnames';
// export let width;
// export let controls: boolean = true;
// export let autoplay: boolean = false;
export let src;
export let type = 'video/mp4';
export let trackSrc = '';
export let srclang = 'en';
export let label = 'english_captions';
// export let attribute = '';
let videoClass = classNames($$props.class);
// const setAttribute = (node, params) => {
//   node.setAttribute(params, '');
// };
</script>

<video {...$$restProps} class={videoClass}>
  <source {src} {type} />
  <slot />
  <track src={trackSrc} kind="captions" {srclang} {label} />
  Your browser does not support the video tag.
</video>
