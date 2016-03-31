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
      
      
      

      Symbol.bindElementAction(compId, symbolName, "${Symbol_Zhang}", "touchstart", function(sym, e) {
         // 当用户开始触摸对象时插入的代码将运行（仅用于触摸设备）
         //点击Symbol——Zhang
         var comp = AdobeEdge.getComposition("Page_Leader");
         var stage = comp.getStage();
         stage.stop();
         stage.getSymbol("Symbol_Zhang_Word").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Symbol_Sun}", "touchstart", function(sym, e) {
         // 当用户开始触摸对象时插入的代码将运行（仅用于触摸设备）
         //点击Symbol_Sun
         var comp = AdobeEdge.getComposition("Page_Leader");
         var stage = comp.getStage();
         stage.stop();
         stage.getSymbol("Symbol_Sun_Word").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Symbol_Wu}", "touchstart", function(sym, e) {
         // 当用户开始触摸对象时插入的代码将运行（仅用于触摸设备）
         //点击Symbol_Wu
         var comp = AdobeEdge.getComposition("Page_Leader");
         var stage = comp.getStage();
         stage.stop();
         stage.getSymbol("Symbol_Wu_Word").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Symbol_Chen}", "touchstart", function(sym, e) {
         // 当用户开始触摸对象时插入的代码将运行（仅用于触摸设备）
         //点击Symbol_Chen
         var comp = AdobeEdge.getComposition("Page_Leader");
         var stage = comp.getStage();
         sym.stop();
         stage.getSymbol("Symbol_Chen_Word").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6993, function(sym, e) {
         // 在此处插入代码
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Symbol_Chen_Word}", "touchstart", function(sym, e) {
         // 当用户开始触摸对象时插入的代码将运行（仅用于触摸设备）
         
         var comp = AdobeEdge.getComposition("Page_Leader");
         var stage = comp.getStage("Symbol_Chen");
         stage.play();
         comp.getStage().getSymbol("Symbol_Chen_Word").stop(0)

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Symbol_Zhang_Word}", "touchstart", function(sym, e) {
         // 当用户开始触摸对象时插入的代码将运行（仅用于触摸设备）
         var comp = AdobeEdge.getComposition("Page_Leader");
         var stage = comp.getStage();
          stage.play();
         
          stage.getSymbol("Symbol_Zhang_Word").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Symbol_Wu_Word}", "touchstart", function(sym, e) {
         // 当用户开始触摸对象时插入的代码将运行（仅用于触摸设备）
         var comp = AdobeEdge.getComposition("Page_Leader");
         var stage = comp.getStage();
         stage.play();
         stage.getSymbol("Symbol_Wu_Word").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Symbol_Sun_Word}", "touchstart", function(sym, e) {
         // 当用户开始触摸对象时插入的代码将运行（仅用于触摸设备）
         var comp = AdobeEdge.getComposition("Page_Leader");
         var stage = comp.getStage();
         stage.play();
         stage.getSymbol("Symbol_Sun_Word").stop(0);

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         // 在此处插入代码
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // 当组件在此处被完全加载时插入的代码将运行
         document.getElementById("StageLeader").addEventListener("touchstart",function(e)
                  {
                  	_yS=e.touches[0].pageY;
                  	e.preventDefault();
                  	console.log("start",_yS);//console能看到
                  })
                  document.getElementById("StageLeader").addEventListener("touchend",function(e)
                  {
                  	 _yE=e.changedTouches[0].pageY;
                  	 e.preventDefault();
                  	console.log("end",_yE);//console能看到
                  	pageFlag = _yE - _yS;
                  	//如果pageFlage > 0 则跳到上一页
                  //如果pageFlage < 0 则跳到下一页
                     if (pageFlag > 0 && pageFlag > 30) {
                        setPlay("id5", "id4", "Page_ComIntro", "Symbol_ComIntro3");
                     }
                     if (pageFlag < 0 && pageFlag < -30) {
                        setPlay("id5", "id6", "Page_Team", "Symbol_Team1");
                     }
                  })

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Symbol_wu'
   (function(symbolName) {   
   
   })("Symbol_wu");
   //Edge symbol end:'Symbol_wu'

   //=========================================================
   
   //Edge symbol: 'Symbol_Wu'
   (function(symbolName) {   
   
   })("Symbol_Wu");
   //Edge symbol end:'Symbol_Wu'

   //=========================================================
   
   //Edge symbol: 'Symbol_Sun'
   (function(symbolName) {   
   
   })("Symbol_Sun");
   //Edge symbol end:'Symbol_Sun'

   //=========================================================
   
   //Edge symbol: 'Symbol_Zhang'
   (function(symbolName) {   
   
   })("Symbol_Zhang");
   //Edge symbol end:'Symbol_Zhang'

   //=========================================================
   
   //Edge symbol: 'Symbol_Header'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // 在此处插入代码
         sym.play(0);

      });
      //Edge binding end

   })("Symbol_Header");
   //Edge symbol end:'Symbol_Header'

   //=========================================================
   
   //Edge symbol: 'Symbol_Chen_word'
   (function(symbolName) {   
   
   })("Symbol_Chen_word");
   //Edge symbol end:'Symbol_Chen_word'

   //=========================================================
   
   //Edge symbol: 'Symbol_Chen_Word'
   (function(symbolName) {   
   
   })("Symbol_Chen_Word");
   //Edge symbol end:'Symbol_Chen_Word'

   //=========================================================
   
   //Edge symbol: 'Symbol_Sun_Word'
   (function(symbolName) {   
   
   })("Symbol_Sun_Word");
   //Edge symbol end:'Symbol_Sun_Word'

   //=========================================================
   
   //Edge symbol: 'Symbol_Wu_Word'
   (function(symbolName) {   
   
   })("Symbol_Wu_Word");
   //Edge symbol end:'Symbol_Wu_Word'

   //=========================================================
   
   //Edge symbol: 'Symbol_Zhang_Word'
   (function(symbolName) {   
   
   })("Symbol_Zhang_Word");
   //Edge symbol end:'Symbol_Zhang_Word'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "Page_Leader");