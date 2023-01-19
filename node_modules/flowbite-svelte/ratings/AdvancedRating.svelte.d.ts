import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        ratings?: {
            label: string;
            rating: number;
        }[] | undefined;
        divClass?: string | undefined;
        labelClass?: string | undefined;
        ratingDivClass?: string | undefined;
        ratingClass?: string | undefined;
        rightLabelClass?: string | undefined;
        unit?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        rating: {};
        globalText: {};
    };
};
export type AdvancedRatingProps = typeof __propDef.props;
export type AdvancedRatingEvents = typeof __propDef.events;
export type AdvancedRatingSlots = typeof __propDef.slots;
export default class AdvancedRating extends SvelteComponentTyped<AdvancedRatingProps, AdvancedRatingEvents, AdvancedRatingSlots> {
}
export {};
