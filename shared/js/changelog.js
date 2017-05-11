(function(){this.parsePlaintextChangelog=function(d){var f,a,l,e,b;l=d.split("\n");d=[];b=void 0;for(f=0;f<l.length;)if(a=$.trim(l[f]),f++,(e=a.match(/^(.*?)(\s\/\/.*)$/))&&(a=$.trim(e[1])),!(1>a.length||a.match(/^\/\//)))switch(a[0]){case "<":b.changes.push({kind:"raw",text:a});break;case "$":b.changes.push({kind:"announce",text:$.trim(a.substring(1))});break;case "*":b.changes.push({kind:"improved",text:$.trim(a.substring(1))});break;case "+":b.changes.push({kind:"new",text:$.trim(a.substring(1))});
break;case "!":b.changes.push({kind:"fixed",text:$.trim(a.substring(1))});break;case "-":b.changes.push({kind:"removed",text:$.trim(a.substring(1))});break;default:a=a.split("-"),b={version:$.trim(a[0]),date:$.trim(a[1]),note:$.trim(a[2]),changes:[]},d.push(b)}return d};this.generateChangelogHTML=function(d,f,a,l){var e,b,m,g,r,t,k,c,n,p,h,q;r=$(d);n=f.length-1;for(q=[];0<=n;){h=f[n];n!==f.length-1&&(t=$('<div class="separator"/>'));n--;d=$('<div class="release"/>').attr("id","v"+h.version);g=$('<div class="titlebox"/>');
k=$("<h4/>");e=$("<a>"+h.version+"</a>").attr("href",a(h.version));m=$("<h5/>").html(l(h.date));k.append(e);g.append(k,m);d.append(g);m=$('<div class="infobox"/>');e=$('<ul class="changes"/>');for(p=0;p<h.changes.length;)c=h.changes[p],p++,"raw"===c.kind?e.append(c.text):("announce"===c.kind?(g=$("<li/>"),b=$('<span class="info announce"/>').html(c.text),g.append('<span class="sticker">&nbsp;</span>',b)):(g=$("<li/>"),c.text=c.text.replace(/\(.*?\)/g,function(a){return"<i>"+a+"</i>"}),c.text=c.text.replace(/\[(.*?)\]/g,
function(a,b){return"<em>"+b+"</em>"}),b=$("<b/>").text(c.kind),k=$('<span class="sticker"/>').addClass(c.kind),k.append(b),b=$('<span class="info"/>').html(c.text),g.append(k,b)),e.append(g));m.append(e);d.append(m);q.push(r.prepend(d,t))}return q}}).call(this);