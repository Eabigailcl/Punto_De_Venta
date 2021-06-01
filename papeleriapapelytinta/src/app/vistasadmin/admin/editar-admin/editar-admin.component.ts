import { Admin } from './../../servicios/admin';
import { AdminService } from './../../servicios/admin.service';
import { Router, ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';


declare interface User {
  text?: string; // required, must be 5-8 characters
  email?: string; // required, must be valid email format
}

@Component({
  selector: 'app-editar-admin',
  templateUrl: './editar-admin.component.html'
})
export class EditarAdminComponent implements OnInit {

  public typeValidation: User;

  public admin: Admin = new Admin( '' , '' , '' , '' , 0);

  constructor(private route: ActivatedRoute,
    private router: Router, private adminService: AdminService) { }

    prueba(){
      console.log(this.admin);
    }

  ngOnInit() {

    this.typeValidation = {
      text: '',
      email: '',
  }

    this.prueba();
    let idAdmin = this.route.snapshot.paramMap.get("id");
    this.adminService.getAdmin(idAdmin).subscribe((admin: Admin) => this.admin = admin)
  }

  volver() {
    this.router.navigate(['/admin']);
  }

  onSubmit() {
    this.adminService.updateAdmin(this.admin).subscribe(() => {
    });this.volver();
  }

  save(model: User, isValid: boolean) {
    // call API to save customer
    console.log(model, isValid);
  }

}
