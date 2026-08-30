/* =========================================
   ZAMBIA STUDENT HUB
   VERSION 2 JAVASCRIPT
========================================= */


/* ---------- STUDY RESOURCES ---------- */

const resources = [

  {
    id: 1,
    title: "Mathematics Basics",
    description: "Numbers, fractions, algebra and problem-solving practice.",
    grade: "Grade 7",
    subject: "Mathematics",
    icon: "📐",
    type: "Study Guide"
  },

  {
    id: 2,
    title: "English Language Skills",
    description: "Grammar, comprehension, vocabulary and writing practice.",
    grade: "Grade 7",
    subject: "English",
    icon: "📖",
    type: "Study Guide"
  },

  {
    id: 3,
    title: "Integrated Science",
    description: "Introduction to important science concepts and experiments.",
    grade: "Grade 7",
    subject: "Science",
    icon: "🔬",
    type: "Study Guide"
  },

  {
    id: 4,
    title: "Junior Secondary Mathematics",
    description: "Algebra, geometry, statistics and mathematical reasoning.",
    grade: "Grade 9",
    subject: "Mathematics",
    icon: "📊",
    type: "Study Guide"
  },

  {
    id: 5,
    title: "English Comprehension",
    description: "Improve reading comprehension and written communication.",
    grade: "Grade 9",
    subject: "English",
    icon: "📝",
    type: "Study Guide"
  },

  {
    id: 6,
    title: "ICT Fundamentals",
    description: "Computers, internet safety, information systems and technology.",
    grade: "Grade 9",
    subject: "ICT",
    icon: "💻",
    type: "Study Guide"
  },

  {
    id: 7,
    title: "Senior Secondary Mathematics",
    description: "Advanced algebra, functions, geometry and statistics.",
    grade: "Grade 12",
    subject: "Mathematics",
    icon: "📐",
    type: "Revision"
  },

  {
    id: 8,
    title: "Biology Revision",
    description: "Cells, genetics, ecology, human biology and reproduction.",
    grade: "Grade 12",
    subject: "Biology",
    icon: "🧬",
    type: "Revision"
  },

  {
    id: 9,
    title: "Chemistry Revision",
    description: "Atoms, bonding, reactions, acids, bases and organic chemistry.",
    grade: "Grade 12",
    subject: "Chemistry",
    icon: "🧪",
    type: "Revision"
  },

  {
    id: 10,
    title: "Physics Revision",
    description: "Mechanics, electricity, waves, energy and modern physics.",
    grade: "Grade 12",
    subject: "Physics",
    icon: "⚡",
    type: "Revision"
  },

  {
    id: 11,
    title: "Geography Revision",
    description: "Physical geography, human geography and environmental topics.",
    grade: "Grade 12",
    subject: "Geography",
    icon: "🌍",
    type: "Revision"
  },

  {
    id: 12,
    title: "History Revision",
    description: "Key historical events, people and developments to revise.",
    grade: "Grade 12",
    subject: "History",
    icon: "🏛️",
    type: "Revision"
  },

  {
    id: 13,
    title: "Commerce Basics",
    description: "Business, trade, finance and basic commercial concepts.",
    grade: "Grade 12",
    subject: "Commerce",
    icon: "💼",
    type: "Study Guide"
  },

  {
    id: 14,
    title: "ICT Revision",
    description: "Computer systems, databases, networks and digital skills.",
    grade: "Grade 12",
    subject: "ICT",
    icon: "💻",
    type: "Revision"
  }

];


/* ---------- PAST PAPERS ---------- */

const papers = [

  {
    id: 101,
    title: "Grade 7 Mathematics Practice Paper",
    grade: "Grade 7",
    subject: "Mathematics",
    icon: "📐"
  },

  {
    id: 102,
    title: "Grade 7 English Practice Paper",
    grade: "Grade 7",
    subject: "English",
    icon: "📖"
  },

  {
    id: 103,
    title: "Grade 9 Mathematics Practice Paper",
    grade: "Grade 9",
    subject: "Mathematics",
    icon: "📊"
  },

  {
    id: 104,
    title: "Grade 9 English Practice Paper",
    grade: "Grade 9",
    subject: "English",
    icon: "📝"
  },

  {
    id: 105,
    title: "Grade 12 Mathematics Practice Paper",
    grade: "Grade 12",
    subject: "Mathematics",
    icon: "📐"
  },

  {
    id: 106,
    title: "Grade 12 Biology Practice Paper",
    grade: "Grade 12",
    subject: "Biology",
    icon: "🧬"
  },

  {
    id: 107,
    title: "Grade 12 Chemistry Practice Paper",
    grade: "Grade 12",
    subject: "Chemistry",
    icon: "🧪"
  },

  {
    id: 108,
    title: "Grade 12 Physics Practice Paper",
    grade: "Grade 12",
    subject: "Physics",
    icon: "⚡"
  }

];


/* ---------- PAGE NAVIGATION ---------- */

function showPage(pageId) {

  const pages = document.querySelectorAll(".page");

  pages.forEach(page => {
    page.classList.remove("active");
  });

  const selectedPage = document.getElementById(pageId);

  if (selectedPage) {
    selectedPage.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  const nav = document.getElementById("nav");

  if (nav) {
    nav.classList.remove("open");
  }

  if (pageId === "resources") {
    renderResources();
  }

  if (pageId === "papers") {
    renderPapers();
  }

}


/* ---------- MOBILE MENU ---------- */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {

  menuBtn.addEventListener("click", function () {
    nav.classList.toggle("open");
  });

}


/* ---------- DARK MODE ---------- */

const themeBtn = document.getElementById("themeBtn");

function loadTheme() {

  const savedTheme = localStorage.getItem("zsh-theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");

    if (themeBtn) {
      themeBtn.textContent = "☀️";
    }
  }

}

loadTheme();


if (themeBtn) {

  themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    const dark = document.body.classList.contains("dark");

    localStorage.setItem(
      "zsh-theme",
      dark ? "dark" : "light"
    );

    themeBtn.textContent = dark ? "☀️" : "🌙";

  });

}


/* ---------- RESOURCE RENDERING ---------- */

function renderResources(list = resources) {

  const grid = document.getElementById("resourceGrid");

  if (!grid) return;

  if (list.length === 0) {

    grid.innerHTML = `
      <div class="notice">
        <span>🔎</span>
        <div>
          <strong>No resources found</strong>
          <p>Try another grade or subject.</p>
        </div>
      </div>
    `;

    return;
  }


  grid.innerHTML = list.map(resource => {

    const saved = isSaved(resource.id);

    return `

      <article class="resource-card">

        <div class="resource-top">

          <span class="resource-icon">
            ${resource.icon}
          </span>

          <span class="resource-grade">
            ${resource.grade}
          </span>

        </div>


        <h3>
          ${resource.title}
        </h3>


        <p>
          ${resource.description}
        </p>


        <div class="resource-meta">

          <span>
            ${resource.subject}
          </span>

          <span>
            ${resource.type}
          </span>

        </div>


        <div class="resource-actions">

          <button
            class="view-btn"
            onclick="viewResource(${resource.id})"
          >
            View
          </button>


          <button
            class="save-btn"
            onclick="toggleSave(${resource.id})"
          >
            ${saved ? "⭐ Saved" : "☆ Save"}
          </button>

        </div>

      </article>

    `;

  }).join("");

}


/* ---------- FILTER RESOURCES ---------- */

function applyFilters() {

  const grade =
    document.getElementById("gradeFilter").value;

  const subject =
    document.getElementById("subjectFilter").value;


  const filtered = resources.filter(resource => {

    const gradeMatch =
      grade === "all" ||
      resource.grade === grade;

    const subjectMatch =
      subject === "all" ||
      resource.subject === subject;

    return gradeMatch && subjectMatch;

  });


  renderResources(filtered);

}


function filterResources(subject) {

  showPage("resources");

  const subjectFilter =
    document.getElementById("subjectFilter");

  const gradeFilter =
    document.getElementById("gradeFilter");

  if (subjectFilter) {
    subjectFilter.value = subject;
  }

  if (gradeFilter) {
    gradeFilter.value = "all";
  }

  applyFilters();

}


/* ---------- VIEW RESOURCE ---------- */

function viewResource(id) {

  const resource =
    resources.find(item => item.id === id);

  if (!resource) return;


  const modal =
    document.getElementById("resourceModal");

  const content =
    document.getElementById("modalContent");


  content.innerHTML = `

    <div style="font-size:45px;">
      ${resource.icon}
    </div>

    <span class="resource-grade">
      ${resource.grade}
    </span>

    <h2 style="margin:15px 0 8px;">
      ${resource.title}
    </h2>

    <p>
      ${resource.description}
    </p>

    <div class="resource-meta">

      <span>${resource.subject}</span>

      <span>${resource.type}</span>

    </div>

    <div class="notice">

      <span>📚</span>

      <div>

        <strong>Learning resource</strong>

        <p>
          This section is ready for educational notes,
          lessons, exercises and downloadable materials.
          More verified Zambia-specific content can be added here.
        </p>

      </div>

    </div>

    <button
      class="primary-btn"
      onclick="toggleSave(${resource.id}); closeModal();"
    >
      ${isSaved(resource.id) ? "⭐ Saved Resource" : "☆ Save Resource"}
    </button>

  `;


  modal.classList.add("show");

}


/* ---------- MODAL ---------- */

function closeModal() {

  const modal =
    document.getElementById("resourceModal");

  if (modal) {
    modal.classList.remove("show");
  }

}


const modal =
  document.getElementById("resourceModal");

if (modal) {

  modal.addEventListener("click", function(event) {

    if (event.target === modal) {
      closeModal();
    }

  });

}


/* ---------- SAVED RESOURCES ---------- */

function getSavedResources() {

  try {

    return JSON.parse(
      localStorage.getItem("zsh-saved") || "[]"
    );

  } catch (error) {

    return [];

  }

}


function saveResources(list) {

  localStorage.setItem(
    "zsh-saved",
    JSON.stringify(list)
  );

}


function isSaved(id) {

  return getSavedResources().includes(id);

}


function toggleSave(id) {

  let saved =
    getSavedResources();

  if (saved.includes(id)) {

    saved =
      saved.filter(item => item !== id);

    showMessage("Resource removed from saved list.");

  } else {

    saved.push(id);

    showMessage("⭐ Resource saved!");

  }


  saveResources(saved);

  renderResources();

  updateProgress();

}


/* ---------- PROGRESS ---------- */

function updateProgress() {

  const saved =
    getSavedResources();

  const total =
    resources.length;

  const percentage =
    total === 0
      ? 0
      : Math.min(
          100,
          Math.round((saved.length / total) * 100)
        );


  const number =
    document.getElementById("progressNumber");

  const text =
    document.getElementById("progressText");


  if (number) {
    number.textContent =
      percentage + "%";
  }


  if (text) {

    if (saved.length === 0) {

      text.textContent =
        "Save resources to start building your learning progress.";

    } else {

      text.textContent =
        `You've saved ${saved.length} learning resource${saved.length === 1 ? "" : "s"}. Keep going!`;

    }

  }

}


/* ---------- RESOURCE COUNT ---------- */

function updateResourceCount() {

  const count =
    document.getElementById("resourceCount");

  if (count) {
    count.textContent =
      resources.length;
  }

}


/* ---------- SEARCH ---------- */

function performSearch() {

  const input =
    document.getElementById("globalSearch");

  const results =
    document.getElementById("searchResults");

  if (!input || !results) return;


  const query =
    input.value.trim().toLowerCase();


  if (!query) {

    results.innerHTML = "";

    return;

  }


  const matches =
    resources.filter(resource => {

      const text = `
        ${resource.title}
        ${resource.description}
        ${resource.grade}
        ${resource.subject}
        ${resource.type}
      `.toLowerCase();

      return text.includes(query);

    });


  if (matches.length === 0) {

    results.innerHTML = `

      <div class="notice">

        <span>🔎</span>

        <div>

          <strong>No results found</strong>

          <p>
            Try searching for Mathematics, Grade 12,
            Biology or another subject.
          </p>

        </div>

      </div>

    `;

    return;

  }


  results.innerHTML = `

    <div class="notice">

      <span>🔎</span>

      <div>

        <strong>
          ${matches.length} result${matches.length === 1 ? "" : "s"} found
        </strong>

        <p>
          Showing results for "${input.value}".
        </p>

      </div>

    </div>

  `;


  showPage("resources");


  const gradeFilter =
    document.getElementById("gradeFilter");

  const subjectFilter =
    document.getElementById("subjectFilter");


  if (gradeFilter) {
    gradeFilter.value = "all";
  }

  if (subjectFilter) {
    subjectFilter.value = "all";
  }


  renderResources(matches);

}


/* Search when pressing Enter */

const globalSearch =
  document.getElementById("globalSearch");

if (globalSearch) {

  globalSearch.addEventListener(
    "keydown",
    function(event) {

      if (event.key === "Enter") {
        performSearch();
      }

    }
  );

}


/* ---------- PAST PAPERS ---------- */

function renderPapers(list = papers) {

  const container =
    document.getElementById("paperList");

  if (!container) return;


  if (list.length === 0) {

    container.innerHTML = `

      <div class="notice">

        <span>📝</span>

        <div>

          <strong>No papers found</strong>

          <p>
            Try another grade.
          </p>

        </div>

      </div>

    `;

    return;

  }


  container.innerHTML =
    list.map(paper => `

      <article class="resource-card">

        <div class="resource-top">

          <span class="resource-icon">
            ${paper.icon}
          </span>

          <span class="resource-grade">
            ${paper.grade}
          </span>

        </div>


        <h3>
          ${paper.title}
        </h3>


        <p>
          ${paper.subject} practice questions
          for examination preparation.
        </p>


        <div class="resource-actions">

          <button
            class="view-btn"
            onclick="showMessage('This practice paper section is ready for the paper file to be added.')"
          >
            View Paper
          </button>

          <button
            class="save-btn"
            onclick="showMessage('Paper saved for later!')"
          >
            ☆ Save
          </button>

        </div>

      </article>

    `).join("");

}


function filterPapers(grade) {

  showPage("papers");

  const filtered =
    papers.filter(paper =>
      paper.grade === grade
    );

  renderPapers(filtered);

}


/* ---------- STUDY TIMER ---------- */

let timerInterval = null;

let timerSeconds = 25 * 60;


function startTimer() {

  if (timerInterval) {

    clearInterval(timerInterval);

    timerInterval = null;

  }


  let remaining =
    timerSeconds;


  showMessage(
    "⏱ Study timer started — 25 minutes!"
  );


  timerInterval =
    setInterval(function() {

      remaining--;


      if (remaining <= 0) {

        clearInterval(timerInterval);

        timerInterval = null;

        showMessage(
          "🎉 Great work! Time for a 5-minute break."
        );

      }

    }, 1000);

}


/* ---------- MESSAGE / TOAST ---------- */

let toastTimeout = null;


function showMessage(message) {

  const toast =
    document.getElementById("toast");

  if (!toast) return;


  toast.textContent =
    message;

  toast.classList.add("show");


  clearTimeout(toastTimeout);


  toastTimeout =
    setTimeout(function() {

      toast.classList.remove("show");

    }, 2800);

}


/* ---------- CONTACT FORM ---------- */

const contactForm =
  document.getElementById("contactForm");


if (contactForm) {

  contactForm.addEventListener(
    "submit",
    function(event) {

      event.preventDefault();

      showMessage(
        "Thanks! Your message has been received by this demo form."
      );

      contactForm.reset();

    }
  );

}


/* ---------- INITIAL LOAD ---------- */

document.addEventListener(
  "DOMContentLoaded",
  function() {

    renderResources();

    renderPapers();

    updateProgress();

    updateResourceCount();

  }
);


/* ---------- HANDLE URL HASH ---------- */

window.addEventListener(
  "load",
  function() {

    const hash =
      window.location.hash.replace("#", "");

    const validPages = [
      "home",
      "resources",
      "papers",
      "opportunities",
      "tips",
      "contact"
    ];


    if (validPages.includes(hash)) {
      showPage(hash);
    } else {
      showPage("home");
    }

  }
);
