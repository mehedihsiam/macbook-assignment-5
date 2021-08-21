// declare total cost
const totalCostCalled = document.getElementById('total-cost');
const totalCostText = totalCostCalled.innerText;

// total cos at footer
var totalCostFooter = document.getElementById('total-footer');
var totalCostFooterText = totalCostFooter.innerText;
var totalCostFooterNumber = parseInt(totalCostFooterText);


// price update function
function updatePrice(input, price) {
    const calledPrice = document.getElementById(input);
    const priceText = calledPrice.innerText;
    let priceAmount = parseInt(priceText);
    priceAmount = price;
    calledPrice.innerText = priceAmount;

    totalCost();
};



// total price update function
function totalCost() {
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById('extra-memory-price').innerText;
    const storagePrice = document.getElementById('extra-storage-price').innerText;
    const deliveryCharge = document.getElementById('delivery-charge').innerText;
    const totalCostAmount = parseInt(bestPrice) + parseInt(memoryPrice) + parseInt(storagePrice) + parseInt(deliveryCharge);
    totalCostCalled.innerText = totalCostAmount;
    totalCostFooter.innerText = totalCostAmount;

    // const totalCostNumber = parseFloat(totalCostText);
    var discountAmount = (totalCostAmount / 100) * 20;
    var discountPrice = totalCostAmount - discountAmount;
    var discountPriceNumber = parseFloat(discountPrice);
    return discountPriceNumber;
};


function promoCode() {
    const promoCodeInput = document.getElementById('promo-code-input');
    const promoCodeValue = promoCodeInput.value;


    if (promoCodeValue == 'stevekaku') {
        totalCostFooter.innerText = totalCost();
        promoCodeButton.disabled = true;
        promoCodeInput.value = '';

    };
}
const promoCodeButton = document.getElementById('promo-code-btn');
promoCodeButton.addEventListener('click', function () {
    promoCode();
});






//  default memory
document.getElementById('default-memory').addEventListener('click', function () {
    updatePrice('extra-memory-price', 0);
});

// extra memory 
document.getElementById('extra-memory-btn').addEventListener('click', function () {
    updatePrice('extra-memory-price', 180);
});

// default storage
document.getElementById('default-storage').addEventListener('click', function () {
    updatePrice('extra-storage-price', 0);
});

// extra 5012 storage 
document.getElementById('extra-storage-512').addEventListener('click', function () {
    updatePrice('extra-storage-price', 100);
});

// extra 1tb storage 
document.getElementById('extra-storage-1tb').addEventListener('click', function () {
    updatePrice('extra-storage-price', 180);
});

// free delivery
document.getElementById('free-delivery').addEventListener('click', function () {
    updatePrice('delivery-charge', 0);
});

// fast delivery
document.getElementById('fast-delivery').addEventListener('click', function () {
    updatePrice('delivery-charge', 20);
});



