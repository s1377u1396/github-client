import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared/shared.module';
import { FormBuilder , FormGroup , Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm:FormGroup;
  
  constructor(private fb: FormBuilder){
    this.loginForm = fb.group({
      token:['',Validators.required],
    });
  }
  onSubmit(): void{
    if(this.loginForm.valid){
      const token = this.loginForm.get('token')?.value;
      console.log('Token:', token);
    }
  }
}
