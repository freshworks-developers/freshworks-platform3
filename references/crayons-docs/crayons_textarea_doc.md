>title: what is textarea component in crayons
>tags: crayons, textarea, component
>content:

fw-textarea displays an input box on the user interface and enables assigning multi-line text value to it. The size of the input box is based on the cols and rows attributes.

>code:

1. Import Crayons in your head section of the HTML file using the following scripts.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

2. To use the `textarea` component as tags include this snippet in your HTML segment
```html
<fw-textarea cols=75 rows=5 maxlength=190 minlength=5 label="Address" warning-text="Do not enter your temporary address"
  state="warning" placeholder="Enter your permanent address" required>
</fw-textarea>
<fw-textarea cols=75 rows=5 label="Passcode" error-text="Passcode is incorrect" state="error" required></fw-textarea>
<h3>`hint-text`, `warning-text`, `error-text` can be passed as slots</h3>
<fw-textarea cols=75 rows=5 label="Location identifier" placeholder="Enter landmark details" state="normal">
  <div slot="hint-text">Enter location details</div>
</fw-textarea>
<fw-textarea cols=75 rows=1 label="Plot number" value="not applicable" disabled state="normal">
</fw-textarea>
```

>title: what is textarea component in crayons in React JS
>tags: crayons, textarea, component
>content:

To use the `FwTextarea` component as react element include this snippet in your `component.js`
```jsx
import React from "react";
import ReactDOM from "react-dom";
import { FwTextarea } from "@freshworks/crayons/react";
function App() {
  return (<div>
    <FwTextarea cols={75} rows={5} maxlength={190} minlength={5} label="Address" warningText="Do not enter your temporary address" state="warning" placeholder="Enter your permanent address" required>
    </FwTextarea>
    <FwTextarea cols={75} rows={5} label="Passcode" errorText="Passcode is incorrect" state="error" required>
    </FwTextarea>
    <h3>`hint-text`, `warning-text`, `error-text` can be passed as slots</h3>
    <FwTextarea cols={75} rows={5} label="Location identifier" placeholder="Enter landmark details" state="normal">
      <div slot="hint-text">Enter location details</div>
    </FwTextarea>
    <FwTextarea cols={75} rows={1} label="Plot number" value="not applicable" disabled state="normal">
    </FwTextarea>
  </div>);
}
```

---
>title: what is textarea component Properties in crayons
>tags: crayons, textarea, component, Properties
>content:

TThe `textarea` component properties:

1. `cols` - Width of the input box in number of columns. Default is `undefined`.
2. `disabled` - Disables the text area on the interface. Default is `false`.
3. `errorText` - Error text displayed below the text box. Default is an empty string.
4. `hintText` - Hint text displayed below the text box. Default is an empty string.
5. `label` - Label displayed on the interface for the component. Default is an empty string.
6. `maxRows` - Max number of rows the textarea can create when user writes content greater than regular rows. Default is `undefined`.
7. `maxRowsDebounceTimer` - Debounce timer for setting rows dynamically based on user input and `maxRows`. Default is 200ms.
8. `maxlength` - Maximum number of characters a user can enter in the input box. Default is `undefined`.
9. `minlength` - Minimum number of characters a user must enter in the input box for the value to be valid. Default is `undefined`.
10. `name` - Name of the component, saved as part of form data. Default is an empty string.
11. `placeholder` - Text displayed in the input box before a user enters a value. Default is `undefined`.
12. `readonly` - If true, the user cannot enter a value in the input box. Default is `false`.
13. `required` - Specifies the input box as a mandatory field and displays an asterisk next to the label. Default is `false`.
14. `resize` - Specifies the way in which the text area can be resized. Values: `both`, `horizontal`, `none`, `vertical`. Default is `both`.
15. `rows` - Height of the input box in number of rows. Default is `undefined`.
16. `state` - Theme based on which the input box is styled. Values: `error`, `normal`, `warning`. Default is `normal`.
17. `value` - Default value displayed in the input box. Default is an empty string.
18. `warningText` - Warning text displayed below the text box. Default is an empty string.
19. `wrap` - Type of text wrapping used by the input box. Values: `hard`, `soft`. Default is `soft`.

---
>title: what is textarea component events and methods in crayons
>tags: crayons, textarea, component, events, methods
>content:

The `textarea` component supports following events
1. `fwBlur` - Triggered when the input box loses focus. type is `CustomEvent<any>`
2. `fwFocus` - Triggered when the input box comes into focus. type is `CustomEvent<void>`
3. `fwInput` - Triggered when a value is entered in the input box. type is `CustomEvent<any>`
Further it supports `setFocus()` method which Sets focus on a specific `fw-textarea`. Use this method instead of the global `input.focus()` and returns `Promise<void>`

---
>title: what are the CSS Custom Properties textarea component in crayons
>tags: crayons, textarea, component, css-properties
>content:

The `textarea` component supports following css properties
`--fw-error-color` - Color of the error text
`--fw-hint-color` - Color of the hint text
`--fw-textarea-input-color` - Color of the textarea input
`--fw-textarea-margin-bottom` - Bottom margin for the textarea
`--fw-textarea-min-height` - Min-Height of the textarea
`--fw-textarea-width` -  Width of the textarea
`--fw-warning-color` - Color of the warning text

---
