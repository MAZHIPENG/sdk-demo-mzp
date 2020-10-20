let axios = require('axios')
console.log('初始化')
// 读取配置信息
let readConfigInfo = () => {
    console.log('readConfigInfo')
    // 查看cookie 判断是否需要发送请求
    // axios.post('https://api.tuisong.baidu.com/rest/3.0/clientfile/updateconf', {
    //     v: 1,
    //     osSdkInt: '', //TODO
    //     model: 'userAgent' //TODO
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    return new Promise((resolve)=> {resolve()})
}
// 绑定设备
let bindDevice = () => {
    console.log('bindDevice')
    // axios.post('http://api.tuisong.baidu.com/rest/2.0/channel/channel_id', {
    //     method: 'bind',
    //     device_type: '1',
    //     bind_name: 'xx',
    //     info: 'xx',
    //     bind_status: 0
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    return new Promise((resolve)=> {resolve()})
}

// 登陆
let pcLoginIn = () => {
    console.log('pcLoginIn')
    setInterval(() => {
        window.pushSDKCallBack(3)
    }, 5000);
    // 拼接消息
    // lcpLogin()
}
// 暴露给外部的方法
let pushMethod = {
    date: null,
    loginInfo: null,
    configInfo: null,
    // 客户端初始化方法
    init() {
        // 读取配置信息
        readConfigInfo()
        // 绑定设备
        bindDevice()
        // 登陆
        pcLoginIn()
    },
    // 回调方法，通知客户端消息
    callback(msg) {
        // 进行心跳检测
        
        // 调起客户端方法
        
    }
}
// msgType 1握手消息,2服务器心跳消息,3服务器下发推送消息 / push消息ack,4客户端心跳,5客户端微型心跳,6服务端微型心跳ack
let pushSDKContext =  {
    '1': function (params) {
        // 握手消息
        console.log(params)
    },
    '2': function (params) {
        // 服务器心跳消息
        console.log(params)
    },
    '3': function (params) {
        // 向客户端发送消息
        window.receiveMessage(params)
        console.log(params)
    },
    '4': function (params) {
        // 客户端心跳
        console.log(params)
    },
    '5': function (params) {
        // 客户端微型心跳
        console.log(params)
    },
    '6': function (params) {
        // 6服务端微型心跳ack
        console.log(params)
    }
}
// 给lcp用来传递给push内容的
window.pushSDKCallBack = (status) => {
    pushSDKContext[status]()
}

module.exports = pushMethod