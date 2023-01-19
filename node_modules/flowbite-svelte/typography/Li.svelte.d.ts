import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        icon?: boolean | undefined;
        liClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type LiProps = typeof __propDef.props;
export type LiEvents = typeof __propDef.events;
export type LiSlots = typeof __propDef.slots;
export default class Li extends SvelteComponentTyped<LiProps, LiEvents, LiSlots> {
}
export {};
