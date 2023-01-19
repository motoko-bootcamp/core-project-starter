import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        href?: string | undefined;
        active?: boolean | undefined;
        activeClass?: string | undefined;
        normalClass?: string | undefined;
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
export type PaginationItemProps = typeof __propDef.props;
export type PaginationItemEvents = typeof __propDef.events;
export type PaginationItemSlots = typeof __propDef.slots;
export default class PaginationItem extends SvelteComponentTyped<PaginationItemProps, PaginationItemEvents, PaginationItemSlots> {
}
export {};
