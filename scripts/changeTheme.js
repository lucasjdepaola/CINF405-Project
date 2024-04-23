const gid = (name) => document.getElementById(name); // TODO reference by ID in main pages

const themes = {
  "defaultScheme": defaultScheme,
}

// two categories, one being standard across all pages, the other being page specific
const updateTheme = (colorScheme) => {
  /* standard themes applied across all possible pages */
  document.body.style.backgroundColor = colorScheme.background;

  // gid("point")?.style.color = colorScheme.pointcolor;
  if (gid("point" !== null)) gid("point").style.color = colorScheme.pointcolor;
}

updateTheme(defaultScheme);

// localStorage["currentTheme"] = JSON.stringify(themes["default"]);
// // call the function when the page loads, from cookies
//
// updateTheme(localStorage["currentTheme"]);
