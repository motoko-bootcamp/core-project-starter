import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        thumbImg?: string | undefined;
        altTag?: string | undefined;
        titleLink?: string | undefined;
        id: number;
        thumbWidth: number;
        selected?: boolean | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ThumbnailProps = typeof __propDef.props;
export type ThumbnailEvents = typeof __propDef.events;
export type ThumbnailSlots = typeof __propDef.slots;
export default class Thumbnail extends SvelteComponentTyped<ThumbnailProps, ThumbnailEvents, ThumbnailSlots> {
}
export {};
