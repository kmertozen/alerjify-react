import React from 'react'
import { BiTime, BiHeart } from "react-icons/bi";
import { useSite } from 'context/SiteContext';
function Interests() {
    const {recipes}=useSite();
    return (
        <>
            
            <section className='lg:basis-2/6 basis-full px-4'>
                <div className='title-header'>
                    <h3 className='title text-[1.60rem] font-medium'>İlginizi Çekebilir</h3>
                </div>
                <div className='recipe-list flex flex-col gap-y-5'>
                {recipes && [...recipes].map((recipe, index) => {
                if (index < 5) {
                    return (<div key={index} className="flex">
                        <div className="w-32 mr-4"><a href={`/tarif/${recipe.slugurl}`}><img src={`https://www.alerjify.com/images/recipes/${recipe.cuuu}`} width="430" height="270" className='h-32 max-w-none w-32 object-cover' alt='img' /></a></div>
                        <div className="list-item-content">
                            <div> <span className="sub-title"><a href={`/tarif/${recipe.slugurl}`}>{recipe.kategori_ad}</a></span></div>
                            <div> <span className="title text-[1.2rem]"><a href="/recipes/pratik-patates-puresi">{recipe.yemek_ad}</a></span></div>
                            <div className='flex items-center gap-x-1'><BiTime color='#47c757' /> <span>30 Aralık, 2019</span></div>
                            <div className='flex items-center gap-x-1'><BiHeart color='#47c757' /> <span>20 Beğeni</span></div>
                        </div>
                    </div>
                    )}else{return ""}
            })}


                </div>
            </section>
        </>
    )
}

export default Interests