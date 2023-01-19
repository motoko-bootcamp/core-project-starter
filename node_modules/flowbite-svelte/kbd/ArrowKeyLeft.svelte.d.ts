import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        svgClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ArrowKeyLeftProps = typeof __propDef.props;
export type ArrowKeyLeftEvents = typeof __propDef.events;
export type ArrowKeyLeftSlots = typeof __propDef.slots;
export default class ArrowKeyLeft extends SvelteComponentTyped<ArrowKeyLeftProps, ArrowKeyLeftEvents, ArrowKeyLeftSlots> {
}
export {};
