// memory extra price
function forMemory(memoryPrice) {
    var memoryExtraPrice = document.getElementById('extra-memory-price').innerText = memoryPrice;
};

function updateTotal(priceUpdate) {
    var totalText = document.getElementById('total-price').innerText;
    var totalNumber = parseInt(totalText);
    var newTotal = totalNumber + priceUpdate;
    document.getElementById('total-price').innerText = newTotal;
}

document.getElementById('default-memory').addEventListener('click', function () {
    forMemory(00);
});
document.getElementById('extra-memory-btn').addEventListener('click', function () {
    forMemory(100);
});


// storage extra price
function forStorage(storagePrice) {
    document.getElementById('extra-storage-price').innerText = storagePrice;
};

document.getElementById('default-storage').addEventListener('click', function () {
    forStorage(00);
});
document.getElementById('extra-storage-512').addEventListener('click', function () {
    forStorage(100);
});
document.getElementById('extra-storage-1tb').addEventListener('click', function () {
    forStorage(180);
});

// delivery cost
function deliveryTiming(deliveryCost) {
    var deliveryCharge = document.getElementById('delivery-charge').innerText = deliveryCost;
};

document.getElementById('free-delivery').addEventListener('click', function () {
    deliveryTiming(00);
});
document.getElementById('fast-delivery').addEventListener('click', function () {
    deliveryTiming(20);
});




// // // for extra memory start
// // function forMemory(memoryPriceInput, memoryPrice) {
// //     var extraMemoryPrice = document.getElementById(memoryPriceInput);
// //     extraMemoryPrice.innerText = memoryPrice;
// //     var extraMemoryPriceNumber = extraMemoryPrice.innerText
// //     return extraMemoryPriceNumber

// // }

// // const extraMemoryButton = document.getElementById('extra-memory-btn');
// // extraMemoryButton.addEventListener('click', function () {
// //     forMemory('extra-memory-price', 180);
// // });
// // const defaultMemoryButton = document.getElementById('default-memory');
// // defaultMemoryButton.addEventListener('click', function () {
// //     forMemory('extra-memory-price', 00);
// // });
// // // for extra memory end



// // // for extra storage start
// // function forStorage(storagePriceInput, storagePrice) {
// //     var extraStoragePrice = document.getElementById(storagePriceInput);
// //     extraStoragePrice.innerText = storagePrice;
// //     var extraStoragePriceNumber = extraStoragePrice.innerText;
// //     return extraStoragePriceNumber


// // }

// // const defaultStorageButton = document.getElementById('default-storage');
// // defaultStorageButton.addEventListener('click', function () {
// //     forMemory('extra-storage-price', 00);
// // });
// // const extraStorageButton512 = document.getElementById('extra-storage-512');
// // extraStorageButton512.addEventListener('click', function () {
// //     forMemory('extra-storage-price', 100);
// // });
// // const extraStorageButton1tb = document.getElementById('extra-storage-1tb');
// // extraStorageButton1tb.addEventListener('click', function () {
// //     forMemory('extra-storage-price', 180);
// // });




// // var totalPrice = forMemory() + forStorage();
// // console.log(totalPrice);


// // // function total() {
// // //     var totalPrice = forMemory()/*  + forStorage(); */
// // //     console.log(totalPrice);
// // // }

// // function for calculating price
// function updatePriceTable(button, priceTable, price) {
//     const upgradeButton = document.getElementById(button);
//     upgradeButton.addEventListener('click', function () {
//         const extraPrice = document.getElementById(priceTable);
//         extraPrice.innerText = price;
//     })
// };


// // extra memory 
// var forExtraMemory = updatePriceTable('extra-memory-btn', 'extra-memory-price', 180);
// // default memory
// var defaultMemory = updatePriceTable('default-memory', 'extra-memory-price', 00);
// // default storage
// var extraStoragePrice = updatePriceTable('default-storage', 'extra-storage-price', 00);
// // 512 GB SSD
// var extraStoragePrice = updatePriceTable('extra-storage-512', 'extra-storage-price', 100);
// // 1 TB SSD
// var extraStoragePrice = updatePriceTable('extra-storage-1tb', 'extra-storage-price', 180);
// // free delivery
// var freeDelivery = updatePriceTable('free-delivery', 'delivery-charge', 00);
// // fast delivery
// var fastDelivery = updatePriceTable('fast-delivery', 'delivery-charge', 20);


// const promoCode = document.getElementById('promo-code-input');
// const promoButton = document.getElementById('promo-code-btn');
// promoButton.addEventListener('click', function () {
//     if (promoCode.value == 'siam') {
//         var totalPriceText = document.getElementById('total-price').innerText;
//         var totalPriceNumber = parseFloat(totalPriceText);
//         var discountAmount = (totalPriceNumber / 100) * 20;
//         var discountPrice = totalPriceNumber - discountAmount;
//     }


// })
