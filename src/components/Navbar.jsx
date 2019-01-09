import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from "../assets/logo.svg";
import QuestsIcon from "../assets/QuestsIcon.svg";
import SearchIcon from "../assets/SearchIcon.svg";
import BridgeIcon from "../assets/BridgeIcon.svg";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <div style={{ borderBottomWidth: '1px', borderColor: 'white' }}>
            <div className="white-line-nav">
                <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">
                    <div style={{ transform: "translate3d(0px, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", display: "none", transformStyle: "preserve-3d" }} className="page-transition"></div>
                    <div className="div-block-5">
                    <div className="w-layout-grid grid">
                        <div className="md:block hidden">
                            <a href="https://www.bonkcoin.com/" className="btn btn-one bonk w-inline-block">
                                <div className="text-block-5 bonk">BONK</div>
                            </a>
                        </div>
                        <div id="w-node-_9ae1c1ea-9434-1224-6b81-e691eae144b2-d49e2f0e" className="butt-wrap">
                            <a href="https://www.bonkcoin.com/" className="btn btn-one bonk w-inline-block">
                                <div className="text-block-5 bonk">BONK</div>
                            </a>
                        </div>
                        <div id="w-node-_9ae1c1ea-9434-1224-6b81-e691eae1449d-d49e2f0e" className="div-block-6 all-buttons w-embed">
                            <a href="https://www.bonkcoin.com/about" aria-current="page" className="btn btn-one w-inline-block w--current">
                                <div className="text-block-5">ABOUT</div>
                            </a>
                            <a href="https://www.bonkcoin.com/integrations" className="btn btn-one two w-inline-block">
                                <div className="text-block-5">INTEGRATIONS</div>
                            </a>
                            <a href="https://www.bonkcoin.com/bonk-paper" className="btn btn-one w-inline-block">
                                <div className="text-block-5">BONK PAPER</div>
                            </a>
                            <a href="https://openbonk.io/" className="btn btn-one w-inline-block">
                                <div className="text-block-5">OPENBONK</div>
                            </a>
                            <a href="https://www.bonkcoin.com/nft" className="btn btn-one w-inline-block">
                                <div className="art">NFT</div>
                            </a>
                            <a href="https://buybonk.com" className="btn btn-one w-inline-block">
                                <div className="art">GET BONK</div>
                            </a>
                        </div>
                    </div>
                    <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
                    <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
                </div>
            </div>
        </div>
        </div>
    )
}

//         <div classNameName="flex justify-between items-center h-14 max-w-full my-1 mx-auto md:mx-10 px-4 text-white">
//         <a className="w-full" href="/">
//             <img src={logo} alt="logo" style={{ width: "105.6px", height: "28px" }} />
//         </a>
//         <ul className="hidden md:flex">
//             <li className="p-4 flex items-center">
//                 <span style={{ marginRight: '5px', width: '15px', height: '15px' }}>
//                     <img src={QuestsIcon} alt="" />
//                 </span>
//                 Quests
//             </li>
//             <li className="p-4 flex items-center">
//                 <span style={{ marginRight: '5px', width: '15px', height: '15px' }}>
//                     <img src={SearchIcon} alt="" />
//                 </span>
//                 Search
//             </li>
//             <li className="p-4 flex items-center">
//                 <span style={{ marginRight: '5px', width: '15px', height: '15px' }}>
//                     <img src={BridgeIcon} alt="" />
//                 </span>
//                 Bridge
//             </li>
//         </ul>
//         <ul>
//             <button className="inline-flex items-center justify-center" style={{ width: 'max-content', padding: "5px 10px", fontFamily: 'inherit', borderRadius: 10, margin: "0 16px 0 16px", cursor: "pointer", backgroundColor: "#2F3645", color: 'white' }}>
//                 Sign in
//             </button>
//         </ul>
//         <div onClick={handleNav} className="block md:hidden">
//             {
//                 nav ? <AiOutlineClose size={20} /> :
//                     <AiOutlineMenu size={20} />
//             }
//         </div>
//         <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
//             <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">Menu</h1>
//             <ul className="uppercase p-4">
//                 <li className="p-4 border-b border-gray-600 flex items-center">
//                     <span style={{ marginRight: '5px', width: '15px', height: '15px' }}>
//                         <img src={QuestsIcon} alt="" />
//                     </span>
//                     Quests
//                 </li>
//                 <li className="p-4 border-b border-gray-600 flex items-center">
//                     <span style={{ marginRight: '5px', width: '15px', height: '15px' }}>
//                         <img src={SearchIcon} alt="" />
//                     </span>
//                     Search
//                 </li>
//                 <li className="p-4 border-b border-gray-600 flex items-center">
//                     <span style={{ marginRight: '5px', width: '15px', height: '15px' }}>
//                         <img src={BridgeIcon} alt="" />
//                     </span>
//                     Bridge
//                 </li>
//             </ul>
//         </div>

export default Navbar