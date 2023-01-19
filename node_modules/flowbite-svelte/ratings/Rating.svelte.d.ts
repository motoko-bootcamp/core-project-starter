import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
        size?: string | undefined;
        total?: number | undefined;
        rating?: number | undefined;
        ceil?: boolean | undefined;
        count?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        ratingUp: {};
        ratingDown: {};
        text: {};
    };
};
export type RatingProps = typeof __propDef.props;
export type RatingEvents = typeof __propDef.events;
export type RatingSlots = typeof __propDef.slots;
export default class Rating extends SvelteComponentTyped<RatingProps, RatingEvents, RatingSlots> {
}
export {};
