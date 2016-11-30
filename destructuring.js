/*
Create an object apiDetail which should contain:
● baseUrl
● Method
● Request api parameter (i.e. /user)
● Header
● Post data if method is post
Pass that object in function where make an API call.
*/
let apiDetail = {
    baseUrl: 'www.acadgild.com/api',
    method: 'some method()',
    requestParam: '/user',
    header: 'some value',
    data: 'POST'
};

function makeAjaxRequest(config){
    let { baseUrl, method, requestParam, header, data } = config;
    //$.ajax(baseUrl, method, requestParam, header, data);
    console.log(` url: ${baseUrl} \n methodType: ${method} \n param: ${requestParam} \n header: ${header} \n data: ${data}`);
}

makeAjaxRequest(apiDetail);
