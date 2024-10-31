// Dashboard Statistics
const dashboardStats = {
    employees: 0,
    positions: 0,
    divisions: 0
};

const employees = [];
const positions = [];
const divisions = [];

document.addEventListener("DOMContentLoaded", () => {
    // Initial load
    updateDashboardUI();
    showSection("dashboard");

    // Set up navigation
    document.querySelectorAll(".sidebar .nav-link").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const section = e.target.getAttribute("href").substring(1);
            showSection(section);
        });
    });
});

function showSection(section) {
    document.querySelectorAll(".content-section").forEach(sec => {
        sec.classList.remove("active");
    });
    document.getElementById(section).classList.add("active");
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function addEmployee() {
    const employee = {
        id: Date.now().toString(),
        name: document.getElementById("employeeName").value,
        position: document.getElementById("employeePosition").value,
        division: document.getElementById("employeeDivision").value,
        email: document.getElementById("employeeEmail").value,
    };
    
    employees.push(employee);
    updateEmployeeTable();
    closeModal("employeeModal");
    updateDashboardUI();
}

function updateEmployeeTable() {
    const tbody = document.getElementById("employeeTableBody");
    tbody.innerHTML = employees.map(emp => `
        <tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.position}</td>
            <td>${emp.division}</td>
            <td>${emp.email}</td>
            <td><button onclick="deleteEmployee('${emp.id}')" class="btn btn-danger btn-sm">Delete</button></td>
        </tr>`).join("");
}

function updateDashboardUI() {
    dashboardStats.employees = employees.length; // Update total employees
    document.getElementById("dashboard-stats").innerHTML = `
        <div class="col">
            <div class="card">
                <div class="card-body">Total Employees: ${dashboardStats.employees}</div>
            </div>
        </div>`;
}

function deleteEmployee(id) {
    const index = employees.findIndex(emp => emp.id === id);
    if (index > -1) {
        employees.splice(index, 1);
        updateEmployeeTable();
        updateDashboardUI();
    }
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}