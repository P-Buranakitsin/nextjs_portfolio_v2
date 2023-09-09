import { IFeaturedWork } from "components/modules/FeaturedProjects"
import Image from "next/image"

const FeaturedWork = ({ url, name, description, tools, image }: IFeaturedWork) => {
	return (
		<a
			className="bg-gray-100 shadow-md dark:bg-zinc-900 rounded-sm p-4 h-full overflow-hidden flex flex-col justify-between"
			href={url}
			target="_blank"
			rel="noreferrer"
		>
			<div>
				<h3 className="text-black dark:text-white font-semibold text-xl">{name}</h3>
				<div className="my-4 mx-[-1rem]">
					<Image
						src={image}
						alt="thumbnail"
						width={0}
						height={0}
						sizes="100vw"
						className="md:h-[300px] h-auto object-cover"
						style={{ width: '100%' }}
					/>
				</div>
				<p className="text-gray-700 dark:text-gray-200 my-4 text-base">{description}</p>
			</div>
			<div className="flex justify-between flex-col">
				{tools.length > 0 && (
					<div className="flex justify-between flex-row mb-3">
						<div className="flex flex-row flex-wrap gap-1.5">
							{tools.map((name, index) => (
								<span className="rounded-full bg-indigo-100 text-indigo-800 dark:text-gray-200 text-xs py-1.5 px-3 font-semibold" key={index}>
									{name}
								</span>
							))}
						</div>
					</div>
				)}
			</div>
		</a>
	)
}

export default FeaturedWork