import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        id?: string | undefined;
        labelClass?: string | undefined;
        iconClass?: string | undefined;
        iconDivClass?: string | undefined;
        inputClass?: string | undefined;
        btnClass?: string | undefined;
        voiceBtnClass?: string | undefined;
        voiceIconClass?: string | undefined;
        placeholder?: string | undefined;
    };
    events: {
        submit: SubmitEvent;
        handleVoiceBtn: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type VoiceSearchProps = typeof __propDef.props;
export type VoiceSearchEvents = typeof __propDef.events;
export type VoiceSearchSlots = typeof __propDef.slots;
export default class VoiceSearch extends SvelteComponentTyped<VoiceSearchProps, VoiceSearchEvents, VoiceSearchSlots> {
}
export {};
