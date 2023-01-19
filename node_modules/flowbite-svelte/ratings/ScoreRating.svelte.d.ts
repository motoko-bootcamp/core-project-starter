import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        ratings?: {
            label: string;
            rating: number;
        }[] | undefined;
        ratings2?: {
            label: string;
            rating: number;
        }[] | undefined;
        headerLabel: {
            desc1: string;
            desc2: string;
            desc3: string;
            link: {
                label: string;
                url: string;
            };
        };
        desc1Class?: string | undefined;
        desc2Class?: string | undefined;
        desc3spanClass?: string | undefined;
        desc3pClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ScoreRatingProps = typeof __propDef.props;
export type ScoreRatingEvents = typeof __propDef.events;
export type ScoreRatingSlots = typeof __propDef.slots;
export default class ScoreRating extends SvelteComponentTyped<ScoreRatingProps, ScoreRatingEvents, ScoreRatingSlots> {
}
export {};
