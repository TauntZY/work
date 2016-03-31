/**
 * Created by taunt on 2016/3/9.
 */

    window.onload = function(){
        var $J = jQuery.noConflict();
        var goMains = document.getElementsByClassName("goMain");
        console.log(goMains.length);
        for(var i = 0;i < goMains.length;i++){
            (function(num){
                goMains[num].onclick = function(){
                    if(num == 0){
                        //setPlay("id4","id3","PAGE_MAIN","Symbol_Main");
                        setPlay(null,"content","Page_Content","Symbol_Content");
                        $J("#id4").addClass("active");
                    }
                    else if(num == 1){
                        setPlay(null,"content","Page_Content","Symbol_Content");
                        $J("#id5").addClass("active");
                    }
                    else if(num == 2){
                        setPlay(null,"content","Page_Content","Symbol_Content");
                        $J("#id6").addClass("active");
                    }
                    else if(num == 3){
                        setPlay(null,"content","Page_Content","Symbol_Content");
                        $J("#id7").addClass("active");
                    }
                    else if(num == 4){
                        setPlay(null,"content","Page_Content","Symbol_Content");
                        $J("#id8").addClass("active");
                    }
                    else if(num == 5){
                        setPlay(null,"content","Page_Content","Symbol_Content");
                        $J("#id9").addClass("active");
                        //setSymbobPlay("Page_Good","Symbol_Good_"+flagSym,"Symbol_Good_1");
                        //flagSym = 1;
                    }
                    else if(num == 6){
                        setPlay(null,"content","Page_Content","Symbol_Content");
                        $J("#id10").addClass("active");
                        //setSymbobPlay("Page_Case","Symbol_Case_"+flagSym,"Symbol_Case_1");
                        //flagSym = 1;
                    }
                    else if(num == 7){
                        setPlay(null,"content","Page_Content","Symbol_Content");
                        $J("#id11").addClass("active");
                    }
                    else if(num == 8){
                        setPlay(null,"content","Page_Content","Symbol_Content");
                        $J("#id12").addClass("active");
                    }
                    else if(num == 9){
                        setPlay(null,"content","Page_Content","Symbol_Content");
                        $J("#id13").addClass("active");
                    }
                    else if(num == 10){
                        setPlay("content",null,null,null);
                        $J("#content").siblings().removeClass("active");
                    }
                }
            })(i);
        }
    }




    //控制edge animate 的播放顺序以及加载顺序
    function addLoadEvent (func) {
        var oldonload = window.onload;
        if (typeof oldonload != "function") {
            window.onload = func;
        }
        else {
            window.onload = function () {
                oldonload();
                func();

            }
        }
    }

    /*
    *该方法用于各个Stage之间的跳转，并播放动画
    *
    *
    * Hide:要隐藏的页面
    * Show：要显示的页面
    * CompositionID：Edge Animate的对象
    * PlayStage：对象的实例
    *
    *
    * */

    //换舞台和从零播放指定元件
    function setPlay (HideID,ShowID,CompsitionID,PlaySymbol){

        if(HideID != null){
            var hide = document.getElementById(HideID);
            hide.style.display = "none";
        }else{
            //如果为空,什么都不做
        }

        if(ShowID != null){
            var show = document.getElementById(ShowID);
            show.style.display = "block";
        }else{
            //如果为空,什么都不做
        }

        if(CompsitionID != null){
            var comp = AdobeEdge.getComposition(CompsitionID);//获取舞台对象
            var stage = comp.getStage(); //获取舞台实例
        }else{
            //如果为空,什么都不做
        }

        if(PlaySymbol != null ){
            stage.getSymbol(PlaySymbol).play(0); //获取实例的Symbol并从第 O 毫秒播放
        }else{
            //如果为空,什么都不做
        }

    }

    //换元件并从零播放
    function setSymbobPlay(CompositionID,symbolHide,symbolShow){
        if(CompositionID != null){
            var comp = AdobeEdge.getComposition(CompositionID);
            var stage = comp.getStage();
        }else{
            //什么多不做
        }
        if(symbolHide != null){
            var symHide = stage.getSymbol(symbolHide);
            stage.$(symbolHide).hide(); //显示Symbol
            symHide.stop(0); //将隐藏的Symbol暂停到初始位置
        }else{
            //什么多不做
        }

        if(symbolShow != null){
            var symShow = stage.getSymbol(symbolShow);
            stage.$(symbolShow).show(); //隐藏Symbol
            symShow.play(0); //将显示的Symbol从第 0 毫秒开始播放
        }else{
            //什么多不做
        }

    }

    //点击首页目录时设置透明度
    function setOpacity(setOpID){
        var op = document.getElementById(setOpID);
        var con = document.getElementById("content");
        //如果已经存在设置
        if(op.style.opacity == 0.3){
            op.style.opacity = 1;
            con.style.display = "none";
        }else{
            //op.style.opacity = 0.3;
            con.style.display = "block";
        }
    }






