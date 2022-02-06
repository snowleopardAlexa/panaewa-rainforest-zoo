import { GoThreeBars } from 'react-icons/go';

const Navbar = () => {
   return (
     <>
       <div className="navbar">
         <div className="logo">
           <img src={''} alt="" />
         </div>
         <GoThreeBars />
         <div className="nav-menu">
           <div className="nav-link">
             About
           </div>
           <div className="nav-link">
             About
           </div>
           <div className="nav-link">
             About
           </div>
           <div className="nav-link">
             About
           </div>
           <div className="nav-btn">
             <div className="nav-btn-link">
               Buy Tickets 
             </div>
           </div>
         </div>
       </div>
     </>
  );
};
export default Navbar;

