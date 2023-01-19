import { SvelteComponentTyped } from "svelte";
import type { ActivityType } from '../types';
declare const __propDef: {
    props: {
        activities: ActivityType[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ActivityItemProps = typeof __propDef.props;
export type ActivityItemEvents = typeof __propDef.events;
export type ActivityItemSlots = typeof __propDef.slots;
export default class ActivityItem extends SvelteComponentTyped<ActivityItemProps, ActivityItemEvents, ActivityItemSlots> {
}
export {};
