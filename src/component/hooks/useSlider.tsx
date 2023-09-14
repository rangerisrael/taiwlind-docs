import  { useCallback, useState } from 'react'
import { ComponentProps } from '../types/slide';



const useSlider = (data: ComponentProps[]) => {
	const [slide, setSlide] = useState<ComponentProps[]>(data);
	const [{ start, end }, setStartEnd] = useState<{ start: number; end: number }>({ start: 0, end: 5 });
	const [{ prev, next }, setPage] = useState<{ prev: number; next: number }>({ prev: 0, next: 5 });
	const [{ nextForbidden, prevForbidden }, setNotAllowed] = useState<{ nextForbidden: boolean; prevForbidden: boolean }>({ nextForbidden: false, prevForbidden: true });
	const [active, setActive] = useState<number>(1);
	// previous slide tracker
	const onPrev = useCallback(() => {
		if (start > 0 && end > 5) {
			setStartEnd((prev) => ({ start: prev.start - 5, end: start }));
		} else {
			setNotAllowed((prev) => ({ ...prev, prevForbidden: true }));
		}
	}, [end, start]);

	// next slide tracker
	const onNext = useCallback(() => {
		if (end <= data.length) {
			setStartEnd((prev) => ({ start: end, end: prev.end + 5 }));
			setNotAllowed((prev) => ({ ...prev, prevForbidden: false }));
		} else {
			setNotAllowed((prev) => ({ ...prev, nextForbidden: true }));
		}
	}, [end, data.length]);

	const onSelectedIndex = useCallback(
		(index: number) => {
			const getIndex = data.findIndex((item) => item.id === index);
			setActive(getIndex);
		},
		[data],
	);

	return {
		slide,
		setSlide,
		setPage,
		onPrev,
		onNext,
		start,
		end,
		setStartEnd,
		prev,
		next,
		nextForbidden,
		prevForbidden,
		onSelectedIndex,
		active,
	};
};

export default useSlider
