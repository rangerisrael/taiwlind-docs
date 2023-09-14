import { ComponentProps } from '../component/types/slide';

export const TypographyItems: ComponentProps[] = [
	{ style: 'Font-Size', id: 1 },
	{ style: 'Font-family', id: 2 },
	{ style: 'Font-smooting', id: 3 },
	{ style: 'Font-style', id: 4 },
	{ style: 'Font-weight', id: 5 },
	{ style: 'Font-variant', id: 6 },
	{ style: 'Letter-spacing', id: 7 },
	{ style: 'Line-clamp', id: 8 },
	{ style: 'Line-height', id: 9 },
	{ style: 'Text-align', id: 10 },
	{ style: 'Text-color', id: 11 },
	{ style: 'Text-decoration', id: 12 },
	{ style: 'Text-decoration-style', id: 13 },
	{ style: 'Text-decoration-thickness', id: 14 },
	{ style: 'Text-underline-offset', id: 15 },
	{ style: 'Text-transaform', id: 16 },
	{ style: 'Text-overflow', id: 17 },
	{ style: 'Text-indent', id: 18 },
	{ style: 'Vertical-align', id: 19 },
	{ style: 'Whitespace', id: 20 },
	{ style: 'Word-break', id: 21 },
	{ style: 'Hyphens', id: 22 },
	{ style: 'Contents', id: 23 },
];

	// prettier-ignore
	// ts-ignore
	// eslint-disable-next-line
	export const allowedClasses = [
	'text-3xl',
	'text-xs',
	'text-sm', 
	'text-base', 
	'text-lg', 
	'text-2xl', 
	'text-4xl', 
	'text-5xl', 
	'text-6xl', 
	'text-7xl', 
	'text-8xl', 
	'text-9xl', 
	'font-sans', 
	'font-serif', 
	'font-mono', 
	'antialiased',
	'subpixel-antialiased',
	'italic',
	'not-italic',
	'font-thin', 
	'font-extralight', 
	'font-light', 
	'font-normal', 
	'font-medium', 
	'font-semibold', 
	'font-bold', 
	'font-extrabold', 
	'font-black', 
	'bg-red-100', 
	'bg-red-200', 
	'bg-red-300', 
	'bg-red-400', 
	'bg-red-500', 
	'bg-red-600', 
	'bg-red-700', 
	'bg-red-800', 
	'bg-red-900', 
	'bg-blue-100'];




	 export const codeMappings: { [key: number]: string } = {
			1: `
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
      <p class="text-sm">Font size</p>`,
			2: `
      <p class="font-sans">The quick brown fox ...</p>
      <p class="font-serif">The quick brown fox ...</p>
      <p class="font-mono">The quick brown fox ...</p>`,
			3: `
      <p class="subpixel-antialiased">The quick brown fox ...</p>
      <p class="antialiased">The quick brown fox ...</p>`,
			4: `
      <p class="italic ...">The quick brown fox ...</p>
      <p class="not-italic ...">The quick brown fox ...</p>`,
			5: `
      <p class="font-thin ...">The quick brown fox ...</p>
      <p class="font-extralight ...">The quick brown fox ...</p>
      <p class="font-light ...">The quick brown fox ...</p>
      <p class="font-normal ...">The quick brown fox ...</p>
      <p class="font-medium ...">The quick brown fox ...</p>
      <p class="font-semibold ...">The quick brown fox ...</p>
      <p class="font-bold ...">The quick brown fox ...</p>
      <p class="font-extrabold ...">The quick brown fox ...</p>
      <p class="font-black ...">The quick brown fox ...</p>`,
		};