import { Component } from '@angular/core';
import { MensajeUsuarioComponent } from '../mensaje-usuario/mensaje-usuario.component';
import { CommonModule } from '@angular/common';

interface Mensaje {
  usuario: string;
  texto: string;
}

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [MensajeUsuarioComponent, CommonModule],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent {
  mensajes: Mensaje[] = [];

  agregarMensaje(mensaje: Mensaje) {
    console.log('Mensaje recibido:', mensaje);
    this.mensajes.push(mensaje);
  }
}
