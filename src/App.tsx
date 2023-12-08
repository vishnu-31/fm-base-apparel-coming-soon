import { useState } from "react"
import EmailValidator from "email-validator"

function App() {
  const [mail, setMail] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [errMsg, setErrMsg] = useState<string>("");

  const validateFn = () => {
    if(mail ==""){
      setIsError(true);
      setErrMsg("Email Address is empty");
    }else if(!EmailValidator.validate(mail)){
      setIsError(true);
      setErrMsg("Please provide a valid email")
    } else{
      setIsError(false)
    }
  }

  return (
  <main className="flex flex-col justify-between md:flex-row  w-screen">
    <div className="main-div md:px-52 md:py-16 flex bg-[url('/images/bg-pattern-desktop.svg')] bg-cover justify-center md:justify-normal  md:w-[1160px]">

      <div>
        <img className="m-10 md:mb-28" src="/images/logo.svg" alt="Logo Icon"/>
        <div className="md:hidden ">
          <img className="w-screen overflow-visible" src="/images/hero-mobile.jpg" alt="Hero Image for Mobile"/>
        </div>
        <div className="flex flex-col items-center md:items-start my-16">
          <div className="flex flex-col items-center md:items-start text-5xl md:text-7xl  my-5 tracking-widest">
            <div className="font-extralight de-red md:my-2">WE'RE</div>
            <div className="dark-text md:my-2">COMING</div>
            <div className="dark-text md:my-2">SOON</div>
          </div>
          <div className="w-[22em] md:w-[28em] text-center my-5 md:text-left de-red">
            Hello fellow shoppers! We're currently building our new fashion store. 
            Add your email below to stay up-to-date with announcements and our launch deals.
          </div>
          <div>
          <form className={`placeholder-rose-300 w-[22em] md:w-[28em] h-14 mx-4 md:mx-0 flex ${ isError? "border-red-500": "border-rose-100"} flex-nowrap border-2 rounded-full`}>
            <input className="pl-5 w-[90%] rounded-full focus:border-0 " placeholder="Email Address" type="email" name="mail" value={mail} onChange={e=> setMail(e.target.value)} id="mail" />
            { isError &&<img className="w-8 my-auto mx-3" src="/images/icon-error.svg" alt="error icon"/> }
            <button className="bg-rose-300 hover:shadow-xl active:bg-rose-200 shadow-inner rounded-full btn py-3 px-10 " 
                    type="button"
                    onClick={validateFn}>
              <img className="w-3" src="/images/icon-arrow.svg" alt="Arrow Icon" /></button>
          </form>
          {isError && <div className="text-red-500 pl-5 pt-2">{errMsg}</div>}
          </div>
        </div>
      </div>
    </div>
    <div className="hidden md:flex md:h-screen md:w-[750px]">
      <img className="w-full" src="/images/hero-desktop.jpg" alt="Hero Image for desktop"/>
    </div>
  </main> 
  )
}

export default App
