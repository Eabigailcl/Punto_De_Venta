import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Component, OnInit, NgModule } from '@angular/core';
import {LogService } from 'app/logs/log.service';

declare var $: any;
declare var swal: any;

declare interface User {
    text?: string; // required, must be 5-8 characters
    email?: string; // required, must be valid email format
  }


@Component({
    moduleId: module.id,
    selector: 'login-cmp',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    test: Date = new Date();

    login = {
       usuario: null,
       password: null
    }
    public typeValidation: User;


  constructor(private loginService: LoginService, public router: Router, private logger: LogService) { }

        loginUsuario() {
    this.loginService.loginUsuario(this.login).subscribe(
        datos => {
            if (datos['resultado'] === 'OK') {
                alert (datos['mensaje']);
                this.router.navigateByUrl('/dashboard');
                this.logger.log("Método login exitoso");
            } else {
                alert (datos['mensaje']);
                this.logger.log("Método login fallido");      
            }
        }
    );
}

    ngOnInit() {

        this.typeValidation = {
            text: '',
            email: '',
        }

        this.checkFullPageBackgroundImage();

        setTimeout(function() {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700)

    }

save(model: User, isValid: boolean) {
    // call API to save customer
    console.log(model, isValid);
  }
    onSubmit(value: any): void {
        console.log(value);
    }

    checkFullPageBackgroundImage() {
        var $page = $('.full-page');
        var image_src = $page.data('image');

        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
            $page.append(image_container);
        }
    };

}
