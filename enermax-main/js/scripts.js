document.addEventListener('DOMContentLoaded', () => {
    const brandStates = [
        {
            key: 'red',
            titleLeft: 'ENER',
            titleRight: 'MAX',
            image: 'images/Turbina_roja.png',
            primary: '#ef4444',
            secondary: '#f97316',
            tertiary: '#b91c1c'
        },
        {
            key: 'blue',
            titleLeft: 'HIDRO',
            titleRight: 'ALTO',
            image: 'images/Turbina_azul.png',
            primary: '#0b63f3',
            secondary: '#06b6d4',
            tertiary: '#1d4ed8'
        },
        {
            key: 'green',
            titleLeft: 'HIDRO',
            titleRight: 'RIENTE',
            image: 'images/Turbina_verde.png',
            primary: '#0f9f6f',
            secondary: '#22c55e',
            tertiary: '#15803d'
        }
    ];

    let colorState = 0;

    const root = document.documentElement;
    const sidebar = document.getElementById('sidebar');
    const toggleImageButton = document.getElementById('toggle-image');
    const turbineImage = document.getElementById('turbine-image');
    const titleLeft = document.getElementById('enermax-title-left');
    const titleRight = document.getElementById('enermax-title-right');
    const footerEner = document.getElementById('ener');
    const footerMax = document.getElementById('max');
    const menuToggle = document.getElementById('menu-toggle');
    const navItems = document.querySelectorAll('.nav-item');

    const applyBrandState = (state) => {
        root.style.setProperty('--accent-primary', state.primary);
        root.style.setProperty('--accent-secondary', state.secondary);
        root.style.setProperty('--accent-tertiary', state.tertiary);
        root.style.setProperty('--grad-main', `linear-gradient(160deg, ${state.primary} 0%, ${state.secondary} 100%)`);
        root.style.setProperty('--grad-card', `linear-gradient(135deg, ${state.primary}1f 0%, ${state.secondary}24 100%)`);

        titleLeft.textContent = state.titleLeft;
        titleRight.textContent = state.titleRight;
        footerEner.textContent = state.titleLeft;
        footerMax.textContent = state.titleRight;
        footerMax.style.color = state.primary;
        turbineImage.src = state.image;
    };

    toggleImageButton.addEventListener('click', () => {
        colorState = (colorState + 1) % brandStates.length;
        applyBrandState(brandStates[colorState]);
    });

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    navItems.forEach((item) => {
        item.addEventListener('click', () => {
            navItems.forEach((nav) => nav.classList.remove('active'));
            item.classList.add('active');

            const section = document.getElementById(item.dataset.target);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

            if (window.innerWidth <= 1024) {
                sidebar.classList.remove('open');
            }
        });
    });

    applyBrandState(brandStates[colorState]);
});
