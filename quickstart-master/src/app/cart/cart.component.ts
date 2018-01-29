import { Component, OnInit } from '@angular/core';
import {MyHttpService} from 
'../utility/service/http.service'
import{Router} from '@angular/router'

@Component({
    selector: 'storeCart',
    templateUrl: './cart.component.html',
    styleUrls:['assets/css/cart.css']
})

export class CartComponent implements OnInit {
    list:Array<any> = [];
    //全选
    isAllSelected:boolean=false;

    constructor(
        private myRouter:Router,
        private myHttpService:MyHttpService) { }

    ngOnInit() {
        //向服务器发送请求
        this.myHttpService
        .sendRequest('http://localhost/mi2/data/cart/list.php')
        .subscribe((result)=>{
            console.log(result);
            this.list=result.data;
            //遍历list，给每一个商品添加isSelected属性
            for(var i=0;i<this.list.length;i++){
                this.list[i].isSelected = false;
            }
            //
        })
     }

     //全选复选框触发ngModelChange事件，调用这个方法
     selectAll(){
         //遍历list，将list中每一个修改为全选
         for(var i=0;i<this.list.length;i++){
             this.list[i].isSelected = this.isAllSelected;
         }
     }

     //选中一个调用这个方法
     selectOne(){
         let result:boolean = true;
        //逻辑与运算
        for(var i=0;i<this.list.length;i++){
            result = this.list[i].isSelected && result
        }
        //将与运算的结果赋值给isAllSelected
        this.isAllSelected = result;
     }

     //跳转到订单确认页
     jumpToOrderConfirm(){
         this.myRouter.navigateByUrl('/orderConfirm');
     }

     //x修改购物车指定产品数量
     //isAdd是否添加index是修改购物车列表背后的下标
     modifyProductCount(isAdd:boolean,index:number){
         if(isAdd){
             this.list[index].count++;
         }else{
             if(this.list[index].count ==1){
                 return
             }
             this.list[index].count--;
         }
     }
}