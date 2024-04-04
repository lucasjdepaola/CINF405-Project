const gid = (name) => {
  return document.querySelector("." + name);
};
const d = gid("todaysdate");
const getDate = () => {
  const date = new Date();
  console.log(d);
  d.innerText = new Date().toString(); //year + " " + month + " " + day;
};
getDate();

const openLink = (site) => {
  location.href = "./" + site + ".html";
};

const spawnCourse = (name, photourl) => {
  const course = gid("subcourse");
  const cloneCourse = document.cloneElement(course);
};

const clickCourse = (names) => {
  for (name of names) {
    gid("subcourse").addEventListener("click", () => {
      location.href = name + "_Page.html";
    });
  }
};
const coursenames = ["Calculus"];
clickCourse(coursenames);
