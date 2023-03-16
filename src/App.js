import "./App.css";
import "./css/font.css";
import logo from "./images/m1.png";
import background from "./images/bg.jpg";
function App() {
  return (
    <div className="w-full bg-[#042511fb]">
      <div className="w-full px-2 md:px-10 py-4">
        <div
          className="w-full h-[90vh] md:h-[95vh]  flex flex-col justify-center items-center   shadow-black shadow-xl rounded-3xl border-[1px] border-green-900"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full h-[100%] bg-[#00000066] rounded-3xl ">
            <div className="text-[#ffffffdc] w-full flex justify-center items-center text-center pt-20 text-[40px] tracking-widest font-extrabold ">
              MYRITIE'S GARDEN
            </div>
            <div className="flex w-full flex-col px-24 items-center justify-center  mt-10 text-white">
              <div className="text-center fontApercu text-[40px] font-extrabold">
                CURRENTLY <br></br>OUT OF SERVICE
              </div>
              <div className="mt-2 flex items-center justify-center">
                <div className="w-10 h-[2px] bg-white rounded-full"></div>
                <div className="mx-2 w-20 flex justify-center items-center">
                  <img src={logo} className="" />
                </div>
                <div className="w-10 h-[2px] bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
