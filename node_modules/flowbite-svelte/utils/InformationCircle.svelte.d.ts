import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        size?: string | undefined;
        color?: string | undefined;
        variation?: "solid" | "outline" | undefined;
        ariaLabel?: string | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type InformationCircleProps = typeof __propDef.props;
export type InformationCircleEvents = typeof __propDef.events;
export type InformationCircleSlots = typeof __propDef.slots;
export default class InformationCircle extends SvelteComponentTyped<InformationCircleProps, InformationCircleEvents, InformationCircleSlots> {
}
export {};
