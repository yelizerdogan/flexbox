
let text1 = "Yeliz ERDOĞAN"
let text2 = "yelzzerdogan @gmail.com"
let text3 = "0507-194-14-01"


document.addEventListener('DOMContentLoaded', function () {
    let container = document.getElementsByClassName('box-container')[0];
    let maxBoxCount = 12
    for (let i = 0; i < maxBoxCount/3; i++) {
        container.innerHTML +=
            '<div class="box-row">'
            + '<div id="l-b-'+i+'" class="left-side" onclick="RemoveBox(this.id)">'+text1+'</div>'
            + '<div id="m-b-'+i+'" class="middle" onclick="RemoveBox(this.id)">'+text2+'</div>'
            + '<div id="r-b-'+i+'" class="right-side" onclick="RemoveBox(this.id)">'+text3+'</div>'
            + '</div>'
    }

}, false);

let init_rowcount = 3;
let init_boxcount = 2;
function RemoveBox(id){
    let dom = document.getElementsByClassName('box-row');
    let hidden_row_count = 0;
    for (let i = 0; i < dom.length; i++) {
       if(dom[i].style.display=='none'){
           hidden_row_count++;
       }
    }

    let box_row = dom[init_rowcount-hidden_row_count];

    let divs = box_row.getElementsByTagName('div');
    let hidden_item_count = 0;
    for (let i = 0; i < divs.length; i++) {
        if (divs[i].style.visibility=='hidden') {
            hidden_item_count++;
        }
    }
    divs[init_boxcount-hidden_item_count].style.visibility = 'hidden';
    if(hidden_item_count==init_boxcount){
        box_row.style.display = 'none';
    }
}

function ResetBoxes(){
    let container = document.getElementsByClassName('box-container')[0];
    container.innerHTML = "";
    let maxBoxCount = 12
    for (let i = 0; i < maxBoxCount/3; i++) {
        container.innerHTML +=
        '<div class="box-row">'
        + '<div id="l-b-'+i+'" class="left-side" onclick="RemoveBox(this.id)">'+text1+'</div>'
        + '<div id="m-b-'+i+'" class="middle" onclick="RemoveBox(this.id)">'+text2+'</div>'
        + '<div id="r-b-'+i+'" class="right-side" onclick="RemoveBox(this.id)">'+text3+'</div>'
        + '</div>'
    }
}
