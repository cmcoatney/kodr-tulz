# Installation

1. NX Angular/Nest
2. Add Material lib
3. Add Material modules to lib
4. Add Flex Layout
5. Add Flexlayout to Material module
6. Add Material Theme

7. Add Formly

# Further

- [Code Highlighter] (https://www.npmjs.com/package/ngx-highlightjs)

### Formly: Dynamic form generation

a schema object holds what formly needs to generate a form
a prop object holds the field info the schema needs for formly to generate a form
a simple snippet helps generate props which are added to schema
schema is added to the form and formly generates a form with a small template footprint

```html
<form [formGroup]="form" (ngSubmit)="onSubmit(model)">
  <formly-form
    [form]="form"
    [fields]="schema.props"
    [model]="model"
  ></formly-form>
  <button mat-button type="submit" class="btn btn-default">Submit</button>
</form>
```
