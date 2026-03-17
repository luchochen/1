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