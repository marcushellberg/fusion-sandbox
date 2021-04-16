import { customElement, html } from 'lit-element';
import { View } from '../view';
import "@vaadin/vaadin-button";

@customElement('sandbox-view')
export class SandboxView extends View {
  render() {
    return html`
        <h1>Vaadin Sandbox</h1>
        <p>Add some components, play around. </p>

        <vaadin-button theme="primary">YAY</vaadin-button>
    `;
  }
}
