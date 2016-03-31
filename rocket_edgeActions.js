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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline",3300, function(sym, e) {
         // 在此处插入代码
         //进入到Page_Slogan
         setPlay("id1","id2","Page_Slogan","Symbol_Dream")

      });
      //Edge binding end

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
         // 当时间轴在此处结束时插入的代码将运行
         //加载其他的文件 -- 团队介绍 企业记事 我们的服务

         //团队介绍之领导
         AdobeEdge.loadComposition('Leader', 'Page_Leader', {
            scaleToFit: "both",
            centerStage: "both",
            minW: "0px",
            maxW: "undefined",
            width: "640px",
            height: "960px"
         }, {dom: [ ]}, {dom: [ ]});

         //团队介绍之成员
         AdobeEdge.loadComposition('team', 'Page_Team', {
            scaleToFit: "both",
            centerStage: "both",
            minW: "0px",
            maxW: "undefined",
            width: "640px",
            height: "960px"
         }, {dom: [ ]}, {dom: [ ]});

         //企业记事
         AdobeEdge.loadComposition('Event', 'Page_Event', {
            scaleToFit: "height",
            centerStage: "both",
            minW: "0px",
            maxW: "undefined",
            width: "640px",
            height: "960px"
         }, {dom: [ ]}, {dom: [ ]});

         //我们的服务

         AdobeEdge.loadComposition('Business', 'Page_Business', {
            scaleToFit: "both",
            centerStage: "both",
            minW: "0px",
            maxW: "undefined",
            width: "640px",
            height: "960px"
         }, {dom: [ ]}, {dom: [ ]});


      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Symbol_Rocket'
   (function(symbolName) {   
   
   })("Symbol_Rocket");
   //Edge symbol end:'Symbol_Rocket'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "Page_Rocket");