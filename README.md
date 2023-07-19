# Front End Project Support Day 2 - Buttons

Buttons: [Link](https://getbootstrap.com/docs/5.3/components/buttons/)

## About Bootstrap Buttons
 All buttons need to have a base class of `.btn`:

 ```html
 <button type="button" class="btn">Base class</button>
 ```

By default, this `.btn` class will not have any styles so you will need to define custom styles for your buttons or use the Bootstrap button variants like:

- btn-primary
- btn-secondary
- btn-success
- btn-danger
- btn-warning
- btn-dark
- [Other Button Variants](https://getbootstrap.com/docs/5.3/components/buttons/#variants)

### Anchor Tags As Buttons
The `.btn` class can be used with `<a>` anchor tags (as well as input elements like on forms)too to create buttons. 

```html
<a class="btn btn-primary" href="#">Link</a>
<input class="btn btn-primary" type="submit" value="Submit">
```

For accessability on anchor tags, they should be given a `role="button"`` to appropriately convey their purpose to assistive technologies such as screen readers.

```html
<a class="btn btn-primary" href="#" role="button">Link</a>
```

### Button Sizes
There are three sizes of buttons: small, med (default), large. Large and small buttons can be created using:

- `btn-lg`
- `btn-sm`

Medium buttons are the default size and do not need a class explicitly.

### Outline Style
Outline buttons can be created with the class `.btn-outline-{variant}`:

```html
<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
```
***NOTE***: Since the colors used here are light, outlined buttons work best on darker backgrounds.

### Button Groups
Button groups can be made by wrapping a series of `.btn` elements in a `.btn-group` element. This will give the group of buttons a cohesive style.

```html
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
</div>
```

***NOTE***: For accessibility with assistive tech, use the `role` attribute and `aria-label` to correctly identify buttons. 

You can mix up the variants on the buttons themselves to create outlined button groups or different colors within the group.


### Button Group Vertical
Change the orientation of the button group to appear vertically by using the `.btn-group-vertical` class on the button group element.

```html
<div class="btn-group-vertical" role="group" aria-label="Vertical button group">
  <button type="button" class="btn btn-primary">Button</button>
  <button type="button" class="btn btn-primary">Button</button>
  <button type="button" class="btn btn-primary">Button</button>
  <button type="button" class="btn btn-primary">Button</button>
  <button type="button" class="btn btn-primary">Button</button>
  <button type="button" class="btn btn-primary">Button</button>
</div>
```




