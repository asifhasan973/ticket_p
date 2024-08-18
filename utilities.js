function totalSeatIncrease() {
  let num = parseInt(document.getElementById('total-seat').innerText);
  document.getElementById('total-seat').innerText = ++num;
  document.getElementById('available-seat').innerText =
    parseInt(document.getElementById('available-seat').innerText) - 1;
  //   price count
  document.getElementById('total-price').innerText = num * 550;
  document.getElementById('grand-total').innerText = num * 550;
}
function giveError() {
  document.getElementById('more-buy-error').classList.remove('hidden');
}
function showSeats(s) {
  let newSeat = document.createElement('tr');
  newSeat.innerHTML = `
        <th>${document.getElementById('total-seat').innerText}</th>
        <td>${s}</td>
        <td>Economy</td>
        <td>550</td>
    `;
  document.getElementById('seats-container').appendChild(newSeat);
}
function keepColor(s) {
  document.getElementById(s).classList.add('bg-[#1dd100]');
  document.getElementById(s).classList.add('text-white');
  document.getElementById(s).classList.add('border-0');
}
