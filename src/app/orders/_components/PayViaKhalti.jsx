import khalti from "@/assets/images/payments/khalti.jpg";
import Image from "next/image";

const PayViaKhalti = () => {
  return (
    <button className="text-white bg-[#4C276D] flex items-center pr-4 pl-2 py-1 rounded-md text-sm">
      <Image src={khalti} height={30} width={30} alt="" className="h-5 w-auto" />
      Khalti
    </button>
  )
}

export default PayViaKhalti
