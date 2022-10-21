// function changeImg(id){
//     let imgPath = document.getElementById(id).getAttribute('src');
//     document.getElementById('img-main').setAttribute('src', imgPath);
// }
// let link = document.querySelectorAll('.img-miror li img');
// let imgBox = document.querySelector('.img-main > img');
// link.forEach(el =>{
//     el.addEventListener('mouseover', ()=> imgBox.src = el.src)
// })
// ====update cửa hàng
// lấy ảnh
var imgabc;
var getImg = document.querySelector("#img_product").addEventListener('change',(e) =>{
    let src = URL.createObjectURL(e.target.files[0]);
    document.querySelector('.img').setAttribute('src', src)
    imgabc = src
});
var data = [];
var addProduct = document.querySelectorAll('.update');
addProduct.forEach(function(btn){
    btn.addEventListener("click", function(d){
        var btnAdd = d.target.parentElement.parentElement;
        var item_title = btnAdd.querySelector('#name-product').value;
        var item_price = btnAdd.querySelector('#price-product').value;
        var item_product = btnAdd.querySelector('#number-product').value;
        addShop(item_title,item_price,item_product)
    })
})
function addShop(item_title,item_price,item_product){
    var addItemShop = document.createElement('div');
    var ItemContent = `
    <div class="card" style="width: 16rem;">
    <img  src="${imgabc}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${item_title}</h5>
        <p class="card-price"><span>${item_price}</span>đ</p>
        <p>Cửa hàng còn <span class="number-product">${item_product}</span> sản phẩm</p>
        <p>Số Lượng Mua: <input type="number" id="quantity" name="quantity" min="1" max="${item_product}" value="1"> </p>
        <a href="#" class="btn btn-primary">Thêm vào giỏ hàng</a>
        <a href="#" class="btn-delete1 btn-primary">Xóa</a>
        </div>
    </div>`
    addItemShop.innerHTML = ItemContent;
    var cardShop = document.querySelector(".item");
    cardShop.append(addItemShop);
    // thêm sản phẩm vào cửa ha
    var btn = document.querySelectorAll('.btn');
    btn.forEach(function (button) {
        button.addEventListener("click", function (e) {
            var btnItem = e.target;
            var btnProduct = btnItem.parentElement.parentElement;
            var productImg = btnProduct.querySelector('img').src;
            var productTitle = btnProduct.querySelector('.card-title').innerText;
            var productPrice = btnProduct.querySelector('.card-price span').innerText;
            var productAmount = btnProduct.querySelector('input').value;
            addcart(productImg, productTitle, productPrice, productAmount)
        });
    });
    clear();
    deleteItem1();
}
// ============làm mới dữ liệu
function clear(){
    document.querySelector('.uploadImg img').src = ""
    document.querySelector('#name-product').value = "";
    document.querySelector('#img_product').value = ""
    document.querySelector('#price-product').value = "";
    document.querySelector('#number-product').value = "";
}
function deleteItem1(){
    var chooseBtn2 = document.querySelectorAll('.card');
    for(var i = 0; i <chooseBtn2.length; i++){
        var cardDelete = document.querySelectorAll('.btn-delete1')
        cardDelete[i].addEventListener("click",function(el){
            var btnDelete2 = el.target;
            var clickBtn3 = btnDelete2.parentElement.parentElement.parentElement;
            clickBtn3.remove()
        })
    }  
}
// ===============update giỏ hàng========================

// thêm sản phẩm vào giỏ hàng
function addcart(productImg, productTitle, productPrice, productAmount){
    var sumPrice = productAmount*productPrice
    var addDiv = document.createElement('div');
    var divContent = `
    <div class="card cart-item">
    <img src="${productImg}" class="img-fluid rounded-start" alt="...">
    <div class="cart-body">
    <h5 class="card-title">${productTitle}</h5>
    <p class="card-price"><span>${sumPrice.toLocaleString('de-DE')}</span>đ</p>
    <p>Số Lượng: <span>${productAmount}</span></p>
    <a href="#" class="btn-delete btn-primary">Xóa</a>
    <a href="#" class="btn-buy btn-primary">Mua</a>
    </div>
    </div>`
    addDiv.innerHTML = divContent;
    var card = document.querySelector(".card-shop")
    card.append(addDiv)
    deleteItem();
    BuyItem();
}
// xóa sản phẩm
function deleteItem(){
    var chooseBtn1 = document.querySelectorAll('.card.cart-item');
    for(var i = 0; i <chooseBtn1.length; i++){
        var cardDeleteParent = document.querySelectorAll('.btn-delete')
        cardDeleteParent[i].addEventListener("click",function(el){
            var btnDelete = el.target;
            var clickBtn = btnDelete.parentElement.parentElement;
            clickBtn.remove()
        })
    }  
}
// thông báo khi mua
function BuyItem(){
    var chooseBtn2 = document.querySelectorAll('.card.cart-item');
    for(var i = 0; i <chooseBtn2.length; i++){
        var cardBuy = document.querySelectorAll('.btn-buy')
        cardBuy[i].addEventListener("click",function(el){
          alert('mua hàng thành công')
        })
    }  
}
