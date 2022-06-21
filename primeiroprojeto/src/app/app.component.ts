import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador: number = 0
  simbolos: Array<string> = ['+', '-']

  incrementar(): void {
    this.contador++
  }

  decrementar():void {
    this.contador--
  }

  adicionarValor(evento: any): void {
    this.contador = parseInt(evento.target.value)
    
  }
}