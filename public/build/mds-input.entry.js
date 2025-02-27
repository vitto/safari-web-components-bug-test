import { r as registerInstance, a as createEvent, h, e as Host, g as getElement } from './index-0b3d4f97.js';

const mdsInputCss = "\n@tailwind utilities;\n\n/**\n * @prop --mds-input-background: Sets the background-color of the component\n * @prop --mds-input-icon-color: Sets the icon color of the component\n * @prop --mds-input-ring: Sets the box-shadow of the component's input\n * @prop --mds-input-shadow: Sets the box-shadow of the component's input\n * @prop --mds-input-textarea-field-sizing: Sets the height of the textarea automatically, this is an EXPERIMENTAL css property, so it couldn't work in every browser\n * @prop --mds-input-textarea-max-height: Sets the `max-height` of the component when attribute `type` is set to `textarea`\n * @prop --mds-input-textarea-min-height: Sets the `min-height` of the component when attribute `type` is set to `textarea`\n * @prop --mds-input-tip-background: Sets the background color of the tip message at the bottom right of the component\n * @prop --mds-input-variant-color: Sets the variant colors of the component\n */\n\n:host {\n\n  --mds-input-background: rgb(var(--tone-neutral));\n  --mds-input-icon-color: var(--mds-input-variant-color);\n  --mds-input-tip-background: 84 84 84;\n  --mds-input-ring: 0 0 0 1px rgb(var(--mds-input-variant-color) / 0.1);\n  --mds-input-shadow: 0 1px 3px 0 rgb(var(--mds-input-variant-color) / 0.1), 0 1px 2px 0 rgb(var(--mds-input-variant-color) / 0.06);\n  --mds-input-variant-color: 0 0 0;\n  --mds-input-controls-color: rgb(var(--variant-primary-03));\n  --mds-input-controls-border: 2px solid rgb(var(--tone-neutral-09));\n  --mds-input-textarea-min-height: 6rem;\n  --mds-input-textarea-max-height: 16rem;\n  --mds-input-textarea-field-sizing: content;\n  min-height: 1.5rem;\n  font-family: Karla, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  gap: 0.5rem;\n\n  container-type: inline-size;\n  display: flex;\n  position: relative;\n}\n\n:host( [typography=\"detail\"] ) .input{\n\n  min-height: 1.5rem;\n\n  font-family: Karla, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\n\n  font-size: 1rem;\n\n  line-height: 1.5rem;\n\n  -webkit-font-smoothing: antialiased;\n\n  -moz-osx-font-smoothing: grayscale;\n}\n\n:host( [typography=\"snippet\"] ) .input{\n\n  min-height: 1.5rem;\n\n  font-family: 'Roboto Mono', 'Courier New', monospace;\n\n  font-size: 1rem;\n\n  line-height: 1.5rem;\n\n  -webkit-font-smoothing: antialiased;\n\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.input{\n\n  font-family: Karla, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\n\n  font-size: 1rem;\n\n  line-height: 1.5rem;\n\n  -webkit-font-smoothing: antialiased;\n\n  -moz-osx-font-smoothing: grayscale;\n\n  margin: 0rem;\n\n  border-radius: 0.5rem;\n\n  padding-left: 1rem;\n\n  padding-right: 1rem;\n\n  padding-top: 0.75rem;\n\n  padding-bottom: 0.75rem;\n\n  transition-duration: 300ms;\n\n  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n\n    background-color: var(--mds-input-background);\n    border: 0;\n    box-shadow: var(--mds-input-ring), var(--mds-input-shadow);\n    box-sizing: border-box;\n    color: rgb(var(--tone-neutral-02));\n    min-height: 3rem;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    transition-property: background-color, border-color, box-shadow, color, fill, margin, opacity, padding, transform;\n    width: 100%;\n}\n\n.input::-moz-placeholder {\n  color: rgb(var(--tone-neutral-04));\n}\n\n.input::placeholder {\n  color: rgb(var(--tone-neutral-04));\n}\n\n.input::-webkit-outer-spin-button,\n.input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n          appearance: none;\n  display: none;\n  margin: 0;\n}\n\ntextarea.input{\n\n  resize: vertical;\n\n  border-bottom-right-radius: 0;\n\n  field-sizing: var(--mds-input-textarea-field-sizing);\n  max-height: var(--mds-input-textarea-max-height);\n  min-height: var(--mds-input-textarea-min-height);\n  overflow: auto;\n}\n\n.input:focus{\n\n  outline: 2px solid transparent;\n\n  outline-offset: 2px;\n\n  --mds-input-ring: 0 0 0 3px rgb(var(--mds-input-variant-color) / 1);\n  --mds-input-shadow: 0 4px 6px 3px rgb(var(--mds-input-variant-color) / 0.1), 0 2px 4px -1px rgb(var(--mds-input-variant-color) / 0.06);\n}\n\n.input:disabled {\n  background-color: rgb(var(--tone-neutral-10));\n}\n\n.input:disabled::-moz-placeholder {\n  color: rgb(var(--tone-neutral-05));\n}\n\n.input:disabled,\n.input:disabled::placeholder {\n  color: rgb(var(--tone-neutral-05));\n}\n\n.input.has-icon{\n\n  padding-left: 2.75rem;\n}\n\n\n.await,\n.icon{\n\n  left: 0.75rem;\n\n  top: 0.75rem;\n\n  fill: rgb(var(--mds-input-icon-color));\n  position: absolute;\n}\n\n.await {\n  color: rgb(var(--mds-input-icon-color));\n  height: 24px;\n  width: 24px;\n}\n\n.counter {\n  border-left: var(--mds-input-controls-border);\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  position: absolute;\n  right: 0;\n}\n\n.counter-button{\n\n  height: 1.5rem;\n\n  width: 1.75rem;\n\n  border-radius: 0.5rem;\n\n  --mds-button-background: transparent;\n\n  border: 0;\n  fill: var(--mds-input-controls-color);\n  min-height: 0;\n  padding: 0;\n}\n\n.counter-button:hover {\n\n  --mds-button-background: rgb(var(--tone-neutral-09));\n}\n\n.counter .counter-button:first-child {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.counter .counter-button:last-child {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.counter-button--horizontal{\n\n  height: 3rem;\n\n  width: 3rem;\n\n  bottom: 0;\n  position: absolute;\n  top: 0;\n}\n\n.counter-button--decrease {\n  border-bottom-right-radius: 0;\n  border-right: var(--mds-input-controls-border);\n  border-top-right-radius: 0;\n  left: 0;\n}\n\n.counter-button--increase {\n  border-bottom-left-radius: 0;\n  border-left: var(--mds-input-controls-border);\n  border-top-left-radius: 0;\n  right: 0;\n}\n\n.password-toggle-button{\n\n  top: 0.375rem;\n\n  right: 0.375rem;\n\n  fill: var(--mds-input-controls-color);\n  position: absolute;\n}\n\n:host( [type=\"number\"] ) .input{\n\n  padding-right: 2rem;\n}\n\n:host( [type=\"number\"][controls-layout=\"horizontal\"] ) .input{\n\n  padding-left: 3.5rem;\n\n  padding-right: 3.5rem;\n\n  text-align: center;\n}\n\n:host( [type=\"number\"][controls-layout=\"horizontal\"][icon] ) .input{\n\n  padding-left: 6rem;\n\n  text-align: left;\n}\n\n\n:host( [type=\"number\"][controls-layout=\"horizontal\"] ) .icon{\n\n  left: 3.75rem;\n}\n\n:host( [type=\"password\"]) .input{\n\n  padding-right: 2.5rem;\n}\n\n:host( [type=\"password\"]) .input[type=\"password\"]:not(:-moz-placeholder-shown) {\n  font-size: 3rem;\n  max-height: 3rem;\n}\n\n:host( [type=\"password\"]) .input[type=\"password\"]:not(:placeholder-shown) {\n  font-size: 3rem;\n  max-height: 3rem;\n}\n\n:host( [type=\"password\"]) .input[type=\"text\"]:not(:-moz-placeholder-shown){\n\n  min-height: 1.5rem;\n\n  font-family: 'Roboto Mono', 'Courier New', monospace;\n\n  font-size: 1rem;\n\n  line-height: 1.5rem;\n\n  -webkit-font-smoothing: antialiased;\n\n  -moz-osx-font-smoothing: grayscale;\n}\n\n:host( [type=\"password\"]) .input[type=\"text\"]:not(:placeholder-shown){\n\n  min-height: 1.5rem;\n\n  font-family: 'Roboto Mono', 'Courier New', monospace;\n\n  font-size: 1rem;\n\n  line-height: 1.5rem;\n\n  -webkit-font-smoothing: antialiased;\n\n  -moz-osx-font-smoothing: grayscale;\n}\n\n@tailwind utilities;\n\n:host {\n  --mds-input-icon-color: var(--variant-primary-03);\n  --mds-input-variant-color: 0 0 0;\n}\n\n:host(:focus) {\n  --mds-input-variant-color: var(--variant-primary-04);\n}\n\n:host([variant=\"info\"]) {\n  --mds-input-icon-color: var(--status-info-05);\n  --mds-input-tip-background: var(--status-info-05);\n  --mds-input-variant-color: 0 0 0;\n}\n\n:host([variant=\"info\"]:focus) {\n  --mds-input-icon-color: var(--status-info-04);\n  --mds-input-variant-color: var(--status-info-05);\n}\n\n:host([variant=\"success\"]) {\n  --mds-input-icon-color: var(--status-success-05);\n  --mds-input-tip-background: var(--status-success-05);\n  --mds-input-variant-color: 0 0 0;\n}\n\n:host([variant=\"success\"]:focus) {\n  --mds-input-icon-color: var(--status-success-04);\n  --mds-input-variant-color: var(--status-success-05);\n}\n\n:host([variant=\"warning\"]) {\n  --mds-input-icon-color: var(--status-warning-05);\n  --mds-input-tip-background: var(--status-warning-05);\n  --mds-input-variant-color: 0 0 0;\n}\n\n:host([variant=\"warning\"]:focus) {\n  --mds-input-icon-color: var(--status-warning-04);\n  --mds-input-variant-color: var(--status-warning-05);\n}\n\n:host([variant=\"error\"]) {\n  --mds-input-icon-color: var(--status-error-05);\n  --mds-input-tip-background: var(--status-error-05);\n  --mds-input-variant-color: 0 0 0;\n}\n\n:host([variant=\"error\"]:focus) {\n  --mds-input-icon-color: var(--status-error-04);\n  --mds-input-variant-color: var(--status-error-05);\n}\n\n@tailwind utilities;\n\n@container style(--magma-pref-animation: reduce) {\n  .input {\n    transition-duration: 0s;\n  }\n}\n\n@container style(--magma-pref-animation: system) {\n  @media (prefers-reduced-motion) {\n    .input {\n      transition-duration: 0s;\n    }\n  }\n}\n\n@tailwind utilities;\n\n@container style(--magma-pref-theme: dark) {\n  :host {\n    --mds-input-ring: 0 0 0 2px rgb(var(--tone-neutral-01) / 0.3);\n  }\n}\n\n@container style(--magma-pref-theme: system) {\n  @media (prefers-color-scheme: dark) {\n    :host {\n      --mds-input-ring: 0 0 0 2px rgb(var(--tone-neutral-01) / 0.3);\n    }\n  }\n}\n\n.p-600{\n\n  padding: 1.5rem;\n}\n\n@container style(--magma-pref-contrast: more) {\n  :host {\n    --mds-input-ring: 0 0 0 2px rgb(var(--tone-neutral-01) / 0.6);\n  }\n\n  .input::-moz-placeholder {\n    color: rgb(var(--tone-neutral-03));\n  }\n\n  .input::placeholder {\n    color: rgb(var(--tone-neutral-03));\n  }\n}\n\n@container style(--magma-pref-contrast: system) {\n  @media (prefers-contrast: more) {\n    :host {\n      --mds-input-ring: 0 0 0 2px rgb(var(--tone-neutral-01) / 0.6);\n    }\n\n    .input::-moz-placeholder {\n      color: rgb(var(--tone-neutral-03));\n    }\n\n    .input::placeholder {\n      color: rgb(var(--tone-neutral-03));\n    }\n  }\n}\n\n\n@container (max-width: 210px) {\n  :host .tip__content,\n  :host(:focus-within) .tip__content {\n    grid-template-columns: 0fr;\n    opacity: 0;\n  }\n\n  :host .tip {\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  :host {\n\n    --mds-input-background: rgb(var(--variant-primary-07));\n  }\n}\n\n:host(:not(:is([hydrated], .hydrated))) {\n  animation-duration: 0s;\n  border-color: transparent;\n  box-shadow: 0 0 0 transparent;\n  opacity: 0;\n  outline-color: transparent;\n  transition-delay: 0s;\n  transition-duration: 0s;\n  visibility: hidden;\n}\n\nmds-accordion:not(:is([hydrated], .hydrated)),\nmds-accordion-item:not(:is([hydrated], .hydrated)),\nmds-accordion-timer:not(:is([hydrated], .hydrated)),\nmds-accordion-timer-item:not(:is([hydrated], .hydrated)),\nmds-author:not(:is([hydrated], .hydrated)),\nmds-avatar:not(:is([hydrated], .hydrated)),\nmds-badge:not(:is([hydrated], .hydrated)),\nmds-banner:not(:is([hydrated], .hydrated)),\nmds-benchmark-bar:not(:is([hydrated], .hydrated)),\nmds-bibliography:not(:is([hydrated], .hydrated)),\nmds-breadcrumb:not(:is([hydrated], .hydrated)),\nmds-breadcrumb-item:not(:is([hydrated], .hydrated)),\nmds-button:not(:is([hydrated], .hydrated)),\nmds-card:not(:is([hydrated], .hydrated)),\nmds-card-content:not(:is([hydrated], .hydrated)),\nmds-card-footer:not(:is([hydrated], .hydrated)),\nmds-card-header:not(:is([hydrated], .hydrated)),\nmds-card-media:not(:is([hydrated], .hydrated)),\nmds-chip:not(:is([hydrated], .hydrated)),\nmds-details:not(:is([hydrated], .hydrated)),\nmds-dropdown:not(:is([hydrated], .hydrated)),\nmds-entity:not(:is([hydrated], .hydrated)),\nmds-file:not(:is([hydrated], .hydrated)),\nmds-file-preview:not(:is([hydrated], .hydrated)),\nmds-filter:not(:is([hydrated], .hydrated)),\nmds-filter-item:not(:is([hydrated], .hydrated)),\nmds-header:not(:is([hydrated], .hydrated)),\nmds-header-bar:not(:is([hydrated], .hydrated)),\nmds-help:not(:is([hydrated], .hydrated)),\nmds-horizontal-scroll:not(:is([hydrated], .hydrated)),\nmds-hr:not(:is([hydrated], .hydrated)),\nmds-icon:not(:is([hydrated], .hydrated)),\nmds-img:not(:is([hydrated], .hydrated)),\nmds-input:not(:is([hydrated], .hydrated)),\nmds-input-field:not(:is([hydrated], .hydrated)),\nmds-input-range:not(:is([hydrated], .hydrated)),\nmds-input-select:not(:is([hydrated], .hydrated)),\nmds-input-switch:not(:is([hydrated], .hydrated)),\nmds-input-tip:not(:is([hydrated], .hydrated)),\nmds-input-tip-item:not(:is([hydrated], .hydrated)),\nmds-input-upload:not(:is([hydrated], .hydrated)),\nmds-keyboard:not(:is([hydrated], .hydrated)),\nmds-keyboard-key:not(:is([hydrated], .hydrated)),\nmds-kpi:not(:is([hydrated], .hydrated)),\nmds-kpi-item:not(:is([hydrated], .hydrated)),\nmds-label:not(:is([hydrated], .hydrated)),\nmds-list:not(:is([hydrated], .hydrated)),\nmds-list-item:not(:is([hydrated], .hydrated)),\nmds-modal:not(:is([hydrated], .hydrated)),\nmds-note:not(:is([hydrated], .hydrated)),\nmds-notification:not(:is([hydrated], .hydrated)),\nmds-paginator:not(:is([hydrated], .hydrated)),\nmds-paginator-item:not(:is([hydrated], .hydrated)),\nmds-pref:not(:is([hydrated], .hydrated)),\nmds-pref-animation:not(:is([hydrated], .hydrated)),\nmds-pref-consumption:not(:is([hydrated], .hydrated)),\nmds-pref-contrast:not(:is([hydrated], .hydrated)),\nmds-pref-language:not(:is([hydrated], .hydrated)),\nmds-pref-language-item:not(:is([hydrated], .hydrated)),\nmds-pref-theme:not(:is([hydrated], .hydrated)),\nmds-price-table:not(:is([hydrated], .hydrated)),\nmds-price-table-features:not(:is([hydrated], .hydrated)),\nmds-price-table-features-cell:not(:is([hydrated], .hydrated)),\nmds-price-table-features-row:not(:is([hydrated], .hydrated)),\nmds-price-table-header:not(:is([hydrated], .hydrated)),\nmds-price-table-list:not(:is([hydrated], .hydrated)),\nmds-price-table-list-item:not(:is([hydrated], .hydrated)),\nmds-progress:not(:is([hydrated], .hydrated)),\nmds-push-notification:not(:is([hydrated], .hydrated)),\nmds-push-notifications:not(:is([hydrated], .hydrated)),\nmds-quote:not(:is([hydrated], .hydrated)),\nmds-separator:not(:is([hydrated], .hydrated)),\nmds-spinner:not(:is([hydrated], .hydrated)),\nmds-stepper-bar:not(:is([hydrated], .hydrated)),\nmds-stepper-bar-item:not(:is([hydrated], .hydrated)),\nmds-tab:not(:is([hydrated], .hydrated)),\nmds-tab-bar:not(:is([hydrated], .hydrated)),\nmds-tab-bar-item:not(:is([hydrated], .hydrated)),\nmds-tab-item:not(:is([hydrated], .hydrated)),\nmds-table:not(:is([hydrated], .hydrated)),\nmds-table-body:not(:is([hydrated], .hydrated)),\nmds-table-cell:not(:is([hydrated], .hydrated)),\nmds-table-footer:not(:is([hydrated], .hydrated)),\nmds-table-header:not(:is([hydrated], .hydrated)),\nmds-table-header-cell:not(:is([hydrated], .hydrated)),\nmds-table-row:not(:is([hydrated], .hydrated)),\nmds-text:not(:is([hydrated], .hydrated)),\nmds-toast:not(:is([hydrated], .hydrated)),\nmds-tooltip:not(:is([hydrated], .hydrated)),\nmds-tree:not(:is([hydrated], .hydrated)),\nmds-tree-item:not(:is([hydrated], .hydrated)),\nmds-url-view:not(:is([hydrated], .hydrated)),\nmds-usage:not(:is([hydrated], .hydrated)),\nmds-video-wall:not(:is([hydrated], .hydrated)),\nmds-zero:not(:is([hydrated], .hydrated)) {\n  animation-duration: 0s;\n  border-color: transparent;\n  box-shadow: 0 0 0 transparent;\n  opacity: 0;\n  outline-color: transparent;\n  transition-delay: 0s;\n  transition-duration: 0s;\n  visibility: hidden;\n}\n\n";

const MdsInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.changeEvent = createEvent(this, "mdsInputChange", 7);
        this.keyDownEvent = createEvent(this, "mdsInputKeydown", 7);
        this.blurEvent = createEvent(this, "mdsInputBlur", 7);
        this.focusEvent = createEvent(this, "mdsInputFocus", 7);
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
        this.hasFocus = false;
        this.isPasswordVisible = false;
        /**
         * Specifies whether the element should have autocomplete enabled
         */
        this.autocomplete = "off";
        /**
         * Specifies that the element should automatically get focus when the page loads
         */
        this.autofocus = false;
        /**
         * Specifies if the spinner icon is shown, replacing the icon if present
         */
        this.await = false;
        /**
         * Specifies the layout of the counter button when the input type is set to `number`
         */
        this.controlsLayout = "vertical";
        /**
         * Specifies the icon type of the counter button when the input type is set to `number`
         */
        this.controlsIcon = "arrow";
        /**
         * Specifies the label for control button increase for component when type is number
         */
        this.controlIncreaseLabel = "Aumenta";
        /**
         * Specifies the label for control button decrease for component when type is number
         */
        this.controlDecreaseLabel = "Riduci";
        /**
         * If true, the element is displayed as disabled
         */
        this.disabled = false;
        /**
         * Specifies a short hint that describes the expected value of the element
         */
        this.placeholder = "";
        /**
         * Specifies that the element is read-only
         */
        this.readonly = false;
        /**
         * Specifies that the element must be filled out before submitting the form
         */
        this.required = false;
        /**
         * Specifies the type of input element
         */
        this.type = "text";
        /**
         * Specifies the typography of input element
         */
        this.typography = "detail";
        /**
         * Specifies the value of the input element
         */
        this.value = "";
        this.onInput = (ev) => {
            const input = ev.target;
            if (input) {
                this.value = input.value;
                this.internals.setFormValue(this.value);
            }
            this.keyDownEvent.emit(ev);
        };
        this.onBlur = () => {
            this.hasFocus = false;
            this.blurEvent.emit();
        };
        this.onFocus = (ev) => {
            const input = ev.target;
            this.hasFocus = true;
            this.focusEvent.emit();
            if (this.readonly) {
                // setTimeout to avoid Safari 14.1.2
                // to unselect text when mouse is clicked slowly
                setTimeout(() => {
                    input.select();
                }, 10);
            }
        };
    }
    formResetCallback() {
        this.internals.setFormValue("");
    }
    componentWillLoad() {
        var _a;
        // If the mds-input has a tabindex attribute we get the value
        // and pass it down to the native input, then remove it from the
        // mds-input to avoid causing tabbing twice on the same element
        if (this.el.hasAttribute("tabindex")) {
            const tabindex = this.el.getAttribute("tabindex");
            this.tabindex = tabindex !== null ? parseInt(tabindex) : undefined;
            this.el.removeAttribute("tabindex");
        }
        this.internals.setFormValue((_a = this.value) !== null && _a !== void 0 ? _a : null);
    }
    /**
     * Emits the change event when the component value changes
     */
    valueChanged() {
        var _a;
        this.changeEvent.emit({ value: this.value });
        this.internals.setFormValue((_a = this.value) !== null && _a !== void 0 ? _a : null);
    }
    disabledChanged(newValue) {
        /**
         * This is related to ALL disabled attributes set on Magma input components
         * if solved, please check mds-button, mds-input, mds-input-*
         * https://github.com/ionic-team/stencil/issues/5461
         */
        if (newValue) {
            this.internals.setFormValue(null);
        }
    }
    /**
     * Sets focus on the specified `my-input`.
     * Use this method instead
     * of the global `input.focus()`.
     */
    async setFocus() {
        if (this.nativeInput) {
            this.nativeInput.focus();
        }
    }
    /**
     * Returns the native `<input>` element used under the hood.
     */
    getInputElement() {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return Promise.resolve(this.nativeInput);
    }
    render() {
        return (h(Host, { key: '79214ce944adc1124f5f35a15d816637e222efe8' }, h("input", { key: 'e6eab224ba78fd33eb826a2f1e016cb6b59337c6', class: "input", autoComplete: this.autocomplete, autoFocus: this.autofocus, disabled: this.disabled, max: this.max, maxLength: this.maxlength, min: this.min, minLength: this.minlength, name: this.name, onBlur: this.onBlur, onFocus: this.onFocus, onInput: this.onInput, pattern: this.pattern, list: this.datalist && "datalist", part: "field", placeholder: this.placeholder, readOnly: this.readonly, ref: (input) => (this.nativeInput = input), required: this.required, step: this.step, tabIndex: this.tabindex, type: this.type === "password" && this.isPasswordVisible
                ? "text"
                : this.type, value: this.value })));
    }
    static get formAssociated() { return true; }
    get el() { return getElement(this); }
    static get watchers() { return {
        "value": ["valueChanged"],
        "disabled": ["disabledChanged"]
    }; }
};
MdsInput.style = mdsInputCss;

export { MdsInput as mds_input };

//# sourceMappingURL=mds-input.entry.js.map