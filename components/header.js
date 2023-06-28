class MeuHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header class="page-header">
        <div class="flex">
        <img src="../client/imgs/logoredondo.png" width="40px" style="margin-right:10px;"> 
            <h1 class="page-title">MultiHealth </h1>
            <p id="nameop"></p>
        </div>
        <div class="flex row">
     
            <button class="button notific" onclick="deslogar()"><i class="lni lni-power-switch"></i></button>
        </div>
        </header>
      `;
    }
}

// Registrar o elemento personalizado
customElements.define('comp-header', MeuHeader);