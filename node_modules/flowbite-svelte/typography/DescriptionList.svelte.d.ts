import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        tag: 'dt' | 'dd';
        dtClass?: string | undefined;
        ddClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type DescriptionListProps = typeof __propDef.props;
export type DescriptionListEvents = typeof __propDef.events;
export type DescriptionListSlots = typeof __propDef.slots;
export default class DescriptionList extends SvelteComponentTyped<DescriptionListProps, DescriptionListEvents, DescriptionListSlots> {
}
export {};
