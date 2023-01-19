import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
        size?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type VideoPlaceholderProps = typeof __propDef.props;
export type VideoPlaceholderEvents = typeof __propDef.events;
export type VideoPlaceholderSlots = typeof __propDef.slots;
export default class VideoPlaceholder extends SvelteComponentTyped<VideoPlaceholderProps, VideoPlaceholderEvents, VideoPlaceholderSlots> {
}
export {};
