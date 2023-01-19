import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        title?: string | undefined;
        date?: string | undefined;
        customDiv?: string | undefined;
        customTimeClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        icon: {};
    };
};
export type TimelineItemProps = typeof __propDef.props;
export type TimelineItemEvents = typeof __propDef.events;
export type TimelineItemSlots = typeof __propDef.slots;
export default class TimelineItem extends SvelteComponentTyped<TimelineItemProps, TimelineItemEvents, TimelineItemSlots> {
}
export {};
