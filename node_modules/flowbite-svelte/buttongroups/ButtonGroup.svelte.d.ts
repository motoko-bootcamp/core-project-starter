import { SvelteComponentTyped } from "svelte";
import type { SizeType } from '../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        size?: SizeType | undefined;
        divClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ButtonGroupProps = typeof __propDef.props;
export type ButtonGroupEvents = typeof __propDef.events;
export type ButtonGroupSlots = typeof __propDef.slots;
export default class ButtonGroup extends SvelteComponentTyped<ButtonGroupProps, ButtonGroupEvents, ButtonGroupSlots> {
}
export {};
