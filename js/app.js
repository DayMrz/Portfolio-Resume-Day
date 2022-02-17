function swapStyleSheet(sheet) {
    document.querySelector('#pagestyle').setAttribute('href', sheet);
}

function initiate() {
    const printStyle = document.querySelector('#print-style-sheet');
    const defaultStyle =document.querySelector('#default-style-sheet');

    printStyle.onclick = function () {swapStyleSheet('css/print/print-view.css')}
    defaultStyle.onclick = function () {swapStyleSheet('css/web/style.css')}
}

window.onload = initiate;

