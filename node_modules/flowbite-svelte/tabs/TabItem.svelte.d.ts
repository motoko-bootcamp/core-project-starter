import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        open?: boolean | undefined;
        title?: string | undefined;
        activeClasses?: string | undefined;
        inactiveClasses?: string | undefined;
        defaultClass?: string | undefined;
    };
    events: {
        blur: FocusEvent;
        click: MouseEvent;
        contextmenu: MouseEvent;
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
        title: {};
        default: {};
    };
};
export type TabItemProps = typeof __propDef.props;
export type TabItemEvents = typeof __propDef.events;
export type TabItemSlots = typeof __propDef.slots;
export default class TabItem extends SvelteComponentTyped<TabItemProps, TabItemEvents, TabItemSlots> {
}
export {};
