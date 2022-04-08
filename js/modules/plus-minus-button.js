function add_substract1 () {

    let total_element = document.getElementById('total1');

    function add () {
        let total_value = parseInt(total_element.innerHTML);
        total_element.innerHTML = total_value + 1;
    }
    
    
    function substract () {
        let total_value = parseInt(total_element.innerHTML);
        if (total_value == 0) return;
        total_element.innerHTML = total_value - 1;
    }

    document.getElementById('add1').addEventListener('click', add);

    document.getElementById('substract1').addEventListener('click', substract);

}

function add_substract2 () {

    let total_element2 = document.getElementById('total2');

    function add2 () {
        let total_value2 = parseInt(total_element2.innerHTML);
        total_element2.innerHTML = total_value2 + 1;
    }
    
    
    function substract2 () {
        let total_value2 = parseInt(total_element2.innerHTML);
        if (total_value2 == 0) return;
        total_element2.innerHTML = total_value2 - 1;
    }

    document.getElementById('add2').addEventListener('click', add2);

    document.getElementById('substract2').addEventListener('click', substract2);

}

function add_substract3 () {

    let total_element = document.getElementById('total3');

    function add () {
        let total_value = parseInt(total_element.innerHTML);
        total_element.innerHTML = total_value + 1;
    }
    
    
    function substract () {
        let total_value = parseInt(total_element.innerHTML);
        if (total_value == 0) return;
        total_element.innerHTML = total_value - 1;
    }

    document.getElementById('add3').addEventListener('click', add);

    document.getElementById('substract3').addEventListener('click', substract);

}



export {add_substract1} ;
export {add_substract2} ;
export {add_substract3} ;

