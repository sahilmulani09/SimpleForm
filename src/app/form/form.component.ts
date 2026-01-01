import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class SignupComponent {

  @ViewChild('singUpForm') singUpForm!: NgForm;
email: any;


  onSubmit() {
    console.log(this.singUpForm.value);

    const formData = {
      username: this.singUpForm.value.UserName,
      email: this.singUpForm.value.email
    };

    console.log('Form Data:', formData);

   
    this.singUpForm.reset();
  }
}
