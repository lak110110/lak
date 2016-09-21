/**
 * Created by 林安康 on 2016/9/5.
 */
window.onload = function () {
    //+++++++++++++++++++++++++++++++++++++++++++++++++===图片轮播
    var lis = document.getElementsByClassName('li');
    //---------------------------------------------------自动播放//    var dis=0;
    var distance1 = 0;
    var y = 1;
    function moveimg1() {
        if (distance1 <= -3884) {
            y = -1;
        }
        if (distance1 >= 0) {
                y = 1;
        }
        distance1 = distance1 - 2 * y;
        document.getElementById('img-con-ul').style.left = distance1 + "px";
        $('.message-title').html(distance1);
        var x = Math.ceil(-distance1 / 971);
        for (var i = 0; i <lis.length; i++) {
           if (i == x-1) {
                lis[x-1].style.backgroundColor = 'red';
            }
            else {
                lis[i].style.backgroundColor = '#ffce33';
            }
        }
    }

    var t3 = setInterval(moveimg1, 20);
    //------------------------------------悬浮停止和点击切换
    //    var distance1=0;
    function left() {
        if (distance1 <= -3884) {
            distance1 = 971;
        }
        if (distance1 % 971 != 0) {
            //如 distance1=-1350  ----distance1=(350-500)+ -1350
            distance1 = (-distance1 % 971 - 971) + distance1;
        }
        else {
            distance1 = distance1 - 971;
        }
        document.getElementById('img-con-ul').style.left = distance1 + 'px';
        $('.message-title').html(distance1);
        var x = parseInt(-distance1 / 971);
        for (var i = 0; i < lis.length; i++) {
            if (i == x) {
                lis[x].style.backgroundColor = 'red';
            }
            else {
                lis[i].style.backgroundColor = '#ffce33';
            }
        }
    }

    document.getElementById('img-con-left').onclick = function () {
        clearInterval(t3);
        left();
    }

    function right() {
        if (distance1 >= 0) {
            distance1 = -3884;
        }
        if (distance1 % 971 != 0) {
            //如 distance1=-1350  ----distance1=(350)+ -1350
            distance1 = (-distance1 % 971) + distance1;
        }
        else {
            distance1 = distance1 + 971;
        }
        document.getElementById('img-con-ul').style.left = distance1 + 'px';
        $('.message-title').html(distance1);
        var x = parseInt(-distance1 / 971);
        for (var i = 0; i < lis.length; i++) {
            if (i == x) {
                lis[x].style.backgroundColor = 'red';
            }
            else {
                lis[i].style.backgroundColor = '#ffce33';
            }
        }
    }

    document.getElementById('img-con-right').onclick = function () {
        clearInterval(t3);
        right();
    }
    document.getElementById('img-con').onmouseover = function () {
        clearInterval(t3);
    }
    document.getElementById('img-con').onmouseout = function () {
        t3 = setInterval(moveimg1, 20);
    }
    //----------------------------------------------------------点击列表出现相应图片
    var num = 0;
    $(".list > li").click(function () {
        $(this).css("color", 'white').css("background", 'rgb(157,91,218)');//this 是当前选择的元素
        num = parseInt((this.id).charAt(4));//this.id 是当前选择的元素的 id
        distance1 = (-num + 1) * 971;
        document.getElementById('img-con-ul').style.left = distance1 + 'px';
        $('.message-title').html(distance1);
    });
    $(".list > li").hover(
        function () {
            $(this).css("color", 'red').css("background", 'rgb(44,115,145)');//this 是当前选择的元素
        },
        function () {
            $(this).css("color", 'yellow').css("background", 'rgb(230,165,87)');//this 是当前选择的元素
        }
    );
    //=============================================================信息定时移动
    function getid(id) {
        return document.getElementById(id);
    }

    var index = 0;

    function move() {
        if (index <= -500) {
            index = 0;
        }
        index = index - 3;
        document.getElementById('message-banner').style.top = index + "px";
    }

    var t = setInterval(move, 300);
    getid("message-banner").onmouseover = function () {
        clearInterval(t);
    }
    getid("message-banner").onmouseout = function () {
        t = setInterval(move, 300);
    }
    //-------------------------------------------- 定时移动图片
    var flag = 1;//--------------标志
    var distance = 0; //----------距离
    function moveul() {
        if (distance <= -965) {
            flag = -1;
        }
        if (distance >= 0) {
            flag = 1;
        }
        distance = distance - 3 * flag;
        document.getElementById('introduce-ul').style.left = distance + "px";
    }

    var t1 = setInterval(moveul, 50);

    getid("introduce-ul").onmouseover = function () {
        clearInterval(t1);
    }
    getid("introduce-ul").onmouseout = function () {
        t1 = setInterval(moveul, 70);
    }

    //*****************************************************控制登陆
    getid("login").onclick = function () {
        if (document.getElementById('login-form').style.height == '0px' || document.getElementById('login-form').style.height == '') {
            document.getElementById('login-form').style.height = '274px'
        }
        else {
            document.getElementById('login-form').style.height = '0px';
        }
    }
    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@图片show-ul定时移动和jq控制
    var inde = 0;
    var z = 1;

    function moveimg() {
        if (inde == -950) {
            z = -1;
        }
        if (inde > 0) {
            z = 1;
        }
        inde = inde - 2 * z;
        document.getElementById('img-show-ul').style.left = inde + "px";
    }

    var t2 = setInterval(moveimg, 50);

    // function right1() {
    //     // debugger
    //     clearInterval(t2);
    //     inde = -inde;
    //     document.getElementById('img-con-ul').style.left = inde+ 'px';
    // }
    //
    // $('#right').click(function () {
    //     right1();
    // });

    $("#img-show-ul > li").mouseover(function () {
        clearInterval(t2);
        // debugger
        $(this).children().last().slideDown(2000);
    });
    $("#img-show-ul > li").mouseout(function () {
        t2 = setInterval(moveimg, 50);
    });

    //----------------------------------------------jq控制导航条
    $(".content").mouseover(function () {
        $(".content-nav-ul").css("height", "50px")
    });
    $(".content").mouseout(function () {
        $(".content-nav-ul").css("height", "0px")
    });
    //---------------------------------------
    $(".content .java").mouseover(function () {
        $(".content-nav-ul .javaee1").css("background", "rgba(132,255,123,0.8)")
    });
    $(".content .java").mouseout(function () {
        $(".content-nav-ul .javaee1").css("background", "")
    });
    //------------------------------------------
    $(".content .cjiajia").mouseover(function () {
        $(".content-nav-ul .cjiajia1").css("background", "rgba(241,204,101,0.8)")
    });
    $(".content .cjiajia").mouseout(function () {
        $(".content-nav-ul .cjiajia1").css("background", "")
    });
    //--------------------------------
    $(".content .php").mouseover(function () {
        $(".content-nav-ul .php1").css("background", "rgba(78,198,128,0.8)")
    });
    $(".content .php").mouseout(function () {
        $(".content-nav-ul .php1").css("background", "")
    });
    //-------------------------------------------------
    $(".content .pyon").mouseover(function () {
        $(".content-nav-ul .pyon1").css("background", "rgba(239,21,16,0.7)")
    });
    $(".content .pyon").mouseout(function () {
        $(".content-nav-ul .pyon1").css("background", "")
    });
    //-------------------------------------------------
    $(".content .h5").mouseover(function () {
        $(".content-nav-ul .h51").css("background", "rgba(132,255,123,0.8)")
    });
    $(".content .h5").mouseout(function () {
        $(".content-nav-ul .h51").css("background", "")
    });
    //-------------------------------------------------
    $(".content .ui").mouseover(function () {
        $(".content-nav-ul .ui1").css("background", "rgba(231,150,151,0.8)")
    });
    $(".content .ui").mouseout(function () {
        $(".content-nav-ul .ui1").css("background", "")
    });
    //----------------------------------------------------
    $(".content .rock-div").mouseover(function () {
        $(".content-nav-ul .ios1").css("background", "rgba(234,219,91,1)")
    });
    $(".content .rock-div").mouseout(function () {
        $(".content-nav-ul .ios1").css("background", "")
    });
    //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&控制3D图片变换
    var index9 = 1;

    function netx() {
        var nowimg = document.getElementById("img-div" + index9);
        nowimg.style.transform = "rotateX(90deg)";
        index9--;
        if (index9 == 0) {
            index9 = 6;
        }
        var nextimg = document.getElementById("img-div" + index9);
        nextimg.style.transform = "rotateX(0deg)";
    }

    function prev() {
        var nowimg = document.getElementById("img-div" + index9);
        nowimg.style.transform = "rotateX(-90deg)";
        index9++;
        if (index9 == 7) {
            index9 = 1;
        }
        var nextimg = document.getElementById("img-div" + index9);
        nextimg.style.transform = "rotateX(0deg)";
    }

    var t4 = setInterval(prev, 3000);
    $("#prev").click(function () {
        clearInterval(t4);
        netx();
    });
    $("#next").click(function () {
        clearInterval(t4);
        prev();
    });
    $('.con').mouseover(function () {
        clearInterval(t4);
    });
    $('.con').mouseout(function () {
        t4 = setInterval(netx, 3000);
    });
    //----------------------------控制3D图片背景上滑


    //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%控制火箭动画
    $(".con-div").mouseover(
        function () {
            $("#img1").animate({left: "50px"}, 1000);
            $("#img2").animate({left: "100px"}, 1000);
            $("#img3").animate({right: "50px"}, 1000);
            $("#img4").animate({right: "100px"}, 1000);
            $("#img5").animate({top: "30px"}, 1000);
        });
    $(".con-div").mouseout(
        function () {
            $("#img1").animate({left: "100px"}, 1000);
            $("#img2").animate({left: "150px"},1000);
            $("#img3").animate({right: "100px"}, 1000);
            $("#img4").animate({right: "150px"}, 1000);
            $("#img5").animate({top: "70px"}, 1000);
        });
}
