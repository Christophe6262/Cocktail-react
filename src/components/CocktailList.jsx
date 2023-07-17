import Cocktail from "./Cocktail";

const CocktailList = ({ cocktails }) => {
  return (
    <>
      {!cocktails ? (
        <h2 className="section-title">
          No cocktails matched your search criteria
        </h2>
      ) : (
        <section className="section">
          <h2 className="section-title">Cocktails</h2>
          <div className="cocktails-center">
            {cocktails.map((drink) => (
              <Cocktail key={drink.id} drink={drink} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default CocktailList;
