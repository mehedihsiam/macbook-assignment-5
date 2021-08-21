function updatePrice(input, price) {
    const calledPrice = document.getElementById(input);
    const priceText = calledPrice.innerText;
    let priceAmount = parseInt(priceText);
    priceAmount = price;
    calledPrice.innerText = priceAmount;

    totalCost();
};

function totalCost() {
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById('extra-memory-price').innerText;
    const storagePrice = document.getElementById('extra-storage-price').innerText;
    const deliveryCharge = document.getElementById('delivery-charge').innerText;

    const totalCostText = document.getElementById('total-cost');
    const totalCostFooterText = document.getElementById('total-footer');
    const totalCostAmount = parseInt(bestPrice) + parseInt(memoryPrice) + parseInt(storagePrice) + parseInt(deliveryCharge);
    totalCostText.innerText = totalCostAmount;
    totalCostFooterText.innerText = totalCostAmount;

}

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
