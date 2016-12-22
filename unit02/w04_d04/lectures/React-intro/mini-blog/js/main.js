// This posts array is created just to simulate data fetching. Imagine,
// for the purposes of this lecture, that you retrieved this blog post
// data using your leet Ajax skills. We'll learn how to do this with React
// soon.
const posts = [{title:'post one',content:'this is post one',},{title:'post two',content:'this is post two!',},{title:'post three',content:'this is post three!!!',},];

const main = document.querySelector('main');

posts.forEach((post) => {
  const postSection = document.createElement('section');
  const postSectionH1 = document.createElement('h1');
  const postSectionP = document.createElement('p');

  postSection.setAttribute('class', 'post');
  postSectionH1.innerText = post.title;
  postSectionP.innerText = post.content;
  main.appendChild(postSection);
  postSection.appendChild(postSectionH1);
  postSection.appendChild(postSectionP);
});
