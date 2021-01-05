import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthControllerService, AuthResponseDTO, UserDTO } from 'build/openapi';
import { LoginServiceService } from 'src/app/login-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  invalidLogin : boolean = false
  
  userDTO : UserDTO= {
    name: '',
    password: ''
  }
  authResponseDTO : AuthResponseDTO = {
    userId : -1,
    type: 'F'
  }

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthControllerService , private loginService: LoginServiceService ) {}

  ngOnInit(): void {
  }

  handleLogin(){
    this.authService.authentification(this.userDTO).subscribe(x=>{
      this.authResponseDTO = x;
      console.log(this.authResponseDTO);
      if(this.authResponseDTO.userId != -1 ) this.invalidLogin = false; else {this.invalidLogin = true; return;};
      this.loginService.registerSuccessfulLogin(this.authResponseDTO.userId,this.authResponseDTO.type)
      switch(this.authResponseDTO.type){
        case "D":
          this.router.navigate(['doctor/main']);
          return;
        case "C":
          this.router.navigate(['caregiver/main',this.authResponseDTO.userId]);
          return;
        case "P":
          this.router.navigate(['patient/main',this.authResponseDTO.userId])
          return;
        }
    })
  }
}
