tinymce.PluginManager.add("contextmenu",function(e){var n,t,i=e.settings.contextmenu_never_use_native,o=function(e){return e.ctrlKey&&!i},c=function(){return tinymce.Env.mac&&tinymce.Env.webkit},u=function(){return!0===t};return e.on("mousedown",function(n){c()&&2===n.button&&!o(n)&&e.selection.isCollapsed()&&e.once("contextmenu",function(n){e.selection.placeCaretAt(n.clientX,n.clientY)})}),e.on("contextmenu",function(i){var c;if(!o(i)){if(i.preventDefault(),c=e.settings.contextmenu||"link openlink image inserttable | cell row column deletetable",n)n.show();else{var u=[];tinymce.each(c.split(/[ ,]/),function(n){var t=e.menuItems[n];"|"==n&&(t={text:n}),t&&(t.shortcut="",u.push(t))});for(var l=0;l<u.length;l++)"|"==u[l].text&&(0!==l&&l!=u.length-1||u.splice(l,1));n=new tinymce.ui.Menu({items:u,context:"contextmenu",classes:"contextmenu"}).renderTo(),n.on("hide",function(e){e.control===this&&(t=!1)}),e.on("remove",function(){n.remove(),n=null})}var r={x:i.pageX,y:i.pageY};e.inline||(r=tinymce.DOM.getPos(e.getContentAreaContainer()),r.x+=i.clientX,r.y+=i.clientY),n.moveTo(r.x,r.y),t=!0}}),{isContextMenuVisible:u}});