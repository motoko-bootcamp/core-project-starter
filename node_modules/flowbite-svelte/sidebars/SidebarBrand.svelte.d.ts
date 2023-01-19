import { SvelteComponentTyped } from "svelte";
import type { SiteType } from '../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        site: SiteType;
        aClass?: string | undefined;
        imgClass?: string | undefined;
        spanClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SidebarBrandProps = typeof __propDef.props;
export type SidebarBrandEvents = typeof __propDef.events;
export type SidebarBrandSlots = typeof __propDef.slots;
export default class SidebarBrand extends SvelteComponentTyped<SidebarBrandProps, SidebarBrandEvents, SidebarBrandSlots> {
}
export {};
