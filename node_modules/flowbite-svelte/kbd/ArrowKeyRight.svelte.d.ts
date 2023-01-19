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
export type ArrowKeyRightProps = typeof __propDef.props;
export type ArrowKeyRightEvents = typeof __propDef.events;
export type ArrowKeyRightSlots = typeof __propDef.slots;
export default class ArrowKeyRight extends SvelteComponentTyped<ArrowKeyRightProps, ArrowKeyRightEvents, ArrowKeyRightSlots> {
}
export {};
