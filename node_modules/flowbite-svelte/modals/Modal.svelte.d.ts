import { SvelteComponentTyped } from "svelte";
import type { SizeType } from '../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        open?: boolean | undefined;
        title?: string | undefined;
        size?: SizeType | undefined;
        placement?: "top-left" | "top-center" | "top-right" | "center-left" | "center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right" | undefined;
        autoclose?: boolean | undefined;
        permanent?: boolean | undefined;
        backdropClasses?: string | undefined;
    };
    events: {
        wheel: WheelEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        header: {};
        default: {};
        footer: {};
    };
};
export type ModalProps = typeof __propDef.props;
export type ModalEvents = typeof __propDef.events;
export type ModalSlots = typeof __propDef.slots;
export default class Modal extends SvelteComponentTyped<ModalProps, ModalEvents, ModalSlots> {
}
export {};
