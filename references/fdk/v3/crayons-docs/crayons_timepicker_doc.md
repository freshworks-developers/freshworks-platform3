>title: what is timepicker component in crayons
>tags: crayons, timepicker, component
>content:

The `fw-timepicker` component displays a list or drop-down box with prepopulated time values and enables picking a time. The time values displayed in the list box are based on the fw-timepicker attribute values.

>code:

1. To use the `timepicker` component as tags include this snippet in your HTML segment
```html
<fw-label value="An interval based picker" color="yellow"></fw-label><br/>
<fw-timepicker interval=45 format="hh:mm a"></fw-timepicker>
<fw-label value="A range based picker" color="yellow"></fw-label><br/>
<fw-timepicker min-time="04:30 PM" max-time="08:30 PM"></fw-timepicker>
```
1. To use the `timepicker` component as react element include this snippet in your `component.js`
```jsx
import React from "react";
import ReactDOM from "react-dom";
import { FwTimepicker } from "@freshworks/crayons/react";
function App() {
  return (<div>
          <label>An interval based picker</label><br/>
          <FwTimepicker interval={45} format="hh:mm a"></FwTimepicker>
          <label>A range based picker</label><br/>
          <FwTimepicker minTime="04:30 PM" maxTime="08:30 PM"></FwTimepicker>
    </div>);
}
```

---
>title: what are timepicker component Properties
>tags: crayons, timepicker, component, Properties
>content:

`FwTimepicker` component properties:

1. `allowDeselect` - Whether clicking on the already selected option disables it. Type: `boolean`, Default: `true`.
2. `caret` - Whether the arrow/caret should be shown in the timepicker. Type: `boolean`, Default: `true`.
3. `disabled` - Set true to disable the element. Type: `boolean`, Default: `false`.
4. `errorText` - Error text displayed below the text box. Type: `string`, Default: `''`.
5. `format` - Format in which time values are populated in the list box. Type: `string`, Default: `undefined`.
6. `hintText` - Hint text displayed below the text box. Type: `string`, Default: `''`.
7. `interval` - Time interval between the values displayed in the list, specified in minutes. Type: `number`, Default: `30`.
8. `label` - Label displayed on the interface for the component. Type: `string`, Default: `''`.
9. `locale` - Locale for which the timePicker needs to be shown. Defaults to the browser's current locale. Type: `string`, Default: `undefined`.
10. `maxTime` - Upper time-limit for the values displayed in the list. Type: `string`, Default: `undefined`.
11. `minTime` - Lower time-limit for the values displayed in the list. Type: `string`, Default: `undefined`.
12. `name` - Name of the component, saved as part of form data. Type: `string`, Default: `''`.
13. `optionsPlacement` - Placement of the options list with respect to the timepicker. Supported fields: `"bottom"`, `"bottom-end"`, `"bottom-start"`, `"left"`, `"left-end"`, `"left-start"`, `"right"`, `"right-end"`, `"right-start"`, `"top"`, `"top-end"`, `"top-start"`. Default: `"bottom"`.
14. `placeholder` - Text displayed in the select before an option is selected. Type: `string`, Default: `undefined`.
15. `readonly` - If true, the user cannot type in the text input. Type: `boolean`, Default: `false`.
16. `required` - Specifies the input box as a mandatory field. Type: `boolean`, Default: `false`.
17. `sameWidth` - Whether the dropdown should be the same width as that of the input. Type: `boolean`, Default: `true`.
18. `state` - Theme based on which the input of the timepicker is styled. Supports `"error"`, `"normal"`, `"warning"`. Default: `"normal"`.
19. `value` - The Time value. The value is always in the non-meridian format i.e., HH:mm. Type: `string`, Default: `undefined`.
20. `warningText` - Warning text displayed below the text box. Type: `string`, Default: `''`.

---
>title: what are timepicker events and methods
>tags: crayons, timepicker, component, Properties
>content:

The FwTimepicker component supports following events
1. `fwBlur` - Triggered when the list box loses focus.Type is `CustomEvent<any>`
2. `fwChange` - Triggered when a value is selected or deselected from the list box options. Type is`CustomEvent<any>`
3. `fwFocus` - Triggered when the list box comes into focus. Type is `CustomEvent<any>`
It supports `setFocus()` method which Sets focus on a specific `fw-timepicker` and returns `Promise<void>`

---
