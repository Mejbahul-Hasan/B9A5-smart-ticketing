const seats = document.querySelectorAll('.seat');

let count = 1;
let totalPrice = 550;

if(count <= 4){
    for(const seat of seats){
        seat.addEventListener('click', function(e){
            seatColor = seat.classList.add('bg-green-500');
    
            const seatNo = e.target.innerText;
            const p1 = document.createElement('p');
            p1.innerText = seatNo;
            const containerSeat = document.getElementById('container-seat');
            containerSeat.appendChild(p1);

            const p2 = document.createElement('p')
            p2.innerText = 'Economy'
            const containerClass = document.getElementById('container-class')
            containerClass.appendChild(p2)

            const p3 = document.createElement('p')
            p3.innerText = '550'
            const containerPrice = document.getElementById('container-price')
            containerPrice.appendChild(p3)
            
    
            document.getElementById('seat-count').innerText = count;
            document.getElementById('seat-left').innerText = 8-count;
            count++,
    
            document.getElementById('total-price').innerText = totalPrice;
            document.getElementById('grand-total').innerText = totalPrice;
            totalPrice += 550;
        })
    }
}
else{
    seats.removeEventListener('click', function(){});
}


document.getElementById('btn-coupon').addEventListener('click', function(){
    
    const coupon = document.getElementById('input-field').value;

    if(coupon === 'NEW15'){
        document.getElementById('grand-total').innerText = (totalPrice-550)*0.85
    }
    else if (coupon === 'Couple 20'){
        document.getElementById('grand-total').innerText = (totalPrice-550)*0.80
    }
    else{
        alert('Please insert valid coupon')
    }
})

