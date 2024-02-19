const seats = document.querySelectorAll('.seat');

let count = 1;
let totalPrice = 550;
let isSeatSelected = false;
let count1 = 0;


    for(const seat of seats){
        seat.addEventListener('click', function(e){
            if(count1 <= 3){
                
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
                
                count1++;
            }
            else{alert('Maximum seat booked')}
        })
    }


// coupon section

document.getElementById('btn-coupon').addEventListener('click', function(){
    
    const coupon = document.getElementById('input-field').value;

    if(coupon === 'NEW15'){
        document.getElementById('grand-total').innerText = (totalPrice-550)*0.85;
        document.getElementById('coupon-hide').classList.add('hidden');
    }
    else if (coupon === 'Couple 20'){
        document.getElementById('grand-total').innerText = (totalPrice-550)*0.80;
        document.getElementById('coupon-hide').classList.add('hidden');
    }
    else{
        alert('Please insert valid coupon');
    }
})

// modal button reload

document.getElementById('btn-modal').addEventListener('click', function(){
    window.location.reload()
})

