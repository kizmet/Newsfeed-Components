// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(article) {
    this.article = article;
    this.expandButton = article.querySelector('button.expandButton');
    this.expandButton.textContent = "Expand Article";
    var hide = document.createElement('button');
    this.hide = hide;
    this.hide.setAttribute('class', 'expandButton hide');
    this.hide.textContent = "Hide Article";
    // this.expandButton.append(hide);
    this.article.insertBefore(hide,this.expandButton);
    // this.expandButton.textContent = "expand";
    // this.hideButton = article.querySelector('')
    this.expandButton.addEventListener('click', () => this.expandArticle());
    this.hide.addEventListener('click', () => this.expandArticle());
    // this.closeButton = article.createElement('button');
  }


  expandArticle() {
    this.article.classList.toggle('article-open');
    this.expandButton.classList.toggle('hide');
    this.hide.classList.toggle('hide');
  }
  // addButton () {

  // }
}


const articles = document.querySelectorAll('.article');
articles.forEach(article => new Article(article));



