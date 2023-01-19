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
export type WidgetPlaceholderProps = typeof __propDef.props;
export type WidgetPlaceholderEvents = typeof __propDef.events;
export type WidgetPlaceholderSlots = typeof __propDef.slots;
export default class WidgetPlaceholder extends SvelteComponentTyped<WidgetPlaceholderProps, WidgetPlaceholderEvents, WidgetPlaceholderSlots> {
}
export {};
