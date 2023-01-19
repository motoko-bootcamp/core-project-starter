import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        tableBodyClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TableBodyProps = typeof __propDef.props;
export type TableBodyEvents = typeof __propDef.events;
export type TableBodySlots = typeof __propDef.slots;
export default class TableBody extends SvelteComponentTyped<TableBodyProps, TableBodyEvents, TableBodySlots> {
}
export {};
