import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
        divider?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type DropdownHeaderProps = typeof __propDef.props;
export type DropdownHeaderEvents = typeof __propDef.events;
export type DropdownHeaderSlots = typeof __propDef.slots;
export default class DropdownHeader extends SvelteComponentTyped<DropdownHeaderProps, DropdownHeaderEvents, DropdownHeaderSlots> {
}
export {};
