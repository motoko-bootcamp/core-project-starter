import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        olClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TimelineHorizontalProps = typeof __propDef.props;
export type TimelineHorizontalEvents = typeof __propDef.events;
export type TimelineHorizontalSlots = typeof __propDef.slots;
export default class TimelineHorizontal extends SvelteComponentTyped<TimelineHorizontalProps, TimelineHorizontalEvents, TimelineHorizontalSlots> {
}
export {};
