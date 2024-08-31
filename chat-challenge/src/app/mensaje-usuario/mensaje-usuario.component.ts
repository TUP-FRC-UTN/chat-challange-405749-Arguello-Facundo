import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mensaje-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mensaje-usuario.component.html',
  styleUrl: './mensaje-usuario.component.css'
})
export class MensajeUsuarioComponent {
  @Input() usuario: string = '';
  @Output() nuevoMensaje = new EventEmitter<{usuario: string, texto: string}>();
  mensaje: string = '';

  enviarMensaje() {
    if (this.mensaje.trim()) {
      this.nuevoMensaje.emit({usuario: this.usuario, texto: this.mensaje});
      this.mensaje = '';
    }
  }
}
