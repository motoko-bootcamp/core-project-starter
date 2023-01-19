import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        divWrapperClass?: string | undefined;
        divClass?: string | undefined;
        spanClass?: string | undefined;
        label?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        icon: {};
        default: {};
    };
};
export type SidebarCtaProps = typeof __propDef.props;
export type SidebarCtaEvents = typeof __propDef.events;
export type SidebarCtaSlots = typeof __propDef.slots;
export default class SidebarCta extends SvelteComponentTyped<SidebarCtaProps, SidebarCtaEvents, SidebarCtaSlots> {
}
export {};
