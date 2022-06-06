import React from 'react';
import lamp from '../assets/lamp.jpg';
const Product = () => {
	return (
		<div className='w-1/2 h-full relative'>
			<div className='h-full'>
				{/* description */}
				<p className='absolute top-1/3 p-3 w-20 text-center left-0 -rotate-90 text-white border-b-2	'>
					White
				</p>
				{/* image */}
				<img
					className='h-full object-cover object-center'
					src={lamp}
					alt='lamp'
				/>
			</div>
			<div className='h-[250px] w-[250px] absolute bottom-0 left-0 bg-neutral-800 p-6'>
				<h4 className='text-white'>Minimal Charcoal Chair</h4>
				<h4 className={`mt-20 text-white text-6xl`}>02</h4>
			</div>
		</div>
	);
};

export default Product;
