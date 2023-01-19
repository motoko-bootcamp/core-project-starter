import { SvelteComponentTyped } from "svelte";
import type { LinkType } from '../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        pages?: LinkType[] | undefined;
        activeClass?: string | undefined;
        normalClass?: string | undefined;
        ulClass?: string | undefined;
        table?: boolean | undefined;
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
        previous: CustomEvent<any>;
        next: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        prev: {};
        next: {};
    };
};
export type PaginationProps = typeof __propDef.props;
export type PaginationEvents = typeof __propDef.events;
export type PaginationSlots = typeof __propDef.slots;
export default class Pagination extends SvelteComponentTyped<PaginationProps, PaginationEvents, PaginationSlots> {
}
export {};
