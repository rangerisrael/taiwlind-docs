import React from 'react';
import { MDXProvider } from '@mdx-js/react';

const Markdown = ({ children }: { children: React.ReactNode }) => {
	// Define your custom components here if needed
	const components = {
		// Example: You can define a custom heading component
		h1: (props: any) => <h1 style={{ color: 'blue' }} {...props} />,
		// Add other custom components as needed
	};

	return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default Markdown;
