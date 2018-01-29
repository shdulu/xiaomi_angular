import { Component, OnInit } from '@angular/core';
import {MyHttpService} from '../utility/service/http.service'

@Component({
    selector: 'storeList',
    templateUrl: './list.component.html',
    styleUrls:['assets/css/products.css']

})

export class ListComponent implements OnInit {
    nowPage:number=1;
    pageCount:number=1;
    pageList:Array<any>=[];

    list:Array<any>=[];
    constructor(private myHttpService:MyHttpService) { }

    ngOnInit() { 
        //在组件初始化完成后，向服务器端请求产品列表的数据
        this.loadData();
    }

    //切换页面
    changePage(pageNo:number){
        //设置当前第几页
        this.nowPage = pageNo;
        //请求该页面对应的数据
        //这里不同传参，因为唯一的参数就是页码数，已经动态修改过了
        this.loadData();

    }

    //上一夜下一页的开发、
    modifyPage(isNext:boolean){
        if(isNext)
        {
            //下一页
            if(this.nowPage==this.pageCount){
                return;
            }
            this.nowPage++;
        }
        else{
            //上一页
            if(this.nowPage==1){
                return;
            }
            this.nowPage--;
        }
        this.loadData();
    }

    //加载数据封装分页请求
    loadData(){
        this.myHttpService
        .sendRequest('http://localhost/mi2/data/product/list.php?pno='
        +this.nowPage)
        .subscribe((result)=>{
            console.log(result);
            //保存列表数据到list中
            this.list  =result.data;
            this.pageCount = result.pageCount;
            this.pageList = [];
            //根据页码总数，向List数组取放数据
            for(var i=0;i<this.pageCount;i++){
                var page = i+1;
                this.pageList.push(page);
            }
        })
    }
}