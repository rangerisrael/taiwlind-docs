import React, { useState } from 'react';

// Utility function to apply Tailwind CSS classes to a string of HTML code
const applyTailwindClasses = (htmlCode: string) => {
	// Define your allowed Tailwind CSS classes
	const allowedClasses = ['text-red-500', 'bg-blue-200', 'font-bold','bg-red'];

	// Use regex to find and replace class attributes in HTML elements
	const regex = /class=["'](.*?)["']/g;
	return htmlCode.replace(regex, (_match, classes) => {
		const classList = classes.split(' ').filter((className: string) => allowedClasses.includes(className));
		return `class="${classList.join(' ')}"`;
	});
};

const LiveCodeEditor: React.FC = () => {
  const [userCode, setUserCode] = useState(`<h1 class='font-bold'>Hello world</h1>`);
  const [result, setResult] = useState<string | null>(null); // Store the result

  const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const code = event.target.value;
    setUserCode(code);
  };

  const handleExecuteClick = () => {
    // Apply Tailwind CSS classes to user's code
    const codeWithTailwindClasses = applyTailwindClasses(userCode);

    // Set the result
    setResult(codeWithTailwindClasses);
  };

  return (
    <div className='grid grid-cols-2 bg-red'>
      <div>
        <textarea rows={10} cols={100} value={userCode} onChange={handleCodeChange} placeholder='Enter your code here'></textarea>
        <br />
        <div className='flex flex-row justify-end w-10/12 mt-2'>
          <button className='rounded-none bg-[#C4A1BC] text-white text-3xl px-5 py-2' onClick={handleExecuteClick}>Execute</button>
        </div>
      </div>
      <div className='bg-[#DFECF4] w-full h-full'>
        {/* Render user's code */}
        {result && <div dangerouslySetInnerHTML={{ __html: result }} />}
      </div>
    </div>
  );
};

export default LiveCodeEditor;



