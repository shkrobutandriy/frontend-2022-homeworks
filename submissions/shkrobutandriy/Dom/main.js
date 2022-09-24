
const courseActive = document.getElementById("courseActive");
const description = document.getElementById("description");
const course = document.getElementById("course");
const courses = [
  {
    name: "js",
    img: '<ion-icon class="icon" name="logo-javascript"></ion-icon>',
    description:
      "JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well.",
  },
  {
    name: "html",
    img: '<ion-icon class="icon" name="logo-html5"></ion-icon>',
    description:
      "HTML, in full hypertext markup language, a formatting system for displaying material retrieved over the Internet. Each retrieval unit is known as a Web page (from World Wide Web), and such pages frequently contain hypertext links that allow related pages to be retrieved.",
  },
  {
    name: "css",
    img: '<ion-icon class="icon" name="logo-css3"></ion-icon>',
    description:
      "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.",
  },
  {
    name: "react",
    img: '<ion-icon class="icon" name="logo-react"></ion-icon>',
    description:
      "React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”. React has a few different kinds of components, but we'll start with React.Component subclasses: class ShoppingList extends React.",
  },
  {
    name: "angular",
    img: '<ion-icon class="icon" name="logo-angular"></ion-icon>',
    description:
      "Angular is a development platform, built on TypeScript. As a platform, Angular includes: A component-based framework for building scalable web applications. A collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more.",
  },
  {
    name: "python",
    img: '<ion-icon class="icon" name="logo-python"></ion-icon>',
    description:
      "Python is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis. Python is a general-purpose language, meaning it can be used to create a variety of different programs and isn't specialized for any specific problems.",
  },
];
function renderCourse(name) {
  const cours = courses.find((item) => item.name === name);
  courseActive.innerHTML = `${cours.img}`;
  description.innerHTML = `${cours.description}`;
}
renderCourse('js');
course.addEventListener("click", (e) => {
  const name = e.target.dataset.name;
  renderCourse(name);
})
