import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/models';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private userService: UserService, private router: Router) { }

    ngOnInit(): void { }

    onSubmit(formValues) {
        const username = formValues.username; const password = formValues.password;
        const user = {username, password} as User;
        console.log(user)

        this.userService.login(user).subscribe((res) => {
            console.log(res)
            if (res['token'] !== undefined) {
                this.userService.authentication = res['token'];
                this.router.navigate(['/management']);

            } else {
                alert('Gebruikersnaam en/of wachtwoord is onjuist, probeer opnieuw a.u.b.');
            }
        } );
    }

    cancel() {
        this.router.navigate(['/home']);
    }
}
