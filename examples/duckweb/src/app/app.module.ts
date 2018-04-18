import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TransactionComponent } from './transaction/transaction.component';


@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    // Bien importer le module httpClient apres le module browser
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
