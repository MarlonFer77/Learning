import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-leitura-tarefa',
  templateUrl: './leitura-tarefa.component.html',
  styleUrls: ['./leitura-tarefa.component.css']
})
export class LeituraTarefaComponent implements OnInit {
  
  @Output()
  delete: EventEmitter<any> = new EventEmitter<any>()

  @Input()
  tarefa: string[] = []
  
  excluindo: string = 'display: block;'

  constructor() { }

  ngOnInit(): void {
  }
  
  addTarefa (add: string): any  {
    this.tarefa.push(add)
  }
  
  deleteTarefa(): void {
    this.delete.emit({excluir: true})
  }

  excluindoTarefa(evento:any): void {
    console.log(evento);
    
    this.excluindo = 'display: none;'
  }
}
