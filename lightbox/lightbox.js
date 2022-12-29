// function to add HTML div
function includePopHTML (){
    let html = '<div id="vis-popup"><img id="leftarrow" src="lightbox/images/leftarrow.png" alt=""><img id="rightarrow" src="lightbox/images/rightarrow.png" alt=""><img id="close" src="lightbox/images/close.png" alt=""><img id="current-pop-image" src="images/img1.jpg" alt=""></div>'
    
    let popdiv = document.createElement('div')
    popdiv.innerHTML = html
    document.body.insertBefore(popdiv, document.body.firstElementChild)
}

includePopHTML()

// Jquery to display plugin div
function useLightboxOnClass(target) {
    let img = $(target)
    console.log(img)
    
    // jQuery to convert cursor to pointer
    img.mouseenter(function(){
        $(this).css('cursor','pointer')
    })
    
    // jQuery to set current_index and display popup
    img.click(function(){
        getIndex($(this))
        displayimg(current_index)
    })

// index variable
let current_index

// src variable
let current_src

// Jquery to close plugin div
$('#close').click(function(){
    $('#vis-popup').css('display','none')
})

// function to set current index
function getIndex(current_img){
    current_index = img.index($(current_img))
}

// function to display popup of current image
function displayimg (index){

    current_src = img.eq(index).attr('src')
    $('#current-pop-image').attr('src',current_src)
    $('#vis-popup').css('display','block')
}

// rightarrow function
$('#rightarrow').click(function(){
    current_index+=1;
    displayimg(current_index);
    resetindex(current_index);
})

// leftarrow function
$('#leftarrow').click(function(){
    current_index-=1;
    displayimg(current_index);
    resetindex(current_index);
})

// resetindex(current_index)
function resetindex (index){
    // console.log(img.length);
    if (index==(img.length-1)) {
        current_index = (-1);
        // console.log(current_index);       
    }else if (index==(-img.length+1)) {
        current_index = 1;
        // console.log(current_index);
    }
}

}