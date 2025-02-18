import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  standalone: true,
  imports: [RouterModule],
})
export class MenuComponent implements OnInit {
  @Input() imageUrl!: string;
  constructor(private router: Router) {}

  ngOnInit() {
    console.log('Current URL:', this.router.url);
  }
}
