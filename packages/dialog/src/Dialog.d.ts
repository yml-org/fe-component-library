import { CSSResultArray, PropertyValues, SpectrumElement, TemplateResult } from '@spectrum-web-components/base';
import '@spectrum-web-components/divider/sp-divider.js';
import '@spectrum-web-components/button/sp-close-button.js';
import '@spectrum-web-components/button-group/sp-button-group.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-alert.js';
import type { CloseButton } from '@spectrum-web-components/button';
declare const Dialog_base: typeof SpectrumElement & {
    new (...args: any[]): import("@spectrum-web-components/shared").SlotPresenceObservingInterface;
    prototype: import("@spectrum-web-components/shared").SlotPresenceObservingInterface;
};
/**
 * @element sp-dialog
 *
 * @slot hero - Accepts a hero image to display at the top of the dialog
 * @slot heading - Acts as the heading of the dialog. This should be an actual heading tag `<h1-6 />`
 * @slot - Content not addressed to a specific slot will be interpreted as the main content of the dialog
 * @slot footer - Content addressed to the `footer` will be placed below the main content and to the side of any `[slot='button']` content
 * @slot button - Button elements addressed to this slot may be placed below the content when not delivered in a fullscreen mode
 * @fires close - Announces that the dialog has been closed.
 */
export declare class Dialog extends Dialog_base {
    static get styles(): CSSResultArray;
    closeButton?: CloseButton;
    private contentElement;
    error: boolean;
    dismissable: boolean;
    protected get hasFooter(): boolean;
    protected get hasButtons(): boolean;
    protected get hasHero(): boolean;
    noDivider: boolean;
    mode?: 'fullscreen' | 'fullscreenTakeover';
    size?: 's' | 'm' | 'l';
    close(): void;
    protected renderHero(): TemplateResult;
    protected renderHeading(): TemplateResult;
    protected renderContent(): TemplateResult;
    protected renderFooter(): TemplateResult;
    protected renderButtons(): TemplateResult;
    protected renderDismiss(): TemplateResult;
    protected render(): TemplateResult;
    shouldManageTabOrderForScrolling: () => void;
    protected shouldUpdate(changes: PropertyValues): boolean;
    protected firstUpdated(changes: PropertyValues): void;
    static instanceCount: number;
    private labelledbyId;
    private conditionLabelledby?;
    private conditionDescribedby?;
    private onHeadingSlotchange;
    private describedbyId;
    protected onContentSlotChange({ target, }: Event & {
        target: HTMLSlotElement;
    }): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
export {};
