import { Router } from '@angular/router';
import { CategService } from './../servicios/categoria.service';
import { Component, OnInit } from '@angular/core';
import { TableData1 } from './../../md/md-table/md-table.component';
import { Categoria } from './../servicios/categoria';


declare interface User {
  text?: string; // required, must be 5-8 characters
  email?: string; // required, must be valid email format
  number?: number; 
}

declare var $:any;
declare var swal: any;

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html'

})
export class CategoriasComponent implements OnInit {
  categorias =null;
  
  categ ={
    id: null,
    nombre: null,
    descripcion: null,
  }



  public typeValidation: User;
  public tableData1: TableData1;


  constructor(private router: Router, private categService: CategService) { }

  
  ngOnInit() {

    this.typeValidation = {
      text: '',
      email: '',
  }

  this.obtenerCategorias();

  this.tableData1 = {
    headerRow: [ 'ID', 'Nombre', 'Descripcion', 'Acciones'],
 };

  }

  categModel = new Categoria ("" , "" , undefined)

  obtenerCategorias() {
    this.categService.getCategorias().subscribe(result => this.categorias = result);
  }

  save(model: User, isValid: boolean) {
    // call API to save customer
    console.log(model, isValid);
  }

  showSwal(type){
    if(type == 'success-message'){
      swal({
            type: "success",
            title: "Buen trabajo",
            text: "Se acaba de agregar un nuevo administrador",
            buttonsStyling: false,
            confirmButtonClass: "btn btn-info"

        });
      }}

}
