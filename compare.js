var aTag = document.querySelector(".Link--primary");
var title = aTag.title.replace(".md", "");
var href = document.location.href;
var idx = href.indexOf("_compare");

href = href.substr(0, idx) + title;
aTag.href = href;