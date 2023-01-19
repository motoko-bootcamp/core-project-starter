import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        size?: string | undefined;
        color?: string | undefined;
        variation?: "solid" | "outline" | undefined;
        ariaLabel?: string | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ChevronLeftProps = typeof __propDef.props;
export type ChevronLeftEvents = typeof __propDef.events;
export type ChevronLeftSlots = typeof __propDef.slots;
export default class ChevronLeft extends SvelteComponentTyped<ChevronLeftProps, ChevronLeftEvents, ChevronLeftSlots> {
}
export {};
