>title: Crayons radio component
>tags: crayons, radio, ui, component
>content:

`fw-radio` displays a radio button on the user interface and enables assigning a state (selected or deselected) to it. In the selected state, the button displayed is highlighted. fw-radio provides child elements for fw-radio-group, to populate the Radio Group component’s list.

---
>title: Crayons radio group component
>tags: crayons, radio-group, ui, component
>content:

`fw-radio-group` displays a group of options with radio buttons and enables selection of one option from the list.

---
>title: Different properties of Crayons radio component
>tags: crayons, radio, ui, component, props, properties
>content:

1. `checked` - boolean - Sets the state to selected. If the attribute’s value is undefined, the value is set to false.
2. `description` - string - Description to be displayed for the checkbox.
3. `disabled` - boolean - Disables the component on the interface. If the attribute’s value is undefined, the value is set to false.
4. `name` - string - Name of the component, saved as part of form data.
5. `state` - error | normal - Theme based on which the radio button is styled.
6. `value` - string - Identifier corresponding to the component, that is saved when the form data is saved.

---
>title: Different properties of Crayons radio group component
>tags: crayons, radio-group, ui, component, props, properties
>content:

Crayons `fw-radio-group` properties:

1. `allow-empty`: boolean - If true, a radio group can be saved without selecting any option. Default is false.
2. `error-text`: string - Error text displayed below the radio group. Default is an empty string.
3. `hint-text`: string - Hint text displayed below the radio group. Default is an empty string.
4. `label`: string - Label for the component.
5. `name`: string - Name of the component, saved as part of form data.
6. `orientation`: column | row - Indicates the direction of the radio buttons alignment. Defaults to vertical alignment.
7. `required`: boolean - Specifies the input radio group as a mandatory field and displays an asterisk next to the label. Default is false.
8. `state`: error | normal | warning - Theme based on which the radio button is styled.
9. `value`: any - Default option that is selected when the radio group is displayed on the interface.
10. `warning-text`: string - Warning text displayed below the radio group. Default is an empty string.

---
>title: Different events of Crayons radio component
>tags: crayons, radio, ui, component, events
>content:

1. `fwBlur` - Triggered when the radio button loses focus.
2. `fwChange` - Triggered when the radio button is toggled.
3. `fwFocus` - Triggered when the radio button comes into focus.
4. `fwDeselect` - Triggered when the radio button in focus is cleared.
5. `fwSelect` - Triggered when the radio button in focus is selected.

---
>title: Different events of Crayons radio group component
>tags: crayons, radio-group, ui, component, events
>content:

`fwChange` - Triggered when an option in the Radio Group is selected or deselected.

---
>title: Different methods of Crayons radio component
>tags: crayons, radio, ui, component, events
>content:

`setFocus()` - Sets focus on a specific `fw-radio`.

---
>title: Different methods of Crayons radio group component
>tags: crayons, radio-group, ui, component, events
>content:

`setFocus()` - Sets focus on a specific `fw-radio-group`.

---
>title: using Crayons radio component in HTML
>tags: crayons, radio, ui, component, HTML
>code:

Import Crayons in your head section of the HTML file using the following scripts.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

Include below content in your HTMl section
```html
<fw-radio checked description="Select to agree">Agree or Disagree</fw-radio><br><br>
<fw-radio checked disabled value="dr">Disabled radio</fw-radio>
```

---
>title: using Crayons radio component in ReactJS
>tags: crayons, radio, ui, component, react
>code:

Update your `<component>.js` as below
```js
import React from "react";
import ReactDOM from "react-dom";
import { FwRadio } from "@freshworks/crayons/react";
function App() {
  return (<div>
        <FwRadio checked description="Select to agree">Agree or Disagree</FwRadio><br/><br/>
        <FwRadio checked disabled value="dr">Disabled radio</FwRadio>
    </div>);
}
```

---
>title: using Crayons radio group component in HTML
>tags: crayons, radio-group, ui, component, HTML
>code:

Import Crayons in your head section of the HTML file using the following scripts.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

Include below section in your HTML part
```html
<fw-radio-group name="Profile" value="au" allow-empty>
  <fw-radio value="au">Auditory</fw-radio>
  <fw-radio value="vi">Visual</fw-radio>
  <fw-radio value="re">Restless</fw-radio>
</fw-radio-group>
```

---
>title: using Crayons radio group component in ReactJS
>tags: crayons, radio-group, ui, component, react
>code:

Update your `<component>.js` as below
```js
import React from "react";
import ReactDOM from "react-dom";
import { FwRadio, FwRadioGroup } from "@freshworks/crayons/react";
function App() {
  return (<div>
        <FwRadioGroup name="Profile" value="au" allowEmpty>
          <FwRadio value="au">Auditory</FwRadio>
          <FwRadio value="vi">Visual</FwRadio>
          <FwRadio value="re">Restless</FwRadio>
        </FwRadioGroup>
    </div>);
}
```

---
