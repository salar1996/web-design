const items = [];
let itemCount;
const $ = document;
const submitForm = $.querySelector("form");
const itemsCount = $.querySelector("#item-number");
const warning = $.querySelector(".warning");
const mainItem = $.querySelector(".list");
const buttons = $.querySelector(".pagenumbers");

let currentPage = 1;
let pageItems = 10;


//// functions
function recieveItemCount(event) {
    event.preventDefault();
    if (itemsCount.value && itemsCount.value > 0) {
        itemCount = itemsCount.value;
        // createPagination(itemCount);
        itemsCount.value = "";
        createItemsToShow(itemCount);
        displayItemsForThisPage(currentPage, pageItems);
        createPagination(currentPage, pageItems);
    } else {
        itemsCount.value = "";
        itemsCount.classList.add("warning");
        warning.style.display = "block";
        itemsCount.addEventListener("focus", function () {
            itemsCount.classList.remove("warning");
            warning.style.display = "none";
        })
    }

};

// creating items count to show
function createItemsToShow(number) {
    var newItem;
    for (var i = 1; i <= number; i++) {
        newItem = "Item: " + i;
        items.push(newItem);
    }
    return items;
}

// display items for intended page
function displayItemsForThisPage(currentPage, pageItems) {
    let endItem = pageItems * currentPage;
    let startItem = endItem - pageItems;

    mainItem.innerHTML = "";
    let newItem;
    let displayItems = items.slice(startItem, endItem);
    displayItems.forEach(function (item) {
        newItem = $.createElement("p");
        newItem.classList.add("item");
        newItem.innerHTML = item;
        mainItem.appendChild(newItem);
    })
}


// create pagination
function createPagination(currentPage, pageItems){
    let totalPageCount = Math.ceil(items.length / pageItems);
    let startIndex = currentPage;

    if ((currentPage - 2) > 0) {
        startIndex = currentPage - 2;
    } else if ((currentPage - 1) > 0) {
        startIndex = currentPage - 1;
    }
    let endIndex = totalPageCount;

    buttons.innerHTML = "";
    let newPageNumber;
    // for pagination less than 6 page
    if((endIndex - startIndex) < 5){
        if(endIndex === totalPageCount){
            newPageNumber = $.createElement("button");
            newPageNumber.classList.add("page-numbers");
            newPageNumber.innerHTML = 1;
            buttons.append(newPageNumber);


            let dots = $.createElement("span");
            dots.classList.add("dots");
            dots.innerHTML = " ... ";
            buttons.append(dots);
        }
        for(var i=startIndex; i<=endIndex; i++){
            newPageNumber = $.createElement("button");
            newPageNumber.classList.add("page-numbers");
            if(i === currentPage){
                newPageNumber.classList.add("active");
                console.log(i)
            }
            newPageNumber.innerHTML = i;
            buttons.append(newPageNumber);
        }
    }else{ // for pagination 6 page or more
        for(var i = startIndex; i <= (startIndex + 4); i++){
            newPageNumber = $.createElement("button");
            newPageNumber.classList.add("page-numbers");
            if(i === currentPage){
                newPageNumber.classList.add("active");
            }
            newPageNumber.innerHTML = i;
            buttons.append(newPageNumber);

        };
        let dots = $.createElement("span");
        dots.classList.add("dots");
        dots.innerHTML = " ... ";
        buttons.append(dots);

        newPageNumber = $.createElement("button");
        newPageNumber.classList.add("page-numbers");
        newPageNumber.innerHTML = endIndex;
        buttons.append(newPageNumber);
    }

    let pages = $.querySelectorAll(".page-numbers");
    pages.forEach(function(page){
        page.addEventListener("click", loadSelectedPage)
    })

}

function loadSelectedPage(event){
    let pageSelected = event.target.innerHTML;
    let currentPage = Number(pageSelected);
    displayItemsForThisPage(currentPage, pageItems);
    createPagination(currentPage, pageItems);
}


//// events
submitForm.addEventListener("submit", recieveItemCount);
