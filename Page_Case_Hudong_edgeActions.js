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
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // 当组件在此处被完全加载时插入的代码将运行
         //文件准备完成后
         document.getElementById("StageCase2").addEventListener("touchstart",function(e){
            _yS = e.touches[0].pageY;
            e.preventDefault();
         });
         document.getElementById("StageCase2").addEventListener("touchend",function(e){
            _yE = e.changedTouches[0].pageY;
            e.preventDefault();
            var pageFlag = _yE - _yS;
            //上一页
            if(pageFlag > 0 && pageFlag > 30){
               if(flagSym == 7){
                  setPlay("id11","id10","Page_Case","Symbol_Case_1");
                  flagSym--;
               }
               else if(flagSym == 8 ){
                  setSymbobPlay("Page_Case_Hudong","Symbol_Case_8","Symbol_Case_7");
                  flagSym--;
               }
               else if(flagSym == 9 ){
                  setSymbobPlay("Page_Case_Hudong","Symbol_Case_9","Symbol_Case_8");
                  flagSym--;
               }
               else if(flagSym == 10 ){
                  setSymbobPlay("Page_Case_Hudong","Symbol_Case_10","Symbol_Case_9");
                  flagSym--;
               }
               else if(flagSym == 11){
                  setSymbobPlay("Page_Case_Hudong","Symbol_Case_11","Symbol_Case_10");
                  flagSym--;
               }
               else if(flagSym == 12){
                  setSymbobPlay("Page_Case_Hudong","Symbol_Case_12","Symbol_Case_11");
                  flagSym--;
               }
               else if(flagSym == 13){
                  setSymbobPlay("Page_Case_Hudong","Symbol_Case_13","Symbol_Case_12");
                  flagSym--;
               }
               else if(flagSym == 14){
                  setSymbobPlay("Page_Case_Hudong","Symbol_Case_14","Symbol_Case_13");
                  flagSym--;
               }
               else if(flagSym == 15){
                  setSymbobPlay("Page_Case_Hudong","Symbol_Case_15","Symbol_Case_14");
                  flagSym--;
               }
               else if(flagSym == 16){
                  setSymbobPlay("Page_Case_Hudong","Symbol_Case_16","Symbol_Case_15");
                  flagSym--;
               }
               else if(flagSym == 17){
                  setSymbobPlay("Page_Case_Hudong","Symbol_Case_17","Symbol_Case_16");
                  flagSym--;
               }
               else if(flagSym == 18){
                  setSymbobPlay("Page_Case_Hudong","Symbol_Case_18","Symbol_Case_17");
                  flagSym--;
               }
               else if(flagSym == 19){
                  setSymbobPlay("Page_Case_Hudong","Symbol_Case_19","Symbol_Case_18");
                  flagSym--;
               }
               else if(flagSym == 20){
                  setSymbobPlay("Page_Case_Hudong","Symbol_Case_20","Symbol_Case_19");
                  flagSym--;
               }
            }
            //下一页
            if(pageFlag < 0 && pageFlag < 30){
               if(flagSym == 7){
                  setSymbobPlay("Page_Case_Hudong","Symbol_Case_7","Symbol_Case_8");
                  flagSym++;
               }
               else if(flagSym == 8 ){
                  setSymbobPlay("Page_Case_Hudong","Symbol_Case_8","Symbol_Case_9");
                  flagSym++;
               }
               else if(flagSym == 9 ){
                  setSymbobPlay("Page_Case_Hudong","Symbol_Case_9","Symbol_Case_10");
                 flagSym++;
               }
               else if(flagSym == 10 ){
                  setSymbobPlay("Page_Case_Hudong","Symbol_Case_10","Symbol_Case_11");
                  flagSym++;
               }
               else if(flagSym == 11){
                  setSymbobPlay("Page_Case_Hudong","Symbol_Case_11","Symbol_Case_12");
                  flagSym++;
               }
               else if(flagSym == 12){
                  setSymbobPlay("Page_Case_Hudong","Symbol_Case_12","Symbol_Case_13");
                  flagSym++;
               }
               else if(flagSym == 13){
                  setSymbobPlay("Page_Case_Hudong","Symbol_Case_13","Symbol_Case_14");
                  flagSym++;
               }
               else if(flagSym == 14){
                  setSymbobPlay("Page_Case_Hudong","Symbol_Case_14","Symbol_Case_15");
                  flagSym++;
               }
               else if(flagSym == 15){
                  setSymbobPlay("Page_Case_Hudong","Symbol_Case_15","Symbol_Case_16");
                  flagSym++;
               }
               else if(flagSym == 16){
                  setSymbobPlay("Page_Case_Hudong","Symbol_Case_16","Symbol_Case_17");
                  flagSym++;
               }
               else if(flagSym == 17){
                  setSymbobPlay("Page_Case_Hudong","Symbol_Case_17","Symbol_Case_18");
                  flagSym++;
               }
               else if(flagSym == 18){
                  setSymbobPlay("Page_Case_Hudong","Symbol_Case_18","Symbol_Case_19");
                  flagSym++;
               }
               else if(flagSym == 19){
                  setSymbobPlay("Page_Case_Hudong","Symbol_Case_19","Symbol_Case_20");
                  flagSym++;
               }
               else if(flagSym == 20){
                  setPlay("id11","id12","Page_Future","Symbol_Future");
                  flagSym = 1;
               }
            }
         });



      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "Page_Case_Hudong");