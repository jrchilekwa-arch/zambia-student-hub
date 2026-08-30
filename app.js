/* =========================================================
   ZAMBIA STUDENT HUB
   COMPLETE APP.JS
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     DATA
  ========================= */

  const resources = [
    {
      id: "math7",
      grade: "Grade 7",
      subject: "Mathematics",
      icon: "📐",
      title: "Mathematics Basics",
      description: "Numbers, fractions, algebra and problem-solving practice."
    },
    {
      id: "english7",
      grade: "Grade 7",
      subject: "English",
      icon: "📖",
      title: "English Language Skills",
      description: "Grammar, comprehension, vocabulary and writing practice."
    },
    {
      id: "science7",
      grade: "Grade 7",
      subject: "Science",
      icon: "🔬",
      title: "Integrated Science",
      description: "Introduction to important science concepts and experiments."
    },
    {
      id: "math9",
      grade: "Grade 9",
      subject: "Mathematics",
      icon: "📊",
      title: "Junior Secondary Mathematics",
      description: "Algebra, geometry, statistics and problem-solving."
    },
    {
      id: "biology10",
      grade: "Grade 10",
      subject: "Biology",
      icon: "🧬",
      title: "Biology Fundamentals",
      description: "Cells, living organisms, nutrition and human biology."
    },
    {
      id: "chem10",
      grade: "Grade 10",
      subject: "Chemistry",
      icon: "⚗️",
      title: "Chemistry Basics",
      description: "Atoms, elements, compounds and chemical reactions."
    },
    {
      id: "physics10",
      grade: "Grade 10",
      subject: "Physics",
      icon: "⚡",
      title: "Physics Fundamentals",
      description: "Motion, forces, energy and basic physics principles."
    },
    {
      id: "geo11",
      grade: "Grade 11",
      subject: "Geography",
      icon: "🌍",
      title: "Geography Study Guide",
      description: "Physical geography, population and environmental topics."
    },
    {
      id: "history11",
      grade: "Grade 11",
      subject: "History",
      icon: "🏛️",
      title: "History Study Guide",
      description: "Important historical events, people and developments."
    },
    {
      id: "ict12",
      grade: "Grade 12",
      subject: "ICT",
      icon: "💻",
      title: "ICT Study Guide",
      description: "Computer systems, applications, networks and technology."
    },
    {
      id: "business12",
      grade: "Grade 12",
      subject: "Business Studies",
      icon: "💼",
      title: "Business Studies",
      description: "Business concepts, entrepreneurship and management."
    },
    {
      id: "economics12",
      grade: "Grade 12",
      subject: "Economics",
      icon: "📈",
      title: "Economics Study Guide",
      description: "Markets, production, money and economic development."
    }
  ];

  const pastPapers = [
    {
      id: "paper-math7",
      grade: "Grade 7",
      subject: "Mathematics",
      year: "2024",
      icon: "📐",
      title: "Grade 7 Mathematics Past Paper",
      description: "Practice mathematics examination questions."
    },
    {
      id: "paper-english7",
      grade: "Grade 7",
      subject: "English",
      year: "2024",
      icon: "📖",
      title: "Grade 7 English Past Paper",
      description: "Practice English examination questions."
    },
    {
      id: "paper-science9",
      grade: "Grade 9",
      subject: "Science",
      year: "2023",
      icon: "🔬",
      title: "Grade 9 Science Past Paper",
      description: "Practice science examination questions."
    },
    {
      id: "paper-math9",
      grade: "Grade 9",
      subject: "Mathematics",
      year: "2023",
      icon: "📊",
      title: "Grade 9 Mathematics Past Paper",
      description: "Practice junior secondary mathematics questions."
    },
    {
      id: "paper-bio12",
      grade: "Grade 12",
      subject: "Biology",
      year: "2024",
      icon: "🧬",
      title: "Grade 12 Biology Past Paper",
      description: "Prepare for Biology examinations."
    },
    {
      id: "paper-chem12",
      grade: "Grade 12",
      subject: "Chemistry",
      year: "2024",
      icon: "⚗️",
      title: "Grade 12 Chemistry Past Paper",
      description: "Practice Chemistry examination questions."
    },
    {
      id: "paper-physics12",
      grade: "Grade 12",
      subject: "Physics",
      year: "2024",
      icon: "⚡",
      title: "Grade 12 Physics Past Paper",
      description: "Practice Physics examination questions."
    },
    {
      id: "paper-math12",
      grade: "Grade 12",
      subject: "Mathematics",
      year: "2024",
      icon: "📐",
      title: "Grade 12 Mathematics Past Paper",
      description: "Practice senior secondary mathematics questions."
    }
  ];

  const opportunities = [
    {
      id: "opp1",
      icon: "🎓",
      title: "Scholarships",
      description: "Find scholarship opportunities that can support your education."
    },
    {
      id: "opp2",
      icon: "🏫",
      title: "University Opportunities",
      description: "Explore education and university opportunities."
    },
    {
      id: "opp3",
      icon: "💼",
      title: "Student Jobs",
      description: "Discover useful work and experience opportunities for students."
    },
    {
      id: "opp4",
      icon: "🌍",
      title: "International Opportunities",
      description: "Explore study and educational opportunities beyond Zambia."
    },
    {
      id: "opp5",
      icon: "💻",
      title: "Online Learning",
      description: "Discover online courses and learning opportunities."
    },
    {
      id: "opp6",
      icon: "🏆",
      title: "Competitions",
      description: "Find academic competitions and challenges for students."
    }
  ];

  /* =========================
     ELEMENTS
  ========================= */

  const resourceGrid = document.getElementById("resourceGrid");
  const paperGrid = document.getElementById("paperGrid");
  const opportunityGrid = document.getElementById("opportunityGrid");

  const gradeFilter = document.getElementById("gradeFilter");
  const subjectFilter = document.getElementById("subjectFilter");

  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const searchResults = document.getElementById("searchResults");

  const menuButton = document.getElementById("menuButton");
  const mobileMenu = document.getElementById("mobileMenu");

  /* =========================
     SAVED ITEMS
  ========================= */

  let savedItems = JSON.parse(
    localStorage.getItem("zambiaStudentHubSaved") || "[]"
  );

  function isSaved(id) {
    return savedItems.includes(id);
  }

  function toggleSave(id) {

    if (isSaved(id)) {
      savedItems = savedItems.filter(item => item !== id);
    } else {
      savedItems.push(id);
    }

    localStorage.setItem(
      "zambiaStudentHubSaved",
      JSON.stringify(savedItems)
    );

    renderResources();
    renderPapers();
  }

  /* =========================
     RESOURCE CARDS
  ========================= */

  function renderResources() {

    if (!resourceGrid) return;

    const selectedGrade = gradeFilter
      ? gradeFilter.value
      : "all";

    const selectedSubject = subjectFilter
      ? subjectFilter.value
      : "all";

    const filtered = resources.filter(item => {

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
          <div>📚</div>
          <h3>No resources found</h3>
          <p>Try selecting another grade or subject.</p>
        </div>
      `;

      return;
    }

    resourceGrid.innerHTML = filtered.map(item => {

      const saved = isSaved(item.id);

      return `
        <article class="resource-card">

          <div class="card-icon">
            ${item.icon}
          </div>

          <span class="card-tag">
            ${item.grade}
          </span>

          <h3>${item.title}</h3>

          <p>${item.description}</p>

          <div class="card-meta">
            <span>📚 ${item.subject}</span>
          </div>

          <div class="card-actions">

            <button
              class="view-button"
              onclick="viewResource('${item.id}')">
              View
            </button>

            <button
              class="save-button"
              onclick="saveItem('${item.id}')">
              ${saved ? "⭐ Saved" : "☆ Save"}
            </button>

          </div>

        </article>
      `;

    }).join("");
  }

  /* =========================
     PAST PAPERS
  ========================= */

  function renderPapers() {

    if (!paperGrid) return;

    paperGrid.innerHTML = pastPapers.map(item => {

      const saved = isSaved(item.id);

      return `
        <article class="resource-card paper-card">

          <div class="card-icon">
            ${item.icon}
          </div>

          <span class="card-tag">
            ${item.grade}
          </span>

          <h3>${item.title}</h3>

          <p>${item.description}</p>

          <div class="card-meta">
            <span>📚 ${item.subject}</span>
            <span>📅 ${item.year}</span>
          </div>

          <div class="card-actions">

            <button
              class="view-button"
              onclick="viewPaper('${item.id}')">
              View Paper
            </button>

            <button
              class="save-button"
              onclick="saveItem('${item.id}')">
              ${saved ? "⭐ Saved" : "☆ Save"}
            </button>

          </div>

        </article>
      `;

    }).join("");
  }

  /* =========================
     OPPORTUNITIES
  ========================= */

  function renderOpportunities() {

    if (!opportunityGrid) return;

    opportunityGrid.innerHTML = opportunities.map(item => {

      return `
        <article class="resource-card opportunity-card">

          <div class="card-icon">
            ${item.icon}
          </div>

          <h3>${item.title}</h3>

          <p>${item.description}</p>

          <div class="card-actions">

            <button
              class="view-button"
              onclick="viewOpportunity('${item.id}')">
              Explore
            </button>

          </div>

        </article>
      `;

    }).join("");
  }

  /* =========================
     VIEW RESOURCE
  ========================= */

  window.viewResource = function (id) {

    const item = resources.find(resource => resource.id === id);

    if (!item) return;

    alert(
      `${item.title}\n\n` +
      `${item.description}\n\n` +
      `Grade: ${item.grade}\n` +
      `Subject: ${item.subject}\n\n` +
      `Study material coming soon.`
    );
  };

  /* =========================
     VIEW PAPER
  ========================= */

  window.viewPaper = function (id) {

    const item = pastPapers.find(paper => paper.id === id);

    if (!item) return;

    alert(
      `${item.title}\n\n` +
      `${item.description}\n\n` +
      `Year: ${item.year}\n` +
      `Subject: ${item.subject}\n\n` +
      `The actual PDF/paper can be connected here later.`
    );
  };

  /* =========================
     VIEW OPPORTUNITY
  ========================= */

  window.viewOpportunity = function (id) {

    const item = opportunities.find(
      opportunity => opportunity.id === id
    );

    if (!item) return;

    alert(
      `${item.title}\n\n` +
      `${item.description}\n\n` +
      `Opportunity links can be added here later.`
    );
  };

  /* =========================
     SAVE BUTTON
  ========================= */

  window.saveItem = function (id) {
    toggleSave(id);
  };

  /* =========================
     SEARCH
  ========================= */

  function performSearch() {

    if (!searchInput || !searchResults) return;

    const query = searchInput.value
      .trim()
      .toLowerCase();

    if (!query) {

      searchResults.innerHTML = "";

      return;
    }

    const resourceMatches = resources.filter(item =>
      `${item.title} ${item.description} ${item.grade} ${item.subject}`
        .toLowerCase()
        .includes(query)
    );

    const paperMatches = pastPapers.filter(item =>
      `${item.title} ${item.description} ${item.grade} ${item.subject} ${item.year}`
        .toLowerCase()
        .includes(query)
    );

    const opportunityMatches = opportunities.filter(item =>
      `${item.title} ${item.description}`
        .toLowerCase()
        .includes(query)
    );

    const total =
      resourceMatches.length +
      paperMatches.length +
      opportunityMatches.length;

    if (total === 0) {

      searchResults.innerHTML = `
        <div class="empty-state">
          <div>🔎</div>
          <h3>No results found</h3>
          <p>Try searching for Mathematics, Grade 12, Biology, scholarships or past papers.</p>
        </div>
      `;

      return;
    }

    let html = `
      <div class="search-result-box">
        <h3>🔎 Search Results</h3>
    `;

    resourceMatches.forEach(item => {

      html += `
        <button
          class="search-result"
          onclick="goToSection('resources')">
          📚 ${item.title}
          <small>${item.grade} • ${item.subject}</small>
        </button>
      `;

    });

    paperMatches.forEach(item => {

      html += `
        <button
          class="search-result"
          onclick="goToSection('papers')">
          📝 ${item.title}
          <small>${item.grade} • ${item.subject} • ${item.year}</small>
        </button>
      `;

    });

    opportunityMatches.forEach(item => {

      html += `
        <button
          class="search-result"
          onclick="goToSection('opportunities')">
          🎓 ${item.title}
          <small>Opportunity</small>
        </button>
      `;

    });

    html += `</div>`;

    searchResults.innerHTML = html;
  }

  if (searchButton) {
    searchButton.addEventListener(
      "click",
      performSearch
    );
  }

  if (searchInput) {

    searchInput.addEventListener(
      "keydown",
      function (event) {

        if (event.key === "Enter") {
          performSearch();
        }

      }
    );

    searchInput.addEventListener(
      "input",
      function () {

        if (searchInput.value.trim() === "") {
          searchResults.innerHTML = "";
        }

      }
    );
  }

  /* =========================
     FILTERS
  ========================= */

  if (gradeFilter) {

    gradeFilter.addEventListener(
      "change",
      renderResources
    );

  }

  if (subjectFilter) {

    subjectFilter.addEventListener(
      "change",
      renderResources
    );

  }

  /* =========================
     MOBILE MENU
  ========================= */

  if (menuButton && mobileMenu) {

    menuButton.addEventListener(
      "click",
      function () {

        mobileMenu.classList.toggle("open");

      }
    );

    const mobileLinks =
      mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(link => {

      link.addEventListener(
        "click",
        function () {
          mobileMenu.classList.remove("open");
        }
      );

    });

  }

  /* =========================
     NAVIGATION
  ========================= */

  window.goToSection = function (id) {

    const section = document.getElementById(id);

    if (section) {

      section.scrollIntoView({
        behavior: "smooth"
      });

    }
  };

  /* =========================
     YEAR
  ========================= */

  const yearElement =
    document.getElementById("year");

  if (yearElement) {
    yearElement.textContent =
      new Date().getFullYear();
  }

  /* =========================
     START WEBSITE
  ========================= */

  renderResources();
  renderPapers();
  renderOpportunities();

});
