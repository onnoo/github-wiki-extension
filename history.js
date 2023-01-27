function replaceAnchor() {
    document.querySelectorAll(".js-wiki-history-revision").forEach((elem, index) => {
        var revision = elem.querySelector("div.text-mono").innerText;
        var pTag = elem.querySelector("div p.color-fg-default");
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
}

function addLocationObserver(callback) {

    // Options for the observer (which mutations to observe)
    const config = { attributes: false, childList: true, subtree: false };
  
    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);
  
    // Start observing the target node for configured mutations
    observer.observe(document.body, config);
}

function observerCallback() {
    if (window.location.href.endsWith('_history')) {
        replaceAnchor();
    }
}

addLocationObserver(observerCallback);
observerCallback();