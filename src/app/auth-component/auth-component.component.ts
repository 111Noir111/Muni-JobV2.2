import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.scss'],
})
export class AuthComponentComponent implements OnInit {
 
  screen: any = 'signin';
  formData: FormGroup;
  isLoading: boolean = false;
  constructor(private fb:FormBuilder, private auth:AuthService, private router: Router) {
    this.formData = this.fb.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required]],
    });
  }

  ngOnInit() {}

  change(event){
    this.screen = event;
  }

  login(){
    // var formData: any = new FormData();
    // if(this.formData.valid){
    //   this.isLoading = true
    //   formData.append('email', this.formData.get('email').value);
    //   formData.append('password', this.formData.get('password').value);
    //   console.log(this.formData)
    //   this.auth.userLogin(formData).subscribe((data:any)=>{
    //     console.log(data);
    //   });
    // }  
    this.router.navigate(['/home']);
  }

  register(){
    var formData: any = new FormData();
    if(this.formData.valid){
      this.isLoading = true
      formData.append('name', this.formData.get('name').value);
      formData.append('email', this.formData.get('email').value);
      formData.append('password', this.formData.get('password').value);
      console.log(this.formData)
      this.auth.userRegister(formData).subscribe((data:any)=>{
        console.log(data);
      });
    }  
  }

}
