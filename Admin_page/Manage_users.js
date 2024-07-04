document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('user-btn').addEventListener('click',function() {
        const table = document.getElementById('user-table').getElementsByTagName('tbody')[0];
        const rowCount = table.rows.length + 1;
        const newRow = table.insertRow();

        const name = prompt('Enter Your Name   : ');
        const mail = prompt('Enter Your E-mail : ');

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);
        const cell6 = newRow.insertCell(5);

        if (name && mail) {
            cell1.innerHTML = `#100${rowCount}`;

            cell2.innerHTML = `
                <div class="user">
                    <div class="user-img bg-img" style="background-image: url(image/guest.png);"></div>
                    <div class="user-info">
                        <h4>${name}</h4>
                        <a href="mailto:${mail}"><small>${mail}</small></a>
                    </div>
                </div>
                `;

            cell3.classList.add('active');
            cell3.innerHTML = 'Active';

            cell4.innerHTML = `${new Date().toLocaleString()}`;
            cell5.innerHTML = 'Just now';
            cell6.innerHTML = `
                <div class="actions">
                    <button class="lab la-telegram-plane"></button>
                    <button class="las la-eye"></button>
                    <button class="las la-ellipsis-v"></button>
                </div>
            `;
        } else {
            alert('All fields are required!');
        }
    });
});