>title: what is crayons datepicker component
>tags: crayons, datepicker, ui, component
>content:

`fw-datepicker` displays an input box with a calendar that enables selecting a date or date range. The values preselected in the input box and calendar are based on the fw-datepicker attribute values.
All the date formats passed as attribute's values must be valid `ISO Date format`.

---

>title: using Crayons datepicker component in HTML
>tags: crayons, datepicker, ui, component, HTML
>code:

1. Ensure you have Crayons imported in your project via CDN

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

2. include following snippet in your HTML

```html
<fw-datepicker id="date1" value="2021-12-02" display-format="DD-MM-YYYY"></fw-datepicker>
<fw-label value="Date picker with readonly attribute" color="yellow"></fw-label><br />
<fw-datepicker readonly></fw-datepicker>
<fw-label
  value="Date picker with show-footer and clear-input attributes"
  color="yellow"
></fw-label><br />
<fw-datepicker show-footer="false" clear-input></fw-datepicker>
```

---

>title: using Crayons datepicker component in ReactJS
>tags: crayons, datepicker, ui, component, react
>code:

1. Ensure `@freshworks/crayons` dependency is added to your `package.json`
2. include below snippet in your `component.js` file
  ```js
  import React from "react";
  import ReactDOM from "react-dom";
  import { FwLabel, FwDatepicker } from "@freshworks/crayons/react";
  function App() {

    var getSelectedDate = function(e) {
      console.log(e.detail.value);
    }

    return (<div>
      <FwLabel value="Single date picker" color="yellow"></FwLabel><br/>
      <FwDatepicker value="2021-12-02" display-format="dd-MM-yyyy" onFwChange={getSelectedDate}></FwDatepicker>
      </div>)
  }
  ```

---

>title: Different properties of Crayons datepicker component
>tags: crayons, datepicker, ui, component, props, properties
>content:

```html
<fw-datepicker 
  clear-input
  display-format="locale"
  disabled
  error-text="Error"
  from-date="later-than-min"
  hint-text="Hint"
  required
  label="Date Picker"
  locale="en-US"
  max-date="2023-12-31"
  max-year="2030"
  min-date="2023-01-01"
  min-year="2000"
  mode="range"
  name="date-picker"
  placeholder="Select date/range"
  readonly
  show-footer
  show-time-picker
  state="error"
  time-format="HH:mm"
  to-date="earlier-than-max"
  value="2023-07-10"
  warning-text="Warning"
></fw-datepicker>
```

---

>title: Different events of Crayons datepicker component
>tags: crayons, datepicker, ui, component, events
>content:

1. `fwBlur` - Triggered when the input box loses focus.
2. `fwChange` - Triggered when the update button clicked.

---

>title: Different methods of Crayons datepicker component
>tags: crayons, datepicker, ui, component, events
>content:

1. `clearValue` - Clears the input value and unselects selected date.
2. `getValue()` - Returns the date value in ISO format.
3. `setFocus()` - Sets focus on a specific `fw-datepicker`. Use this method instead of the global `input.focus()`.

---

>title: Different CSS custom properties of Crayons datepicker component
>tags: crayons, datepicker, ui, component, css
>content:

1. `--fw-error-color` - Color of the error text.
2. `--fw-hint-color` - Color of the hint text.
3. `--fw-label-color` - Color of the label.
4. `--fw-warning-color` - Color of the warning text.

---

>title: A datepicker with a string value
>tags: crayons, datepicker, ui, component
>code:

Import Crayons in your head section of the HTML file using the following scripts.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

```html
<fw-label value="Date time picker with value" color="yellow"></fw-label><br />
<fw-datepicker
  show-time-picker
  value="2022-07-22T06:00:00.000Z"
></fw-datepicker>
```

---

>title: Date time picker with locale support
>tags: crayons, datepicker, ui, component, locale
>code:

Import Crayons in your head section of the HTML file using the following scripts.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

```html
<fw-datepicker show-time-picker locale="en-in"></fw-datepicker>
```

---

>title: Date time picker with setting time properties and `fwChange` event.
>tags: crayons, datepicker, ui, component, event
>code:

Import Crayons in your head section of the HTML file using the following scripts.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

1. To add a date time picker in a HTMl page use following snippet
  ```html
  <fw-datepicker show-time-picker id="time-range" locale="es"></fw-datepicker>
  ```
2. To use the change event `fwChange` with date time picker, use following snippet use following snippet inside your `<script>` tag
  ```js
  var timePicker = document.getElementById('time-range');
    timePicker.timeProps = {
      minTime: '10:00',
      maxTime: '18:00',
      interval: 60,
    };
  timePicker.addEventListener('fwChange', (e) => {
    console.log(e.detail);
  });
  ```

---
