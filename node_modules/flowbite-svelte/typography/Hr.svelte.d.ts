import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        icon?: boolean | undefined;
        width?: string | undefined;
        height?: string | undefined;
        divClass?: string | undefined;
        hrClass?: string | undefined;
        iconDivClass?: string | undefined;
        textSpanClass?: string | undefined;
        middleBgColor?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type HrProps = typeof __propDef.props;
export type HrEvents = typeof __propDef.events;
export type HrSlots = typeof __propDef.slots;
export default class Hr extends SvelteComponentTyped<HrProps, HrEvents, HrSlots> {
}
export {};
