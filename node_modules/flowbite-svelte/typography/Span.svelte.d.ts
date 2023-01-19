import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        italic?: boolean | undefined;
        underline?: boolean | undefined;
        linethrough?: boolean | undefined;
        uppercase?: boolean | undefined;
        gradient?: boolean | undefined;
        highlight?: boolean | undefined;
        highlightClass?: string | undefined;
        decorationClass?: string | undefined;
        gradientClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type SpanProps = typeof __propDef.props;
export type SpanEvents = typeof __propDef.events;
export type SpanSlots = typeof __propDef.slots;
export default class Span extends SvelteComponentTyped<SpanProps, SpanEvents, SpanSlots> {
}
export {};
