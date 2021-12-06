import { Injectable, EventEmitter } from '@angular/core';
import { environment } from '../../environments/environment';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ModalImagenService {

  private _ocultarModal: boolean = true;
  public tipo: 'usuarios'|'medicos'|'hospitales';
  public id: string;
  public img: string;

  public nuevaImagen: EventEmitter<string> = new EventEmitter<string>();

  get ocultarModal() {
    return this._ocultarModal;
  }

  abrirModal(
      tipo: 'usuarios'|'medicos'|'hospitales',
      id: string,
      img: string = 'no-img'
  ) {
    this._ocultarModal = false;
    this.tipo = tipo;
    this.id = id;
    //http://localhost:3005/api/upload/usuarios/ca12fed8-8695-4945-a0ff-aab6e0e1e246.jpg

    if ( img.includes('https') ) {
      this.img = img;
    } else {
      this.img = `${ base_url }/upload/${ tipo }/${ img }`;
    }
    console.log(this.img);

  }

  cerrarModal(){
    this._ocultarModal = true;
  }


  constructor() { }
}
