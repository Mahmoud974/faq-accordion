import { useState } from "react";

const App = () => {

interface CollapseFAQ {
    item1: boolean;
    item2: boolean;
    item3: boolean;
    item4: boolean;
    item5: boolean;
  }
  const [collapseState, setCollapseState] = useState<CollapseFAQ>({
    item1: false,
    item2: true,
    item3: false,
    item4: false,
    item5: false,
  });
    
   const toggleCollapse = (item: keyof CollapseFAQ):void => {
    setCollapseState((prevState:CollapseFAQ) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };
  return (
   <div className="">
    <div className="bg-white  my-10  mx-4 mt-24 rounded-2xl shadow-2xl xl:flex xl:w-6/12 h-auto xl:h-auto  xl:mx-auto items-center ">
   <img src="/img/illustration-woman-online-desktop.svg" alt="illustration woman" className="hidden xl:flex xl:w-96 mx-auto -ml-11 relative z-20 " />
   <img src="/img/illustration-box-desktop.svg" alt="illustration woman" className="hidden xl:flex xl:w-88 mx-auto -ml-[5.8rem] mt-20 absolute z-40 " />
   <img src="/img/illustration-woman-online-mobile.svg" alt="illustration woman" className="w-56 xl:hidden xl:w-96  mx-auto -top-24  relative z-20  " />

     
      <ul className="px-6 text-[0.70rem]">
        <li> <h1 className={`text-4xl xl:text-2xl xl:text-left text-center py-6 font-bold -mt-24 xl:mt-2`}>FAQ</h1></li>
        <li className="cursor-pointer" >
<div className="flex items-center justify-between"  onClick={() => toggleCollapse("item1")}>
  <p className={`${collapseState.item1 ? 'font-bold' : ''} hover:text-orange-500`}>How many team members can I invite?</p>{collapseState.item1 ? <img src="/img/icon-arrow-up.svg" alt="arrow up" className="w-[0.6rem]"/> : <img src="/img/icon-arrow-down.svg" alt="arrow down" />
  }
</div>
{
  collapseState.item1 && <p className="mt-2">No more than 2GB. ALL files in your account must fit your alloted storage space. </p>
}
<div className="bg-gray-300 h-[0.08rem] mt-3"></div>
</li>

 <li className="cursor-pointer my-4" >
<div className="flex items-center justify-between"  onClick={() => toggleCollapse("item2")}>
  <p className={`${collapseState.item2 ? 'font-bold ' : ''} hover:text-orange-500`}>What is the maximum file upload size?</p>{collapseState.item2 ? <img src="/img/icon-arrow-up.svg" alt="arrow up" className="w-[0.6rem]"/> : <img src="/img/icon-arrow-down.svg" alt="arrow down" />
  }
</div>
{
  collapseState.item2 && <p className="mt-2">No more than 2GB. ALL files in your account must fit your alloted storage space. </p>
}
<div className="bg-gray-300 h-[0.08rem] mt-3"></div>
</li>

<li className="cursor-pointer my-4" >
<div className="flex items-center justify-between"  onClick={() => toggleCollapse("item3")}>
  <p className={`${collapseState.item3 ? 'font-bold ' : ''} hover:text-orange-500`}>How do I reset my password?</p>{ collapseState.item3 ? <img src="/img/icon-arrow-up.svg" alt="arrow up" className="w-[0.6rem]"/> : <img src="/img/icon-arrow-down.svg" alt="arrow down" />
  }
</div>
{
  collapseState.item3 && <p className="mt-2">No more than 2GB. ALL files in your account must fit your alloted storage space. </p>
}
<div className="bg-gray-300 h-[0.08rem] mt-3"></div>
</li>

<li className="cursor-pointer my-4 " >
<div className="flex items-center justify-between"  onClick={() => toggleCollapse("item4")}>
  <p className={`${collapseState.item4 ? 'font-bold ' : ''} hover:text-orange-500`}>Can I cancel my subscription?</p> { collapseState.item4 ? <img src="/img/icon-arrow-up.svg" alt="arrow up" className="w-[0.6rem]"/> : <img src="/img/icon-arrow-down.svg" alt="arrow down" />
  }
</div>
{
  collapseState.item4 && <p className="mt-2">No more than 2GB. ALL files in your account must fit your alloted storage space. </p>
}
<div className="bg-gray-300 h-[0.08rem] mt-3 mb-4"></div>
</li>

<li className="cursor-pointer  pb-4" >
<div className="flex items-center justify-between"  onClick={() => toggleCollapse("item5")}>
  <p className={`${collapseState.item5? 'font-bold ' : ''} hover:text-orange-500 mr-[6rem]`}>Do you provide additionnal support?</p>{ collapseState.item5 ? <img src="/img/icon-arrow-up.svg" alt="arrow up" className="w-[0.6rem]"/> : <img src="/img/icon-arrow-down.svg" alt="arrow down" />
  }
</div>
{
  collapseState.item5 && <p className="mt-2">No more than 2GB. ALL files in your account must fit your alloted storage space. </p>
}
<div className="bg-gray-300 h-[0.08rem] mt-3 mb-4"></div>
</li>
</ul>
    </div>
   </div>
  )
}

export default App