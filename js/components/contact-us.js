class ContactUs extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="contact-us-section">
      <div class="contact-us-div">
        <p>CONTACT US NOW</p>
        <h2>Ready to streamline your <span>digital asset compliance?</span></h2>
        <button>
          <div id="uni-button-div">
            <div>Request Demo</div>
          </div>
          <div class="arrow-raise-container" id="uni-layer-arrow">
            <img src="/util/media/svg/button-arrow.svg" class="arrow-raise" />
          </div>
        </button>
      </div>
    </section>
    `;
  }
}

customElements.define("contact-us-component", ContactUs);
