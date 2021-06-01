import { Component, OnInit } from '@angular/core';
import { TableData } from '../../md/md-table/md-table.component';

declare var $:any;
declare interface Table_With_Checkboxes {
    id?: number;
    ischecked?: boolean;
    product_name: string;
    type: string;
    quantity: number;
    price: any;
    amount: string;
}
export interface TableData2 {
  headerRow: string[];
  dataRows: Table_With_Checkboxes[];
}

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  public tableData3: TableData;

  constructor() 
  {
    this.tableData3 = {
      headerRow: [ '', 'Nombre', 'Codigo', 'Cantidad', 'Precio','Total'],
      dataRows: [
          ['product1', 'Cuaderno', '005', '2', '55','110'],
          ['product2', 'Lapicero', '006', '1', '5','10'],
          ['product3', 'Lapiz', '002', '2', '3','6']
      ]
   };
   }


   getTotal(){
    var total = 0;
    for( var i = 0; i < this.tableData3.dataRows.length; i++ ){
        var integer = parseInt(this.tableData3.dataRows[i][5])
        total += integer;
    }
    return total;
};

  ngOnInit() {
  }

}
