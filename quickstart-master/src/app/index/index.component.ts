import { Component, OnInit } from '@angular/core';
import {MyHttpService} from 
'../utility/service/http.service'
import {Router} from '@angular/router'

@Component({
    selector: 'storeIndex',
    templateUrl: './index.component.html',
   
})

export class IndexComponent implements OnInit {
    //把临时变量保存起来，初始化最好给个空的
    carouselItems:Array<any> = [];
     //图片之间轮播的间隔时间
    private NextPhotoInterval: number = 1000;
    //是否要禁用循环播放
    private noLoopSlides: boolean = false;
    //Photos
    private slides: Array<any> = [];
    private imgs :Array<any>=[];

   
    //类全驼峰，变量小驼峰
  
    constructor(
        private myRouter:Router,
        private myHttpService:MyHttpService) { }

    ngOnInit() {
        //向服务器发送请求
         
        this.myHttpService
        .sendRequest('http://localhost/mi2/data/product/index.php').
        subscribe((result)=>{
            console.log(result);
            this.carouselItems = result.carouselItems;
            //给轮播图组件准备图片数据
            console.log(this.carouselItems);
            for(var i=0;i<this.carouselItems.length;i++){
                //读取每一张在那个图片，将他放在slides数组中
                var imgUrl = this.carouselItems[i].img;
                var imgHref = this.carouselItems[i].href;
               // var imgHref = this.carouselItems[i].href;
                this.slides.push({image:imgUrl})
                
                  //this.slides.push({href:imgHref})
                this.imgs.push({href:imgHref})
               
                

            }
            console.log(this.slides);
            console.log(this.imgs);
        })
     }
    //   jumpToDetail(){
    //      this.myRouter.navigateByUrl('/imgs.href');
    //  }
}