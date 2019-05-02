import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'angular5-data-table';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CustomFormsModule } from 'ng2-validation';

import { environment } from './../environments/environment';
import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/components/login/login.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ProductsComponent } from './shopping/components/products/products.component';
import { ShoppingModule } from './shopping/shopping.module';
import { componentFactoryName } from '@angular/compiler';
import { OrderSuccessComponent } from './shopping/components/order-success/order-success.component';
import { AuthGuard } from './shared/services/auth-guard.service';

import { SignupComponent } from './signup/signup.component';
import { CateringComponent } from './catering/catering.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MyOrderdetailsComponent } from './my-orderdetails/my-orderdetails.component';
import { HomeComponent } from './core/components/home/home.component';
import { ImagesComponent } from './images/images.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    CateringComponent,
    FeedbackComponent,
    MyOrderdetailsComponent,
    ImagesComponent,
    
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AdminModule,
    ShoppingModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule.forRoot(),
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: '' , component: HomeComponent},
      { path: 'products', component: ProductsComponent },
      { path: 'signup', component: SignupComponent},
      { path: 'catering', component: CateringComponent},
      { path: 'feedback', component: FeedbackComponent},
      { path: 'login', component: LoginComponent },
      {path : 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuard]},
      {path : 'my-orderdetails', component: MyOrderdetailsComponent, canActivate: [AuthGuard]}
    ])
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
