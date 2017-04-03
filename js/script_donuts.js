/*menu-navigation*/
function openNav() {
  document.getElementById("mySidenav").style.display = "block";
}

function closeNav() {
  document.getElementById("mySidenav").style.display = "none";
}

/*order cookis show*/
$(document).ready(function(){
  $(".btn-default-var-2").click(function(){
    $("#form").fadeIn();
  });
});

/*order cookis*/
function updateOrder(){
  //постійні 
  var TAXRATE = 0.095;
  var DONATPRICE = 0.50;
  //змінні, щло вводяться користувачем
  var cakeDonuts = parseInt(document.getElementById('cakedonuts').value);
  var glazedDonuts = parseInt(document.getElementById('glazeddonuts').value);
  //якщо користувач не ввів дані
  if (isNaN(cakeDonuts)) {
    cakeDonuts = 0;
  }
  if (isNaN(glazedDonuts)) {
    glazedDonuts = 0;
  }
  //розрахунки вартості печива
  var subTotal = (cakeDonuts + glazedDonuts) * DONATPRICE;
  var tax = subTotal * TAXRATE;
  var total = tax + subTotal;
  //виводимо вартість користувачу
  document.getElementById('subtotal').value = "$" + subTotal.toFixed(2);
  document.getElementById('tax').value = "$" + tax.toFixed(2);
  document.getElementById('total').value = "$" + total.toFixed(2);
  console.log(total);
}
updateOrder();

//order name
function placeOrder(){
  var userName = document.getElementById('user_name').value;
  var minutesPickup = document.getElementById('minute').value;
  if (userName === "") {
    alert ("Вибачте, ви повинні ввести ваше ім'я");
  }
  else if (minutesPickup === "") {
    alert ("Вибачте, ви повинні ввести час замовлення");
  }
  else {
    form.submit();
  }
  console.log(userName);
}
placeOrder();