import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeDirective } from './home/home.directive';
import { HeaderComponent } from './header/header.component';
import { HeaderDirective } from './header/header.directive';
import { FooterComponent } from './footer/footer.component';
import { FooterDirective } from './footer/footer.directive';
import { SharedService } from './shared/shared.service';
import { ConfigService } from './config/config.service';
import { ApiService } from './config/api.service';
import { customHttpProvider } from './_helpers/custom-http';

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { MatInputModule } from '@angular/material';

import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { TestGridModule } from './testgrid/testgrid.module';
import { HeaderENComponent } from './header/header-en.component';
import { FooterENComponent } from './footer/footer-en.component';
import { HomeENComponent } from './home/home-en.component';

@NgModule({
  imports: [ 
    BrowserModule,
    Ng2Bs3ModalModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ToastModule.forRoot(),
    RouterModule.forRoot([
     { path: 'home', component: HomeComponent },

     { path: '', redirectTo: 'home', pathMatch: 'full'},
     { path: '**', redirectTo: 'home', pathMatch: 'full'}


    ])
   ,
   TestGridModule

  ],
  providers: [
    SharedService,
    ConfigService,
    ApiService,
    customHttpProvider
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HomeDirective,
    HeaderDirective,
    FooterDirective,
HeaderENComponent,
FooterENComponent,
HomeENComponent
  ],
  entryComponents: [
    HeaderENComponent,
    FooterENComponent,
    HomeENComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }