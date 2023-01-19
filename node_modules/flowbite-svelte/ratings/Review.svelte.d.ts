import { SvelteComponentTyped } from "svelte";
import type { ReviewType } from '../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        review: ReviewType;
        articleClass?: string | undefined;
        divClass?: string | undefined;
        imgClass?: string | undefined;
        ulClass?: string | undefined;
        liClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        address: {};
        item1: {};
        item2: {};
        item3: {};
        default: {};
    };
};
export type ReviewProps = typeof __propDef.props;
export type ReviewEvents = typeof __propDef.events;
export type ReviewSlots = typeof __propDef.slots;
export default class Review extends SvelteComponentTyped<ReviewProps, ReviewEvents, ReviewSlots> {
}
export {};
