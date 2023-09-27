import { useEffect, useRef, useState } from "react";
import usFlag from '../../assets/images/usFlag.svg'
import iranFlag from '../../assets/images/iranFlag.svg'

const ChangeLang = () => {
	const [show, setShow] = useState<boolean>(false);
	const listRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		// Event handler to check for clicks outside the List component
		const handleOutsideClick = (event: MouseEvent) => {
			if (listRef.current && !listRef.current.contains(event.target as Node)) {
				// Click occurred outside the List component
				setShow(false);
			}
		};

		// Add event listener when the component mounts
		document.addEventListener("click", handleOutsideClick);

		// Remove event listener when the component unmounts
		return () => {
			document.removeEventListener("click", handleOutsideClick);
		};
	}, []);
    console.log(show)
	return (
		<>
			<div className="flex" >
				<span
					id="states-button"
					data-dropdown-toggle="dropdown-states"
					className=" cursor-pointer h-10 flex-shrink-0 z-10 inline-flex items-center py-1 px-1 text-sm font-medium text-center focus:outline-none "
					
                    ref={listRef} onClick={()=>setShow(true)}
				>
					<img src={iranFlag} alt="" className="h-full rounded-full" />
					
					
				</span>
				<div id="dropdown-states" className={`z-10 absolute top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${show ? 'flex' : 'hidden'}`}>
					<ul className="py-2 text-sm text-gray-700 dark:text-gray-200 w-full" aria-labelledby="states-button">
						<li>
							<span
								className="cursor-pointer inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
							>
								<div className="inline-flex items-center">
                                    <img src={usFlag} alt="" className="h-full rounded-full" />
									english
								</div>
							</span>
						</li>
						<li>
							<span
								
								className="cursor-pointer inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
							>
								<div className="inline-flex items-center">
                                <img src={iranFlag} alt="" className="h-full rounded-full" />
									فارسی
								</div>
							</span>
						</li>
						
						
					</ul>
				</div>
			</div>
		</>
	);
};

export default ChangeLang;
