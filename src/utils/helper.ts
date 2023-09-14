import { allowedClasses } from "./data";

 const applyTailwindClasses = (htmlCode: string) => {
	// Define your allowed Tailwind CSS classes

	// Use regex to find and replace class attributes in HTML elements
	const regex = /class=["'](.*?)["']/g;
	return htmlCode.replace(regex, (_match, classes) => {
		const classList = classes.split(' ').filter((className: string) => allowedClasses.includes(className));
		return `class="${classList.join(' ')}"`;
	});
};


export { applyTailwindClasses}