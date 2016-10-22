{{define "blog_js"}}
var stringProto=String.prototype;stringProto.stripTags=function(){return this.replace(/<[^>]*>/gi,"")},stringProto.decode4Html=function(){var t=document.createElement("div");return t.innerHTML=this.stripTags(),t.childNodes[0]?t.childNodes[0].nodeValue||"":""},stringProto.queryUrl=function(t){var a=this.replace(/^[^?=]*\?/gi,"").split("#")[0],e={};return a.replace(/(^|&)([^&=]+)=([^&]*)/g,function(t,a,n,o){try{n=decodeURIComponent(n)}catch(s){}try{o=decodeURIComponent(o)}catch(s){}n in e?e[n] instanceof Array?e[n].push(o):e[n]=[e[n],o]:e[n]=/\[\]$/.test(n)?[o]:o}),t?e[t]:e},function(t){t.disqus_shortname="deepzz",$.each(["CURRENT_PAGE","CDN_DOMAIN"],function(a,e){t[e]="";var n=$("#"+e);n&&(t[e]=n.val())})}(this),function(t){function a(a){var e,n,o={selector:null,height:200};o=$.extend(o,a),e=o.height,n=function(){var a=$(t).scrollTop(),n=$(t).height()+a;$(o.selector).find("img[data-src]").each(function(){var t=$(this);setTimeout(function(){var o,s=t.offset(),i=t.height();s.top>n+e||s.top+i<a-e||(o=t.data("src"),o&&(t.on("load",function(){t.addClass("loaded")}),t.attr("src",o),t.removeAttr("data-src")))},0)})},$(t).on("resize",n),$(t).on("scroll",n),n()}t.lazyLoad=a}(this),function(t){function a(a){var e='<li class="post" id="post-'+a.id+'"><div class="post-content clearfix"><div class="indicator"></div><div class="avatar"><div class="user">'+(a.url?'<a href="'+a.url+'"><img data-src="'+a.avatar+'" /></a>':'<img data-src="'+t.CDN_DOMAIN+'/static/img/blog/default_avatar.png" />')+'</div></div><div class="post-body"><header class="post-header"><span class="post-byline"><span class="author publisher-anchor-color">'+(a.url?'<a href="'+a.url+'">'+a.name+"</a>":a.name)+'</span></span><span class="post-meta"><span class="bullet">&nbsp;\u2022&nbsp;</span><a data-id="'+a.id+'" href="'+location.href.replace(/#.*$/,"")+"#comment-"+a.id+'" class="time-ago" title="'+a.createdAt+'">'+a.createdAtStr+'</a></span></header><div class="post-body-inner">'+a.message+'</div></div></div><ul class="children" data-id="'+a.id+'"></ul></li>';return e}function e(t){for(;t.length;){var e=[];t.forEach(function(t){var n=t.parent,o=s.find('ul[data-id="'+n+'"]');return o.length?void o.append(a(t)):void e.push(t)}),t=e}}function n(t){var a="";a=t.comments.length?'<div class="thread"><header><nav class="nav clearfix"><ul><li class="nav-tab tab-conversation active"><a class="publisher-nav-color"><span>'+t.total+' </span>Comments</span></a></li></ul></nav></header><section><div class="thread-tips">本模式仅提供基础浏览功能。如需发表评论请<a href="#disqus_thread">点击这里</a>（请确保你能流畅访问 disq.us | disquscdn.com | disqus.com）</div></section><section><ul class="post-list" data-id="0"></ul><div class="load-more"><a href="#" class="btn">Load more comments</a></div></section></div>':'<p class="no-result">没有找到任何评论数据~<br /><br /><a href="#disqus_thread">点此发表评论 \xbb</a></p>',s.html(a)}function o(){if(!i){i=!0;var a;a=r?"/disqus/"+t.simple_config.id+"?cursor="+r:"/disqus/"+t.simple_config.id,$.get(a,{},function(a){var o;i=!1,a&&0==a.errno?(r?e(a.data.comments):(n(a.data),e(a.data.comments),$(t).trigger("hashchange","scrollIntoView")),o=s.find(".load-more a"),a.data.next?o.removeClass("busy"):o.hide(),r=a.data.next,$(t).trigger("scroll")):s.html('<p class="no-result">获取数据失败，请稍后再试！</p>')})}}var s=$("#simple_thread"),i=!1,r="";s.on("click",".load-more a",function(t){t.preventDefault(),$(this).addClass("busy"),o()}).on("click",".time-ago",function(t){t.preventDefault(),location.hash="simple-"+$(this).data("id")}),$(t).on("hashchange",function(a,e){var n,o=location.hash.match(/#(?:comment|simple)-(\d+)/);o&&(n=s.find("#post-"+o[1]),n.length&&(s.find(".post-content.target").removeClass("target"),n.find("> .post-content").addClass("target"),e&&$(t).scrollTop(n.offset().top-90)))}),/(iPhone|Android)/.test(navigator.userAgent)&&s.addClass("mobile"),t.initSimpleThread=o}(window,document),function(t,a){return"127.0.0.1"!=a.domain&&"deepzz.com"!=a.domain?void (location.href=location.href.replace(/(https?:\/\/[^\/]+)\//i,"//deepzz.com/")):(function(){var t,a=location.search.queryUrl();"1"==a.clear_ls&&(delete a.clear_ls,t=$.param(a),setTimeout(function(){t?location.search=$.param(a):location.href=location.href.replace(/\?.*$/,"")},300))}(),void $(function(){lazyLoad({selector:"#content",height:100}),function(){var t=$("#content"),a=t.find("img"),e=t.width();a.each(function(){var t=$(this),a=0|t.attr("width"),n=0|t.attr("height"),o=t.prop("complete");a>e&&t.attr("height",Math.ceil(n/a*e)),t.prop("src")&&(o?t.addClass("loaded"):t.on("load",function(){t.addClass("loaded")}))})}(),function(){if("search-post"==CURRENT_PAGE){var t=$("#keyword");t.val()||t.focus()}}(),function(){var a,e,n,o,s=$("#disqus_thread"),i=$("#simple_thread"),r=!1,c=!1,l=$("#switch_thread_mode");l.length&&(t.disqus_config=function(){this.page.url=s.data("url"),this.page.identifier=s.data("identifier")},t.simple_config={id:i.data("id")},a=function(a){var e=new Image,n=setTimeout(function(){e.onerror=e.onload=null,a(-1)},2500);e.onerror=function(){clearTimeout(n),a(0)},e.onload=function(){clearTimeout(n),a(1)},e.src="https://disqus.com/favicon.ico?"+ +new Date,t.__disqus_img=e},e=function(){s.show(),i.hide(),l.html('「<a href="#simple_thread">切换到评论浏览模式</a>」'),localStorage.comment_type="disqus_thread",r||(r=!0,s.html("评论加载中...<br /><br />注：如果长时间无法加载，请针对 disq.us | disquscdn.com | disqus.com 启用代理；或者切换到评论浏览模式。"),$.ajax({url:t.CDN_DOMAIN+"/static/js/disqus_52ef5a.js",dataType:"script",cache:!0}),c||a(function(t){1>t&&(location.hash="simple_thread")}))},n=function(){s.hide(),i.show(),l.html('「<a href="#disqus_thread">切换到评论完整模式</a>」'),localStorage.comment_type="simple_thread",c||(c=!0,i.html("评论加载中...<br /><br />注：本模式仅供浏览，如需发表评论请切换到评论完整模式。"),t.initSimpleThread())},o=function(){var t=location.hash;return"#simple_thread"==t||/#simple-\d+$/.test(t)?(n(),!0):"#disqus_thread"==t||/#comment-\d+$/.test(t)?(e(),!0):void 0},$(t).on("hashchange",o),setTimeout(function(){/ # (simple | comment) - \d + $ /.test(location.hash)&&$("#comments").get(0).scrollIntoView();var a=setInterval(function(){var i=s.offset().top,r=$(t).scrollTop();if(Math.abs(i-r)<1000){if(clearTimeout(a),o()){return}if("simple_thread"==localStorage.comment_type){return void n()}e()}},150)},250))}()}))}(this,document),function(t){$(function(){$(".entry-content pre").each(function(t){var a,e,n,o=$(this),s=o.find("code");if(s.length&&s.prop("className")&&(s.hasClass("language-html")&&(a="__HTML_CODE_"+t,s.prop("id",a),e=$('<input data-id="'+a+'" type="button" class="runcode" value="在新窗口运行以上代码" />'),e.insertAfter(o)),s.html().split("\n").length>3&&s.prop("className").indexOf("language")>-1)){switch(n=s.prop("className").replace("language-","").toUpperCase()){case"XML":n="HTML";break;case"SHELL":n="BASH"}$('<b class="name">'+n+"</a>").insertBefore(s)}}),$(".entry-content input.runcode").each(function(){var a=$(this);a.click(function(a){var e,n,o;a.preventDefault(),e=$("#"+$(this).data("id")).html().stripTags().decode4Html(),n=t.open("","_preview",""),o=n.document,o.open(),o.write(e),o.close()})}),$(".entry-content > pre code").each(function(i,block){hljs.highlightBlock(block)})})}(this),function(){$(function(){$(".entry-content img[data-replace]").each(function(){var t=$(this);t.click(function(){var a,e,n,o,s=1000*(t.data("dur")||20);t.css("cursor")&&(a="/static/img/blank.gif",e=t.prop("src"),n=t.data("replace"),t.prop("src",a),t.css("cursor",""),o=new Image,o.onload=function(){t.prop("src",n),setTimeout(function(){t.prop("src",e),t.css("cursor","pointer")},s)},o.src=n)}),t.css("cursor","pointer")})})}(this);
{{end}}
