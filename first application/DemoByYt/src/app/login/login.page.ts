import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {
    email: '',
    password: ''
  }

  constructor(
    private router: Router,
    public ngAuth: AngularFireAuth
    ) {  }

  ngOnInit() {
  }

  async login() {
    const user = await this.ngAuth.signInWithEmailAndPassword(this.user.email, this.user.password);
    
    console.log(user);

    if(user.user?.email) {
      this.router.navigate(['/home']);
    } else {
      alert('Login failed!')
    }

    this.user.email = '';
    this.user.password = '';
  }

  async register() {
    const user = await this.ngAuth.createUserWithEmailAndPassword(this.user.email, this.user.password);

    console.log(user);

    if(user.user?.email) {
      alert('Reistration successfull!')
    } else {
      alert('Registration failed!')
    }

    this.user.email = '';
    this.user.password = '';
  }


}
