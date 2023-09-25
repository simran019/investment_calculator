import Image from "next/image";
import logo from "../../assets/ic_logo.png";

const Header=()=>{
    return(
        <>
        <div>
          <Image width={150} height={150} src={logo} alt="IC_LOGO" />
        </div>
        <div className="text-3xl font-bold text-center">Investment Calculator</div>
        </>
    )
}
export default Header;