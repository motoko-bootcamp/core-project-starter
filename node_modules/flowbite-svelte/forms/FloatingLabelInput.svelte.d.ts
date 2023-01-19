import { SvelteComponentTyped } from "svelte";
import type { InputType } from '../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        id?: string | undefined;
        style?: "filled" | "outlined" | "standard" | undefined;
        type?: InputType | undefined;
        size?: "default" | "small" | undefined;
        color?: "red" | "green" | "base" | undefined;
        value?: string | undefined;
        label?: string | undefined;
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
        paste: ClipboardEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FloatingLabelInputProps = typeof __propDef.props;
export type FloatingLabelInputEvents = typeof __propDef.events;
export type FloatingLabelInputSlots = typeof __propDef.slots;
export default class FloatingLabelInput extends SvelteComponentTyped<FloatingLabelInputProps, FloatingLabelInputEvents, FloatingLabelInputSlots> {
}
export {};
