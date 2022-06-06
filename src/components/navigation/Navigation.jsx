import React from 'react';
import Logo from '../../assets/Logo.svg';
const Navigation = () => {
	return (
		<nav className='flex justify-around items-center h-20 w-full px-8 py-4'>
			<ul className='flex w-full justify-between'>
				<li>
					<img src={Logo} alt='logo' className='h-8 w-8' />
				</li>
				<li>
					<a href='#'>Featured in the Store</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
