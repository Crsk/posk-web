import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SidenavService } from './services/sidenav.service';
import { NgForm } from '@angular/forms';
import { MatSidenav } from '@angular/material';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  bool = false;
  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(private http: HttpClient, private sidenavService: SidenavService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }

  receiveBool($event) {
    this.bool = $event;
    this.sidenav.toggle();
  }

  deniedMsg() {
    this.toastr.error('Debes iniciar sesión', 'Acceso Denegado');
  }

  onSubmit(form: NgForm) {
    console.log(form);
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
    this.http.post('http://127.0.0.1:3000/send', JSON.stringify(form.value), {
      headers: headers
    }).subscribe();
    this.toastr.success('Message has been sent');
    form.reset();
  }
}
