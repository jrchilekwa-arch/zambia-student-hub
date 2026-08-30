/* ==========================================
   ZAMBIA STUDENT HUB
   Main JavaScript
========================================== */


/* MOBILE MENU */

function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("show");
}

function closeMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.remove("show");
}


/* NAVIGATION */

function goTo(sectionId) {
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}


/* SHOW SECTION */

function showSection(sectionId) {
  setTimeout(function () {
    goTo(sectionId);
  }, 50);
}


/* RESOURCE FILTER */

function filterResources() {

  const grade =
    document.getElementById("gradeFilter").value;

  const subject =
    document.getElementById("subjectFilter").value;

  const cards =
    document.querySelectorAll(".resource-card");

  let visible = 0;

  cards.forEach(function(card) {

    const cardGrade = card.dataset.grade;
    const cardSubject = card.dataset.subject;

    const gradeMatch =
      grade === "all" || cardGrade === grade;

    const subjectMatch =
      subject === "all" || cardSubject === subject;

    if (gradeMatch && subjectMatch) {
      card.style.display = "";
      visible++;
    } else {
      card.style.display = "none";
    }

  });

}


/* SEARCH */

function searchContent() {

  const input =
    document.getElementById("searchInput");

  const message =
    document.getElementById("searchMessage");

  const query =
    input.value.toLowerCase().trim();

  const cards =
    document.querySelectorAll(
      ".resource-card, .paper-card, .opportunity-card"
    );

  if (query === "") {

    cards.forEach(function(card) {
      card.style.display = "";
    });

    message.textContent = "";

    return;
  }

  let found = 0;

  cards.forEach(function(card) {

    const text =
      card.textContent.toLowerCase();

    if (text.includes(query)) {

      card.style.display = "";
      found++;

    } else {

      card.style.display = "none";

    }

  });

  if (found === 0) {

    message.textContent =
      "No results found. Try another search.";

  } else {

    message.textContent =
      found + " result" +
      (found === 1 ? "" : "s") +
      " found.";

  }

}


/* VIEW RESOURCE */

function viewResource(name) {

  document.getElementById("popupIcon").textContent = "📚";

  document.getElementById("popupTitle").textContent = name;

  document.getElementById("popupText").textContent =
    "This learning resource is ready to be added to the Zambia Student Hub library. More study material can be connected here later.";

  document.getElementById("popup").classList.add("show");

}


/* SAVE RESOURCE */

function saveResource(button, name) {

  let saved =
    JSON.parse(localStorage.getItem("zambiaSavedResources")) || [];

  if (!saved.includes(name)) {

    saved.push(name);

    localStorage.setItem(
      "zambiaSavedResources",
      JSON.stringify(saved)
    );

    button.textContent = "★ Saved";

  } else {

    saved =
      saved.filter(function(item) {
        return item !== name;
      });

    localStorage.setItem(
      "zambiaSavedResources",
      JSON.stringify(saved)
    );

    button.textContent = "☆ Save";

  }

}


/* LOAD SAVED RESOURCES */

function loadSavedResources() {

  const saved =
    JSON.parse(localStorage.getItem("zambiaSavedResources")) || [];

  const buttons =
    document.querySelectorAll(".save-btn");

  buttons.forEach(function(button) {

    const card =
      button.closest(".resource-card");

    const title =
      card.querySelector("strong").textContent;

    if (saved.includes(title)) {
      button.textContent = "★ Saved";
    }

  });

}


/* PAST PAPER MESSAGE */

function paperMessage(name) {

  document.getElementById("popupIcon").textContent = "📝";

  document.getElementById("popupTitle").textContent =
    name;

  document.getElementById("popupText").textContent =
    "The past paper section is ready. You can connect real PDF past papers to this button as the website grows.";

  document.getElementById("popup").classList.add("show");

}


/* OPPORTUNITIES */

function opportunityMessage(name) {

  document.getElementById("popupIcon").textContent = "🎓";

  document.getElementById("popupTitle").textContent =
    name;

  document.getElementById("popupText").textContent =
    "This section can contain verified scholarships, competitions, internships and other opportunities for students.";

  document.getElementById("popup").classList.add("show");

}


/* CLOSE POPUP */

function closePopup() {

  document
    .getElementById("popup")
    .classList.remove("show");

}


/* CLOSE POPUP WHEN CLICKING OUTSIDE */

document.addEventListener("click", function(event) {

  const popup =
    document.getElementById("popup");

  if (event.target === popup) {
    closePopup();
  }

});


/* ESCAPE KEY */

document.addEventListener("keydown", function(event) {

  if (event.key === "Escape") {
    closePopup();
  }

});


/* LOAD SAVED ITEMS */

document.addEventListener("DOMContentLoaded", function() {

  loadSavedResources();

});
