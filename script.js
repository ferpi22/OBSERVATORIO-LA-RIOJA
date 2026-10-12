
// 1. Datos Simulados de Departamentos (Basados en oficiales LR y el PDF de referencia)
const deptoData = {
    "capital": {
        name: "Capital",
        pob: "242.935",
        varones_pct: "49,2%", varones_val: "119.585",
        mujeres_pct: "50,8%", mujeres_val: "123.350",
        edades: [19.3, 26.7, 44.0, 10.0],
        pea: "111.646", ocupados: "105.100", desoc: "5.8%", jub: "85.2%",
        edu: [28.4, 38.9, 32.7],
        hogares: "75.420", pobreza: "38.5%"
    },
    "chilecito": {
        name: "Chilecito",
        pob: "49.432",
        varones_pct: "49,8%", varones_val: "24.617",
        mujeres_pct: "50,2%", mujeres_val: "24.815",
        edades: [21.1, 25.5, 42.1, 11.3],
        pea: "21.500", ocupados: "20.100", desoc: "6.5%", jub: "78.4%",
        edu: [32.1, 40.5, 27.4],
        hogares: "15.100", pobreza: "36.2%"
    },
    "arauco": {
        name: "Arauco",
        pob: "15.418",
        varones_pct: "50,1%", varones_val: "7.724",
        mujeres_pct: "49,9%", mujeres_val: "7.694",
        edades: [22.5, 24.8, 41.2, 11.5],
        pea: "6.800", ocupados: "6.300", desoc: "7.3%", jub: "75.1%",
        edu: [35.2, 41.1, 23.7],
        hogares: "4.850", pobreza: "41.0%"
    },
    "provincia": {
        name: "Provincia de La Rioja (Total)",
        pob: "384.607",
        varones_pct: "49,5%", varones_val: "190.380",
        mujeres_pct: "50,5%", mujeres_val: "194.227",
        edades: [20.5, 26.0, 43.1, 10.4],
        pea: "178.500", ocupados: "168.200", desoc: "5.8%", jub: "82.1%",
        edu: [30.5, 39.5, 30.0],
        hogares: "115.420", pobreza: "38.5%"
    }
};

// 2. Navegación
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.getElementById('tab-' + tabId).classList.add('active');
    
    document.querySelectorAll('.nav-links li').forEach(el => el.classList.remove('active'));
    event.currentTarget.classList.add('active');

    if (tabId === 'dashboard') {
        setTimeout(() => { map.invalidateSize(); }, 200);
    }
}

// 3. Actualización Visual de Datos
function updatePanel(dataId) {
    const data = deptoData[dataId] || deptoData['provincia'];
    
    // Animar la entrada
    const panel = document.getElementById('data-panel');
    panel.style.opacity = 0;
    
    setTimeout(() => {
        document.getElementById('dept-name').innerText = data.name;
        document.getElementById('dept-pob').innerText = data.pob;
        
        document.getElementById('dept-varones-pct').innerText = data.varones_pct;
        document.getElementById('dept-varones-val').innerText = data.varones_val + " Varones";
        document.getElementById('dept-mujeres-pct').innerText = data.mujeres_pct;
        document.getElementById('dept-mujeres-val').innerText = data.mujeres_val + " Mujeres";
        
        // Edades
        for(let i=1; i<=4; i++) {
            document.getElementById('age-'+i).innerText = data.edades[i-1].toFixed(1).replace('.',',') + '%';
            document.getElementById('bar-age-'+i).style.width = data.edades[i-1] + '%';
        }
        
        // Economía
        document.getElementById('dept-pea').innerText = data.pea;
        document.getElementById('dept-ocupados').innerText = data.ocupados;
        document.getElementById('dept-desoc').innerText = data.desoc;
        document.getElementById('dept-jub').innerText = data.jub;
        
        // Educación
        for(let i=1; i<=3; i++) {
            document.getElementById('edu-'+i).innerText = data.edu[i-1].toFixed(1).replace('.',',') + '%';
            document.getElementById('bar-edu-'+i).style.width = data.edu[i-1] + '%';
        }

        // Pobreza
        document.getElementById('dept-hogares').innerText = data.hogares;
        document.getElementById('dept-pobreza').innerText = data.pobreza;

        panel.style.opacity = 1;
    }, 300);
}

// 4. Inicialización del Mapa
let map;
function initMap() {
    map = L.map('interactive-map').setView([-29.4134, -66.8564], 7);
    
    // TileLayer limpio y moderno (CartoDB Positron)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap',
        maxZoom: 12
    }).addTo(map);

    // Icono Violeta Pastel
    const customIcon = L.divIcon({
        className: 'custom-pin',
        html: '<i class="fa-solid fa-location-dot" style="color: var(--primary); font-size: 2rem; drop-shadow: 0 4px 6px rgba(0,0,0,0.2);"></i>',
        iconSize: [30, 42],
        iconAnchor: [15, 42]
    });

    // Marcadores de Departamentos
    const markers = [
        { id: 'capital', lat: -29.4134, lng: -66.8564, name: "Capital" },
        { id: 'chilecito', lat: -29.1635, lng: -67.4963, name: "Chilecito" },
        { id: 'arauco', lat: -28.5615, lng: -66.8129, name: "Arauco" }
        // Se pueden agregar los 18 departamentos aquí
    ];

    markers.forEach(m => {
        L.marker([m.lat, m.lng], {icon: customIcon})
         .addTo(map)
         .bindTooltip(m.name, {permanent: false, direction: "top"})
         .on('click', () => {
             updatePanel(m.id);
             map.flyTo([m.lat, m.lng], 9, {duration: 0.8});
         });
    });

    // Botón para volver al total provincial
    const resetBtn = L.control({position: 'topright'});
    resetBtn.onAdd = function() {
        const div = L.DomUtil.create('div', 'leaflet-bar');
        div.innerHTML = '<button style="padding:8px 12px; background:white; border:none; cursor:pointer; font-weight:bold; color:var(--primary-dark); border-radius:4px;"><i class="fa-solid fa-arrows-to-circle"></i> Ver Total Provincial</button>';
        div.onclick = function(e){
            e.stopPropagation();
            map.flyTo([-29.4134, -66.8564], 7, {duration: 0.8});
            updatePanel('provincia');
        }
        return div;
    };
    resetBtn.addTo(map);
}

// 5. Lógica de Sincronización
function syncData() {
    const btn = document.querySelector('.sync-btn');
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sincronizando...';
    btn.style.opacity = 0.7;
    
    setTimeout(() => {
        const now = new Date();
        const dateStr = now.toLocaleDateString('es-AR') + ' ' + now.toLocaleTimeString('es-AR', {hour: '2-digit', minute:'2-digit'});
        document.getElementById('last-update-date').innerText = dateStr;
        btn.innerHTML = '<i class="fa-solid fa-check"></i> ¡Actualizado!';
        btn.style.background = 'var(--c-green)';
        btn.style.color = 'white';
        btn.style.opacity = 1;
        
        setTimeout(() => {
            btn.innerHTML = '<i class="fa-solid fa-arrows-rotate"></i> Sincronizar';
            btn.style.background = '';
            btn.style.color = '';
        }, 3000);
    }, 1500);
}

// Iniciar
window.onload = () => {
    initMap();
    document.getElementById('last-update-date').innerText = new Date().toLocaleDateString('es-AR');
};
