const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');
const seats = document.querySelectorAll('.seat:not(.reserved)')

getFromLocalStorage();
calculateTotal();

// Container bölgesinde tıklama işlemi yapıldığında sadece seat classına sahip elementleri alırken reserved classı bulunduranları almayacak
container.addEventListener('click', function(e){
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')){
        // İçerisinde Selected classı bulunuyorsa classı siler yoksa ekler
        e.target.classList.toggle('selected');
        //console.log(e.target);
        calculateTotal()

      

    }
});

// Movie değiştiğinde (yani yeni film seçildiğinde) CalculateTotal() fonkisyonunu çağırır
select.addEventListener('change', function(e) {
    calculateTotal()
})

function calculateTotal(){
    // Containerde bulunan ve içerisinde hem seat hemde selected class ı olan elementleri selectedSeats değişkenine atar
    const selectedSeats = container.querySelectorAll('.seat.selected');

    // 2 array oluşturur
    const selecetedSeatsArr = [];
    const seatsArr = [];

    //seçili koltukları diziye ekler
    selectedSeats.forEach(function(seat){
        selecetedSeatsArr.push(seat);
    });

    // reserved class ı bulunanlar hariç tüm koltukları diziye ekler
    seats.forEach(function(seat){
        seatsArr.push(seat);
    });

    // Seçili koltukların index numarasını geriye döndürür
    let selectedSeatIndexs = selecetedSeatsArr.map(function(seat){
        return seatsArr.indexOf(seat);
    });

    //console.log(selectedSeatIndexs);


    // Seçili koltuk sayısını alır ve selectedSeatCount değişkenine atar
    let selectedSeatCount = selectedSeats.length;
    //console.log(selectedSeatCount);
    //console.log(selectedSeats);
    //console.log(seats);

    // Html içerisinde belirtilmiş olan Filmlerin fiyat bilgisinin bulunduğu value değerini alır ve price değişkeni içerisine atar
    let price = select.value;
    // Seçili koltuk sayısı ve Fiyat bilgisini sayfada göstermek için kullanılır
    count.innerText=selectedSeatCount;
    amount.innerText = selectedSeatCount *price;

    saveToLocalStorage(selectedSeatIndexs);

}

function getFromLocalStorage(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if(selectedSeats != null && selectedSeats.length > 0){
        seats.forEach(function(seat,index){
            if(selectedSeats.indexOf(index) > -1){
                seat.classList.add('selected');

            }
        })
    }

    if(selectedMovieIndex != null){
        select.selectedIndex = selectedMovieIndex;
    }
}

function saveToLocalStorage(indexs){
    localStorage.setItem('selectedSeats',JSON.stringify(indexs));
    localStorage.setItem('selectedMovieIndex',select.selectedIndex);
}

/*
    const divSeat = document.createElement('div');

    divSeat.className='seat selected bg-gray-500 h-5 w-5 m-1 rounded-md';
    //divRow.appendChild(divSeat);

for (let i = 0 ; i<8; i++){
    const divRow = document.createElement('div');
    divRow.className='flex row';
    
    container.appendChild(divRow);
}
*/
/*************************************************************/
/*
let reservedAdded = false; 
for (let i = 0; i < 8; i++) {
    const divRow = document.createElement('div');
    divRow.className = 'flex row';
    
    for (let j = 0; j < 8; j++) {
        const divSeat = document.createElement('div');
        divSeat.className = 'seat  bg-gray-500 h-5 w-5 m-1 rounded-md';
        if (j === 3 && !reservedAdded ) {
            divSeat.classList.add('reserved'); // Sadece bir kez, 3. sıradaki seat elementine reserved sınıfını ekler
            reservedAdded = true; // Bayrağı true yapın
        }
        divRow.appendChild(divSeat); // Her divSeat'i divRow'a ekleyin
    }
    
    
    container.appendChild(divRow); // Her divRow'u container'a ekleyin
}

console.log(container);
*/
