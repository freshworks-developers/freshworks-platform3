>title: How to use Crayons modal component
>tags: crayons, modal
>content:

Crayons Modal component `fw-modal` provides a dialog window or modal with customizable title, content, and actions. It can also be used as confirm boxes to take user inputs.

Import Crayons in your head section of the HTML file using the following scripts.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

To use it include a Crayons modal component with the following code in your HTML section.
```html
<fw-button modal-trigger-id='welcome'> Open Modal </fw-button>
<fw-modal id='welcome' title-text="Welcome">
  Hello, Welcome to Crayons
</fw-modal>
```

---
>title: What are the properties for Crayons Modal?
>tags: crayons, modal
>content:

Crayons `fw-modal` supports the following properties:

1. `cancelText`: The text for the cancel button. Default is an empty string.
2. `description`: The description text to be displayed on the modal. Default is undefined.
3. `hasCloseIconButton`: Property to add or remove the top right close icon button. Default is true.
4. `hideFooter`: Hide footer for the modal. Default is false.
5. `icon`: The icon to be displayed with the title. Default is an empty string.
6. `isOpen`: Toggle the visibility of the modal. Default is false.
7. `size`: Size of the modal. Options are "standard", "large", and "small". Default is "standard".
8. `slider`: Convert modal to slider. Default is false.
9. `submitColor`: The color of the submit button. Options are "primary", "secondary", "text", "danger", and "link". Default is "primary".
10. `submitDisabled`: Disable the submit button. Default is false.
11. `submitText`: The text for the submit button. Default is an empty string.
12. `titleText`: The title text to be displayed on the modal. Default is undefined.


---
>title: What are the events available for Crayons Modal?
>tags: crayons, modal
>content:

Crayons modal (fw-modal) supports the following events:
1. `fwClose` - Triggered when modal is closed. Returns `CustomEvent<void>`.
2. `fwOpen` - Triggered when modal is opened. Returns `CustomEvent<void>`.
3. `fwSubmit` - Triggered when the default action button is clicked. Returns `CustomEvent<void>`.

---
>title: What are the methods available for Crayons Modal?
>tags: crayons, modal
>content:

Crayons modal (fw-modal) supports the following methods:

1. `close()` - Method available from the component to perform close action on the modal. Returns `Promise<boolean>` - promise that resolves to true.
2. `open()` - Method available from the component to perform open action on the modal. Returns `Promise<boolean>` - promise that resolves to true.

---
>title: How to create a large Crayons modal component
>tags: crayons, modal
>code:

Import Crayons in your head section of the HTML file using the following scripts.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

To include a large Crayons modal, add the following code in your HTML file.
```html
<fw-button modal-trigger-id='welcome-large'> Open Large Modal </fw-button>
<fw-modal id='welcome-large' title-text="Welcome" size="large" submit-disabled="true">
  Hello, Welcome to Crayons
</fw-modal>
```

---
>title: How to create a Crayons modal with title, content, footer, and action buttons?
>tags: crayons, modal
>code:

Import Crayons in your head section of the HTML file using the following scripts.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

To include a large Crayons modal, add the following code in your HTML file.
```html
<fw-button modal-trigger-id='small'> Open Modal </fw-button>
<fw-modal id='small' size="small" submit-color="danger">
  <fw-modal-title title-text="Welcome"></fw-modal-title>
  <fw-modal-content><div>Content text</div></fw-modal-content>
  <fw-modal-footer></fw-modal-footer>
</fw-modal>
```

---
>title: How to create a confirmation modal with Crayons modal?
>tags: crayons, modal
>code:

Import Crayons in your head section of the HTML file using the following scripts.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

To include a large Crayons modal, add the following code in your HTML file.
```html
<fw-button modal-trigger-id='composition'> Open confirmation Modal </fw-button>
<fw-modal id='composition' size="small" submit-color="danger" submit-text="Delete">
  <fw-modal-title>
    <span>Delete message</span>
  </fw-modal-title>
  <fw-modal-content>
    <span>Are you sure you want to delete this Message?</span>
  </fw-modal-content>
</fw-modal>
```

---
>title: How to create a modal with the slider with full height using Crayons modal?
>tags: crayons, modal
>code:

Import Crayons in your head section of the HTML file using the following scripts.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

This is a variation of model that takes the entire viewport as height and slides from right of the screen when entering. Properties and composition are same as modal with the exception of size property. Slider has only one standard size.
1. To include a large Crayons modal, add the following code in your HTML file.
```html
<fw-button modal-trigger-id='modal-slider'> Open slider </fw-button>
<fw-modal id='modal-slider' slider='true'>
  <fw-modal-title>
    <span>Header text</span>
  </fw-modal-title>
  <fw-modal-content>
    <div>
      Context text.
    </div>
  </fw-modal-content>
  <fw-modal-footer>
    <fw-button>OK</fw-button>
  </fw-modal-footer>
</fw-modal>
```
2. include the below section under `<script>` section
```js
document.querySelector('fw-modal#modal-slider').open();
document.querySelector('fw-modal#modal-slider').close()
```

---
