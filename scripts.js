// Theme toggle functionality
const themeToggleButton = document.getElementById("theme-toggle");
const rootElement = document.documentElement;

if (themeToggleButton) {
  themeToggleButton.addEventListener("click", () => {
    const isDarkTheme = rootElement.getAttribute("data-theme") === "dark";
    if (isDarkTheme) {
      rootElement.setAttribute("data-theme", "light");
      themeToggleButton.textContent = "Switch to Dark Theme";
    } else {
      rootElement.setAttribute("data-theme", "dark");
      themeToggleButton.textContent = "Switch to Light Theme";
    }
  });
}

// Scroll to top functionality
const scrollToTopButton = document.getElementById("scroll-to-top");

if (scrollToTopButton) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });

  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Navigation buttons
const goToIndexButton = document.getElementById("go-to-index");
const goToVerbTenseChartButton = document.getElementById("go-to-verb-tense-chart");
const goToChartTensesButton = document.getElementById("go-to-chart-tenses");
const verbTenseChartButton = document.getElementById("verb-tense-chart-btn");
const chartTensesButton = document.getElementById("chart-tenses-btn");

if (goToIndexButton) {
  goToIndexButton.addEventListener("click", () => {
    window.location.href = "./index.html";
  });
}

if (goToVerbTenseChartButton) {
  goToVerbTenseChartButton.addEventListener("click", () => {
    window.location.href = "./verb-tense-chart.html";
  });
}

if (goToChartTensesButton) {
  goToChartTensesButton.addEventListener("click", () => {
    window.location.href = "./chart-tenses.html";
  });
}

if (verbTenseChartButton) {
  verbTenseChartButton.addEventListener("click", () => {
    window.location.href = "./verb-tense-chart.html";
  });
}

if (chartTensesButton) {
  chartTensesButton.addEventListener("click", () => {
    window.location.href = "./chart-tenses.html";
  });
}

// Function to populate the verb table
async function populateTable() {
  const tableBody = document.getElementById("verbs-table");
  const spinner = document.getElementById("loading-spinner");

  if (spinner) {
    spinner.style.display = "block";
  }

  await new Promise((resolve) => setTimeout(resolve, 800));

  const rows = verbs.map((verb, index) => {
    const infinitivePronunciation =
      (verb.pronunciation && verb.pronunciation.infinitive)
        ? verb.pronunciation.infinitive
        : verb.infinitive;

    const pastSimplePronunciation =
      (verb.pronunciation && verb.pronunciation.pastSimple)
        ? verb.pronunciation.pastSimple
        : verb.pastSimple;

    const pastParticiplePronunciation =
      (verb.pronunciation && verb.pronunciation.pastParticiple)
        ? verb.pronunciation.pastParticiple
        : verb.pastParticiple;

    return `
      <tr>
        <td>${index + 1}</td>
        <td>
          ${verb.infinitive}
          <br>
          <span class="translation">${verb.translation.infinitive}</span>
          <i class="fas fa-volume-up speaker-icon" 
             onclick="playPronunciation('${verb.infinitive}', '${infinitivePronunciation}')">
          </i>
        </td>
        <td>
          ${verb.pastSimple}
          <br>
          <span class="translation">${verb.translation.pastSimple}</span>
          <i class="fas fa-volume-up speaker-icon" 
             onclick="playPronunciation('${verb.pastSimple}', '${pastSimplePronunciation}')">
          </i>
        </td>
        <td>
          ${verb.pastParticiple}
          <br>
          <span class="translation">${verb.translation.pastParticiple}</span>
          <i class="fas fa-volume-up speaker-icon" 
             onclick="playPronunciation('${verb.pastParticiple}', '${pastParticiplePronunciation}')">
          </i>
        </td>
      </tr>
    `;
  });

  if (spinner) {
    spinner.style.display = "none";
  }

  tableBody.innerHTML = rows.join("");
}

// Function to play the pronunciation
function playPronunciation(text, pronunciation) {
  const sanitizedText = (pronunciation || text).replace(/\//g, " ").replace(/ /g, ", ");
  const utterance = new SpeechSynthesisUtterance(sanitizedText);
  utterance.lang = "en-US";
  speechSynthesis.speak(utterance);
}

// Make the function globally accessible
window.playPronunciation = playPronunciation;

// Call the function to populate the table
document.addEventListener("DOMContentLoaded", () => {
  populateTable();
});