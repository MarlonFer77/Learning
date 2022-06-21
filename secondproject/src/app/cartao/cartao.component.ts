import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css']
})
export class CartaoComponent implements OnInit {

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