function addPopUp(index){

    let html = '<div id="lightbox-popup" class="lightbox"><span id="close" class="material-symbols-outlined">close</span><span id="left-arrow" class="material-symbols-outlined">arrow_back</span><span id="right-arrow" class="material-symbols-outlined">arrow_forward</span><img id="current-img" src="images/img1.jpg" alt=""></div>'

    let popUp = document.createElement('div')
    popUp.innerHTML = html
    document.body.insertBefore(popUp, document.body.firstElementChild)

    let currentIndex;

    // close button function
    function closeButton(){
        document.getElementById('close').addEventListener('click',function (params) {
            document.getElementById('lightbox-popup').style.display = 'none';
            resetIndex()
        })
    }

    closeButton()

    function resetIndex(){
        currentIndex = 0
    }

    // right arrow
    function rightArrow(){
        checkArrows()
        document.getElementById('right-arrow').addEventListener('click',function (params) {
            index+=1
            document.getElementById('current-img').src = img[index].src;
            checkArrows()
            console.log(index);
        })
    }
    rightArrow()

    // left arrow
    function leftArrow(){
        checkArrows()
        document.getElementById('left-arrow').addEventListener('click',function (params) {
            index-=1
            document.getElementById('current-img').src = img[index].src;
            checkArrows()
            console.log(index);
        })
    }
    leftArrow()

    // To show current image
    document.getElementById('current-img').src = img[index].src

    // show arrows
    function checkArrows(){
        if (index == 0){
            document.getElementById('left-arrow').style.display = 'none';
            document.getElementById('right-arrow').style.display = 'block';
    
        } else if (index == img.length-1) {
            document.getElementById('left-arrow').style.display = 'block';
            document.getElementById('right-arrow').style.display = 'none';
        } else {
            document.getElementById('left-arrow').style.display = 'block';
            document.getElementById('right-arrow').style.display = 'block';
        }
    }

}

let img;

function activatePlugin(className){
    img = document.getElementsByClassName(className)

    for (let i = 0; i < img.length; i++) {
        img[i].addEventListener('click',function (params) {
            addPopUp(i);
        });
    }
}

