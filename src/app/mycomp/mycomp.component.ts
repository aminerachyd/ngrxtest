import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface Mine {
  name: string;
  title: string;
  number: number;
}

// On injecte le store dans le constructeur
// On choisit les states à récupérer depuis le store avec cette interface
interface AppState {
  // message: string;
  mine: Mine;
}

@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.css'],
})
export class MycompComponent implements OnInit {
  mine: Observable<Mine>;

  constructor(private store: Store<AppState>) {
    this.mine = this.store.select('mine');
  }

  // Actions à dispatcher
  nameAction() {
    this.store.dispatch({ type: 'CHANGE_NAME' });
  }

  titleAction() {
    this.store.dispatch({ type: 'CHANGE_TITLE' });
  }

  numberAction() {
    this.store.dispatch({ type: 'CHANGE_NUMBER' });
  }

  ngOnInit(): void {}
}
