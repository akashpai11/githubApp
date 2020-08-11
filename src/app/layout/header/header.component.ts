import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  email = null;

  constructor(
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    auth.getUser().subscribe((user) => {
      this.email = user?.email;
    });
  }

  ngOnInit(): void {}
  //as the signout is done over the web we need to give that method as async
  //if there is async there should be awake
  async handleSignOut() {
    try {
      const res = await this.auth.signOut();
      this.router.navigateByUrl('/signin');
      this.toastr.info('Login again to continue');
      this.email = null;
    } catch (error) {
      this.toastr.error('Something is wrong');
    }
  }
}
