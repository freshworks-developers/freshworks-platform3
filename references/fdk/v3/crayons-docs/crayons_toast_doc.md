>title: what is toast component in crayons
>tags: crayons, timepicker, component
>content:

Toasts are used to show pop-up messages that lasts on the screen for a while. Use them to show users alerts or messages. You can also use custom HTML content with in toast

>code:

Import Crayons in your head section of the HTML file using the following scripts.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
```

1. To use Toasts as html tags use following snippet in your HTML section
```html
<fw-toast id="type_toast"></fw-toast>
<fw-toast id="type_toast_right" position="top-right"></fw-toast>
<fw-toast id="type_toast_left" position="top-left"></fw-toast>
<fw-toast-message type="success" id="custom-toast" timeout="6000">
  <div>
    <span class="custom-text">Custom content</span>
    <h4>custom html contents can be added</h4>
    <button onclick="alert('clicked')">custom btn</button>
  </div>
</fw-toast-message>
<fw-button onclick="document.querySelector('#type_toast').trigger({type:'success', content: 'Successfullly triggered'})">Success</fw-button>
<fw-button onclick="document.querySelector('#type_toast_right').trigger({type:'error', content:'something went wrong!'})">Error</fw-button>
<fw-button onclick="document.querySelector('#type_toast_left').trigger({type:'warning', content:'This is a warning!'})">Warning</fw-button>
<fw-button onclick="document.querySelector('#type_toast').trigger({type:'inprogress', content:'Request is in progress'})">Inprogress</fw-button>
<fw-button onclick="document.querySelector('#type_toast').trigger({type:'success', contentref:'#custom-toast'})">Custom Toast Content</fw-button>
```

---
>title: how to toast component in crayons inside React JS
>tags: crayons, timepicker, component
>content:

To use Toasts inside react component use following snippet in your `component.js`
```jsx
import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { FwButton, ToastController, FwToast, FwToastMessage } from "@freshworks/crayons/react";
function App() {
  const el = useRef(null);
  const el1 = useRef(null);
  const toast = ToastController({ position: 'top-right' })
  useEffect(() => {
    el1.current.onclick = function () {
      console.log("custom action handled here");
    }
  }, [])
  return (<div>
    <FwToastMessage type='success' id="custom-temp">
      <div>
        <FwButton onclick={() => console.log("custom action here")}>custom action element</FwButton>
        <FwButton ref={el1}>custom action element in Typescript apps</FwButton>
        <p> Please make sure here in the above element, the event handler name is in lowercase. use `onclick` instead of `onClick`. </p>
        <p className="cus-style">custom style element</p>
      </div>
    </FwToastMessage>
    <FwToast id="type_toast" ref={el} timeout={5000}></FwToast>
    <FwButton onClick={() => toast.trigger({ type: 'success', content: 'Successfullly triggered' })}>Success</FwButton>
    <FwButton onClick={() => el.current.trigger({ type: 'error', content: 'something went wrong!' })}>Error</FwButton>
    <FwButton onClick={() => el.current.trigger({ type: 'warning', content: 'This is a warning!' })}>Warning</FwButton>
    <FwButton onClick={() => el.current.trigger({ type: 'inprogress', content: 'Request is in progress' })}>Inprogress</FwButton>
    <FwButton onClick={() => toast.trigger({ contentref: '#custom-temp' })}>trigger custom </FwButton>
  </div>);
}
```

2. You can also use `ToastController` to create Toast like below:
   1. Import the ToastController
    ```js
    Javascript - import {  ToastController } from "@freshworks/crayons"
    React - import {  ToastController } from "@freshworks/crayons/react"
    ```
   2. Create an instance of `ToastController` by passing [ToastOptions](#toastoptions) (optional) and use [Methods](#methods) to manage toast
    ```js
    const toast = ToastController({ position: 'top-right' });
    toast.trigger({ type: 'success', content: 'Successfullly triggered' });
    ```

---
>title: what are ToastOptions
>tags: crayons, timepicker, component
>content:

Below is the interface for `ToastOptions` that can be used for creating the toast
```js
interface ToastOptions {
  /**
   * The Content of the action link
   */
  actionLinkText?: string;
  /**
   * The content to be displayed in toast
   */
  content?: string;
  /**
   * The document selector for the toast-message component
   * which can be used to embed custom html content in the toast message
   */
  contentref?: string;
  /**
   * Pause the toast from hiding on mouse hover
   */
  pauseOnHover?: boolean;
  /**
   * won't close automatically
   * Default is `false`
   */
  sticky?: boolean;
  /**
   * Time duration of the toast visibility
   * Default is `4000`
   */
  timeout?: number;
  /**
   * Type of the toast - success,failure, warning, inprogress
   * Default is `warning`
   */
  type?: 'success' | 'error' | 'warning' | 'inprogress';
  /**
   *  position of the toast notification in screen
   *  Default is `top-center`
   */
  position?: 'top-center' | 'top-left' | 'top-right';
}
```

---
>title: how to use Custom template event naming for ToastController component
>tags: crayons, timepicker, component
>content:

Please make sure when using event handler inside `custom template` in a `React app`, the event handler name is in `lowercase`. For example use `onclick` instead of `onClick`. This helps in cloning the event handlers used in the template when displaying multiple toast messages.

>code:

1. Use below snippet for react to use custom template in `component.js`
```js
 useEffect(() => {
   el1.current.onclick = function() {
     console.log("custom action handled here");
   }
  },[])
 <FwButton onclick={()=> console.log("custom action here")}>Action button</FwButton>
 <FwButton ref={el1}>In Typescript apps</FwButton>
```
2. Use below snippet for creating custom template using tags in HTML section
```html
<fw-toast-message type="success" id="custom-toast1" sticky action-link-text="Click me">
	<div>
		<span style="font-style: normal; font-weight: 400; font-size: 12px; line-height: 16px;">custom html contents can be added</span>
	</div>
</fw-toast-message>
<fw-button onclick="document.querySelector('#type_toast').trigger({type:'success', contentref:'#custom-toast1'})">Custom Toast Content 1</fw-button>
```

---
>title: what are toast component Properties and methods
>tags: crayons, timepicker, component, Properties, methods
>content:

The toast component has following Properties
1. `actionLinkText` or `action-link-text` - Content of the action link type is `string` and default is `''`
2. `content` or `content` - The content to be displayed in toast, type is `string` and default `undefined`
3. `pauseOnHover` or `pause-on-hover` - Pause the toast from hiding on mouse hover, type is `boolean` default is `undefined`
4. `position` or `position` - position of the toast notification in screen, type is `top-center`, `top-left`, `top-right` and default is `top-center`
5. `sticky` or `sticky` - won't close automatically type is `boolean` and default is `false`
6. `timeout` or `timeout` - Time duration of the toast visibility, type is `number` default is `4000`
7. `type` or `type` - Type of the toast - success,failure, warning, inprogress with `error`, `inprogress`, `success` and `warning` default is `warning`
Further The toast component supports `trigger(opts: ToastOptions)` method that returns `Promise<void>`

---
