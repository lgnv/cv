const blocks = document.querySelectorAll('.info-block');
window.addEventListener('scroll', _ => {
    for (const block of blocks) {
        const a = getCoords(block)
        if (pageYOffset + window.innerHeight >= a.top) {
            console.log(block.classList);
            if (!block.classList.contains('show-block')) {
                block.classList.remove('hidden');
                block.classList.add('show-block');
            }
        }
    }
});

function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}