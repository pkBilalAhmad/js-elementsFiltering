function myFunction() {
    let input = document.getElementById('myInput');
    let value = input.value.toUpperCase()
    let table = document.getElementById('myTable')
    let tr = table.querySelectorAll('.tr')
    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[1]
        let tdValue = td.textContent;
        if (tdValue.toLocaleUpperCase().indexOf(value) > -1) {
            tr[i].style.display = ''
        }else{
            tr[i].style.display = 'none'
        }
    }


    console.log(tr)

}

