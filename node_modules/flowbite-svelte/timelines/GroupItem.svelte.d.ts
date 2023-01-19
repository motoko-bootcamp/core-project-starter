import { SvelteComponentTyped } from "svelte";
import type { GroupTimelineType } from '../types';
declare const __propDef: {
    props: {
        timelines: GroupTimelineType[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type GroupItemProps = typeof __propDef.props;
export type GroupItemEvents = typeof __propDef.events;
export type GroupItemSlots = typeof __propDef.slots;
export default class GroupItem extends SvelteComponentTyped<GroupItemProps, GroupItemEvents, GroupItemSlots> {
}
export {};
