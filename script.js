document.addEventListener('DOMContentLoaded', function() {
    // Load default page (dashboard)
    loadPage('dashboard');

    // Add click event listeners to all sidebar links
    document.querySelectorAll('.sidebar-menu a[data-page]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            document.querySelectorAll('.sidebar-menu a').forEach(a => {
                a.classList.remove('active');
            });
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Load the requested page
            loadPage(this.dataset.page);
        });
    });
});

function loadPage(pageName) {
    const mainContent = document.getElementById('main-content');
    
    // Load the content for the requested page
    fetch(`pages/${pageName}.html`)
        .then(response => response.text())
        .then(html => {
            mainContent.innerHTML = html;
            // Initialize any page-specific JavaScript
            initPageScripts(pageName);
        })
        .catch(error => {
            console.error('Error loading page:', error);
            mainContent.innerHTML = '<div class="error">Error loading page content</div>';
        });
}

function initPageScripts(pageName) {
    switch(pageName) {
        case 'karyawan':
            initKaryawanPage();
            break;
        case 'absensi':
            initAbsensiPage();
            break;
        // Add other page initializations as needed
    }
}

function initKaryawanPage() {
    // Initialize karyawan page specific functionality
    const tambahBtn = document.querySelector('.btn');
    if (tambahBtn) {
        tambahBtn.addEventListener('click', function() {
            alert('Tambah karyawan clicked!');
            // Add your tambah karyawan logic here
        });
    }
}

function initAbsensiPage() {
    // Initialize absensi page specific functionality
    const datePicker = document.getElementById('attendance-date');
    if (datePicker) {
        datePicker.valueAsDate = new Date();
        datePicker.addEventListener('change', function() {
            // Add your date change logic here
            console.log('Selected date:', this.value);
        });
    }
} 