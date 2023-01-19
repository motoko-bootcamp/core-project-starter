import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        value?: string | undefined;
        files?: FileList | undefined;
        defaultClass?: string | undefined;
    };
    events: {
        focus: FocusEvent;
        blur: FocusEvent;
        mouseenter: MouseEvent;
        mouseleave: MouseEvent;
        mouseover: MouseEvent;
        dragenter: DragEvent;
        dragleave: DragEvent;
        dragover: DragEvent;
        drop: DragEvent;
        change: Event;
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type DropzoneProps = typeof __propDef.props;
export type DropzoneEvents = typeof __propDef.events;
export type DropzoneSlots = typeof __propDef.slots;
export default class Dropzone extends SvelteComponentTyped<DropzoneProps, DropzoneEvents, DropzoneSlots> {
}
export {};
