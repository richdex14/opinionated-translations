const groupState = {};

class ToggleElement extends HTMLElement {
  connectedCallback() {
    const trigger = this.querySelector('.toggle-trigger');
    const content = this.querySelector('.toggle-content');
    const group = this.getAttribute('data-group');

    if (trigger) {
      trigger.addEventListener('click', () => {
        if (group) {
          groupState[group] = !groupState[group];
          document.querySelectorAll(`toggle-el[data-group="${group}"]`).forEach((el) => {
            const c = el.querySelector('.toggle-content');
            if (c) c.style.display = groupState[group] ? 'inline' : 'none';
          });
        } else {
          const visible = content.style.display !== 'none';
          content.style.display = visible ? 'none' : 'inline';
        }
      });
    }
  }
}

customElements.define('toggle-el', ToggleElement);
