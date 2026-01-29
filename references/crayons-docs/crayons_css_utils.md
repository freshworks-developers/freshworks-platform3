>title: what are crayons css utils
>tags: crayons, css-utils
>content:

Since version `v3`, Freshworks Crayons provides CSS utilities to facilitate Freshworks application development. These utilities can be accessed by including the `crayons-min.css` file in your app, which offers the following modifications:

1. Component Topography: Fonts, font weight, headings, etc.
2. Spacing: Margin and padding.
3. Border: Style, width, color, and radius.
4. Layouts: Flex layouts with a 12-column format.
5. Card: Interactive, non-interactive, conversation search results, and user widget.
6. Color: Font color and background color.

To import Crayons in the head section of your HTML file using the provided scripts:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

To use `crayons-min.css` via the CDN distribution at runtime, include the following line in your HTML pages:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/css/crayons-min.css" />
```

---
>title: what are crayons layouts in css utils
>tags: crayons, css-utils, layouts
>content:

Crayons uses Flex layouts for frontend components with standard 12 column layout. Flex utilities are provided in an atomic way to easily create any layout easily.

>code:

Flex layout example
```html
<template>
  <div class="fw-flex flex-container-border">
    <div class="flex-item-border fw-flex-grow">Flex item 1</div>
    <div class="flex-item-border fw-flex-grow">Flex item 2</div>
  </div>
</template>
```

---
>title: what are layout formatting classes available in crayons
>tags: crayons, css-utils, layouts
>content:

Crayons Flex Layout:

1. Flex Direction: Use `fw-flex-#{$direction}` to establish the main-axis for the flex container.
2. Flex Wrap: Apply `fw-flex-#{$wrap}` to wrap/unwrap/reverse-wrap items inside the flex container.
3. Flex Justify: Position a flex item along the flex container's main axis with `fw-justify-#{$value}`.
4. Flex Align Contents: Position items in a multi-row flex container using `fw-content-#{$name}`.
5. Flex Align Items: Align flex items along the flex container's cross axis using `fw-items-#{$item}`.
6. Flex Grow: Allow or prevent a flex item from growing to fill available space with `fw-flex-grow` or `fw-flex-grow-0`.
7. Flex Shrink: Allow or prevent a flex item from shrinking if needed with `fw-flex-shrink` or `fw-flex-shrink-0`.
8. Flex Order: Render flex items in a different order than they appear in the DOM using `fw-order-#{$number}`.
9. Flex Gap: Use `fw-gap` to specify row-gap and column gap in the flex container.

---
>title: how to use direction utils for flex container
>tags: crayons, css-utils, layouts
>content:

Crayons uses the `fw-flex-#{$direction}` class to establishes the main-axis for the flex container. The `#{$direction}` can be substituted with one of these values `row`, `row-reverse`, `column`, `column-reverse`.

>code:

```html
<template>
  <div>
    <span>Row Example:</span>
    <div class="fw-flex flex-container-border fw-flex-row">
      <!-- line items -->
    </div>
    <span>Row reverse example:</span>
    <div class="fw-flex flex-container-border fw-flex-row-reverse">
      <!-- line items -->
    </div>
    <span>Column example:</span>
    <div class="fw-flex flex-container-border fw-flex-column">
      <!-- line items -->
    </div>
    <span>Column reverse example:</span>
    <div class="fw-flex flex-container-border fw-flex-column-reverse">
      <!-- line items -->
    </div>
  </div>
</template>
```

---
>title: how to wrap items inside a flex container
>tags: crayons, css-utils, layouts
>content:

Crayons uses the `fw-flex-#{$wrap}` class to either wrap/unwrap/reverse-wrap items inside the flex container. The `#{$wrap}` can be substituted with one of these values `wrap`, `wrap-reverse`, `nowrap`.

>code:

```html
<template>
  <div>
    <span>Wrap example:</span>
    <div class="fw-flex flex-container-border fw-flex-wrap">
      <!-- line items -->
    </div>
    <span>Nowrap example:</span>
    <div class="fw-flex flex-container-border fw-flex-nowrap">
      <!-- line items -->
    </div>
    <span>Wrap reverse example:</span>
    <div class="fw-flex flex-container-border fw-flex-wrap-reverse">
      <!-- line items -->
    </div>
  </div>
</template>

```

---
>title: how to justify the flex item in a flex container
>tags: crayons, css-utils, layouts
>content:

Crayons Flex Justify:

Crayons uses the `fw-justify-#{$value}` class to position a flex item along a flex container's main axis. The `#{$value}` can be replaced with one of these values: `start`, `end`, `center`, `between`, `around`, or `evenly`.

```html
<template>
  <div>
    <span>Start example:</span>
    <div class="fw-flex flex-container-border fw-justify-start">
      <!-- line items -->
    </div>
    <span>End example:</span>
    <div class="fw-flex flex-container-border fw-justify-end">
      <!-- line items -->
    </div>
    <span>Center example:</span>
    <div class="fw-flex flex-container-border fw-justify-center">
      <!-- line items -->
    </div>
    <span>Between example:</span>
    <div class="fw-flex flex-container-border fw-justify-between">
      <!-- line items -->
    </div>
    <span>Around example:</span>
    <div class="fw-flex flex-container-border fw-justify-around">
      <!-- line items -->
    </div>
    <span>Evenly example:</span>
    <div class="fw-flex flex-container-border fw-justify-evenly">
      <!-- line items -->
    </div>
  </div>
</template>
```

---
>title: how to align content in a flex container
>tags: crayons, css-utils, layouts
>content:

Crayons uses the `fw-content-#{$name}` class to position items in multi-row flex container. The `#{$name}` can be substituted with one of these values `start`, `end`, `center`, `between`, `around`, `evenly`.

>code:

```html
<template>
  <div>
    <span>Start example:</span>
    <div class="fw-flex fw-flex-wrap flex-container-border fw-content-start">
      <!-- line items -->
    </div>
    <span>End example:</span>
    <div class="fw-flex fw-flex-wrap flex-container-border fw-content-end">
      <!-- line items -->
    </div>
    <span>Center example:</span>
    <div class="fw-flex fw-flex-wrap flex-container-border fw-content-center">
      <!-- line items -->
    </div>
    <span>Between example:</span>
    <div class="fw-flex fw-flex-wrap flex-container-border fw-content-between">
      <!-- line items -->
    </div>
    <span>Around example:</span>
    <div class="fw-flex fw-flex-wrap flex-container-border fw-content-around">
      <!-- line items -->
    </div>
    <span>Evenly example:</span>
    <div class="fw-flex fw-flex-wrap flex-container-border fw-content-evenly">
      <!-- line items -->
    </div>
  </div>
</template>
```

---
>title: how to align items in a flex container
>tags: crayons, css-utils, layouts
>content:

Crayons uses the `fw-items-#{$item}` class to position items in multi-row flex container. The `#{$item}` can be substituted with one of these values `start`, `end`, `center`, `baseline`, `stretch`.

>code:

```html
<template>
  <div>
    <span>Start example:</span>
    <div class="fw-flex flex-container-border fw-items-start">
      <!-- line items -->
    </div>
    <span>End example:</span>
    <div class="fw-flex flex-container-border fw-items-end">
      <!-- line items -->
    </div>
    <span>Center example:</span>
    <div class="fw-flex flex-container-border fw-items-center">
      <!-- line items -->
    </div>
    <span>Baseline example:</span>
    <div class="fw-flex flex-container-border fw-items-baseline">
      <!-- line items -->
    </div>
    <span>Stretch example:</span>
    <div class="fw-flex flex-container-border fw-items-stretch">
      <!-- line items -->
    </div>
  </div>
</template>
```

---
>title: how to use grow util in a flex container
>tags: crayons, css-utils, layouts
>content:

Crayons uses either `fw-flex-grow-0` to prevent a flex item from growing or `fw-flex-grow` to allow a flex item to grow to fill any available space.

>code:

```html
<template>
  <div>
    <span>Grow-0 example:</span>
    <div class="fw-flex flex-container-border">
      <!-- line items -->
    </div>
    <span>Grow example:</span>
    <div class="fw-flex flex-container-border">
      <!-- line items -->
    </div>
  </div>
</template>
```

---
>title: how to use shrink util in a flex container
>tags: crayons, css-utils, layouts
>content:

Crayons uses either `fw-flex-shrink-0` to prevent a flex item from shrinking or `fw-flex-shrink` to allow a flex item to shrink if needed.

>code:

```html
<template>
  <div>
    <span>Shrink-0 example:</span>
    <div class="fw-flex flex-container-border">
      <div class="flex-item-border fw-flex-shrink-0" style="width: 70%;">Flex item 1</div>
    </div>
    <br />
    <span>Shrink example:</span>
    <div class="fw-flex flex-container-border">
      <div class="flex-item-border fw-flex-shrink" style="width: 75%;">Flex item 1</div>
    </div>
  </div>
</template>
```

---
>title: how to use order util in a flex container
>tags: crayons, css-utils, layouts
>content:

Crayons uses `fw-order-#{$number}` class to render flex items in a different order than they appear in the DOM. `#{$number}` should be substituted with a value from **0** to **12**. Other values that can be used are `fw-order-first`, `fw-order-last`, `fw-order-none`.

>code:

```html
<template>
  <div>
    <span>Order example:</span>
    <div class="fw-flex flex-container-border">
      <div class="flex-item-border fw-px-8 fw-order-4">1</div>
      <div class="flex-item-border fw-px-8 fw-order-3">2</div>
      <div class="flex-item-border fw-px-8 fw-order-2">3</div>
      <div class="flex-item-border fw-px-8 fw-order-1">4</div>
      <div class="flex-item-border fw-px-8 fw-order-first">5</div>
      <div class="flex-item-border fw-px-8 fw-order-last">6</div>
    </div>
  </div>
</template>
```

---
>title: how to gap util for rows and columns in a flex container
>tags: crayons, css-utils, layouts
>content:

Crayons Flex Gap:

Crayons provides the `fw-gap` class to specify the row-gap and column gap, which represents the space between rows and columns. It can be used with numbers from 0 to 8, such as `fw-gap-0`, `fw-gap-1`, and so on.

Additionally, you can use `fw-column-gap` and `fw-row-gap` to specify the space between columns and rows, respectively. The class names can be used with numbers from 0 to 8, like `fw-row-gap-0`, `fw-column-gap-1`, and so on.

```html
<template>
  <div>
    <span>Flex gap example:</span>
    <div class="fw-mt-8 fw-flex fw-flex-wrap flex-container-border fw-gap-2">
      <div class="flex-item-border fw-px-8 ">1</div>
      <div class="flex-item-border fw-px-8 ">2</div>
      <div class="flex-item-border fw-px-8 ">3</div>
      <div class="flex-item-border fw-px-8 ">4</div>
    </div>
    <span>Flex column and row gap example:</span>
    <div class="fw-mt-8 fw-flex fw-flex-wrap flex-container-border fw-row-gap-1 fw-column-gap-4">
      <div class="flex-item-border fw-px-8 ">1</div>
      <div class="flex-item-border fw-px-8 ">2</div>
      <div class="flex-item-border fw-px-8 ">3</div>
      <div class="flex-item-border fw-px-8 ">4</div>
    </div>
  </div>
</template>
```

---
