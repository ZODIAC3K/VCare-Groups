import React from 'react'
import Nav from './Nav'

const Nav_bar = () => {
    return (
        <React.Fragment>

            <section className="flex justify-center flex-col items-center w-full text-white">
                <div
                    className="w-full h-full flex  flex-col md:flex-row justify-between pr-10 pl-10 pt-5 pb-5  items-center bg-[#4FA097]">
                    <div className="flex justify-center items-center">
                        <img className="w-20 md:w-24" src="img/logo.png" alt="logo"/>
                            <span className="text-2xl md:text-3xl font-[AltoneTrial-Reg] font-extrabold pt-3 pl-2">VCARE GROUPS</span>
                    </div>
                    <Nav />
                </div>
            </section>
        </React.Fragment>
    )
}

export default Nav_bar