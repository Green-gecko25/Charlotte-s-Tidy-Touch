

const Header = () => {
  return (
    <div>
      <div className="h-screen bg-cover w-full bg-[url(C:\Users\cnheg\OneDrive\Desktop\react-projects\Charlotte\src\Background.png)]">
        <div className="translate-y-16 duration-300 font-Inter p-20">
            <h1 className="drop-shadow-2xl text-left text-7xl uppercase text-white font-extrabold leading-32 duration-300 tracking-widest"><br></br>Customizable<span className="text-green-500"><br></br>Cleaning</span> <br></br>Services</h1>
            <p className="font-bold text-white text-lg duration-300 translate-y-5">Here at Charlottes Tidy Touch, we tailor commercial cleaning solutions for your facility that work. <br></br>Our professional, friendly cleaning technicians at CTT are ready to tackle your facility <br></br>when you need us the most.</p>
        </div>
        <div className='translate-x-20 w-[500px] gap-6 text-md flex tracking-wide font-bold translate-y-5 duration-300'><button className="drop-shadow-[600px] hover:text-white bg-green-400 h-16 w-[550px] rounded-md uppercase text-black border-none duration-300 hover:bg-stone-900">Learn More</button><button className="bg-opacity-30 backdrop-blur uppercase border-2 rounded-md text-white h-16 w-[550px] hover:text-black duration-300">Free Quote</button></div>
      </div>                                                                                                     
    </div>
  )
}

export default Header
