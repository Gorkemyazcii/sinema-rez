const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');
const seats = document.querySelectorAll('.seat:not(.reserved)')


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
    const selectedSeats = container.querySelectorAll('.seat.selected');

    const selecetedSeatsArr = [];
    const seatsArr = [];

    selectedSeats.forEach(function(seat){
        selecetedSeatsArr.push(seat);
    });

    seats.forEach(function(seat){
        seatsArr.push(seat);
    });

    let selectedSeatIndexs = selecetedSeatsArr.map(function(seat){
        return seatsArr.indexOf(seat);
    });

    console.log(selectedSeatIndexs);



    let selectedSeatCount = selectedSeats.length;
    //console.log(selectedSeatCount);
    //console.log(selectedSeats);
    //console.log(seats);

    let price = select.value;
    count.innerText=selectedSeatCount;
    amount.innerText = selectedSeatCount *price;

    saveToLocalStorage(selectedSeatIndexs);

}

function saveToLocalStorage(indexs){
    localStorage.setItem('selectedSeats',JSON.stringify(indexs));
    localStorage.setItem('selectedMovieIndex',select.selectedIndex);
}
