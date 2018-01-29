import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app.router'
import{FormsModule}  from '@angular/forms'
import{HttpModule}  from '@angular/http'

import { AppComponent }  from './app.component';
import {HeaderComponent} from './utility/header/header.component'
import {IndexComponent} from './index/index.component'
import {MyHttpService} from 
'./utility/service/http.service'
import {Carousel} from 
'./utility/carousel/carousel.component'
import {Slide} from
'./utility/carousel/slide.component'
import {storeFooterComponent} from
'./utility/footer/footer.component'
import {LoginComponent} from
'./login/login.component'
import {ListComponent} from
'./list/list.component'
import {CartComponent} from
'./cart/cart.component'
import {OrderConfirmComponent} from
'./orderConfirm/order-confirm.component'
import {OrderConfirmStepTwoComponent} from
'./orderConfirm/orderConfirmStepTwo.component'
import {OrderConfirmStepOneComponent} from
'./orderConfirm/orderConfirmStepOne.component'
import {OrderConfirmStepThreeComponent} from
'./orderConfirm/orderConfirmStepThree.component'
import {DetailComponent} from
'./detail/detail.component'

@NgModule({
  imports:      [ BrowserModule,AppRoutingModule,
   FormsModule,HttpModule],
  declarations: [ 
                  AppComponent,
                  IndexComponent,
                  HeaderComponent,
                  Carousel,
                  Slide,
                  storeFooterComponent,
                  LoginComponent,
                  ListComponent,
                  CartComponent,
                  OrderConfirmComponent,
                  OrderConfirmStepTwoComponent,
                  OrderConfirmStepOneComponent,
                  OrderConfirmStepThreeComponent,
                  DetailComponent                                                 
                  ],
  bootstrap:    [ AppComponent ],
  providers:[MyHttpService]
})
export class AppModule { }
