import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        ceil?: boolean | undefined;
        helpfullink?: string | undefined;
        abuselink?: string | undefined;
        comment: {
            id: string;
            user: {
                name: string;
                img: {
                    src: string;
                    alt: string;
                };
                joined: string;
            };
            total: number;
            rating: number;
            heading: string;
            address: string;
            datetime: string;
        };
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        ratingUp: {};
        ratingDown: {};
        default: {};
        evaluation: {};
    };
};
export type RatingCommentProps = typeof __propDef.props;
export type RatingCommentEvents = typeof __propDef.events;
export type RatingCommentSlots = typeof __propDef.slots;
export default class RatingComment extends SvelteComponentTyped<RatingCommentProps, RatingCommentEvents, RatingCommentSlots> {
}
export {};
