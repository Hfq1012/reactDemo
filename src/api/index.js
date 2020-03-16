/*
包含应用中所有请求接口的函数：接口请求函数
*/
import ajax from './ajax';

const BASE = ''

export const reqLogin = (username, password) => ajax.post(BASE + '/login',{username, password})
//以上为简写
// ajax({
//     method: 'post',
//     url: BASE + '/login',
//     data: { //data对象，默认使用json格式的请求体携带参数数据
//         username,
//         password
//     }
// })


// const name = 'admin'
// const pwd = 'admin'
// reqLogin(name, pwd).then(result => {
//     // const result = response.data
//     console.log('请求成功了', result)
// }, error => {
//     console.log('请求失败了', error)
// })