import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeituraTarefaComponent } from './leitura-tarefa/leitura-tarefa.component';
import { AdicionarTarefaComponent } from './adicionar-tarefa/adicionar-tarefa.component';

@NgModule({
  declarations: [
    AppComponent,
    LeituraTarefaComponent,
    AdicionarTarefaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
