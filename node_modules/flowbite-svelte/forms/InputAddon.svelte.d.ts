import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        size?: 'sm' | 'md' | 'lg' | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type InputAddonProps = typeof __propDef.props;
export type InputAddonEvents = typeof __propDef.events;
export type InputAddonSlots = typeof __propDef.slots;
export default class InputAddon extends SvelteComponentTyped<InputAddonProps, InputAddonEvents, InputAddonSlots> {
}
export {};
