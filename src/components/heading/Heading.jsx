import React from 'react';
import Navigation from '../navigation/Navigation';
import sofa from '../../assets/single_sofa1.jpg';
import lamp from '../../assets/lamp.jpg';
const Heading = () => {
	return (
		<>
			{/* banner left */}
			<div className='h-full w-1/2 relative'>
				<Navigation />
				{/* left container */}

				{/* heading grid container */}
				<div className='grid grid-cols-8 grid-rows-8 w-full h-1/2 self-center mt-20'>
					<h1 className='col-start-2 col-span-1 row-start-1 row-span-1 text-9xl text-gray-300'>
						01
					</h1>
					<h1 className='col-start-2 col-end-6 row-start-2 row-span-1 text-4xl font-bold'>
						A beautiful minimalist floor lamp
					</h1>
					<h2 className='uppercase col-start-2 col-span-full row-start-3 '>
						Shop now
					</h2>
				</div>
				<img
					className='absolute bottom-0 right-0 h-[250px] w-[250px] object-cover'
					src={sofa}
					alt='sofa'
				/>
			</div>
		</>
	);
};

export default Heading;
