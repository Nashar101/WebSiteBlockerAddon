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
let blockedSites = []
boot()
async function fetchData(){

}

function boot(){
    chrome.storage.local.get({blockedList: []}, function (result) {
        if (result.blockedList === null) {
            result.blockedList = []
        }
        const array = result.blockedList;
        console.log("this is array length " + array.length)
        console.log(array[0][0])
        block(array)
        //console.log("this is array length " + array.length)
        //blockedSites = array

    })
    console.log("hola")
    console.log("this is length " + blockedSites.length)
}
function sayHI(){
    console.log("hi")
}
/*document.querySelector("#hi").addEventListener("click", () => {
    console.log("hi")
});*/

function block(array) {
    console.log("let test this shit")
    console.log(array[0][0])
    console.log(window.location.hostname)
    console.log(window.location.href)
    for (let i = 0; i < array.length; i++) {

        console.log(i + ', ' + array[i][0])
        if (window.location.hostname == array[i][0] + '/' || window.location.href == array[i][0] + '/') {
            document.body.innerHTML = generateHTML('site is blocked');
            const displaySite = document.getElementById('site');
            displaySite.textContent = blockedsites[i].toString();
            blockedSite = blockedsites[i].toString();
            break;
        }
    }
}
//alert("this is a test")
//document.body.innerHTML = generateHTML('site is blocked')