import Link from "next/link";

export default function RecipeDetailsItem({ getRecipeDetails }) {
  return (
    <div className="bg-gradient-to-r min-h-screen bg-colour-custom ">
      <Link
        href={"/recipe-list"}
        className="bg-gradient-to-r from-zinc-800 to-zinc-950 text-white text-bold rounded-2xl p-3 inline-block m-4 ml-6 mb-0"
      >
        Go to recipe list
      </Link>
      <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="w-full lg:sticky top-0 sm:flex gap-2">
            <img
              src={getRecipeDetails?.image}
              name={getRecipeDetails?.name}
              className="w-4/5 rounded-3xl hover:my-10 mx-auto m hover:rotate-2 hover:scale-110 transition-all object-cover"
            />
          </div>
          <div>
            <h2
              className="text-3xl font-extrabold text-gray-950 "
              style={{ textOverflow: "ellipsis" }}
            >
              {getRecipeDetails?.name}
            </h2>
            <div className="gap-4 mt-5">
              <p className="text-2xl text-gray-950 ">
                {getRecipeDetails?.mealType[0]}
              </p>
            </div>
            <div className="mt-5 rounded-2xl p-10 bg-zinc-800 hover:bg-zinc-900 transition-all text-white hover:shadow-2xl">
              <p className="text-xl ">{getRecipeDetails?.cuisine}</p>
            </div>
            <div className="mt-5 rounded-2xl p-10 bg-zinc-800 hover:bg-zinc-900 transition-all text-white hover:shadow-2xl">
              <h3 className="text-lg font-bold">Ingredients</h3>
              <ul className="space-y-3 list-disc mt-4 pl-4 text-sm ">
                {getRecipeDetails?.ingredients.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
