# Front End Project Support Day 2 - Bootstrap Cards

- Cards: [Link](https://getbootstrap.com/docs/5.3/components/card/)

## About Cards

- Built with flexbox, Bootstrap cards make alignment of your card content easy.
- No margin by default - use space utilities if needed.
- No fixed width - they will naturally fill the full width of their parent.

### The most basic card

- `.card` - This is the card wrapper class that will be the outer-most element
- `.card-body` - This is where the card content will live like:
    - `.card-title`
    - `.card-subtitle`
    - `.card-link`
    - `.card-text`

```html
<div class="card">
    <div class="card-body">...</div>
</div>
```

- **NOTE:** Card images will live outside of the `.card-body` and can be positioned either above or below the `.card-body`:

```html

<!-- Image top -->
<div class="card">
		<img src="..." class="card-img-top" alt="...">
    <div class="card-body">...</div>
</div>
```

```html
<!-- Image bottom -->
<div class="card">
    <div class="card-body">...</div>
		<img src="..." class="card-img-bottom" alt="...">
</div>
```

- Similarly, `.card-header`s and `.card-footer`s will live outside of the card body.

```html
<div class="card">
  <h5 class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
```
