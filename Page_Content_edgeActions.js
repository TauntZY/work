/***********************
* Adobe Edge Animate 组件动作
*
* 小心编辑这个文件，小心保存
* 函数签名和注释以“Edge”起始来维持
* 通过 Adobe Edge Animate 使动作可以交互
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // 常用的 Edge 类别名

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Symbol_Content'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${us}", "click", function(sym, e) {
         // 插入代码——当鼠标在此处单击
         //跳转到关于我们
         setPlay("content","id4","Page_ComIntro","Symbol_ComIntro3");
         var pages = document.getElementsByClassName("page");
         for(var i = 0;i < pages.length-1;i++){
            if(i != 3){
               setPlay("id"+(i+1),null,null,null);
            }
         }
         $("#content").siblings().removeClass("active");
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${business}", "click", function(sym, e) {
         // 插入代码——当鼠标在此处单击
         //跳转到我们的服务
         setPlay("content","id8","Page_Business","Symbol_Business");
         var pages = document.getElementsByClassName("page");
         for(var i = 0;i < pages.length-1;i++){
            if(i != 7){
               setPlay("id"+(i+1),null,null,null);
            }
         }
         $("#content").siblings().removeClass("active");
         setSymbobPlay("Page_Good","Symbol_Good_"+flagSym,"Symbol_Good_1");
         flagSym = 1;
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${case}", "click", function(sym, e) {
         // 插入代码——当鼠标在此处单击
         //跳转到案例
         setPlay("content","id10","Page_Case","Symbol_Case_1");
         var pages = document.getElementsByClassName("page");
         for(var i = 0;i < pages.length-1;i++){
            if(i != 9){
               setPlay("id"+(i+1),null,null,null);
            }
         }
         $("#content").siblings().removeClass("active");
         setSymbobPlay("Page_Good","Symbol_Good_"+flagSym,"Symbol_Good_1");
         //console.log(flagSym);
         if(flagSym <= 6){
            setSymbobPlay("Page_Case","Symbol_Case_"+flagSym,"Symbol_Case_1");
         }else{
            setPlay("id11","id10","Page_Case","Symbol_Case_1");
            setSymbobPlay("Page_Case_Hudong","Symbol_Case_"+flagSym,"Symbol_Case_7");
         }
         flagSym = 1;
         //console.log(flagSym);
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${future}", "click", function(sym, e) {
         // 插入代码——当鼠标在此处单击
         //跳转到展望未来
         setPlay("content","id12","Page_Future","Symbol_Future");
         var pages = document.getElementsByClassName("page");
         for(var i = 0;i < pages.length-1;i++){
            if(i != 11){
               setPlay("id"+(i+1),null,null,null);
            }
         }
         $("#content").siblings().removeClass("active");
         setSymbobPlay("Page_Good","Symbol_Good_"+flagSym,"Symbol_Good_1");
         if(flagSym <= 6){
            setSymbobPlay("Page_Case","Symbol_Case_"+flagSym,"Symbol_Case_1");
         }else{
            setPlay("id11","id10","Page_Case","Symbol_Case_1");
            setSymbobPlay("Page_Case_Hudong","Symbol_Case_"+flagSym,"Symbol_Case_7");
         }
         flagSym = 1;
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${contact}", "click", function(sym, e) {
         // 插入代码——当鼠标在此处单击
         //跳转到联系我们
         setPlay("content","id13","Page_Contact",null);
         var pages = document.getElementsByClassName("page");
         for(var i = 0;i < pages.length-1;i++){
            if(i != 12){
               setPlay("id"+(i+1),null,null,null);
            }
         }
         $("#content").siblings().removeClass("active");
         setSymbobPlay("Page_Good","Symbol_Good_"+flagSym,"Symbol_Good_1");
         if(flagSym <= 6){
            setSymbobPlay("Page_Case","Symbol_Case_"+flagSym,"Symbol_Case_1");
         }else{
            //console.log(flagSym);
            setPlay("id11","id10","Page_Case","Symbol_Case_1");
            setSymbobPlay("Page_Case_Hudong","Symbol_Case_"+flagSym,"Symbol_Case_7");
         }
         flagSym = 1;
      });
      //Edge binding end

   })("Symbol_Content");
   //Edge symbol end:'Symbol_Content'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "Page_Content");