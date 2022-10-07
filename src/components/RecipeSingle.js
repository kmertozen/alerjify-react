import React from 'react'
import { FaUser, FaClock, FaHeart } from "react-icons/fa";
function RecipeSingle({recipe,substr=150}) {


    return (
        <>
            <a href={`/tarif/${recipe.slugurl}`}>
                <figure className="recipe-image">
                    <img src={`https://www.alerjify.com/images/recipes/${recipe.cuuu}`} className="w-full h-64 object-cover" alt='img' />
                </figure>
            </a>
            <div className="p-4">
                <span className="sub-title"><a href="https://www.alerjify.com">{recipe.kategori_ad}</a></span>
                <h2><span className="title text-[1.2rem]"><a href="https://www.alerjify.com">{recipe.yemek_ad}</a></span></h2>
                <p className='text-[#646464] my-4 '>
                    {recipe.yemek_desc.substring(0, substr).replaceAll(/(<([^>]+)>)/gi, "").replaceAll("&nbsp;","")}...
                </p>
                <ul className="recipe-metas">
                    <li><FaUser color='#47c757' /> Mert</li>
                    <li><FaClock color='#47c757' /> 20dk</li>
                    <li><FaHeart color='#47c757' /> 20 Beğeni</li>
                </ul>
            </div>
        </>
    )
}

export default RecipeSingle