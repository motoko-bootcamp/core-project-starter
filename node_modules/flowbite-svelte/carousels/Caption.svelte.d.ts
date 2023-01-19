import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        caption?: string | undefined;
        captionClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CaptionProps = typeof __propDef.props;
export type CaptionEvents = typeof __propDef.events;
export type CaptionSlots = typeof __propDef.slots;
export default class Caption extends SvelteComponentTyped<CaptionProps, CaptionEvents, CaptionSlots> {
}
export {};
