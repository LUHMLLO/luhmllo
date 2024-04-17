import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import styles from './styles/layer.css.ts'

@customElement( 'ly-layer' )
export class Layer extends LitElement {
    @property( { type: String, reflect: true } ) stacked = 'over';

    static override readonly styles = styles;

    protected override render() {
        return html` <slot></slot> `
    }
}
