import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        liClass?: string | undefined;
        aClass?: string | undefined;
        href?: string | undefined;
        target?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type FooterLinkProps = typeof __propDef.props;
export type FooterLinkEvents = typeof __propDef.events;
export type FooterLinkSlots = typeof __propDef.slots;
export default class FooterLink extends SvelteComponentTyped<FooterLinkProps, FooterLinkEvents, FooterLinkSlots> {
}
export {};
