import React from 'react'
import RecipeSingle from '../RecipeSingle';
import { useSite } from 'context/SiteContext';
function Trio() {
    const { recipes } = useSite();
    return (

        <section>
            <div className='container wrapper grid grid-cols-none md:grid-cols-3'>
                {recipes && recipes.map((recipe, index) => {
                    if (index < 3) {
                        return (
                            <article key={index} className="basis-2/4 text-center my-4 md:px-4">
                                <RecipeSingle recipe={recipe} />
                            </article>
                        )
                    } else { return "" }
                })}
            </div>
        </section>
    )
}

export default Trio