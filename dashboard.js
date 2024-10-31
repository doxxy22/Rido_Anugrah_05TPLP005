// Dashboard Statistics Object
const dashboardStats = {
    employees: {
        total: 0,
        active: 0,
        inactive: 0
    },
    positions: {
        total: 0
    },
    divisions: {
        total: 0
    }
};

// Load Dashboard Data with Async Function
async function loadDashboardData() {
    try {
        // Fetch data from backend or use placeholder data
        dashboardStats.employees = {
            total: 150,
            active: 142,
            inactive: 8
        };
        dashboardStats.positions.total = 12;
        dashboardStats.divisions.total = 8;

        // Update the dashboard UI with the loaded data
        updateDashboardUI();
    } catch (error) {
        console.error('Error loading dashboard data:', error);
    }
}

// Function to Update Dashboard UI with Data
function updateDashboardUI() {
    const statsContainer = document.getElementById('dashboard-stats');
    
    statsContainer.innerHTML = `
        <div class="col-md-3">
            <div class="card card-dashboard bg-gradient-primary text-white">
                <i class="bi bi-people stats-icon"></i>
                <div class="card-body">
                    <h6>Total Employees</h6>
                    <h2>${dashboardStats.employees.total}</h2>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card card-dashboard bg-gradient-success text-white">
                <i class="bi bi-briefcase stats-icon"></i>
                <div class="card-body">
                    <h6>Total Positions</h6>
                    <h2>${dashboardStats.positions.total}</h2>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card card-dashboard bg-gradient-info text-white">
                <i class="bi bi-diagram-3 stats-icon"></i>
                <div class="card-body">
                    <h6>Total Divisions</h6>
                    <h2>${dashboardStats.divisions.total}</h2>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card card-dashboard bg-gradient-warning text-white">
                <i class="bi bi-person-check stats-icon"></i>
                <div class="card-body">
                    <h6>Active Employees</h6>
                    <h2>${dashboardStats.employees.active}</h2>
                </div>
            </div>
        </div>
    `;
}

// Initialize Dashboard on Document Load
document.addEventListener('DOMContentLoaded', loadDashboardData);

// Placeholder for Chart Initialization
function initializeCharts() {
    // Chart initialization code can be added here if needed
}
