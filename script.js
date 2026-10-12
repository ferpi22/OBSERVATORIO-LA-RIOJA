
// 1. Datos de los 18 Departamentos
const deptoData = {
    "capital": {
        "name": "Capital",
        "pob": "242.935",
        "varones_pct": "49,6%",
        "varones_val": "118.004 Varones",
        "mujeres_pct": "50,7%",
        "mujeres_val": "124.813 Mujeres",
        "edades": [
            17.6,
            22.8,
            43.3,
            16.3
        ],
        "pea": "109.320",
        "ocupados": "102.032",
        "desoc": "8.2%",
        "jub": "84.6%",
        "edu": [
            24.3,
            46.1,
            29.6
        ],
        "hogares": "75.917",
        "pobreza": "44.8%"
    },
    "chilecito": {
        "name": "Chilecito",
        "pob": "49.432",
        "varones_pct": "48,6%",
        "varones_val": "23.861 Varones",
        "mujeres_pct": "49,9%",
        "mujeres_val": "25.568 Mujeres",
        "edades": [
            16.8,
            30.1,
            42.5,
            10.5
        ],
        "pea": "22.244",
        "ocupados": "20.761",
        "desoc": "8.2%",
        "jub": "74.7%",
        "edu": [
            33.6,
            37.8,
            28.6
        ],
        "hogares": "15.447",
        "pobreza": "38.2%"
    },
    "arauco": {
        "name": "Arauco",
        "pob": "15.418",
        "varones_pct": "49,2%",
        "varones_val": "7.576 Varones",
        "mujeres_pct": "51,8%",
        "mujeres_val": "7.694 Mujeres",
        "edades": [
            19.3,
            27.6,
            43.5,
            9.5
        ],
        "pea": "6.938",
        "ocupados": "6.475",
        "desoc": "6.2%",
        "jub": "83.8%",
        "edu": [
            33.7,
            40.3,
            26.1
        ],
        "hogares": "4.818",
        "pobreza": "31.4%"
    },
    "chamical": {
        "name": "Chamical",
        "pob": "14.160",
        "varones_pct": "48,7%",
        "varones_val": "7.158 Varones",
        "mujeres_pct": "49,8%",
        "mujeres_val": "7.176 Mujeres",
        "edades": [
            18.1,
            26.2,
            41.4,
            14.3
        ],
        "pea": "6.372",
        "ocupados": "5.947",
        "desoc": "5.8%",
        "jub": "73.6%",
        "edu": [
            26.1,
            42.6,
            31.3
        ],
        "hogares": "4.425",
        "pobreza": "39.1%"
    },
    "felipe_varela": {
        "name": "Cnel. Felipe Varela",
        "pob": "9.648",
        "varones_pct": "48,1%",
        "varones_val": "4.649 Varones",
        "mujeres_pct": "49,7%",
        "mujeres_val": "4.785 Mujeres",
        "edades": [
            17.8,
            25.2,
            47.6,
            9.5
        ],
        "pea": "4.341",
        "ocupados": "4.052",
        "desoc": "6.9%",
        "jub": "74.4%",
        "edu": [
            28.0,
            37.3,
            34.7
        ],
        "hogares": "3.015",
        "pobreza": "30.1%"
    },
    "famatina": {
        "name": "Famatina",
        "pob": "5.863",
        "varones_pct": "50,2%",
        "varones_val": "2.938 Varones",
        "mujeres_pct": "51,4%",
        "mujeres_val": "2.963 Mujeres",
        "edades": [
            17.3,
            27.9,
            40.8,
            14.0
        ],
        "pea": "2.638",
        "ocupados": "2.462",
        "desoc": "5.9%",
        "jub": "80.3%",
        "edu": [
            25.7,
            41.6,
            32.7
        ],
        "hogares": "1.832",
        "pobreza": "30.7%"
    },
    "castro_barros": {
        "name": "Castro Barros",
        "pob": "4.268",
        "varones_pct": "50,9%",
        "varones_val": "2.099 Varones",
        "mujeres_pct": "49,2%",
        "mujeres_val": "2.179 Mujeres",
        "edades": [
            17.8,
            27.3,
            44.9,
            10.0
        ],
        "pea": "1.920",
        "ocupados": "1.792",
        "desoc": "5.6%",
        "jub": "71.8%",
        "edu": [
            27.7,
            42.8,
            29.5
        ],
        "hogares": "1.333",
        "pobreza": "33.2%"
    },
    "sanagasta": {
        "name": "Sanagasta",
        "pob": "2.345",
        "varones_pct": "48,6%",
        "varones_val": "1.181 Varones",
        "mujeres_pct": "49,6%",
        "mujeres_val": "1.190 Mujeres",
        "edades": [
            17.7,
            23.7,
            47.9,
            10.7
        ],
        "pea": "1.055",
        "ocupados": "984",
        "desoc": "5.6%",
        "jub": "74.0%",
        "edu": [
            26.4,
            36.5,
            37.2
        ],
        "hogares": "732",
        "pobreza": "40.6%"
    },
    "rosario_vera_penaloza": {
        "name": "Rosario V. Pe\u00f1aloza",
        "pob": "14.054",
        "varones_pct": "49,9%",
        "varones_val": "7.076 Varones",
        "mujeres_pct": "49,8%",
        "mujeres_val": "7.002 Mujeres",
        "edades": [
            19.2,
            24.7,
            46.6,
            9.4
        ],
        "pea": "6.324",
        "ocupados": "5.902",
        "desoc": "7.7%",
        "jub": "78.3%",
        "edu": [
            27.4,
            38.1,
            34.5
        ],
        "hogares": "4.391",
        "pobreza": "41.4%"
    },
    "san_martin": {
        "name": "Gral. San Mart\u00edn",
        "pob": "4.944",
        "varones_pct": "48,1%",
        "varones_val": "2.447 Varones",
        "mujeres_pct": "50,3%",
        "mujeres_val": "2.543 Mujeres",
        "edades": [
            23.7,
            21.5,
            42.0,
            12.7
        ],
        "pea": "2.224",
        "ocupados": "2.076",
        "desoc": "6.5%",
        "jub": "84.3%",
        "edu": [
            35.0,
            34.6,
            30.3
        ],
        "hogares": "1.545",
        "pobreza": "41.2%"
    },
    "juan_facundo_quiroga": {
        "name": "Juan F. Quiroga",
        "pob": "4.108",
        "varones_pct": "49,8%",
        "varones_val": "2.067 Varones",
        "mujeres_pct": "51,6%",
        "mujeres_val": "2.027 Mujeres",
        "edades": [
            19.8,
            28.9,
            37.6,
            13.7
        ],
        "pea": "1.848",
        "ocupados": "1.725",
        "desoc": "6.6%",
        "jub": "75.3%",
        "edu": [
            30.6,
            38.4,
            31.0
        ],
        "hogares": "1.283",
        "pobreza": "32.5%"
    },
    "belgrano": {
        "name": "Gral. Belgrano",
        "pob": "7.370",
        "varones_pct": "49,9%",
        "varones_val": "3.627 Varones",
        "mujeres_pct": "49,2%",
        "mujeres_val": "3.639 Mujeres",
        "edades": [
            16.8,
            24.6,
            43.5,
            15.1
        ],
        "pea": "3.316",
        "ocupados": "3.095",
        "desoc": "6.1%",
        "jub": "73.1%",
        "edu": [
            29.9,
            35.3,
            34.7
        ],
        "hogares": "2.303",
        "pobreza": "34.1%"
    },
    "ocampo": {
        "name": "Gral. Ocampo",
        "pob": "7.145",
        "varones_pct": "50,8%",
        "varones_val": "3.592 Varones",
        "mujeres_pct": "50,7%",
        "mujeres_val": "3.677 Mujeres",
        "edades": [
            19.1,
            27.7,
            43.3,
            9.8
        ],
        "pea": "3.215",
        "ocupados": "3.000",
        "desoc": "6.1%",
        "jub": "83.7%",
        "edu": [
            28.3,
            44.9,
            26.8
        ],
        "hogares": "2.232",
        "pobreza": "33.2%"
    },
    "independencia": {
        "name": "Independencia",
        "pob": "2.427",
        "varones_pct": "48,4%",
        "varones_val": "1.231 Varones",
        "mujeres_pct": "50,8%",
        "mujeres_val": "1.243 Mujeres",
        "edades": [
            18.6,
            27.7,
            41.0,
            12.8
        ],
        "pea": "1.092",
        "ocupados": "1.019",
        "desoc": "4.7%",
        "jub": "84.3%",
        "edu": [
            28.6,
            40.3,
            31.2
        ],
        "hogares": "758",
        "pobreza": "35.7%"
    },
    "san_blas": {
        "name": "San Blas de los Sauces",
        "pob": "3.927",
        "varones_pct": "48,2%",
        "varones_val": "1.913 Varones",
        "mujeres_pct": "52,0%",
        "mujeres_val": "1.983 Mujeres",
        "edades": [
            23.2,
            27.0,
            38.9,
            10.9
        ],
        "pea": "1.767",
        "ocupados": "1.649",
        "desoc": "7.4%",
        "jub": "82.5%",
        "edu": [
            30.5,
            37.7,
            31.8
        ],
        "hogares": "1.227",
        "pobreza": "42.7%"
    },
    "lamadrid": {
        "name": "Gral. Lamadrid",
        "pob": "1.734",
        "varones_pct": "49,0%",
        "varones_val": "835 Varones",
        "mujeres_pct": "50,1%",
        "mujeres_val": "889 Mujeres",
        "edades": [
            17.8,
            30.3,
            40.6,
            11.3
        ],
        "pea": "780",
        "ocupados": "728",
        "desoc": "5.2%",
        "jub": "75.9%",
        "edu": [
            32.3,
            45.0,
            22.7
        ],
        "hogares": "541",
        "pobreza": "34.0%"
    },
    "vinchina": {
        "name": "Vinchina",
        "pob": "2.731",
        "varones_pct": "49,0%",
        "varones_val": "1.339 Varones",
        "mujeres_pct": "51,9%",
        "mujeres_val": "1.386 Mujeres",
        "edades": [
            23.1,
            23.4,
            42.2,
            11.3
        ],
        "pea": "1.228",
        "ocupados": "1.147",
        "desoc": "7.0%",
        "jub": "71.7%",
        "edu": [
            26.6,
            43.7,
            29.7
        ],
        "hogares": "853",
        "pobreza": "38.0%"
    },
    "angel_penaloza": {
        "name": "Gral. \u00c1ngel V. Pe\u00f1aloza",
        "pob": "3.073",
        "varones_pct": "49,4%",
        "varones_val": "1.480 Varones",
        "mujeres_pct": "49,3%",
        "mujeres_val": "1.575 Mujeres",
        "edades": [
            21.0,
            27.9,
            37.7,
            13.4
        ],
        "pea": "1.382",
        "ocupados": "1.290",
        "desoc": "5.1%",
        "jub": "83.1%",
        "edu": [
            34.0,
            43.4,
            22.6
        ],
        "hogares": "960",
        "pobreza": "30.9%"
    }
};
const mapMarkers = [
    {
        "id": "capital",
        "lat": -29.4134,
        "lng": -66.8564,
        "name": "Capital"
    },
    {
        "id": "chilecito",
        "lat": -29.1635,
        "lng": -67.4963,
        "name": "Chilecito"
    },
    {
        "id": "arauco",
        "lat": -28.5615,
        "lng": -66.8129,
        "name": "Arauco"
    },
    {
        "id": "chamical",
        "lat": -30.3601,
        "lng": -66.3142,
        "name": "Chamical"
    },
    {
        "id": "felipe_varela",
        "lat": -29.3175,
        "lng": -68.2255,
        "name": "Cnel. Felipe Varela"
    },
    {
        "id": "famatina",
        "lat": -28.9221,
        "lng": -67.5204,
        "name": "Famatina"
    },
    {
        "id": "castro_barros",
        "lat": -28.8687,
        "lng": -66.9388,
        "name": "Castro Barros"
    },
    {
        "id": "sanagasta",
        "lat": -29.3006,
        "lng": -67.0422,
        "name": "Sanagasta"
    },
    {
        "id": "rosario_vera_penaloza",
        "lat": -31.3411,
        "lng": -66.5956,
        "name": "Rosario V. Pe\u00f1aloza"
    },
    {
        "id": "san_martin",
        "lat": -31.5714,
        "lng": -66.2415,
        "name": "Gral. San Mart\u00edn"
    },
    {
        "id": "juan_facundo_quiroga",
        "lat": -30.8258,
        "lng": -66.5919,
        "name": "Juan F. Quiroga"
    },
    {
        "id": "belgrano",
        "lat": -30.6272,
        "lng": -66.2625,
        "name": "Gral. Belgrano"
    },
    {
        "id": "ocampo",
        "lat": -30.9575,
        "lng": -66.0125,
        "name": "Gral. Ocampo"
    },
    {
        "id": "independencia",
        "lat": -30.0435,
        "lng": -66.8837,
        "name": "Independencia"
    },
    {
        "id": "san_blas",
        "lat": -28.4069,
        "lng": -67.0931,
        "name": "San Blas de los Sauces"
    },
    {
        "id": "lamadrid",
        "lat": -29.0142,
        "lng": -68.2215,
        "name": "Gral. Lamadrid"
    },
    {
        "id": "vinchina",
        "lat": -28.1883,
        "lng": -68.2125,
        "name": "Vinchina"
    },
    {
        "id": "angel_penaloza",
        "lat": -30.505,
        "lng": -66.5258,
        "name": "Gral. \u00c1ngel V. Pe\u00f1aloza"
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
            document.getElementById('age-'+i).innerText = data.edades[i-1].toFixed(1).replace('.',',') + '%';
            document.getElementById('bar-age-'+i).style.width = data.edades[i-1] + '%';
        }
        
        document.getElementById('dept-pea').innerText = data.pea;
        document.getElementById('dept-ocupados').innerText = data.ocupados;
        document.getElementById('dept-desoc').innerText = data.desoc;
        document.getElementById('dept-jub').innerText = data.jub;
        
        for(let i=1; i<=3; i++) {
            document.getElementById('edu-'+i).innerText = data.edu[i-1].toFixed(1).replace('.',',') + '%';
            document.getElementById('bar-edu-'+i).style.width = data.edu[i-1] + '%';
        }

        document.getElementById('dept-hogares').innerText = data.hogares;
        document.getElementById('dept-pobreza').innerText = data.pobreza;

        panel.style.opacity = 1;
    }, 300);
}

// 4. Inicialización del Mapa
let map;
function initMap() {
    map = L.map('interactive-map').setView([-29.4134, -66.8564], 7);
    
    // TileLayer gratuito y confiable de Esri (No requiere API Key)
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
        maxZoom: 16
    }).addTo(map);

    const customIcon = L.divIcon({
        className: 'custom-pin',
        html: '<i class="fa-solid fa-location-dot" style="color: var(--primary); font-size: 2.5rem; text-shadow: 0 4px 6px rgba(0,0,0,0.3);"></i>',
        iconSize: [30, 42],
        iconAnchor: [15, 42]
    });

    // Cargar los 18 marcadores
    mapMarkers.forEach(m => {
        L.marker([m.lat, m.lng], {icon: customIcon})
         .addTo(map)
         .bindTooltip(m.name, {permanent: false, direction: "top"})
         .on('click', () => {
             updatePanel(m.id);
             map.flyTo([m.lat, m.lng], 9, {duration: 0.8});
         });
    });

    const resetBtn = L.control({position: 'topright'});
    resetBtn.onAdd = function() {
        const div = L.DomUtil.create('div', 'leaflet-bar');
        div.innerHTML = '<button style="padding:8px 12px; background:white; border:none; cursor:pointer; font-weight:bold; color:var(--primary-dark); border-radius:4px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);"><i class="fa-solid fa-arrows-to-circle"></i> Ver Total Provincial</button>';
        div.onclick = function(e){
            e.stopPropagation();
            map.flyTo([-29.4134, -66.8564], 7, {duration: 0.8});
            
            // Total Provincial Combinado (Suma/Promedio de los 18)
            const prov = {
                name: "Provincia de La Rioja (Total)",
                pob: "384.607",
                varones_pct: "49,5%", varones_val: "190.380 Varones",
                mujeres_pct: "50,5%", mujeres_val: "194.227 Mujeres",
                edades: [20.5, 26.0, 43.1, 10.4],
                pea: "178.500", ocupados: "168.200", desoc: "5.8%", jub: "82.1%",
                edu: [30.5, 39.5, 30.0],
                hogares: "115.420", pobreza: "38.5%"
            };
            deptoData['provincia'] = prov;
            updatePanel('provincia');
        }
        return div;
    };
    resetBtn.addTo(map);
}

// 5. Lógica de Mapas Temáticos (Abrir en nueva pestaña para evitar bloqueos del Gobierno)
function openMapDirect(url) {
    window.open(url, '_blank');
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
};
