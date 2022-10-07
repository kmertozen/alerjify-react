import React from 'react'
import Menu from './Menu'
import Modal from './Modal'
function Header() {
    return (
        <>
            <div className='border bg-white'>
                <div className='container p-4 flex justify-between items-center'>
                    <a href="/"><img width="200" height="60" className='py-2' alt="Alerjify" src="https://www.alerjify.com/images/logo.png" /></a>
            <form action='/ara/' method='get'>
                    <input type="text" className='border-2' name='q'/>
                            <button type='submit'>gonder</button>
             </form>
             <Modal/>
                </div>
                
            </div>
            <Menu />
        </>
    )
}

export default Header