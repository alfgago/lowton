import CTAButtonGreen from "@/components/CTAButtonGreen";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import client from "@/lib/apollo-client";
import { PROJECTS } from "@/lib/utils";
import { useEffect, useState } from "react";

const { data } = await client.query({
	query: PROJECTS,
});
const projects = data.projects;

const Works = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [projectsPerPage] = useState(6);
	const [totalPages, setTotalPages] = useState(0);

	const worksSection = document.getElementById('works');


	useEffect(() => {
		const total = Math.ceil(projects.length / projectsPerPage);
		setTotalPages(total);
	}, [projects]);

	const getProjectsForPage = () => {
		const startIndex = (currentPage - 1) * projectsPerPage;
		const endIndex = Math.min(startIndex + projectsPerPage, projects.length);
		return projects.slice(startIndex, endIndex);
	};

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
			worksSection.scrollIntoView({ behavior: 'smooth' });

		}
	};

	const handlePrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
			worksSection.scrollIntoView({ behavior: 'smooth' });

		}
	};

	const renderPages = () => {
		const pageNumbers = [];
		for (let i = 1; i <= totalPages; i++) {
			pageNumbers.push(i);
		}

		const maxPageNum = 5;
		const pageNumLimit = Math.floor(maxPageNum / 2);

		let activePages = pageNumbers.slice(
			Math.max(0, currentPage - 1 - pageNumLimit),
			Math.min(currentPage - 1 + pageNumLimit + 1, pageNumbers.length)
		);

		return activePages.map((page, idx) => (
			<PaginationItem
				key={idx}
				className={
					currentPage === page
						? "text-black bg-[var(--color-primary)]"
						: "text-white border border-[var(--color-primary)]"
				}
			>
				<PaginationLink onClick={() => {
					setCurrentPage(page);
					worksSection.scrollIntoView({ behavior: 'smooth' });
				}}>
					{page}
				</PaginationLink>
			</PaginationItem>
		));
	};

	return (
		<section id="works" className="px-8 lg:px-16 overlap pt-12">
			<div className="grid grid-cols-2 gap-8 mt-16 pb-12">
				{getProjectsForPage().map((project, idx) => (
					<div key={idx} className="col-span-1 flex flex-col gap-2">
						<a href={`/projects/${project.slug}`} className="relative group">
							<div className="rounded-md overflow-hidden">
								<img
									style={{ viewTransitionName: 'project-' + project.slug, aspectRatio: '1.475 / 1' }}
									width={project.components[0]?.image?.width || 500}
									height={project.components[0]?.image?.height || 500}
									decoding="async"
									loading="lazy"
									alt={
										project.components[0]?.image?.alt || "Featured project image"
									}
									src={
										project.featuredImage?.url ||
										project.components[0]?.image?.url ||
										project.components?.[0]?.images?.[0]?.url ||
										"https://us-east-1-shared-usea1-02.graphassets.com/clulsp1wn097s07lh2tvpebkn/clumdqwne8ep008lllmyqpcgg"
									}
									className="w-full object-cover h-full group-hover:scale-105 transition-all duration-1000 ease-expo pointer-events-none"
								/>
							</div>
						</a>
						<div className="flex justify-between items-center">
							<h4 className="text-base text-[var(--color-primary)]">
								{project.name}
							</h4>
							<CTAButtonGreen
								target="_blank"
								url={`/projects/${project.slug}`}
								text="View Project"
							/>
						</div>
						<p className="text-xs text-[var(--color-primary)]">
							{project.category.map((category) => category.name).join(" • ") ||
								project.shortIntro}
						</p>
					</div>
				))}
			</div>

			<div className="flex gap-2 justify-center items-center">
				<span className="bg-[var(--color-primary)] h-[1px] w-full"></span>
				<div className="col-span-2">
					<Pagination>
						<PaginationContent>
							<PaginationItem>
								<PaginationPrevious
									className="text-white"
									onClick={() => handlePrevPage()}
								/>
							</PaginationItem>
							{renderPages()}
							<PaginationItem>
								<PaginationNext
									className="text-white"
									onClick={() => handleNextPage()}
								/>
							</PaginationItem>
						</PaginationContent>
					</Pagination>
				</div>
				<span className="bg-[var(--color-primary)] h-[1px] w-full"></span>
			</div>
		</section>
	);
};

export default Works;