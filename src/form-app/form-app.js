import {PolymerElement} from '@polymer/polymer/polymer-element.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';


//no funcionan todavia
//import '@polymer/iron-icon/iron-icon.js';
//import '@polymer/iron-icons/iron-icons.js';

import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-form/iron-form.js';

/**
 * @customElement
 * @polymer
 */
class FormApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          text-align:center;
        }
        paper-card .card-header{
          font-size: 2rem;
          color:var(--paper-gray-700);
        }
        paper-card .card-header iron-icon{
          width: 2rem;
          height: 2rem;
          color:var(--paper-red-50);
        }
        paper-card{
          margin:auto;
          padding:2rem;
          width:25rem;
          text-align:left;
        }
        paper-card .card-actions{
          padding:1rem;
          text-align:right;
        }
        paper-button{
       
          color:var(--paper-red-300);
        }
        paper-button[raised]{
          background-color: var(--primary-color);
          color:white;
        }
      </style>
      <paper-card 
        heading="" 
        image="" 
        elevation="4" 
        animated-shadow="false">
        <div class="card-header">
          <iron-icon icon="account-circle"></iron-icon>
          Crear cuenta
        </div>
        <form is="iron-form" id="form">
          <div class="card-content">
            <paper-input 
              type="email"
              label="Email" required>
            </paper-input>
            <paper-input 
              type="password"
              label="Contraseña" required>
            </paper-input>
          </div>
          <div class="card-actions">
            <paper-button raised id="login">Enviar</paper-button>
            <paper-button>Cancelar</paper-button>
          </div>
        </form>
      </paper-card>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'form-app'
      }
    };
  }
  ready() {
    super.ready();
    this.$.login.addEventListener("click",()=>{
      this.$.form.submit();
    });
  }
}

window.customElements.define('form-app', FormApp);
