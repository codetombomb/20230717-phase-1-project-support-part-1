# Front End Project Support Day 1 - [Getting started with Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/#quick-start)

### Add Bootstrap to your project

To add Bootstrap to your project, you will only need to modify your HTML file.

1. **Add the `<meta name="viewport">` tag:**
   1. For proper responsive behavior on mobile devices, add the `<meta name="viewport">` tag to the head of your HTML file:

      ```html
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      ```
2. **Add Bootstrap’s CSS**:
   1. In the head of your HTML file, add the following `<link>` tag:

      ```html
      <!-- Bootstrap CSS -->
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossorigin="anonymous"
      />
      ```
3. **Add Bootstrap’s JavaScript**:

   1. Before the closing `</body>` tag in your HTML:

      ```html
      <!-- Bootstrap JavaScript -->
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
        crossorigin="anonymous"
      ></script>
      ```

   b. Optionally, you can add the `<script>` tag to the `<head>` of your HTML file, you will just need to add the `defer` attribute:

   ```html
   <!-- Bootstrap JavaScript -->
   <script
     src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
     integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
     crossorigin="anonymous"
     **defer**
   ></script>
   ```
