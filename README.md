# Front End Project Support Day 1 - Bootstrap Grid

- Grid: [Link](https://getbootstrap.com/docs/5.3/layout/grid/)

### About Bootstrap grid

- The grid system works with Bootstrap `.containers`
    - Inside your `.container`, you will add `.row`s and  `.col`s. (columns)
    
    ```html
    <div class="container">
          <div class="row">
              <div class="col">
                  Column
              </div>
          </div>
      </div>
    ```
    
- Rows are wrappers for columns
    - Rows use `flexbox` to position columns
        - When multiple columns are added to a row, the space will be divided evenly among the columns (unless specified otherwise) using the 12-column system.
- 12-column system
    
    From the docs:
    
    - There are 12 template columns available per row
    - This allows you to create different combinations of elements that span any number of columns.
    - Column classes indicate the number of template columns to span (e.g., `col-4` spans four).
    - `width`s are set in percentages so you always have the same relative sizing.
- `.col` - Auto Layout Columns
    - Columns within a row will be divided evenly
    - If a column’s minimum width has been reached, it will wrap onto the next line where it will take up the maximum width. If more elements wrap, the space will be divided evenly.
    - 
- `.col-{breakpoint}-{num}`
    - Like with `.container-{breakpoint}`, you can specify the breakpoint, and above that you want the column layout to take effect.