let pageNo = 1;
let ol = document.getElementById('list')
let pageNumber = document.getElementById('pageNumber')
function getIssues(page){
    let url = `https://api.github.com/repositories/1296269/issues?page=${page}&per_page=5`
    

    fetch(url).then((resp) => resp.json())
    .then((data) => {
        ol.innerHTML = ''
        pageNumber.innerHTML = `Page Number ${page}`
        data.forEach((issue) => {
            let listitem = document.createElement('li')
            listitem.textContent= issue.title;
            ol.append(listitem);
        })
    })
}
getIssues(pageNo)

function loadNext() {
      pageNo++;
      getIssues(pageNo)
}
function loadPrev(){
    if(pageNo > 1){
        pageNo--;
        getIssues(pageNo)
    }
}