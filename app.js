/* =====================================================
   ZAMBIA STUDENT HUB
   COMPLETE JAVASCRIPT
===================================================== */


/* =====================================================
   DATA
===================================================== */

const resources = [

  {
    id: "math7",
    icon: "📐",
    grade: "Grade 7",
    subject: "Mathematics",
    title: "Mathematics Basics",
    description:
      "Numbers, fractions, algebra and problem-solving practice."
  },

  {
    id: "english7",
    icon: "📖",
    grade: "Grade 7",
    subject: "English",
    title: "English Language Skills",
    description:
      "Grammar, comprehension, vocabulary and writing practice."
  },

  {
    id: "science7",
    icon: "🔬",
    grade: "Grade 7",
    subject: "Science",
    title: "Integrated Science",
    description:
      "Introduction to important science concepts and experiments."
  },

  {
    id: "math9",
    icon: "📊",
    grade: "Grade 9",
    subject: "Mathematics",
    title: "Junior Secondary Mathematics",
    description:
      "Algebra, geometry, statistics and problem-solving."
  },

  {
    id: "biology10",
    icon: "🧬",
    grade: "Grade 10",
    subject: "Biology",
    title: "Biology Fundamentals",
    description:
      "Cells, organisms, nutrition and basic biological concepts."
  },

  {
    id: "chemistry10",
    icon: "⚗️",
    grade: "Grade 10",
    subject: "Chemistry",
    title: "Chemistry Fundamentals",
    description:
      "Atoms, elements, compounds and chemical reactions."
  },

  {
    id: "physics11",
    icon: "⚡",
    grade: "Grade 11",
    subject: "Physics",
    title: "Physics Study Guide",
    description:
      "Motion, forces, energy and introductory physics concepts."
  },

  {
    id: "ict11",
    icon: "💻",
    grade: "Grade 11",
    subject: "ICT",
    title: "ICT Study Guide",
    description:
      "Computer systems, information technology and digital skills."
  }

];


const papers = [

  {
    id: "paper-math",
    icon: "📄",
    grade: "Grade 12",
    subject: "Mathematics",
    title: "Mathematics Practice Paper",
    description:
      "Practice mathematics questions and prepare for examinations."
  },

  {
    id: "paper-english",
    icon: "📝",
    grade: "Grade 12",
    subject: "English",
    title: "English Practice Paper",
    description:
      "Improve comprehension, grammar and writing skills."
  },

  {
    id: "paper-science",
    icon: "🔬",
    grade: "Grade 12",
    subject: "Science",
    title: "Science Practice Paper",
    description:
      "Review key science concepts using practice questions."
  },

  {
    id: "paper-biology",
    icon: "🧬",
    grade: "Grade 12",
    subject: "Biology",
    title: "Biology Practice Paper",
    description:
      "Practice biology questions and test your understanding."
  }

];


const opportunities = [

  {
    id: "scholarships",
    icon: "🎓",
    type: "Scholarship",
    title: "Scholarship Opportunities",
    description:
      "Look for scholarships and financial support opportunities."
  },

  {
    id: "university",
    icon: "🏫",
    type: "Education",
    title: "University Opportunities",
    description:
      "Explore university and higher-education opportunities."
  },

  {
    id: "skills",
    icon: "💻",
    type: "Skills",
    title: "Skills & Training",
    description:
      "Find opportunities to develop useful academic and digital skills."
  },

  {
    id: "careers",
    icon: "💼",
    type: "Career",
    title: "Career Opportunities",
    description:
      "Discover internships, career resources and professional opportunities."
  }

];


/* =====================================================
   ELEMENTS
===================================================== */

const menuButton =
  document.getElementById("menuButton");

const mobileMenu =
  document.getElementById("mobileMenu");

const resourceGrid =
  document.getElementById("resourceGrid");

const paperGrid =
  document.getElementById("paperGrid");

const opportunityGrid =
  document.getElementById("opportunityGrid");

const gradeFilter =
  document.getElementById("gradeFilter");

const subjectFilter =
  document.getElementById("subjectFilter");

const searchInput =
  document.getElementById("searchInput");

const searchButton =
  document.getElementById("searchButton");

const searchResults =
  document.getElementById("searchResults");

const year =
  document.getElementById("year");


/* =====================================================
   MOBILE MENU
===================================================== */

menuButton.addEventListener("click", function () {

  const isOpen =
    mobileMenu.classList.toggle("open");

  menuButton.setAttribute(
    "aria-expanded",
    isOpen
  );

  menuButton.textContent =
    isOpen ? "✕" : "☰";

});


/* Close mobile menu after clicking a link */

document
  .querySelectorAll(".mobile-menu a")
  .forEach(function (link) {

    link.addEventListener("click", function () {

      mobileMenu.classList.remove("open");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

      menuButton.textContent = "☰";

    });

  });


/* =====================================================
   SAVED ITEMS
===================================================== */

function getSavedItems() {

  try {

    return JSON.parse(
      localStorage.getItem("zsh_saved") || "[]"
    );

  } catch (error) {

    return [];

  }

}


function isSaved(id) {

  return getSavedItems().includes(id);

}


function toggleSave(id) {

  let saved = getSavedItems();

  if (saved.includes(id)) {

    saved = saved.filter(
      item => item !== id
    );

  } else {

    saved.push(id);

  }

  localStorage.setItem(
    "zsh_saved",
    JSON.stringify(saved)
  );

  renderResources();
  renderPapers();

}


/* =====================================================
   RESOURCE CARDS
===================================================== */

function renderResources() {

  const selectedGrade =
    gradeFilter.value;

  const selectedSubject =
    subjectFilter.value;

  const filtered =
    resources.filter(function (item) {

      const gradeMatch =
        selectedGrade === "all" ||
        item.grade === selectedGrade;

      const subjectMatch =
        selectedSubject === "all" ||
        item.subject === selectedSubject;

      return gradeMatch && subjectMatch;

    });


  if (filtered.length === 0) {

    resourceGrid.innerHTML = `
      <div class="empty-state">
        <h3>No resources found</h3>
        <p>Try another grade or subject.</p>
      </div>
    `;

    return;

  }


  resourceGrid.innerHTML =
    filtered.map(function (item) {

      const saved =
        isSaved(item.id);

      return `

        <article class="resource-card">

          <div class="card-icon">
            ${item.icon}
          </div>

          <span class="card-meta">
            ${item.grade} • ${item.subject}
          </span>

          <h3>
            ${item.title}
          </h3>

          <p>
            ${item.description}
          </p>

          <div class="card-actions">

            <button
              class="view-button"
              onclick="viewResource('${item.id}')"
            >
              View
            </button>

            <button
              class="save-button ${saved ? "saved" : ""}"
              onclick="toggleSave('${item.id}')"
            >
              ${saved ? "⭐ Saved" : "☆ Save"}
            </button>

          </div>

        </article>

      `;

    }).join("");

}


/* =====================================================
   PAST PAPERS
===================================================== */

function renderPapers() {

  paperGrid.innerHTML =
    papers.map(function (item) {

      const saved =
        isSaved(item.id);

      return `

        <article class="paper-card">

          <div class="card-icon">
            ${item.icon}
          </div>

          <span class="card-meta">
            ${item.grade} • ${item.subject}
          </span>

          <h3>
            ${item.title}
          </h3>

          <p>
            ${item.description}
          </p>

          <div class="card-actions">

            <button
              class="view-button"
              onclick="viewPaper('${item.id}')"
            >
              View Paper
            </button>

            <button
              class="save-button ${saved ? "saved" : ""}"
              onclick="toggleSave('${item.id}')"
            >
              ${saved ? "⭐ Saved" : "☆ Save"}
            </button>

          </div>

        </article>

      `;

    }).join("");

}


/* =====================================================
   OPPORTUNITIES
===================================================== */

function renderOpportunities() {

  opportunityGrid.innerHTML =
    opportunities.map(function (item) {

      return `

        <article class="opportunity-card">

          <div class="card-icon">
            ${item.icon}
          </div>

          <span class="card-meta">
            ${item.type}
          </span>

          <h3>
            ${item.title}
          </h3>

          <p>
            ${item.description}
          </p>

          <div class="card-actions">

            <button
              class="view-button"
              onclick="viewOpportunity('${item.id}')"
            >
              Explore
            </button>

          </div>

        </article>

      `;

    }).join("");

}


/* =====================================================
   VIEW RESOURCE
===================================================== */

function viewResource(id) {

  const item =
    resources.find(
      resource => resource.id === id
    );

  if (!item) return;

  alert(
    `${item.title}\n\n` +
    `${item.grade} • ${item.subject}\n\n` +
    `${item.description}\n\n` +
    `Study material coming soon.`
  );

}


/* =====================================================
   VIEW PAPER
===================================================== */

function viewPaper(id) {

  const item =
    papers.find(
      paper => paper.id === id
    );

  if (!item) return;

  alert(
    `${item.title}\n\n` +
    `${item.grade} • ${item.subject}\n\n` +
    `${item.description}\n\n` +
    `Past paper file coming soon.`
  );

}


/* =====================================================
   VIEW OPPORTUNITY
===================================================== */

function viewOpportunity(id) {

  const item =
    opportunities.find(
      opportunity => opportunity.id === id
    );

  if (!item) return;

  alert(
    `${item.title}\n\n` +
    `${item.description}\n\n` +
    `Opportunity information will be added here.`
  );

}


/* =====================================================
   SEARCH
===================================================== */

function performSearch() {

  const query =
    searchInput.value
      .trim()
      .toLowerCase();


  if (!query) {

    searchResults.innerHTML = "";

    return;

  }


  const allItems = [

    ...resources.map(item => ({
      type: "Resource",
      title: item.title,
      description: item.description,
      category:
        `${item.grade} • ${item.subject}`,
      target: "#resources"
    })),

    ...papers.map(item => ({
      type: "Past Paper",
      title: item.title,
      description: item.description,
      category:
        `${item.grade} • ${item.subject}`,
      target: "#papers"
    })),

    ...opportunities.map(item => ({
      type: "Opportunity",
      title: item.title,
      description: item.description,
      category: item.type,
      target: "#opportunities"
    }))

  ];


  const results =
    allItems.filter(function (item) {

      return (

        item.title
          .toLowerCase()
          .includes(query)

        ||

        item.description
          .toLowerCase()
          .includes(query)

        ||

        item.category
          .toLowerCase()
          .includes(query)

        ||

        item.type
          .toLowerCase()
          .includes(query)

      );

    });


  if (results.length === 0) {

    searchResults.innerHTML = `
      <div class="search-result-item">
        No results found for
        <strong>"${escapeHTML(query)}"</strong>.
      </div>
    `;

    return;

  }


  searchResults.innerHTML = `

    <div style="margin-bottom:12px;">
      <strong>
        ${results.length}
        result${results.length === 1 ? "" : "s"} found
      </strong>
    </div>

    ${results.map(function (item) {

      return `

        <a
          href="${item.target}"
          class="search-result-item"
          style="display:block;"
        >

          <strong>
            ${item.title}
          </strong>

          <div>
            ${item.category}
          </div>

          <small>
            ${item.description}
          </small>

        </a>

      `;

    }).join("")}

  `;

}


/* =====================================================
   ESCAPE SEARCH TEXT
===================================================== */

function escapeHTML(text) {

  const div =
    document.createElement("div");

  div.textContent = text;

  return div.innerHTML;

}


/* =====================================================
   SEARCH EVENTS
===================================================== */

searchButton.addEventListener(
  "click",
  performSearch
);


searchInput.addEventListener(
  "keydown",
  function (event) {

    if (event.key === "Enter") {

      performSearch();

    }

  }
);


/* =====================================================
   FILTER EVENTS
===================================================== */

gradeFilter.addEventListener(
  "change",
  renderResources
);


subjectFilter.addEventListener(
  "change",
  renderResources
);


/* =====================================================
   CLOSE SEARCH RESULTS WHEN CLICKING OUTSIDE
===================================================== */

document.addEventListener(
  "click",
  function (event) {

    const searchSection =
      document.querySelector(".search-section");

    if (
      !searchSection.contains(event.target)
    ) {

      searchResults.innerHTML = "";

    }

  }
);


/* =====================================================
   CURRENT YEAR
===================================================== */

year.textContent =
  new Date().getFullYear();


/* =====================================================
   START APPLICATION
===================================================== */

renderResources();
renderPapers();
renderOpportunities();
