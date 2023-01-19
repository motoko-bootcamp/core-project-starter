import { SvelteComponentTyped } from "svelte";
import type { Placement } from '@popperjs/core';
declare const __propDef: {
    props: {
        [x: string]: any;
        name?: string | undefined;
        tooltip: Placement | 'none';
        pill?: boolean | undefined;
        textOutside?: boolean | undefined;
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
export type SpeedDialButtonProps = typeof __propDef.props;
export type SpeedDialButtonEvents = typeof __propDef.events;
export type SpeedDialButtonSlots = typeof __propDef.slots;
export default class SpeedDialButton extends SvelteComponentTyped<SpeedDialButtonProps, SpeedDialButtonEvents, SpeedDialButtonSlots> {
}
export {};
