import { Admin } from './../servicios/admin';
import { AdminService } from './../servicios/admin.service';
import { Router } from '@angular/router';
import { TableData1 } from './../../md/md-table/md-table.component';
import { FormsModule } from '@angular/forms';
import { Component, OnInit,  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';




declare interface User {
  text?: string; // required, must be 5-8 characters
  email?: string; // required, must be valid email format
}

declare var $:any;
declare var swal:any;



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})

export class AdminComponent implements OnInit {
  administradores =null;
  
  admin ={
    id: null,
    nombre: null,
    apellido: null,
    correo : null,
    password: null,
  }



  public tableData1: TableData1;
  public typeValidation: User;

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {

    this.obtenerAdministradores();
    
    this.typeValidation = {
        text: '',
        email: '',
    }

  this.prueba();
    
this.tableData1 = {
      headerRow: [ 'ID', 'Nombre', 'Descripcion', 'Correo', 'Acciones'],
   };
  
    
  }
/*
  obtenerAdministradores() {
    return this.adminService
      .getAdministradores()
      .subscribe((admins: Admin[]) => this.admins = admins);
  }*/
  obtenerAdministradores() {
    this.adminService.getAdministradores().subscribe(result => this.administradores = result);
  }

  

prueba(){
  console.log(this.adminModel);
}

adminModel = new Admin("" , "" , "" , "" ,undefined)

  addAdmin() {
    this.adminService.addAdmin(this.adminModel).subscribe(
        datos => {
            if (datos['resultado'] === 'OK') {
                alert (datos['mensaje']);
            } else {
                alert (datos['mensaje']);
                this.prueba();
            }
        }
    );
    this.volver();
}

eliminarAdmin(admin: Admin) {
  console.log(admin.id)
      this.adminService
        .deleteAdmin(admin)
        .subscribe(() => {
          this.obtenerAdministradores();
        });
        this.volver();
    }

    volver() {
      this.router.navigate(['/admin']);
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
          this.volver();
        }}

}


