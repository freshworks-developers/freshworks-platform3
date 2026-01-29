>title: what is card layout in crayons?
>tags: card, cards-layout, fw-card, crayons
>content:

Cards are primarily container elements without inherent functionality. Instead of treating them as components, CSS classes are exposed to facilitate the creation of cards conveniently while designing components.

To apply card CSS utilities, you can utilize `fw-card-#{$elevation}`, where `{$elevation}` can take values from 0 to 3. This allows you to control the elevation (shadow) of the card easily with different levels of depth.

---
>title: how to use crayons card with interactive component
>tags: card, cards-layout, fw-card, crayons
>code:

To use Crayons, import it into your HTML file's head section with the provided scripts:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

You can use cards in two different ways:

1. For cards with interactive components and action buttons, include this snippet in your `filename.html` or `<template>` section:

```html
<template>
  <div class="fw-card-1 fw-p-24 fw-flex fw-flex-row">
    <section class="fw-flex-grow">
      <h5 class="fw-type-h5 fw-my-0">Arabic</h5>
      <p class="fw-type-xs fw-my-0">Last updated - 25 June 2020</p>
    </section>
    <section class="fw-flex-grow-0">
      <fw-button color="secondary" class="fw-type-h6">Download existing</fw-button>
      <fw-button color="secondary" class="fw-type-h6 fw-ml-8">Update file</fw-button>
      <fw-button size="icon" color="text" role="button" class="fw-ml-12">
        <fw-icon name="delete"></fw-icon>
      </fw-button>
    </section>
  </div>
</template>
```

2. For cards with interactive check items, use this snippet in your `filename.html` or `<template>` section:

```html
<template>
  <div class="fw-card-2 fw-p-24 fw-flex fw-flex-row fw-items-center">
    <section class="fw-flex-grow">
      <h6 class="fw-type-h6 fw-my-0">Show typing indicator</h6>
      <p class="fw-type-xs fw-my-0">An indicator to see and share when messages are being typed</p>
    </section>
    <section class="fw-flex-grow-0">
      <fw-toggle size="medium" checked></fw-toggle>
    </section>
  </div>
</template>
```

With these code snippets, you can create cards with interactive components or check items using the provided CSS classes from Crayons.

---
>title: how to use crayons cards with End user widgets
>tags: card, cards-layout, fw-card, crayons
>code:

Import Crayons in your head section of the HTML file using the following scripts.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

To use End user widget cards include the following snippet in your `filename.html` or `<template>` section
```html
<template>
  <div class="fw-card-3 fw-p-20 fw-flex fw-flex-column">
    <section class="fw-flex">
      <h4 class="fw-flex-grow fw-type-h4 fw-my-0">Chat with us</h4>
      <a class="fw-type-xs" href="#">View history</a>
    </section>
    <section class="fw-flex fw-flex-column fw-mt-4">
      <h6 class="fw-type-h6 fw-my-0">Support</h6>
      <p class="fw-type-xs fw-my-0">Typically replies within 5 minutes</p>
    </section>
  </div>
</template>
```

---
>title: how to use crayons cards for Conversation search result cards
>tags: card, cards-layout, fw-card, crayons
>code:

Import Crayons in your head section of the HTML file using the following scripts.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

To use crayons cards for Conversation search result cards include the following snippet in your `filename.html` or `<template>` section
```html
<style>
  .options fw-icon {
    vertical-align: middle;
  }
</style>
<template>
  <div class="fw-card-1 fw-py-16 fw-px-20 fw-flex fw-flex-row">
    <section>
      <fw-avatar
        size="medium"
        image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
      ></fw-avatar>
    </section>
    <section class="fw-flex-grow fw-px-16 fw-flex fw-flex-column">
      <h5 class="fw-type-h5 fw-mt-0 fw-mb-8">Courtney Henry</h5>
      <p class="fw-type-xs fw-mt-0 fw-mb-16">Hey! I need help with cancellation of a combo pack that I had ordered yesterday.</p>
      <section class="fw-type-xs fw-flex fw-flex-row options">
        <span class="fw-pr-12">
          <span class="fw-mr-8"><fw-icon name="inbox" size="12" ></fw-icon></span>
          <span>Cancellation</span>
        </span>
        <span class="fw-px-12">Open</span>
        <span class="fw-px-12">Due in 1 hr</span>
        <span class="fw-px-12">Alex James (Me)</span>
      </section>
    </section>
    <section>
      <span class="fw-type-xs">11 May 2021, 5:30 PM</span>
    </section>
  </div>
</template>
```

---
>title: how to use crayons cards within an accordion section
>tags: card, cards-layout, fw-card, crayons
>code:

Import Crayons in your head section of the HTML file using the following scripts.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

to use crayons cards within an accordion section, include the following snippet in your `filename.html` or `<template>` section
```html
<fw-accordion>
  <div class="fw-card-1 fw-py-16 fw-px-20 fw-flex fw-flex-row">
    <section class="fw-flex-grow fw-px-24 fw-flex fw-flex-column">
      <fw-accordion-title>
        <h5 class="fw-type-h5 fw-mt-0 fw-mb-8">Courtney Henry</h5>
      </fw-accordion-title>
      <p class="fw-type-xs fw-mt-0 fw-mb-16">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <fw-accordion-body>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <section class="fw-type-xs fw-flex fw-flex-row options">
          <span class="fw-pr-12">
            <span class="fw-mr-8"><fw-icon name="inbox" size="12"></fw-icon></span>
            <span>Cancellation</span>
          </span>
          <span class="fw-px-12">Open</span>
          <span class="fw-px-12">Due in 1 hr</span>
          <span class="fw-px-12">Alex James (Me)</span>
        </section>
      </fw-accordion-body>
    </section>
</fw-accordion>
```

---
>title: how to use crayons cards within an accordion for ecommerce listing with 4 cards per row
>tags: card, cards-layout, fw-card, crayons
>code:

To use Crayons cards within an accordion section, import Crayons in the head section of your HTML file with the provided scripts:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

Then, include the following snippet in your `filename.html` or `<template>` section:

```html
<style>
  .products-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 16px;
  }
</style>

<div class="products-grid">
  <!-- Repeat the snippet below 4 times -->
  <fw-accordion>
    <div class="fw-card-1 fw-py-16 fw-px-20 fw-flex fw-flex-row">
      <section class="fw-flex-grow fw-px-24 fw-flex fw-flex-column">
        <fw-accordion-title>
          <fw-icon name="minus" size="14" slot="expanded-icon"></fw-icon>
          <fw-icon name="plus" size="14" slot="collapsed-icon"></fw-icon>
          <h5 class="fw-type-h5 fw-mt-0 fw-mb-8">Product Name</h5>
        </fw-accordion-title>
        <img src="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg" alt="Image placeholder" width="150" height="150">
        <p class="fw-type-xs fw-mt-0 fw-mb-16">Product Short Description</p>
        <fw-accordion-body>
          <p>Product Long Description</p>
          <section class="fw-type-xs fw-flex fw-flex-row options">
            <span class="fw-pr-12">
              <span class="fw-mr-8"><fw-icon name="tag" size="12"></fw-icon></span>
              <span>Price: $99.99</span>
            </span>
            <span class="fw-px-12">Rating: 4.5 stars</span>
            <span class="fw-px-12">In Stock</span>
            <span class="fw-px-12">Free Shipping</span>
          </section>
          <section class="fw-mt-16">
            <fw-button color="primary" size="small">Add to Cart</fw-button>
            <fw-button color="secondary" size="small">View Details</fw-button>
          </section>
        </fw-accordion-body>
      </section>
    </div>
  </fw-accordion>
</div>
```

---
