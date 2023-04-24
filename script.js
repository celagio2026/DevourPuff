let accordion = document.querySelectorAll('.faq .accordion-container .accordion');

accordion.forEach(acco =>{
   acco.onclick = () =>{
      accordion.forEach(remove => remove.classList.remove('active'));
      acco.classList.add('active');
   }
});

/* menu */
var a = 0, b = 0, c = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j=0, k=0, l=0, foodname = 0, foodprice = 0, totalfoodprice = 0, foodcart = [];
function formSubmit() {
    document.getElementById("restoname").value = "DevourPuff";
    while (a > 0) {
        var foodcartobject1 = {
        foodname: "Italian Carbonara",
        foodprice: 320,
        }
        foodcart.push(foodcartobject1);
        a--;
    }
    while (b > 0) {
        var foodcartobject2 = {
            foodname: "Spaghetti Bolognese",
            foodprice: 370,
        }
        foodcart.push(foodcartobject2);
        b--;
    }
    while (c > 0) {
        var foodcartobject3 = {
            foodname: "Chicken Ravioli",
            foodprice: 370,
        }
        foodcart.push(foodcartobject3);
        c--;
    }
    while (d > 0) {
        var foodcartobject4 = {
            foodname: "Lasagna",
            foodprice: 350,
        }
        foodcart.push(foodcartobject4);
        d--;
    }
    while (e > 0) {
        var foodcartobject5 = {
            foodname: "Beef Stroganoff",
            foodprice: 400,
        }
        foodcart.push(foodcartobject5);
        e--;
    }
    while (f > 0) {
        var foodcartobject6 = {
            foodname: "Chicken Alfredo",
            foodprice: 370,
        }
        foodcart.push(foodcartobject6);
        f--;
    }
    while (g > 0) {
        var foodcartobject7 = {
            foodname: "Cinnamon Roll",
            foodprice: 125,
        }
        foodcart.push(foodcartobject7);
        g--;
    }
    while (h > 0) {
        var foodcartobject8 = {
            foodname: "Mini Tiramisu",
            foodprice: 235,
        }
        foodcart.push(foodcartobject8);
        h--;
    }
    while (i > 0) {
        var foodcartobject9 = {
            foodname: "Butter Croissant",
            foodprice: 115,
        }
        foodcart.push(foodcartobject9);
        i--;
    }
    foodcartstring = JSON.stringify(foodcart);
    document.getElementById("foodcart").value = foodcartstring;

}
function add(x) {
    const divprice = document.createElement("div");
    const fooditemandprice = document.createElement("li");
    if (x == 1) {
        a++;
        document.getElementById("food" + x + "num").innerHTML = a;
        foodname = "Italian Carbonara";
        foodprice = 320;
        totalfoodprice = totalfoodprice + 320;
        fooditemandprice.className = "food1";
    }
    if (x == 2) {
        b++;
        document.getElementById("food" + x + "num").innerHTML = b;
        foodname = "Spaghetti Bolognese";
        foodprice = 370;
        totalfoodprice = totalfoodprice + 370;
        fooditemandprice.className = "food2";
    }
    if (x == 3) {
        c++;
        document.getElementById("food" + x + "num").innerHTML = c;
        foodname = "Chicken Ravioli";
        foodprice = 370;
        totalfoodprice = totalfoodprice + 370;
        fooditemandprice.className = "food3";
    }
    if (x == 4) {
        d++;
        document.getElementById("food" + x + "num").innerHTML = d;
        foodname = "Lasagna";
        foodprice = 350;
        totalfoodprice = totalfoodprice + 350;
        fooditemandprice.className = "food4";
    }
    if (x == 5) {
        e++;
        document.getElementById("food" + x + "num").innerHTML = e;
        foodname = "Beef Stroganoff";
        foodprice = 400;
        totalfoodprice = totalfoodprice + 400;
        fooditemandprice.className = "food5";
    }
    if (x == 6) {
        f++;
        document.getElementById("food" + x + "num").innerHTML = f;
        foodname = "Chicken Alfredo";
        foodprice = 350;
        totalfoodprice = totalfoodprice + 350;
        fooditemandprice.className = "food6";
    }
    if (x == 7) {
        g++;
        document.getElementById("food" + x + "num").innerHTML = g;
        foodname = "Cinnamon Roll";
        foodprice = 125;
        totalfoodprice = totalfoodprice + 125;
        fooditemandprice.className = "food7";
    }
    if (x == 8) {
        h++;
        document.getElementById("food" + x + "num").innerHTML = h;
        foodname = "Mini Tiramisu";
        foodprice = 235;
        totalfoodprice = totalfoodprice + 235;
        fooditemandprice.className = "food8";
    }
    if (x == 9) {
        i++;
        document.getElementById("food" + x + "num").innerHTML = i;
        foodname = "Butter Croissant";
        foodprice = 115;
        totalfoodprice = totalfoodprice + 115;
        fooditemandprice.className = "food9";
    }
    document.getElementById("totalprice").innerHTML = "₱" + totalfoodprice;
    const item = document.createTextNode(foodname);
    divprice.className = "foodprice";
    const price = document.createTextNode("₱" + foodprice);
    divprice.appendChild(price);
    fooditemandprice.appendChild(item);
    fooditemandprice.appendChild(divprice);
    document.getElementById("list").appendChild(fooditemandprice);
}
function subtract(x) {
    var y = 0;
    if (x == 1 && a > 0) {
        a--;
        document.getElementById("food" + x + "num").innerHTML = a;
        totalfoodprice = totalfoodprice - 320;
        const fooda = document.getElementsByClassName("food1");
        fooda[0].remove();
    }
    if (x == 2 && b > 0) {
        b--;
        document.getElementById("food" + x + "num").innerHTML = b;
        totalfoodprice = totalfoodprice - 370;
        const foodb = document.getElementsByClassName("food2");
        foodb[0].remove();
    }
    if (x == 3 && c > 0) {
        c--;
        document.getElementById("food" + x + "num").innerHTML = c;
        totalfoodprice = totalfoodprice - 370;
        const foodc = document.getElementsByClassName("food3");
        foodc[0].remove();
    }
    if (x == 4 && d > 0) {
        d--;
        document.getElementById("food" + x + "num").innerHTML = d;
        totalfoodprice = totalfoodprice - 350;
        const foodd = document.getElementsByClassName("food4");
        foodd[0].remove();
    }
    if (x == 5 && e > 0) {
        e--;
        document.getElementById("food" + x + "num").innerHTML = e;
        totalfoodprice = totalfoodprice - 400;
        const foode = document.getElementsByClassName("food5");
        foode[0].remove();
    }
    if (x == 6 && f > 0) {
        f--;
        document.getElementById("food" + x + "num").innerHTML = f;
        totalfoodprice = totalfoodprice - 370;
        const foodf = document.getElementsByClassName("food6");
        foodf[0].remove();
    }
    if (x == 7 && g > 0) {
        g--;
        document.getElementById("food" + x + "num").innerHTML = g;
        totalfoodprice = totalfoodprice - 125;
        const foodg = document.getElementsByClassName("food7");
        foodg[0].remove();
    }
    if (x == 8 && h > 0) {
        h--;
        document.getElementById("food" + x + "num").innerHTML = h;
        totalfoodprice = totalfoodprice - 235;
        const foodh = document.getElementsByClassName("food8");
        foodh[0].remove();
    }
    if (x == 9 && i > 0) {
        i--;
        document.getElementById("food" + x + "num").innerHTML = i;
        totalfoodprice = totalfoodprice - 115;
        const foodi = document.getElementsByClassName("food9");
        foodi[0].remove();
    }
    document.getElementById("totalprice").innerHTML = "₱" + totalfoodprice;
}
