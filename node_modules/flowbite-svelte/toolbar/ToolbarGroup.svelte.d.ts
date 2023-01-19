import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ToolbarGroupProps = typeof __propDef.props;
export type ToolbarGroupEvents = typeof __propDef.events;
export type ToolbarGroupSlots = typeof __propDef.slots;
export default class ToolbarGroup extends SvelteComponentTyped<ToolbarGroupProps, ToolbarGroupEvents, ToolbarGroupSlots> {
}
export {};
