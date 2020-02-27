import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../Services/user.service';
// import { AdminService } from '../../Services/admin.service';
import {Router} from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  errorMessage = 'Incorrect Login Details';

    form: FormGroup;
    loading: boolean;

  constructor(private userService: UserService,
    private router: Router) {
      this.form=new FormGroup({
        rollNo: new FormControl(null,[Validators.required]),
        password: new FormControl(null,[Validators.required])
      })
     }

  ngOnInit() {
  }

  // hide = true;

   
  submit() {
    // if (this.form.invalid) {
    //   return;
    // }

    const data = this.form.value;

    this.userService.login(data)
      .subscribe(res => {
        localStorage.setItem('auth_token', res.token);
        //  if (res.user.role === 'faculty') 
        
          this.router.navigate(['/admin-home']);
          
        
        //  else {
        //    this.router.navigate(['/noticeboard']);

        //  }
      }, error1 => {
        alert(this.errorMessage);
      });
    }
}
