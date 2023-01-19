import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ListPlaceholderProps = typeof __propDef.props;
export type ListPlaceholderEvents = typeof __propDef.events;
export type ListPlaceholderSlots = typeof __propDef.slots;
export default class ListPlaceholder extends SvelteComponentTyped<ListPlaceholderProps, ListPlaceholderEvents, ListPlaceholderSlots> {
}
export {};
