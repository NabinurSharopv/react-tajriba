import img1 from "../img/img1.png"
import img2 from "../img/img2.png"
import img3 from "../img/img3.png"
import img4 from "../img/img4.png"

const Home = () => {
  return (
    <>
    <div className="max-w-[1250px] h-[1px] bg-[#46A35880] m-auto mt-4"></div>
    <div className="max-w-[1250px] flex items-center mt-9 h-[450px] bg-[#F5F5F580] m-auto justify-around flex-wrap">
     <div>
      <p className="font-medium text-sm leading-4 tracking-[10%] uppercase">Welcome to GreenShop</p>
      <h1 className="max-w-[560px] font-black text-[70px] leading-[70px] tracking-[0%] uppercase">Let’s Make a<span className='text-yellow-700'>Better Planet</span></h1>
      <p className=" max-w-[557px]  font-normal text-sm text-[#727272]">We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
    <button className="mt-10 w-[140px] h-10 rounded-md bg-[#46A358] text-white">SHOP NOW</button>
     </div>
     <div className="flex items-center justify-center">
        <img className="mt-69 ml-9" src={img1} alt="" />
       <img className="ml-[-190px]" src={img2} alt="" />
     </div>
    </div>

    <div className="flex items-center justify-center gap-5">
       <div>
        <div className="w-[310px] h-[719px] bg-[#FBFBFB]">
         <h1 className="font-bold text-lg leading-4 tracking-[0%] text-[#3D3D3D] p-3 ml-4">Categories</h1>
         <div className="flex items-center justify-around">
          <p className=" w-[91px] h-[360px]  text-[15px] leading-10 tracking-[0%] text-[#3D3D3D]">HousePlants
           PotterPlants SeedsSmall Plants BigPlants Succulents Trerrariums Gardening Accessories
           </p>
           <p className="w-[28px] h-[360px]  text-[15px] leading-10 tracking-[0%] text-right">(33)(12)(65)(39)(23)(17)(19)(13)(18)</p>
          </div>
         <h1 className="font-bold text-lg leading-4 tracking-[0%] text-[#3D3D3D] p-3 ml-4 mt-4">Price Range</h1>
         <div className="flex items-center ml-12">
            <div className="w-[15px] h-[15px] bg-[#46A358] rounded-2xl"></div>
            <div className="w-[160px] h-[3px] bg-[#46A358]"></div>
            <div className="w-[15px] h-[15px] bg-[#46A358] rounded-2xl"></div>
            <div className="w-[19px] h-[3px] bg-[#46A35833"></div>
         </div>
         <p className="font-normal text-[15px] leading-4 tracking-[0%] text-[#3D3D3D] ml-12 mt-4">Price: $39 - $1230</p>
         <button className="w-[90px] h-[35px] rounded-md bg-[#46A358] text-white ml-12 mt-3">Filter</button>
         <h1 className="font-bold text-lg leading-4 tracking-[0%] text-[#3D3D3D] p-3 ml-4 mt-4">Size</h1>
   <div className="flex items-center justify-around">
          <p className=" w-[91px] h-[360px]  text-[15px] leading-10 tracking-[0%] text-[#3D3D3D]">
           Small Medium Large
           </p>
           <p className="w-[28px] h-[360px]  text-[15px] leading-10 tracking-[0%] text-right">(119)(86)(78)</p>
          </div>
        </div>
        <div className="w-[310px] h-[470px] bg-blue-100 ">
<img className="m-auto" src={img3} alt="" />
<h1 className="font-bold text-[23px] leading-4 tracking-[0%] text-center text-[#3D3D3D] mt-4">UP TO 75% OFF</h1>
<img className="w-190 h-90" src={img4} alt="" />
        </div>
       </div>

<div>

</div>

    </div>
    </>
  )
}

export default Home