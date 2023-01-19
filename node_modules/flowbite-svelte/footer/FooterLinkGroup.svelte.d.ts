import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        ulClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type FooterLinkGroupProps = typeof __propDef.props;
export type FooterLinkGroupEvents = typeof __propDef.events;
export type FooterLinkGroupSlots = typeof __propDef.slots;
export default class FooterLinkGroup extends SvelteComponentTyped<FooterLinkGroupProps, FooterLinkGroupEvents, FooterLinkGroupSlots> {
}
export {};
