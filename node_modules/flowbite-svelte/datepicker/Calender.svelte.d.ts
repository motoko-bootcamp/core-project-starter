/** @typedef {typeof __propDef.props}  CalenderProps */
/** @typedef {typeof __propDef.events}  CalenderEvents */
/** @typedef {typeof __propDef.slots}  CalenderSlots */
export default class Calender extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CalenderProps = typeof __propDef.props;
export type CalenderEvents = typeof __propDef.events;
export type CalenderSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
