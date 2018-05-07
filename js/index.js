/**
 * Created by knrainy on 17/9/22.
 */
$(function(){
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        speed: 1000
    });
    // 初始化组件
    // $('#sele1').selectpicker();
    // $('#sele2').selectpicker();

    // $('#sele1').selectpicker('val',"Heigher");//默认选中
    // $('#sele1').selectpicker('refresh');



    // 获取select值并传递
    var seleVal;
    var seleId;
    $(document).on("click","ul.inner > li",function(){
       seleVal = $(this).children("a").children("span").html();
        alert(seleVal);
       seleId = $(this).parent().parent().prev().attr('data-id');
        alert(seleId);
        window.location.href = "http://localhost:63342/Runescape3-store-html/goods.html";
        $('#seleId').selectpicker('val', seleVal);//默认选中
        $('#seleId').selectpicker('refresh');
    });
    //第一个自定义下拉
    $(document).on("change",".seleList li input[type='checkbox']",function(){
        if($(this).prop("checked")){
            var val = $(this).siblings("span").html();
            //$.ajax(val)
            $(this).parent().siblings("li").children("input").attr("checked",false);
            $(".fr .sele").children("span.v").html(val);
        }else if($(this).prop("checked",false) && $(this).siblings("li").children("input").prop("checked",false)){
            var init = "price";
            $(".fr .sele").children("span.v").html(init);
            // $.ajax(init)
        }
    });
    //显示隐藏切换
    $(document).on("click",".fr .sele",function(){
        $(this).siblings(".seleList").toggle();
    });

    //商品详情页 BUG
    var standardH = $("#autoHeight").height();
    $(".goodcom").css("height",standardH);

    //商品详情(热卖商品价格计算)
    $(".goodsDetail .hotList input").on("change",function(){
        var tot = Number($(".priAndBuy").children().children("em").html());
        var pri = Number($(this).next().next("span").children("em").html());
        if($(this).prop("checked")){
            tot += pri;
            $(".priAndBuy").children().children("em").html(Math.round(tot*100)/100);
        }else{
            tot -= pri;
            $(".priAndBuy").children().children("em").html(Math.round(tot*100)/100);
        }
    });

    //index页商品悬浮图
    $(document).on('mousemove','.good_img > a',function(e){
        //获取商品ID
        var gid = $(this).children("img").data('id');

        var boxX=$(this).offset().left;
        var boxY=$(this).offset().top;
        var x = e.pageX;
        var y = e.pageY;
        var zX=x-boxX;
        var zY=y-boxY;
        $(this).children(".floatImg").css({'top':zY+15+'px','left':zX+15+'px','display':'block'});
        // $(this).text("X:"+zX+"Y:"+zY);
        var title = $(this).parent().next().children().children(".namAndnum").html();
        $(this).children().children(".title").html(title);
        //获取当前悬浮图宽度
        var fw = $(this).children(".floatImg").width();
        var flag = $(".goods_area").offset().left;
        var dierc = x - flag;
        if(dierc >450){
            $(this).children(".floatImg").css({'left':zX-fw-25+'px','display':'block'});
        }
    });
    $(".good_img > a").on('mouseout',function(e){
        $(this).children(".floatImg").css({'display':'none'});
    })
    //详情页悬浮图
    $(".goodimg > a").on('mousemove',function(e){
        var title = $(this).parent().parent().parent().prev().children("h2").html();
        $(this).children().children(".title").html(title);
    })
    //搜索页悬浮图
    $(".goodContent > a").on('mousemove',function(e){
        var title = $(this).parent().prev().children("h2").html();
        $(this).children().children(".title").html(title);
    })

    //轮播图
    $('.carousel').carousel({
        interval: 5000
    })

});
