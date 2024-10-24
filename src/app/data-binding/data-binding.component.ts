import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  message: string = 'Meu primeiro Data Binding!';

  imagePath = 'assets/@renato.webp';

  isDisabled = true;

  ariaLabel = 'Fechar';

  estilizarTitulo = false;

  nomeCliente = "";
  
  //botaoClass = "botao verde";

  //botaoClass = "botao vermelho";

  //botaoClass = ["botao", "vermelho"];

  // botaoClass = ["botao", "verde"];

  //botaoClass = {botao:true, verde: true, vermelho:false}

  // botaoClass = {botao:true, verde: false, vermelho:true}

  botaoClass = "botao";

  botaoFechar = ` 

  `
  // border: 1px solid;
  // border-radius: 30px;
  // padding: 5px;
  // width: 30px;
  // height: 30px;
  // display: flex;
  // justify-content: center;
  // align-items: center;

  enableCloseButton() {
    
    this.isDisabled = !this.isDisabled
  }

  aplicarEstiloNoTitulo() {
    this.estilizarTitulo = !this.estilizarTitulo
  }

}
