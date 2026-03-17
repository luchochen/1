<<<<<<< HEAD
const topRow = document.getElementById("top-row");
const bottomRow = document.getElementById("bottom-row");
const mouthUpper = document.getElementById("mouth-upper");
const mouthLower = document.getElementById("mouth-lower");
const svgUpper = document.getElementById("svg-upper-teeth");
const svgLower = document.getElementById("svg-lower-teeth");

const infoTitle = document.getElementById("info-title");
const infoSubtitle = document.getElementById("info-subtitle");
const infoDescription = document.getElementById("info-description");
const infoTags = document.getElementById("info-tags");

const tooltip = document.getElementById("tooltip");

const modeButtons = document.querySelectorAll(".mode-btn[data-mode]");
const modePanels = document.querySelectorAll(".mode-panel");

const fdiSearch = document.getElementById("fdi-search");
const fdiSearchBtn = document.getElementById("fdi-search-btn");
const prevToothBtn = document.getElementById("prev-tooth-btn");
const nextToothBtn = document.getElementById("next-tooth-btn");
const quadrantFilter = document.getElementById("quadrant-filter");

const examQuestion = document.getElementById("exam-question");
const examAnswer = document.getElementById("exam-answer");
const newQuestionBtn = document.getElementById("new-question-btn");
const showAnswerBtn = document.getElementById("show-answer-btn");

const faceZones = document.querySelectorAll(".face-zone");
const faceCallouts = document.querySelectorAll(".face-callout");

let selectedToothNumber = null;
let currentQuestion = null;
let currentMode = "odontologia";

const toothData = buildTeethData();
const facialData = buildFacialData();

init();

function init() {
    buildOdontogram();
    buildMouthView();
    buildSvgTeeth();
    bindModeButtons();
    bindDentalTools();
    bindFacialModule();
    bindExam();
    setInfoPanel({
        title: "Seleccioná una estructura",
        subtitle: "Odontología · Anatomía · Estética",
        description: "Tocá una pieza dental o una zona facial para ver información clínica y estética.",
        tags: ["Interactivo", "Premium", "Demo comercial"]
    });
}

function buildTeethData() {
    const names = {
        1: "Incisivo central",
        2: "Incisivo lateral",
        3: "Canino",
        4: "Primer premolar",
        5: "Segundo premolar",
        6: "Primer molar",
        7: "Segundo molar",
        8: "Tercer molar"
    };

    const result = {};
    [1, 2, 3, 4].forEach((q) => {
        for (let i = 1; i <= 8; i++) {
            const code = `${q}${i}`;
            result[code] = {
                title: `${names[i]} ${code}`,
                subtitle: `Pieza FDI ${code}`,
                description:
                    q === 1 || q === 2
                        ? "Pieza del arco superior. Útil para referencia anatómica, clínica y comercial dentro de la demo."
                        : "Pieza del arco inferior. Útil para referencia anatómica, clínica y comercial dentro de la demo.",
                tags: ["FDI", q === 1 || q === 2 ? "Arco superior" : "Arco inferior", quadrantLabel(String(q))]
            };
        }
    });
    return result;
}

function buildFacialData() {
    return {
        frente: {
            title: "Frente",
            subtitle: "Zona de aplicación estética",
            description: "Región superior facial frecuentemente evaluada por líneas horizontales y balance general de la expresión.",
            tags: ["Tercio superior", "Expresión", "Armonización"]
        },
        glabela: {
            title: "Glabela",
            subtitle: "Zona central de expresión",
            description: "Área entre cejas, muy relevante en medicina estética por su impacto sobre la mímica y el gesto facial.",
            tags: ["Entrecejo", "Expresión", "Evaluación facial"]
        },
        patas_gallo: {
            title: "Patas de gallo",
            subtitle: "Zona periocular",
            description: "Región lateral de los ojos asociada a líneas dinámicas de sonrisa y envejecimiento del tercio superior.",
            tags: ["Periocular", "Líneas finas", "Tercio superior"]
        },
        nariz: {
            title: "Nariz",
            subtitle: "Zona de armonización facial",
            description: "Centro visual del rostro. Clave para proporción, perfil y equilibrio global en una presentación estética.",
            tags: ["Perfil", "Centro facial", "Proporción"]
        },
        surco_nasogeniano: {
            title: "Surco nasogeniano",
            subtitle: "Zona de transición facial",
            description: "Área que conecta el tercio medio con la región perioral. Muy utilizada para explicar soporte y continuidad facial.",
            tags: ["Soporte", "Transición", "Tercio medio"]
        },
        labios: {
            title: "Labios",
            subtitle: "Zona perioral",
            description: "Región muy solicitada en armonización facial. Se analizan contorno, volumen, definición y simetría.",
            tags: ["Volumen", "Perfilado", "Simetría"]
        },
        menton: {
            title: "Mentón",
            subtitle: "Zona de proyección",
            description: "Importante para equilibrio del tercio inferior, perfil y definición armónica del rostro.",
            tags: ["Proyección", "Perfil", "Tercio inferior"]
        },
        maseteros: {
            title: "Maseteros",
            subtitle: "Zona funcional y estética",
            description: "Área vinculada al contorno mandibular y a la función masticatoria. Muy útil en demos de medicina estética.",
            tags: ["Mandíbula", "Contorno", "Funcional"]
        }
    };
}

function quadrantLabel(q) {
    const labels = {
        "1": "Superior derecho",
        "2": "Superior izquierdo",
        "3": "Inferior izquierdo",
        "4": "Inferior derecho"
    };
    return labels[q] || "Cuadrante";
}

function buildOdontogram() {
    const upper = ["18","17","16","15","14","13","12","11","21","22","23","24","25","26","27","28"];
    const lower = ["48","47","46","45","44","43","42","41","31","32","33","34","35","36","37","38"];
    renderToothButtons(topRow, upper);
    renderToothButtons(bottomRow, lower);
}

function renderToothButtons(container, codes) {
    if (!container) return;
    container.innerHTML = "";

    codes.forEach((code) => {
        const btn = document.createElement("button");
        btn.className = "tooth-btn";
        btn.dataset.tooth = code;
        btn.textContent = code;
        btn.addEventListener("click", () => selectTooth(code));
        addTooltipEvents(btn, `Pieza ${code}`);
        container.appendChild(btn);
    });
}

function buildMouthView() {
    const upper = ["18","17","16","15","14","13","12","11","21","22","23","24","25","26","27","28"];
    const lower = ["48","47","46","45","44","43","42","41","31","32","33","34","35","36","37","38"];
    renderMouthArch(mouthUpper, upper, false);
    renderMouthArch(mouthLower, lower, true);
}

function renderMouthArch(container, codes, lower = false) {
    if (!container) return;
    container.innerHTML = "";

    codes.forEach((code) => {
        const div = document.createElement("div");
        div.className = `mouth-tooth ${lower ? "lower" : ""}`;
        div.dataset.tooth = code;
        div.textContent = code;
        div.addEventListener("click", () => selectTooth(code));
        addTooltipEvents(div, `Pieza ${code}`);
        container.appendChild(div);
    });
}

function buildSvgTeeth() {
    if (!svgUpper || !svgLower) return;

    svgUpper.innerHTML = "";
    svgLower.innerHTML = "";

    const upperCodes = ["18","17","16","15","14","13","12","11","21","22","23","24","25","26","27","28"];
    const lowerCodes = ["48","47","46","45","44","43","42","41","31","32","33","34","35","36","37","38"];

    upperCodes.forEach((code, index) => {
        const x = 100 + index * 48;
        svgUpper.appendChild(createSvgTooth(code, x, 118));
    });

    lowerCodes.forEach((code, index) => {
        const x = 100 + index * 48;
        svgLower.appendChild(createSvgTooth(code, x, 234));
    });
}

function createSvgTooth(code, x, y) {
    const ns = "http://www.w3.org/2000/svg";
    const g = document.createElementNS(ns, "g");

    const rect = document.createElementNS(ns, "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", 34);
    rect.setAttribute("height", 68);
    rect.setAttribute("rx", 16);
    rect.setAttribute("class", "svg-tooth");
    rect.dataset.tooth = code;
    rect.addEventListener("click", () => selectTooth(code));

    const text = document.createElementNS(ns, "text");
    text.setAttribute("x", x + 17);
    text.setAttribute("y", y + 40);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("font-size", "14");
    text.setAttribute("font-weight", "700");
    text.setAttribute("fill", "#7d6976");
    text.style.pointerEvents = "none";
    text.textContent = code;

    addTooltipEvents(rect, `Pieza ${code}`);

    g.appendChild(rect);
    g.appendChild(text);
    return g;
}

function selectTooth(code) {
    selectedToothNumber = code;

    document.querySelectorAll("[data-tooth]").forEach((el) => {
        el.classList.toggle("active", el.dataset.tooth === code);
    });

    const data = toothData[code];
    if (!data) return;

    setInfoPanel(data);
}

function bindModeButtons() {
    modeButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            switchMode(btn.dataset.mode);

            if (btn.dataset.mode === "facial") {
                setInfoPanel({
                    title: "Mapa facial comercial",
                    subtitle: "Zonas de aplicación estética",
                    description: "Seleccioná una etiqueta lateral o una zona del rostro para ver información clínica y estética.",
                    tags: ["Facial", "Premium", "Medicina estética"]
                });
            }

            if (btn.dataset.mode === "odontologia" && selectedToothNumber) {
                selectTooth(selectedToothNumber);
            }
        });
    });
}

function switchMode(mode) {
    currentMode = mode;

    modeButtons.forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.mode === mode);
    });

    modePanels.forEach((panel) => {
        panel.classList.toggle("active", panel.dataset.panel === mode);
    });
}

function bindDentalTools() {
    if (fdiSearchBtn) {
        fdiSearchBtn.addEventListener("click", handleSearchTooth);
    }

    if (fdiSearch) {
        fdiSearch.addEventListener("keydown", (e) => {
            if (e.key === "Enter") handleSearchTooth();
        });
    }

    if (prevToothBtn) {
        prevToothBtn.addEventListener("click", () => navigateTooth(-1));
    }

    if (nextToothBtn) {
        nextToothBtn.addEventListener("click", () => navigateTooth(1));
    }

    if (quadrantFilter) {
        quadrantFilter.addEventListener("change", applyQuadrantFilter);
    }
}

function handleSearchTooth() {
    const value = (fdiSearch?.value || "").trim();
    if (toothData[value]) {
        switchMode("odontologia");
        selectTooth(value);
    }
}

function navigateTooth(direction) {
    const ordered = [
        "18","17","16","15","14","13","12","11",
        "21","22","23","24","25","26","27","28",
        "48","47","46","45","44","43","42","41",
        "31","32","33","34","35","36","37","38"
    ];

    let current = selectedToothNumber || "11";
    let index = ordered.indexOf(current);
    if (index === -1) index = 0;

    const nextIndex = (index + direction + ordered.length) % ordered.length;
    switchMode("odontologia");
    selectTooth(ordered[nextIndex]);
}

function applyQuadrantFilter() {
    const q = quadrantFilter.value;
    document.querySelectorAll("[data-tooth]").forEach((el) => {
        const code = el.dataset.tooth;
        const visible = q === "all" || code.startsWith(q);
        el.classList.toggle("dimmed", !visible);
    });
}

function bindFacialModule() {
    faceZones.forEach((zone) => {
        zone.addEventListener("click", () => selectFacialZone(zone.dataset.zone));
        addTooltipEvents(zone, zone.dataset.zone.replaceAll("_", " "));
    });

    faceCallouts.forEach((item) => {
        item.addEventListener("click", () => selectFacialZone(item.dataset.zoneTarget));
    });
}

function selectFacialZone(zoneKey) {
    switchMode("facial");

    faceZones.forEach((zone) => {
        zone.classList.toggle("active", zone.dataset.zone === zoneKey);
    });

    faceCallouts.forEach((item) => {
        item.classList.toggle("active", item.dataset.zoneTarget === zoneKey);
    });

    const data = facialData[zoneKey];
    if (!data) return;

    setInfoPanel(data);
}

function bindExam() {
    const questions = [
        { q: "¿Qué pieza corresponde al incisivo central superior derecho?", a: "La pieza 11." },
        { q: "¿Qué zona se ubica entre las cejas?", a: "La glabela." },
        { q: "¿Qué región se asocia al contorno mandibular?", a: "Los maseteros." },
        { q: "¿Qué pieza corresponde al FDI 26?", a: "Primer molar superior izquierdo." },
        { q: "¿Qué zona es central para volumen y perfilado perioral?", a: "Los labios." }
    ];

    if (newQuestionBtn) {
        newQuestionBtn.addEventListener("click", () => {
            currentQuestion = questions[Math.floor(Math.random() * questions.length)];
            examQuestion.textContent = currentQuestion.q;
            examAnswer.textContent = "La respuesta aparecerá acá.";
        });
    }

    if (showAnswerBtn) {
        showAnswerBtn.addEventListener("click", () => {
            if (!currentQuestion) {
                examAnswer.textContent = "Primero generá una pregunta.";
                return;
            }
            examAnswer.textContent = currentQuestion.a;
        });
    }
}

function setInfoPanel({ title, subtitle, description, tags }) {
    if (infoTitle) infoTitle.textContent = title || "";
    if (infoSubtitle) infoSubtitle.textContent = subtitle || "";
    if (infoDescription) infoDescription.textContent = description || "";

    if (infoTags) {
        infoTags.innerHTML = "";
        (tags || []).forEach((tag) => {
            const span = document.createElement("span");
            span.textContent = tag;
            infoTags.appendChild(span);
        });
    }
}

function addTooltipEvents(element, text) {
    if (!element || !tooltip) return;

    element.addEventListener("mouseenter", () => {
        tooltip.textContent = capitalizeWords(text);
        tooltip.classList.add("show");
    });

    element.addEventListener("mousemove", (e) => {
        tooltip.style.left = `${e.clientX + 14}px`;
        tooltip.style.top = `${e.clientY + 14}px`;
    });

    element.addEventListener("mouseleave", () => {
        tooltip.classList.remove("show");
    });
}

function capitalizeWords(text) {
    return String(text)
        .replaceAll("_", " ")
        .split(" ")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
}
=======
const dentalData = [
    { fdi: 18, name: "Tercer molar superior derecho", shortName: "3er molar", arch: "Superior", quadrant: "1", group: "Molares", side: "Derecho", function: "Trituración", description: "Último molar del cuadrante superior derecho. Participa en la trituración de los alimentos." },
    { fdi: 17, name: "Segundo molar superior derecho", shortName: "2do molar", arch: "Superior", quadrant: "1", group: "Molares", side: "Derecho", function: "Trituración", description: "Molar posterior de gran superficie oclusal, fundamental para la masticación." },
    { fdi: 16, name: "Primer molar superior derecho", shortName: "1er molar", arch: "Superior", quadrant: "1", group: "Molares", side: "Derecho", function: "Trituración", description: "Primer molar permanente superior derecho. Pieza clave en la función masticatoria." },
    { fdi: 15, name: "Segundo premolar superior derecho", shortName: "2do premolar", arch: "Superior", quadrant: "1", group: "Premolares", side: "Derecho", function: "Transición y trituración", description: "Pieza de transición entre caninos y molares. Colabora con el desgarro y la trituración." },
    { fdi: 14, name: "Primer premolar superior derecho", shortName: "1er premolar", arch: "Superior", quadrant: "1", group: "Premolares", side: "Derecho", function: "Transición y trituración", description: "Premolar superior con rol mixto en corte y trituración." },
    { fdi: 13, name: "Canino superior derecho", shortName: "Canino", arch: "Superior", quadrant: "1", group: "Caninos", side: "Derecho", function: "Desgarro", description: "Pieza puntiaguda y robusta, especializada en desgarrar alimentos." },
    { fdi: 12, name: "Incisivo lateral superior derecho", shortName: "Inc. lateral", arch: "Superior", quadrant: "1", group: "Incisivos", side: "Derecho", function: "Corte", description: "Incisivo lateral encargado de cortar los alimentos junto al incisivo central." },
    { fdi: 11, name: "Incisivo central superior derecho", shortName: "Inc. central", arch: "Superior", quadrant: "1", group: "Incisivos", side: "Derecho", function: "Corte", description: "Pieza anterior superior de gran visibilidad, esencial para el corte y la estética." },

    { fdi: 21, name: "Incisivo central superior izquierdo", shortName: "Inc. central", arch: "Superior", quadrant: "2", group: "Incisivos", side: "Izquierdo", function: "Corte", description: "Incisivo central del lado izquierdo. Participa en el corte y en la estética dental." },
    { fdi: 22, name: "Incisivo lateral superior izquierdo", shortName: "Inc. lateral", arch: "Superior", quadrant: "2", group: "Incisivos", side: "Izquierdo", function: "Corte", description: "Incisivo lateral superior izquierdo, complementa la acción de corte." },
    { fdi: 23, name: "Canino superior izquierdo", shortName: "Canino", arch: "Superior", quadrant: "2", group: "Caninos", side: "Izquierdo", function: "Desgarro", description: "Canino superior izquierdo, diseñado para desgarrar y guiar movimientos mandibulares." },
    { fdi: 24, name: "Primer premolar superior izquierdo", shortName: "1er premolar", arch: "Superior", quadrant: "2", group: "Premolares", side: "Izquierdo", function: "Transición y trituración", description: "Premolar con función intermedia entre canino y molar." },
    { fdi: 25, name: "Segundo premolar superior izquierdo", shortName: "2do premolar", arch: "Superior", quadrant: "2", group: "Premolares", side: "Izquierdo", function: "Transición y trituración", description: "Premolar superior izquierdo con papel importante en la masticación." },
    { fdi: 26, name: "Primer molar superior izquierdo", shortName: "1er molar", arch: "Superior", quadrant: "2", group: "Molares", side: "Izquierdo", function: "Trituración", description: "Molar principal de la arcada superior izquierda. Muy importante en la masticación." },
    { fdi: 27, name: "Segundo molar superior izquierdo", shortName: "2do molar", arch: "Superior", quadrant: "2", group: "Molares", side: "Izquierdo", function: "Trituración", description: "Segundo molar superior izquierdo, ayuda a triturar alimentos." },
    { fdi: 28, name: "Tercer molar superior izquierdo", shortName: "3er molar", arch: "Superior", quadrant: "2", group: "Molares", side: "Izquierdo", function: "Trituración", description: "Último molar del cuadrante superior izquierdo." },

    { fdi: 48, name: "Tercer molar inferior derecho", shortName: "3er molar", arch: "Inferior", quadrant: "4", group: "Molares", side: "Derecho", function: "Trituración", description: "Último molar inferior derecho, ubicado en la zona posterior mandibular." },
    { fdi: 47, name: "Segundo molar inferior derecho", shortName: "2do molar", arch: "Inferior", quadrant: "4", group: "Molares", side: "Derecho", function: "Trituración", description: "Segundo molar mandibular derecho, con amplia superficie para triturar." },
    { fdi: 46, name: "Primer molar inferior derecho", shortName: "1er molar", arch: "Inferior", quadrant: "4", group: "Molares", side: "Derecho", function: "Trituración", description: "Primer molar inferior derecho, pieza fundamental de la masticación." },
    { fdi: 45, name: "Segundo premolar inferior derecho", shortName: "2do premolar", arch: "Inferior", quadrant: "4", group: "Premolares", side: "Derecho", function: "Transición y trituración", description: "Segundo premolar mandibular derecho con función mixta." },
    { fdi: 44, name: "Primer premolar inferior derecho", shortName: "1er premolar", arch: "Inferior", quadrant: "4", group: "Premolares", side: "Derecho", function: "Transición y trituración", description: "Primer premolar inferior derecho, intermediario entre canino y molares." },
    { fdi: 43, name: "Canino inferior derecho", shortName: "Canino", arch: "Inferior", quadrant: "4", group: "Caninos", side: "Derecho", function: "Desgarro", description: "Canino mandibular derecho, resistente y preparado para desgarrar." },
    { fdi: 42, name: "Incisivo lateral inferior derecho", shortName: "Inc. lateral", arch: "Inferior", quadrant: "4", group: "Incisivos", side: "Derecho", function: "Corte", description: "Incisivo lateral inferior derecho, colabora en el corte de alimentos." },
    { fdi: 41, name: "Incisivo central inferior derecho", shortName: "Inc. central", arch: "Inferior", quadrant: "4", group: "Incisivos", side: "Derecho", function: "Corte", description: "Incisivo central inferior derecho, pequeño y eficaz en el corte." },

    { fdi: 31, name: "Incisivo central inferior izquierdo", shortName: "Inc. central", arch: "Inferior", quadrant: "3", group: "Incisivos", side: "Izquierdo", function: "Corte", description: "Incisivo central inferior izquierdo, pieza anterior mandibular." },
    { fdi: 32, name: "Incisivo lateral inferior izquierdo", shortName: "Inc. lateral", arch: "Inferior", quadrant: "3", group: "Incisivos", side: "Izquierdo", function: "Corte", description: "Incisivo lateral inferior izquierdo, complementa el corte." },
    { fdi: 33, name: "Canino inferior izquierdo", shortName: "Canino", arch: "Inferior", quadrant: "3", group: "Caninos", side: "Izquierdo", function: "Desgarro", description: "Canino inferior izquierdo, con cúspide marcada para desgarrar." },
    { fdi: 34, name: "Primer premolar inferior izquierdo", shortName: "1er premolar", arch: "Inferior", quadrant: "3", group: "Premolares", side: "Izquierdo", function: "Transición y trituración", description: "Premolar inferior izquierdo de función mixta." },
    { fdi: 35, name: "Segundo premolar inferior izquierdo", shortName: "2do premolar", arch: "Inferior", quadrant: "3", group: "Premolares", side: "Izquierdo", function: "Transición y trituración", description: "Segundo premolar inferior izquierdo, participa en la trituración." },
    { fdi: 36, name: "Primer molar inferior izquierdo", shortName: "1er molar", arch: "Inferior", quadrant: "3", group: "Molares", side: "Izquierdo", function: "Trituración", description: "Primer molar inferior izquierdo, de gran importancia oclusal." },
    { fdi: 37, name: "Segundo molar inferior izquierdo", shortName: "2do molar", arch: "Inferior", quadrant: "3", group: "Molares", side: "Izquierdo", function: "Trituración", description: "Segundo molar inferior izquierdo, ayuda a procesar los alimentos." },
    { fdi: 38, name: "Tercer molar inferior izquierdo", shortName: "3er molar", arch: "Inferior", quadrant: "3", group: "Molares", side: "Izquierdo", function: "Trituración", description: "Último molar del cuadrante inferior izquierdo." }
];

const topRow = document.getElementById("top-row");
const bottomRow = document.getElementById("bottom-row");
const infoPanel = document.getElementById("info-panel");
const tooltip = document.getElementById("tooltip");
const infoTitle = document.getElementById("info-title");
const infoSubtitle = document.getElementById("info-subtitle");

const modeButtons = document.querySelectorAll(".mode-btn");
const modePanels = document.querySelectorAll(".mode-panel");

const newQuestionBtn = document.getElementById("new-question-btn");
const showAnswerBtn = document.getElementById("show-answer-btn");
const examQuestion = document.getElementById("exam-question");
const examAnswer = document.getElementById("exam-answer");

let currentQuestion = null;

function createToothElement(tooth, rowType) {
    const toothEl = document.createElement("div");
    toothEl.className = `tooth ${rowType}`;
    toothEl.dataset.fdi = tooth.fdi;

    toothEl.innerHTML = `
        <div class="tooth-icon">🦷</div>
        <div class="tooth-number">${tooth.fdi}</div>
        <div class="tooth-mini-name">${tooth.shortName}</div>
    `;

    toothEl.addEventListener("mouseenter", (e) => {
        tooltip.style.display = "block";
        tooltip.innerHTML = `<strong>${tooth.name}</strong><br>FDI: ${tooth.fdi}`;
        moveTooltip(e);
    });

    toothEl.addEventListener("mousemove", moveTooltip);

    toothEl.addEventListener("mouseleave", () => {
        tooltip.style.display = "none";
    });

    toothEl.addEventListener("click", () => {
        selectTooth(tooth);
        activateMode("atlas");
    });

    return toothEl;
}

function moveTooltip(e) {
    tooltip.style.left = `${e.clientX + 14}px`;
    tooltip.style.top = `${e.clientY + 14}px`;
}

function renderTeeth() {
    if (!topRow || !bottomRow) return;

    topRow.innerHTML = "";
    bottomRow.innerHTML = "";

    const topTeeth = dentalData.filter(tooth => tooth.arch === "Superior");
    const bottomTeeth = dentalData.filter(tooth => tooth.arch === "Inferior");

    topTeeth.forEach(tooth => {
        topRow.appendChild(createToothElement(tooth, "top"));
    });

    bottomTeeth.forEach(tooth => {
        bottomRow.appendChild(createToothElement(tooth, "bottom"));
    });
}

function clearSelectedTeeth() {
    document.querySelectorAll(".tooth").forEach(tooth => {
        tooth.classList.remove("selected");
    });
}

function selectTooth(tooth) {
    clearSelectedTeeth();

    const activeTooth = document.querySelector(`.tooth[data-fdi="${tooth.fdi}"]`);
    if (activeTooth) {
        activeTooth.classList.add("selected");
    }

    infoTitle.textContent = "Información del diente";
    infoSubtitle.textContent = "Panel anatómico descriptivo";
    infoPanel.classList.remove("empty");
    infoPanel.innerHTML = `
        <div class="detail-card">
            <div class="detail-top">
                <div class="detail-icon">🦷</div>
                <div class="detail-title">
                    <h4>${tooth.name}</h4>
                    <p>Pieza dental seleccionada</p>
                </div>
            </div>

            <div class="detail-grid">
                <div class="detail-item">
                    <strong>Numeración FDI</strong>
                    <span>${tooth.fdi}</span>
                </div>

                <div class="detail-item">
                    <strong>Arcada</strong>
                    <span>${tooth.arch}</span>
                </div>

                <div class="detail-item">
                    <strong>Cuadrante</strong>
                    <span>${tooth.quadrant}</span>
                </div>

                <div class="detail-item">
                    <strong>Lado</strong>
                    <span>${tooth.side}</span>
                </div>

                <div class="detail-item">
                    <strong>Grupo dental</strong>
                    <span>${tooth.group}</span>
                </div>

                <div class="detail-item">
                    <strong>Función principal</strong>
                    <span>${tooth.function}</span>
                </div>
            </div>

            <div class="detail-description">
                <h5>Descripción anatómica</h5>
                <p>${tooth.description}</p>
            </div>
        </div>
    `;
}

function setInfoMessage(title, subtitle, htmlContent) {
    infoTitle.textContent = title;
    infoSubtitle.textContent = subtitle;
    infoPanel.classList.remove("empty");
    infoPanel.innerHTML = htmlContent;
}

function activateMode(mode) {
    modeButtons.forEach(btn => {
        btn.classList.toggle("active", btn.dataset.mode === mode);
    });

    modePanels.forEach(panel => {
        panel.classList.toggle("active", panel.id === `panel-${mode}`);
    });

    if (mode === "atlas") {
        infoTitle.textContent = "Información del diente";
        infoSubtitle.textContent = "Panel anatómico descriptivo";

        if (infoPanel.innerHTML.trim() === "") {
            infoPanel.classList.add("empty");
            infoPanel.innerHTML = `
                <div class="empty-state">
                    <div class="empty-icon">🦷</div>
                    <h4>Seleccioná una pieza dental</h4>
                    <p>
                        Hacé clic sobre cualquier diente del mapa para ver
                        numeración FDI, nombre, cuadrante, arcada y función.
                    </p>
                </div>
            `;
        }
    }

    if (mode === "craneo") {
        setInfoMessage(
            "Información del modelo",
            "Visor 3D",
            `
            <div class="detail-card">
                <div class="detail-top">
                    <div class="detail-icon">💀</div>
                    <div class="detail-title">
                        <h4>Cráneo 3D interactivo</h4>
                        <p>Modelo anatómico para exploración general</p>
                    </div>
                </div>

                <div class="detail-description">
                    <h5>Uso sugerido</h5>
                    <p>
                        Este modo permite mostrar al cliente una visualización anatómica más profesional, con rotación, zoom y exploración libre del cráneo.
                    </p>
                </div>

                <div class="detail-item">
                    <strong>Objetivo</strong>
                    <span>Visualización anatómica tridimensional</span>
                </div>

                <div class="detail-item">
                    <strong>Fuente</strong>
                    <span>Sketchfab embebido</span>
                </div>
            </div>
            `
        );
    }

    if (mode === "boca") {
        setInfoMessage(
            "Información del modelo",
            "Visor 3D",
            `
            <div class="detail-card">
                <div class="detail-top">
                    <div class="detail-icon">👄</div>
                    <div class="detail-title">
                        <h4>Boca 3D interactiva</h4>
                        <p>Exploración anatómica de la cavidad oral</p>
                    </div>
                </div>

                <div class="detail-description">
                    <h5>Uso sugerido</h5>
                    <p>
                        Este modo sirve como base para futuras mejoras, por ejemplo resaltar dientes, mostrar zonas anatómicas y sincronizar selección con el odontograma.
                    </p>
                </div>

                <div class="detail-item">
                    <strong>Objetivo</strong>
                    <span>Vista 3D oral para estudio y demostración</span>
                </div>

                <div class="detail-item">
                    <strong>Próxima mejora</strong>
                    <span>Sincronizar diente seleccionado con el modelo 3D</span>
                </div>
            </div>
            `
        );
    }

    if (mode === "examen") {
        setInfoMessage(
            "Modo examen",
            "Evaluación básica",
            `
            <div class="detail-card">
                <div class="detail-top">
                    <div class="detail-icon">📝</div>
                    <div class="detail-title">
                        <h4>Evaluación de identificación dental</h4>
                        <p>Práctica inicial para la demo</p>
                    </div>
                </div>

                <div class="detail-description">
                    <h5>Cómo funciona</h5>
                    <p>
                        Genera una pregunta aleatoria y permite mostrar la respuesta. Después podemos convertirlo en examen real con puntaje, intentos y progreso.
                    </p>
                </div>
            </div>
            `
        );
    }
}

function generateQuestion() {
    const randomTooth = dentalData[Math.floor(Math.random() * dentalData.length)];
    currentQuestion = randomTooth;

    const questionTypes = [
        `¿Qué diente corresponde a la numeración FDI ${randomTooth.fdi}?`,
        `¿Cuál es el nombre anatómico de la pieza ${randomTooth.fdi}?`,
        `Identificá la pieza dental ubicada en ${randomTooth.arch.toLowerCase()}, lado ${randomTooth.side.toLowerCase()}, cuadrante ${randomTooth.quadrant}.`
    ];

    const randomQuestion = questionTypes[Math.floor(Math.random() * questionTypes.length)];
    examQuestion.textContent = randomQuestion;
    examAnswer.textContent = "Respuesta oculta. Presioná “Mostrar respuesta”.";
}

function showAnswer() {
    if (!currentQuestion) {
        examAnswer.textContent = "Primero generá una pregunta nueva.";
        return;
    }

    examAnswer.innerHTML = `
        <strong>Respuesta:</strong> ${currentQuestion.name}<br>
        <strong>FDI:</strong> ${currentQuestion.fdi}<br>
        <strong>Grupo:</strong> ${currentQuestion.group}<br>
        <strong>Función:</strong> ${currentQuestion.function}
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    renderTeeth();

    modeButtons.forEach(button => {
        button.addEventListener("click", () => {
            activateMode(button.dataset.mode);
        });
    });

    if (newQuestionBtn) {
        newQuestionBtn.addEventListener("click", generateQuestion);
    }

    if (showAnswerBtn) {
        showAnswerBtn.addEventListener("click", showAnswer);
    }

    activateMode("atlas");
});
>>>>>>> b2f4697c3b9831e191df962b633dab45be946897
