import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent {

  cantidad = 0;
  tengo = 'USD';
  quiero = 'EUR';
  total = 0;

  monedas: string[] = ['USD','EUR','CRC','GBP']
  constructor() {}

  ngOnInit(): void {}

  convertir() {
    switch(this.tengo){
      case 'USD':
        if(this.quiero === 'USD'){
          this.total = this.cantidad;
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad * 0.93
        }
        if(this.quiero === 'CRC'){
          this.total = this.cantidad * 591.73
        }
        if(this.quiero === 'GBP'){
          this.total = this.cantidad * 0.83
        }        
    break;
    case 'EUR':
        if(this.quiero === 'USD'){
          this.total = this.cantidad * 1.07
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad
        }
        if(this.quiero === 'CRC'){
          this.total = this.cantidad * 633.74
        }
        if(this.quiero === 'GBP'){
          this.total = this.cantidad * 0.89
        }        
        break;
        case 'CRC':
        if(this.quiero === 'USD'){
          this.total = this.cantidad * 0.0017
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad * 0.0016
        }
        if(this.quiero === 'CRC'){
          this.total = this.cantidad
        }
        if(this.quiero === 'GBP'){
          this.total = this.cantidad * 0.0014
        }        
    break;
    case 'GBP':
        if(this.quiero === 'USD'){
          this.total = this.cantidad * 1.21 
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad * 1.13
        }
        if(this.quiero === 'CRC'){
          this.total = this.cantidad * 715.08
        }
        if(this.quiero === 'GBP'){
          this.total = this.cantidad
        }        
    break;
    }
  }

}
