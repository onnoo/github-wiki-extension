document.querySelectorAll(".js-wiki-history-revision").forEach((elem, index) => {
    var revision = elem.querySelector("div.text-mono").innerText;
    var pTag = elem.querySelector("div p.color-text-primary");
    var aTag = document.createElement("a");
    aTag.innerText = pTag.innerText;
    aTag.classList.add("h5");
    aTag.classList.add("mb-1");
    aTag.classList.add("color-text-primary");
    aTag.href = window.location.pathname.replace("_history", "_compare/") + revision; 
    
    pTag.parentElement.replaceChild(aTag, pTag);
});

document.querySelectorAll("a[rel='nofollow']").forEach((elem, index) => {
    elem.addEventListener("click", function () {
        document.location.href = elem.href;
    });
});