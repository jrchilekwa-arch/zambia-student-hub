
/* ==================================
   ZAMBIA STUDENT HUB
   COMPLETE JAVASCRIPT
================================== */


/* ==============================
   PAGE NAVIGATION
================================ */

function showPage(pageId) {

  const pages = document.querySelectorAll(".page");

  pages.forEach(page => {
    page.classList.remove("active");
  });

  const selectedPage = document.getElementById(pageId);

  if (selectedPage) {
    selectedPage.classList.add("active");
  }

  // Update navigation
  const navLinks = document.querySelectorAll(".nav a");

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + pageId) {
      link.classList.add("active");
    }
  });

  // Close mobile menu
  const nav = document.getElementById("nav");

  if (nav) {
    nav.classList.remove("open");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  history.replaceState(null, "", "#" + pageId);
}


/* ==============================
   LOAD PAGE FROM URL
================================ */

function loadPageFromHash() {

  let page = window.location.hash.replace("#", "");

  const validPages = [
    "home",
    "subjects",
    "papers",
    "opportunities",
    "tips",
    "contact"
  ];

  if (!validPages.includes(page)) {
    page = "home";
  }

  showPage(page);
}


/* ==============================
   MOBILE MENU
================================ */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn) {

  menuBtn.addEventListener("click", () => {

    nav.classList.toggle("open");

    if (nav.classList.contains("open")) {
      menuBtn.textContent = "✕";
    } else {
      menuBtn.textContent = "☰";
    }

  });

}


/* ==============================
   DARK MODE
================================ */

const themeBtn = document.getElementById("themeBtn");

const savedTheme = localStorage.getItem("zsh-theme");

if (savedTheme === "dark") {

  document.body.classList.add("dark");

  if (themeBtn) {
    themeBtn.textContent = "☀️";
  }

}

if (themeBtn) {

  themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const dark = document.body.classList.contains("dark");

    localStorage.setItem(
      "zsh-theme",
      dark ? "dark" : "light"
    );

    themeBtn.textContent = dark ? "☀️" : "🌙";

  });

}


/* ==============================
   SUBJECT DATA
================================ */

const subjects = {

  Mathematics: [
    "Algebra Basics",
    "Geometry Revision",
    "Fractions & Percentages",
    "Graphs & Functions",
    "Statistics",
    "Exam Practice"
  ],

  English: [
    "Grammar Basics",
    "Comprehension",
    "Essay Writing",
    "Vocabulary",
    "Summary Writing"
  ],

  Biology: [
    "Cells",
    "Human Body",
    "Genetics",
    "Ecology"
  ],

  Chemistry: [
    "Atoms & Elements",
    "Chemical Reactions",
    "Acids & Bases"
  ],

  Physics: [
    "Forces & Motion",
    "Energy",
    "Electricity",
    "Waves"
  ],

  Geography: [
    "Map Reading",
    "Population",
    "Climate",
    "Natural Resources"
  ],

  History: [
    "Zambian History",
    "African History",
    "World History"
  ],

  ICT: [
    "Computer Basics",
    "Internet Safety",
    "Programming Basics",
    "Digital Skills"
  ],

  Commerce: [
    "Business Basics",
    "Trade",
    "Entrepreneurship"
  ],

  Science: [
    "Living Things",
    "Matter",
    "Energy",
    "Environment",
    "Scientific Method"
  ]

};


/* ==============================
   OPEN SUBJECT
================================ */

function openSubject(subjectName) {

  const modal = document.getElementById("subjectModal");
  const modalContent = document.getElementById("modalContent");

  const resources = subjects[subjectName] || [];

  let html = `
    <div class="badge">📚 ${subjectName}</div>

    <h2>${subjectName} Resources</h2>

    <p>
      Explore these learning topics and start building
      your understanding of ${subjectName}.
    </p>

    <div style="margin-top:20px;">
  `;

  resources.forEach((resource, index) => {

    html += `
      <div class="modal-resource">

        <div>
          <strong>${index + 1}. ${resource}</strong>
        </div>

        <button
          onclick="saveResource('${resource}')">
          ☆ Save
        </button>

      </div>
    `;

  });

  html += `
    </div>

    <div style="margin-top:25px;">
      <button
        class="primary-btn"
        onclick="closeModal()">
        Done
      </button>
    </div>
  `;

  modalContent.innerHTML = html;

  modal.classList.add("show");
}


/* ==============================
   CLOSE MODAL
================================ */

function closeModal() {

  const modal = document.getElementById("subjectModal");

  if (modal) {
    modal.classList.remove("show");
  }

}


/* Close modal when clicking outside */

const modal = document.getElementById("subjectModal");

if (modal) {

  modal.addEventListener("click", event => {

    if (event.target === modal) {
      closeModal();
    }

  });

}


/* ==============================
   SAVE RESOURCES
================================ */

function saveResource(resourceName) {

  let saved =
    JSON.parse(
      localStorage.getItem("zsh-saved") || "[]"
    );

  if (!saved.includes(resourceName)) {

    saved.push(resourceName);

    localStorage.setItem(
      "zsh-saved",
      JSON.stringify(saved)
    );

    showMessage(
      "⭐ " + resourceName + " saved!"
    );

  } else {

    showMessage(
      "Already saved ⭐"
    );

  }

  updateProgress();
}


/* ==============================
   PROGRESS
================================ */

function updateProgress() {

  const saved =
    JSON.parse(
      localStorage.getItem("zsh-saved") || "[]"
    );

  const totalResources = 30;

  let progress =
    Math.round(
      (saved.length / totalResources) * 100
    );

  if (progress > 100) {
    progress = 100;
  }

  const number =
    document.getElementById("progressNumber");

  const text =
    document.getElementById("progressText");

  if (number) {
    number.textContent = progress + "%";
  }

  if (text) {

    if (saved.length === 0) {

      text.textContent =
        "Start exploring resources to build your learning progress.";

    } else {

      text.textContent =
        `You've saved ${saved.length} learning resource${
          saved.length === 1 ? "" : "s"
        }. Keep going!`;

    }

  }

}


/* ==============================
   SEARCH
================================ */

function performSearch() {

  const input =
    document.getElementById("globalSearch");

  const results =
    document.getElementById("searchResults");

  if (!input || !results) return;

  const query =
    input.value.trim().toLowerCase();

  if (!query) {

    results.classList.remove("show");

    return;
  }

  const matches = [];

  Object.keys(subjects).forEach(subject => {

    if (subject.toLowerCase().includes(query)) {

      matches.push({
        title: subject,
        type: "Subject"
      });

    }

    subjects[subject].forEach(resource => {

      if (resource.toLowerCase().includes(query)) {

        matches.push({
          title: resource,
          type: subject
        });

      }

    });

  });

  const fixedResults = [
    {
      title: "Past Papers",
      type: "Section"
    },
    {
      title: "Scholarships",
      type: "Opportunity"
    },
    {
      title: "Bursaries",
      type: "Opportunity"
    },
    {
      title: "Study Tips",
      type: "Section"
    }
  ];

  fixedResults.forEach(item => {

    if (
      item.title
        .toLowerCase()
        .includes(query)
    ) {
      matches.push(item);
    }

  });

  if (matches.length === 0) {

    results.innerHTML = `
      <p style="color:var(--muted);">
        No results found for "<strong>${escapeHTML(query)}</strong>".
      </p>
    `;

  } else {

    results.innerHTML = `
      <strong>
        ${matches.length} result${matches.length === 1 ? "" : "s"} found
      </strong>

      <div style="margin-top:10px;display:grid;gap:8px;">

        ${matches.slice(0, 8).map(item => `

          <button
            onclick="searchResultAction('${escapeHTML(item.title)}')"
            style="
              text-align:left;
              border:1px solid var(--border);
              background:var(--bg);
              color:var(--text);
              padding:11px;
              border-radius:9px;
            "
          >

            <strong>${escapeHTML(item.title)}</strong>

            <small style="
              color:var(--muted);
              display:block;
              margin-top:2px;
            ">
              ${escapeHTML(item.type)}
            </small>

          </button>

        `).join("")}

      </div>
    `;

  }

  results.classList.add("show");
}


/* Search result action */

function searchResultAction(title) {

  const pageMap = {
    "Past Papers": "papers",
    "Scholarships": "opportunities",
    "Bursaries": "opportunities",
    "Study Tips": "tips"
  };

  if (pageMap[title]) {

    showPage(pageMap[title]);

    return;
  }

  if (subjects[title]) {

    openSubject(title);

    return;
  }

  // Search individual resource
  Object.keys(subjects).forEach(subject => {

    if (subjects[subject].includes(title)) {

      openSubject(subject);

    }

  });

}


/* Search when pressing Enter */

const globalSearch =
  document.getElementById("globalSearch");

if (globalSearch) {

  globalSearch.addEventListener("keydown", event => {

    if (event.key === "Enter") {
      performSearch();
    }

  });

}


/* ==============================
   CONTACT FORM
================================ */

const contactForm =
  document.getElementById("contactForm");

if (contactForm) {

  contactForm.addEventListener("submit", event => {

    event.preventDefault();

    const name =
      document.getElementById("name").value.trim();

    if (!name) return;

    showMessage(
      "Thanks, " + name + "! Your message has been received."
    );

    contactForm.reset();

  });

}


/* ==============================
   STUDY TIMER
================================ */

let timerInterval = null;

function startTimer() {

  let seconds = 25 * 60;

  showMessage(
    "⏱ 25-minute study session started!"
  );

  if (timerInterval) {
    clearInterval(timerInterval);
  }

  timerInterval = setInterval(() => {

    seconds--;

    if (seconds <= 0) {

      clearInterval(timerInterval);

      showMessage(
        "🎉 Great work! Time for a 5-minute break."
      );

      return;
    }

  }, 1000);

}


/* ==============================
   MESSAGE / TOAST
================================ */

function showMessage(message) {

  const toast =
    document.getElementById("toast");

  if (!toast) return;

  toast.textContent = message;

  toast.classList.add("show");

  setTimeout(() => {

    toast.classList.remove("show");

  }, 3000);

}


/* ==============================
   SAFE HTML
================================ */

function escapeHTML(value) {

  return String(value)

    .replace(/&/g, "&amp;")

    .replace(/</g, "&lt;")

    .replace(/>/g, "&gt;")

    .replace(/"/g, "&quot;")

    .replace(/'/g, "&#039;");

}


/* ==============================
   INITIALIZE
================================ */

document.addEventListener("DOMContentLoaded", () => {

  loadPageFromHash();

  updateProgress();

});


/* ==============================
   HANDLE BROWSER BACK/FORWARD
================================ */

window.addEventListener("hashchange", () => {

  loadPageFromHash();

});
