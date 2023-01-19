import { SvelteComponentTyped } from "svelte";
import type { SelectOptionType } from '../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        items?: SelectOptionType[] | undefined;
        value: string | number;
        placeholder?: string | undefined;
        underline?: boolean | undefined;
        size?: "sm" | "md" | "lg" | undefined;
        defaultClass?: string | undefined;
        underlineClass?: string | undefined;
    };
    events: {
        change: Event;
        contextmenu: MouseEvent;
        input: Event;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type SelectProps = typeof __propDef.props;
export type SelectEvents = typeof __propDef.events;
export type SelectSlots = typeof __propDef.slots;
export default class Select extends SvelteComponentTyped<SelectProps, SelectEvents, SelectSlots> {
}
export {};
