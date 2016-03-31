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

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
         // 当时间轴在此处结束时插入的代码将运行
         //成功案例2互动
         AdobeEdge.loadComposition('Page_Case_Hudong', 'Page_Case_Hudong', {
            scaleToFit: "none",
            centerStage: "none",
            minW: "0px",
            maxW: "undefined",
            width: "640px",
            height: "960px"
         }, {dom: [ ]}, {dom: [ ]});
      });
      //Edge binding end


      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {

         // 当组件在此处被完全加载时插入的代码将运行
         flagSym = 1;
         document.getElementById("StageCase").addEventListener("touchstart", function (e) {
            _yS = e.touches[0].pageY;
            e.preventDefault();
            console.log("start", _yS);//console能看到
         })
         document.getElementById("StageCase").addEventListener("touchend", function (e) {
            _yE = e.changedTouches[0].pageY;
            e.preventDefault();
            console.log("end", _yE);//console能看到
            pageFlag = _yE - _yS;
            //如果pageFlage > 0 则跳到上一页
            if (pageFlag > 0 && pageFlag > 30) {
               if(flagSym == 1){
                  setPlay("id10","id9","Page_Good","Symbol_Good_1");
               }
               else if(flagSym == 2 ){
                  setSymbobPlay("Page_Case","Symbol_Case_2","Symbol_Case_1");
                  flagSym--;
               }
               else if(flagSym == 3 ){
                  setSymbobPlay("Page_Case","Symbol_Case_3","Symbol_Case_2");
                  flagSym--;
               }
               else if(flagSym == 4 ){
                  setSymbobPlay("Page_Case","Symbol_Case_4","Symbol_Case_3");
                  flagSym--;
               }
               else if(flagSym == 5){
                  setSymbobPlay("Page_Case","Symbol_Case_5","Symbol_Case_4");
                  flagSym--;
               }
               else if(flagSym == 6){
                  setSymbobPlay("Page_Case","Symbol_Case_6","Symbol_Case_5");
                  flagSym--;
               }
            }
            //如果pageFlage < 0 则跳到下一页
            if (pageFlag < 0 && pageFlag < -30) {
               if(flagSym == 1){
                  setSymbobPlay("Page_Case","Symbol_Case_1","Symbol_Case_2");
                  flagSym++;
               }
               else if(flagSym == 2 ){
                  setSymbobPlay("Page_Case","Symbol_Case_2","Symbol_Case_3");
                  flagSym++;
               }
               else if(flagSym == 3 ){
                  setSymbobPlay("Page_Case","Symbol_Case_3","Symbol_Case_4");
                  flagSym++;
               }
               else if(flagSym == 4 ){
                  setSymbobPlay("Page_Case","Symbol_Case_4","Symbol_Case_5");
                  flagSym++;
               }
               else if(flagSym == 5){
                  setSymbobPlay("Page_Case","Symbol_Case_5","Symbol_Case_6");
                  flagSym++;
               }
               else if(flagSym == 6){
                  setSymbobPlay("Page_Case","Symbol_Case_6","Symbol_Case_1");
                  setPlay("id10","id11","Page_Case_Hudong","Symbol_Case_7");
                  flagSym++;
               }
            }
         });

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'
   
})(window.jQuery || AdobeEdge.$, AdobeEdge, "Page_Case");