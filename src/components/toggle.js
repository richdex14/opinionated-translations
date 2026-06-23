class ToggleElement extends HTMLElement {
  connectedCallback() {
    const trigger = this.querySelector('.toggle-trigger');
    const content = this.querySelector('.toggle-content');
    let visible = false;

    trigger.addEventListener('click', () => {
      visible = !visible;
      content.style.display = visible ? 'inline' : 'none';
    });
  }
}

customElements.define('toggle-el', ToggleElement);
