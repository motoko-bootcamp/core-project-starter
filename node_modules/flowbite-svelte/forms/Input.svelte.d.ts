import { SvelteComponentTyped } from "svelte";
import type { SizeType, FormSizeType } from '../types';
export declare function clampSize(s: SizeType): "sm" | "md" | "lg";
import type { InputType } from '../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        type?: InputType | undefined;
        value?: string | number | undefined;
        size?: FormSizeType | undefined;
        defaultClass?: string | undefined;
        color?: "red" | "green" | "base" | undefined;
    };
    events: {
        blur: FocusEvent;
        change: Event;
        click: MouseEvent;
        contextmenu: MouseEvent;
        focus: FocusEvent;
        keydown: KeyboardEvent;
        keypress: KeyboardEvent;
        keyup: KeyboardEvent;
        mouseover: MouseEvent;
        mouseenter: MouseEvent;
        mouseleave: MouseEvent;
        paste: ClipboardEvent;
        input: Event;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        left: {};
        default: {
            props: {
                class: string;
            };
        };
        right: {};
    };
};
export type InputProps = typeof __propDef.props;
export type InputEvents = typeof __propDef.events;
export type InputSlots = typeof __propDef.slots;
export default class Input extends SvelteComponentTyped<InputProps, InputEvents, InputSlots> {
}
export {};
