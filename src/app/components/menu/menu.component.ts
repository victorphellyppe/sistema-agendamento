import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  standalone: true,
  imports: [],
})
export class MenuComponent implements OnInit {
  @Input() imageUrl!: string;
  constructor() {}

  ngOnInit() {}
}
