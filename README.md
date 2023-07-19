# Front End Project Support Day 1 - Bootstrap Spinners

[Spinners](https://getbootstrap.com/docs/5.3/components/spinners/)

### About Bootstrap Spinners

Spinners can be used to indicate to the user that the page is loading if asynchronous operations are delaying the rendering of content (eg. fetching a lot of JSON data).

Bootstrap offers two types of spinners: 

- Border Spinners - `.spinner-border`
- Growing Spinners - `.spinner-grow`

```html
<div class="spinner-border"></div>
<div class="spinner-grow"></div>
```

- ***NOTE:*** For accessibility purposes, each spinner should include a `role="status"` and a visually hidden `span` with a class of `visually-hidden`.

```html
<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>

<div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
```