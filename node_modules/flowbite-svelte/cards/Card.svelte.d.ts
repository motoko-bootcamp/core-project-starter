import { SvelteComponentTyped } from "svelte";
import type { SizeType } from '../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        href?: string | undefined;
        horizontal?: boolean | undefined;
        reverse?: boolean | undefined;
        img?: string | undefined;
        padding?: "none" | "sm" | "md" | "lg" | "xl" | undefined;
        size?: SizeType | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type CardProps = typeof __propDef.props;
export type CardEvents = typeof __propDef.events;
export type CardSlots = typeof __propDef.slots;
export default class Card extends SvelteComponentTyped<CardProps, CardEvents, CardSlots> {
}
export {};
