import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type SidebarWrapperProps = typeof __propDef.props;
export type SidebarWrapperEvents = typeof __propDef.events;
export type SidebarWrapperSlots = typeof __propDef.slots;
export default class SidebarWrapper extends SvelteComponentTyped<SidebarWrapperProps, SidebarWrapperEvents, SidebarWrapperSlots> {
}
export {};
