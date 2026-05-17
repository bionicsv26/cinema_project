const schemeSvg = document.querySelector('.scheme-svg');
const totalPriceTag = document.querySelector('.price-total');
let cost = 800;
let totalPrice = 0;
schemeSvg.addEventListener('click', (event) => {
    if (!event.target.classList.contains('seat-booked')) {
        event.target.classList.toggle('seat-active');
        let totalSeats = schemeSvg.querySelectorAll('.seat-active').length
        totalPrice = totalSeats * cost;
        totalPriceTag.textContent = totalPrice;
    }
});
