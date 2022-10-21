// Bài 3 :  

// promise1 xử lý tác vụ 3s  cho ra kết quả là 2
// 	promise2 xử lý tác vụ 3s và CẦN data của tác vụ 1 trả ra kết quả giá trị x3 kết quả tác vụ 1(=6)
// 	promis3 CẦN data của tác vụ 2 để xác định kết quả tác vụ 2 có > 10 hay không
//     in ra màn hình true hoặc false. 

// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(2);
//     }, 3000);
// });
// .then((data) => {
//     return promise2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(data * 3);
//         }, 3000)
//     });
// })
 
//     console.log(data > 10);
// })
// =================================================================
// B4: tạo 1 promise1 với tác vụ resovle sau 3 giây (dùng settimeout)
// 	tạo 1 promise2 tác vụ resolve sau 2 giây
// 	tạo 1 promise3 tác vụ reject sau 2 giây
// dùng .all  để thực hiện song song tác vụ tiết kiệm time.

// let promise1 = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         resolve(2)
//     }, 3000);
// })
// let promise2 = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         resolve(3)
//     }, 2000);
// })
// let promise3 = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         resolve(4)
//     }, 2000);
// })
// var p4 = Promise.all([promise1, promise2, promise3]);
// p4.then((data) =>{
//    console.log(data);
// })
// ========================================================
// B6: áp dụng hợp lý, promise1 xử lý 2s return 3. promise2 xử lý 5s return 7
// 	Bài toán Cần data của 2 tác vụ trên, biết prmise1 vs promise2 không phụ thuộc nhau. 
// Viết chương trình sao cho kết quả trả về 3+7=10 trong thời gian ngắn nhất 
// let promise1 = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         resolve(3)
//     }, 2000);
// })
// let promise2 = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         resolve(7)
//     }, 5000);
// })
// let p3 = Promise.all([promise1,promise2]);
// p3.then((data) =>{
//     console.log(data[0]+data[1]);
// })
// ===================================================
// B7:	
// cho tài khoản khách số dư 10 tr thực hiện mua hàng 3 tr và nhận hoàn tiền 10%
// tài khoản shop dư 100tr
// let khachHang = 10
// let shop = 100
// viết promise1 kiểm tra số dư trong 1s và trả về true nếu số dư của khách đủ để thanh toán / false nếu khách không đủ số dư
// viết promise2 để chuyển tiền từ khách sang shop ( khách - 3 , shop + 3) và trả về số dư của 2 bên
// viết promise3 để hoàn tiền 10% sau khi đã thanh toán ở promise2 và trả về số dư của 2 bên
// (khách + 10% * 3 ,  shop - 3 * 10%)   

// let khachHang = 10;
// let giaSanPham = 3;
// let shop = 100;
// let promise1 = new Promise((resolve, reject) =>{
//     setTimeout(function() {
//         resolve(10)
//     }, 1000);
// })
// .then((data) =>{
//     if(data > giaSanPham){
//         thongbao = 'sô dư đủ'
//     }else{
//         thongbao = 'so du khong du'
//     }
//     return data
// })
// .then((value) =>{
//     khachHang = khachHang -3;
//     shop = shop + 3
//     if(value > giaSanPham){
//         thongbao = `chuyển tiền thành công:\n số dư cửa bạn là: ${khachHang} \n số dư của shop là: ${shop} `
//     }else{
//         thongbao = 'số dư của bạn không đủ'
//     }
//     return value
// })
// .then((item) =>{
//     if(item > giaSanPham){
//         thongbao = `chuyển tiền thành công:\n số dư cửa bạn là: ${khachHang + 0.1*3} \n số dư của shop là: ${shop - 3*0.1} `
//     }else{
//         thongbao = 'số dư của bạn không đủ'
//     }
//     console.log(thongbao);
// })