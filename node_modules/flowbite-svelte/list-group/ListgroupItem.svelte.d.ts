import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        active?: boolean | undefined;
        current?: boolean | undefined;
        disabled?: boolean | undefined;
        href?: string | undefined;
    };
    events: {
        blur: FocusEvent;
        change: Event;
        click: CustomEvent<any>;
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
        default: {
            item: SvelteAllProps;
        };
    };
};
export type ListgroupItemProps = typeof __propDef.props;
export type ListgroupItemEvents = typeof __propDef.events;
export type ListgroupItemSlots = typeof __propDef.slots;
export default class ListgroupItem extends SvelteComponentTyped<ListgroupItemProps, ListgroupItemEvents, ListgroupItemSlots> {
}
export {};
