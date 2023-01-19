import { SvelteComponentTyped } from "svelte";
export declare const labelClass: (inline: boolean, extraClass: string) => string;
export declare const inputClass: (custom: boolean, color: FormColorType, rounded: boolean, tinted: boolean, extraClass: string | boolean) => string;
import type { FormColorType } from '../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        color?: FormColorType | undefined;
        custom?: boolean | undefined;
        inline?: boolean | undefined;
        group?: string | number | undefined;
        value?: string | number | undefined;
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
    slots: {
        default: {};
    };
};
export type RadioProps = typeof __propDef.props;
export type RadioEvents = typeof __propDef.events;
export type RadioSlots = typeof __propDef.slots;
export default class Radio extends SvelteComponentTyped<RadioProps, RadioEvents, RadioSlots> {
}
export {};
