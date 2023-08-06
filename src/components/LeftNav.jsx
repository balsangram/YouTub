import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import LeftNavMenuItem from "./LeftNavMenualtem";
import { categories } from "../utils/constants";
import { context } from "../context/contextApi";

const LeftNav = () => {
  const { selectCategories, setselectCategories, mobileMenu} = useContext(context);

  const navigate =  useNavigate();

const clickHanlder = (name, type) => {
  switch (type){
    case "category":
      return setselectCategories(name);
    case "home":
      return setselectCategories(name);
    case "menu":
      return false
      default:
        break;
  }
}

  return (
    <div className={`md:block w-[240px] overflow-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:transition-x-0 transition-all ${mobileMenu?"translate-x-0":""}`}>
       <div className="flex px-5 flex-col">
         {categories.map((item) => {
          return(
            <React.Fragment key={item.nav}>
              <LeftNavMenuItem
              text={item.type === "home" ? "Home" : item.name}
              icon={item.icon}
              action={()=> {
                clickHanlder(item.name, item.type)
                navigate("/");
              }}
              className={`${selectCategory === item.name ? "bg-white/[0.15" : ""}`}
              />
              {item.divider && (
                <hr className='my-5 border-white/[0.2]'/>
              )}
            </React.Fragment>
          );
         })}
          <hr className='my-5 border-white/[0.2]'/>
          <div className="text-white/[0.5] text-[12px]">
            hellow to work
          </div>
       </div>
    </div>
  )
}

export default LeftNav;
