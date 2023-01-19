import type { Instance as PopperInstance } from '@popperjs/core';
import type { TooltipOptions } from './types';
import { TooltipInterface } from './interface';
declare class Tooltip implements TooltipInterface {
    _targetEl: HTMLElement | null;
    _triggerEl: HTMLElement | null;
    _options: TooltipOptions;
    _popperInstance: PopperInstance;
    constructor(targetEl?: HTMLElement | null, triggerEl?: HTMLElement | null, options?: TooltipOptions);
    _init(): void;
    private _createPopperInstance;
    private _getTriggerEvents;
    show(): void;
    hide(): void;
}
export declare function initTooltips(): void;
export default Tooltip;
//# sourceMappingURL=index.d.ts.map