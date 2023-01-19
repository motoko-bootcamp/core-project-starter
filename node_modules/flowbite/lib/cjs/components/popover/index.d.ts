import type { Instance as PopperInstance } from '@popperjs/core';
import type { PopoverOptions } from './types';
import { PopoverInterface } from './interface';
declare class Popover implements PopoverInterface {
    _targetEl: HTMLElement;
    _triggerEl: HTMLElement;
    _options: PopoverOptions;
    _popperInstance: PopperInstance;
    constructor(targetEl?: HTMLElement | null, triggerEl?: HTMLElement | null, options?: PopoverOptions);
    _init(): void;
    _createPopperInstance(): PopperInstance;
    _getTriggerEvents(): {
        showEvents: string[];
        hideEvents: string[];
    };
    show(): void;
    hide(): void;
}
export declare function initPopovers(): void;
export default Popover;
//# sourceMappingURL=index.d.ts.map