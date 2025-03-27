import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LabseqComponent } from './components/labseq/labseq.component';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppComponent,
    LabseqComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
