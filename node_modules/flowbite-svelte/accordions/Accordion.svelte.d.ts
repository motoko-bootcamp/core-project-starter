import { SvelteComponentTyped } from "svelte";
import { type Writable } from 'svelte/store';
export interface AccordionCtxType {
    flush: boolean;
    activeClasses: string;
    inactiveClasses: string;
    selected?: Writable<object>;
}
declare const __propDef: {
    props: {
        [x: string]: any;
        multiple?: boolean | undefined;
        flush?: boolean | undefined;
        activeClasses?: string | undefined;
        inactiveClasses?: string | undefined;
        defaultClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type AccordionProps = typeof __propDef.props;
export type AccordionEvents = typeof __propDef.events;
export type AccordionSlots = typeof __propDef.slots;
export default class Accordion extends SvelteComponentTyped<AccordionProps, AccordionEvents, AccordionSlots> {
}
export {};
