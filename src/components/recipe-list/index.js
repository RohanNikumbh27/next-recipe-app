import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function RecipeList({ recipeList }) {
  console.log(recipeList);
  return (
    <div className="bg-colour-custom">
      {/* <div className="h-2 bg-gradient-to-r from-zinc-500 to-zinc-950 "></div> */}
      <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full ">
        <div className="inline-block w-full mb-3">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-zinc-300 via-white to-zinc-400 text-transparent inline-block bg-clip-text mt-5">
            Recipes
          </h2>
          <Link
            className="bg-gradient-to-r from-zinc-800 to-zinc-950 text-white text-bold rounded-2xl p-3 inline-block m-5 float-right"
            href={"/"}
          >
            Go Home
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipeList && recipeList.length > 0
            ? recipeList.map((recipe) => (
                <Link href={`/recipe-list/${recipe.id}`} className="">
                  <Card className="Card shadow-2xl rounded-2xl bg-transparent lg:backdrop-blur-3xl md:backdrop-blur-3xl cursor-pointer hover:scale-[1.02] transition-all outline-none border-none">
                    <CardContent className="card-bg-custom rounded-2xl overflow-hidden shadow-md ">
                      <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                        <img
                          src={recipe.image}
                          alt={recipe.name}
                          className="h-full w-full object-cover object-top rounded-2xl mt-6"
                        />
                      </div>
                      <div className="py-6 pb-1">
                        <h3 className="text-lg font-extrabold uppercase text-gray-900 text-ellipsis">
                          {recipe.name}
                        </h3>
                        <div className="mt-4 flex items-center flex-wrap gap-2 m-0 pb-0">
                          <p className="text-lg text-zinc-950">
                            Rating: {recipe.rating}
                          </p>
                          <div className="ml-auto mr-4">
                            <p className="text-lg text-gray-800 font-extrabold">
                              {recipe.cuisine}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
