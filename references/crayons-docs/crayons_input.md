>title: How to use Crayons Input
>tags: crayons, input
>content:

Crayons Input component `fw-input` allows users to input data through various input field types such as text, email, number, and so on.

Import Crayons in your head section of the HTML file using the following scripts.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

To use it include a Crayons Input component with the following code in your HTML section

```html
<fw-input type="text" label="Name" placeholder="Enter your name" required></fw-input>
```

---
>title: What are the properties for Crayons Input?
>tags: crayons, input
>content:

Crayons `fw-input` supports the following attributes:

1. `autocomplete`: Specifies whether the browser can display suggestions to autocomplete the text value. Options are "on" and "off". Default is "off".
2. `clearInput`: Displays a right-justified clear icon in the text box. Clicking the icon clears the input text. Default is false.
3. `disabled`: Disables the component on the interface. Default is false.
4. `errorText`: Error text displayed below the text box. Default is an empty string.
5. `hintText`: Hint message to be displayed below the input field. Default is an empty string.
6. `iconLeft`: Identifier of the icon displayed on the left side of the text box.
7. `iconRight`: Identifier of the icon displayed on the right side of the text box.
8. `label`: Label displayed on the interface for the component. Default is an empty string.
9. `max`: Maximum value that can be entered for the number/decimal input.
10. `maxlength`: Maximum number of characters a user can enter in the text box.
11. `min`: Minimum value that can be entered for the number/decimal input.
12. `minlength`: Minimum number of characters a user must enter in the text box for the value to be valid.
13. `name`: Name of the component, saved as part of form data. Default is an empty string.
14. `placeholder`: Text displayed in the text box before a user enters a value.
15. `readonly`: If true, the user cannot enter a value in the input box. Default is false.
16. `required`: Specifies the input box as a mandatory field and displays an asterisk next to the label. Default is false.
17. `state`: Theme based on which the text box is styled. Options are "error", "normal", and "warning". Default is "normal".
18. `step`: The interval between legal numbers in a number/decimal input element.
19. `type`: Type of value accepted as the input value. Options are "text", "email", "number", and "url". Default is "text".
20. `value`: Default value displayed in the input box. Default is an empty string.
21. `warningText`: Warning text displayed below the text box. Default is an empty string.

---
>title: what are the Crayons input component events available?
>tags: crayons
>content

1. `fwBlur` - Triggered when the input box loses focus. The type is `CustomEvent<any>`.
2. `fwFocus` - Triggered when the input box comes into focus. The type is `CustomEvent<any>`.
3. `fwInput` - Triggered when a value is entered in the input box. The type is `CustomEvent<any>`.
4. `fwInputClear` - Triggered when clear icon is clicked. The type is `CustomEvent<any>`.

---
>title: what are the Crayons input methods available?
>tags: crayons
>content:

These are the methods available for the Crayons input and it returns a promise as a response Type `Promise<void>`.
setFocus() => `Promise<void>` - Sets focus on a specific fw-input. Use this method instead of the global input.focus().

---
>title: What are the CSS customer properties available for Crayons input component?
>tags: crayons
>content:

1. `--fw-error-color` - Color of the error text.
2. `--fw-hint-color` - Color of the hint text.
3. `--fw-input-border-radius` - Border Radius of the input.
4. `--fw-label-color` - Color of the label.
5. `--fw-warning-color` - Color of the warning text.

---
>title: How to create password input with Crayons input component
>tags: crayons, input
>code:

Import Crayons in your head section of the HTML file using the following scripts.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

Include this snippet in your HTML section

```html
<fw-input label="Password" error-text="Password is incorrect" state="error" required clear-input></fw-input>
```

---
>title: How to set hint text with Crayons input component?
>tags: crayons, input
>code:

Import Crayons in your head section of the HTML file using the following scripts.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

Use the `hint-text` slot to set the hint message. The `hint-text`, `warning-text`, `error-text` can be passed as slots.

```html
<fw-input
  label="Verification Code"
  placeholder="Enter the verification code sent to the registered email address"
  state="normal"
  clear-input
>
<div slot="hint-text">use the verification code sent to your email address</div>
</fw-input>
```

---
>title: How to create number field with minimum and maximum values with Crayons input component?
>tags: crayons, input
>code:

Import Crayons in your head section of the HTML file using the following scripts.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

Use the `min` and `max` attributes to set minimum and maximum values.

```html
<fw-input
  type="number"
  min="0"
  max="10"
  label="Number Input with min and max"
></fw-input>
```

---
>title: How to create input field groups with Crayons input component?
>tags: crayons, input
>code:

Import Crayons in your head section of the HTML file using the following scripts.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

The input fields in a group will appear together with the custom style applied if any.

```html
<div>
  <fw-input
    label="House Input"
    required="true"
    placeholder="Your input"
    hint-text="enter input"
  ></fw-input>
  <fw-select
    style="margin-left: -1px"
    label="House Name"
    required="true"
    value="1"
    placeholder="Your choice"
    hint-text="Select singluar option"
  >
    <fw-select-option value="1">Starks</fw-select-option>
    <fw-select-option value="2">Lannisters</fw-select-option>
  </fw-select>
</div>
```

---
