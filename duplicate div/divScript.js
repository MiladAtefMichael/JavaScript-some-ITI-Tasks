function copyDiv(oldDiv,color){
    let newDiv=document.createElement('div');
    newDiv.classList.add(color);
    document.body.append(newDiv);
    oldDiv.classList.add('disableOnClick');
    newDiv.addEventListener('click',function(){
        copyDiv(newDiv,color);
    });
    

}
window.addEventListener('load',function(){
    let divRed=document.querySelector('div.red');
    let divGreen=document.querySelector('div.green');
    let divBlue=document.querySelector('div.blue');
    divRed.addEventListener('click',function(){
        copyDiv(divRed,'red');
        
    }
    );

    divGreen.addEventListener('click',function(){
        copyDiv(divGreen,'green');
    }
    );
    divBlue.addEventListener('click',function(){
        copyDiv(divBlue,'blue');
    }
    );
    
});