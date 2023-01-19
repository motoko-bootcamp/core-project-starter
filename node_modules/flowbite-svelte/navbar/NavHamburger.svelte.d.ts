import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        btnClass?: string | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type NavHamburgerProps = typeof __propDef.props;
export type NavHamburgerEvents = typeof __propDef.events;
export type NavHamburgerSlots = typeof __propDef.slots;
export default class NavHamburger extends SvelteComponentTyped<NavHamburgerProps, NavHamburgerEvents, NavHamburgerSlots> {
}
export {};
