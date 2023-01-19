import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        color?: string | undefined;
        bgColor?: string | undefined;
        markClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type MarkProps = typeof __propDef.props;
export type MarkEvents = typeof __propDef.events;
export type MarkSlots = typeof __propDef.slots;
export default class Mark extends SvelteComponentTyped<MarkProps, MarkEvents, MarkSlots> {
}
export {};
