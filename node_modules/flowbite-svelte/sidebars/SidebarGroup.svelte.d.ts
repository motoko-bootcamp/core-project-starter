import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        ulClass?: string | undefined;
        borderClass?: string | undefined;
        border?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type SidebarGroupProps = typeof __propDef.props;
export type SidebarGroupEvents = typeof __propDef.events;
export type SidebarGroupSlots = typeof __propDef.slots;
export default class SidebarGroup extends SvelteComponentTyped<SidebarGroupProps, SidebarGroupEvents, SidebarGroupSlots> {
}
export {};
