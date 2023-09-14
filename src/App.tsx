import { useState, useCallback } from 'react';
import './App.css'
import TextEditorLive from './Edior';
import { GlobalTextEEditor, isActive } from './utils/globa-state';
import IntroductionItem from './component/introduction';
import Logo from './component/logo';
import { TypographyItems } from './utils/data';
import Slider from './component/slider';
// import LiveCodeEditor from './Iframe';



function App() {

	const [onHover,setHover] = useState<boolean>(false);
	const [toggle,setToogle] = useState<boolean>(false);
	const [, setUserCode] = GlobalTextEEditor();
	const [, setActive] = isActive();

	const onSidebarShow = ()=>{
		setHover(true);
	}

	const onSidebarClose = () =>{
		setHover(false);
	}
	


	const onToggle = useCallback((index:number)=>{
			if(index === 0){
				setUserCode(`
      <p class="text-9xl">Font size</p> 
      <p class="text-8xl">Font size</p>
      <p class="text-7xl">Font size</p>
      <p class="text-6xl">Font size</p>
      <p class="text-5xl">Font size</p>
      <p class="text-4xl">Font size</p>
      <p class="text-3xl">Font size</p>
      <p class="text-2xl">Font size</p>
      <p class="text-lg">Font size</p>
      <p class="text-base">Font size</p>
      <p class="text-sm">Font size</p>`);
			}
			if(index === 1){
					
					setUserCode(`
					<button class="bg-red-100">Hello world</button>
					<button class="bg-red-300">Hello world</button>
				`);
						
			}
			setActive(false);
			setToogle(true);
	},[setActive, setUserCode]);
	
	const sidebarList= ['Typography','Button','Container','Box Model','Padding']
  return (
		<div className='w-[90rem] h-screen flex mx-auto'>
			<aside onMouseOver={onSidebarShow} className={onHover === true ? 'cursor-pointer hidden md:block w-1/6 h-full ease-in duration-500 bg-white text-white' : 'cursor-pointer hidden md:block w-[8rem] h-full ease-out duration-500 bg-white text-white'}>
				<div onClick={() => setToogle(false)} className='bg-white mx-auto'>
					<div className='flex justify-center content-center'>
						<Logo />
					</div>
					
					<div className='flex justify-center content-center'>
						<h1 className='text-[#364954] font-semibold leading-4 pb-2 text-xl'>Tailwindcss</h1>
					</div>
				</div>
				<nav className='nav_item'>
					<ul className='list-item'>
						{sidebarList.map((item, index) => (
							<li key={index} onClick={() => onToggle(index)} className='py-4 px-5 my-2 bg-[#DFECF4] text-[#364954] font-semibold text-center'>
								{item}
							</li>
						))}
					</ul>
				</nav>
			</aside>
			<div onMouseOver={onSidebarClose} className='w-full flex flex-col bg-[#DFECF4]'>
				<header className='bg-[#C4A1BC] text-white'>
					<nav className='nav_item'>
						<ul className='flex flex-row gap-3 p-10'>
							{/* <li>Typography</li>
							<li>Button</li>
							<li>Container</li>
							<li>Box Model</li>
							<li>Padding</li> */}
						</ul>
					</nav>
				</header>
				
				{/* tab list */}
				{toggle === true && (
					<Slider />
				)}

				
				{/* editor content */}
				<main className=''>{toggle === true ? <TextEditorLive /> : <IntroductionItem />}</main>
			</div>
		</div>
	);
}


export default App
