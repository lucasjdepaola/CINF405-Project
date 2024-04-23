const qselect = (name) => {
  return document.querySelector("." + name);
};

const openLink = (site) => {
  location.href = "./" + site + ".html";
};

const spawnCourse = (name, photourl) => {
  const course = qselect("subcourse");
  const cloneCourse = document.cloneElement(course);
};

const clickCourse = (names) => {
  for (name of names) {
    qselect("subcourse").addEventListener("click", () => {
      location.href = name + "_Page.html";
    });
  }
};
const coursenames = ["Calculus"];
clickCourse(coursenames);
