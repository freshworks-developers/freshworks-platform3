>title: Crayons checkbox component
>tags: crayons, checkbox, ui, component
>content:

`fw-checkbox` displays a check box on the user interface and enables assigning a state (selected or deselected) to it. In the selected state, the check box displayed on the UI is highlighted and contains a check mark.

---
>title: how to use crayons checkbox component
>tags: crayons, checkbox, ui, component, html
>code:

Import Crayons in your head section of the HTML file using the following scripts.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

include the following code in your `componentName.html` to add checkbox item
```html
<fw-checkbox checked description="Agree or Disagree">Select to agree</fw-checkbox><br><br>
<fw-checkbox checked disabled value="dcb">Disabled check box</fw-checkbox>
```

---
>title: how to use crayons checkbox component in react
>tags: crayons, checkbox, ui, component, react
>code:

include the following code in your `components/componentName.js` to add checkbox item
```js
import React from "react";
import ReactDOM from "react-dom";
import { FwCheckbox } from "@freshworks/crayons/react";
function App() {
  return (<div>
    <FwCheckbox checked description="Agree or Disagree">Select to agree</FwCheckbox><br/><br/>
    <FwCheckbox checked disabled value="dcb">Disabled check box</FwCheckbox>
  </div>)
}
```

---
>title: Different properties of Crayons checkbox component
>tags: crayons, checkbox, ui, component, props, properties
>content:

Checkbox Properties:

1. `checked`: (Type: boolean) Sets the state of the checkbox to selected. If the attribute’s value is undefined, it defaults to `false`.
2. `description`: (Type: string) Description displayed for the checkbox.
3. `disabled`: (Type: boolean) Disables the checkbox on the interface. If the attribute’s value is undefined, it defaults to `false`.
4. `error-text`: (Type: string) Error text displayed below the checkbox.
5. `hint-text`: (Type: string) Hint text displayed below the checkbox.
6. `name`: (Type: string) Name of the component, saved as part of form data.
7. `required`: (Type: boolean) Specifies the checkbox as a mandatory field and displays an asterisk next to the label. If the attribute’s value is undefined, it defaults to `false`.
8. `state`: (Type: error | normal | warning) Theme used for styling the checkbox.
9. `value`: (Type: string) Identifier corresponding to the component, saved when the form data is saved.
10. `warning-text`: (Type: string) Warning text displayed below the checkbox.

---
>title: Different events of Crayons checkbox component
>tags: crayons, checkbox, ui, component, events
>content:

1. `fwBlur` - Triggered when the check box loses focus.
2. `fwChange` - Triggered when the checkbox state is modified.
3. `fwFocus` - Triggered when the check box comes into focus.

---
>title: Different methods of Crayons checkbox component
>tags: crayons, checkbox, ui, component, events
>content:

1. `setFocus` - Sets the focus on `fw-checkbox`.

---
>title: Different CSS custom properties of Crayons checkbox component
>tags: crayons, checkbox, ui, component, css
>content:

1. `--fw-error-color` - Color of the error text.
2. `--fw-hint-color` - Color of the hint text.
3. `--fw-warning-color` - Color of the warning text.

---
>title: how to add checkbox with a string value
>tags: crayons, checkbox, ui, component
>code:

Import Crayons in your head section of the HTML file using the following scripts.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

Add a `<fw-checkbox>` element to your HTML section with `value` attribute
```html
<fw-checkbox value="burger">Burger</fw-checkbox>
<fw-checkbox value="pizza">Pizza</fw-checkbox>
<fw-checkbox value="pasta">Pasta</fw-checkbox>
```

---
>title: How to create a disabled checkbox
>tags: crayons, checkbox, ui, component
>code:

1. To add a disabled checkbox in a HTMl page use following snippet
  ```html
  <fw-checkbox disabled>This is a disabled checkbox</fw-checkbox>
  ```
1. To add a disabled checkbox in a react component use following snippet in your `ComponentName.js`
```js
// in import section add
import {FwCheckbox } from "@freshworks/crayons/react";
// in return statement
const ComponentName = (props) => {
  return (
    <div>
      <FwCheckbox disabled>Disabled check box</FwCheckbox>
    </div>
  )
}
```

---
>title: how to create a mandatory field checkbox
>tags: crayons, checkbox, ui, component
>code:

To use Crayons, import it in the head section of your HTML file with the provided scripts:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

To add a required checkbox in an HTML page, use the following snippet:

```html
<fw-checkbox required>This is a required checkbox</fw-checkbox>
```

To add a required checkbox in a React component (in `ComponentName.js`), add the following import statement in the import section:

```js
import { FwCheckbox } from "@freshworks/crayons/react";
```

Then, use the `FwCheckbox` component in the return statement:

```js
const ComponentName = (props) => {
  return (
    <div>
      <FwCheckbox required>Disabled check box</FwCheckbox>
    </div>
  );
};
```

---
>title: how to create a checkbox with change event
>tags: crayons, checkbox, ui, component, event, fwChange
>code:

To import Crayons, add the following scripts in the head section of your HTML file:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

1. To add a checkbox in an HTML page, use the following snippet:

```html
<fw-checkbox value="burger" id="burgerCheckbox" name="burger-checkbox">Burger</fw-checkbox>
```

2. To use the `fwChange` event with the checkbox, include the following snippet inside your `<script>` tag:

```js
document.onreadystatechange = function () {
  const fwCheckbox = document.querySelector('#burgerCheckbox');
  fwCheckbox.addEventListener('fwChange', function checkboxChange(){
    console.log("Burger checkbox value has changed!");
  });
};
```

---
