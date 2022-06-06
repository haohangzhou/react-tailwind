const Footer = () => {
	return (
		<div className='w-full h-30 flex justify-between p-12'>
			{/* first heading */}
			<h2 className='uppercase'>Collections</h2>
			{/* social media links */}
			<nav className='w-1/4'>
				<ul className='flex justify-between'>
					<li className='uppercase'>Facebook</li>
					<li className='uppercase'>Twitter</li>
					<li className='uppercase'>Instagram</li>
				</ul>
			</nav>
			{/* last heading */}
			<h2 className='uppercase'>Send your inquiry</h2>
		</div>
	);
};

export default Footer;
