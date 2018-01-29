import { Component, OnInit,OnDestroy } from '@angular/core';
import {Router} from '@angular/router'

@Component({
    selector: 'step3',
    templateUrl: './orderConfirmStepThree.component.html'
})

//实现接口
export class OrderConfirmStepThreeComponent implements OnInit,OnDestroy {
    count:number=5;
    myTimer:any;
    constructor(private myRouter:Router) { }

    ngOnInit() { 
        this.myTimer = setInterval(()=>{
            this.count--;
            if(this.count==0){
                //结束定时器
                    clearInterval(this.myTimer);
                    this.myTimer=null;
                //跳转到首页
                this.myRouter.navigateByUrl('/index');
            }
        },1000);
   }
   //生命周期的钩子函数
   ngOnDestroy(){
       //检查定时器是否关闭
       if(this.myTimer){
           clearInterval(this.myTimer);
           this.myTimer = null;
       }
   }
}