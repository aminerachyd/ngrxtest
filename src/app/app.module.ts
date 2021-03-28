import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { simpleReducer } from './simple.reducer';
import { myReducer } from './myReducer';

import { AppComponent } from './app.component';
import { MycompComponent } from './mycomp/mycomp.component';

@NgModule({
  declarations: [AppComponent, MycompComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ message: simpleReducer, mine: myReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
