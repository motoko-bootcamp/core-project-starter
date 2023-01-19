import { SvelteComponentTyped } from "svelte";
import { type Writable } from 'svelte/store';
export interface TabCtxType {
    activeClasses: string;
    inactiveClasses: string;
    selected: Writable<HTMLElement>;
}
declare const __propDef: {
    props: {
        [x: string]: any;
        style?: "none" | "pill" | "underline" | "full" | undefined;
        defaultClass?: string | undefined;
        contentClass?: string | undefined;
        divider?: boolean | undefined;
        activeClasses?: string | undefined;
        inactiveClasses?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            style: "none" | "pill" | "underline" | "full";
        };
        divider: {};
    };
};
export type TabsProps = typeof __propDef.props;
export type TabsEvents = typeof __propDef.events;
export type TabsSlots = typeof __propDef.slots;
export default class Tabs extends SvelteComponentTyped<TabsProps, TabsEvents, TabsSlots> {
}
export {};
