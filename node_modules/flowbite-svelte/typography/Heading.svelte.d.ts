import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | undefined;
        color?: string | undefined;
        customSize?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type HeadingProps = typeof __propDef.props;
export type HeadingEvents = typeof __propDef.events;
export type HeadingSlots = typeof __propDef.slots;
export default class Heading extends SvelteComponentTyped<HeadingProps, HeadingEvents, HeadingSlots> {
}
export {};
