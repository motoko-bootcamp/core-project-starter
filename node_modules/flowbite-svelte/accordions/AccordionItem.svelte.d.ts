import { SvelteComponentTyped } from "svelte";
import type { TransitionTypes, TransitionParamTypes } from '../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        open?: boolean | undefined;
        activeClasses?: string | undefined;
        inactiveClasses?: string | undefined;
        defaultClass?: string | undefined;
        transitionType?: TransitionTypes | undefined;
        transitionParams?: TransitionParamTypes | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        header: {};
        arrowup: {};
        arrowdown: {};
        default: {};
    };
};
export type AccordionItemProps = typeof __propDef.props;
export type AccordionItemEvents = typeof __propDef.events;
export type AccordionItemSlots = typeof __propDef.slots;
export default class AccordionItem extends SvelteComponentTyped<AccordionItemProps, AccordionItemEvents, AccordionItemSlots> {
}
export {};
