import Card from "../../components/Cards/Card";
import { Container } from "./pokedexPageStyled";
import Header from "../../components/Header/Header";
import { BASE_URL } from "../../constants/url";

function PokedexPage(props) {
  const { pokedex, removeFromPokedex } = props;

  return (
    <Container>
      <Header />
      <section>
        {pokedex.map((pokemon) => (
          <Card
            key={pokemon.name}
            pokemonUrl={`${BASE_URL}/${pokemon.name}`}
            removeFromPokedex={removeFromPokedex}
          />
        ))}
      </section>
    </Container>
  );
}

export default PokedexPage;
