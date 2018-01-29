import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
    selector: 'step1',
    templateUrl: './orderConfirmStepOne.component.html',
    styleUrls:['assets/css/order_confirm.css']
})

export class OrderConfirmStepOneComponent implements OnInit {
    constructor(private myRouter:Router) { }

    ngOnInit() { }

    jump(){
        //路由嵌套必须指定完整的路由地址，与vue不同
        this.myRouter.navigateByUrl('/orderConfirm/step2');

    }
}