// function for calculating price
function updatePriceTable(button, priceTable, price) {
    const upgradeButton = document.getElementById(button);
    upgradeButton.addEventListener('click', function () {
        const extraPrice = document.getElementById(priceTable);
        extraPrice.innerText = price;

        return extraPrice;
    })
};

const totalPrice = document.getElementById('total-price');
const totalNumber = parseInt(totalPrice);

function updateTotal(clicked) {
    const extraPriceText = updatePriceTable();
    const extraPriceNumber = parseInt(extraPriceText);

    const totalUpdate = document.getElementById(clicked);
    totalUpdate.addEventListener('click', function () {
        const total = totalNumber + extraPriceNumber;
        totalPrice.innerText = total;
    })
}


// extra memory 
var forExtraMemory = updatePriceTable('extra-memory-btn', 'extra-memory-price', 180);
// default memory
var defaultMemory = updatePriceTable('default-memory', 'extra-memory-price', 00);
// default storage
var extraStoragePrice = updatePriceTable('default-storage', 'extra-storage-price', 00);
// 512 GB SSD
var extraStoragePrice = updatePriceTable('extra-storage-512', 'extra-storage-price', 100);
// 1 TB SSD
var extraStoragePrice = updatePriceTable('extra-storage-1tb', 'extra-storage-price', 180);
// free delivery
var freeDelivery = updatePriceTable('free-delivery', 'delivery-charge', 00);
// fast delivery
var fastDelivery = updatePriceTable('fast-delivery', 'delivery-charge', 20);


