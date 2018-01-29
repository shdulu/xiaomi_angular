import { Component, OnInit } from '@angular/core';
import {MyHttpService} from '../service/http.service'

@Component({
    selector: 'storeHeader',
    templateUrl: './header.component.html',
    styleUrls:['assets/css/header1.css']
})

export class HeaderComponent implements OnInit {
    isUserLogin:boolean = true;
    userName:string = "";
    constructor(private myHttpService:MyHttpService) { }

    ngOnInit() { 
        //检查用户是否登陆（与服务器端通信）
        this.myHttpService
        .sendRequest('http://localhost/mi2/data/user/session_data.php')
        .subscribe((result)=>{
            console.log(result);
            if(result.uname){
                this.isUserLogin = true;
                this.userName = result.uname;                
            }else{
                this.isUserLogin=false;
                this.userName = "";
            }
        });
            
    }
    //退出登陆
    logout(){
        this.myHttpService
        .sendRequest('http://localhost/mi2/data/user/logout.php')
        .subscribe((result)=>{
            console.log(result);
            //草草草！！！居然这样错！！
            if(result.code == 200) {
                this.isUserLogin = false;
                this.userName = "";
            }
        })
    }
}