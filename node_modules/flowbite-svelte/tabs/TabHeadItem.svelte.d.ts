import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        id: number;
        tabStyle?: "default" | "custom" | "icon" | "pill" | "underline" | "full" | undefined;
        activeTabValue: number;
        customActiveClass?: string | undefined;
        customInActiveClass?: string | undefined;
        customLiClass?: string | undefined;
    };
    events: {
        click: MouseEvent;
        blur: FocusEvent;
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
export type TabHeadItemProps = typeof __propDef.props;
export type TabHeadItemEvents = typeof __propDef.events;
export type TabHeadItemSlots = typeof __propDef.slots;
export default class TabHeadItem extends SvelteComponentTyped<TabHeadItemProps, TabHeadItemEvents, TabHeadItemSlots> {
}
export {};
