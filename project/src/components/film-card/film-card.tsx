type FilmCardType = {
  imgSrc: string;
  link: string;
  name: string;
};

function FilmCard({ imgSrc, link, name }: FilmCardType): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img
          src={imgSrc}
          alt={name}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={link}>
          {name}
        </a>
      </h3>
    </article>
  );
}

export default FilmCard;
