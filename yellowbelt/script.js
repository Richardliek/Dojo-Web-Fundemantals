function search(event) {
    event.preventDefault()
    alert (`You're searching for ${document.getElementById('searchbar').value}`)
}

function hide(element) {
    element.remove();
}

function addlikes(id){
    document.getElementById(id).innerText++
}
