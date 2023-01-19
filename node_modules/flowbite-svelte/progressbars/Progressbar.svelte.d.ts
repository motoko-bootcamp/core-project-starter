import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        progress?: string | undefined;
        size?: string | undefined;
        labelInside?: boolean | undefined;
        labelOutside?: string | undefined;
        color?: "gray" | "red" | "yellow" | "green" | "indigo" | "purple" | "blue" | undefined;
        labelInsideClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ProgressbarProps = typeof __propDef.props;
export type ProgressbarEvents = typeof __propDef.events;
export type ProgressbarSlots = typeof __propDef.slots;
export default class Progressbar extends SvelteComponentTyped<ProgressbarProps, ProgressbarEvents, ProgressbarSlots> {
}
export {};
