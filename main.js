 // Theme Toggle
        const themeToggle = document.getElementById('themeToggle');
        const themeText = document.getElementById('themeText');
        const themeIcon = document.getElementById('themeIcon');
        const html = document.documentElement;
        
        // Check if localStorage is available
        let storageAvailable = false;
        try {
            if (typeof(Storage) !== "undefined") {
                storageAvailable = true;
            }
        } catch (e) {
            storageAvailable = false;
        }
        
        // Load saved theme or default to light
        let currentTheme = 'light';
        if (storageAvailable) {
            currentTheme = localStorage.getItem('theme') || 'light';
        }
        
        if (currentTheme === 'dark') {
            html.setAttribute('data-bs-theme', 'dark');
            themeText.textContent = 'Dark Mode';
            themeIcon.className = 'bi bi-moon-fill me-2';
        } else {
            themeText.textContent = 'Light Mode';
            themeIcon.className = 'bi bi-sun-fill me-2';
        }
        
        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-bs-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            html.setAttribute('data-bs-theme', newTheme);
            if (storageAvailable) {
                localStorage.setItem('theme', newTheme);
            }
            
            if (newTheme === 'dark') {
                themeText.textContent = 'Dark Mode';
                themeIcon.className = 'bi bi-moon-fill me-2';
            } else {
                themeText.textContent = 'Light Mode';
                themeIcon.className = 'bi bi-sun-fill me-2';
            }
        });

        // Font Size Settings
        const fontSizeSelect = document.getElementById('fontSize');
        const body = document.body;

        // Load saved font size or default to medium
        let currentFontSize = 'fs-5';
        if (storageAvailable) {
            currentFontSize = localStorage.getItem('fontSize') || 'fs-5';
        }
        body.classList.add(currentFontSize);
        fontSizeSelect.value = currentFontSize;

        fontSizeSelect.addEventListener('change', () => {
            const newFontSize = fontSizeSelect.value;
            
            // Remove all font size classes
            body.classList.remove('fs-4', 'fs-5', 'fs-6');
            
            // Add the selected class
            body.classList.add(newFontSize);
            
            if (storageAvailable) {
                localStorage.setItem('fontSize', newFontSize);
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });