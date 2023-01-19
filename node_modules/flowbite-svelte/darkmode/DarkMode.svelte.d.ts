import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        btnClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        lightIcon: {};
        darkIcon: {};
    };
};
export type DarkModeProps = typeof __propDef.props;
export type DarkModeEvents = typeof __propDef.events;
export type DarkModeSlots = typeof __propDef.slots;
export default class DarkMode extends SvelteComponentTyped<DarkModeProps, DarkModeEvents, DarkModeSlots> {
}
export {};
