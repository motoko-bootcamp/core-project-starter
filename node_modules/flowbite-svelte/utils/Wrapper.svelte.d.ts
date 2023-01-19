import { SvelteComponentTyped } from "svelte";
import type { Action } from 'svelte/action';
declare const __propDef: {
    props: {
        [x: string]: any;
        tag?: string | undefined;
        show: boolean;
        use?: Action<HTMLElement, any, Record<never, any>> | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type WrapperProps = typeof __propDef.props;
export type WrapperEvents = typeof __propDef.events;
export type WrapperSlots = typeof __propDef.slots;
export default class Wrapper extends SvelteComponentTyped<WrapperProps, WrapperEvents, WrapperSlots> {
}
export {};
