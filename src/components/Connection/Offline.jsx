import React from "react";
import { Detector } from "react-detect-offline";
import Img from "../../assets/images/offline.png";
const CheckConnection = (props) => {
  return (
    <>
      <Detector
        render={({ online }) =>
          online ? (
            props.children
          ) : (
            <div className="text-black">
              <div className="max-w-[800px] w-full h-[80vh] mx-auto text-center flex flex-col justify-center">
                
              <img src={Img} height={100} width={100} alt={""} className="mx-auto"/>
                <div className="flex justify-center items-center">
               
                  <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
                    No Connection !!!
                  </p>
                  
                </div>
                <p className="md:text-2xl text-xl font-bold text-gray-500">
                  Please check your Internet Connection inorder to use PMS Analysis. 
                </p>
                
              </div>
            </div>
          )
        }
      />
    </>
  );
};
export default CheckConnection;
