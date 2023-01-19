import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        kbdClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type KbdProps = typeof __propDef.props;
export type KbdEvents = typeof __propDef.events;
export type KbdSlots = typeof __propDef.slots;
export default class Kbd extends SvelteComponentTyped<KbdProps, KbdEvents, KbdSlots> {
}
export {};
