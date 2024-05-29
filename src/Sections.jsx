import office from './Office.jpg'
import greenIndustrial from './warehouseimage.jpg'
import gym from './Gym.jpg'
import school from './SCHOOL.png'
import church from './churchimage.jpg'
import health from './healthcare.jpg'

const Sections = () => {
  return (
    <div>
    <div className="bg-white justify-center items-center flex w-full h-[1200px]">
        <div className="w-60 h-[1100px] duration-300">
            <div className="flex justify-center gap-7">
                <div className="drop-shadow-lg w-[481px] h-[544px] bg-white border-4">
                    <div className='w-full flex justify-center self-center'><img className='object-contain' src={office}  alt='img'/></div>
                    <div className="translate-y-[25px] duration-300">
                        <h1 className="text-center text-4xl font-bold">Enhance Your Office Enviorment with <span className="text-green-500">CTT</span></h1>
                        <p className="text-center mt-4 text-xs tracking-wider leading-[14px]">Experience Proffesional Disinfection and <br></br>Specialized Floor Cleaning Services, Tailored to <br></br>Your Needs</p>
                    </div>
                </div>
                <div className="border-black border-1 w-[481px] h-[544px] bg-white">
                <div className='w-[481px] h-[196px] mt-4 flex justify-center self-center'><img src={greenIndustrial} className='w-[450px] h-[340px]' alt='img'/></div>
                    <div className='translate-y-28 translate-x-3'>
                    <h2 className='text-green-400 uppercase tracking-widesSt text-2xl font-bold text-center -translate-y-[190px]'>Warehouse & Industrial</h2>
                        <p className='font-Inter text-xl leading-[35px] w-[460px]'>For business operating out of warehouses or industrial sites, DCC services, clans, and disinfects your building to build  more conducive workplace.</p>
                        <button className='mt-2 p-8 uppercase bg-black text-white justify-center items-center flex tracking-wider h-[16px] font-normal hover:text-black hover:bg-zinc-100 duration-300'>Learn More</button>
                    </div>
                </div>
                <div className="drop-shadow-lg w-[481px] h-[544px] bg-white border-4">
                    <div className='w-full h-[196px] flex justify-center self-center'><img className=' h-[320px] w-full' src={gym}  alt='img'/></div>
                        <div className="translate-y-[150px] duration-300">
                            <h1 className="text-center text-4xl font-bold">Elevate Your Fitness Experience with <span className="text-green-500">CTT</span></h1>
                            <p className="text-center text-xs tracking-[1] mt-4 leading-[14px]">Transform your gym into a pristine haven with CTT Cleaning Services tailored for Charlottes active community. Experience the difference with our eco-friendly products that promote a healthy environment for your patrons. <br></br>Trust CTT to exceed your expectations, leaving your gym spotless and ready for peak performance.</p>
                        </div>
                    </div>
            </div>
            <div className="h-8"></div>
            <div className="flex justify-center gap-7">
            <div className="border-black border-1 w-[481px] h-[544px] bg-white">
                <div className='w-full h-[196px] mt-4 flex justify-center self-center '><img src={church} className='w-[450px] h-[340px]'  alt='img'/></div>
                    <div className='translate-y-28 translate-x-3'>
                    <h2 className='text-green-400 uppercase tracking-widesSt text-2xl font-bold text-center -translate-y-[190px]'>Warehouse & Industrial</h2>
                        <p className='font-Inter text-xl leading-[35px] w-[460px]'>CTT is committed to Integrity, Quality and Dependability. We enjoy the opportunity to serve like-minded organizations</p>
                        <button className='mt-2 p-8 uppercase bg-black text-white justify-center items-center flex tracking-wider h-[16px] font-normal hover:text-black hover:bg-zinc-100 duration-300'>Learn More</button>
                    </div>
                </div>
                    <div className="drop-shadow-lg w-[481px] h-[544px] bg-white border-4">
                    <div className='w-full flex justify-center self-center -mt-6'><img className='object-contain h-[320px] w-full' src={school}  alt='img'/></div>
                        <div className="translate-y-[25px] duration-300">
                            <h1 className="text-center text-4xl font-bold">Better Learning Enviorments with <span className="text-green-500">CTT</span></h1>
                            <p className="text-center text-xs tracking-widest mt-4 leading-[14px]">When it comes to fostering an optimal <br></br>environment for childrens growth and education, <br></br>consider partnering with CTT. Our specialized <br></br>service ensures meticulously sanitized spaces, <br></br>creating a conducive setting for learning and <br></br>development.</p>
                        </div>
                    </div>
                    <div className="border-black border-1 w-[481px] h-[544px] bg-white">
                <div className='w-full h-[196px] mt-4 flex justify-center self-center '><img src={health} className='w-[450px] h-[340px]'  alt='img'/></div>
                    <div className='translate-y-28 translate-x-3'>
                    <h2 className='text-green-400 uppercase tracking-widesSt text-2xl font-bold text-center -translate-y-[190px]'>Healthcare Facilities</h2>
                        <p className='font-Inter text-xl leading-[35px] w-[460px]'>At CTT, we're more than cleaners. We're health guardians, ensuring a safe environment for everyone in your healthcare facility.</p>
                        <button className='mt-2 p-8 uppercase bg-black text-white justify-center items-center flex tracking-wider h-[16px] font-normal hover:text-black hover:bg-zinc-100 duration-300'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>  
    </div>
    </div>
  )
}

export default Sections
