import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TestimonialPlaceholderProps = typeof __propDef.props;
export type TestimonialPlaceholderEvents = typeof __propDef.events;
export type TestimonialPlaceholderSlots = typeof __propDef.slots;
export default class TestimonialPlaceholder extends SvelteComponentTyped<TestimonialPlaceholderProps, TestimonialPlaceholderEvents, TestimonialPlaceholderSlots> {
}
export {};
