const generateHTML = pageName => {
    return (
        '<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '<meta charset="UTF-8">\n' +
        '<title>Blocked</title>\n' +
        '<link rel="stylesheet" type="text/css" href="style.css">\n' +
        '</head>\n' +
        '<body style="align-items: center; justify-content: center; width: 100%;">\n' +
        '<div style="border-bottom: 7px solid black;">\n' +
        '</div>\n' +
        '<div id="runner">\n' +
        '</div>\n' +
        '<div id="road">\n' +
        '</div>\n' +
        '<div style="border-bottom: 7px solid black; height: 200px">\n' +
        '</div>\n' +
        '<div style="width: 100%; height:0px;">\n' +
        '</div>\n' +
        '<div style="animation: myAnim 2s ease 0s 1 normal forwards; text-align: center; position: center">Sorry this website has been blocked</div>\n' +
        '<div>\n' +
        '<script type="text/javascript" src="Content.js">' +
        '</script>\n' +
        '<div id="site" style="text-align: center; animation: myAnim 2s ease 0s 1 normal forwards;">\n' +
        '</div>\n' +
        '</div>\n' +
        '<div class="cloud">\n' +
        '</div>\n' +
        '</body>\n' +
        '</html>'
    );
};

chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse) {
    if(request.message){
        console.log(request.message[0])
        console.log(new Date(parseInt(request.message[1])))
        let regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/
        if(regex.test(request.message[0])) {
            chrome.storage.local.get({blockedList: []}, function (result) {
                if (result.blockedList === null) {
                    result.blockedList = []
                }
                const array = result.blockedList;
                request.message[0] = removeAfterThirdSlash(request.message[0])
                array.push(request.message)
                for (let i = 0; i < array.length; i++) {
                    console.log(array[i][0] + ", " + array[i][1]);
                }
                chrome.storage.local.set({'blockedList': array}).then(() => {
                    console.log("site saved")
                })

            })
        }
        else{
            console.log("invalid link")
        }
        /**chrome.storage.local.get(['blockedList'], (result) =>{
            if(chrome.runtime.lastError){
                chrome.storage.local.set({'blockedList': request.message})
            }
            array = JSON.parse([result])
            array.push([request])
            for(let i = 0; i < array.length; i++){
                console.log(array[i])
            }
        })**/
        //chrome.storage.local.set({'blockedList': array})
        //chrome.runtime.sendMessage({action: "open_dialog_box"}, function(response) {});
    }
});

function removeAfterThirdSlash(url) {
    const match = url.match(/^([^/]+\/\/[^/]+)\/.*$/);
    return match ? match[1] : url;
}