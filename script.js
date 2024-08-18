let seatList = [];
document.getElementById('seat-number').addEventListener('click', (e) => {
  document.getElementById('hide-seat').style.display = 'none';
  document.getElementById('code-expire').classList.add('hidden');

  if (seatList.includes(e.target.innerText)) {
  } else if (document.getElementById('total-seat').innerText == '4')
    giveError();
  else if (e.target.innerText.length == 2) {
    seatList.push(e.target.innerText);
    totalSeatIncrease();
    showSeats(e.target.innerText);
    console.log(9821);

    keepColor(e.target.innerText);
  }
});

document.getElementById('apply-btn').addEventListener('click', () => {
  let text = document.getElementById('coupon-input').value;
  if (text === 'NEW15') {
    document.getElementById('grand-total').innerText = Math.round(
      parseInt(
        parseInt(document.getElementById('grand-total').innerText) * 0.85
      )
    );
  } else if (text === 'COUPLE20') {
    document.getElementById('grand-total').innerText = Math.round(
      parseInt(parseInt(document.getElementById('grand-total').innerText) * 0.8)
    );
  } else {
    document.getElementById('code-expire').classList.remove('hidden');
  }
  document.getElementById('coupon-input').value = '';
});

document.getElementById('phone').addEventListener('keyup', (e) => {
  if (
    e.target.value.length === 11 &&
    e.target.value[0] === '0' &&
    e.target.value[1] === '1'
  ) {
    document.getElementById('next-btn').removeAttribute('disabled');
  } else {
    document.getElementById('next-btn').setAttribute('disabled', true);
  }
});

document.getElementById('next-btn').addEventListener('click', () => {
  document.getElementById('phone').value = '';
  document.getElementById('next-btn').setAttribute('disabled', true);
});
