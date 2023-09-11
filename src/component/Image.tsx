import React from 'react'


const Image: React.FC<React.HTMLProps<HTMLImageElement>> = (props) => {
	return <img {...props} />;
};


export default Image