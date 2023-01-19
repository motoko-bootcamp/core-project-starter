import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        href?: string | undefined;
        ariaLabel?: string | undefined;
        aClass?: string | undefined;
        target?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type FooterIconProps = typeof __propDef.props;
export type FooterIconEvents = typeof __propDef.events;
export type FooterIconSlots = typeof __propDef.slots;
export default class FooterIcon extends SvelteComponentTyped<FooterIconProps, FooterIconEvents, FooterIconSlots> {
}
export {};
