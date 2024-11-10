import H1 from "./components/H1";
import H2 from "./components/H2";
import H3 from "./components/H3";
import Hr from "./components/Hr";
import Li from "./components/Li";
import Ol from "./components/Ol";
import Td from "./components/Td";
import Th from "./components/Th";
import Ul from "./components/Ul";

const App = () => {
  return (
    <main className="md:px-600 md:py-1600 bg-stone-100 md:flex md:h-full md:flex-col md:items-center md:justify-center">
      <article className="font-outfit leading-150 md:w-recipe md:mx-300 md:rounded-300 md:py-500 md:px-500 gap-500 flex flex-col bg-white text-stone-600">
        <img
          src="./images/image-omelette.jpeg"
          alt="Image of an omelette"
          className="md:rounded-150 w-full"
        />

        <div className="gap-400 pb-500 px-400 flex flex-col md:p-0">
          <header id="title" className="gap-300 flex flex-col">
            <H1>Simple Omelette Recipe</H1>

            <p>
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </p>
          </header>

          <section
            id="preparation"
            className="p-300 gap-200 rounded-150 flex flex-col bg-rose-50"
          >
            <H3>Preparation Time</H3>

            <Ul className={`marker:text-rose-800`}>
              <Li>
                <b>Total</b>: Approximately 10 minutes
              </Li>
              <Li>
                <b>Preparation</b>: 5 minutes
              </Li>
              <Li>
                <b>Cooking</b>: 5 minutes
              </Li>
            </Ul>
          </section>

          <section id="ingredients" className="gap-300 flex flex-col">
            <H2>Ingredients</H2>

            <Ul className={`marker:text-brown-800`}>
              <Li>2-3 large eggs</Li>
              <Li>Salt, to taste</Li>
              <Li>Pepper, to taste</Li>
              <Li>1 tablespoon of butter or oil</Li>
              <Li>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </Li>
            </Ul>
          </section>

          <Hr />

          <section id="instructions" className="gap-300 flex flex-col">
            <H2>Instructions</H2>

            <Ol className="marker:text-brown-800 marker:font-bold">
              <Li>
                <b>Beat the eggs</b>: In a bowl, beat the eggs with a pinch of
                salt and pepper until they are well mixed. You can add a
                tablespoon of water or milk for a fluffier texture.
              </Li>
              <Li>
                <b>Heat the pan</b>: Place a non-stick frying pan over medium
                heat and add butter or oil.
              </Li>
              <Li>
                <b>Cook the omelette</b>: Once the butter is melted and
                bubbling, pour in the eggs. Tilt the pan to ensure the eggs
                evenly coat the surface.
              </Li>
              <Li>
                <b>Add fillings (optional)</b>: When the eggs begin to set at
                the edges but are still slightly runny in the middle, sprinkle
                your chosen fillings over one half of the omelette.
              </Li>
              <Li>
                <b>Fold and serve</b>: As the omelette continues to cook,
                carefully lift one edge and fold it over the fillings. Let it
                cook for another minute, then slide it onto a plate.
              </Li>
              <Li>
                <b>Enjoy</b>: Serve hot, with additional salt and pepper if
                needed.
              </Li>
            </Ol>
          </section>

          <Hr />

          <section id="nutrition" className="gap-300 flex flex-col">
            <H2>Nutrition</H2>

            <p>
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>

            <table>
              <tbody>
                <tr>
                  <Th>Calories</Th>
                  <Td>277kcal</Td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <Hr />
                  </td>
                </tr>
                <tr>
                  <Th>Carbs</Th>
                  <Td>0g</Td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <Hr />
                  </td>
                </tr>
                <tr>
                  <Th>Protein</Th>
                  <Td>20g</Td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <Hr />
                  </td>
                </tr>
                <tr>
                  <Th>Fat</Th>
                  <Td>22g</Td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </article>
    </main>
  );
};

export default App;
