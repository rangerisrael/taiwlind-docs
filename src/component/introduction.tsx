import React from 'react'
import Logo from './logo';

const IntroductionItem = () => {
  return (
		<div className='w-6/12 mx-auto h-screen'>
			<div className='flex flex-col justify-center content-center'>
				<h1 className='text-3xl font-semibold'>Documentation</h1>
				<Logo/>
				<p className='text-2xl leading-8'>Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.</p>
			</div>
		</div>
	);
}

export default IntroductionItem
