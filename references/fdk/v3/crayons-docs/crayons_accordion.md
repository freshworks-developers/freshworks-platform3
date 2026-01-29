>title: what is accordion in crayons
>tags: crayons, accordion, collapsable-section
>content:

The `fw-accordion` is a collapsible accordion component that expands or collapses when the accordion header is clicked. To use this component in your HTML file, you need to import the Crayons library using the provided scripts:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

To implement the accordion in your code, include the following snippet within your HTML segment:

```html
<fw-accordion expanded>
  <fw-accordion-title>Header Text</fw-accordion-title>
  <fw-accordion-body>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s.
  </fw-accordion-body>
</fw-accordion>
```

When using this code, the `fw-accordion` will initially be expanded (`expanded` attribute present) with the header text "Header Text" and the associated body content shown. Clicking on the header will toggle the accordion, expanding or collapsing the body content accordingly.

---
>title: how to use Accordion Title with icon size
>tags: crayons, accordion, collapsable-section
>content:

To use the Accordion Title with different icon sizes, follow these steps:

1. Import Crayons in the head section of your HTML file using the provided scripts:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

2. Implement the accordion with various icon sizes in your HTML segment:

```html
<!-- Accordion with small icon size -->
<fw-accordion>
  <fw-accordion-title icon-size="small">Header Text</fw-accordion-title>
  <fw-accordion-body>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s
  </fw-accordion-body>
</fw-accordion>
<br />

<!-- Accordion without icon size specified (default) -->
<fw-accordion>
  <fw-accordion-title>Header Text</fw-accordion-title>
  <fw-accordion-body>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s
  </fw-accordion-body>
</fw-accordion>
<br />

<!-- Accordion with large icon size -->
<fw-accordion>
  <fw-accordion-title icon-size="large">Header Text</fw-accordion-title>
  <fw-accordion-body>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s
  </fw-accordion-body>
</fw-accordion>
```

---
>title: how to use Accordion Title with custom toggle icons
>tags: crayons, accordion, collapsable-section
>content:

Import Crayons in your head section of the HTML file using the following scripts.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

To use Accordion with custom toggle icons include following snippet in your html segment
```html
<fw-accordion>
  <fw-accordion-title>
    <fw-icon name="minus" size="14" slot="expanded-icon"></fw-icon>
    <fw-icon name="plus" size="14" slot="collapsed-icon"></fw-icon>
    Header Text
  </fw-accordion-title>
  <fw-accordion-body>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s
    the leap into electronic typesetting, remaining essentially unchanged.
  </fw-accordion-body>
</fw-accordion>
```

---
>title: how to use Accordion Title with custom css properties
>tags: crayons, accordion, collapsable-section
>content:

Import Crayons in your head section of the HTML file using the following scripts.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

To use Accordion with custom css properties include following snippet in your html segment
```html
<fw-accordion
  style="--fw-accordion-border: 1px solid #F5F7F9; --fw-accordion-box-shadow: 0px 1px 8px rgba(152, 152, 152, 0.13); --fw-accordion-border-radius: 4px;"
  expanded
>
  <fw-accordion-title
    truncate-on-overflow="true"
    style="--fw-accordion-title-background-color: #F5F7F9; --fw-accordion-title-expanded-icon-color: #2C5CC5; --fw-accordion-title-collapsed-icon-color: #264966;"
  >
    <fw-icon name="rewards"></fw-icon>
    <span style="padding-left: 5px;">Header Text</span>
  </fw-accordion-title>
  <fw-accordion-body style="--fw-accordion-body-background-color: #FFFFFF">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s.
  </fw-accordion-body>
</fw-accordion>
```

---
>title: how to use Accordion in a react application
>tags: crayons, accordion, collapsable-section, react
>content:

include following snippet in your `component.js` section
```ts
import React from "react";
import ReactDOM from "react-dom";
import { FwCheckbox } from "@freshworks/crayons/react";
function App() {
  return (<div>
    <FwAccordion>
      <FwAccordionTitle>Header Text</FwAccordionTitle>
      <FwAccordionBody>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </FwAccordionBody>
    </FwAccordion>
  </div>)
}
```

---
