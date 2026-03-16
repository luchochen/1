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