import { SvelteComponentTyped } from "svelte";
import type { Placement } from '@popperjs/core';
declare const __propDef: {
    props: {
        [x: string]: any;
        activeContent?: boolean | undefined;
        arrow?: boolean | undefined;
        offset?: number | undefined;
        placement?: Placement | undefined;
        trigger?: "click" | "hover" | undefined;
        triggeredBy?: string | undefined;
        strategy?: "fixed" | "absolute" | undefined;
        open?: boolean | undefined;
        yOnly?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type PopperProps = typeof __propDef.props;
export type PopperEvents = typeof __propDef.events;
export type PopperSlots = typeof __propDef.slots;
export default class Popper extends SvelteComponentTyped<PopperProps, PopperEvents, PopperSlots> {
}
export {};
