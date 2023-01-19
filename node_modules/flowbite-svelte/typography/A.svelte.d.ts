import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        href?: string | undefined;
        color?: string | undefined;
        aClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type AProps = typeof __propDef.props;
export type AEvents = typeof __propDef.events;
export type ASlots = typeof __propDef.slots;
export default class A extends SvelteComponentTyped<AProps, AEvents, ASlots> {
}
export {};
