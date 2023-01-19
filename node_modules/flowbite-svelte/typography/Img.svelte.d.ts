import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        caption?: string | undefined;
        src?: string | undefined;
        srcset?: string | undefined;
        size?: string | undefined;
        alignment?: string | undefined;
        imgClass?: string | undefined;
        figClass?: string | undefined;
        alt?: string | undefined;
        effect?: string | undefined;
        captionClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ImgProps = typeof __propDef.props;
export type ImgEvents = typeof __propDef.events;
export type ImgSlots = typeof __propDef.slots;
export default class Img extends SvelteComponentTyped<ImgProps, ImgEvents, ImgSlots> {
}
export {};
