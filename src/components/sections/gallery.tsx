import img from '../../assets/category.png';
import guys from '../../assets/guys.png';
import left from '../../assets/left-girl.png';
import right from '../../assets/right-girl.png';

const Gallery = () => {
    return ( 
        <div className="w-full bg-white py-28 justify-center max-lg:pb-[700px] max-sm:pb-0">
            <div className="grid max-xl:px-10 max-sm:p-4 lg:grid-cols-2 max-lg:px-10 max-w-fit max-h-[574px] gap-7 mx-auto">
                <div className="max-w-[552px] grid grid-rows-2 gap-5">
                    <div className="">
                        <img className='object-fit' src={guys} alt="guy" />
                    </div>
                    <div className=" grid grid-cols-2 gap-5">
                        <div className="">
                            <img className='object-fit' src={left} alt="image" />
                        </div>
                        <div className="">
                            <img className='object-fit' src={right} alt="image" />
                        </div>
                    </div>
                </div>
                <div className="max-w-[552px] max-h-[574px] relative">
                    <img className='object-cover' src={img} alt="background image" />
                    <div className="absolute inset-0 z-10 max-h-[574px] opacity-50 bg-black"></div>
                    <div className="absolute z-20 bottom-6 left-5">
                        <a href='#' className='bg-white uppercase hover:bg-gray-200 text-text inline-flex items-center justify-center py-1 px-7'>
                            Category name
                        </a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Gallery;