import RecipeSingle from 'components/RecipeSingle'
import React, { useState, useEffect } from 'react'
import { useSite } from 'context/SiteContext';

function Tarifler() {

    const { recipes, } = useSite();
    const [alerjiler, setAlerjiler] = useState()

    useEffect(() => {
        async function fetchData() {
            const responsee = await fetch("https://www.alerjify.com/api/alerjiler")
            if (responsee.status === 200) {
                const data = await responsee.json()
                setAlerjiler(data)
            } else {
                console.log('Hata', responsee.statusText)
            }
        }
        fetchData()
    }, [])

    const [q, setQ] = useState("");
    const [qweqw] = useState(["yemek_ad"]);
    function search() {

        return asd().filter((item) => {
            return (
                item["yemek_ad"]
                    .toString()
                    .toLowerCase()
                    .indexOf(q) > -1
            );
        });
    }
    const [param, setParam] = useState([])
    const handleClick = (e, sdas) => {
        e.currentTarget.classList.toggle('bg-black');
        e.currentTarget.classList.toggle('text-white');
        if (param.findIndex(params=>params===sdas)===-1) {
            setParam([...param, sdas])

        } else {
            setParam([...param.filter((params) => params !== sdas)])
        }

    };
    function asd() {
        if (recipes) {
            return recipes.filter((item) => {
                return param.every((newItem) => {
                    return (
                        item.alerjiler.every(alerji => { return alerji !== newItem })
                    );
                });
            })
        }
    }

    return (
        <>
            <div className='container wrapper'>
                <div className='flex flex-wrap gap-x-4 justify-center'>
                    {alerjiler && alerjiler.map((alerji, i) => (
                        <div key={i} className="bg-black p-4 text-white rounded-full w-24 h-24 text-sm text-center cursor-pointer flex items-center justify-center " onClick={(e) => handleClick(e, `${alerji.alerji_ad}`)}>{alerji.alerji_ad}</div>
                        ))}
                </div>
                <div>
                    <input type='text' onChange={(e) => setQ(e.target.value)} className="w-1/2 p-4 h-10 border border-gray-300" placeholder='Tarif Ara' />
                </div>
                <div className='flex flex-row flex-wrap'>
                    {recipes && search().map((item, index) => (
                        <article className='basis-1/3 p-4' key={index}>
                            <RecipeSingle recipe={item} />
                        </article>
                    ))}
                </div>
            </div>
        </>



    )
}

export default Tarifler