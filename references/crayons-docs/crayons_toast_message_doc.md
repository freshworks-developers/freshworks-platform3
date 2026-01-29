>title: what is toast message component in crayons
>tags: crayons, timepicker, component
>code:

Toast Message used internally by Toast component to render toast message.

Import Crayons in your head section of the HTML file using the following scripts.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

1. To use it as a tag use the below snippet in your HTML section

```html
<fw-toast-message open id="type_toast" sticky="true" type="success" content="success"></fw-toast-message>
<fw-toast-message open id="type_toast" sticky="true" type="error" content="error"></fw-toast-message>
<fw-toast-message open id="type_toast" type="warning" content="warning"></fw-toast-message>
<fw-toast-message open id="type_toast" type="inprogress" content="inprogress"></fw-toast-message>
<fw-toast-message type="success" id="custom-toast" sticky open action-link-text="Click me">
 <div>
  <span>Test content</span>
  <span>custom html contents can be added</span>
 </div>
</fw-toast-message>
```

2. To use it inside a react component use the below snippet in your `component.js`

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { FwToastMessage } from "@freshworks/crayons/react";
function App() {
  return (<div>
    <FwToastMessage open id="type_toast" sticky type="success" content="success"></FwToastMessage>
    <FwToastMessage open id="type_toast" sticky type="error" content="error"></FwToastMessage>
    <FwToastMessage open id="type_toast" type="warning" content="warning"></FwToastMessage>
    <FwToastMessage open id="type_toast" type="inprogress" content="inprogress"></FwToastMessage>
    <FwToastMessage
      type='success'
      id='custom-toast'
      sticky
      action-link-text='Click me'
    >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span>Test content</span>
            <span>custom html contents can be added</span>
        </div>
    </FwToastMessage>
  </div>);
}
```

---
>title: what are toast message component Properties
>tags: crayons, timepicker, component, Properties
>content:

FwToastMessage component supports following Properties

1. `actionLinkText` or `action-link-text` | The Content of the action link type is `string` default is `''`
2. `content` - The content to be displayed in toast type is `string` default is `undefined`
3. `open` visibility prop of toast message type is `boolean` default is `false`
4. `pauseOnHover` or `pause-on-hover` - Pause the toast from hiding on mouse hover, type is `boolean` default is `undefined`
5. `sticky` or `sticky` - won't close automatically, type is `boolean` default is `false`
6. `timeout` or `timeout` - Time duration of the toast visibility, type is `number` default is `4000`
7. `type` or `type` - Type of the toast - supports success,failure, warning, inprogress with type `error`, `inprogress`, `success`, `warning`. The default is `warning`

---
>title: what are toast message component events
>tags: crayons, timepicker, component, events
>content:

`fwLinkClick` - Triggered when the action link clicked. type is `CustomEvent<any>`
`fwRemoveToast` - Triggered on closing the toast message. This event gets used by the parent container to remove the toast message from itself. Type is `CustomEvent<any>`

---
