import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        value?: string | undefined;
        files?: FileList | undefined;
        inputClass?: string | undefined;
    };
    events: {
        change: Event;
        keyup: KeyboardEvent;
        keydown: KeyboardEvent;
        keypress: KeyboardEvent;
        focus: FocusEvent;
        blur: FocusEvent;
        click: MouseEvent;
        mouseover: MouseEvent;
        mouseenter: MouseEvent;
        mouseleave: MouseEvent;
        paste: ClipboardEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FileuploadProps = typeof __propDef.props;
export type FileuploadEvents = typeof __propDef.events;
export type FileuploadSlots = typeof __propDef.slots;
export default class Fileupload extends SvelteComponentTyped<FileuploadProps, FileuploadEvents, FileuploadSlots> {
}
export {};
