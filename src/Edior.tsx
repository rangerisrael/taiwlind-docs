import React, { useState } from 'react';
import Editor, { EditorDidMount } from '@monaco-editor/react';
import { GlobalTextEEditor, isActive } from './utils/globa-state';
import Image from './component/Image';
import GifSun from './assets/on-sun.gif';
import GifMoon from './assets/off-moon.gif';
const applyTailwindClasses = (htmlCode: string) => {
	// Define your allowed Tailwind CSS classes
	const allowedClasses = ['text-3xl', 'text-xs', 'text-sm', 'text-base', 'text-lg', 'text-2xl', 'text-4xl', 'text-5xl', 'text-6xl', 'text-7xl', 'text-8xl', 'text-9xl', 'font-thin', 'font-extralight', 'font-light', 'font-normal', 'font-medium', 'font-semibold', 'font-bold', 'font-extrabold', 'font-black', 'bg-red-100', 'bg-red-200', 'bg-red-300', 'bg-red-400', 'bg-red-500', 'bg-red-600', 'bg-red-700', 'bg-red-800', 'bg-red-900', 'bg-blue-100'];

	// Use regex to find and replace class attributes in HTML elements
	const regex = /class=["'](.*?)["']/g;
	return htmlCode.replace(regex, (_match, classes) => {
		const classList = classes.split(' ').filter((className: string) => allowedClasses.includes(className));
		return `class="${classList.join(' ')}"`;
	});
};

const TextEditorLive: React.FC = () => {

const [userCode, setUserCode] = GlobalTextEEditor();
	const [result, setResult] = useState<string | null>(null); // Store the result
	const [active, setActive] = isActive();
	const [theme, setTheme] = useState<'vs-light' | 'vs-dark'>('vs-dark'); // You can switch between 'vs-light' and 'vs-dark'

	const handleCodeChange = (code: string) => {
	
		const codeWithTailwindClasses = applyTailwindClasses(code);

		// S
		setUserCode(codeWithTailwindClasses);
	};

	
  const handleEditorDidMount: EditorDidMount = (editor, monaco) => {
		// Store the editor instance in the ref
		editor.trigger(monaco.KeyCode.Backspace, 'deleteLeft');
	};


	const handleExecuteClick = () => {

		
		// Apply Tailwind CSS classes to user's code
		const codeWithTailwindClasses = applyTailwindClasses(userCode);
		setActive(true);
		// Set the result
		setResult(codeWithTailwindClasses);
	};

	return (
		<>
			<div className={active === true ? 'grid grid-cols-2' : 'grid grid-cols-1'}>
				<div className='relative'>
					<div className='absolute right-0 m-2 text-[#C4A1BC] bg-[#C4A1BC] z-10'>
						<button className=' text-white text-2xl  m-2 rounded' onClick={() => setTheme(theme === 'vs-light' ? 'vs-dark' : 'vs-light')}>
							{theme === 'vs-dark' ? <Image src={GifSun} alt='On' /> : <Image src={GifMoon} alt='Off' />}
						</button>
					</div>
					<Editor
						width='100%'
						height='50vh'
						language='html'
						theme={theme}
						value={userCode}
						onChange={handleCodeChange}
						editorDidMount={handleEditorDidMount}
						options={{
							fontSize: 14,
							wordWrap: 'on', // Enable word wrap
							minimap: {
								enabled: false, // Disable minimap
							},
						}}
					/>
					<div className={active === true ? 'flex flex-row justify-end w-10/12 mt-2 absolute bottom-0 right-0' : 'flex flex-row justify-end w-full mt-2 absolute bottom-0 right-0'}>
						<button className='bg-[#C4A1BC] text-white text-3xl px-5 py-2 m-2 rounded' onClick={handleExecuteClick}>
							Run
						</button>
					</div>
				</div>
				{active === true && (
					<div className='w-full h-auto max-h-full p-y-2 px-5 bg-[#C4A1BC]'>
						{/* Render user's code */}
						{result && <div className='overflow-y-auto max-h-[30rem] ' dangerouslySetInnerHTML={{ __html: result }} />}
					</div>
				)}
			</div>
		</>
	);
};

export default TextEditorLive;


