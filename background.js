chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse) {
    if(request.message){
        console.log(request.message)
    }
});