document.addEventListener("DOMContentLoaded", function () {

  /* =====================================================
     🇿🇲 ZAMBIA STUDENT HUB
     PAST PAPERS + RESOURCES + SEARCH
     ===================================================== */

  const resources = [
    {
      grade: "Grade 7",
      subject: "Mathematics",
      icon: "📐",
      title: "Mathematics Basics",
      description: "Numbers, fractions, algebra and problem-solving practice."
    },
    {
      grade: "Grade 7",
      subject: "English",
      icon: "📖",
      title: "English Language Skills",
      description: "Grammar, comprehension, vocabulary and writing practice."
    },
    {
      grade: "Grade 7",
      subject: "Science",
      icon: "🔬",
      title: "Integrated Science",
      description: "Important science concepts and examination preparation."
    },
    {
      grade: "Grade 8",
      subject: "Mathematics",
      icon: "📐",
      title: "Junior Mathematics",
      description: "Algebra, geometry, fractions and problem solving."
    },
    {
      grade: "Grade 8",
      subject: "English",
      icon: "📚",
      title: "English Study Guide",
      description: "Improve grammar, reading comprehension and writing."
    },
    {
      grade: "Grade 9",
      subject: "Mathematics",
      icon: "📊",
      title: "Junior Secondary Mathematics",
      description: "Algebra, geometry, statistics and examination preparation."
    },
    {
      grade: "Grade 9",
      subject: "Science",
      icon: "🧪",
      title: "Science Revision",
      description: "Review important science topics and practice questions."
    },
    {
      grade: "Grade 10",
      subject: "Biology",
      icon: "🧬",
      title: "Biology Fundamentals",
      description: "Cells, organisms, reproduction and biology concepts."
    },
    {
      grade: "Grade 10",
      subject: "Chemistry",
      icon: "⚗️",
      title: "Chemistry Basics",
      description: "Atoms, elements, compounds and chemical reactions."
    },
    {
      grade: "Grade 11",
      subject: "Physics",
      icon: "⚡",
      title: "Physics Revision",
      description: "Motion, forces, energy, electricity and waves."
    },
    {
      grade: "Grade 11",
      subject: "Geography",
      icon: "🌍",
      title: "Geography Study Guide",
      description: "Physical geography, human geography and environment."
    },
    {
      grade: "Grade 12",
      subject: "Mathematics",
      icon: "📈",
      title: "Senior Mathematics",
      description: "Advanced mathematics revision and examination preparation."
    },
    {
      grade: "Grade 12",
      subject: "ICT",
      icon: "💻",
      title: "ICT Revision",
      description: "Computer studies, information systems and technology."
    },
    {
      grade: "Grade 12",
      subject: "Business Studies",
      icon: "💼",
      title: "Business Studies Guide",
      description: "Business concepts and examination revision."
    }
  ];


  /* =====================================================
     📝 PAST PAPERS
     ===================================================== */

  const pastPapers = [
    {
      grade: "Grade 9",
      subject: "Mathematics",
      year: "2024",
      icon: "📐",
      title: "Grade 9 Mathematics",
      description: "Grade 9 mathematics examination preparation.",
      official: true
    },
    {
      grade: "Grade 9",
      subject: "Science",
      year: "2024",
      icon: "🔬",
      title: "Grade 9 Science",
      description: "Grade 9 science examination preparation.",
      official: true
    },
    {
      grade: "Grade 9",
      subject: "English",
      year: "2024",
      icon: "📖",
      title: "Grade 9 English",
      description: "Grade 9 English examination preparation.",
      official: true
    },
    {
      grade: "Grade 12",
      subject: "Mathematics",
      year: "2024",
      icon: "📈",
      title: "Grade 12 Mathematics",
      description: "Senior secondary mathematics examination preparation.",
      official: true
    },
    {
      grade: "Grade 12",
      subject: "Biology",
      year: "2024",
      icon: "🧬",
      title: "Grade 12 Biology",
      description: "Senior secondary biology examination preparation.",
      official: true
    },
    {
      grade: "Grade 12",
      subject: "Chemistry",
      year: "2024",
      icon: "⚗️",
      title: "Grade 12 Chemistry",
      description: "Senior secondary chemistry examination preparation.",
      official: true
    },
    {
      grade: "Grade 12",
      subject: "Physics",
      year: "2024",
      icon: "⚡",
      title: "Grade 12 Physics",
      description: "Senior secondary physics examination preparation.",
      official: true
    }
  ];


  /* =====================================================
     🎓 OPPORTUNITIES
     ===================================================== */

  const opportunities = [
    {
      icon: "🎓",
      title: "Scholarships",
      description: "Look for scholarships and education funding opportunities."
    },
    {
      icon: "🏫",
      title: "University Opportunities",
      description: "Explore opportunities for further education."
    },
    {
      icon: "💼",
      title: "Student Jobs",
      description: "Discover work and skill-building opportunities."
    },
    {
      icon: "🌍",
      title: "International Opportunities",
      description: "Explore educational opportunities outside Zambia."
    }
  ];


  /* =====================================================
     ELEMENTS
     ===================================================== */

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

  const menuButton =
    document.getElementById("menuButton");

  const mobileMenu =
    document.getElementById("mobileMenu");


  /* =====================================================
     📚 RESOURCES
     ===================================================== */

  function renderResources() {

    if (!resourceGrid) return;

    const grade =
      gradeFilter ? gradeFilter.value : "all";

    const subject =
      subjectFilter ? subjectFilter.value : "all";

    const filtered =
      resources.filter(function (item) {

        return (
          (grade === "all" || item.grade === grade) &&
          (subject === "all" || item.subject === subject)
        );

      });


    if (filtered.length === 0) {

      resourceGrid.innerHTML = `
        <div class="empty-state">
          <div>📚</div>
          <h3>No resources found</h3>
          <p>Try another grade or subject.</p>
        </div>
      `;

      return;
    }


    resourceGrid.innerHTML =
      filtered.map(function (item) {

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

            <div class="card-footer">

              <span class="subject-name">
                ${item.subject}
              </span>

              <button
                class="view-button"
                onclick="showMessage('${item.title}')">
                View
              </button>

            </div>

          </article>
        `;

      }).join("");
  }


  /* =====================================================
     📝 CREATE PAST PAPER FILTERS
     ===================================================== */

  function createPaperFilters() {

    if (!paperGrid) return;

    const section =
      paperGrid.parentElement;

    if (!section) return;


    const old =
      document.getElementById("paperFilters");

    if (old) old.remove();


    const filterBox =
      document.createElement("div");

    filterBox.id = "paperFilters";

    filterBox.innerHTML = `
      <div style="
        display:grid;
        grid-template-columns:repeat(auto-fit,minmax(150px,1fr));
        gap:12px;
        margin:25px 0;
      ">

        <select id="paperGradeFilter"
          style="
            width:100%;
            padding:14px;
            border-radius:12px;
            border:1px solid #ccc;
            font-size:16px;
          ">

          <option value="all">All Grades</option>
          <option value="Grade 9">Grade 9</option>
          <option value="Grade 12">Grade 12</option>

        </select>


        <select id="paperSubjectFilter"
          style="
            width:100%;
            padding:14px;
            border-radius:12px;
            border:1px solid #ccc;
            font-size:16px;
          ">

          <option value="all">All Subjects</option>
          <option value="Mathematics">Mathematics</option>
          <option value="English">English</option>
          <option value="Science">Science</option>
          <option value="Biology">Biology</option>
          <option value="Chemistry">Chemistry</option>
          <option value="Physics">Physics</option>

        </select>


        <select id="paperYearFilter"
          style="
            width:100%;
            padding:14px;
            border-radius:12px;
            border:1px solid #ccc;
            font-size:16px;
          ">

          <option value="all">All Years</option>
          <option value="2024">2024</option>

        </select>

      </div>

      <div id="paperCount"
        style="
          margin-bottom:20px;
          font-weight:700;
        ">
      </div>
    `;


    section.insertBefore(
      filterBox,
      paperGrid
    );


    document
      .getElementById("paperGradeFilter")
      .addEventListener(
        "change",
        renderPastPapers
      );


    document
      .getElementById("paperSubjectFilter")
      .addEventListener(
        "change",
        renderPastPapers
      );


    document
      .getElementById("paperYearFilter")
      .addEventListener(
        "change",
        renderPastPapers
      );
  }


  /* =====================================================
     📝 RENDER PAST PAPERS
     ===================================================== */

  function renderPastPapers() {

    if (!paperGrid) return;


    const gradeElement =
      document.getElementById("paperGradeFilter");

    const subjectElement =
      document.getElementById("paperSubjectFilter");

    const yearElement =
      document.getElementById("paperYearFilter");


    const grade =
      gradeElement ? gradeElement.value : "all";

    const subject =
      subjectElement ? subjectElement.value : "all";

    const year =
      yearElement ? yearElement.value : "all";


    const filtered =
      pastPapers.filter(function (paper) {

        return (
          (grade === "all" || paper.grade === grade) &&
          (subject === "all" || paper.subject === subject) &&
          (year === "all" || paper.year === year)
        );

      });


    const count =
      document.getElementById("paperCount");


    if (count) {

      count.textContent =
        `📝 ${filtered.length} paper${filtered.length === 1 ? "" : "s"} found`;

    }


    if (filtered.length === 0) {

      paperGrid.innerHTML = `
        <div class="empty-state">

          <div>🔎</div>

          <h3>No papers found</h3>

          <p>
            Try changing your grade, subject or year.
          </p>

        </div>
      `;

      return;
    }


    paperGrid.innerHTML =
      filtered.map(function (paper) {

        const originalIndex =
          pastPapers.indexOf(paper);


        return `
          <article class="paper-card">

            <div class="card-icon">
              ${paper.icon}
            </div>

            <span class="card-tag">
              ${paper.grade}
            </span>

            <h3>
              ${paper.title}
            </h3>

            <p>
              ${paper.description}
            </p>

            <div class="paper-year">
              📅 ${paper.year}
            </div>

            <div class="card-footer">

              <button
                class="view-button"
                onclick="openPaper(${originalIndex})">
                📄 View Paper
              </button>

              <button
                class="save-button"
                onclick="savePaper(${originalIndex}, this)">
                ☆ Save
              </button>

            </div>

          </article>
        `;

      }).join("");
  }


  /* =====================================================
     🌐 OPEN ECZ SOURCE
     ===================================================== */

  window.openPaper = function (index) {

    const paper =
      pastPapers[index];

    if (!paper) return;


    const ecz =
      "https://www.exams-council.org.zm/guidlines/";


    window.open(
      ecz,
      "_blank"
    );
  };


  /* =====================================================
     ⭐ SAVE PAPER
     ===================================================== */

  window.savePaper = function (index, button) {

    const paper =
      pastPapers[index];

    if (!paper) return;


    let saved =
      JSON.parse(
        localStorage.getItem(
          "zsh_saved_papers"
        )
      ) || [];


    const exists =
      saved.some(function (item) {

        return (
          item.title === paper.title &&
          item.year === paper.year
        );

      });


    if (exists) {

      saved =
        saved.filter(function (item) {

          return !(
            item.title === paper.title &&
            item.year === paper.year
          );

        });


      button.innerHTML =
        "☆ Save";

    } else {

      saved.push(paper);

      button.innerHTML =
        "⭐ Saved";
    }


    localStorage.setItem(
      "zsh_saved_papers",
      JSON.stringify(saved)
    );
  };


  /* =====================================================
     🎓 OPPORTUNITIES
     ===================================================== */

  function renderOpportunities() {

    if (!opportunityGrid) return;


    opportunityGrid.innerHTML =
      opportunities.map(function (item) {

        return `
          <article class="opportunity-card">

            <div class="card-icon">
              ${item.icon}
            </div>

            <h3>
              ${item.title}
            </h3>

            <p>
              ${item.description}
            </p>

            <button
              class="view-button"
              onclick="showMessage('${item.title}')">
              Explore
            </button>

          </article>
        `;

      }).join("");
  }


  /* =====================================================
     🔎 SEARCH
     ===================================================== */

  function performSearch() {

    if (!searchInput || !searchResults) return;


    const query =
      searchInput.value
        .trim()
        .toLowerCase();


    if (!query) {

      searchResults.innerHTML = "";

      return;
    }


    const resourceMatches =
      resources.filter(function (item) {

        return (
          item.title.toLowerCase().includes(query) ||
          item.subject.toLowerCase().includes(query) ||
          item.grade.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
        );

      });


    const paperMatches =
      pastPapers.filter(function (item) {

        return (
          item.title.toLowerCase().includes(query) ||
          item.subject.toLowerCase().includes(query) ||
          item.grade.toLowerCase().includes(query) ||
          item.year.includes(query)
        );

      });


    const total =
      resourceMatches.length +
      paperMatches.length;


    if (total === 0) {

      searchResults.innerHTML = `
        <div class="empty-state">
          <div>🔎</div>
          <h3>No results found</h3>
          <p>
            Try Mathematics, Grade 12, Biology or papers.
          </p>
        </div>
      `;

      return;
    }


    let html = `
      <div class="search-result-header">

        <h3>🔎 Search Results</h3>

        <p>
          ${total} result${total === 1 ? "" : "s"} found.
        </p>

      </div>
    `;


    resourceMatches.forEach(function (item) {

      html += `
        <div class="search-result-item">

          <span class="search-result-icon">
            ${item.icon}
          </span>

          <div>

            <strong>
              ${item.title}
            </strong>

            <small>
              ${item.grade} • ${item.subject}
            </small>

          </div>

        </div>
      `;

    });


    paperMatches.forEach(function (item) {

      html += `
        <div class="search-result-item">

          <span class="search-result-icon">
            📝
          </span>

          <div>

            <strong>
              ${item.title} Past Paper
            </strong>

            <small>
              ${item.grade} •
              ${item.subject} •
              ${item.year}
            </small>

          </div>

        </div>
      `;

    });


    searchResults.innerHTML =
      html;
  }


  /* =====================================================
     📱 MOBILE MENU
     ===================================================== */

  if (menuButton && mobileMenu) {

    menuButton.addEventListener(
      "click",
      function () {

        mobileMenu.classList.toggle(
          "active"
        );

      }
    );


    mobileMenu
      .querySelectorAll("a")
      .forEach(function (link) {

        link.addEventListener(
          "click",
          function () {

            mobileMenu.classList.remove(
              "active"
            );

          }
        );

      });
  }


  /* =====================================================
     🔍 SEARCH EVENTS
     ===================================================== */

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
  }


  /* =====================================================
     📚 RESOURCE FILTERS
     ===================================================== */

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


  /* =====================================================
     📅 FOOTER YEAR
     ===================================================== */

  const year =
    document.getElementById("year");


  if (year) {

    year.textContent =
      new Date().getFullYear();

  }


  /* =====================================================
     🚀 START
     ===================================================== */

  createPaperFilters();

  renderResources();

  renderPastPapers();

  renderOpportunities();

});
