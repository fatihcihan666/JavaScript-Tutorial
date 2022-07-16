/**
 * 1) Siparis bilgilerini object icinde saklayin.
 * 2) Her siparisin ayri ayri kdv dahil toplam odeen ucretini hesaplayin (kdv %18)
 * 3)Tüm siparislerin kdv dahil toplam odenen ucerini hesaplayiniz
 * 
 * siparis id : 101
 * siparis tarihi: 31.12.2022
 * odeme sekli: kredi karti
 * kargo adresi: Aydin
 * satin alinan urunler:
 *      urun id : 5
 *      urun basligi : iphone pro 13
 *      urun fiyat : 20000
 * musteri:
 *      musteri id: 12
 * satici:
 *      firma id: 34
 *      firma adi: apple turkiye
 * 
 * siparis id : 101
 * siparis tarihi: 31.12.2022
 * odeme sekli: kredi karti
 * kargo adresi: Aydin
 * satin alinan urunler:
 *      urun id : 5
 *      urun basligi : iphone pro 13
 *      urun fiyat : 20000
 * musteri:
 *      musteri id: 12
 * satici:
 *      firma id: 34
 *      firma adi: apple turkiye
 * 
 * 
 * 
 */

let order1 = {
    "orderId": 101,
    "orderDate": "16.07.2022",
    "paymentType": "credit_card",
    "cargoAddress": {
        "city": "aydin",
        "country": "turkey"
    },
    "products": [
        {
            "productId": 5,
            "productName": "iphon 13 pro",
            "productPrice": 22000
        },
        {
            "productId": 6,
            "productName": "iphon 13 pro max",
            "productPrice": 25000
        },
    ]
}

let order2 = {
    "orderId": 102,
    "orderDate": "16.07.2022",
    "paymentType": "credit_card",
    "cargoAddress": {
        "city": "aydin",
        "country": "turkey"
    },
    "products": [
        {
            "productId": 6,
            "productName": "iphon 13 pro max",
            "productPrice": 25000
        },
    ]
}


let order1Total = (order1.products[0].productPrice + order1.products[1].productPrice) * 1.18;
let order2Total = (order2.products[0].productPrice) * 1.18;

let totalOrder = order1Total + order2Total;
console.log(totalOrder);

let orders = [order1, order2];

