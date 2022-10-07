import RecipeSingle from 'components/RecipeSingle';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";

function Ara() {

    const [qweqw] = useState(["yemek_ad"]);

    let [searchParams] = useSearchParams();

    const [recipes, setRecipes] = useState()
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://www.alerjify.com/api/recipes")
            if (response.status === 200) {
                const data = await response.json()
                setRecipes(data)
            } else {
                console.log('Hata', response.statusText)
            }
        }

        fetchData()
    }, [])

    

    function search(items) {
        if (recipes) {
            const asdgd = searchParams.get("q")
            return recipes.filter((item) => {
                return qweqw.some((newItem) => {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(asdgd) > -1
                    );
                });
            });
        }
    }
    return (
        <><div className='container wrapper'>
            <div className='flex flex-row flex-wrap'>
                {recipes && search(recipes).map((recipe) => (

                        <article className='basis-1/3' key={recipe.y_kod}>
                    <RecipeSingle recipe={recipe} /></article>
                ))}

            </div>
            </div>
        </>
    )
}

export default Ara