const cursor = document.querySelector('.cursor')
document.addEventListener('mousemove',(e) => {
    if (e.pageX==0 || e.pageY==0){
        cursor.style.opacity = 0; 
    } else {
        cursor.style.opacity = 1;
        cursor.style.left = e.clientX + 'px';
        cursor.style.top  = e.clientY + 'px';
    }
})

function changeCursor(action,size='small'){
    switch (size){
        case 'big':
            sizeNum = 6
            break;
        case 'small':
            sizeNum = 3.5
            break;        
    }
    if (action == 'in'){
        cursor.style.width = sizeNum + 'rem';
        cursor.style.height = sizeNum + 'rem';
    } else {
        cursor.style.width = 1.25 + 'rem';
        cursor.style.height = 1.25 + 'rem';
    }    
}
