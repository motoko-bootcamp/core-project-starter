import { SvelteComponentTyped } from "svelte";
import type { LinkType } from '../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        items?: (LinkType & {
            [propName: string]: any;
        })[] | undefined;
        full?: boolean | undefined;
        open?: boolean | undefined;
    };
    events: {
        show: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        extra: {};
    };
};
export type MegaMenuProps = typeof __propDef.props;
export type MegaMenuEvents = typeof __propDef.events;
export type MegaMenuSlots = typeof __propDef.slots;
export default class MegaMenu extends SvelteComponentTyped<MegaMenuProps, MegaMenuEvents, MegaMenuSlots> {
}
export {};
