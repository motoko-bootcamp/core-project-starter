import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        tabStyle?: "default" | "custom" | "icon" | "pill" | "underline" | "full" | undefined;
        customDivClass?: string | undefined;
        customUlClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TabHeadProps = typeof __propDef.props;
export type TabHeadEvents = typeof __propDef.events;
export type TabHeadSlots = typeof __propDef.slots;
export default class TabHead extends SvelteComponentTyped<TabHeadProps, TabHeadEvents, TabHeadSlots> {
}
export {};
