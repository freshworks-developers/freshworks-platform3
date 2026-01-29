>title: how to use Crayons forms
>tags: crayons, forms
>content:

With Crayons, the HTML element `fw-form` displays a form on the user interface and enables automatic form submission and gathering the input values to use in further actions.
Freshworks Crayons support 2 types of forms
1. Static Form - Render form based on the children passed as slots.
2. Dynamic Form - With dynamic form, you can dynamically set the form input elements where form is rendered based on the schema passed as a prop.

---
>title: how to use Crayons static forms
>tags: crayons, forms
>code:

Example of static form. Add this section to you `component.html`

```html
<div id="static-form-container">
  <fw-form id="fw-static-form">
    <fw-form-control type="TEXT" name="first_name" placeholder="First Name" required label="First Name" id="first_name"></fw-form-control>
    <fw-form-control type="TEXT" name="last_name" placeholder="Last Name" required label="Last Name" id="last_name"></fw-form-control>
    <fw-form-control name="cin" type="TEXT" required label="Custom native in">
      <input name="cin" id="cin" placeholder="custom input" autocomplete="off" style="width:100%"/>
    </fw-form-control>
  </fw-form>
  <fw-button id="submit-static-form">Submit</fw-button>
  <fw-button id="reset-static-form">Reset</fw-button>
</div>
<script type="application/javascript">
  var formStatic = document.querySelector('#fw-static-form');
  document.querySelector('#submit-static-form').addEventListener('click', async (e) => {
    const { values, isValid } = await formStatic.doSubmit(e);
  });
  document.querySelector('#reset-static-form').addEventListener('click', (e) => {
    if (document.querySelector('#cin')) document.querySelector('#cin').value = '';
    formStatic.doReset(e);
  });
  function handleCustomInput(e) {
    formStatic.setFieldValue([e.target.name], e.target.value);
  }
  document.querySelector('#cin').addEventListener('input', handleCustomInput);
  document.querySelector('#cin').addEventListener('change', handleCustomInput);
</script>
```

---
>title: Use Crayons form inside an accordian
>tags: crayons, forms
>code:

Form can be created inside an accordion by passing the form to accordion body. Add this section to your `component.html`

```jsx
<div style="width: 300px;">
  <fw-accordion expanded style="--fw-accordion-border: 1px solid #ccc">
    <fw-accordion-title style="--fw-accordion-title-background-color: #F5F7F9; --fw-accordion-title-expanded-icon-color: #2C5CC5;
    --fw-accordion-title-collapsed-icon-color: #264966; --fw-accordion-title-font-size: 14px; --fw-accordion-title-font-weight: 600;
    --fw-accordion-title-line-height: 20px;">Title</fw-accordion-title>
    <fw-accordion-body style="--fw-accordion-body-background-color: #FFFFFF">
      <div id="accordion-form">
        <fw-button id="accordion-form-submit" color="secondary" style="display: block; margin-bottom:10px;">Submit</fw-button>
        <fw-button id="accordion-form-reset" style="display: block;">Reset</fw-button>
      </div>
    </fw-accordion-body>
  </fw-accordion>
</div>
<script type="application/javascript">
  var accFormContainer = document.querySelector('#accordion-form');
  document.querySelector('#accordion-form-submit').addEventListener('click', async (e) => {
    const { values, isValid } = await fwStaticForm.doSubmit(e);
  });
  document.querySelector('#accordion-form-reset').addEventListener('click', (e) => {
    fwStaticForm.doReset(e);
  });
  var accFormSchema = {
    name: 'Test Form',
    fields: [
    ],
  };
  var accForm = document.createElement('fw-form');
  accFormContainer.prepend(accForm);
  var fields = accFormSchema.fields.map((field) => {
    if (field.type === 'DROPDOWN' || field.type === 'MULTI_SELECT') {
      return {
        ...field,
        choices: field.choices?.map((f) => ({ ...f, text: f.value, value: f.id })),
      };
    } else return field;
  });
  var accFormSchema1 = { ...accFormSchema, fields: fields };
  accForm.formSchema = accFormSchema1;
</script>
```

---
>title: how to filter display of form fields of Crayons form
>tags: crayons, forms
>code:

Invoke `setFieldSearchText` method on the form passing a text that filters the display of the form fields matching the field's label.
```js
<fw-input search id="form-filter-search" placeholder="Type to filter Form Fields..."></fw-input>
<div id="form-container-search">
  <fw-button id="submit-search">Submit</fw-button>
  <fw-button id="reset-search">Reset</fw-button>
</div>
<script type="application/javascript">
  var formSearch = document.createElement('fw-form');
  var formContainerSearch = document.querySelector('#form-container-search');

  document
    .querySelector('#form-filter-search')
    // you can debounce this function if required
    .addEventListener('fwInput', (e) => {
      formSearch.setFieldSearchText(e.detail.value);
    });
  document
    .querySelector('#submit-search')
    .addEventListener('click', async (e) => {
      const { values, isValid } = await formSearch.doSubmit(e);
    });
  document.querySelector('#reset-search').addEventListener('click', (e) => {
    formSearch.doReset(e);
  });
  var formSchemaSearch = {
    name: 'Test Form',
    fields: [
    ],
  };
  var initialValues = {
    is_indian_citizen: true,
  };
  formContainerSearch.prepend(formSearch);
  // do any customisation on the field schema to match the props of crayons components.
  var fieldsSearch = formSchemaSearch.fields.map((field) => {
    // select expects `text` and `value` prop
    if (field.type === 'DROPDOWN' || field.type === 'MULTI_SELECT') {
      return {
        ...field,
        choices: field.choices?.map((f) => {
          return {
            ...f,
            text: f.value,
            value: f.id,
          };
        }),
      };
    } else return field;
  });

  var formSchemaSearch1 = {
    ...formSchemaSearch,
    fields: fieldsSearch,
  };
  formSearch.formSchema = formSchemaSearch1;
  formSearch.initialValues = initialValues;
</script>
```

---
>title: how to dynamically set field choices for Crayons form
>tags: crayons, forms
>code:

Import Crayons in your head section of the HTML file using the following scripts.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

Invoke `setFieldChoices` method on the form passing the name of the field and choices array to update the choices in the `DROPDOWN`/`MULTI_SELECT` form's field-control.
```js
<div id="form-container-fchoices">
  <fw-button id="submit-fchoices">Submit</fw-button>
  <fw-button id="reset-fchoices">Reset</fw-button>
  <fw-button id="update-choices">Update Choices Of Order Status</fw-button>
</div>
<script type="application/javascript">
  const formFieldChoices = document.createElement('fw-form');
  const formContainerFieldchoices = document.querySelector(
    '#form-container-fchoices'
  );
  document
    .querySelector('#update-choices')
    .addEventListener('click', async (e) => {
      const newChoices = [
      ];
      await formFieldChoices.setFieldChoices('order_status', newChoices, {
        option_label_path: 'value',
        option_value_path: 'id',
      });
    });
  document
    .querySelector('#submit-fchoices')
    .addEventListener('click', async (e) => {
      const { values, isValid } = await formFieldChoices.doSubmit(e);
    });
  document.querySelector('#reset-fchoices').addEventListener('click', (e) => {
    formFieldChoices.doReset(e);
  });
  var formSchemaFieldChoices = {
    name: 'Test Form',
    fields: [
        ],
      },
    ],
  };
  var initialValuesFChoices = {
    is_indian_citizen: true,
  };
  formContainerFieldchoices.prepend(formFieldChoices);

  var formSchemaFChoices1 = {
    ...formSchemaFieldChoices,
  };
  formFieldChoices.formSchema = formSchemaFChoices1;
  formFieldChoices.initialValues = initialValuesFChoices;
</script>
```

---
>title: how to set required status on the form fields for Crayons form
>tags: crayons, forms
>content:

Use `setFieldsRequiredStatus` method to set required status on the form fields dynamically.
parameter: `requiredStatusObj` - Object with key as form field name and value denoting if the field should be marked as required or not. For example
```js
setFieldsRequiredStatus({ first_name: true, last_name: true });
```

---
>title: Set value on the form fields dynamically
>tags: crayons, forms
>content:

Use `setFieldsValue` method to set values on the form fields dynamically.
parameter: `valuesObj` - Object with key as form field name and value as the updated value for the field.
`shouldValidate` - should this form be validated with the updated values. Default to `true`
For Example
```js
setFieldsValue({ first_name: "new name", last_name: "new last name" }, true);
```

---
>title: Validations on Crayons form
>tags: crayons, forms
>content:

Validation can be done using Yup based `validationSchema` or `validate` function prop. You can use `validationSchema` prop to do Yup based validation. Please use 0.32 version of Yup.
Both `validationSchema` and `validate` prop can be used together.

>code:
```js
const validationSchema = Yup.object().shape({
  first_name: Yup.string()
    .required('First name is required')
    .min(5, 'min 5 char')
    .nullable(),
});
const validate = async (values: any) => {
  // do custom validation and return error or {}
  return {
    // last_name: "last name is errored",
  };
};
```

---
>title: Example for validation using Yup schema for Crayons form
>tags: crayons, forms
>code:

1. Install Yup via CDN as below:
```shell
import * as Yup from 'https://cdn.skypack.dev/yup@0.32';
window.Yup = Yup;
```
1. Import Yup via CDN in your code
```js
<script type="module">
  import * as Yup from 'https://cdn.skypack.dev/yup@0.32';
  window.Yup = Yup;
</script>
```
1. Write the form and its validation
```html
<div id="form-container-validation">
  <fw-button id="submit-validation">Submit</fw-button>
  <fw-button id="reset-validation">Reset</fw-button>
</div>
<script type="application/javascript">
  var formvalidation = document.createElement('fw-form');
  var formContainervalidation = document.querySelector(
    '#form-container-validation'
  );
  document
    .querySelector('#submit-validation')
    .addEventListener('click', async (e) => {
      const { values, isValid } = await formvalidation.doSubmit(e);
    });
  document.querySelector('#reset-validation').addEventListener('click', (e) => {
    formvalidation.doReset(e);
  });
  const validationSchema = Yup.object().shape({
    first_name: Yup.string()
      .required('First name is required')
      .min(5, 'min 5 char')
      .nullable(),
  });
  var formSchemavalidation = {
    name: 'Test Form',
    fields: [
    ],
  };
  formContainervalidation.prepend(formvalidation);
  // do any customisation on the field schema to match the props of crayons components.
  formvalidation.validationSchema = validationSchema;
</script>
```

---
>title: Interfaces for Crayons form
>tags: crayons, forms
>content:

Crayons forms support following interfaces
1. `FormValues`
2. `FormSubmit`
3. `FormErrors`
4. `FormRequired`
5. `fwFormValueChanged` - gets emitted whenever there is a change in the value of any of the form field.
6. `fwFormValuesChanged` - gets emitted whenever there is a change in the value of any of the form field and returns the current form state with the value of all the form fields.

>code:

1. FormValues example
  ```js
  type FormValues = {
    [field: string]: any,
  };
  ```
2. FormSubmit example
  ```js
  type FormSubmit = {
    values: FormValues,
    errors: FormErrors<FormValues>,
    isValid: boolean,
  };
  ```
3. FormErrors example
  ```js
  type FormErrors = {
    [K in keyof FormValues]?: string;
  };
  ```
4. FormRequired example
  ```js
  type FormRequired = {
    [K in keyof FormValues]?: boolean;
  };
  ```
5. `fwFormValueChanged` Event example
  ```js
  var form = document.querySelector('fw-form');
  form.addEventListener('fwFormValueChanged', (e) => {
    console.log('field', e.detail.field);
    console.log('value', e.detail.value);
  });
  ```
6. `fwFormValuesChanged` Event example
  ```js
  type FormSubmit = {
    values: FormValues,
    errors: FormErrors<FormValues>,
    isValid: boolean,
  };
  ```

---
>title: Crayons Form Properties
>tags: crayons, forms
>content:

Crayons forms have several properties that control their behavior:

1. `customTypeMapper` (attribute: `custom-type-mapper`): An object that maps the types of fields in the schema to internal field types such as `TEXT`, `DROPDOWN`, `EMAIL`, etc. The default value is an empty object `{}`.

Example:
```js
{
  'CUSTOM_TEXT': { type: 'TEXT' },
  'SELECT': { type: 'DROPDOWN' },
  'TEL': { type: 'PHONE_NUMBER' },
  'CHECKBOX': { type: 'CHECKBOX' },
  'TEXTAREA': { type: 'PARAGRAPH' },
  'DATETIME': { type: 'DATE_TIME' },
  'INTEGER': { type: 'NUMBER' },
}
```

2. `formId` (attribute: `form-id`): An ID that uniquely identifies the form. If not set, a random ID will be generated. The default value is a random UUID (`uuidv4()`).
3. `formSchema` (attribute: `form-schema`): The schema used to render the dynamic form. It contains an array of fields, each pointing to a form control. The default value is an empty object `{}`.
4. `initialValues` (attribute: `initial-values`): An object with keys pointing to field names, representing the initial field values of the form. The default value is an empty object `{}`.
5. `mapperType` (attribute: `mapper-type`): Specifies the type of mapper used. Possible values are `LEGO`, `FORMSERV`, and `CUSTOM`. The default value is `LEGO`.
6. `validate` (attribute: `validate`): A function used to validate the form's values asynchronously. It should return a Promise that resolves to an errors object, where the keys match the field names. The default value is `undefined`.
7. `validateOnBlur` (attribute: `validate-on-blur`): A boolean indicating whether the form should be validated on each input's `onBlur` event. The default value is `true`.
8. `validateOnInput` (attribute: `validate-on-input`): A boolean indicating whether the form should be validated on each input's `onInput` event. The default value is `true`.
9. `validationSchema` (attribute: `validation-schema`): A YUP-based validation schema for handling validation. The default value is an empty object `{}`.
10. `wait` (attribute: `validate-on-input`): The number of milliseconds to delay before performing validation on input. The default value is `200`.

---
>title: Form Events
>tags: crayons, forms
>content:

1. `fwFormValueChanged` - event that gets emitted when value in a form field changes. Type: `CustomEvent<any>`
2. `fwFormValuesChanged` - event that gets emitted when values change. `CustomEvent<any>`

---
>title: what are the Crayons form methods available?
>tags: crayons, forms
>content

Crayons form has the following methods:
1. `doReset(event?: any)`: Resets the form to its initial state. Returns a Promise that resolves when the reset is complete.
2. `doSubmit(event?: any)`: Submits the form. Returns a Promise that resolves with a `FormSubmit` object.
3. `getValues()`: Retrieves the current values from the form. Returns a Promise with an object containing `values` and `serializedValues`, where `serializedValues` are transformed values based on field type.
4. `setFieldChoices(field: string, choices: Array<any>, fieldOptions?: any)`: Sets field choices for a dropdown, multi-select, or radio fields in the form schema. Returns a Promise.
5. `setFieldErrors(errorObj: FormErrors<FormValues>)`: Sets errors on the form fields. Returns a Promise.
6. `setFieldSearchText(text: string)`: Filters the display of fields in the form based on the passed text. Returns a Promise.
7. `setFieldValue(field: string, value: any, shouldValidate?: boolean)`: Sets a value on a form field. Returns a Promise. The `shouldValidate` parameter determines whether the form field should be validated with the updated value. Default is `true`.
8. `setFieldsRequiredStatus(requiredStatusObj: FormRequired<FormValues>)`: Sets the required status on form fields. Returns a Promise.
9. `setFieldsValue(valuesObj: FormValues, shouldValidate?: boolean)`: Sets values on the form fields. Returns a Promise. The `shouldValidate` parameter determines whether the form should be validated with the updated values. Default is `true`.


---
>title: Dynamic Form example
>tags: crayons, forms
>code:

Pass `formSchema` to render Dynamic Form. You can also pass `initialValues` to the form.
```js
<div id="form-container">
  <fw-button id="submit">Submit</fw-button>
  <fw-button id="reset">Reset</fw-button>
</div>
<script type="application/javascript">
  var form = document.createElement('fw-form');
  var formContainer = document.querySelector('#form-container');
  document.querySelector('#submit').addEventListener('click', async (e) => {
    const { values, isValid } = await form.doSubmit(e);
  });
  document.querySelector('#reset').addEventListener('click', (e) => {
    form.doReset(e);
  });
  var formSchema = {
    name: 'Test Form',
    fields: [
    ],
  };
  formContainer.prepend(form);
  // do any customisation on the field schema to match the props of crayons components.
  var fields = formSchema.fields.map((field) => {
    // select expects `text` and `value` prop
    if (field.type === 'DROPDOWN' || field.type === 'MULTI_SELECT') {
      return {
        ...field,
        choices: field.choices?.map((f) => {
          return {
            ...f,
            text: f.value,
            value: f.id,
          };
        }),
      };
    } else return field;
  });
  var formSchema1 = {
    ...formSchema,
    fields: fields,
  };
  form.formSchema = formSchema1;
</script>
```

---
>title: form schema
>tags: crayons, forms
>code:

form schema should follow the below structure:

```js
{
  name: '', // Name of the form.
  fields: [ // Each item in this array corresponds to a crayons input component.
    {
      id: '2978f820-704b-46c7-9f88-110e14e34a8c', // ID of the input control
      name: 'first_name', // Will be used while serializing form.
      label: 'First Name', // Label to display.
      type: '', // Type of the crayons input component. Possible values are TEXT/NUMBER/DECIMAL/DROPDOWN/MULTI_SELECT/RADIO/CHECKBOX/DATE/PARAGRAPH/EMAIL/TIME/DATE_TIME/FILES
      position: 3, // Order of the component in the form.
      required: true, // Required while submitting the form.
      editable: false // setting this to false, will disable the field.
      placeholder: 'Enter…', // placeholder for the input
      hint: 'Please provide a text of at max 100 characters', // Hint text to be displayed below.
      choices: [], // List of options for DROPDOWN/MULTI_SELECT types. Each option should be of below structure:
      {
      id: 1, // ID for the option.
      text: '', // Text for the option.
      value: '', // Value for the option.
      }
    }
  ]
}
```

---
>title: disable dynamic form fields
>tags: crayons, forms
>content:

In a Dynamic form, to disable any form field set `editable` to `false` in the form schema. You will not be able to set a value dynamically to the disabled form field. Instead set the value via `initialValues`. In a Static form set disabled`` attribute on the `fw-form-control` to disable the form field.

---
>title: Text and Value indicators for select (DROPDOWN/MULTI_SELECT) component choices
>tags: crayons, forms
>content:

The choices for select component(dropdown/multi_select) can follow any of the below formats.
1. Using `field_options` object. Pass the key name that needs to be displayed as the dropdown option's text using, `option_label_path` and the key name that needs to to be processed in the backend using, `option_value_path`.
2. Using text and value as key names in choices

>code:

1. Using `field_options` object.
```js
{
  id: '420oib8f-25cf-47ce-89c6-5410fe3d4315',
  name: 'languages_known',
  label: 'Languages Known',
  type: 'MULTI_SELECT',
  position: 1,
  required: true,
  placeholder: 'Choose',
  hint: 'Select one or more values',
  field_options: {
    option_label_path: 'value', // This denotes 'value' in the choices object needs to be displayed as the dropdown option text,i.e English & Hindi
    option_value_path: 'id',  // This denotes 'id' in the choices object needs to be used as the dropdown option's value for backend
  },
  choices: [
  ],
}
```
2. Using text and value as key names in choices
```js
{
  id: '127yub8f-25cf-47ce-89c6-67yufe3d4315',
  name: 'languages_known',
  label: 'Languages Known',
  type: 'MULTI_SELECT',
  position: 1,
  required: true,
  placeholder: 'Choose',
  hint: 'Select one or more values',
  choices: [
  ],
}
```
