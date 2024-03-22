

const Banner = () => {
    return (
        <div className="bg-[url('././assets/images/banner.png')] h-[600px] bg-no-repeat bg-center rounded-3xl flex items-center justify-center ">
            <div className="space-y-5 w-3/4">
                <h3 className="text-white text-3xl md:text-5xl font-bold md:leading-[76px] text-center">Discover an exceptional cooking class tailored for you!</h3>
                <p className="text-white text-sm md:text-lg text-center">When you need to feed the family or kids, these are the easy dinner recipes you turn to time and time again. With lots of healthy foods, there’s something for everyone..</p>

                <div className="flex flex-col md:flex-row justify-center gap-5">
                    <button className="banner-btn1 hover:bg-green-600">Explore Now</button>
                    <button className="banner-btn2 hover:text-red-500">Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;