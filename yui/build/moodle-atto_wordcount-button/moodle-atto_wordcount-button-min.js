YUI.add("moodle-atto_wordcount-button",function(o,t){o.namespace("M.atto_wordcount").Button=o.Base.create("button",o.M.editor_atto.EditorPlugin,[],{block:0,updateRate:200,counterid:null,spacer:/(<\/(?!a>|b>|del>|em>|i>|ins>|s>|small>|strong>|sub>|sup>|u>)\w+>|<br> | <br\s*\/>)/g,mediaTags:/(<(audio|video)).*(<\/(audio|video)>)/gm,counter:new RegExp("[\\p{Z}\\p{Cc}—–]+","gu"),initializer:function(){var t=this.get("host"),e=t._wrapper;this.counterid=t.get("elementid")+"-word-count",this.counterid=this.counterid.replace(":","-"),this.counterElement=o.Node.create('<span class="badge badge-light" id="'+this.counterid+'">0</span>'),e.appendChild(o.Node.create('<div class="'+this.toolbar.getAttribute("class")+' editor_atto_toolbar_bottom p-0 d-flex"><div class="d-inline-flex p-0"><strong>'+M.util.get_string("words","atto_wordcount")+': </strong><span id="'+this.counterid+'">0</span></div></div>')),this._count(t.get("editor")),this.get("host").on("pluginsloaded",function(){this.get("host").on("atto:selectionchanged",this._count,this)},this)},_count:function(t){var e=this;e.block||(e.block=1,setTimeout(function(){o.one("#"+e.counterid).set("text",e._getCount(t)),setTimeout(function(){e.block=0},e.updateRate)}))},_getCount:function(){var t,e=0,o=this.get("host").getCleanHTML();return e=o&&(t=(t=(o=(o=(o=o.replace(this.spacer,"$1 ")).replace(/<.[^<>]*?>/g,"")).replace(/&nbsp;|&#160;/gi," ")).split(this.counter,-1)).filter(function(t){return""!=t.trim()}))?t.length:e}})},"@VERSION@",{requires:["moodle-editor_atto-plugin"]});