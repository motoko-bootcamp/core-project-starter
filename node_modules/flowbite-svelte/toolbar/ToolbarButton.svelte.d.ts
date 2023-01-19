import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        color?: "gray" | "red" | "yellow" | "green" | "indigo" | "default" | "purple" | "pink" | "blue" | undefined;
        name?: string | undefined;
        ariaLabel?: string | undefined;
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
export type ToolbarButtonProps = typeof __propDef.props;
export type ToolbarButtonEvents = typeof __propDef.events;
export type ToolbarButtonSlots = typeof __propDef.slots;
export default class ToolbarButton extends SvelteComponentTyped<ToolbarButtonProps, ToolbarButtonEvents, ToolbarButtonSlots> {
}
export {};
