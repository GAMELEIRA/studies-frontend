const showImage = (humor) => {
    const parent = document.getElementById('response');
    const child = document.createElement('img');
    let image;
    switch (humor) {
        case 1: 
            image = 'images/happy-woman.png';
            break; 
        case 2:
            image = 'images/normal-man.png';
            break;
        case 3: 
            image = 'images/sad-baby.png';
            break; 
        case 4: 
            image = 'images/angry-woman.png';
            break;
    }
    child.src = image;
    child.width = 700;
    parent.appendChild(child);
} 