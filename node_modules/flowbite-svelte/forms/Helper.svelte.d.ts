import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        helperClass?: string | undefined;
        color?: "gray" | "red" | "green" | "disabled" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type HelperProps = typeof __propDef.props;
export type HelperEvents = typeof __propDef.events;
export type HelperSlots = typeof __propDef.slots;
export default class Helper extends SvelteComponentTyped<HelperProps, HelperEvents, HelperSlots> {
}
export {};
