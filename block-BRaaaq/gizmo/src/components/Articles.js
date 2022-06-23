import Article from './Article';
import allArticles from './data/articles';

function Articles() {
  return (
    <>
      <section className="articles pad-top">
        <div className="container2 flex mar-left jus-bet flex-wrap">
          {allArticles.map((article) => (
            <Article key={article.publishedAt} {...article} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Articles;
