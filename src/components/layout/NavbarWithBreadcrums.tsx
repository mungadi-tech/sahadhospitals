import { ArrowBigRight } from "lucide-react";
import { useLocation } from "react-router-dom";
// import doctor from "../../assets/images/doctors.jpg";

export const NavbarWithBreadcrums = () => {
  const loc = useLocation();

  const bread = loc.pathname.split("/").map((b) => b);

  return (
    <section>
      <div className="bg-secondary/30 p-4">
        <h1 className="capitalize text-center font-bold text-gray-500 text-3xl my-4">
          {bread}
        </h1>
        <div className="flex gap-2 capitalize  text-gray-400 justify-center items-center">
          Home <ArrowBigRight /> {bread}
        </div>
      </div>
    </section>
  );
};

// function About() {
//   return (
//     <div className="my-14 p-4 w-[90%] mx-auto">
//       <div className="flex justify-center flex-col">
//         <h1 className="uppercase text-4xl  inline-flex font-bold justify-center text-gray-700">
//           About Us
//         </h1>
//         <span className="border-b-4 border-info w-14 mx-auto my-4"></span>
//         <p className="text-center text-gray-700 font-normal text-xl">
//           Your health is our priority
//         </p>
//       </div>
//       <div>
//         <div className="grid md:grid-cols-2 gap-4 mt-8">
//           <div>
//             <img className="w-full h-full" src={doctor} alt="" />
//           </div>
//           <div>
//             <h1 className="text-3xl my-8 md:my-0 font-bold text-gray-600 mb-4">
//               The Best Medics, Doctors & Physicians
//             </h1>
//             <article className="mt-4 text-xl text-gray-600">
//               <i>
//                 The Centre was established by the University, through a TetFund
//                 grant, as a Urology and Nephrology Complex of international
//                 standard that will provide a forum for research and invention,
//                 manpower development and treatment of common Urologic,
//                 Uro-gynaecologic and Renal diseases prevalent in the sub-region
//                 The Centre was established by the University, through a TetFund
//                 grant, as a Urology and Nephrology Complex of international
//                 standard that will provide a forum for research and invention,
//                 manpower development and treatment of common Urologic,
//                 Uro-gynaecologic and Renal diseases prevalent in the sub-region
//                 The Centre was established by the University, through a TetFund
//                 grant, as a Urology and Nephrology Complex of international
//                 standard that will provide a forum for research and invention,
//                 manpower development and treatment of common Urologic,
//                 Uro-gynaecologic and Renal diseases prevalent in the sub-region
//                 The Centre was established by the University, through a TetFund
//                 grant, as a Urology and Nephrology Complex of international
//                 standard that will provide a forum for research and invention,
//                 manpower development and treatment of common Urologic,
//                 Uro-gynaecologic and Renal diseases prevalent in the sub-region
//               </i>
//             </article>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
