import { FashionProps } from "../interfaces/fashion.interface";

const FashionElt = ({props}: {props: FashionProps}) => {
    return ( 
        <li className='max-w-[268px]'>
            <img className="w-full h-96 mb-8" src={props.image} alt="background image" />
            <span className='text-sm font-light text-text mb-1'>{props.description}</span>
            <h4 className='text-sm text-text font-semibold'>{props.name}</h4>
            <div className="space-x-6">
                <span className='font-light text-text mb-1 relative'>
                    {props.oldPrice}
                    <span className='absolute inset-x-0 h-0.5 bottom-1/2 translate-y-1/2 z-10 bg-text'></span>
                </span>
                <span className='font-light text-red-500 mb-1'>{props.newPrice}</span>
            </div>
        </li>
     );
}
 
export default FashionElt;