# stimulus-tooltip

A stimulus controller for simple tooltip.

## Dependencies

* @hotwired/stimulus 3.0

## Installation

Install from npm:

    $ npm install @kanety/stimulus-tooltip --save

## Usage

Register controller:

```javascript
import { Application } from '@hotwired/stimulus';
import TooltipController from '@kanety/stimulus-tooltip';

const application = Application.start();
application.register('tooltip', TooltipController);
```

Import css:

```css
@import '@kanety/stimulus-tooltip';
```

Build html as follows:

```html
<span class="st-tooltip"
      data-controller="tooltip"
      data-action="mouseover->tooltip#show mouseout->tooltip#hide">
  <span data-tooltip-target="content">
    Content
  </span>
  <span class="st-tooltip__tip" data-tooltip-target="tip">
    Tooltip
  </span>
</span>
```

### Options

#### position

Show tooltip at specified position of the content:

```html
<span class="st-tooltip"
      data-controller="tooltip"
      data-action="mouseover->tooltip#show mouseout->tooltip#hide"
      data-tooltip-position-value="top-start">
  ...
</span>
```

Default is `top-start`.
Available positions are:

* `top-start`
* `top-end`
* `bottom-start`
* `bottom-end`
* `left-start`
* `left-end`
* `right-start`
* `right-end`

Following shorthands are also available:

* `top`: shorthand of `top-start`
* `bottom`: shorthand of `bottom-start`
* `left`: shorthand of `left-start`
* `right`: shorthand of `right-start`

Note that the position is changed automatically if the tooltip is not visible in the window.

### Callbacks

Run callbacks when a tooltip is shown or hidden:

```javascript
let element = document.querySelector('[data-controller="tooltip"]');
element.addEventListener('tooltip:shown', (e) => {
  console.log('shown: ' + e.detail.tip);
});
element.addEventListener('tooltip:hidden', (e) => {
  console.log('hidden: ' + e.detail.tip);
});
```

## License

The library is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
