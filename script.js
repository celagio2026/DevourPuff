let accordion = document.querySelectorAll('.faq .accordion-container .accordion');

accordion.forEach(acco => {
    acco.onclick = () => {
        accordion.forEach(remove => remove.classList.remove('active'));
        acco.classList.add('active');
    }
});

/* menu */
var a = 0, b = 0, c = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, foodname = 0, foodprice =0, totalfoodprice = 0, foodcart = [];
function formSubmit() {
    while (a > 0) {
        var foodcart1 = {
            foodname: "Italian Carbonara",
            foodprice: 320,
        }
        foodcart.push(foodcart1);
        a--;
    }
    while (b > 0) {
        var foodcart2 = {
            foodname: "Spaghetti Bolognese",
            foodprice: 370,
        }
        foodcart.push(foodcart2);
        b--;
    }
    while (c > 0) {
        var foodcart3 = {
            foodname: "Chicken Ravioli",
            foodprice: 370,
        }
        foodcart.push(foodcart3);
        c--;
    }
    while (d > 0) {
        var foodcart4 = {
            foodname: "Lasagna",
            foodprice: 350,
        }
        foodcart.push(foodcart4);
        d--;
    }
    while (e > 0) {
        var foodcart5 = {
            foodname: "Beef Stroganoff",
            foodprice: 400,
        }
        foodcart.push(foodcart5);
        e--;
    }
    while (f > 0) {
        var foodcart6 = {
            foodname: "Chicken Alfredo",
            foodprice: 370,
        }
        foodcart.push(foodcart6);
        f--;
    }
    while (g > 0) {
        var foodcart7 = {
            foodname: "Cinnamon Roll",
            foodprice: 125,
        }
        foodcart.push(foodcart7);
        g--;
    }
    while (h > 0) {
        var foodcart8 = {
            foodname: "Mini Tiramisu",
            foodprice: 235,
        }
        foodcart.push(foodcart8);
        h--;
    }
    while (i > 0) {
        var foodcart9 = {
            foodname: "Butter Croissant",
            foodprice: 115,
        }
        foodcart.push(foodcart9);
        i--;
    }
    while (j > 0) {
        var foodcart10 = {
            foodname: "Iced Shaken Dragon Tea",
            foodprice: 195,
        }
        foodcart.push(foodcart10);
        j--;
    }
    while (k > 0) {
        var foodcart11 = {
            foodname: "Pistachio Cream Frapuccino",
            foodprice: 265,
        }
        foodcart.push(foodcart11);
        k--;
    }
    while (l > 0) {
        var foodcart12 = {
            foodname: "Spanish Latte",
            foodprice: 225,
        }
        foodcart.push(foodcart12);
        l--;
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
        foodprice = 370;
        totalfoodprice = totalfoodprice + 370;
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
    if (x == 10) {
        j++;
        document.getElementById("food" + x + "num").innerHTML = j;
        foodname = "Iced Shaken Dragon Tea";
        foodprice = 195;
        totalfoodprice = totalfoodprice + 195;
        fooditemandprice.className = "food10";
    }
    if (x == 11) {
        k++;
        document.getElementById("food" + x + "num").innerHTML = k;
        foodname = "Pistachio Cream Frapuccino";
        foodprice = 265;
        totalfoodprice = totalfoodprice + 265;
        fooditemandprice.className = "food11";
    }
    if (x == 12) {
        l++;
        document.getElementById("food" + x + "num").innerHTML = l;
        foodname = "Spanish Latte";
        foodprice = 225;
        totalfoodprice = totalfoodprice + 225;
        fooditemandprice.className = "food12";
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
    if (x == 10 && j > 0) {
        j--;
        document.getElementById("food" + x + "num").innerHTML = j;
        totalfoodprice = totalfoodprice - 195;
        const foodj = document.getElementsByClassName("food10");
        foodj[0].remove();
    }
    if (x == 11 && k > 0) {
        k--;
        document.getElementById("food" + x + "num").innerHTML = k;
        totalfoodprice = totalfoodprice - 265;
        const foodk = document.getElementsByClassName("food11");
        foodk[0].remove();
    }
    if (x == 12 && l > 0) {
        l--;
        document.getElementById("food" + x + "num").innerHTML = l;
        totalfoodprice = totalfoodprice - 225;
        const foodl = document.getElementsByClassName("food12");
        foodl[0].remove();
    }
    document.getElementById("totalprice").innerHTML = "₱" + totalfoodprice;
}