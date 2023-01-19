import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        title: string;
        date: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        icon: {};
        default: {};
    };
};
export type TimelineItemVerticalProps = typeof __propDef.props;
export type TimelineItemVerticalEvents = typeof __propDef.events;
export type TimelineItemVerticalSlots = typeof __propDef.slots;
export default class TimelineItemVertical extends SvelteComponentTyped<TimelineItemVerticalProps, TimelineItemVerticalEvents, TimelineItemVerticalSlots> {
}
export {};
