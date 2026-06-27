import React from 'react'

const CallToAction = () => {
  return (
    <div id='cta' className="bg-black py-16">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            
            <div className="max-w-5xl py-16 md:w-full mx-2 md:mx-auto flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#301469] to-black rounded-2xl p-10 text-white">
                <p className="px-6 py-2 rounded-full text-sm border border-[#54487B] bg-gradient-to-r from-[#A992F2] to-[#DFAB9B] bg-clip-text text-transparent">
                    Commnunity & Support
                </p>
                <h1 className="text-4xl md:text-5xl md:leading-[60px] font-medium max-w-2xl mt-5">
                    
                    Craft Your Perfect Re
                    <span className="bg-gradient-to-r from-[#A992F2] to-[#DFAB9B] bg-clip-text text-transparent">sume with AI</span>
                </h1>
                <p className="text-white text-sm mt-3">Let AI write, optimize, and format your resume so you can focus on landing interviews.</p>
                <button className="px-12 py-2.5 mt-6 rounded-full text-sm border border-[#54487B] active:scale-95 transition-all bg-gradient-to-r from-[#A992F2] to-[#DFAB9B] bg-clip-text text-transparent cursor-pointer">
                    Build My Resume
                </button>
            </div>
        </div>
  )
}

export default CallToAction
