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
export type ArrowKeyDownProps = typeof __propDef.props;
export type ArrowKeyDownEvents = typeof __propDef.events;
export type ArrowKeyDownSlots = typeof __propDef.slots;
export default class ArrowKeyDown extends SvelteComponentTyped<ArrowKeyDownProps, ArrowKeyDownEvents, ArrowKeyDownSlots> {
}
export {};
