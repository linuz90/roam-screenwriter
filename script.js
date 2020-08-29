window.addEventListener('hashchange', addScreenplayClass);

setInterval(() => {
  addScreenplayClass();
}, 1000);

function addScreenplayClass() {
  setTimeout(() => {
    const titleEl = document.querySelector('.rm-title-display span');
    const title = titleEl ? titleEl.innerText : '';
    const article = document.querySelector('.roam-article');

    if (title.includes('[screenplay]') || title.includes('[script]')) {
      article.classList.add('screenplay');
    } else {
      article.classList.remove('screenplay');
    }
  }, 100);
}
