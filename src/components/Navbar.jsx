/* eslint-disable react/no-unknown-property */
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    return (
        <>
        <nav className="xui-navbar xui-container hw-nav xui-text-white" brand="true" layout="2" menu="2">
            <div className="brand">
                <HashLink className="xui-text-dc-none xui-text-inherit xui-d-inline-flex xui-flex-ai-center" to={'/'}>
                    <h1>HaulwaySolutionsCO</h1>
                    {/* <span className="xui-ml-half xui-d-inline-block xui-font-1 xui-font-w-bold">Kathy</span> */}
                </HashLink>
            </div>
            <div className="links" placed="left">
                <div className="main primary">
                    <ul>
                        <li>
                            <HashLink className="xui-font-sz-180 xui-md-font-sz-200 xui-lg-font-sz-90 xui-text-inherit" smooth to={"/"}><span className="xui-opacity-9">Home</span></HashLink>
                        </li>
                        <li>
                            <HashLink className="xui-font-sz-180 xui-md-font-sz-200 xui-lg-font-sz-90 xui-text-inherit" smooth to={"#offer"}><span className="xui-opacity-9">What we offer</span></HashLink>
                        </li>
                        <li>
                            <HashLink className="xui-font-sz-180 xui-md-font-sz-200 xui-lg-font-sz-90 xui-text-inherit" smooth to={"#companies"}><span className="xui-opacity-9">Our companies</span></HashLink>
                        </li>
                        <li>
                            <HashLink className="xui-font-sz-180 xui-md-font-sz-200 xui-lg-font-sz-90 xui-text-inherit" smooth to={"#management"}><span className="xui-opacity-9">Our management</span></HashLink>
                        </li>
                    </ul>
                </div>
                <div className="fixed xui-lg-d-block xui-md-d-block xui-d-none">
                    <ul>
                        <li>
                            <HashLink to={'#contact'} style={{padding: '.8rem 1.4rem'}} className='white-bdr xui-text-dc-none xui-text-white xui-font-sz-90 xui-font-w-bold xui-mr-1 xui-md-mr-none secondary'>Contact</HashLink>
                            {/* <BtnCustomI onClick={scrollToContainer("contact")} href="./" text="Book free consultation" mobileText="Book Now" layout="iv"></BtnCustomI> */}
                        </li>
                    </ul>
                </div>
                <div className="menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
        </>
    )
};

export default Navbar;