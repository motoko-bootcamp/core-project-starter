import { SvelteComponentTyped } from "svelte";
import type { Placement } from '@popperjs/core';
export interface SpeedCtxType {
    pill: boolean;
    tooltip: Placement | 'none';
    textOutside: boolean;
}
declare const __propDef: {
    props: {
        [x: string]: any;
        defaultClass?: string | undefined;
        placement?: Placement | undefined;
        pill?: boolean | undefined;
        tooltip?: "none" | Placement | undefined;
        trigger?: "click" | "hover" | undefined;
        textOutside?: boolean | undefined;
        id?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        icon: {};
        default: {};
    };
};
export type SpeedDialProps = typeof __propDef.props;
export type SpeedDialEvents = typeof __propDef.events;
export type SpeedDialSlots = typeof __propDef.slots;
export default class SpeedDial extends SvelteComponentTyped<SpeedDialProps, SpeedDialEvents, SpeedDialSlots> {
}
export {};
