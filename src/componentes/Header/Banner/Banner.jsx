

const Banner = () => {

    const backgroundImageUrl = 'https://i.postimg.cc/VsZ6FVcM/Rectangle-4281-2.png';

    const bannerStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center', 
        backgroundRepeat: 'no-repeat', 
        position: 'relative', // পজিশন রিলেটিভ সেট করতে

    };

    const overlayStyle = {
        position: 'absolute', // পজিশন অ্যাবসোল্যুট সেট করতে
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // ট্রান্সপ্যারেন্ট ব্যাকগ্রাউন্ড কালার
    };


    return (
        <div className="py-10 mb-16" style={bannerStyle}>
             <div style={overlayStyle}></div>
            <h1 className="text-center md:text-3xl lg:text-5xl mt-16 text-[#0B0B0B] font-bold">I Grow By Helping People In Need</h1>

           <div className="flex justify-center items-center my-10 relative">
           <input type="text" placeholder="Search" className="input w-full max-w-xs text-black" />

           <button className="px-3 py-3 bg-[#FF444A] absolute left-[300px] md:left-[472px] lg:left-[790px] rounded-r-lg text-white font-semibold">Search</button>
           </div>
           
        </div>
    );
};

export default Banner;