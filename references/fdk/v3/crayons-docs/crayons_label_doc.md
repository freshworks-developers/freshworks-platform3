>title: What is crayons label component
>tags: crayons, label, ui, component
>content:

`fw-label` displays an informational text component that identifies other components on the user interface.

---
>title: using crayons label component in HTML
>tags: crayons, label, ui, component, HTML
>code:

Import Crayons in your head section of the HTML file using the following scripts.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

Add below snippet to your HTML section
```html
<fw-label value="Meta Information"></fw-label>
<fw-label value="Response Received" color="blue"></fw-label>
<fw-label value="Overdue" color="red"></fw-label>
<fw-label value="New" color="green"></fw-label>
<fw-label value="Pending" color="yellow"></fw-label>
<fw-label value="Archived" color="grey"></fw-label>
```

---
>title: using Crayons label component in ReactJS
>tags: crayons, label, ui, component, react
>code:

Update your `<component>.js` file to use crayons component in react
```js
import React from "react";
import ReactDOM from "react-dom";
import { FwLabel } from "@freshworks/crayons/react";
function App() {
  return (<div>
    <FwLabel value="Meta Information"></FwLabel>
    <FwLabel value="Response Received" color="blue"></FwLabel>
    <FwLabel value="Overdue" color="red"></FwLabel>
    <FwLabel value="New" color="green"></FwLabel>
    <FwLabel value="Pending" color="yellow"></FwLabel>
    <FwLabel value="Archived" color="grey"></FwLabel>
 </div>);
}
```

---
>title: Different properties of Crayons label component
>tags: crayons, label, ui, component, props, properties
>content:

1. `color` - blue | green | grey | normal | red | yellow - Theme based on which the label is styled.
2. `value` - stirng - Display text in the label.

---
>title: Different CSS custom properties of Crayons label component
>tags: crayons, label, ui, component, css
>content:

1. `--fw-label-padding-horizontal` - Left-Right padding if direction is left-to-right, and Right - Left padding if direction is right-to-left for label
2. `--fw-label-padding-vertical` - Top-bottom padding for label

---
