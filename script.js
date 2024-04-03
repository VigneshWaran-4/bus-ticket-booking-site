document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;

    // Assuming busData is a placeholder for fetched bus details
    const busData = [
        { id: 1, from: 'City A', to: 'City B', date: '2024-04-03', availableSeats: 20 },
        { id: 2, from: 'City B', to: 'City C', date: '2024-04-03', availableSeats: 15 }
        // Add more bus data as needed
    ];

    // Filter buses based on user inputs
    const filteredBuses = busData.filter(bus => bus.from === from && bus.to === to && bus.date === date);

    displayBuses(filteredBuses);
});

function displayBuses(buses) {
    const busList = document.getElementById('busList');
    busList.innerHTML = ''; // Clear previous results

    if (buses.length === 0) {
        busList.innerHTML = '<p>No buses found for the selected criteria.</p>';
        return;
    }

    buses.forEach(bus => {
        const busItem = document.createElement('div');
        busItem.classList.add('bus-item');
        busItem.innerHTML = `
            <h3>Bus ${bus.id}</h3>
            <p>From: ${bus.from}</p>
            <p>To: ${bus.to}</p>
            <p>Date: ${bus.date}</p>
            <p>Available Seats: ${bus.availableSeats}</p>
            <button onclick="bookTicket(${bus.id})">Book Now</button>
        `;
        busList.appendChild(busItem);
    });
}

function bookTicket(busId) {
    // You can implement the booking process here
    alert(`Booking for Bus ${busId} is not implemented yet.`);
}
