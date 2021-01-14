//登录功能
//找到表单,注册submit事件----阻止默认行为---收集表单数据---ajax提交
$(".login form").on("submit", function (e) {
  e.preventDefault();
  var data = $(this).serializeArray(); //得到一个数组,jquery会把数组转成查询字符串
  $.ajax({
    type: "POST",
    data: data,
    url: "http://www.itcbc.com:8080/api/login",
    success: function (res) {
      //无论成功还是失败,都给提示 layui语法
      layer.msg(res.message);
      if (res.status === 0) {
        //登录成功后,马上把token保存到本地存储中
        localStorage.setItem("token", res.token);
        //跳转到category.html(路基和使用js的html页面有关系)
        location.href = "./category.html";
      }
    },
    //失败后出发
    error: function (xhr) {
      // console.log(xhr);
      var res = xhr.responseJSON; //表示相应的结果
      if (res && res.status === 1) {
        layer.msg(res.message);
      }
    },
    //请求发送之前出发
    // beforeSend:function(){
    // }
    //请求完成(成功,失败)出发
    // complete: function () {
    //   console.log(123);

    // },
  });
});
