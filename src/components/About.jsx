import { BiRightArrowAlt } from "react-icons/bi"

const About = () => {
    return (
        <div className="my-10 px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            {/**========== about-left-section */}
            <div className="space-y-6 mt-8">
                <h1 className='font-playfair font-extrabold text-2xl md:text-3xl lg:text-4xl md:w-[328px] lg:w-[500px]'>Explore our tailor made package for you</h1>
                <p className='w-[328px] lg:w-[350px] '>To get the best  of your adventure you just need to leave and go where you like. we are waiting for you</p>
                <div className='flex items-center w-fit border border-gray-300 text-sm px-6 py-3 rounded-3xl transition-colors cursor-pointer hover:bg-primary hover:text-white hover:border-white'>
                    <p className="mr-2">Explore More</p>
                    <BiRightArrowAlt size={20} />
                </div>
            </div>
            {/**========== about-right-section */}
            <div className="flex gap-4 md:gap-6">
                {/**========== card#1 */}
                <div className='bg-white relative w-[225px] p-4 rounded-2xl shadow-lg shadow-gray-400 mt-10'>
                    <img src="https://images.pexels.com/photos/19841810/pexels-photo-19841810/free-photo-of-a-blue-painted-alleyway-with-blue-walls-and-blue-doors.jpeg?auto=compress&cs=tinysrgb&w=600" alt="hot-air" className='rounded-2xl object-cover w-full h-[270px]' />
                </div>
                {/**========== card#2 */}
                <div className='bg-white relative w-[225px] p-4 rounded-2xl shadow-lg shadow-gray-400 mb-10'>
                    <img src="https://images.pexels.com/photos/3889891/pexels-photo-3889891.jpeg?auto=compress&cs=tinysrgb&w=600" alt="hot-air" className='rounded-2xl object-cover w-full h-[270px]' />
                </div>
            </div>
        </div>
    )
}

export default About