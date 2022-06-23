function Article(props) {
  return (
    <>
      <div className="col col-1">
        <img src={props.urlToImage} alt={props.title}></img>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <a href={props.url}>Read More</a>
      </div>
    </>
  );
}
export default Article;
