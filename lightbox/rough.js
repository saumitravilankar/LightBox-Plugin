// conditions to hide arrows on first and last image
if ($(this).attr('src')==img.eq(0).attr('src')) {
    // console.log('first image')
    $('#leftarrow').css('display','none')
    $('#rightarrow').css('display','block')
}else if($(this).attr('src')==img.eq(-1).attr('src')){
    // console.log('last image')
    $('#rightarrow').css('display','none')
    $('#leftarrow').css('display','block')
}else{
    // console.log('inbetween image')
    $('#leftarrow').css('display','block')
    $('#rightarrow').css('display','block')
}

// functionizing nxt and previous buttons
$('#rightarrow').click(function(){
    let new_src = img.eq(current_index+1).attr('src')
    $('#current-pop-image').attr('src',new_src)
})
$('#leftarrow').click(function(){
    let new_src = img.eq(current_index-1).attr('src')
    $('#current-pop-image').attr('src',new_src)
})


for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click',function(){
        console.log(img[i])
    })
    
}