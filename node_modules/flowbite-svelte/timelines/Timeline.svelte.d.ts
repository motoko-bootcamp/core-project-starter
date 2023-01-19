import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        customClass?: string | undefined;
        order?: "default" | "custom" | "group" | "horizontal" | "vertical" | "activity" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TimelineProps = typeof __propDef.props;
export type TimelineEvents = typeof __propDef.events;
export type TimelineSlots = typeof __propDef.slots;
export default class Timeline extends SvelteComponentTyped<TimelineProps, TimelineEvents, TimelineSlots> {
}
export {};
