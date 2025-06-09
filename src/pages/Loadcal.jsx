import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Nav from "../components/Nav";
import "../App.css";
import downloadBut from "../assets/images/Download.svg";

export default function Loadcal() {
  const sectionRef = useRef();

  const handleDownloadPdf = async () => {
    const section = sectionRef.current;

    const canvas = await html2canvas(section, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("download.pdf");
  };

  const [loadResult, setLoadResult] = React.useState(false);

  const [nbulb, SetNbulb] = React.useState(0);
  const TotalNbulb = nbulb * 60;
  const [tbulb, SetTbulb] = React.useState(0);
  const TotalTbulb = tbulb * 18;
  const [lbulb, SetLbulb] = React.useState(0);
  const TotalLbulb = lbulb * 15;
  const [fan, SetFan] = React.useState(0);
  const TotalFan = fan * 70;
  const [musicSystem, SetMusicSystem] = React.useState(0);
  const TotalMusicSystem = musicSystem * 320;
  const [tvSmall, SetTvSmall] = React.useState(0);
  const TotalsmallTv = tvSmall * 150;
  const [tvBig, SetTvBig] = React.useState(0);
  const TotalBiglTv = tvBig * 200;
  const [Dcomp, SetDcomp] = React.useState(0);
  const TotalDcomp = Dcomp * 200;
  const [laptop, SetLaptop] = React.useState(0);
  const TotalLaptop = laptop * 100;

  const [ref165, SetRef165] = React.useState(0);
  const TotalRef165 = ref165 * 150;
  const [ref250, SetRef250] = React.useState(0);
  const TotalRef250 = ref250 * 210;
  const [ref350, SetRef350] = React.useState(0);
  const TotalRef350 = ref350 * 320;
  const [ref450, SetRef450] = React.useState(0);
  const TotalRef450 = ref450 * 460;
  const [toaster, SetToaster] = React.useState(0);
  const TotalToaster = toaster * 800;
  const [washingMach, SetWashingMach] = React.useState(0);
  const TotalWashingMach = washingMach * 1000;
  const [gamingCons, SetGamingCons] = React.useState(0);
  const TotalGamingcons = gamingCons * 200;
  const [microwave, SetMicrowave] = React.useState(0);
  const TotalMicrowave = microwave * 1400;

  const TotalLoad =
    TotalNbulb +
    TotalLbulb +
    TotalTbulb +
    TotalFan +
    TotalMusicSystem +
    TotalsmallTv +
    TotalBiglTv +
    TotalDcomp +
    TotalLaptop +
    TotalRef165 +
    TotalRef250 +
    TotalRef350 +
    TotalRef450 +
    TotalToaster +
    TotalWashingMach +
    TotalGamingcons +
    TotalMicrowave;

  let InverterRating;

  let solaPannelcap;

  let SolarPannelQ;

  let batteryCap;

  let batteryQuant;

  let chargeCont;

  if (TotalLoad < 400) {
    InverterRating = "800 VA";
    solaPannelcap = "400 (watt)";
    SolarPannelQ = "2";
    batteryCap = "167 Ah";
    batteryQuant = "1";
    chargeCont = "42A";
  } else if (TotalLoad <= 700) {
    InverterRating = "1500 VA";
    solaPannelcap = "700 (watt)";
    SolarPannelQ = "3";
    batteryCap = "292 Ah";
    batteryQuant = "2";
    chargeCont = "73A";
  } else if (TotalLoad <= 1200) {
    InverterRating = "2500 VA";
    solaPannelcap = "1200 (watt)";
    SolarPannelQ = "4";
    batteryCap = "500 Ah";
    batteryQuant = "3";
    chargeCont = "125A";
  } else if (TotalLoad <= 2000) {
    InverterRating = "3500 VA";
    solaPannelcap = "2000 (watt)";
    SolarPannelQ = "7";
    batteryCap = "834 Ah";
    batteryQuant = "5";
    chargeCont = "208A";
  } else if (TotalLoad <= 2800) {
    InverterRating = "5000 VA";
    solaPannelcap = "2800 (watt)";
    SolarPannelQ = "10";
    batteryCap = "1067 Ah";
    batteryQuant = "6";
    chargeCont = "292A";
  } else if (TotalLoad <= 3900) {
    InverterRating = "7500 VA";
    solaPannelcap = "3900 (watt)";
    SolarPannelQ = "13";
    batteryCap = "1625 Ah";
    batteryQuant = "9";
    chargeCont = "406A";
  } else if (TotalLoad <= 5000) {
    InverterRating = "10000 VA";
    solaPannelcap = "5000 (watt)";
    SolarPannelQ = "17";
    batteryCap = "2083 Ah";
    batteryQuant = "11";
    chargeCont = "521A";
  } else if (TotalLoad <= 7500) {
    InverterRating = "15000 VA";
    solaPannelcap = "7500 (watt)";
    SolarPannelQ = "25";
    batteryCap = "3125 Ah";
    batteryQuant = "16";
    chargeCont = "781A";
  } else if (TotalLoad <= 9000) {
    InverterRating = "20000 VA";
    solaPannelcap = "9000 (watt)";
    SolarPannelQ = "30";
    batteryCap = "3750 Ah";
    batteryQuant = "19";
    chargeCont = "938A";
  }

  return (
    <div>
      <div className="loadcal relative">
        {loadResult && (
          <div className="overlay h-[100%] w-[100%] bg-slate-500/60 fixed top-0 bottom-0 left-0 right-0"></div>
        )}
        <div>
          <div className="flexable ">
            <h1 className="font-bold text-lg">APPLIANCE</h1>
            <h1 className="font-bold text-lg"> RATING</h1>
            <h1 className="font-bold text-lg">Quantity</h1>
            <h1 className="font-bold text-lg">Load</h1>
          </div>
          <div className="flexable">
            <h2>Normal Bulb</h2>
            <h2>1 unit(60 watt)</h2>
            <h2>{nbulb}</h2>
            <h2>{TotalNbulb}</h2>
            <div className="flex gap-5 thebut">
              <button
                onClick={() => SetNbulb(nbulb - 1)}
                className="bg-black text-white rounded-lg "
              >
                -
              </button>
              <button
                onClick={() => SetNbulb(nbulb + 1)}
                className="bg-red-500 text-white rounded-lg"
              >
                +
              </button>
            </div>
          </div>
          <div className="flexable">
            <h2>Tube Bulb</h2>
            <h2>1 unit(18 watt)</h2>
            <h2>{tbulb}</h2>
            <h2>{TotalTbulb}</h2>
            <div className="flex gap-5 thebut">
              <button
                onClick={() => SetTbulb(tbulb - 1)}
                className="bg-black text-white rounded-lg "
              >
                -
              </button>
              <button
                onClick={() => SetTbulb(tbulb + 1)}
                className="bg-red-500 text-white rounded-lg"
              >
                +
              </button>
            </div>
          </div>
          <div className="flexable">
            <h2>Led Bulb</h2>
            <h2>1 unit(15 watt)</h2>
            <h2>{lbulb}</h2>
            <h2>{TotalLbulb}</h2>
            <div className="flex gap-5 thebut">
              <button
                onClick={() => SetLbulb(lbulb - 1)}
                className="bg-black text-white rounded-lg "
              >
                -
              </button>
              <button
                onClick={() => SetLbulb(lbulb + 1)}
                className="bg-red-500 text-white rounded-lg"
              >
                +
              </button>
            </div>
          </div>
          <div className="flexable">
            <h2>Fan</h2>
            <h2>1 unit(70 watt)</h2>
            <h2>{fan}</h2>
            <h2>{TotalFan}</h2>
            <div className="flex gap-5 thebut">
              <button
                onClick={() => SetFan(fan - 1)}
                className="bg-black text-white rounded-lg "
              >
                -
              </button>
              <button
                onClick={() => SetFan(fan + 1)}
                className="bg-red-500 text-white rounded-lg"
              >
                +
              </button>
            </div>
          </div>
          <div className="flexable">
            <h2>Music System</h2>
            <h2>1 unit(320 watt)</h2>
            <h2>{musicSystem}</h2>
            <h2>{TotalMusicSystem}</h2>
            <div className="flex gap-5 thebut">
              <button
                onClick={() => SetMusicSystem(musicSystem - 1)}
                className="bg-black text-white rounded-lg "
              >
                -
              </button>
              <button
                onClick={() => SetMusicSystem(musicSystem + 1)}
                className="bg-red-500 text-white rounded-lg"
              >
                +
              </button>
            </div>
          </div>
          <div className="flexable">
            <h2>Tv {"<"} 42" </h2>
            <h2>1 unit(150 watt)</h2>
            <h2>{tvSmall}</h2>
            <h2>{TotalsmallTv}</h2>
            <div className="flex gap-5 thebut">
              <button
                onClick={() => SetTvSmall(tvSmall - 1)}
                className="bg-black text-white rounded-lg "
              >
                -
              </button>
              <button
                onClick={() => SetTvSmall(tvSmall + 1)}
                className="bg-red-500 text-white rounded-lg"
              >
                +
              </button>
            </div>
          </div>
          <div className="flexable">
            <h2>Tv {">"} 42"</h2>
            <h2>1 unit(200 watt)</h2>
            <h2>{tvBig}</h2>
            <h2>{TotalBiglTv}</h2>
            <div className="flex gap-5 thebut">
              <button
                onClick={() => SetTvBig(tvBig - 1)}
                className="bg-black text-white rounded-lg "
              >
                -
              </button>
              <button
                onClick={() => SetTvBig(tvBig + 1)}
                className="bg-red-500 text-white rounded-lg"
              >
                +
              </button>
            </div>
          </div>
          <div className="flexable">
            <h2>Desktop Computer</h2>
            <h2>1 unit(200 watt)</h2>
            <h2>{Dcomp}</h2>
            <h2>{TotalDcomp}</h2>
            <div className="flex gap-5 thebut">
              <button
                onClick={() => SetDcomp(Dcomp - 1)}
                className="bg-black text-white rounded-lg "
              >
                -
              </button>
              <button
                onClick={() => SetDcomp(Dcomp + 1)}
                className="bg-red-500 text-white rounded-lg"
              >
                +
              </button>
            </div>
          </div>
          <div className="flexable">
            <h2>Laptop</h2>
            <h2>1 unit(100 watt)</h2>
            <h2>{laptop}</h2>
            <h2>{TotalLaptop}</h2>
            <div className="flex gap-5 thebut">
              <button
                onClick={() => SetLaptop(laptop - 1)}
                className="bg-black text-white rounded-lg "
              >
                -
              </button>
              <button
                onClick={() => SetLaptop(laptop + 1)}
                className="bg-red-500 text-white rounded-lg"
              >
                +
              </button>
            </div>
          </div>
          <div className="flexable">
            <h2>Ref(165ltr - 250ltr)</h2>
            <h2>1 unit(150 watt)</h2>
            <h2>{ref165}</h2>
            <h2>{TotalRef165}</h2>
            <div className="flex gap-5 thebut">
              <button
                onClick={() => SetRef165(ref165 - 1)}
                className="bg-black text-white rounded-lg "
              >
                -
              </button>
              <button
                onClick={() => SetRef165(ref165 + 1)}
                className="bg-red-500 text-white rounded-lg"
              >
                +
              </button>
            </div>
          </div>
          <div className="flexable">
            <h2>Ref(250ltr - 350ltr)</h2>
            <h2>1 unit(210 watt)</h2>
            <h2>{ref250}</h2>
            <h2>{TotalRef250}</h2>
            <div className="flex gap-5 thebut">
              <button
                onClick={() => SetRef250(ref250 - 1)}
                className="bg-black text-white rounded-lg "
              >
                -
              </button>
              <button
                onClick={() => SetRef250(ref250 + 1)}
                className="bg-red-500 text-white rounded-lg"
              >
                +
              </button>
            </div>
          </div>
          <div className="flexable">
            <h2>Ref(350ltr - 450ltr)</h2>
            <h2>1 unit(320 watt)</h2>
            <h2>{ref350}</h2>
            <h2>{TotalRef350}</h2>
            <div className="flex gap-5 thebut">
              <button
                onClick={() => SetRef350(ref350 - 1)}
                className="bg-black text-white rounded-lg "
              >
                -
              </button>
              <button
                onClick={() => SetRef350(ref350 + 1)}
                className="bg-red-500 text-white rounded-lg"
              >
                +
              </button>
            </div>
          </div>
          <div className="flexable">
            <h2>Ref({">"}) 450ltr</h2>
            <h2>1 unit(460 watt)</h2>
            <h2>{ref450}</h2>
            <h2>{TotalRef450}</h2>
            <div className="flex gap-5 thebut">
              <button
                onClick={() => SetRef450(ref450 - 1)}
                className="bg-black text-white rounded-lg "
              >
                -
              </button>
              <button
                onClick={() => SetRef450(ref450 + 1)}
                className="bg-red-500 text-white rounded-lg"
              >
                +
              </button>
            </div>
          </div>
          <div className="flexable">
            <h2>Toaster</h2>
            <h2>1 unit(800 watt)</h2>
            <h2>{toaster}</h2>
            <h2>{TotalToaster}</h2>
            <div className="flex gap-5 thebut">
              <button
                onClick={() => SetToaster(toaster - 1)}
                className="bg-black text-white rounded-lg "
              >
                -
              </button>
              <button
                onClick={() => SetToaster(toaster + 1)}
                className="bg-red-500 text-white rounded-lg"
              >
                +
              </button>
            </div>
          </div>
          <div className="flexable">
            <h2>Washing Machine</h2>
            <h2>1 unit(1000 watt)</h2>
            <h2>{washingMach}</h2>
            <h2>{TotalWashingMach}</h2>
            <div className="flex gap-5 thebut">
              <button
                onClick={() => SetWashingMach(washingMach - 1)}
                className="bg-black text-white rounded-lg "
              >
                -
              </button>
              <button
                onClick={() => SetWashingMach(washingMach + 1)}
                className="bg-red-500 text-white rounded-lg"
              >
                +
              </button>
            </div>
          </div>
          <div className="flexable">
            <h2>Gaming Console</h2>
            <h2>1 unit(200 watt)</h2>
            <h2>{gamingCons}</h2>
            <h2>{TotalGamingcons}</h2>
            <div className="flex gap-5 thebut ">
              <button
                onClick={() => SetGamingCons(gamingCons - 1)}
                className="bg-black text-white rounded-lg "
              >
                -
              </button>
              <button
                onClick={() => SetGamingCons(gamingCons + 1)}
                className="bg-red-500 text-white rounded-lg"
              >
                +
              </button>
            </div>
          </div>
          <div className="flexable">
            <h2>Microwave</h2>
            <h2>1 unit(1400 watt)</h2>
            <h2>{microwave}</h2>
            <h2>{TotalMicrowave}</h2>
            <div className="flex gap-5 thebut">
              <button
                onClick={() => SetMicrowave(microwave - 1)}
                className="bg-black text-white rounded-lg"
              >
                -
              </button>
              <button
                onClick={() => SetMicrowave(microwave + 1)}
                className="bg-red-500 text-white rounded-lg"
              >
                +
              </button>
            </div>
          </div>

          {loadResult && (
            <div className="loadResult absolute top-[20vh] left-[30%] bg-white">
              <button
                onClick={() => setLoadResult(!loadResult)}
                className="rounded-3xl p-2 text-white bg-red-500"
              >
                X
              </button>
              <div className="downloadSec" ref={sectionRef}>
                <div className="loadCont">
                  <h1 className="text-sm font-bold mb-4">Total Load</h1>
                  <p className="text-white  bg-black h-7 w-20 my-0 mx-auto">
                    {TotalLoad} watt
                  </p>
                </div>
                <div className="loadCont">
                  <h1 className="text-sm font-bold mb-4">
                    Recommended Inverter rating
                  </h1>
                  <p className="text-white bg-black h-7 w-20 my-0 mx-auto">
                    {InverterRating}
                  </p>
                </div>
                <div className="loadCont">
                  <h1 className="text-sm font-bold mb-4">
                    {" "}
                    Required Solar Pannel Capacity
                  </h1>
                  <p className="text-white bg-black h-7 w-20 my-0 mx-auto">
                    {solaPannelcap}
                  </p>
                </div>
                <div className="loadCont">
                  <h1 className="text-sm font-bold mb-4">
                    Qauntity of Solar Pannel (300 watt Each)
                  </h1>
                  <p className="text-white bg-black h-7 w-20 my-0 mx-auto">
                    {SolarPannelQ}
                  </p>
                </div>
                <div className="loadCont">
                  <h1 className="text-sm font-bold mb-4">Charge Controller</h1>
                  <p className="text-white bg-black h-7 w-20 my-0 mx-auto">
                    {chargeCont}
                  </p>
                </div>
                <div className="text-center">
                  <h1 className="text-sm font-bold mb-5">Battery</h1>
                  <div className="flex justify-between gap-2">
                    <div className="BatteryCont p-[2vw]">
                      <h3 className="font-bold batteryT">
                        {" "}
                        Required Capacity( Ah @ 24V)
                      </h3>
                      <p className="mt-3 text-bold">{batteryCap}</p>
                    </div>
                    <div className="BatteryCont">
                      <h3 className="font-bold batteryT p-[2vw]">
                        {" "}
                        Quantity (200 Ah Each)
                      </h3>
                      <p className="text-red-500 mt-3 text-bold">
                        {batteryQuant}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="downloadButt">
                <button
                  onClick={handleDownloadPdf}
                  className=" bg-red-500 p-2 rounded-xl "
                >
                  Download Result{" "}
                  <img className="w-5 mx-auto " src={downloadBut} alt="" />{" "}
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="mx-auto w-[25%]">
          <button
            className="p-3 text-white bg-red-500"
            onClick={() => setLoadResult(!loadResult)}
          >
            Show Result
          </button>
        </div>
      </div>
    </div>
  );
}
