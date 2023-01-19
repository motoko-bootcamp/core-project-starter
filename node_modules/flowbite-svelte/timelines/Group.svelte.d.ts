import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        divClass?: string | undefined;
        timeClass?: string | undefined;
        date: Date | string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type GroupProps = typeof __propDef.props;
export type GroupEvents = typeof __propDef.events;
export type GroupSlots = typeof __propDef.slots;
export default class Group extends SvelteComponentTyped<GroupProps, GroupEvents, GroupSlots> {
}
export {};
