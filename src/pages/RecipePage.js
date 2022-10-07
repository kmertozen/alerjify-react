import React from 'react'
import { useParams } from 'react-router-dom'
import { FaListOl, FaUsers } from 'react-icons/fa'
import { TbToolsKitchen2 } from 'react-icons/tb'
import { useSite } from 'context/SiteContext';
import Interests from 'components/content/Interests';
function RecipePage() {
    const { recipes } = useSite();
    const { url } = useParams();
    const recipe = recipes && recipes.filter((recipe, index) => {
        if (recipe.slugurl === url) {
            return ([recipe.yemek_ad, recipe.yemek_desc, recipe.yemeking])
        } else { return null }
    })
    return (
        recipe &&
        <>
            <div className='container wrapper'>
                <div className='flex flex-row flex-wrap p-4'>
                    <div className='basis-4/6'>
                        <div className='title text-[1.75rem] font-medium'>{recipe[0].yemek_ad} Tarifi</div>

                        <div>
                            <img src={`https://www.alerjify.com/images/recipes/${recipe && recipe[0].cuuu}`} alt={recipe[0].yemek_ad} />
                        </div>
                        <div className='flex flex-row mt-2 flex-wrap'>
                            <div className='sm:basis-2/4 lg:basis-1/4 p-[1px]'>
                                <div className='flex items-center justify-center p-4 gap-x-4 bg-[#f3f3f3] text-lg' >
                                    <FaUsers color='#47c757' size="37px" />
                                    <div>
                                        <div className='font-semibold'>Kaç Kişilik</div>
                                        <div>1-2</div>
                                    </div>
                                </div>
                            </div>
                            <div className='sm:basis-2/4 lg:basis-1/4 p-[1px]'>
                                <div className='flex items-center justify-center p-4 gap-x-4 bg-[#f3f3f3] text-lg' >
                                    <FaUsers color='#47c757' size="37px" />
                                    <div>
                                        <div className='font-semibold'>Kaç Kişilik</div>
                                        <div>1-2</div>
                                    </div>
                                </div>
                            </div>
                            <div className='sm:basis-2/4 lg:basis-1/4 p-[1px]'>
                                <div className='flex items-center justify-center p-4 gap-x-4 bg-[#f3f3f3] text-lg' >
                                    <FaUsers color='#47c757' size="37px" />
                                    <div>
                                        <div className='font-semibold'>Kaç Kişilik</div>
                                        <div>1-2</div>
                                    </div>
                                </div>
                            </div>
                            <div className='sm:basis-2/4 lg:basis-1/4 p-[1px]'>
                                <div className='flex items-center justify-center p-4 gap-x-4 bg-[#f3f3f3] text-lg' >
                                    <FaUsers color='#47c757' size="37px" />
                                    <div>
                                        <div className='font-semibold'>Kaç Kişilik</div>
                                        <div>1-2</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#f1fef2] text-lg p-4 my-4'>
                            <div>
                                <div className="title-header text-3xl font-medium my-2 flex gap-x-2 items-center mb-10">
                                    <FaListOl className='text-primary' /> <h3>Malzemeler</h3>
                                </div>
                            </div>
                            <div className='yemek-ing p-5 bg-white' dangerouslySetInnerHTML={{ __html: recipe[0].yemek_ing.replaceAll("<li>", "<label class='flex items-center'><input type='checkbox'/><span>").replaceAll("</li>", "</span></label>") }} />
                        </div>
                        <div className='text-lg p-4 my-4'>
                            <div>

                                <div className="title-header text-3xl font-medium my-2 flex gap-x-2 items-center">
                                    <TbToolsKitchen2 className='text-primary' /> <h3>Nohut Salatalı Sandviç Tarifi Nasıl Yapılır</h3>
                                </div>
                            </div>
                            <div className='yemek-desc' dangerouslySetInnerHTML={{ __html: recipe[0].yemek_desc }} />
                        </div>
                    </div>

                    <div className='basis-2/6'>
                        <Interests />
                    </div>
                </div>
            </div>









            <div></div>
        </>
    )
}

export default RecipePage