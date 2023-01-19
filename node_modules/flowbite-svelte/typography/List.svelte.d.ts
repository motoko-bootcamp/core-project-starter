import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        tag?: "dl" | "ol" | "ul" | undefined;
        list?: "none" | "disc" | "decimal" | undefined;
        position?: "inside" | "outside" | undefined;
        color?: string | undefined;
        olClass?: string | undefined;
        ulClass?: string | undefined;
        dlClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ListProps = typeof __propDef.props;
export type ListEvents = typeof __propDef.events;
export type ListSlots = typeof __propDef.slots;
export default class List extends SvelteComponentTyped<ListProps, ListEvents, ListSlots> {
}
export {};
