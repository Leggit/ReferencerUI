import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReferenceHomeComponent } from './components/reference-home/reference-home.component';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { ReferenceOptionComponent } from './components/reference-option/reference-option.component';
import { ReferenceFormComponent } from './components/reference-form/reference-form.component';
import { FieldComponent } from './components/reference-form/field/field.component';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatIconModule} from '@angular/material/icon';
import { ReferenceOutputComponent } from './components/reference-output/reference-output.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ErrorComponent } from './components/error/error.component';
import { ReferenceExampleComponent } from './components/reference-example/reference-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ReferenceHomeComponent,
    ReferenceOptionComponent,
    ReferenceOutputComponent,
    ReferenceFormComponent,
    FieldComponent,
    ErrorComponent,
    ReferenceExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSelectModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    ClipboardModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
