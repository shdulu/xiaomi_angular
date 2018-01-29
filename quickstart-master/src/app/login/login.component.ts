import { Component, OnInit } from '@angular/core';
import {MyHttpService} from
'../utility/service/http.service'
import {Router} from '@angular/router'

@Component({
    selector: 'storeLogin',
    templateUrl: './login.component.html',
    styleUrls:['assets/css/login.css']
})

export class LoginComponent implements OnInit {
    //存储表单中的用户所输入的用户名和密码,提前声明变量
    userName:string="";
    userPwd:string="";
    constructor(
        //这里的myRouer变量可以随意起名
        private myRouter:Router,
        private myHttpService:MyHttpService) { }

    ngOnInit() { }

    //当点击登陆按钮，发送请求
    login(){
        //验证数据的准确性
    console.log(this.userName,this.userPwd);
    this.myHttpService
    .sendRequest('http://localhost/mi2/data/user/login.php?user_name='
    +this.userName+"&user_pwd="+this.userPwd)
    .subscribe((result)=>{
        console.log(result);
        if(result.code ==200){
            //跳转到首页
            this.myRouter.navigateByUrl('/index');
        }
    })
    }
    
}