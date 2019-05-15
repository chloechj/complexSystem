/*这里是提交表单前的非空校验*/
function checkForm() {
    var first = $("input[name='user']").val();
    var last = $("input[name='password']").val();

    if (first == "" || first == null || first == undefined) {
        alert("账号不能为空");
        return false; /*阻止表单提交*/
    } else if (last == "" || last == null || last == undefined) {
        alert("密码不能为空");
        return false;
    } else {
        var parmams = {
            "clientId": "098f6bcd4621d373cade4e832627b4f6",
            "password": last,
            "userCode": first
        }
        $.ajax({
            url: "http://172.16.5.248:18080/sso/login",
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(parmams),
            success: function (data) {
                window.location.href = '../index/index.html'
            },
            error: function () {

            }
        })
    }
}