import React from 'react';
import Footer from './Footer';
import Heading from './Heading';
import Navigation from './Navigation';
import Product from './Product';

const Layout = ({ children }) => {
	return (
		<div>
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
