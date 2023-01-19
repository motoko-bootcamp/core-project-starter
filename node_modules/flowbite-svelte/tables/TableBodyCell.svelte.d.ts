import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        tdClass?: string | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TableBodyCellProps = typeof __propDef.props;
export type TableBodyCellEvents = typeof __propDef.events;
export type TableBodyCellSlots = typeof __propDef.slots;
export default class TableBodyCell extends SvelteComponentTyped<TableBodyCellProps, TableBodyCellEvents, TableBodyCellSlots> {
}
export {};
