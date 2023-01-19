import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        color?: "gray" | "red" | "yellow" | "green" | "indigo" | "default" | "purple" | "pink" | "blue" | "dark" | undefined;
        name?: string | undefined;
        size?: "xs" | "sm" | "md" | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type CloseButtonProps = typeof __propDef.props;
export type CloseButtonEvents = typeof __propDef.events;
export type CloseButtonSlots = typeof __propDef.slots;
export default class CloseButton extends SvelteComponentTyped<CloseButtonProps, CloseButtonEvents, CloseButtonSlots> {
}
export {};
