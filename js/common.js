/**
 * Created by knrainy on 17/9/21.
 */
$(function(){
    // PC 侧边栏导航2级展示
    $("li.have2").hover(function(){
        $(this).children("ul").css("display","block");
    },function(){
        $(this).children("ul").css("display","none");
    });

    //动态获取treeHeight
    var contentHeight = $(".mall-content").height();
    $(".list_tree").css("height",contentHeight);

    //展示侧边栏
    $(".navbar-toggle").on("click",function(){
        // $(".mobile_tree").slideToggle();
        $(".mobile_tree").animate({"left":"0"},200);
    });
    $(".closeMobilNav").on("click",function(){
        // $(".mobile_tree").slideToggle();
        $(".mobile_tree").animate({"left":"-300px"},200);
    });
    //移动端侧边栏子菜单展示
    $(".m_have2 > img").on("click",function(){
        $(this).parent().children("ul").toggle();
    });
    //底部li补高 (第二li)
    var screenWidth = $(document).width();
    if(screenWidth < 768){
        var firstHeight;
        firstHeight = $("footer ul li.first").height();
        $("footer ul li.second").css("height",firstHeight);
    }

    //顶部搜索框相关
    $(".search_li input").keyup(function(){
        var searV = $(".search_li input").val();
        if(searV !== ''){
            //后台传值...

            $(".search_res").css('display','block');
        }else{
            $(".search_res").css('display','none');
        }
    });
    // 搜索框enter回车事件
    $(".search_li input").keydown(function(e){
        var keyCode = event.keyCode?event.keyCode:event.which?event.which:event.charCode;
        var searV = $(".search_li input").val();
        if (keyCode ==13 && searV !== ''){
            // 此处处理回车动作
            alert(searV)
        }
    });

    $(".search_res > li").on('click',function(){
        var choseV = $(this).html();
        $(".search_li input").val(choseV).focus();
        $(".search_res").css('display','none');
    });
    $(".searchBar").on("click",function(){
        var searV = $(".search_li input").val();
        if(searV !== ''){
            alert(searV)
            //后台传值...
        }
    })

});

