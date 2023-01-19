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
export type TextPlaceholderProps = typeof __propDef.props;
export type TextPlaceholderEvents = typeof __propDef.events;
export type TextPlaceholderSlots = typeof __propDef.slots;
export default class TextPlaceholder extends SvelteComponentTyped<TextPlaceholderProps, TextPlaceholderEvents, TextPlaceholderSlots> {
}
export {};
