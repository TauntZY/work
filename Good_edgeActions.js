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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // 在此处插入代码
         //var comp = AdobeEdge.getComposition("Page_Good");
         //var stage = comp.getStage();
         //stage.getSymbol("Symbol_Good_4").play(0);
         var comp = AdobeEdge.getComposition("Page_Good");
         var stage = comp.getStage();
         stage.getSymbol("Symbol_Good_1).stop(0)");
         stage.getSymbol("Symbol_Good_2).stop(0)");
         stage.getSymbol("Symbol_Good_3).stop(0)");
         stage.getSymbol("Symbol_Good_4).stop(0)");
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // 当组件在此处被完全加载时插入的代码将运行
         //Page_Good stage
         flagSym = 1;
         document.getElementById("StageGood").addEventListener("touchstart", function (e) {
            _yS = e.touches[0].pageY;
            e.preventDefault();
            console.log("start", _yS);//console能看到
         })
         document.getElementById("StageGood").addEventListener("touchend", function (e) {
            _yE = e.changedTouches[0].pageY;
            e.preventDefault();
            console.log("end", _yE);//console能看到
            pageFlag = _yE - _yS;
            //如果pageFlage > 0 则跳到上一页
            if (pageFlag > 0 && pageFlag > 30) {
               if(flagSym == 1){
                  setPlay("id9","id8","Page_Business","Symbol_Business");
               }
               else if(flagSym == 2 ){
                  setSymbobPlay("Page_Good","Symbol_Good_2","Symbol_Good_1");
                  flagSym--;
               }
               else if(flagSym == 3 ){
                  setSymbobPlay("Page_Good","Symbol_Good_3","Symbol_Good_2");
                  flagSym--;
               }
               else if(flagSym == 4 ){
                  setSymbobPlay("Page_Good","Symbol_Good_4","Symbol_Good_3");
                  flagSym--;
               }
            }
            //如果pageFlage < 0 则跳到下一页
            if (pageFlag < 0 && pageFlag < -30) {
               if(flagSym == 1){
                  setSymbobPlay("Page_Good","Symbol_Good_1","Symbol_Good_2");
                  flagSym++;
               }
               else if(flagSym == 2 ){
                  setSymbobPlay("Page_Good","Symbol_Good_2","Symbol_Good_3");
                  flagSym++;
               }
               else if(flagSym == 3 ){
                  setSymbobPlay("Page_Good","Symbol_Good_3","Symbol_Good_4");
                  flagSym++;
               }
               else if(flagSym == 4 ){
                  setSymbobPlay("Page_Good","Symbol_Good_4","Symbol_Good_1");
                  setPlay("id9","id10","Page_Case","Symbol_Case_1");
                  flagSym = 1;
               }
            }
         });

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Symbol_Good_1'
   (function(symbolName) {   
   
      

   })("Symbol_Good_1");
   //Edge symbol end:'Symbol_Good_1'

   //=========================================================
   
   //Edge symbol: 'Symbol_Good_2'
   (function(symbolName) {   
   
      

   })("Symbol_Good_2");
   //Edge symbol end:'Symbol_Good_2'

   //=========================================================
   
   //Edge symbol: 'Symbol_Good_3'
   (function(symbolName) {   
   
      

   })("Symbol_Good_3");
   //Edge symbol end:'Symbol_Good_3'

   //=========================================================
   
   //Edge symbol: 'Symbol_Good_4'
   (function(symbolName) {   
   
      

   })("Symbol_Good_4");
   //Edge symbol end:'Symbol_Good_4'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "Page_Good");