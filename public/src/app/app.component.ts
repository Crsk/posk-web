import { Component, ViewChild, OnInit } from '@angular/core';
import { SidenavService } from './services/sidenav.service';
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

  constructor(private sidenavService: SidenavService, private toastr: ToastrService) {
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
}
