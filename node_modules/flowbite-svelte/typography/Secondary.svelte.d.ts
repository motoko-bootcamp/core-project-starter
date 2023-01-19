import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        color?: string | undefined;
        secondaryClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type SecondaryProps = typeof __propDef.props;
export type SecondaryEvents = typeof __propDef.events;
export type SecondarySlots = typeof __propDef.slots;
export default class Secondary extends SvelteComponentTyped<SecondaryProps, SecondaryEvents, SecondarySlots> {
}
export {};
