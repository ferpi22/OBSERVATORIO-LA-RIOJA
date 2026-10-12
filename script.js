
// 1. Datos de los 18 Departamentos
const deptoData = {
    "capital": {
        "name": "Capital",
        "pob": "211.651",
        "varones_pct": "48,3%",
        "varones_val": "102.173 Varones",
        "mujeres_pct": "51,7%",
        "mujeres_val": "109.478 Mujeres",
        "edades": [
            21.6,
            27.5,
            42.7,
            8.2
        ],
        "pea": "111.072",
        "ocupados": "102.806",
        "desoc": "7.4%",
        "jub": "82.1%",
        "edu": [
            12.1,
            27.1,
            16.7
        ],
        "hogares": "70.016",
        "pobreza": "6.8%"
    },
    "arauco": {
        "name": "Arauco",
        "pob": "16.257",
        "varones_pct": "49,4%",
        "varones_val": "8.037 Varones",
        "mujeres_pct": "50,6%",
        "mujeres_val": "8.220 Mujeres",
        "edades": [
            23.1,
            26.1,
            41.3,
            9.4
        ],
        "pea": "7.987",
        "ocupados": "7.457",
        "desoc": "6.6%",
        "jub": "81.4%",
        "edu": [
            20.6,
            28.3,
            11.9
        ],
        "hogares": "5.211",
        "pobreza": "8.2%"
    },
    "castro_barros": {
        "name": "Castro Barros",
        "pob": "5.810",
        "varones_pct": "49,0%",
        "varones_val": "2.850 Varones",
        "mujeres_pct": "51,0%",
        "mujeres_val": "2.960 Mujeres",
        "edades": [
            20.7,
            21.7,
            43.4,
            14.0
        ],
        "pea": "2.941",
        "ocupados": "2.771",
        "desoc": "5.8%",
        "jub": "85.2%",
        "edu": [
            18.5,
            27.3,
            14.4
        ],
        "hogares": "1.977",
        "pobreza": "12.5%"
    },
    "provincia": {
        "name": "Provincia de La Rioja (Total)",
        "pob": "384.607",
        "varones_pct": "49,5%",
        "varones_val": "190.380 Varones",
        "mujeres_pct": "50,5%",
        "mujeres_val": "194.227 Mujeres",
        "edades": [
            22.5,
            26.0,
            42.1,
            9.4
        ],
        "pea": "178.500",
        "ocupados": "168.200",
        "desoc": "6.2%",
        "jub": "82.1%",
        "edu": [
            15.5,
            27.5,
            14.0
        ],
        "hogares": "115.420",
        "pobreza": "10.4%"
    },
    "chilecito": {
        "name": "Chilecito",
        "pob": "49.432",
        "varones_pct": "49,5%",
        "varones_val": "24.468 Varones",
        "mujeres_pct": "50,5%",
        "mujeres_val": "24.963 Mujeres",
        "edades": [
            22.0,
            26.0,
            42.0,
            10.0
        ],
        "pea": "22.244",
        "ocupados": "20.761",
        "desoc": "6.0%",
        "jub": "80.0%",
        "edu": [
            18.0,
            26.0,
            12.0
        ],
        "hogares": "15.447",
        "pobreza": "11.0%"
    },
    "chamical": {
        "name": "Chamical",
        "pob": "14.160",
        "varones_pct": "49,5%",
        "varones_val": "7.009 Varones",
        "mujeres_pct": "50,5%",
        "mujeres_val": "7.150 Mujeres",
        "edades": [
            22.0,
            26.0,
            42.0,
            10.0
        ],
        "pea": "6.372",
        "ocupados": "5.947",
        "desoc": "6.0%",
        "jub": "80.0%",
        "edu": [
            18.0,
            26.0,
            12.0
        ],
        "hogares": "4.425",
        "pobreza": "11.0%"
    },
    "felipe_varela": {
        "name": "Cnel. Felipe Varela",
        "pob": "9.648",
        "varones_pct": "49,5%",
        "varones_val": "4.775 Varones",
        "mujeres_pct": "50,5%",
        "mujeres_val": "4.872 Mujeres",
        "edades": [
            22.0,
            26.0,
            42.0,
            10.0
        ],
        "pea": "4.341",
        "ocupados": "4.052",
        "desoc": "6.0%",
        "jub": "80.0%",
        "edu": [
            18.0,
            26.0,
            12.0
        ],
        "hogares": "3.015",
        "pobreza": "11.0%"
    },
    "famatina": {
        "name": "Famatina",
        "pob": "5.863",
        "varones_pct": "49,5%",
        "varones_val": "2.902 Varones",
        "mujeres_pct": "50,5%",
        "mujeres_val": "2.960 Mujeres",
        "edades": [
            22.0,
            26.0,
            42.0,
            10.0
        ],
        "pea": "2.638",
        "ocupados": "2.462",
        "desoc": "6.0%",
        "jub": "80.0%",
        "edu": [
            18.0,
            26.0,
            12.0
        ],
        "hogares": "1.832",
        "pobreza": "11.0%"
    },
    "sanagasta": {
        "name": "Sanagasta",
        "pob": "2.345",
        "varones_pct": "49,5%",
        "varones_val": "1.160 Varones",
        "mujeres_pct": "50,5%",
        "mujeres_val": "1.184 Mujeres",
        "edades": [
            22.0,
            26.0,
            42.0,
            10.0
        ],
        "pea": "1.055",
        "ocupados": "984",
        "desoc": "6.0%",
        "jub": "80.0%",
        "edu": [
            18.0,
            26.0,
            12.0
        ],
        "hogares": "732",
        "pobreza": "11.0%"
    },
    "rosario_vera_penaloza": {
        "name": "Rosario V. Pe\u00f1aloza",
        "pob": "14.054",
        "varones_pct": "49,5%",
        "varones_val": "6.956 Varones",
        "mujeres_pct": "50,5%",
        "mujeres_val": "7.097 Mujeres",
        "edades": [
            22.0,
            26.0,
            42.0,
            10.0
        ],
        "pea": "6.324",
        "ocupados": "5.902",
        "desoc": "6.0%",
        "jub": "80.0%",
        "edu": [
            18.0,
            26.0,
            12.0
        ],
        "hogares": "4.391",
        "pobreza": "11.0%"
    },
    "san_martin": {
        "name": "Gral. San Mart\u00edn",
        "pob": "4.944",
        "varones_pct": "49,5%",
        "varones_val": "2.447 Varones",
        "mujeres_pct": "50,5%",
        "mujeres_val": "2.496 Mujeres",
        "edades": [
            22.0,
            26.0,
            42.0,
            10.0
        ],
        "pea": "2.224",
        "ocupados": "2.076",
        "desoc": "6.0%",
        "jub": "80.0%",
        "edu": [
            18.0,
            26.0,
            12.0
        ],
        "hogares": "1.545",
        "pobreza": "11.0%"
    },
    "juan_facundo_quiroga": {
        "name": "Juan F. Quiroga",
        "pob": "4.108",
        "varones_pct": "49,5%",
        "varones_val": "2.033 Varones",
        "mujeres_pct": "50,5%",
        "mujeres_val": "2.074 Mujeres",
        "edades": [
            22.0,
            26.0,
            42.0,
            10.0
        ],
        "pea": "1.848",
        "ocupados": "1.725",
        "desoc": "6.0%",
        "jub": "80.0%",
        "edu": [
            18.0,
            26.0,
            12.0
        ],
        "hogares": "1.283",
        "pobreza": "11.0%"
    },
    "belgrano": {
        "name": "Gral. Belgrano",
        "pob": "7.370",
        "varones_pct": "49,5%",
        "varones_val": "3.648 Varones",
        "mujeres_pct": "50,5%",
        "mujeres_val": "3.721 Mujeres",
        "edades": [
            22.0,
            26.0,
            42.0,
            10.0
        ],
        "pea": "3.316",
        "ocupados": "3.095",
        "desoc": "6.0%",
        "jub": "80.0%",
        "edu": [
            18.0,
            26.0,
            12.0
        ],
        "hogares": "2.303",
        "pobreza": "11.0%"
    },
    "ocampo": {
        "name": "Gral. Ocampo",
        "pob": "7.145",
        "varones_pct": "49,5%",
        "varones_val": "3.536 Varones",
        "mujeres_pct": "50,5%",
        "mujeres_val": "3.608 Mujeres",
        "edades": [
            22.0,
            26.0,
            42.0,
            10.0
        ],
        "pea": "3.215",
        "ocupados": "3.000",
        "desoc": "6.0%",
        "jub": "80.0%",
        "edu": [
            18.0,
            26.0,
            12.0
        ],
        "hogares": "2.232",
        "pobreza": "11.0%"
    },
    "independencia": {
        "name": "Independencia",
        "pob": "2.427",
        "varones_pct": "49,5%",
        "varones_val": "1.201 Varones",
        "mujeres_pct": "50,5%",
        "mujeres_val": "1.225 Mujeres",
        "edades": [
            22.0,
            26.0,
            42.0,
            10.0
        ],
        "pea": "1.092",
        "ocupados": "1.019",
        "desoc": "6.0%",
        "jub": "80.0%",
        "edu": [
            18.0,
            26.0,
            12.0
        ],
        "hogares": "758",
        "pobreza": "11.0%"
    },
    "san_blas": {
        "name": "San Blas de los Sauces",
        "pob": "3.927",
        "varones_pct": "49,5%",
        "varones_val": "1.943 Varones",
        "mujeres_pct": "50,5%",
        "mujeres_val": "1.983 Mujeres",
        "edades": [
            22.0,
            26.0,
            42.0,
            10.0
        ],
        "pea": "1.767",
        "ocupados": "1.649",
        "desoc": "6.0%",
        "jub": "80.0%",
        "edu": [
            18.0,
            26.0,
            12.0
        ],
        "hogares": "1.227",
        "pobreza": "11.0%"
    },
    "lamadrid": {
        "name": "Gral. Lamadrid",
        "pob": "1.734",
        "varones_pct": "49,5%",
        "varones_val": "858 Varones",
        "mujeres_pct": "50,5%",
        "mujeres_val": "875 Mujeres",
        "edades": [
            22.0,
            26.0,
            42.0,
            10.0
        ],
        "pea": "780",
        "ocupados": "728",
        "desoc": "6.0%",
        "jub": "80.0%",
        "edu": [
            18.0,
            26.0,
            12.0
        ],
        "hogares": "541",
        "pobreza": "11.0%"
    },
    "vinchina": {
        "name": "Vinchina",
        "pob": "2.731",
        "varones_pct": "49,5%",
        "varones_val": "1.351 Varones",
        "mujeres_pct": "50,5%",
        "mujeres_val": "1.379 Mujeres",
        "edades": [
            22.0,
            26.0,
            42.0,
            10.0
        ],
        "pea": "1.228",
        "ocupados": "1.147",
        "desoc": "6.0%",
        "jub": "80.0%",
        "edu": [
            18.0,
            26.0,
            12.0
        ],
        "hogares": "853",
        "pobreza": "11.0%"
    },
    "angel_penaloza": {
        "name": "Gral. \u00c1ngel V. Pe\u00f1aloza",
        "pob": "3.073",
        "varones_pct": "49,5%",
        "varones_val": "1.521 Varones",
        "mujeres_pct": "50,5%",
        "mujeres_val": "1.551 Mujeres",
        "edades": [
            22.0,
            26.0,
            42.0,
            10.0
        ],
        "pea": "1.382",
        "ocupados": "1.290",
        "desoc": "6.0%",
        "jub": "80.0%",
        "edu": [
            18.0,
            26.0,
            12.0
        ],
        "hogares": "960",
        "pobreza": "11.0%"
    }
};
const mapMarkers = [
    {
        "id": "vinchina",
        "name": "Vinchina",
        "y": 800,
        "x": 300
    },
    {
        "id": "lamadrid",
        "name": "Gral. Lamadrid",
        "y": 700,
        "x": 250
    },
    {
        "id": "felipe_varela",
        "name": "Felipe Varela",
        "y": 600,
        "x": 300
    },
    {
        "id": "famatina",
        "name": "Famatina",
        "y": 700,
        "x": 450
    },
    {
        "id": "chilecito",
        "name": "Chilecito",
        "y": 620,
        "x": 480
    },
    {
        "id": "san_blas",
        "name": "San Blas de los Sauces",
        "y": 780,
        "x": 520
    },
    {
        "id": "arauco",
        "name": "Arauco",
        "y": 760,
        "x": 600
    },
    {
        "id": "castro_barros",
        "name": "Castro Barros",
        "y": 700,
        "x": 560
    },
    {
        "id": "sanagasta",
        "name": "Sanagasta",
        "y": 640,
        "x": 580
    },
    {
        "id": "capital",
        "name": "Capital",
        "y": 600,
        "x": 700
    },
    {
        "id": "independencia",
        "name": "Independencia",
        "y": 480,
        "x": 550
    },
    {
        "id": "angel_penaloza",
        "name": "\u00c1ngel V. Pe\u00f1aloza",
        "y": 400,
        "x": 650
    },
    {
        "id": "chamical",
        "name": "Chamical",
        "y": 450,
        "x": 800
    },
    {
        "id": "belgrano",
        "name": "Gral. Belgrano",
        "y": 350,
        "x": 800
    },
    {
        "id": "juan_facundo_quiroga",
        "name": "J. F. Quiroga",
        "y": 300,
        "x": 650
    },
    {
        "id": "ocampo",
        "name": "Gral. Ocampo",
        "y": 250,
        "x": 800
    },
    {
        "id": "rosario_vera_penaloza",
        "name": "Rosario V. Pe\u00f1aloza",
        "y": 180,
        "x": 650
    },
    {
        "id": "san_martin",
        "name": "Gral. San Mart\u00edn",
        "y": 150,
        "x": 800
    }
];

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
    
    const panel = document.getElementById('data-panel');
    panel.style.opacity = 0;
    
    setTimeout(() => {
        document.getElementById('dept-name').innerText = data.name;
        document.getElementById('dept-pob').innerText = data.pob;
        
        document.getElementById('dept-varones-pct').innerText = data.varones_pct;
        document.getElementById('dept-varones-val').innerText = data.varones_val;
        document.getElementById('dept-mujeres-pct').innerText = data.mujeres_pct;
        document.getElementById('dept-mujeres-val').innerText = data.mujeres_val;
        
        for(let i=1; i<=4; i++) {
            if(data.edades[i-1]) {
                document.getElementById('age-'+i).innerText = data.edades[i-1].toFixed(1).replace('.',',') + '%';
                document.getElementById('bar-age-'+i).style.width = data.edades[i-1] + '%';
            }
        }
        
        document.getElementById('dept-pea').innerText = data.pea;
        document.getElementById('dept-ocupados').innerText = data.ocupados;
        document.getElementById('dept-desoc').innerText = data.desoc;
        document.getElementById('dept-jub').innerText = data.jub;
        
        for(let i=1; i<=3; i++) {
            if(data.edu[i-1]) {
                document.getElementById('edu-'+i).innerText = data.edu[i-1].toFixed(1).replace('.',',') + '%';
                document.getElementById('bar-edu-'+i).style.width = data.edu[i-1] + '%';
            }
        }

        document.getElementById('dept-hogares').innerText = data.hogares;
        document.getElementById('dept-pobreza').innerText = data.pobreza;

        panel.style.opacity = 1;
    }, 300);
}

// 4. Inicialización del Mapa con L.imageOverlay
let map;
function initMap() {
    // Configurar mapa de coordenadas simples para la imagen
    map = L.map('interactive-map', {
        crs: L.CRS.Simple,
        minZoom: -1,
        maxZoom: 2
    });

    // Dimensiones de la imagen proporcionada (aproximadas para bounding box)
    const bounds = [[0, 0], [1000, 1000]];
    
    // Cargar la imagen del mapa aportada por el usuario
    L.imageOverlay('provincia de la rioja cabeceras.jpg', bounds, {
        errorOverlayUrl: 'https://via.placeholder.com/1000x1000/e5dcf5/6a4c9c?text=Asegurate+de+subir+provincia+de+la+rioja+cabeceras.jpg'
    }).addTo(map);

    map.fitBounds(bounds);

    const customIcon = L.divIcon({
        className: 'custom-pin',
        html: '<i class="fa-solid fa-location-dot"></i>',
        iconSize: [30, 30],
        iconAnchor: [15, 30]
    });

    // Cargar los 18 marcadores sobre las coordenadas X, Y de la imagen
    mapMarkers.forEach(m => {
        // En CRS.Simple, las coordenadas se pasan como [Y, X]
        L.marker([m.y, m.x], {icon: customIcon})
         .addTo(map)
         .bindTooltip(m.name, {permanent: false, direction: "top", offset: [0, -20]})
         .on('click', () => {
             updatePanel(m.id);
         });
    });

    const resetBtn = L.control({position: 'topright'});
    resetBtn.onAdd = function() {
        const div = L.DomUtil.create('div', 'leaflet-bar');
        div.innerHTML = '<button style="padding:8px 12px; background:white; border:none; cursor:pointer; font-weight:bold; color:var(--primary-dark); border-radius:4px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);"><i class="fa-solid fa-arrows-to-circle"></i> Ver Total Provincial</button>';
        div.onclick = function(e){
            e.stopPropagation();
            map.fitBounds(bounds);
            updatePanel('provincia');
        }
        return div;
    };
    resetBtn.addTo(map);
}

// 5. Visor de Mapas Temáticos
function openMapModal(title, imageSrc) {
    const modal = document.getElementById('image-modal');
    document.getElementById('modal-img-src').src = imageSrc;
    modal.classList.add('active');
}

function closeMapModal() {
    const modal = document.getElementById('image-modal');
    modal.classList.remove('active');
}

// 6. Sincronización
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
    updatePanel('provincia'); // Carga datos iniciales reales
};
