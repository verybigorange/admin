import http from "./http.js"
import { Message } from 'element-ui'
import md5 from "md5"
import router from "@/router/index.js"

// 这里先写死，账户是admin，密码是111111
export default function (params) {

    if (params.username == md5("admin") && params.password == md5("111111")) {
    
        sessionStorage.setItem("login",md5("access"));

        Message({
            message: "登录成功",
            type: 'success'
        })
        
        router.push("/admin/home")
    } else {
        Message.error({
            message: "账号或者密码错误,请重新输入！"
        })
    }

}