import { SvelteComponentTyped } from "svelte";
import type { TransitionTypes, TransitionParamTypes } from '../types';
declare const __propDef: {
    props: {
        showIndicators?: boolean | undefined;
        showCaptions?: boolean | undefined;
        showThumbs?: boolean | undefined;
        images: any[];
        slideControls?: boolean | undefined;
        transitionType?: TransitionTypes | undefined;
        transitionParams?: TransitionParamTypes | undefined;
        loop?: boolean | undefined;
        duration?: number | undefined;
        divClass?: string | undefined;
        indicatorDivClass?: string | undefined;
        captionClass?: string | undefined;
        indicatorClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        previous: {};
        next: {};
    };
};
export type CarouselTransitionProps = typeof __propDef.props;
export type CarouselTransitionEvents = typeof __propDef.events;
export type CarouselTransitionSlots = typeof __propDef.slots;
export default class CarouselTransition extends SvelteComponentTyped<CarouselTransitionProps, CarouselTransitionEvents, CarouselTransitionSlots> {
}
export {};
