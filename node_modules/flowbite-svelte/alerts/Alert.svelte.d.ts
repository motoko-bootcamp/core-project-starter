import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        dismissable?: boolean | undefined;
        accent?: boolean | undefined;
    };
    events: {
        click: MouseEvent;
        change: CustomEvent<any>;
        keydown: CustomEvent<any>;
        keyup: CustomEvent<any>;
        focus: CustomEvent<any>;
        blur: CustomEvent<any>;
        mouseenter: CustomEvent<any>;
        mouseleave: CustomEvent<any>;
        close: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        icon: {};
        default: {};
        extra: {};
    };
};
export type AlertProps = typeof __propDef.props;
export type AlertEvents = typeof __propDef.events;
export type AlertSlots = typeof __propDef.slots;
export default class Alert extends SvelteComponentTyped<AlertProps, AlertEvents, AlertSlots> {
}
export {};
