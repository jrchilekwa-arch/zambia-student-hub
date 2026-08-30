/* =========================================
   ZAMBIA STUDENT HUB
   COMPLETE FINAL JAVASCRIPT
========================================= */


/* ================= RESOURCES ================= */

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


/* ================= PAST PAPERS ================= */

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


/* ================= NAVIGATION ================= */

function showPage(pageId) {

  document
    .querySelectorAll(".page")
    .forEach(page => {
      page.classList.remove("active");
    });


  const page =
    document.getElementById(pageId);

  if (page) {
    page.classList.add("active");
  }


  const nav =
    document.getElementById("nav");

  if (nav) {
    nav.classList.remove("open");
  }


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });


  if (pageId === "resources") {
    renderResources();
  }


  if (pageId === "papers") {
    renderPapers();
  }

}


/* ================= MOBILE MENU ================= */

const menuBtn =
  document.getElementById("menuBtn");

const nav =
  document.getElementById("nav");


if (menuBtn) {

  menuBtn.addEventListener(
    "click",
    () => {
      nav.classList.toggle("open");
    }
  );

}


/* ================= DARK MODE ================= */

const themeBtn =
  document.getElementById("themeBtn");


function loadTheme() {

  const theme =
    localStorage.getItem("zsh-theme");

  if (theme === "dark") {

    document.body.classList.add("dark");

    if (themeBtn) {
      themeBtn.textContent = "☀️";
    }

  }

}


loadTheme();


if (themeBtn) {

  themeBtn.addEventListener(
    "click",
    () => {

      document.body.classList.toggle("dark");

      const dark =
        document.body.classList.contains("dark");


      localStorage.setItem(
        "zsh-theme",
        dark ? "dark" : "light"
      );


      themeBtn.textContent =
        dark ? "☀️" : "🌙";

    }
  );

}


/* ================= RESOURCES ================= */

function renderResources(list = resources) {

  const grid =
    document.getElementById("resourceGrid");

  if (!grid) return;


  if (list.length === 0) {

    grid.innerHTML = `

      <div class="notice">

        <span>🔎</span>

        <div>

          <strong>No resources found</strong>

          <p>
            Try another grade or subject.
          </p>

        </div>

      </div>

    `;

    return;
  }


  grid.innerHTML =
    list.map(resource => {

      const saved =
        isSaved(resource.id);


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


/* ================= FILTER ================= */

function applyFilters() {

  const grade =
    document.getElementById("gradeFilter").value;

  const subject =
    document.getElementById("subjectFilter").value;


  const filtered =
    resources.filter(resource => {

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


/* ================= VIEW RESOURCE ================= */

function viewResource(id) {

  const resource =
    resources.find(item => item.id === id);

  if (!resource) return;


  const modal =
    document.getElementById("resourceModal");

  const content =
    document.getElementById("modalContent");


  content.innerHTML = `

    <div class="resource-icon">
      ${resource.icon}
    </div>

    <span class="resource-grade">
      ${resource.grade}
    </span>

    <h2 style="margin:18px 0 10px;">
      ${resource.title}
    </h2>

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

    <div class="notice" style="margin-top:22px;">

      <span>📚</span>

      <div>

        <strong>
          Learning resource
        </strong>

        <p>
          This resource area is ready for lessons,
          notes, exercises and downloadable study
          materials.
        </p>

      </div>

    </div>

    <button
      class="btn btn-primary"
      onclick="toggleSave(${resource.id}); closeModal();"
    >
      ${isSaved(resource.id)
        ? "⭐ Saved"
        : "☆ Save Resource"}
    </button>

  `;


  modal.classList.add("show");

}


function closeModal() {

  const modal =
    document.getElementById("resourceModal");

  if (modal) {
    modal.classList.remove("show");
  }

}


const resourceModal =
  document.getElementById("resourceModal");


if (resourceModal) {

  resourceModal.addEventListener(
    "click",
    event => {

      if (event.target === resourceModal) {
        closeModal();
      }

    }
  );

}


/* ================= SAVED ================= */

function getSavedResources() {

  try {

    return JSON.parse(
      localStorage.getItem("zsh-saved") || "[]"
    );

  } catch {

    return [];

  }

}


function isSaved(id) {

  return getSavedResources()
    .includes(id);

}


function toggleSave(id) {

  let saved =
    getSavedResources();


  if (saved.includes(id)) {

    saved =
      saved.filter(item => item !== id);

    showMessage(
      "Resource removed from saved list."
    );

  } else {

    saved.push(id);

    showMessage(
      "⭐ Resource saved!"
    );

  }


  localStorage.setItem(
    "zsh-saved",
    JSON.stringify(saved)
  );


  renderResources();

  updateProgress();

}


/* ================= PROGRESS ================= */

function updateProgress() {

  const saved =
    getSavedResources();


  const percentage =
    Math.min(
      100,
      Math.round(
        (saved.length / resources.length) * 100
      )
    );


  const fill =
    document.getElementById("progressNumber");

  const percent =
    document.getElementById("progressPercent");

  const text =
    document.getElementById("progressText");


  if (fill) {
    fill.style.width =
      percentage + "%";
  }


  if (percent) {
    percent.textContent =
      percentage + "%";
  }


  if (text) {

    if (saved.length === 0) {

      text.textContent =
        "Save resources to start building your learning progress.";

    } else {

      text.textContent =
        `You've saved ${saved.length} resource${saved.length === 1 ? "" : "s"}. Keep going!`;

    }

  }

}


/* ================= COUNT ================= */

function updateResourceCount() {

  const count =
    document.getElementById("resourceCount");

  if (count) {
    count.textContent =
      resources.length;
  }

}


/* ================= SEARCH ================= */

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

      const searchable = `

        ${resource.title}
        ${resource.description}
        ${resource.grade}
        ${resource.subject}
        ${resource.type}

      `.toLowerCase();


      return searchable.includes(query);

    });


  if (matches.length === 0) {

    results.innerHTML = `

      <div class="notice">

        <span>🔎</span>

        <div>

          <strong>
            No results found
          </strong>

          <p>
            Try Mathematics, Grade 12, Biology,
            ICT or another subject.
          </p>

        </div>

      </div>

    `;

    return;

  }


  showPage("resources");


  document.getElementById(
    "gradeFilter"
  ).value = "all";


  document.getElementById(
    "subjectFilter"
  ).value = "all";


  renderResources(matches);


  results.innerHTML = `

    <div class="notice">

      <span>🔎</span>

      <div>

        <strong>
          ${matches.length}
          result${matches.length === 1 ? "" : "s"} found
        </strong>

        <p>
          Showing results for "${input.value}".
        </p>

      </div>

    </div>

  `;

}


const searchInput =
  document.getElementById("globalSearch");


if (searchInput) {

  searchInput.addEventListener(
    "keydown",
    event => {

      if (event.key === "Enter") {
        performSearch();
      }

    }
  );

}


/* ================= PAPERS ================= */

function renderPapers(list = papers) {

  const container =
    document.getElementById("paperList");

  if (!container) return;


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
          Practice questions for
          ${paper.subject}.
        </p>


        <div class="resource-actions">

          <button
            class="view-btn"
            onclick="showMessage('📄 This paper section is ready for a PDF to be added.')"
          >
            View Paper
          </button>

          <button
            class="save-btn"
            onclick="showMessage('⭐ Paper saved for later!')"
          >
            ☆ Save
          </button>

        </div>

      </article>

    `).join("");

}


function filterPapers(grade) {

  const filtered =
    papers.filter(
      paper => paper.grade === grade
    );


  renderPapers(filtered);

}


/* ================= CONTACT ================= */

const contactForm =
  document.getElementById("contactForm");


if (contactForm) {

  contactForm.addEventListener(
    "submit",
    event => {

      event.preventDefault();

      showMessage(
        "✅ Thanks! Your message was received."
      );

      contactForm.reset();

    }
  );

}


/* ================= TOAST ================= */

let toastTimer;


function showMessage(message) {

  const toast =
    document.getElementById("toast");

  if (!toast) return;


  toast.textContent =
    message;


  toast.classList.add("show");


  clearTimeout(toastTimer);


  toastTimer =
    setTimeout(
      () => {
        toast.classList.remove("show");
      },
      2800
    );

}


/* ================= START ================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderResources();

    renderPapers();

    updateProgress();

    updateResourceCount();

  }
);
