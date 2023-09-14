import { TypographyItems } from '../utils/data';
import useSlider from './hooks/useSlider';


const Slider = () => {
	const { slide, onPrev, onNext, start, end, prev, next, nextForbidden, prevForbidden, onSelectedIndex,active } = useSlider(TypographyItems);

	console.log(start,end,'start and end')


	const clsxPrev = prevForbidden === true ? 'hover:cursor-not-allowed' : 'hover:cursor-pointer';
	const clsxNext = nextForbidden === true ? 'hover:cursor-not-allowed' : 'hover:cursor-pointer';

	return (
		<div className='p-5'>
			<ul className='flex gap-4 justify-center content-center'>
				<li onClick={onPrev} className={clsxPrev}>
					◀
				</li>
				{slide.slice(start as number, end as number).map((item) => (
					<li onClick={() => onSelectedIndex(item.id + 1)} key={item.id} className={`text-[#364954] cursor-pointer px-5  rounded font-semibold  transition ease-in duration-5000 ${item.id === active ? 'border-b-2 border-indigo-500' : ''}`}>
						{item.style}
					</li>
				))}
				<li onClick={onNext} className={`${clsxNext}`}>
					▶
				</li>
			</ul>
		</div>
	);
};

export default Slider
