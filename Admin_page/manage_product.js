 function redirectTomainPage() {
        // Change the URL to the desired destination
        window.location.href = "admin_dashboard.html";
    }

var selectedRow = null;

function redirectTomainPage() {
    window.location.href = "admin_dashboard.html";
}

// Function to handle form submission
function onFormSubmit(event) {
    event.preventDefault();
    var formData = readFormData(function(formData) {
        if (selectedRow === null) {
            insertNewRecord(formData);
        } else {
            updateRecord(formData);
        }
        saveProductData(); // Save product data after submitting form
    });
}

// Function to read form data
function readFormData(callback) {
    var formData = {};
    formData["productCode"] = document.getElementById("productCode").value;
    formData["productName"] = document.getElementById("productName").value;
    formData["qty"] = document.getElementById("qty").value;
    formData["perPrice"] = document.getElementById("perPrice").value;

    var productImageInput = document.getElementById("productImage");
    if (productImageInput.files.length > 0) {
        var reader = new FileReader();
        reader.onload = function(e) {
            formData["productImage"] = e.target.result;
            callback(formData);
        }
        reader.readAsDataURL(productImageInput.files[0]);
    } else {
        formData["productImage"] = "";
        callback(formData);
    }
}

// Function to insert a new record
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.productCode;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.productName;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.qty;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.perPrice;
    var cell5 = newRow.insertCell(4);

    var imgElement = document.createElement("img");
    imgElement.src = data.productImage;
    imgElement.style.width = "50px";
    imgElement.style.height = "50px";
    cell5.appendChild(imgElement);

    var cell6 = newRow.insertCell(5);

    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function() {
        onEdit(newRow);
    });

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
        onDelete(newRow);
    });

    cell6.appendChild(editButton);
    cell6.appendChild(deleteButton);
}

// Function to handle editing a record
function onEdit(row) {
    selectedRow = row;
    document.getElementById("productCode").value = row.cells[0].innerHTML;
    document.getElementById("productName").value = row.cells[1].innerHTML;
    document.getElementById("qty").value = row.cells[2].innerHTML;
    document.getElementById("perPrice").value = row.cells[3].innerHTML;
    // For simplicity, not handling the image update in this example
}

// Function to update a record
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.productCode;
    selectedRow.cells[1].innerHTML = formData.productName;
    selectedRow.cells[2].innerHTML = formData.qty;
    selectedRow.cells[3].innerHTML = formData.perPrice;
    selectedRow.cells[4].innerHTML = "";

    var imgElement = document.createElement("img");
    imgElement.src = formData.productImage;
    imgElement.style.width = "50px";
    imgElement.style.height = "50px";
    selectedRow.cells[4].appendChild(imgElement);

    selectedRow = null;
}

// Function to handle deleting a record
function onDelete(row) {
    if (confirm("Are you sure you want to delete this record?")) {
        var index = row.rowIndex;
        document.getElementById("storeList").deleteRow(index);
        saveProductData(); // Save product data after deleting record
    }
}

// Function to save product data to localStorage
function saveProductData() {
    var table = document.getElementById("storeList");
    var data = [];
    for (var i = 1; i < table.rows.length; i++) {
        var rowData = {
            productCode: table.rows[i].cells[0].innerHTML,
            productName: table.rows[i].cells[1].innerHTML,
            qty: table.rows[i].cells[2].innerHTML,
            perPrice: table.rows[i].cells[3].innerHTML,
            productImage: table.rows[i].cells[4].children[0].src
        };
        data.push(rowData);
    }
    localStorage.setItem("productData", JSON.stringify(data));
}

// Function to load product data from localStorage
function loadProductData() {
    var data = localStorage.getItem("productData");
    if (data) {
        data = JSON.parse(data);
        for (var i = 0; i < data.length; i++) {
            insertNewRecord(data[i]);
        }
    }
}

// Call loadProductData when the page loads
window.onload = function() {
    loadProductData();
};
