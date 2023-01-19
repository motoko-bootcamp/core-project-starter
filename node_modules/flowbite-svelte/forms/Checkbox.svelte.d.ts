import { SvelteComponentTyped } from "svelte";
import type { FormColorType } from '../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        color?: FormColorType | undefined;
        custom?: boolean | undefined;
        inline?: boolean | undefined;
        group?: (string | number)[] | undefined;
        value?: string | number | undefined;
        checked?: boolean | undefined;
    };
    events: {
        keyup: KeyboardEvent;
        keydown: KeyboardEvent;
        keypress: KeyboardEvent;
        focus: FocusEvent;
        blur: FocusEvent;
        click: MouseEvent;
        mouseover: MouseEvent;
        mouseenter: MouseEvent;
        mouseleave: MouseEvent;
        paste: ClipboardEvent;
        change: Event;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type CheckboxProps = typeof __propDef.props;
export type CheckboxEvents = typeof __propDef.events;
export type CheckboxSlots = typeof __propDef.slots;
export default class Checkbox extends SvelteComponentTyped<CheckboxProps, CheckboxEvents, CheckboxSlots> {
}
export {};
