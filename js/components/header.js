class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header class="header">
      <div>
        <div class="logo-div">
          <img src="/util/media/svg/logo.svg" alt="logo" href="/index.html" />
        </div>
        <div id="header-navigation">
          <nav>
            <a id="highligthed" href="/">Crymbo Oracle</a>
            <a href="/crymbo-connect">Crymbo Connect</a>
            <a href="#">Documentation</a>
            <a href="/developers">Ecosystem</a>
            <a href="#">Pricing</a>
            <a href="#">Blog</a>
          </nav>
        </div>
        <div>
          <div id="header-buttons-div">
            <a id="header-req-button" href="/request-demo"
              >Request demo
              <div class="arrow-raise-container">
                <img
                  src="/util/media/svg/button-arrow.svg"
                  class="arrow-raise invert-img"
                /></div
            ></a>
            <button id="dropdown-menu-button">
              <img
                id="dropdown-menu-img"
                type="button"
                src="/util/media/svg/hamburger-menu.svg"
                alt="menu"
              />
            </button>
          </div>
        </div>
      </div>
    </header>

    <div class="header-dropdown-navigation">
      <nav>
        <a id="highligthed" href="/">Crymbo Oracle</a>
        <a href="/crymbo-connect">Crymbo Connect</a>
        <a href="#">Documentation</a>
        <a href="/developers">Ecosystem</a>
        <a href="#">Pricing</a>
        <a href="#">Blog</a>
        <div>
          <a id="header-req-button" class="margin-bottom" href="/request-demo"
            >Request demo
            <div class="arrow-raise-container">
              <img
                src="/util/media/svg/button-arrow.svg"
                class="arrow-raise invert-img"
              /></div
          ></a>
        </div>
      </nav>
    </div>

   

    `;
  }
}

customElements.define("header-component", Header);
