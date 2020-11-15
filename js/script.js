window.onload = function() {



    let bur1 = "a";
    let bur2 = "a1";
    let bur = "";

    let flag__1 = "b";
    let flag__2 = "b1";
    let flag = "";

    let heart__1 = "c";
    let heart__2 = "c1";
    let heart = "";

    let pizza__1 = "d";
    let pizza__2 = "d1";
    let pizza = "";





    let burger1 = document.getElementById("burger_1");
    burger1.addEventListener("click", function(event1) {
        burger1.src = "./pictures/burger.jpg";
        bur += bur1;
        if (bur == "a1a") {
            alert("You matched burgers!");
            burger2.src = "./pictures/check.jpg";
            burger1.src = "./pictures/check.jpg";
        } else if (bur == "aa1") {
            alert("You matched burgers!");
            burger1.src = "./pictures/check.jpg";
            burger2.src = "./pictures/check.jpg";
        }
    })
    let burger2 = document.getElementById("burger_2");
    burger2.addEventListener("click", function(event2) {
        burger2.src = "./pictures/burger.jpg";
        bur += bur2;
        if (bur == "a1a") {
            alert("You matched  burgers!");
            burger2.src = "./pictures/check.jpg";
            burger1.src = "./pictures/check.jpg";
        } else if (bur == "aa1") {
            alert("You matched  burgers!");
            burger1.src = "./pictures/check.jpg";
            burger2.src = "./pictures/check.jpg";
        }
    })
    let flag1 = document.getElementById("flag_1");
    flag1.addEventListener("click", function(event3) {
        flag1.src = "./pictures/gbr_flag.jpg";
        flag += flag__1;
        if (flag == "b1b") {
            alert("You matched flags!");
            flag1.src = "./pictures/check.jpg";
            flag2.src = "./pictures/check.jpg";
        } else if (flag == "bb1") {
            alert("You matched flags!");
            flag1.src = "./pictures/check.jpg";
            flag2.src = "./pictures/check.jpg";
        }

    })

    let flag2 = document.getElementById("flag_2");
    flag2.addEventListener("click", function(event4) {
        flag2.src = "./pictures/gbr_flag.jpg";
        flag += flag__2;
        if (flag == "b1b") {
            alert("You matched flags!");
            flag1.src = "./pictures/check.jpg";
            flag2.src = "./pictures/check.jpg";
        } else if (flag == "bb1") {
            alert("You matched flags!");
            flag1.src = "./pictures/check.jpg";
            flag2.src = "./pictures/check.jpg";
        }

    })
    let heart1 = document.getElementById("heart_1");
    heart1.addEventListener("click", function(event5) {
        heart1.src = "./pictures/heart.png";
        heart += heart__1;
        if (heart == "c1c") {
            alert("You matched hearts!");
            heart1.src = "./pictures/check.jpg";
            heart2.src = "./pictures/check.jpg";
        } else if (heart == "cc1") {
            alert("You matched hearts!");
            heart1.src = "./pictures/check.jpg";
            heart2.src = "./pictures/check.jpg";
        }
    })
    let heart2 = document.getElementById("heart_2");
    heart2.addEventListener("click", function(event6) {
        heart2.src = "./pictures/heart.png";
        heart += heart__2;
        if (heart == "c1c") {
            alert("You matched hearts!");
            heart1.src = "./pictures/check.jpg";
            heart2.src = "./pictures/check.jpg";
        } else if (heart == "cc1") {
            alert("You matched hearts!");
            heart1.src = "./pictures/check.jpg";
            heart2.src = "./pictures/check.jpg";
        }
    })
    let pizza1 = document.getElementById("pizza_1");
    pizza1.addEventListener("click", function(event7) {
        pizza1.src = "./pictures/pizza.jpg";
        pizza += pizza__1;
        if (pizza == "d1d") {
            alert("You matched pizzas!");
            pizza1.src = "./pictures/check.jpg";
            pizza2.src = "./pictures/check.jpg";
        } else if (pizza == "dd1") {
            alert("You matched pizzas!");
            pizza1.src = "./pictures/check.jpg";
            pizza2.src = "./pictures/check.jpg";
        }
    })
    let pizza2 = document.getElementById("pizza_2");
    pizza2.addEventListener("click", function(event8) {
        pizza2.src = "./pictures/pizza.jpg";
        pizza += pizza__2;
        if (pizza == "d1d") {
            alert("You matched pizzas!");
            pizza1.src = "./pictures/check.jpg";
            pizza2.src = "./pictures/check.jpg";
        } else if (pizza == "dd1") {
            alert("You matched pizzas!");
            pizza1.src = "./pictures/check.jpg";
            pizza2.src = "./pictures/check.jpg";
        }
    })
    let star = document.getElementById("star");
    star.addEventListener("click", function(event9) {
        star.src = "./pictures/star.jpg";
        alert("You got 100 point. Keep it up");
    })
    let last = document.getElementById("finish_btn");
    last.addEventListener("click", function(event10) {
        let answer = prompt("Did you like that ('yes' or 'no')")

        switch (answer) {
            case ("yes"):
                {
                    alert("Thank you!");
                }
                break;
            case ("no"):
                {
                    alert("Whyy?");
                }
                break;
            default:
                {
                    alert("I said 'yes' or 'no'. Ok bye!")
                }
        }
    })

}