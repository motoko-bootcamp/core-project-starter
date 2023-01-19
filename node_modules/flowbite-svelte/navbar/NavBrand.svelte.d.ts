import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        href?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type NavBrandProps = typeof __propDef.props;
export type NavBrandEvents = typeof __propDef.events;
export type NavBrandSlots = typeof __propDef.slots;
export default class NavBrand extends SvelteComponentTyped<NavBrandProps, NavBrandEvents, NavBrandSlots> {
}
export {};
