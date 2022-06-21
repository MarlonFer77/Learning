import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() // input binding
  tituloCartao: string = 'Texto Inicial'

  @Input()
  textoCartao: string = 'Digite seu texto aqui...'

  @Input()
  corDaBorda: string = 'red'

  @Input()
  ImgSrc: string = ''

  @Output()
  deletarCartao: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }
  
  emitirDelecaoDoCartao(): void {
    this.deletarCartao.emit({
      excluir: true 
    })
  }

  gerarCssDoCartao(): string {
    return `border-color: ${this.corDaBorda};`
  }

}
