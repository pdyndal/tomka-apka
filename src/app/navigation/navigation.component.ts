import {Component, Input, OnInit} from '@angular/core';
import {NavigationInterface} from "../interfaces/navigation.interface";
import {UserInterface} from "../interfaces/user.interface";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() buttons: NavigationInterface[] = [
    { path: '/login', name: 'Login'},
    { path: '/register', name: 'Rejestracja'},
  ];

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('userData') !== null) {
      const userData: UserInterface = JSON.parse(localStorage.getItem('userData') ?? '') as UserInterface;
      this.buttons = [
        ...this.buttons,
        { path: `/${userData.id}/profile`, name: 'Profil'},
        { path: `/${userData.id}/todos`, name: 'Lista zadań'},
      ];
    }
  }
}
