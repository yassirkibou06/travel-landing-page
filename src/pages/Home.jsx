import React from 'react'
import { BiChevronRight, BiLocationPlus, BiSolidStar } from 'react-icons/bi'
import { FaPlay } from 'react-icons/fa'
import { LiaHandHoldingHeartSolid } from 'react-icons/lia'
import About from '../components/About'

const Home = () => {
    return (
        <>
            <div className='mt-[8rem] grid grid-cols-2 gap-10 p-14 bg-hero rounded-3xl h-screen'>
                {/**========== hero section-left */}
                <div className='flex gap-6'>
                    <div>
                        {/**========== card#1 */}
                        <div className='bg-white relative w-[250px] px-4 py-2 rounded-2xl shadow-md shadow-gray-200'>
                            <img src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile-hero" className='rounded-full object-cover w-8 h-8' />
                            <div className='absolute -top-4 right-8 shadow-md bg-primary text-white rounded-xl w-10 h-10 flex items-center justify-center'>
                                <LiaHandHoldingHeartSolid size={25} />
                            </div>
                            <div className='flex items-center justify-between'>
                                <h4 className='text-sm font-medium'>Nelson jhon</h4>
                                <span className='font-semibold'>4.5</span>
                            </div>
                            <div className='flex items-center justify-between'>
                                <p className='text-gray-300 text-xs'>New york</p>
                                <div className='flex items-center space-x-1'>
                                    <BiSolidStar size={14} className='text-yellow-500' />
                                    <BiSolidStar size={14} className='text-yellow-500' />
                                    <BiSolidStar size={14} className='text-yellow-500' />
                                    <BiSolidStar size={14} className='text-yellow-500' />
                                    <BiSolidStar size={14} className='text-gray-400' />
                                    <span className='text-gray-500 text-sm'>{"(199)"}</span>
                                </div>
                            </div>
                        </div>
                        {/**========== card#2 */}
                        <div className='bg-white relative w-[250px] p-4 rounded-2xl mt-4 shadow-lg shadow-gray-200'>
                            <img src="https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="hot-air" className='rounded-2xl object-cover w-full h-[270px]' />
                            <h4 className='pt-4'>Kyoto</h4>
                            <div className='flex items-center justify-between'>
                                <p className='text-gray-300 text-xs flex items-center'><BiLocationPlus className='mr-1' />Japan</p>
                                <div className='flex items-center space-x-1'>
                                    <BiSolidStar size={14} className='text-yellow-500' />
                                    <span className='text-gray-500 text-sm'>{"{5.0}"}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        {/**========== card#3 */}
                        <div className='bg-white relative w-[250px] p-4 rounded-2xl shadow-md shadow-gray-200'>
                            <img src="https://images.pexels.com/photos/25645714/pexels-photo-25645714/free-photo-of-hot-air-balloons-above-cappadocia.jpeg?auto=compress&cs=tinysrgb&w=600" alt="hot-air" className='rounded-2xl object-cover w-full h-[260px]' />
                            <h4 className='pt-4'>Cappadocia</h4>
                            <div className='flex items-center justify-between'>
                                <p className='text-gray-300 text-xs flex items-center'><BiLocationPlus className='mr-1' />Turkey</p>
                                <div className='flex items-center space-x-1'>
                                    <BiSolidStar size={14} className='text-yellow-500' />
                                    <span className='text-gray-500 text-sm'>{"{5.0}"}</span>
                                </div>
                            </div>
                        </div>
                        {/**========== card#4 */}
                        <div className='bg-white relative w-[250px] h-[100px] px-4 py-4 rounded-2xl mt-4 shadow-md shadow-gray-200'>
                            <div className='flex gap-2'>
                                <div>
                                    <img src="https://images.pexels.com/photos/561463/pexels-photo-561463.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile-hero" className='rounded-2xl object-cover w-[72px] h-[74px]' />
                                </div>
                                <div className='flex flex-col items-center relative'>
                                    <h4 className='text-sm font-medium'>the word audience</h4>
                                    <p className='text-gray-400 text-sm'>popular audience</p>
                                    <div className='flex items-center'>
                                        <img src="https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile-hero" className='absolute top-12 left-1 z-0 rounded-full object-cover w-7 h-7 shadow-md' />
                                        <img src="https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile-hero" className='absolute top-12 left-5 z-[1] rounded-full object-cover w-7 h-7 shadow-md' />
                                        <img src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile-hero" className='absolute top-12 left-8 z-[2] rounded-full object-cover w-7 h-7 shadow-md' />
                                        <div className='cursor-pointer absolute top-12 left-12 z-[3] rounded-full object-cover w-7 h-7 shadow-md bg-primary text-white flex items-center justify-center'>
                                            <BiChevronRight size={22} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/**========== hero section-right */}
                <div className='space-y-6 pt-8'>
                    <h1 className='font-playfair font-extrabold text-7xl w-[500px]'>Life is short and the world is wide.</h1>
                    <p className='w-[340px] '>To get the best  of your adventure you just need to leave and go where you like. we are waiting for you</p>
                    <div className='flex items-center space-x-8'>
                        <button className='bg-primary text-sm text-white px-6 py-3 rounded-3xl transition-shadow hover:shadow-md hover:shadow-primary/60'>
                            Explore More
                        </button>
                        <div className='cursor-pointer bg-white text-primary shadow-md shadow-gray-200 rounded-full w-9 h-9 flex items-center justify-center'>
                            <FaPlay />
                        </div>
                    </div>
                </div>
            </div>
            <About />
        </>
    )
}

export default Home