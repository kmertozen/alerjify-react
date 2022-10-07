import React, { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'




function Modal() {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div className='flex gap-x-2 cursor-pointer' onClick={openModal}>
                <img src="https://www.alerjify.com/images/users/default.png" className='w-12 h-12' alt='User Icon' />
                <div className='flex flex-col'>
                    <span className='font-semibold text-lg'>Giriş Yap / Üye Ol</span>
                    <span className='leading-3 text-[#999]'>Tarifini Bul</span>
                </div>
            </div>


            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-75" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-2xl font-medium leading-6 text-gray-900 title-header"
                                    >
                                        Giriş Yap
                                    </Dialog.Title>
                                    <form className="mb-4">
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-md font-bold mb-2" for="username">
                                                Kullanıcı Adı
                                            </label>
                                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Kullanıcı Adı" />
                                        </div>
                                        <div className="mb-6">
                                            <label className="block text-gray-700 text-md font-bold mb-2" for="password">
                                                Şifre
                                            </label>
                                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                                           
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <button className="transition ease-linear delay-[5ms] bg-primary hover:bg-[#277631] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                                Giriş Yap
                                            </button>
                                            <a className="inline-block align-baseline font-bold text-sm text-primary " href="#">
                                                Forgot Password?
                                            </a>
                                        </div>
                                        <label class="my-3">
                                            Hesabın Yok mu? <a href="/uyeol" className='text-primary' title="Kayıt Ol">Kayıt Ol</a>
                                        </label>
                                    </form>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default Modal