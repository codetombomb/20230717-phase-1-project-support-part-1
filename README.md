# Front End Project Support Day 1 - Bootstrap Containers

## Bootstrap Containers

- Containers: [Link](https://getbootstrap.com/docs/5.3/layout/containers/#responsive-containers)

### About containers

Containers are a fundamental feature in Bootstrap and are required when working with the Bootstrap grid system. 

- `.container`
    - Sets a `max-width` at each responsive breakpoint.
        
        
        | Breakpoint | Class infix | Dimensions in px |
        | --- | --- | --- |
        | Extra small | None | < 576 |
        | Small | sm | ≥ 576 |
        | Medium | md | ≥ 768 |
        | Large | lg | ≥ 992 |
        | Extra large | xl | ≥ 1200 |
        | Extra extra large | xxl | ≥ 1400 |
- `.container-{breakpoint}`
    - Sets the container width to `width: 100%` until the specified breakpoint is reached.
- `container-fluid`
    - Sets the container width to `width: 100%` at ***all*** breakpoints.