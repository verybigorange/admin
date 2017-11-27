import http from "./http.js"
import { Message } from 'element-ui'
import router from "@/router/index.js"

export async function worksAdd(params) {
    let {data} = await http.post('/api/works/add',params);
    if (data == '1') {
        Message({
            message: "添加成功",
            type: 'success'
        })
        router.go(-1);
    } else {
        Message.error({
            message: "添加失败！"
        })
    }

}

//查询全部作品
export async function work_all(params) {
    let { data } = await http.post('/api/works',params);
    return data;
}


// 按id查询作品
export async function work_select_id(params) {
    let { data } = await http.post('/api/works/id',params);
    return data[0];
}


//保存编辑
export async function work_edit(params) {
    let { data } = await http.post('/api/works/edit',params);
    if (data == '1') {
        Message({
            message: "编辑成功",
            type: 'success'
        })
        router.go(-1);
    } else {
        Message.error({
            message: "编辑失败！"
        })
    }
}

