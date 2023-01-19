import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        home?: boolean | undefined;
        href?: string | undefined;
        linkClass?: string | undefined;
        spanClass?: string | undefined;
        homeClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        icon: {};
        default: {};
    };
};
export type BreadcrumbItemProps = typeof __propDef.props;
export type BreadcrumbItemEvents = typeof __propDef.events;
export type BreadcrumbItemSlots = typeof __propDef.slots;
export default class BreadcrumbItem extends SvelteComponentTyped<BreadcrumbItemProps, BreadcrumbItemEvents, BreadcrumbItemSlots> {
}
export {};
