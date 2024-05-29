const Footer = () => {
  return (
    <div>
      <div className="bg-black w-full h-55">
        <div className="justify-center items-center flex gap-[150px] duration-300">
            <div className="-translate-y-[140px] duration-300">
                <h1 className="text-green-700 font-bold text-4xl">About</h1>
                <p className="text-white mt-3 tracking-wider">CTT has let its mission statement, vision statement and core values<br></br> drive the company. We aim to be a trusted partner in the cleaning<br></br> industry. We happily serve our customers in the Charlotte metro<br></br> area.</p>
            </div>
            <div className="-translate-y-[140px] duration-300">
                <h1 className="text-green-700 font-bold text-4xl">Contact</h1>
                <p className="text-white mt-3 tracking-wider">Email: support@charlottestidytouch.com</p>
                <p className='text-white mt-3 tracking-wider'>Phone: +704 286 6290</p>
                <p className='text-white mt-3 tracking-wider'>Charlotte, NC, USA</p>
            </div>
            <div className="translate-y-7 duration-300">
                <h1 className="text-green-700 font-bold text-4xl">Recent Posts</h1>
                <p className='text-white mt-3 tracking-wider'>Top 7 Factors to Evaluate When <br></br>Choosing a Professional<br></br> Cleaning Service in Charlotte, NC</p>
                <p className='text-white mt-3 tracking-wider font-Inconsolata'>When seeking a professional cleaning service<br></br> in Charlotte NC, it's...<span className="cursor-pointer font-inconsolata hover:underline font-bold">Read More</span></p>
                <p className='text-white mt-3 tracking-wider'>How to Clean and Organize <br></br>Your Charlotte Office Space</p>
                <p className='text-white mt-3 tracking-wider font-Inconsolata'>Working in a clean and <br></br>organized office can boost <br></br>productivity… <span className="cursor-pointer font-inconsolata hover:underline font-bold">Read More</span></p>
                <p className='text-white mt-3 tracking-wider'>Fall Cleaning: Transitioning Your <br></br>Home for a Cozy Autumn</p>
                <p className='text-white mt-3 tracking-wider font-Inconsolata'>As the vibrant colors of summer <br></br>give way to the <span className="cursor-pointer font-inconsolata hover:underline font-bold">Read More</span></p>
                <p className='text-white mt-3 tracking-wider'>Charlotte’s Tidy Touch <br></br>Bathroom Care</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
