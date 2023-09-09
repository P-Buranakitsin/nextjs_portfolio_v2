'use client'

import { useRouter } from "next/navigation";

interface IButtonProps {
	text: string
	page: string
}

const Button = ({ text, page }: IButtonProps) => {
	const router = useRouter();

	return (
		<button onClick={() => {
			router.push(page)
		}} type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-indigo-100 text-indigo-800 border border-transparent font-semibold  hover:text-white hover:bg-indigo-300 focus:outline-none focus:ring-2 ring-offset-white focus:ring-indigo-500 focus:ring-offset-2 transition-all text-lg dark:focus:ring-offset-gray-800">
			{text}
		</button>
	)
}

export default Button