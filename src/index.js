import { Controller } from '@hotwired/stimulus';
import './index.scss';

export default class extends Controller {
  static targets = ['tip', 'content'];
  static values = {
    position: { type: String, default: 'top' }
  };

  offset = null;

  show(e) {
    this.offset = this.compute(this.positionValue);
    this.tipTarget.style.top = this.offset.top + 'px';
    this.tipTarget.style.left = this.offset.left + 'px';
    this.toggleClass(true);
    this.dispatch('shown', { detail: { content: this.contentTarget, tip: this.tipTarget } });
  }

  hide(e) {
    this.toggleClass(false);
    this.dispatch('hidden', { detail: { content: this.contentTarget, tip: this.tipTarget } });
  }

  toggleClass(visible) {
    let position = this.offset.position;
    let kind = this.offset.position.split('-')[0];
    if (visible) {
      this.element.classList.add('st-tooltip--visible');
      this.tipTarget.classList.add(`st-tooltip__tip--${kind}`, `st-tooltip__tip--${position}`)
    } else {
      this.element.classList.remove('st-tooltip--visible');
      this.tipTarget.classList.remove(`st-tooltip__tip--${kind}`, `st-tooltip__tip--${position}`)
    }
  }

  compute(position) {
    let positions = this.detailPositions(position);
    for (let i in positions) {
      let offset = this.computeOffset(positions[i]);
      if (!this.isOverflow(offset)) {
        return offset;
      }
    }
    return this.computeOffset(positions[0]);
  }

  detailPositions(position) {
    return {
      'top': ['top-start', 'top-end', 'bottom-start', 'bottom-end'],
      'top-start': ['top-start', 'top-end', 'bottom-start', 'bottom-end'],
      'top-end': ['top-end', 'top-start', 'bottom-end', 'bottom-start'],
      'bottom': ['bottom-start', 'bottom-end', 'top-start', 'top-end'],
      'bottom-start': ['bottom-start', 'bottom-end', 'top-start', 'top-end'],
      'bottom-end': ['bottom-end', 'bottom-start', 'top-end', 'top-start'],
      'left': ['left-start', 'left-end', 'right-start', 'right-end'],
      'left-start': ['left-start', 'left-end', 'right-start', 'right-end'],
      'left-end': ['left-end', 'left-start', 'right-end', 'right-start'],
      'right': ['right-start', 'right-end', 'left-start', 'left-end'],
      'right-start': ['right-start', 'right-end', 'left-start', 'left-end'],
      'right-end': ['right-end', 'right-start', 'left-end', 'left-start'],
    }[position];
  }

  computeOffset(position) {
    let content = this.contentTarget;
    let tip = this.tipTarget;
    let offset = { position: position };

    switch (position) {
    case 'top-start':
      offset.top = content.offsetTop - tip.offsetHeight;
      offset.left = content.offsetLeft;
      break;
    case 'top-end':
      offset.top = content.offsetTop - tip.offsetHeight;
      offset.left = content.offsetLeft + content.offsetWidth - tip.offsetWidth;
      break;
    case 'bottom-start':
      offset.top = content.offsetTop + content.offsetHeight;
      offset.left = content.offsetLeft;
      break;
    case 'bottom-end':
      offset.top = content.offsetTop + content.offsetHeight;
      offset.left = content.offsetLeft + content.offsetWidth - tip.offsetWidth;
      break;
    case 'left-start':
      offset.top = content.offsetTop;
      offset.left = content.offsetLeft - tip.offsetWidth;
      break;
    case 'left-end':
      offset.top = content.offsetTop + content.offsetHeight - tip.offsetHeight;
      offset.left = content.offsetLeft - tip.offsetWidth;
      break;
    case 'right-start':
      offset.top = content.offsetTop;
      offset.left = content.offsetLeft + content.offsetWidth;
      break;
    case 'right-end':
      offset.top = content.offsetTop + content.offsetHeight - tip.offsetHeight;
      offset.left = content.offsetLeft + content.offsetWidth;
      break;
    }
    offset.bottom = offset.top + this.tipTarget.offsetHeight;
    offset.right = offset.left + this.tipTarget.offsetWidth;
    return offset;
  }

  isOverflow(offset) {
    return offset.top < window.scrollY || offset.bottom > window.innerHeight + window.scrollY ||
           offset.left < window.scrollX || offset.right > window.innerWidth + window.scrollX;
  }
}
