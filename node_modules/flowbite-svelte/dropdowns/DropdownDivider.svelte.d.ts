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
export type DropdownDividerProps = typeof __propDef.props;
export type DropdownDividerEvents = typeof __propDef.events;
export type DropdownDividerSlots = typeof __propDef.slots;
export default class DropdownDivider extends SvelteComponentTyped<DropdownDividerProps, DropdownDividerEvents, DropdownDividerSlots> {
}
export {};
