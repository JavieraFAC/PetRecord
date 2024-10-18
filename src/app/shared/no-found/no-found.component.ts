import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-found',
  templateUrl: './no-found.component.html',
  styleUrls: ['./no-found.component.scss'],
})
export class NoFoundComponent {
  constructor(private router: Router) {}

  irAInicio() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {}

}
