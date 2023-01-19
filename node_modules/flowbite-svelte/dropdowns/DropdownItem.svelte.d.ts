import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        defaultClass?: string | undefined;
        href?: string | undefined;
    };
    events: {
        click: MouseEvent;
        change: Event;
        keydown: KeyboardEvent;
        keyup: KeyboardEvent;
        focus: FocusEvent;
        blur: FocusEvent;
        mouseenter: MouseEvent;
        mouseleave: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type DropdownItemProps = typeof __propDef.props;
export type DropdownItemEvents = typeof __propDef.events;
export type DropdownItemSlots = typeof __propDef.slots;
export default class DropdownItem extends SvelteComponentTyped<DropdownItemProps, DropdownItemEvents, DropdownItemSlots> {
}
export {};
