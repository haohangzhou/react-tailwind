import React from 'react';
import Footer from '../components/footer/Footer';
import Heading from '../components/heading/Heading';
import Product from '../components/Product';

const Home = () => {
	return (
		<div className='flex flex-col h-screen w-screen'>
			<div className='flex flex-row h-full'>
				<Heading />
				<Product />
			</div>
			<Footer />
		</div>
	);
};

export default Home;
