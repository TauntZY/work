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


       Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function (sym, e) {
           // 当组件在此处被完全加载时插入的代码将运行
           document.getElementById("StageTeam").addEventListener("touchstart", function (e) {
               _yS = e.touches[0].pageY;
               e.preventDefault();
               console.log("start", _yS);//console能看到
           })
           document.getElementById("StageTeam").addEventListener("touchend", function (e) {
               _yE = e.changedTouches[0].pageY;
               e.preventDefault();
               console.log("end", _yE);//console能看到
               pageFlag = _yE - _yS;
               //如果pageFlage > 0 则跳到上一页
               //如果pageFlage < 0 则跳到下一页
               if (pageFlag > 0 && pageFlag > 30) {
                   setPlay("id6", "id5", "Page_Leader", "Symbol_Leader");
               }
               if (pageFlag < 0 && pageFlag < -30) {
                   setPlay("id6", "id7", "Page_Event", "Symbol_Event");
               }
           })

       });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Symbol_Team1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6933, function(sym, e) {
         // 在此处插入代码
      });
      //Edge binding end

   })("Symbol_Team1");
   //Edge symbol end:'Symbol_Team1'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "Page_Team");