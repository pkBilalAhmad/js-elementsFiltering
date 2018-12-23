
function showItem(argument) {
    let items = document.getElementById('row')
    let all = items.getElementsByTagName('div')
    let users = items.getElementsByClassName('user');
    let cars = items.getElementsByClassName('car');
    let buses = items.getElementsByClassName('bus');
    let bikes = items.getElementsByClassName('bick');
    if (argument === 'users') {
        for (var i = 0; i < all.length; i++) {
            all[i].style.display = 'none'
        }
        for (var i = 0; i < cars.length; i++) {
            users[i].style.display = ''
        }
    } if (argument === 'cars') {
        for (var i = 0; i < all.length; i++) {
            all[i].style.display = 'none'
        }
        for (var i = 0; i < cars.length; i++) {
            cars[i].style.display = ''
        }
    } if (argument === 'buses') {
        for (var i = 0; i < all.length; i++) {
            all[i].style.display = 'none'
        }
        for (var i = 0; i < cars.length; i++) {
            buses[i].style.display = ''
        }
    } if (argument === 'bickes') {
        for (var i = 0; i < all.length; i++) {
            all[i].style.display = 'none'
        }
        for (var i = 0; i < cars.length; i++) {
            bikes[i].style.display = ''
        }
    }
    if (argument === 'all') {
        for (var i = 0; i < all.length; i++) {
            all[i].style.display = ''
        }
    }
    // switch(argument){
    //     case 'CARS' :

    // }
    // for (let i = 0; i < itemList.length; i++) {
    //     if (argumet === 'ALL') {
    //         itemList[i].style.display = ''
    //     } if (argumet === 'CARS') {

    //     } if (argumet === 'ALL') {

    //     } if (argumet === 'ALL') {

    //     } if (argumet === 'ALL') {

    //     }
    // console.log(argument)
}





// filterSelection("all")
// function filterSelection(c) {
//     var x, i;
//     x = document.getElementsByClassName("filterDiv");
//     if (c == "all") c = "";
//     // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
//     for (i = 0; i < x.length; i++) {
//         w3RemoveClass(x[i], "show");
//         if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
//     }
// }

// // Show filtered elements
// function w3AddClass(element, name) {
//     var i, arr1, arr2;
//     arr1 = element.className.split(" ");
//     arr2 = name.split(" ");
//     for (i = 0; i < arr2.length; i++) {
//         if (arr1.indexOf(arr2[i]) == -1) {
//             element.className += " " + arr2[i];
//         }
//     }
// }

// // Hide elements that are not selected
// function w3RemoveClass(element, name) {
//     var i, arr1, arr2;
//     arr1 = element.className.split(" ");
//     arr2 = name.split(" ");
//     for (i = 0; i < arr2.length; i++) {
//         while (arr1.indexOf(arr2[i]) > -1) {
//             arr1.splice(arr1.indexOf(arr2[i]), 1);
//         }
//     }
//     element.className = arr1.join(" ");
// }

// // Add active class to the current control button (highlight it)
// var btnContainer = document.getElementById("myBtnContainer");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function () {
//         var current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//     });
// }

