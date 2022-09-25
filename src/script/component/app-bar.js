class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: block;
          width: 100%;
          color: white;
          background-color: #F3FCFD;
        }
        h2 {
          padding: 16px;
        }
        nav{
          padding: 20px 50px;
      }
      
      nav h1{
          color: #24616d;
          font-size: 30px;
          text-align: center;
      }
      
      nav span{
          color: #569009;
      }
      </style>
      
      <nav>
          <h1>Cari<span>Kuliner</span></h1>
      </nav>
    `;
  }
}

customElements.define("app-bar", AppBar);
