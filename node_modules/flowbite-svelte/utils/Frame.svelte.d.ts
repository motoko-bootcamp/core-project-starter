import { SvelteComponentTyped } from "svelte";
import type { Action } from 'svelte/action';
import type { TransitionConfig } from 'svelte/transition';
declare const __propDef: {
    props: {
        [x: string]: any;
        tag?: string | undefined;
        color?: "gray" | "red" | "yellow" | "green" | "indigo" | "default" | "purple" | "pink" | "blue" | "light" | "dark" | "dropdown" | "navbar" | "navbarUl" | "form" | "none" | undefined;
        rounded?: boolean | undefined;
        border?: boolean | undefined;
        shadow?: boolean | undefined;
        transition?: ((node: HTMLElement, params: any) => TransitionConfig) | undefined;
        params?: object | undefined;
        node?: HTMLElement | undefined;
        use?: Action<HTMLElement, any, Record<never, any>> | undefined;
        options?: {} | undefined;
    };
    events: {
        mouseenter: MouseEvent;
        mouseleave: MouseEvent;
        focusin: FocusEvent;
        focusout: FocusEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type FrameProps = typeof __propDef.props;
export type FrameEvents = typeof __propDef.events;
export type FrameSlots = typeof __propDef.slots;
export default class Frame extends SvelteComponentTyped<FrameProps, FrameEvents, FrameSlots> {
}
export {};
