import { Component, OnInit } from '@angular/core';
import { TableData } from '../../md/md-table/md-table.component';


declare interface User {
  text?: string; // required, must be 5-8 characters
  email?: string; // required, must be valid email format
  number?: number; 
}

declare var $:any;
declare var swal: any;

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  public tableData1: TableData;
  public typeValidation: User;

  constructor() { }

  ngOnInit() {
    this.typeValidation = {
      text: '',
      email: '',
  }

  this.tableData1 = {
    headerRow: [ '#', 'Name', 'Job Position', 'Since', 'Salary', 'Actions'],
    dataRows: [
        ['1', 'Andrew Mike', 'Develop', '2013', '99,225',''],
        ['2', 'John Doe', 'Design', '2012', '89,241', 'btn-round'],
        ['3', 'Alex Mike', 'Design', '2010', '92,144', 'btn-simple'],
        ['4','Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
        ['5', 'Paul Dickens', 'Communication', '2015', '69,201', '']
    ]
 };

 $('.datepicker').datetimepicker({
  format: 'MM/DD/YYYY',
  icons: {
      time: "fa fa-clock-o",
      date: "fa fa-calendar",
      up: "fa fa-chevron-up",
      down: "fa fa-chevron-down",
      previous: 'fa fa-chevron-left',
      next: 'fa fa-chevron-right',
      today: 'fa fa-screenshot',
      clear: 'fa fa-trash',
      close: 'fa fa-remove',
      inline: true
  }
});

  }

  save(model: User, isValid: boolean) {
    // call API to save customer
    console.log(model, isValid);
  }
    onSubmit(value: any):void{
        console.log(value);
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
