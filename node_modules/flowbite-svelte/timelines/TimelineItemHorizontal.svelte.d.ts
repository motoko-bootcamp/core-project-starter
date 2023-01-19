import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        title: string;
        date: string;
        href: string;
        text: string;
        linkname: string;
        icon: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TimelineItemHorizontalProps = typeof __propDef.props;
export type TimelineItemHorizontalEvents = typeof __propDef.events;
export type TimelineItemHorizontalSlots = typeof __propDef.slots;
export default class TimelineItemHorizontal extends SvelteComponentTyped<TimelineItemHorizontalProps, TimelineItemHorizontalEvents, TimelineItemHorizontalSlots> {
}
export {};
