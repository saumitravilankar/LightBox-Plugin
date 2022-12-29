// function to add HTML div
function includePopHTML (){
    let html = '<div id="vis-popup"><img id="leftarrow" src="lightbox/images/leftarrow.png" alt=""><img id="rightarrow" src="lightbox/images/rightarrow.png" alt=""><img id="close" src="lightbox/images/close.png" alt=""><img id="current-pop-image" src="images/img1.jpg" alt=""></div>'

    let popdiv = document.createElement('div')
    popdiv.innerHTML = html
    document.body.insertBefore(popdiv, document.body.firstElementChild)
}

includePopHTML()


let img = document.getElementsByClassName('vispop')

let plugin_div = document.getElementById('vis-popup')

let current_img = document.getElementById('current-pop-image')
// console.log(current_img.attributes.)

let current_src

for (let i= 0; i < img.length; i++){
    img[i].addEventListener('click',function(){
        current_src = this.attributes['src']
        console.log(current_src)
        current_img.attributes.src='asada'
        console.log(current_img.attributes['src'])
        plugin_div.style.display='block'
    })
}