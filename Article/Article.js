// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(article) {
    this.article = article;
    this.expandButton = article.querySelector('button.expandButton');
    // this.expandButton.textContent = "expand";
    this.expandButton.addEventListener('click', () => this.expandArticle());
    // this.closeButton = article.createElement('button')
    
  }

  expandArticle() {
    this.article.classList.toggle('article-open');
    this.expandButton(':before');
  }
}


const articles = document.querySelectorAll('.article');
articles.forEach(article => new Article(article));
