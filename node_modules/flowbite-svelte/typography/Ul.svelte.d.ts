import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        list?: "none" | "disc" | "decimal" | undefined;
        position?: "inside" | "outside" | undefined;
        ulClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type UlProps = typeof __propDef.props;
export type UlEvents = typeof __propDef.events;
export type UlSlots = typeof __propDef.slots;
export default class Ul extends SvelteComponentTyped<UlProps, UlEvents, UlSlots> {
}
export {};
