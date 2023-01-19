import { SvelteComponentTyped } from "svelte";
import type { NavbarType } from '../types';
declare const __propDef: {
    props: {
        liButtonClass?: string | undefined;
        name: string;
        child?: NavbarType[] | undefined;
        dropdownDiv?: string | undefined;
        dropdownLinkClassWithChild?: string | undefined;
        rel?: string | undefined;
    };
    events: {
        blur: FocusEvent;
        change: Event;
        click: MouseEvent;
        focus: FocusEvent;
        keydown: KeyboardEvent;
        keypress: KeyboardEvent;
        keyup: KeyboardEvent;
        mouseenter: MouseEvent;
        mouseleave: MouseEvent;
        mouseover: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type NavDropdownProps = typeof __propDef.props;
export type NavDropdownEvents = typeof __propDef.events;
export type NavDropdownSlots = typeof __propDef.slots;
export default class NavDropdown extends SvelteComponentTyped<NavDropdownProps, NavDropdownEvents, NavDropdownSlots> {
}
export {};
