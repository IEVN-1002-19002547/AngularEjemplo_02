import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {
  num1='';
  num2='';
  operacion='';
  resultado: number | string=0; // Declara resultado como number o string

calcular() {
    const numero1 = parseFloat(this.num1);
    const numero2 = parseFloat(this.num2);

    if (isNaN(numero1) || isNaN(numero2)) {
        this.resultado = 'Por favor, ingrese números válidos'; //Validacion de numeros
    } else {
        if (this.operacion === 'sumar') {
            this.resultado = numero1 + numero2;
        } else if (this.operacion === 'restar') {
            this.resultado = numero1 - numero2;
        } else if (this.operacion === 'multiplicar') {
            this.resultado = numero1 * numero2;
        } else if (this.operacion === 'dividir') {
            if (numero2 !== 0) {
                this.resultado = numero1 / numero2;
            } else {
                this.resultado = 'No se puede dividir por cero';//validacion de operacion
            }
        }
    }
}



}
