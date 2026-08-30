/* =====================================================
   ZAMBIA STUDENT HUB
   Complete app.js
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     DATA
  ========================= */

  const resources = [
    {
      id: 1,
      grade: "Grade 7",
      subject: "Mathematics",
      icon: "📐",
      title: "Mathematics Basics",
      description: "Numbers, fractions, algebra and problem-solving practice."
    },
    {
      id: 2,
      grade: "Grade 7",
      subject: "English",
      icon: "📖",
      title: "English Language Skills",
      description: "Grammar, comprehension, vocabulary and writing practice."
    },
    {
      id: 3,
      grade: "Grade 7",
      subject: "Science",
      icon: "🔬",
      title: "Integrated Science",
      description: "Introduction to important science concepts and experiments."
    },
    {
      id: 4,
      grade: "Grade 8",
      subject: "Mathematics",
      icon: "📐",
      title: "Junior Mathematics",
      description: "Build strong mathematics skills with guided practice."
    },
    {
      id: 5,
      grade: "Grade 8",
      subject: "English",
      icon: "📚",
      title: "English Study Guide",
      description: "Improve grammar, reading comprehension and writing."
    },
    {
      id: 6,
      grade: "Grade 9",
      subject: "Mathematics",
      icon: "📊",
      title: "Junior Secondary Mathematics",
      description: "Algebra, geometry, statistics and problem solving."
    },
    {
      id: 7,
      grade: "Grade 10",
      subject: "Biology",
      icon: "🧬",
      title: "Biology Fundamentals",
      description: "Learn cells, organisms, systems and basic biology."
    },
    {
      id: 8,
      grade: "Grade 10",
      subject: "Chemistry",
      icon: "⚗️",
      title: "Chemistry Fundamentals",
      description: "Atoms, elements, compounds and chemical reactions."
    },
    {
      id: 9,
      grade: "Grade 11",
      subject: "Physics",
      icon: "⚡",
      title: "Physics Study Guide",
      description: "Motion, forces, energy and other physics concepts."
    },
    {
      id: 10,
      grade: "Grade 12",
      subject: "ICT",
      icon: "💻",
      title: "ICT Study Guide",
      description: "Computer systems, software, networks and digital skills."
    }
  ];


  const papers = [
    {
      id: 101,
      grade: "Grade 7",
      subject: "Mathematics",
      icon: "📐",
      title: "Grade 7 Mathematics Practice Paper",
      description: "Practice mathematics questions to prepare for examinations."
    },
    {
      id: 102,
      grade: "Grade 7",
      subject: "English",
      icon: "📖",
      title: "Grade 7 English Practice Paper",
      description: "Practice comprehension, grammar and writing questions."
    },
    {
      id: 103,
      grade: "Grade 9",
      subject: "Mathematics",
      icon: "📊",
      title: "Grade 9 Mathematics Practice Paper",
      description: "Revision questions covering important junior secondary topics."
    },
    {
      id: 104,
      grade: "Grade 9",
      subject: "Science",
      icon: "🔬",
      title: "Grade 9 Science Practice Paper",
      description: "Test your knowledge with science revision questions."
    },
    {
      id: 105,
      grade: "Grade 12",
      subject: "Mathematics",
      icon: "📐",
      title: "Grade 12 Mathematics Practice Paper",
      description: "Senior secondary mathematics revision practice."
    },
    {
      id: 106,
      grade: "Grade 12",
      subject: "Biology",
      icon: "🧬",
      title: "Grade 12 Biology Practice Paper",
      description: "Biology revision questions for examination preparation."
    },
    {
      id: 107,
      grade: "Grade 12",
      subject: "Chemistry",
      icon: "⚗️",
      title: "Grade 12 Chemistry Practice Paper",
      description: "Practice chemistry questions and strengthen your revision."
    },
    {
      id: 108,
      grade: "Grade 12",
      subject: "Physics",
      icon: "⚡",
      title: "Grade 12 Physics Practice Paper",
      description: "Practice important physics concepts and calculations."
    }
  ];


  const opportunities = [
    {
      id: 201,
      icon: "🎓",
      title: "Scholarship Opportunities",
      description: "Look for scholarships and financial support for students."
    },
    {
      id: 202,
      icon: "🏫",
      title: "University Opportunities",
      description: "Explore education opportunities and pathways after secondary school."
    },
    {
      id: 203,
      icon: "💼",
      title: "Student Opportunities",
      description: "Discover useful opportunities that can help students develop skills."
    },
    {
      id: 204,
      icon: "🌍",
      title: "International Opportunities",
      description: "Explore education and learning opportunities beyond Zambia."
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

  const year = document.getElementById("year");


  /* =========================
     SAVED ITEMS
  ========================= */

  let savedItems = JSON.parse(
    localStorage.getItem("zambiaStudentHubSaved") || "[]"
  );


  function isSaved(id) {
    return savedItems.includes(id);
  }


  function toggleSaved(id) {

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
          <p>Try selecting a different grade or subject.</p>
        </div>
      `;

      return;
    }


    resourceGrid.innerHTML = filtered.map(item => `

      <article class="resource-card">

        <div class="card-icon">
          ${item.icon}
        </div>

        <span class="card-category">
          ${item.grade}
        </span>

        <h3>${item.title}</h3>

        <p>${item.description}</p>

        <div class="card-meta">
          <span>${item.subject}</span>
        </div>

        <div class="card-actions">

          <button
            class="view-button"
            onclick="showResource(${item.id})">
            View
          </button>

          <button
            class="save-button ${isSaved(item.id) ? "saved" : ""}"
            onclick="saveResource(${item.id})">

            ${isSaved(item.id) ? "⭐ Saved" : "☆ Save"}

          </button>

        </div>

      </article>

    `).join("");
  }


  /* =========================
     PAST PAPERS
  ========================= */

  function renderPapers() {

    if (!paperGrid) return;

    const selectedGrade = gradeFilter
      ? gradeFilter.value
      : "all";

    const selectedSubject = subjectFilter
      ? subjectFilter.value
      : "all";


    const filtered = papers.filter(item => {

      const gradeMatch =
        selectedGrade === "all" ||
        item.grade === selectedGrade;

      const subjectMatch =
        selectedSubject === "all" ||
        item.subject === selectedSubject;

      return gradeMatch && subjectMatch;
    });


    if (filtered.length === 0) {

      paperGrid.innerHTML = `
        <div class="empty-state">
          <div>📝</div>
          <h3>No past papers found</h3>
          <p>Try selecting a different grade or subject.</p>
        </div>
      `;

      return;
    }


    paperGrid.innerHTML = filtered.map(item => `

      <article class="paper-card">

        <div class="card-icon">
          ${item.icon}
        </div>

        <span class="card-category">
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
            onclick="showPaper(${item.id})">
            View Paper
          </button>

          <button
            class="save-button ${isSaved(item.id) ? "saved" : ""}"
            onclick="savePaper(${item.id})">

            ${isSaved(item.id) ? "⭐ Saved" : "☆ Save"}

          </button>

        </div>

      </article>

    `).join("");
  }


  /* =========================
     OPPORTUNITIES
  ========================= */

  function renderOpportunities() {

    if (!opportunityGrid) return;


    opportunityGrid.innerHTML = opportunities.map(item => `

      <article class="opportunity-card">

        <div class="card-icon">
          ${item.icon}
        </div>

        <h3>${item.title}</h3>

        <p>${item.description}</p>

        <button
          class="view-button"
          onclick="showOpportunity(${item.id})">
          Explore
        </button>

      </article>

    `).join("");
  }


  /* =========================
     MODAL
  ========================= */

  function createModal(title, content) {

    const oldModal = document.getElementById("hubModal");

    if (oldModal) {
      oldModal.remove();
    }


    const modal = document.createElement("div");

    modal.id = "hubModal";
    modal.className = "hub-modal";

    modal.innerHTML = `

      <div class="modal-overlay"></div>

      <div
