>title: Crayons select component
>tags: crayons, select, ui, component
>content:

`fw-select` displays a list or drop-down box that enables selection of an option or multiple options from an available list of values.

To use `fw-select` in your HTML, include the following section:

```HTML
<fw-select
  label="House Name"
  required="true"
  value="1"
  placeholder="Your choice"
  hint-text="Select singular option"
>
  <fw-select-option value="1">Starks</fw-select-option>
  <fw-select-option value="2">Lannisters</fw-select-option>
</fw-select>
```

---
>title: Crayons `select-option` component
>tags: crayons, select, ui, component
>content:

`fw-select-option` provides child elements for fw-select, to populate the Select component’s list or drop-down box with values. If fw-select-option is used without the value attribute, when the form data is saved, the value of fw-select is the selected option’s text.

---
>title: Different properties of Crayons select component
>tags: crayons, select, ui, component, props, properties
>content:

Crayons `fw-select` properties:

1. `allow-deselect`: boolean - Whether clicking on the already selected option disables it. Default is true.
2. `caret`: boolean - Whether the arrow/caret should be shown in the select.
3. `checkbox`: boolean - Place a checkbox.
4. `creatableProps`: object - Properties for creatable select:
   - `isCreatable`: boolean - If true, the select accepts user input that is not present as options and adds them as options.
   - `validateNewOption`: (value) => boolean - Function to determine the error state for every new option entered.
   - `formatCreateLabel`: (label) => string - Gets the label for the "create new..." option in the menu.
5. `debounce-timer`: number - Debounce timer for the search promise function.
6. `disabled`: boolean - Disables the component on the interface. Default is false.
7. `error-text`: string - Error text displayed below the text box. Default is an empty string.
8. `force-select`: boolean - If true, the user must select a value. The default value is not displayed.
9. `hint-text`: string - Hint text displayed below the text box.
10. `hoist`: boolean - Option to prevent the select options from being clipped when the component is placed inside a container with `overflow: auto|hidden|scroll`.
11. `label`: string - Label displayed on the interface for the component.
12. `labelled-by`: string - If the default label prop is not used, then use this prop to pass the id of the label.
13. `max`: number - Works with `multiple` enabled. Configures the maximum number of options that can be selected with a multi-select component.
14. `max-height`: string - Sets the max height of select with multiple options selected and displays a scroll when the maxHeight value is exceeded.
15. `multiple`: boolean - Enables selection of multiple options. Default is false.
16. `name`: string - Name of the component, saved as part of form data.
17. `no-data-text`: string - Text to be displayed when there is no data available in the select.
18. `not-found-text`: string - Default option to be shown if the option doesn't match the filterText.
19. `option-label-path`: string - Key for determining the label for a given option.
20. `option-value-path`: string - Key for determining the value for a given option.
21. `options`: any - The data for the select component, the options will be of type an array of `fw-select-options`.
22. `options-placement`: string - Placement of the options list with respect to the select. Values: bottom, bottom-end, bottom-start, left, left-end, left-start, right, right-end, right-start, top, top-end, top-start.
23. `options-variant`: string - Graphics variant for the options: avatar, icon, or standard. The props for the icon or avatar are passed as an object via `graphicsProps`.
24. `placeholder`: string - Text displayed in the list box before an option is selected.
25. `readonly`: boolean - If true, the user cannot modify the default value selected. Default is true.
26. `required`: boolean - Specifies the select field as a mandatory field and displays an asterisk next to the label. Default is false.
27. `same-width`: boolean - Whether the select width should be the same as that of the options.
28. `search`: any - Filter function that takes in filterText and dataSource and returns a Promise. The returned promise should contain the array of options to be displayed.
29. `searchable`: boolean - Allow searching for a value. Default is true.
30. `selectedOptions`: any[] - Array of the options that are displayed as the default selection, in the list box.
31. `state`: string - Theme based on which the list box is styled. Values: error, normal, warning.
32. `tag-variant`: string - The variant of the tag to be used. Values: avatar, standard.
33. `type`: string - Type of option accepted as the input value. Values: number, text.
34. `value`: any - Value of the option that is displayed as the default selection, in the list box.
35. `variant`: string - The UI variant of the select to be used. Values: button, mail, standard.
36. `warning-text`: string - Warning text displayed below the text box.

---
>title: Different events of Crayons select component
>tags: crayons, select, ui, component, events
>content:

1. `fwBlur` - Triggered when the input box loses focus.
2. `fwChange` - Triggered when a value is selected or deselected from the list box options.
3. `fwFocus` - Triggered when the list box comes into focus.

---
>title: Different methods of Crayons select component
>tags: crayons, select, ui, component, events
>content:

1. `getSelectedItem()` - Returns the selected item.
2. `setFocus()` - Sets focus on a specific `fw-select`.
3. `setSelectedOptions()` - Sets the selected options to `fw-select`.
4. `setSelectedValues()` - Sets the value of `fw-select` with either string or array of string.

---
>title: Different CSS custom properties of Crayons select component
>tags: crayons, datepicker, ui, component, css
>content:

1. `--fw-error-color` - Color of the error text.
2. `--fw-hint-color` - Color of the hint text.
3. `--fw-label-color` - Color of the label.
4. `--fw-warning-color` - Color of the warning text.

---
>title: Different properties of Crayons select-options component
>tags: crayons, select-options, ui, component, props, properties
>content:

Crayons `fw-select-option` properties:

1. `allow-deselect`: boolean - Whether clicking on the already selected option disables it.
2. `allow-select`: boolean - Whether clicking on the option selects it.
3. `checkbox`: boolean - Place a checkbox.
4. `disabled`: boolean - Sets the state of the option to disabled. The selected option is disabled and greyed out. Default is false.
5. `graphics-props`: any - The props for the graphics variant, e.g., icon props in case of graphicsType = 'icon'.
6. `group-name`: string - Used in grouped list, provides the group to which the option belongs.
7. `hide-tick`: boolean - Hide tick mark icon.
8. `html`: boolean - Indicates that the option contains HTML content. Default is true.
9. `html-content`: string - HTML content displayed as the option.
10. `option-text`: string - Alternate text displayed on the interface instead of the actual HTML content.
11. `selected`: boolean - Sets the state of the option to selected. The selected option is highlighted and a check mark is displayed next to it. Default is false.
12. `sub-text`: string - Second line text, such as a description.
13. `text`: string - The text displayed in the option.
14. `value`: number | string - Value corresponding to the option, saved when the form data is submitted.
15. `variant`: string - Graphics variant for the option: avatar, icon, or standard. The props for the icon or avatar are passed as an object via `graphicsProps`.

---
>title: Different events of Crayons select-options component
>tags: crayons, select-options, ui, component, events
>content:

1. `fwBlur` - Triggered when an option loses focus.
2. `fwSelectAttempted` - Triggered when an option is clicked when allowSelect is false.
3. `fwFocus` - Triggered when an option is focused.
4. `fwSelected` - Triggered when an option is selected.

---
>title: Different methods of Crayons select-options component
>tags: crayons, select-options, ui, component, events
>content:

1. `setFocus()` - Sets focus on a specific `fw-select-option`.

---
>title: Crayons select and select-option component in HTML
>tags: crayons, select, ui, component, HTML
>code:

Import Crayons in your head section of the HTML file using the following scripts.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

To use `select-option` in your HTMl, Include below section
  ```HTML
  <fw-select
    label="House Name"
    required="true"
    value="1"
    placeholder="Your choice"
    hint-text="Select singluar option"
  >
    <fw-select-option value="1">Starks</fw-select-option>
    <fw-select-option value="2">Lannisters</fw-select-option>
  </fw-select>
  ```

---
>title: Crayons select and select-option component in ReactJS
>tags: crayons, select, select-option, ui, component, react
>code:

To use `select-option` in your react component, Include below section in `<component>.js`
  ```js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import { FwSelect, FwSelectOption } from '@freshworks/crayons/react';
  function App() {
    return (
      <div>
        <FwSelect
          label='House Name'
          required
          value='1'
          placeholder='Your choice'
          hintText='Select singluar option'
        >
          <FwSelectOption value='1'>Starks</FwSelectOption>
          <FwSelectOption value='2'>Lannisters</FwSelectOption>
        </FwSelect>
      </div>);
  }
  ```

---
>title: Using select and select options with multiple option, placeholders and error messages.
>tags: crayons, select, ui, component, react
>code:

Import Crayons in your head section of the HTML file using the following scripts.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

To use `select-option` in your HTMl, Include below section
```html
<fw-select
  label="Names"
  hint-text="Select multiple options"
  multiple
  placeholder="Game of thrones characters"
  error-text="Select atleast one option"
>
  <fw-select-option value="1" selected>Starks</fw-select-option>
  <fw-select-option value="2">Lannisters</fw-select-option>
  <fw-select-option value="3">Sand</fw-select-option>
  <fw-select-option value="4">Greyjoys</fw-select-option>
  <fw-select-option value="5">Tyrell</fw-select-option>
</fw-select>
```

---
>title: Using select and select options with HTML content.
>tags: crayons, select, ui, component, react
>code:

Import Crayons in your head section of the HTML file using the following scripts.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

To use `select-option` in your HTMl, Include below section
```html
<fw-select
  label="Names"
  placeholder="House Name"
>
  <fw-select-option html html-content="<b>Starks</b>" selected="true"></fw-select-option>
  <fw-select-option html html-content="<b>Lannisters</b>"></fw-select-option>
</fw-select>
```

---
>title: Set select options dynamically.
>tags: crayons, select, ui, component
>code:

Import Crayons in your head section of the HTML file using the following scripts.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

1. To use `select-option` in your HTMl, Include below section
  ```html
  <fw-select
    id="complexSelect"
    label="Strawhat Pirates"
    placeholder="Your choices"
    hint-text="Select multiple options"
    options-variant="icon"
    multiple
  >
  </fw-select>
  ```
2. Include below section in your `<script>` tag
  ```js
  var iconDataSource = [
      {
        value: '1',
        text: 'Luffy',
        subText: 'Pirate King',
        graphicsProps: { name: 'verified' },
      },
      {
        value: '2',
        text: 'Zorro',
        subText: 'Best Swordsman',
        graphicsProps: { name: 'magic-wand' },
      }
    ];
    var iconVariant = document.getElementById('complexSelect');
    iconVariant.options = iconDataSource;
  ```

---
>title: Using `setSelectedOptions()` to set the selected option and `getSelectedItem()` with `fwChange` event.
>tags: crayons, select, ui, component, event, method
>code:

1. To use `select-option` in your HTMl, Include below section
  ```html
  <fw-select
    label="Pick favorite characters"
    placeholder="Your choices"
    hint-text="Select multiple options"
    id="multiSelect"
    multiple
  >
    <fw-select-option value="1">Starks</fw-select-option>
    <fw-select-option value="2">Lannisters</fw-select-option>
    <fw-select-option value="3">Sand</fw-select-option>
  </fw-select>
  ```
2. Include below section in your `<script>` tag
  ```js
  var iconDataSource = [
      {
        value: '1',
        text: 'Luffy',
        subText: 'Pirate King',
        graphicsProps: { name: 'verified' },
      },
      {
        value: '2',
        text: 'Zorro',
        subText: 'Best Swordsman',
        graphicsProps: { name: 'magic-wand' },
      }
    ];
    var iconVariant = document.getElementById('complexSelect');
    iconVariant.options = iconDataSource;
  ```

---
