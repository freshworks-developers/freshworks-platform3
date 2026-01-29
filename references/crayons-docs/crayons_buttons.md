>title: how to use Crayons buttons in an HTML section
>tags: crayons, buttons
>content:

Crayons allows you to create `fw-button` elements in your HTML, displaying buttons on the user interface with customizable labels (text, icon, or both). To use Crayons, import it in the HTML head section using the provided scripts:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

Then, you can create a `fw-button` with a primary color and the label "Submit" using the following code:

```html
<fw-button color="primary">Submit</fw-button>
```

---
>title: what are the properties for Crayons buttons
>tags: crayons, buttons
>content:

Button Properties:
1. `color` - Identifies the theme for button styling. Possible values: `danger`, `link`, `primary`, `secondary`, and `text`. Default: `primary`.
2. `disabled` - Disables the button on the interface. Type: `boolean`. Default: `false`.
3. `fileUploaderId` - Accepts the ID of the `fw-file-uploader` component to upload a file (using `file-uploader-id` attribute). Type: `string`. Default: `""` (empty string).
4. `loading` - Represents the loading state of the button. Type: `boolean`. Default: `false`.
5. `modalTriggerId` - Accepts the ID of the `fw-modal` component to open it on click (using `modal-trigger-id` attribute). Type: `string`. Default: `""` (empty string).
6. `showCaretIcon` - Shows a caret indicator on the button (using `show-caret-icon` attribute). Type: `boolean`. Default: `false`.
7. `size` - Specifies the size of the button. Possible values: `icon`, `icon-small`, `normal`, and `small`. Default: `normal`.
8. `throttleDelay` - Sets the delay for throttle in milliseconds (using `throttle-delay` attribute). Type: `number`. Default: `200`.
9. `type` - Defines the button type for click actions. Possible values: `button` and `submit`. Default: `button`.

---
>title: what are the Crayons button events available?
>tags: crayons, buttons
>content

1. `fwBlur` - Triggered when the button loses focus. The type is `CustomEvent<void>`.
2. `fwClick` - Triggered when the button is clicked. The type is `CustomEvent<void>`.
3. `fwFocus` - Triggered when the button comes into focus. The type is `CustomEvent<void>`.

---
>title: what are the Crayons button methods available?
>tags: crayons, buttons
>content

These are the methods available for the Crayons button and it returns a promise as a response Type `Promise<any>`.

```js
setFocus() => `Promise<any>`
```

---
>title: What are the CSS customer properties available for Crayons button
>tags: crayons, buttons
>content

1. `--fw-button-label-vertical-padding` - It's the vertical padding for the button label
2. `--fw-button-min-width` - It's the minimum width for the button

---
>title: create a Crayons button
>tags: crayons, buttons
>content:

Import Crayons in your head section of the HTML file using the following scripts.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

To create a Crayons button, include `fw-button` HTML tag. The color property is optional and change it for different styles of the button.

```html
<fw-button color="primary"> Submit </fw-button>
```

---
>title: create a Crayons button with a label
>tags: crayons, buttons
>code:

Import Crayons in your head section of the HTML file using the following scripts.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

To create a Crayons button, include `fw-button` HTML tag. The color property is optional and change it for different styles of the button.

```html
<section>
  <fw-label value="Do you confirm?"></fw-label>
  <fw-button color="primary">
    <fw-icon slot="before-label" size="16" name="check"></fw-icon>
    <span>Confirm</span>
  </fw-button>
  <fw-button color="secondary">
    <fw-icon slot="before-label" size="16" name="delete"></fw-icon>
    <span>Cancel</span>
  </fw-button>
</section>
```

---
>title: create a Crayons button for loading
>tags: crayons, buttons
>code:

Import Crayons in your head section of the HTML file using the following scripts.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

To create a Crayons button for loading progress, use the `loading` property without any values.

```html
<fw-button loading color="secondary"> Loading </fw-button>
```

---
>title: create a Crayons disabled button
>tags: crayons, buttons
>code:

Import Crayons in your head section of the HTML file using the following scripts.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

To create a Crayons button that is disabled, use the `disabled` property without any values.

```html
<fw-button disabled color="primary"> You can't click me </fw-button>
```

---
>title: what is Crayons button group?
>tags: crayons, buttons
>code:

Button groups can be used to group related buttons into sections. Use the label property to set the label for the button group.

```html
<fw-button-group>
    <fw-button color="primary">Replace</fw-button>
    <fw-button color="primary">Modify</fw-button>
    <fw-button color="secondary">Cancel</fw-button>
  </fw-button-group>
```

---
>title: how to create Crayons button groups with label?
>tags: crayons, buttons
>code:

Import Crayons in your head section of the HTML file using the following scripts.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

Use the `<fw-button-group>` HTML tag to create the FW button groups.

```html
<fw-button-group label="Action group">
    <fw-button color="primary">Replace</fw-button>
    <fw-button color="primary">Modify</fw-button>
    <fw-button color="secondary">Cancel</fw-button>
  </fw-button-group>
```

---
