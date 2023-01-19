import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        aClass?: string | undefined;
        href?: string | undefined;
        label?: string | undefined;
        spanClass?: string | undefined;
        activeClass?: string | undefined;
        active?: boolean | undefined;
    };
    events: {
        blur: FocusEvent;
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
        icon: {};
        subtext: {};
    };
};
export type SidebarItemProps = typeof __propDef.props;
export type SidebarItemEvents = typeof __propDef.events;
export type SidebarItemSlots = typeof __propDef.slots;
export default class SidebarItem extends SvelteComponentTyped<SidebarItemProps, SidebarItemEvents, SidebarItemSlots> {
}
export {};
