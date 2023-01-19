import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        range?: boolean | undefined;
        datepickerButtons?: boolean | undefined;
        datepickerFormat?: string | undefined;
        datepickerOrientation?: string | undefined;
        datepickerTitle?: string | undefined;
        attribute?: string | undefined;
        inputClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type DatepickerProps = typeof __propDef.props;
export type DatepickerEvents = typeof __propDef.events;
export type DatepickerSlots = typeof __propDef.slots;
export default class Datepicker extends SvelteComponentTyped<DatepickerProps, DatepickerEvents, DatepickerSlots> {
}
export {};
