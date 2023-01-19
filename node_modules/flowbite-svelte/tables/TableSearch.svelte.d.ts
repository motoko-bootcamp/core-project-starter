import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
        inputValue?: string | undefined;
        striped?: boolean | undefined;
        hoverable?: boolean | undefined;
        placeholder?: string | undefined;
        color?: "red" | "yellow" | "green" | "default" | "purple" | "blue" | "custom" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TableSearchProps = typeof __propDef.props;
export type TableSearchEvents = typeof __propDef.events;
export type TableSearchSlots = typeof __propDef.slots;
export default class TableSearch extends SvelteComponentTyped<TableSearchProps, TableSearchEvents, TableSearchSlots> {
}
export {};
