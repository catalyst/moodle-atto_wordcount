YUI.add("moodle-atto_wordcount-button",function(n,t){n.namespace("M.atto_wordcount").Button=n.Base.create("button",n.M.editor_atto.EditorPlugin,[],{block:0,update_rate:200,counterid:null,countre:/[\w\u00C0-\u2013\u2015-\uFFDC]+/g,cleanre:/[\u2019\'-]*/g,update_on_delete:!0,initializer:function(){var t=this.get("host"),e=t._wrapper;this.counterid=t.get("elementId")+"-word-count",this.counterElement=n.Node.create('<span class="badge badge-light" id="'+this.counterid+'">0</span>'),e.appendChild(n.Node.create('<div class="editor_atto_toolbar"><button type="button" class="btn btn-secondary">Words:<span class="badge badge-light" id="'+this.counterid+'">0</span><span class="sr-only">words count</span></button></div>')),this.get("host").on("pluginsloaded",function(){this.get("host").on("atto:selectionchanged",this._count,this)},this)},_count:function(t){var e=this;e.block||(e.block=1,setTimeout(function(){n.one("#"+e.counterid).set("text",e._getCount(t)),setTimeout(function(){e.block=0},e.update_rate)}))},_getCount:function(){var t,e=0,n=this.get("host").getCleanHTML();return n&&(t=(n=(n=(n=(n=(n=(n=n.replace(/\.\.\./g," ")).replace(/<.[^<>]*?>/g," ").replace(/&nbsp;|&#160;/gi," ")).replace(/(\w+)(&.+?;)+(\w+)/,"$1$3").replace(/&.+?;/g," ")).replace(/_/g," ")).replace(this.cleanre,"")).replace(/([0-9])[.,]([0-9])/g,"$1$2")).match(this.countre))&&(e=t.length),e}})},"@VERSION@");