import { SvelteComponentTyped } from "svelte";
import type { ButtonType } from '../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        pill?: boolean | undefined;
        outline?: boolean | undefined;
        gradient?: boolean | undefined;
        size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
        href?: string | undefined;
        btnClass?: string | undefined;
        type?: ButtonType | undefined;
        color?: "red" | "yellow" | "green" | "purple" | "pink" | "blue" | "light" | "dark" | "cyan" | "teal" | "lime" | "alternative" | "primary" | "purpleToBlue" | "cyanToBlue" | "greenToBlue" | "purpleToPink" | "pinkToOrange" | "tealToLime" | "redToYellow" | undefined;
        shadow?: "red" | "green" | "purple" | "pink" | "blue" | "cyan" | "teal" | "lime" | null | undefined;
    };
    events: {
        click: MouseEvent;
        change: Event;
        keydown: KeyboardEvent;
        keyup: KeyboardEvent;
        mouseenter: MouseEvent;
        mouseleave: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ButtonProps = typeof __propDef.props;
export type ButtonEvents = typeof __propDef.events;
export type ButtonSlots = typeof __propDef.slots;
export default class Button extends SvelteComponentTyped<ButtonProps, ButtonEvents, ButtonSlots> {
}
export {};
