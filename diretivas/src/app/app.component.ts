import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diretivas';
  corDoParagrafo: string = 'black'
  estiloDoCartao: string = 'display: block;'

  mudarCorDoParagrafo(cor: string): void {
    this.corDoParagrafo = cor
  }

  deletarCartao(evento: any): void {
    console.log(evento);
    this.estiloDoCartao = 'display: none;'
    alert ("Cartão Deletado")
  }
}
