>title: what is data table component in crayons
>tags: crayons, datatable, component
>content:

`fw-data-table` are used for data visualization. Some business usecases require visualization of thier to business users. It's straightforward with this crayons component to build such capability to your application.

---
>title: how to use data table component in crayons
>tags: crayons, datatable, component
>code:

```html
<fw-data-table id="datatable" is-selectable="true" label="Data table 1"></fw-data-table>

<script type="application/javascript">
  var data = {
    columns: [
      { "key": "name", "text": "Name" },
      { "key": "group", "text": "Group" }
    ],
    persons: [
      { "id": "1234", "name": "Alexander Goodman", "role": "Administrator" },
      { "id": "2345", "name": "Ambrose Wayne", "role": "Supervisor" }
    ]
  };

  document.getElementById('datatable').columns = data.columns;
  document.getElementById('datatable').rows = data.persons;
</script>
```

---
>title: how to add custom cells in data tables
>tags: crayons, datatable, component
>content:

Column Variant - Row Value:
For the row value of this column variant, it should be an object with the following properties:

1. `text`: (Type: string) Text to be displayed in the cell.
2. `href`: (Type: string) URL to point to when the text is clicked.
3. `target`: (Type: string, Optional) An optional argument specifying where to open the linked document. The possible values are:
   - `_blank`: Opens the linked document in a new window or tab.
   - `_self`: Opens the linked document in the same frame as it was clicked (this is the default behavior).
   - `_parent`: Opens the linked document in the parent frame.
   - `_top`: Opens the linked document in the full body of the window.
   - `framename`: Opens the linked document in the named iframe.

---
>title: how to use column variant of datatable in HTML
>tags: crayons, datatable, component
>code

```html
<fw-data-table id="datatable-2" label="Data table 2"></fw-data-table>

<script type="application/javascript">
  var data = {
    columns: [
      { "key": "search", "text": "Search Engine", "position": 1, "variant": "anchor" },
      { "key": "rank", "text": "Rank", "position": 2 }
    ],
    rows: [
      { "id": "001", "search": { "text": "Google", "href": "https://www.google.com", "target": "_blank" }, "rank": 1 },
      { "id": "002", "search": { "text": "Bing", "href": "https://www.bing.com" }, "rank": 2 }
    ]
  };

  document.getElementById('datatable-2').columns = data.columns;
  document.getElementById('datatable-2').rows = data.rows;
</script>
```

---
>title: how to use column variant of datatable in React
>tags: crayons, datatable, component
>code

Example in react.js is following:

```js
import React from "react";
import ReactDOM from "react-dom";
import { FwDataTable } from "@freshworks/crayons/react";

function App() {
  const data = {
    columns: [
      { "key": "search", "text": "Search Engine", "position": 1, "variant": "anchor" },
      { "key": "rank", "text": "Rank", "position": 2 }
    ],
    rows: [
      { "id": "001", "search": { "text": "Google", "href": "https://www.google.com", "target": "_blank" }, "rank": 1 },
      { "id": "002", "search": { "text": "Bing", "href": "https://www.bing.com" }, "rank": 2 }
    ]
  };

  return (
    <FwDataTable columns={data.columns} rows={data.rows} label="Data Table 2" />
  );
}
```

---
>title: how to add custom cells in data tables
>tags: crayons, datatable, component
>content:

Row value for this column variant should be an object with the following properties:

1.  name - Name of the user
2.  email - email of the user
3.  image (optional) - url of the user image to be displayed in the avatar

_If image property is not present, user's initials from the name property will be shown inside the avatar._

>code
```html
<fw-data-table id="datatable-3" label="Data table 3"></fw-data-table>

<script type="application/javascript">
  var data = {
    columns: [
      { "key": "createdby", "text": "Created By", "position": 1, "variant": "user" },
      { "key": "objectname", "text": "Object Name", "position": 2 }
    ],
    rows: [
      {
        "id": "0011",
        "objectname": "Hotels",
        "createdby": {
          "image": "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6",
          "name": "Alexander Goodman",
          "email": "alexander.goodman@freshdesk.com",
          "alt": "Profile picture of Alexander Goodman"
        }
      }
    ]
  };

  document.getElementById('datatable-3').columns = data.columns;
  document.getElementById('datatable-3').rows = data.rows;
</script>
```

---
>title: how to add custom cells in data tables in React
>tags: crayons, datatable, component
>code:

Example in React
```js
import React from "react";
import ReactDOM from "react-dom";
import { FwDataTable } from "@freshworks/crayons/react";

function App() {
  const data = {
    columns: [
      { "key": "createdby", "text": "Created By", "position": 1, "variant": "user" },
      { "key": "objectname", "text": "Object Name", "position": 2 }
    ],
    rows: [
      {
        "id": "0011",
        "objectname": "Hotels",
        "createdby": {
          "image": "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6",
          "name": "Alexander Goodman",
          "email": "alexander.goodman@freshdesk.com",
          "alt": "Profile picture of Alexander Goodman"
        }
      }
    ]
  };

  return <FwDataTable columns={data.columns} rows={data.rows} label="Data Table 3" />;
}
```

---
>title: how to add icon column variants
>tags: crayons, datatable, component, icon column
>code:
Add icons to an entire column. This helps in making icons be visiually the first source of information.

```html
<fw-data-table id="datatable-31" label="Data table 31"></fw-data-table>

<script type="application/javascript">
  var data = {
    columns: [
      { "key": "icon", "text": "Icon", "position": 1, "variant": "icon" },
      { "key": "name", "text": "Icon name", "position": 2 }
    ],
    rows: [
      { "id": "0011", "icon": { "name": "agent" }, "name": "Agent" },
      { "id": "0022", "icon": { "name": "chat-online" }, "name": "Chat" }
    ]
  };

  document.getElementById('datatable-31').columns = data.columns;
  document.getElementById('datatable-31').rows = data.rows;
</script>
```


---
>title: how to add icon column variants
>tags: crayons, datatable, component, icon column
>code:

See the creating icon column in react

```js
import React from "react";
import ReactDOM from "react-dom";
import { FwDataTable } from "@freshworks/crayons/react";

function App() {
  const data = {
    columns: [
      { "key": "icon", "text": "Icon", "position": 1, "variant": "icon" },
      { "key": "name", "text": "Icon name", "position": 2 }
    ],
    rows: [
      { "id": "0011", "icon": { "name": "agent" }, "name": "Agent" },
      { "id": "0022", "icon": { "name": "chat-online" }, "name": "Chat" }
    ]
  };

  return <FwDataTable columns={data.columns} rows={data.rows} label="Data Table 31" />;
}
```

---
>title: how to add paragraph column variants
>tags: crayons, paragraph column, component, datatable
>content:
We can use this column variant when we have a bigger text and we need to trim/show this text. Row value for this column variant should be an object with the following properties:

text: Paragraph to trim. Only first three lines from this paragraph would be visible initially. User has to expand to see the full text.

>code:
```html
<fw-data-table id="datatable-32" label="Data table 32"></fw-data-table>

<script type="application/javascript">
  var data = {
    columns: [
      { "key": "objectname", "text": "Object Name" },
      {
        "key": "objectdesc",
        "text": "Object Description",
        "variant": "paragraph",
        "widthProperties": { "width": "600px" }
      }
    ],
    rows: [
      {
        "id": "0011",
        "objectname": "Hotels",
        "objectdesc": {
          "text": "Fusce nec nibh ut dui rutrum lobortis. In eu lacus molestie, dignissim erat sit amet, mollis tortor."
        }
      }
    ]
  };

  document.getElementById('datatable-32').columns = data.columns;
  document.getElementById('datatable-32').rows = data.rows;
</script>
```


---
>title: how to add paragraph column variants in React
>tags: crayons, paragraph column, component, datatable
>code:

Adding paragraph column in react in the data-table
```js
import React from "react";
import ReactDOM from "react-dom";
import { FwDataTable } from "@freshworks/crayons/react";
function App() {

  var data = {
    columns: [{
      "key": "objectname",
      "text": "Object Name"
    }, {
      "key": "objectdesc",
      "text": "Object Description",
      "variant": "paragraph",
      "widthProperties": {
        "width": "600px"
      }
    }],
    rows: [{
      "id": "0011",
      "objectname": "Hotels",
      "objectdesc": {
        "text": "Fusce nec nibh ut dui rutrum lobortis. In eu lacus molestie, dignissim erat sit amet, mollis tortor."
      }
    }]
  };

  return (
    <FwDataTable columns={data.columns} rows={data.rows} label="Data Table 32">
    </FwDataTable>
  );
}
```

---
>title: how to use custom templates
>tags: crayons, custom templates, component
>content:
This codeblock shows how to use custom cell function to display HTML content in a cell.

To have custom table headers, we can use 'customHeader' property. This will take in a function with parameters same as customTemplate.


>code:

```js
  var columns = [{
    "key": "bookname",
    "text": "Book name",
    "customTemplate": (createElement, props) => {
      return createElement('b', {}, props.text);
    }
  }]

 // Usage examples for createElement:
  // Params should be either (tagName, children) or (tagName, properties, children)
  createElement('div', [createElement('h2', 'Hello')]);
  createElement('div#foo.bar.baz', [createElement('h2', 'Hello')]);
  createElement('div.bar.baz', [createElement('h2', 'Hello')]);
  createElement('div', {className: 'greeting'}, [createElement('h2', 'Hello')]);
```

---
>title: how to column text alignment in data table
>tags: crayons, datatable, component, alignment
>content:
You can set text alignment in the column by passing the textAlign in column configuration. In the below example, column 'Icon' is center aligned.

>code:
```html
<fw-data-table id="data-table-40" label="Data table 40"></fw-data-table>

<script type="application/javascript">
  var data = {
    columns: [
      {
        "key": "icon",
        "text": "Icon",
        "variant": "icon",
        "textAlign": "center",
        "widthProperties": { "width": "140px" }
      },
      { "key": "name", "text": "Object Name" },
      { "key": "description", "text": "Description" }
    ],
    rows: [
      {
        "id": "01",
        "icon": { "name": "company" },
        "name": "Company",
        "description": "Contains information about the company."
      },
      {
        "id": "02",
        "icon": { "name": "calendar" },
        "name": "Bookings",
        "description": "Contains information about the booking made."
      }
    ]
  };

  var datatable = document.getElementById('data-table-40');
  datatable.columns = data.columns;
  datatable.rows = data.rows;
</script>
```

---
>title: how to add actions to a row in the data table
>tags: crayons, datatable, component, actions
>content:
You can easily add an actions column by passing in `rowActions` prop to the component.

>code:
```html
  <fw-data-table id="datatable-4"  is-selectable="true" is-all-selectable="true" label="Data table 4">
  </fw-data-table>

  <script type="application/javascript">
    var data = {
      columns: [{
        "key": "name",
        "text": "Name"
      }, {
        "key": "role",
        "text": "Role"
      }],
      rows: [{
        "id": "0001",
        "name": "Alexander Goodman",
        "role": "Member"
      }, {
        "id": "0002",
        "name": "Ambrose Wayne",
        "role": "Member"
      }, {
        "id": "0003",
        "name": "August hines",
        "role": "Administrator"
      }],
      rowActions: [{
        "name": "Alert",
        "handler": (rowData) => {
          window.alert(rowData.name);
        }
      }, {
        "name": "Delete",
        "handler": async (rowData) => {
          let deletePromise = new Promise((resolve, reject) => {
            const dataTable = document.querySelector('#datatable-4');
            setTimeout(() => {
              if (dataTable) {
                dataTable.rows = dataTable.rows.filter((row) => (row.id !== rowData.id));
                resolve();
              } else {
                reject();
              }
            }, 3000);
          });
          await deletePromise;
        },
        "hideForRowIds": ["0003"]
      }]
    }

    var datatable4 = document.getElementById('datatable-4');
    datatable4.columns = data.columns;
    datatable4.rows = data.rows;
    datatable4.rowActions = data.rowActions;
  </script>

```

---
>title: how to add row actions a menu
>tags: crayons, datatable, component, row actions, menu
>content:
You can display row actions as a menu by setting the property showRowActionsAsMenu to true.

You can use icons along with text in the menu dropdown by passing rowActionsMenuVariant as 'icon'. Pass the props for the icon as an object via the 'graphicsProps' as part of configuration.

You can modify the header label of the row actions column by using the prop rowActionsHeaderLabel.
>code:
```html
<fw-data-table id="datatable-actions" is-selectable="true" is-all-selectable="true" label="Data table Row Actions"></fw-data-table>

<script type="application/javascript">
  var data = {
    columns: [
      { "key": "name", "text": "Name" },
      { "key": "role", "text": "Role" }
    ],
    rows: [
      { "id": "0001", "name": "Alexander Goodman", "role": "Member" },
      { "id": "0002", "name": "Ambrose Wayne", "role": "Member" },
      { "id": "0003", "name": "August hines", "role": "Administrator" }
    ],
    rowActions: [
      {
        "name": "Alert",
        "handler": (rowData) => { window.alert(rowData.name); },
        "graphicsProps": { "name": "alert" }
      },
      {
        "name": "Delete",
        "handler": async (rowData) => {
          let deletePromise = new Promise((resolve, reject) => {
            const dataTable = document.querySelector('#datatable-actions');
            setTimeout(() => {
              if (dataTable) {
                dataTable.rows = dataTable.rows.filter((row) => (row.id !== rowData.id));
                resolve();
              } else {
                reject();
              }
            }, 3000);
          });
          await deletePromise;
        },
        "hideForRowIds": ["0003"],
        "graphicsProps": { "name": "delete" }
      }
    ]
  };

  var datatableActions = document.getElementById('datatable-actions');
  datatableActions.columns = data.columns;
  datatableActions.rows = data.rows;
  datatableActions.rowActions = data.rowActions;
  datatableActions.showRowActionsAsMenu = true;
  datatableActions.rowActionsMenuVariant = "icon";
  datatableActions.rowActionsHeaderLabel = "";
</script>
```

---

>title: how to hide columns in data table
>tags: crayons, datatable, component, hide
>content:
To hide certain columns, we can pass the 'hide' property set to true in the column's configuration.
>code:
```html
  <span>'Role' column hidden in below table.</span> <br><br>
  <fw-data-table id="datatable-5" label="Data table 5">
  </fw-data-table>

  <script type="application/javascript">
    var data = {
      columns: [{
        "key": "name",
        "text": "Name"
      }, {
        "key": "role",
        "text": "Role",
        "hide": true
      }],
      rows: [{
        "id": "0001",
        "name": "Alexander Goodman",
        "role": "Member"
      }, {
        "id": "0002",
        "name": "Ambrose Wayne",
        "role": "Member"
      }]
    }

    var datatable5 = document.getElementById('datatable-5');
    datatable5.columns = data.columns;
    datatable5.rows = data.rows;
  </script>

```

---
>title: how to add column lock
>tags: crayons, datatable, component, lock
>content:
We can lock column using 'lock' in column's configuration.

>code:
```html
  <fw-data-table id="datatable-51" label="Data table 51" show-settings="true">
  </fw-data-table>

  <script type="application/javascript">
    var data = {
      columns: [{
        "key": "name",
        "text": "Name",
        "lock": true
      }, {
        "key": "role",
        "text": "Role"
      }],
      rows: [{
        "id": "0001",
        "name": "Alexander Goodman",
        "role": "Member"
      }]
    }

    var datatable51 = document.getElementById('datatable-51');
    datatable51.columns = data.columns;
    datatable51.rows = data.rows;
  </script>
```

---
>title: how to add adjust column width in data tables
>tags: crayons, datatable, component, width
>content:
We can pass width for every column using 'widthProperties' in column's configuration. Every column has a minimum width of 40px and maximum width of 1000px by default. We can override min/max width for every column using the 'widthProperties' too.

>code:
```html
<span>'Name' column has 400px width and 'Role' column has 200px width.</span><br><br>
<fw-data-table id="datatable-6" label="Data table 6"></fw-data-table>

<script type="application/javascript">
  var data = {
    columns: [
      { "key": "name", "text": "Name", "widthProperties": { "minWidth": "400px" } },
      { "key": "role", "text": "Role", "widthProperties": { "width": "200px" } },
      { "key": "level", "text": "Level" }
    ],
    rows: [
      { "id": "0001", "name": "Alexander Goodman", "role": "Member", "level": "L1" },
      { "id": "0002", "name": "Ambrose Wayne", "role": "Member", "level": "L2" }
    ]
  };

  var datatable6 = document.getElementById('datatable-6');
  datatable6.columns = data.columns;
  datatable6.rows = data.rows;
</script>
```

---
>title: how to format data in data tables
>tags: crayons, datatable, component, format
>content:
We can format row's data before rendering into a cell by passing 'formatData' in column's configuration.

This option wont work when using this with 'variant' or 'customTemplate' properties in column's configuration.
>code:
```html
<fw-data-table id="datatable-7" label="Data table 7"></fw-data-table>

<script type="application/javascript">
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  var data = {
    columns: [
      { "key": "name", "text": "Name" },
      {
        "key": "courses", "text": "Courses",
        "formatData": (courses) => courses.join(', ')
      },
      {
        "key": "appliedon", "text": "Applied on",
        "formatData": (ISOString) => {
          const date = new Date(ISOString);
          return date.getDate() + " " + months[date.getMonth()] + ", " + date.getFullYear();
        }
      }
    ],
    rows: [
      {
        "id": "0001", "name": "Alexander Goodman",
        "courses": ["HTML", "CSS", "JS"],
        "appliedon": "2021-10-21T14:48:00.000Z"
      },
      {
        "id": "0002", "name": "Ambrose Wayne",
        "courses": ["Ruby on Rails", "PostgreSQL"],
        "appliedon": "2022-01-14T16:14:00.000Z"
      }
    ]
  };

  var datatable7 = document.getElementById('datatable-7');
  datatable7.columns = data.columns;
  datatable7.rows = data.rows;
</script>
```

---
>title: how to configure table settings in the datatable
>tags: crayons, datatable, component, settings
>content:
Table settings help with reordering and hide/show of columns. To enable table settings, pass the 'show-settings' prop to the table.

>code:
```html
<fw-data-table id="datatable-8" label="Data table 8" show-settings></fw-data-table>

<script type="application/javascript">
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  var data = {
    columns: [
      { "key": "name", "text": "Name" },
      {
        "key": "courses", "text": "Courses",
        "formatData": (courses) => courses.join(', ')
      },
      {
        "key": "appliedon", "text": "Applied on",
        "formatData": (ISOString) => {
          const date = new Date(ISOString);
          return date.getDate() + " " + months[date.getMonth()] + ", " + date.getFullYear();
        }
      }
    ],
    rows: [
      {
        "id": "0001", "name": "Alexander Goodman",
        "courses": ["HTML", "CSS", "JS"],
        "appliedon": "2021-10-21T14:48:00.000Z"
      },
      {
        "id": "0002", "name": "Ambrose Wayne",
        "courses": ["Ruby on Rails", "PostgreSQL"],
        "appliedon": "2022-01-14T16:14:00.000Z"
      }
    ]
  };

  var datatable8 = document.getElementById('datatable-8');
  datatable8.columns = data.columns;
  datatable8.rows = data.rows;
</script>
```

---
>title: how to add load data into data table
>tags: crayons, datatable, component, load
>code:
We can load a table using the 'loadTable' method available on the table.

```html
<div style="width: 590px;">
  <span>
    <fw-toggle id="toggle-table" size="medium"></fw-toggle>
    <span class="fw-ml-8">Load table</span>
  </span>
  <br><br>
  <fw-data-table id="datatable-9" is-selectable is-all-selectable label="Data table 9"></fw-data-table>
</div>

<script type="application/javascript">
  var data = {
    columns: [
      { "key": "name", "text": "Name", "widthProperties": { "width": "200px" } },
      { "key": "role", "text": "Role", "widthProperties": { "width": "200px" } }
    ],
    rows: [{ "id": "0001", "name": "Alexander Goodman", "role": "Member" }],
    rowActions: [
      {
        "name": "Alert",
        "handler": (rowData) => { window.alert(rowData.name); }
      },
      {
        "name": "Delete",
        "handler": async (rowData) => {
          let deletePromise = new Promise((resolve, reject) => {
            const dataTable = document.querySelector('#datatable-4');
            setTimeout(() => {
              if (dataTable) {
                dataTable.rows = dataTable.rows.filter((row) => (row.id !== rowData.id));
                resolve();
              } else {
                reject();
              }
            }, 3000);
          });
          await deletePromise;
        },
        "hideForRowIds": ["0003"]
      }
    ],
    actionsColumn: { "width": "150px" }
  };

  var datatable9 = document.getElementById('datatable-9');
  datatable9.columns = data.columns;
  datatable9.rows = data.rows;
  datatable9.rowActions = data.rowActions;
  datatable9.actionsColumnProperties = data.actionsColumn;

  var toggle = document.getElementById('toggle-table');
  toggle.addEventListener('fwChange', (event) => { datatable9.loadTable(event.detail.checked); });
</script>
```

---
>title: how to save columnt configuration
>tags: crayons, datatable, component, save
>content:
For auto saving configuration into localStorage, you can add 'autoSaveSettings' prop to the table.

Data table exposes couple of method to get and set column configuration.


>code:
```html
  <data-table id="data-table-10" label="data table 10" auto-save-settings="true">
  </data-table>
```
```js
  let dataTable = document.querySelector('data-table#config');
  // getColumnConfig helps retrive configuration in JSON format
  let dataTableConfiguration = dataTable.getTableSettings();
  // setColumnConfig helps set the configuration.
  dataTable.setTableSettings(dataTableConfiguration);

```

---
