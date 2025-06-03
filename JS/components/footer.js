class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer class="footer">
      <div class="footer-div">
        <div class="footer-column footer-adress wide-col">
          <h4>COMPANY</h4>
          <p>
            3rd Floor 86-90 <br />
            Paul Street,
          </p>
          <p>London, England,</p>
          <p>EC2A 4NE</p>
          <p>-</p>
          <p>info@crymbo.com</p>
          <p>-</p>
          <p>X (Twitter)</p>
          <p>LinkedIn</p>
          <div id="img-div">
            <img src="/util/media/Certification-logo.webp" />
          </div>
        </div>
        <div class="footer-column shorter-col footer-linkable">
          <h4>PRODUCTS</h4>
          <p>Crymbo Oracle</p>
          <p>Crymbo Connect</p>
        </div>
        <div class="footer-column short-col footer-linkable">
          <h4>USE CASES</h4>
          <p>Launch crypto products, fast</p>
          <p>Scale operations & tech with ease</p>
          <p>Control multiple wallets & custodians</p>
          <p>Improve Capital Efficiency</p>
          <p>Intelligent Risk Managament</p>
          <p>Know your data</p>
        </div>
        <div class="footer-column short-col footer-linkable">
          <h4>DEVELOPER</h4>
          <p>Docs</p>
          <p>API Reference</p>
          <p id="margin-para">Join Crymbo Marketplace</p>
          <h4>COMPANY</h4>
          <p>Privacy Policy</p>
          <p>© 2024 Crymbo Ltd.</p>
        </div>
      </div>
      <img src="/util/media/svg/crymbo-footer-logo.svg" />
    </footer>
    `;
  }
}

customElements.define("footer-component", Footer);
