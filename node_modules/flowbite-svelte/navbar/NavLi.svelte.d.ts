import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        href?: string | undefined;
        active?: boolean | undefined;
        activeClass?: string | undefined;
        nonActiveClass?: string | undefined;
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
export type NavLiProps = typeof __propDef.props;
export type NavLiEvents = typeof __propDef.events;
export type NavLiSlots = typeof __propDef.slots;
export default class NavLi extends SvelteComponentTyped<NavLiProps, NavLiEvents, NavLiSlots> {
}
export {};
