import { SvelteComponentTyped } from "svelte";
import type { FormSizeType } from '../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        size?: FormSizeType | undefined;
        placeholder?: string | undefined;
        value?: string | number | undefined;
    };
    events: {
        blur: FocusEvent;
        change: Event;
        input: Event;
        click: MouseEvent;
        focus: FocusEvent;
        keydown: KeyboardEvent;
        keypress: KeyboardEvent;
        keyup: KeyboardEvent;
        mouseenter: MouseEvent;
        mouseleave: MouseEvent;
        mouseover: MouseEvent;
        paste: ClipboardEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type SearchProps = typeof __propDef.props;
export type SearchEvents = typeof __propDef.events;
export type SearchSlots = typeof __propDef.slots;
export default class Search extends SvelteComponentTyped<SearchProps, SearchEvents, SearchSlots> {
}
export {};
