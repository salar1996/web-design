let productsInfo = [
    { id: "k1001", name: "کتاب کار و تمرین علوم اول دبستان منتشران", price: 34000, sale: 27200, showPrice: "34000", showSale: "27200", image: "../images/products/1.png" },
    { id: "k1002", name: "کتاب کار و تمرین علوم سوم دبستان منتشران", price: 35000, sale: 28000, showPrice: "35000", showSale: "28000", image: "../images/products/2.png" },
    { id: "k1003", name: "کتاب کار و تمرین علوم چهارم دبستان منتشران", price: 35000, sale: 28000, showPrice: "35000", showSale: "28000", image: "../images/products/3.png" },
    { id: "k1004", name: "کتاب کار و تمرین علوم پنجم دبستان منتشران", price: 35000, sale: 28000, showPrice: "35000", showSale: "28000", image: "../images/products/4.png" },
    { id: "k1005", name: "کتاب کار و تمرین ریاضی پنجم دبستان منتشران", price: 53000, sale: 42400, showPrice: "53000", showSale: "42400", image: "../images/products/5.png" },
    { id: "k1006", name: "کتاب کار و تمرین ریاضی چهارم دبستان منتشران", price: 53000, sale: 42400, showPrice: "53000", showSale: "42400", image: "../images/products/6.png" },
    { id: "k1007", name: "هندسه جامع منتشران", price: 151000, sale: 120800, showPrice: "151000", showSale: "120800", image: "../images/products/7.png" },
    { id: "k1008", name: "حسابان و ریاضیات جامع منتشران", price: 165000, sale: 132000, showPrice: "165000", showSale: "132000", image: "../images/products/8.png" },
    { id: "k1009", name: "زبان انگلیسی جامع منتشران", price: 109000, sale: 87200, showPrice: "109000", showSale: "87200", image: "../images/products/9.png" },
    { id: "k1010", name: "آموزش درک عمومی هنر - کتاب های سبز قلم چی", price: 90000, sale: 72000, showPrice: "90000", showSale: "72000", image: "../images/products/10.png" },
    { id: "k1011", name: "پاسخ برگ پیمانه ای قلم چی", price: 65000, sale: 52000, showPrice: "65000", showSale: "52000", image: "../images/products/11.png" },
    { id: "k1012", name: "مهروماه آزمون سراسری 1400 - رشته تجربی", price: 28000, sale: 22400, showPrice: "28000", showSale: "22400", image: "../images/products/12.png" },
    { id: "k1013", name: "مهروماه آزمون سراسری 1400 - رشته ریاضی", price: 28000, sale: 22400, showPrice: "28000", showSale: "22400", image: "../images/products/13.png" },
    { id: "k1014", name: "مهروماه آزمون سراسری 1400 - رشته انسانی", price: 28000, sale: 22400, showPrice: "28000", showSale: "22400", image: "../images/products/14.png" },
    { id: "k1015", name: "فیزیک یازدهم ریاضی خوشخوان", price: 83000, sale: 66400, showPrice: "83000", showSale: "66400", image: "../images/products/15.png" },
    { id: "k1016", name: "فیزیک دوازدهم ریاضی خوشخوان", price: 166000, sale: 132800, showPrice: "166000", showSale: "132800", image: "../images/products/16.png" },
    { id: "k1017", name: "ریاضیات پایه + جمع بندی نشر الگو - رشته ریاضی", price: 52000, sale: 41600, showPrice: "52000", showSale: "41600", image: "../images/products/17.png" },
    { id: "k1018", name: "ریاضیات پایه + جمع بندی نشر الگو - رشته تجربی", price: 60000, sale: 48000, showPrice: "60000", showSale: "48000", image: "../images/products/18.png" },
    { id: "k1019", name: "هشتگ کنکور رشته ریاضی کاگو - کنکور 1400 خارج", price: 30000, sale: 24000, showPrice: "30000", showSale: "24000", image: "../images/products/19.png" },
    { id: "k1020", name: "سیر تا پیاز گرامر زبان انگلیسی کنکور", price: 85000, sale: 76500, showPrice: "85000", showSale: "76500", image: "../images/products/20.png" },
    { id: "k1021", name: "سیر تا پیاز آرایه های ادبی + تاریخ ادبیات کنکور", price: 89000, sale: 80100, showPrice: "89000", showSale: "80100", image: "../images/products/21.png" },
    { id: "k1022", name: "سیر تا پیاز فارسی هشتم گاج", price: 69000, sale: 62100, showPrice: "69000", showSale: "62100", image: "../images/products/22.png" },
    { id: "k1023", name: "سیر تا پیاز مطالعات اجتماعی ششم گاج", price: 50000, sale: 45000, showPrice: "50000", showSale: "45000", image: "../images/products/23.png" },
    { id: "k1024", name: "سیر تا پیاز ریاضی سوم دبستان گاج", price: 75000, sale: 67500, showPrice: "75000", showSale: "67500", image: "../images/products/24.png" },
    { id: "k1025", name: "سیر تا پیاز ریاضی و آمار یازدهم گاج", price: 87000, sale: 78300, showPrice: "87000", showSale: "78300", image: "../images/products/25.png" },
    { id: "k1026", name: "سیر تا پیاز ترجمه و تعریف جامع کنکور", price: 59000, sale: 53100, showPrice: "59000", showSale: "53100", image: "../images/products/26.png" },
    { id: "k1027", name: "شیمی جامع کنکور منتشران", price: 224000, sale: 179200, showPrice: "224000", showSale: "179200", image: "../images/products/27.png" },
    { id: "k1028", name: "دین و زندگی جامع انسانی منتشران", price: 156000, sale: 124800, showPrice: "156000", showSale: "124800", image: "../images/products/28.png" },
    { id: "k1029", name: "ریاضی و آمار جامع انسانی منتشران", price: 111000, sale: 88800, showPrice: "111000", showSale: "88800", image: "../images/products/29.png" },
    { id: "k1030", name: "کار و تمرین ریاضی دوم دبستان منتشران", price: 53000, sale: 42400, showPrice: "53000", showSale: "42400", image: "../images/products/30.png" },
    { id: "k1031", name: "کار و تمرین ریاضی اول دبستان منتشران", price: 58000, sale: 46400, showPrice: "58000", showSale: "46400", image: "../images/products/31.png" },
    { id: "k1032", name: "درس پک دهم ریاضی مهروماه", price: 169000, sale: 135200, showPrice: "169000", showSale: "135200", image: "../images/products/32.png" },
    { id: "k1033", name: "درس پک دهم تجربی مهروماه", price: 169000, sale: 135200, showPrice: "169000", showSale: "135200", image: "../images/products/33.png" },
    { id: "k1034", name: "لقمه هندبوک فرمول نامه فیزیک مهروماه", price: 37000, sale: 29600, showPrice: "37000", showSale: "29600", image: "../images/products/34.png" },
    { id: "k1035", name: "تست جغرافیا جامع خیلی سبز", price: 107000, sale: 85600, showPrice: "107000", showSale: "85600", image: "../images/products/35.png" },
    { id: "k1036", name: "شهر کج - پرتقال", price: 75000, sale: 60000, showPrice: "75000", showSale: "60000", image: "../images/products/36.png" },
    { id: "k1037", name: "پژواک - پرتقال", price: 89000, sale: 71200, showPrice: "89000", showSale: "71200", image: "../images/products/37.png" },
    { id: "k1038", name: "آبی زیست دهم قلم چی", price: 98000, sale: 78400, showPrice: "98000", showSale: "78400", image: "../images/products/38.png" },
    { id: "k1039", name: "تست فیزیک دهم خیلی سبز", price: 125000, sale: 100000, showPrice: "125000", showSale: "100000", image: "../images/products/39.png" },
    { id: "k1040", name: "شیمی دهم مبتکران", price: 144000, sale: 115200, showPrice: "144000", showSale: "115200", image: "../images/products/40.png" },
    { id: "k1041", name: "فیل شیمی دوازدهم مبتکران", price: 85000, sale: 68000, showPrice: "85000", showSale: "68000", image: "../images/products/41.png" }
];
export {productsInfo};

const $ = document;
const products = $.querySelector(".product-container");
const cartCount = $.querySelector(".cart-number");
const cartIcon = $.querySelector(".cart");
const cartInfo = $.querySelector(".cart-modal");

let currentPage = 1;
let pageItems = 24;
export {pageItems};
////////////////////////////////////////////// events
cartIcon.addEventListener("click", showCart);

////////////////////////////////////////////// show product and pagination

// display Products
function displayProductsForThisPage(currentPage, pageItems) {
    let endItem = pageItems * currentPage;
    let startItem = endItem - pageItems;
    products.innerHTML = "";

    let newProduct, newProductContent, newProductImage, addToCartButton, newProductTitle, newProductPrice, newProductSale;
    let displayItems = productsInfo.slice(startItem, endItem);

    displayItems.forEach(function (product) {
        ////////////////////////////////////////////////////////////////// old method
        // newProduct = $.createElement("li");
        // newProduct.classList.add("type-product");
        // // create div class ==> content
        // newProductContent = $.createElement("div");
        // newProductContent.classList.add("product");

        // // create product image
        // newProductImage = $.createElement("div");
        // newProductImage.classList.add("product-image");
        // newProductImage.innerHTML = "<img width=\"180px\" height=\"180px\" src=\"" + product.image + "\">";

        // // create product title
        // newProductTitle = $.createElement("span");
        // newProductTitle.classList.add("product-titte");
        // newProductTitle.innerHTML = product.name;

        // // create product price
        // newProductPrice = $.createElement("del");
        // newProductPrice.setAttribute("aria-hidden", true);
        // newProductPrice.innerHTML = "<span class=\"product-price\">" + product.showPrice + "</span>";

        // // create product sale
        // newProductSale = $.createElement("ins");
        // newProductSale.classList.add("product-sale-price")
        // newProductSale.innerHTML = product.showSale;

        // newProductContent.append(newProductImage, newProductTitle, newProductPrice, newProductSale);


        // // create div class ==> add-to-cart
        // addToCartButton = $.createElement("div");
        // addToCartButton.classList.add("add-to-cart");
        // addToCartButton.innerHTML = "<button class=\"add-to-cart-button\">افزودن به سبد خرید</button>"

        // // completing creation of new product
        // newProduct.append(newProductContent, addToCartButton);
        // products.append(newProduct);

        // newProduct.addEventListener("mouseenter", showAddToCartButton);
        // newProduct.addEventListener("mouseleave", removeAddToCartButton);
        // addToCartButton.children[0].addEventListener("click", function () {
        //     addTocart(product.id);
        // });

        ///////////////////////////////////////////////////////////////////////////////////////// new method

        let productHtml = '<li class="type-product" onmouseenter="showAddToCartButton(event)" onmouseleave= "removeAddToCartButton(event)"><div class="product"><div class="product-image"><img width="180px" height="180px" src="' + product.image + '"></div><span class="product-titte">' + product.name + '</span><del aria-hidden="true"><span class="product-price">' + product.showPrice + '</span></del><ins class="product-sale-price">' + product.showSale + '</ins></div><div class="add-to-cart" style="display: none;"><button class="add-to-cart-button" onclick = "addTocart(\'' + product.id + '\')">افزودن به سبد خرید</button></div></li>'
        products.insertAdjacentHTML("beforeend", productHtml);
    })
};

////////////////////////////////////////////// cart functions
function loadProducts() {
    products.innerHTML = "";
    displayProductsForThisPage(currentPage, pageItems);
    updateCartNumber();
    createPagination(currentPage, pageItems);
}

function showAddToCartButton(event) {
    event.target.children[0].children[0].style.cssText = "filter: blur(5px); transition: .5s;";
    event.target.children[1].style.display = "block";
};

function removeAddToCartButton(event) {
    event.target.children[0].children[0].style.filter = "blur(0px)";
    event.target.children[1].style.display = "none";
}

function newAddTocart(item) {
    addTocart(item);
    // console.log(event.parentElement)
}


function addTocart(productId) {
    let userCart = [];
    let newItem = { id: productId, count: 1 };
    if (localStorage.getItem("userCart") && JSON.parse(localStorage.getItem("userCart")) != []) {
        userCart = JSON.parse(localStorage.getItem("userCart"));
        let isInCart = false;
        userCart.forEach(function (item) {
            if (item.id === productId) {
                item.count++;
                localStorage.setItem("userCart", JSON.stringify(userCart));
                isInCart = true;
            }
        })
        if (!isInCart) {
            userCart.push(newItem);
            localStorage.setItem("userCart", JSON.stringify(userCart));
        }

    } else {
        userCart.push(newItem);
        localStorage.setItem("userCart", JSON.stringify(userCart));
    }
    updateCartNumber();
    updadeCartItems();
}

// update cart number
function updateCartNumber() {
    if (localStorage.getItem("userCart") && localStorage.getItem("userCart") != []) {
        let cartItems = JSON.parse(localStorage.getItem("userCart"));
        cartCount.innerHTML = cartItems.length;
    }
}


// show Cart
function showCart() {
    cartInfo.style.right = "0";
    $.querySelector(".close-curt").addEventListener("click", closeCart);

    // const cartItems = $.querySelector(".cart-contents");
    // cartItems.innerHTML = "";
    if (localStorage.getItem("userCart") && localStorage.getItem("userCart") != []) {
        let cartInfo = JSON.parse(localStorage.getItem("userCart"));
        updadeCartItems();
    }
}

// close Cart
function closeCart() {
    cartInfo.style.right = "-320px";
}

// updade Cart Items
function updadeCartItems() {
    let cartItems = JSON.parse(localStorage.getItem("userCart"));
    let cartElem = $.querySelector(".cart-items");
    cartElem.innerHTML = "";
    //create fragment to imorove efficiency
    let cartFragment = document.createDocumentFragment();

    // finding product info
    cartItems.forEach(function (item) {
        let findProduct = productsInfo.find(function (product) {
            return product.id === item.id;
        })

        // creating html to show in cart
        let itemImage = $.createElement("img");
        itemImage.setAttribute("src", findProduct.image);
        itemImage.setAttribute("whith", "62px");
        itemImage.setAttribute("height", "62px");

        let itemName = createElement("span", false, false, "product-title", findProduct.name);
        let itemPrice = createElement("span", false, false, "cart-quantity", findProduct.sale + "×" + item.count + " تومان");

        let itemDetail = createElement("a", "href", "#", false, "");
        itemDetail.append(itemImage, itemName, itemPrice);

        let removeItem = createElement("span", false, false, "remove-item-from-cart", "<i class=\"fa-solid fa-trash\"></i>");

        let ItemContent = createElement("li", false, false, "cart-item", "");
        ItemContent.append(removeItem, itemDetail);
        ItemContent.append(removeItem);

        cartFragment.append(ItemContent);
        removeItem.addEventListener("click", function () {
            removeItemFromCart(findProduct.id);
        })
        cartElem.append(cartFragment);
        calculateTptalPrice();
    })
}

function calculateTptalPrice() {
    let userCart = JSON.parse(localStorage.getItem("userCart"));
    let totalCartPrice = 0;
    let findProductInfo;
    userCart.forEach(function (item) {
        findProductInfo = productsInfo.find(function (product) {
            return product.id === item.id;
        })

        totalCartPrice += (findProductInfo.sale * item.count);
    })

    $.querySelector(".cart-total-price").innerHTML = totalCartPrice + " تومان";
}


function createElement(element, attribute, attributeValue, className, html) {
    newElem = $.createElement(element);
    if (className) {
        newElem.classList.add(className);
    }

    if (attribute) {
        newElem.setAttribute(attribute, attributeValue);
    }

    newElem.innerHTML = html;

    return newElem;
}


function removeItemFromCart(productId) {
    let userCart = JSON.parse(localStorage.getItem("userCart"));
    let userCartId = userCart.findIndex(function (item) {
        return (item.id === productId)
    })

    userCart.splice(userCartId, 1);
    localStorage.setItem("userCart", JSON.stringify(userCart));
    updateCartNumber();
    updadeCartItems();
}


////////////////////////////////////////////////// create pagination
// create pagination
function createPagination(currentPage, pageItems) {
    const buttons = $.querySelector(".pagenumbers");
    let totalPageCount = Math.ceil(productsInfo.length / pageItems);
    let startIndex = currentPage;
    // console.log(startIndex, endIndex)

    if ((currentPage - 2) > 0) {
        startIndex = currentPage - 2;
    } else if ((currentPage - 1) > 0) {
        startIndex = currentPage - 1;
    }
    let endIndex = totalPageCount;

    buttons.innerHTML = "";
    let newPageNumber;
    // for pagination less than 6 page
    if ((endIndex - startIndex) < 5) {
        if (startIndex !== 1) {
            newPageNumber = $.createElement("button");
            newPageNumber.classList.add("page-numbers");
            newPageNumber.innerHTML = 1;
            buttons.append(newPageNumber);


            let dots = $.createElement("span");
            dots.classList.add("dots");
            dots.innerHTML = " ... ";
            buttons.append(dots);
        }
        for (var i = startIndex; i <= endIndex; i++) {
            newPageNumber = $.createElement("button");
            newPageNumber.classList.add("page-numbers");
            if (i === currentPage) {
                newPageNumber.classList.add("active");
            }
            newPageNumber.innerHTML = i;
            buttons.append(newPageNumber);
        }
    } else { // for pagination 6 page or more
        for (var i = startIndex; i <= (startIndex + 4); i++) {
            newPageNumber = $.createElement("button");
            newPageNumber.classList.add("page-numbers");
            if (i === currentPage) {
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
    pages.forEach(function (page) {
        page.addEventListener("click", loadSelectedPage)
    })

}

function loadSelectedPage(event) {
    let pageSelected = event.target.innerHTML;
    let currentPage = Number(pageSelected);
    displayProductsForThisPage(currentPage, pageItems);
    createPagination(currentPage, pageItems);
}




