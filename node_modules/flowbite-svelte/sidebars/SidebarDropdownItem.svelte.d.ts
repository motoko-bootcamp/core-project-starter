import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        aClass?: string | undefined;
        href?: string | undefined;
        label?: string | undefined;
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
    slots: {};
};
export type SidebarDropdownItemProps = typeof __propDef.props;
export type SidebarDropdownItemEvents = typeof __propDef.events;
export type SidebarDropdownItemSlots = typeof __propDef.slots;
export default class SidebarDropdownItem extends SvelteComponentTyped<SidebarDropdownItemProps, SidebarDropdownItemEvents, SidebarDropdownItemSlots> {
}
export {};
