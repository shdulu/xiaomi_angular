//a-module-routing
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
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

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'index', component: IndexComponent},
  { path:'login',component:LoginComponent},
  { path:'list',component:ListComponent},
  { path:'cart',component:CartComponent},
  { 
    path:'orderConfirm',
    component:OrderConfirmComponent,
    children:[
      {path:'',component:OrderConfirmStepOneComponent},
      {path:'step1',component:OrderConfirmStepOneComponent},
      {path:"step2",component:OrderConfirmStepTwoComponent},
      {path:"step3",component:OrderConfirmStepThreeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

//export const routedComponents = [IndexComponent];