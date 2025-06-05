class ScrollBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="scroll-bar-section">
      <div class="scroll-bar-slider">
        <div class="scroll-bar-track">
          <img src="/util/media/svg/logo1.svg" />
          <img src="/util/media/svg/logo2.svg" />
          <img src="/util/media/svg/logo3.svg" />
          <img src="/util/media/svg/logo4.svg" />
          <img src="/util/media/svg/logo5.svg" />
          <img src="/util/media/svg/logo6.svg" />
          <img src="/util/media/svg/logo7.svg" />
          <img src="/util/media/svg/logo8.svg" />
          <img src="/util/media/svg/logo9.svg" />
          <img src="/util/media/svg/logo10.svg" />
          <img src="/util/media/svg/logo11.svg" />
          <img src="/util/media/svg/logo12.svg" />
          <img src="/util/media/svg/logo1.svg" />
          <img src="/util/media/svg/logo2.svg" />
          <img src="/util/media/svg/logo3.svg" />
          <img src="/util/media/svg/logo4.svg" />
          <img src="/util/media/svg/logo5.svg" />
          <img src="/util/media/svg/logo6.svg" />
          <img src="/util/media/svg/logo7.svg" />
          <img src="/util/media/svg/logo8.svg" />
          <img src="/util/media/svg/logo9.svg" />
          <img src="/util/media/svg/logo10.svg" />
          <img src="/util/media/svg/logo11.svg" />
          <img src="/util/media/svg/logo12.svg" />
        </div>
      </div>
    </section>
    `;
  }
}

customElements.define("scroll-bar-component", ScrollBar);
