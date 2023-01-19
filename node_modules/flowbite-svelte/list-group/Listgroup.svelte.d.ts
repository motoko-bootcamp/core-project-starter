import { SvelteComponentTyped } from "svelte";
import type { ListGroupItemType } from '../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        items?: ListGroupItemType[] | undefined;
        active?: boolean | undefined;
    };
    events: {
        click: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ListgroupProps = typeof __propDef.props;
export type ListgroupEvents = typeof __propDef.events;
export type ListgroupSlots = typeof __propDef.slots;
export default class Listgroup extends SvelteComponentTyped<ListgroupProps, ListgroupEvents, ListgroupSlots> {
}
export {};
