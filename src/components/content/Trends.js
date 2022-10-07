import React from 'react'
import RecipeSingle from 'components/RecipeSingle'
import { useSite } from 'context/SiteContext';
function Trends() {
    const {recipes}=useSite();



    return (
        <section className='px-4 lg:basis-4/6'>
            <div className='title-header'>
                <h2 className='title text-[1.75rem]'>Trendler</h2>
            </div>


            <div className='trends-row flex flex-row flex-wrap'>

                {recipes && recipes.map((recipe, index) => {
                    if (index > 2 && index < 8) {
                        return (
                            <article key={index} className="basis-2/4 text-center my-4 md:px-4">
                                <RecipeSingle recipe={recipe} />
                            </article>
                        )
                    } else { return ("") }
                })}


            </div>

        </section>
    )
}

export default Trends