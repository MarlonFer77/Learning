import { Component } from '@angular/core';
import { Users } from './models/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: Users = {
    acceptTerms: false,
    email: '',
    nome: '',
    senha: '',
    username: '',
    genero: ''
  }

  salvarUsuario(){
    alert('Cadastro feito com sucesso')
    console.log(this.user);
    
  }
}
