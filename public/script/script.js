const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');


container.addEventListener('click', function(e){
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')){
        e.target.classList.toggle('selected');
        //console.log(e.target);
        calculateTotal()

      

    }
});

select.addEventListener('change', function(e) {
    calculateTotal()
})

function calculateTotal(){
    let selectedSeatCount = container.querySelectorAll('.seat.selected').length;
    //console.log(selectedSeatCount);
    let price = select.value;
    count.innerText=selectedSeatCount;
    amount.innerText = selectedSeatCount *price;
}
