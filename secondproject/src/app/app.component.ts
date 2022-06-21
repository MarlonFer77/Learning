import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secondproject';
  estiloDoCartao: string = 'display: block;'
  texto: string = ''
  
  @ViewChild('para')
  pOlaMundo!: ElementRef<HTMLParagraphElement>

  ngAfterViewInit() {
    setTimeout(() => {
      this.pOlaMundo.nativeElement.innerText = `One piece is the best anime of all the times`
    }, 6000);
    
  }

  mudarTexto (valor: string): void {
    this.texto = valor
  }

  deletarCartao(evento: any): void {
    console.log(evento);
    this.estiloDoCartao = 'display: none;'
    alert ("Cartão Deletado")
  }
}
