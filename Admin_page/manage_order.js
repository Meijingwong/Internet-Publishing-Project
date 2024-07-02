
function redirectTomainPage() {
        window.location.href = "admin_dashboard.html";
    }

var selectedRow = null;

function redirectTomainPage() {
    window.location.href = "admin_dashboard.html";
}


 

        function deleteRows() {
            const confirmation = prompt("Are you sure you want to delete the selected order?", "delete");
            if (confirmation) {
                const checkboxes = document.querySelectorAll('tbody input[type="checkbox"]:checked');
                checkboxes.forEach(checkbox => {
                    const row = checkbox.closest('tr');
                    row.remove();
                });
            }
        }
		
