const gid = (name) => {
  return document.querySelector("." + name);
};
const d = gid("todaysdate");
const courses = gid("courses");
const getDate = () => {
  const date = new Date();
  const minute = date.getMinutes();
  const hour = date.getHours();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
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

gid("subcourse").addEventListener("click", () => {
  location.href = "Course_Page.html";
});
