import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        submit: SubmitEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SimpleSearchProps = typeof __propDef.props;
export type SimpleSearchEvents = typeof __propDef.events;
export type SimpleSearchSlots = typeof __propDef.slots;
export default class SimpleSearch extends SvelteComponentTyped<SimpleSearchProps, SimpleSearchEvents, SimpleSearchSlots> {
}
export {};
