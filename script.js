// ! Accordion icon
let plus = document.querySelector(".plus")
let minus = document.querySelector(".minus")
let accordionButton = document.querySelector(".accordion-button")

accordionButton.addEventListener("toggle",function(){
    plus.classList.add("d-none")
    minus.classList.replace
})


// ! Add To Chart icon
/// Sepet adedini güncellemek için gereken işlev
function updateCartItemCount() {
    // Sepete eklenen ürünlerin sayısını alın (örneğin, localStorage veya başka bir kaynaktan)
    // Örneğin, localStorage kullanarak:
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    var itemCount = cart.length;

    // Sepet adedini HTML içeriğine güncelleyin
    var cartItemCountElement = document.getElementById("cartItemCount");
    cartItemCountElement.textContent = itemCount.toString();
}

// Sayfa yüklendiğinde veya sepet güncellendiğinde sepet adedini güncelleyin
document.addEventListener("DOMContentLoaded", function () {
    updateCartItemCount();
});

// Ürün sepete eklendiğinde sepet adedini güncelleyin
function addToCart(productName, productPrice) {
    // Ürünü sepete eklemek için gereken işlemleri gerçekleştirin

    // Sepet adedini güncelleyin
    updateCartItemCount();
    
    // Ürünü localStorage veya başka bir veri kaynağına ekleyin (örneğin, sepet nesnesine ekleyin)
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({
        name: productName,
        price: productPrice
    });
    localStorage.setItem('cart', JSON.stringify(cart));
}

// ! butona basınca arttır azalt (Chart sayfasındaki arttır azalt butonlarıyla fiyatları güncelledim)

function arttir(){
    var toplam = document.getElementById("toplam")
    var genelToplam = document.getElementById("genelToplam")
    var tax = document.getElementById("tax")
    var fiyat = document.getElementById("fiyat")
    var sonuc=document.getElementById("sonuc");
    sonuc.value=Number(sonuc.value)+1;
    fiyat.innerText= sonuc.value*59 + "$"
    toplam.innerText=sonuc.value*59 +"$"
    genelToplam.innerText=sonuc.value*61 +"$"
    tax.innerText=sonuc.value*2+"$"
 }

 function azalt(){
    var tax = document.getElementById("tax")
    var toplam = document.getElementById("toplam")
    var genelToplam = document.getElementById("genelToplam")
    var fiyat = document.getElementById("fiyat")
    var sonuc=document.getElementById("sonuc");
    
    sonuc.value=Number(sonuc.value)-1;
    fiyat.innerText= sonuc.value*59 + "$"
    toplam.innerText=sonuc.value*59 +"$"
    genelToplam.innerText=sonuc.value*61 +"$"
    tax.innerText=sonuc.value*2+"$"
    }
function arttir2(){
    var tax = document.getElementById("tax")
    var toplam = document.getElementById("toplam")
    var genelToplam = document.getElementById("genelToplam")
    var fiyat = document.getElementById("fiyat2")
    var sonuc=document.getElementById("sonuc2");
    sonuc.value=Number(sonuc.value)+1;
    fiyat.innerText= sonuc.value*59 + "$"
    toplam.innerText=sonuc.value*59 +"$"
    genelToplam.innerText=sonuc.value*61 +"$"
    tax.innerText=sonuc.value*2+"$"
    tax.innerText=sonuc.value*2+"$"
 }

 function azalt2(){
    var tax = document.getElementById("tax")
    var toplam = document.getElementById("toplam")
    var genelToplam = document.getElementById("genelToplam")
    var fiyat = document.getElementById("fiyat2")
    var sonuc=document.getElementById("sonuc2");
    
    sonuc.value=Number(sonuc.value)-1;
    fiyat.innerText= sonuc.value*59 + "$"
    toplam.innerText=sonuc.value*59 +"$"
    genelToplam.innerText=sonuc.value*61 +"$"
    tax.innerText=sonuc.value*2+"$"
    }
function arttir3(){
    var tax = document.getElementById("tax")
    var toplam = document.getElementById("toplam")
    var genelToplam = document.getElementById("genelToplam")
    var fiyat = document.getElementById("fiyat3")
    var sonuc=document.getElementById("sonuc3");
    sonuc.value=Number(sonuc.value)+1;
    fiyat.innerText= sonuc.value*59 + "$"
    toplam.innerText=sonuc.value*59 +"$"
    genelToplam.innerText=sonuc.value*61 +"$"
    tax.innerText=sonuc.value*2+"$"
 }

 function azalt3(){
    var tax = document.getElementById("tax")
    var toplam = document.getElementById("toplam")
    var genelToplam = document.getElementById("genelToplam")
    var fiyat = document.getElementById("fiyat3")
    var sonuc=document.getElementById("sonuc3");
    
    sonuc.value=Number(sonuc.value)-1;
    fiyat.innerText= sonuc.value*59 + "$"
    toplam.innerText=sonuc.value*59 +"$"
    genelToplam.innerText=sonuc.value*61 +"$"
    tax.innerText=sonuc.value*2+"$"
    }