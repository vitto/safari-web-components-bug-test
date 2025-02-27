import {
  AttachInternals,
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Method,
  Prop,
  State,
  Watch,
  h,
} from "@stencil/core";
/*
 * @part field - Selects the native input field used by the component
 * @part counter-button-decrease - Selects the button used to decrese the input value
 * @part counter-button-increase - Selects the button used to increse the input value
 * @part password-toggle-button - Selects the button used to show or hide password
 */

export interface MdsInputEventDetail {
  value?: File | string | FormData | null;
}

export interface MdsInputInterface {
  autocomplete?: string;
  autofocus?: boolean;
  controlsIcon?: string;
  controlsLayout?: string;
  datalist?: string[];
  disabled?: boolean;
  icon?: string;
  max?: string;
  maxLength?: number;
  min?: string;
  minLength?: number;
  name?: string;
  pattern?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  step?: string;
  tabindex?: number;
  tip?: string;
  type: string;
  typography?: string;
  value?: string;
  variant?: string;
}

@Component({
  tag: "mds-input",
  styleUrl: "mds-input.css",
  formAssociated: true,
  shadow: true,
})
export class MdsInput {
  private nativeInput?: HTMLInputElement | HTMLTextAreaElement;
  private tabindex?: number;
  @Element() el: HTMLMdsInputElement;
  @State() hasFocus = false;
  @State() language: string;
  @State() isPasswordVisible = false;

  @AttachInternals() internals: ElementInternals;

  /**
   * Specifies whether the element should have autocomplete enabled
   */
  @Prop({ reflect: true }) readonly autocomplete?: string = "off";

  /**
   * Specifies that the element should automatically get focus when the page loads
   */
  @Prop({ reflect: true }) readonly autofocus: boolean = false;

  /**
   * Specifies if the spinner icon is shown, replacing the icon if present
   */
  @Prop({ reflect: true }) readonly await: boolean = false;

  /**
   * Specifies the layout of the counter button when the input type is set to `number`
   */
  @Prop({ reflect: true }) readonly controlsLayout?: string = "vertical";

  /**
   * Specifies the icon type of the counter button when the input type is set to `number`
   */
  @Prop({ reflect: true }) readonly controlsIcon?: string = "arrow";

  /**
   * Specifies the label for control button increase for component when type is number
   */
  @Prop({ reflect: true }) readonly controlIncreaseLabel?: string = "Aumenta";

  /**
   * Specifies the label for control button decrease for component when type is number
   */
  @Prop({ reflect: true }) readonly controlDecreaseLabel?: string = "Riduci";

  /**
   * A list of search terms to be searched from the input field,
   * it should be used with type="search" input.
   */
  @Prop() readonly datalist?: string[];

  /**
   * If true, the element is displayed as disabled
   */
  @Prop({ reflect: true }) readonly disabled?: boolean = false;

  /**
   * An icon displayed at the right of the input
   */
  @Prop({ reflect: true }) readonly icon?: string;

  /**
   * Specifies the maximum value
   * use it with input type="number" or type="date"
   * Example: max="180", max="2046-12-04"
   */
  @Prop({ reflect: true }) readonly max?: string;

  /**
   * Specifies the maximum number of characters allowed in an element
   * use it with input type="number"
   */
  @Prop({ reflect: true }) readonly maxlength?: number;

  /**
   * Specifies the minimum value
   * use it with input type="number" or type="date"
   * Example: min="-3", min="1988-04-15"
   */
  @Prop({ reflect: true }) readonly min?: string | number;

  /**
   * Specifies the minimum number of characters allowed in an element
   * use it with input type="number"
   */
  @Prop({ reflect: true }) readonly minlength?: number;

  /**
   * Is needed to reference the form data after the form is submitted
   */
  @Prop({ reflect: true }) readonly name?: string;

  /**
   * Specifies a regular expression that element\'s value is checked against
   */
  @Prop({ reflect: true }) readonly pattern?: string;

  /**
   * Specifies a short hint that describes the expected value of the element
   */
  @Prop({ reflect: true }) readonly placeholder: string = "";

  /**
   * Specifies that the element is read-only
   */
  @Prop({ reflect: true }) readonly readonly?: boolean = false;

  /**
   * Specifies that the element must be filled out before submitting the form
   */
  @Prop({ reflect: true }) readonly required?: boolean = false;

  /**
   * Sets the variant of the input field
   */
  @Prop({ reflect: true }) readonly variant?: string;

  /**
   * Sets the word(s) of the tip of the input field
   */
  @Prop({ reflect: true }) readonly tip?: string;

  /**
   * Specifies the interval between legal numbers in an input field
   */
  @Prop({ reflect: true }) readonly step?: string;

  /**
   * Specifies the type of input element
   */
  @Prop({ reflect: true }) readonly type?: string = "text";

  /**
   * Specifies the typography of input element
   */
  @Prop({ reflect: true }) typography: string = "detail";

  /**
   * Specifies the value of the input element
   */
  @Prop({ mutable: true, reflect: true }) value?: string = "";

  /**
   * Emits an InputChangeEventDetail when the value of the input element changes
   */
  @Event({ eventName: "mdsInputChange" })
  changeEvent!: EventEmitter<MdsInputEventDetail>;

  /**
   * Emits a KeyboardEvent when a keyboard key is pressed on the focused input element
   */
  @Event({ eventName: "mdsInputKeydown" })
  keyDownEvent!: EventEmitter<KeyboardEvent>;

  /**
   * Emits a void event when input element is blurred
   */
  @Event({ eventName: "mdsInputBlur" }) blurEvent!: EventEmitter<void>;

  /**
   * Emits a void event when input element is focused
   */
  @Event({ eventName: "mdsInputFocus" }) focusEvent!: EventEmitter<void>;

  formResetCallback(): void {
    this.internals.setFormValue("");
  }

  componentWillLoad(): void {
    // If the mds-input has a tabindex attribute we get the value
    // and pass it down to the native input, then remove it from the
    // mds-input to avoid causing tabbing twice on the same element
    if (this.el.hasAttribute("tabindex")) {
      const tabindex = this.el.getAttribute("tabindex");
      this.tabindex = tabindex !== null ? parseInt(tabindex) : undefined;
      this.el.removeAttribute("tabindex");
    }
    this.internals.setFormValue(this.value ?? null);
  }

  /**
   * Emits the change event when the component value changes
   */
  @Watch("value")
  protected valueChanged(): void {
    this.changeEvent.emit({ value: this.value });
    this.internals.setFormValue(this.value ?? null);
  }

  @Watch("disabled")
  protected disabledChanged(newValue: boolean): void {
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
  @Method()
  async setFocus(): Promise<void> {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }

  /**
   * Returns the native `<input>` element used under the hood.
   */
  @Method()
  getInputElement(): Promise<HTMLInputElement | HTMLTextAreaElement> {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return Promise.resolve(this.nativeInput!);
  }

  private onInput = (ev: InputEvent) => {
    const input = ev.target as HTMLInputElement | HTMLTextAreaElement | false;
    if (input) {
      this.value = input.value;
      this.internals.setFormValue(this.value);
    }
    this.keyDownEvent.emit(ev as Event as KeyboardEvent);
  };

  private onBlur = () => {
    this.hasFocus = false;
    this.blurEvent.emit();
  };

  private onFocus = (ev: Event) => {
    const input = ev.target as HTMLInputElement | HTMLTextAreaElement;
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

  render() {
    return (
      <Host>
        <input
          class="input"
          autoComplete={this.autocomplete}
          autoFocus={this.autofocus}
          disabled={this.disabled}
          max={this.max}
          maxLength={this.maxlength}
          min={this.min}
          minLength={this.minlength}
          name={this.name}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          onInput={this.onInput}
          pattern={this.pattern}
          list={this.datalist && "datalist"}
          part="field"
          placeholder={this.placeholder}
          readOnly={this.readonly}
          ref={(input) => (this.nativeInput = input)}
          required={this.required}
          step={this.step}
          tabIndex={this.tabindex}
          type={
            this.type === "password" && this.isPasswordVisible
              ? "text"
              : this.type
          }
          value={this.value}
        />
      </Host>
    );
  }
}
