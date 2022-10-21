import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialModule } from '@rapid-prototyping/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { GeneratorsModule } from '@rapid-prototyping/generators';


@NgModule({
  declarations: [AppComponent,],
  imports: [
    BrowserModule, 
    MaterialModule, 
    GeneratorsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
