import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        customClass?: string | undefined;
        footerType?: "default" | "custom" | "sitemap" | "logo" | "socialmedia" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type FooterProps = typeof __propDef.props;
export type FooterEvents = typeof __propDef.events;
export type FooterSlots = typeof __propDef.slots;
export default class Footer extends SvelteComponentTyped<FooterProps, FooterEvents, FooterSlots> {
}
export {};
