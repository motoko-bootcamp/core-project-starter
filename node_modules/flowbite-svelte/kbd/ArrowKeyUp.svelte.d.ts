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
export type ArrowKeyUpProps = typeof __propDef.props;
export type ArrowKeyUpEvents = typeof __propDef.events;
export type ArrowKeyUpSlots = typeof __propDef.slots;
export default class ArrowKeyUp extends SvelteComponentTyped<ArrowKeyUpProps, ArrowKeyUpEvents, ArrowKeyUpSlots> {
}
export {};
