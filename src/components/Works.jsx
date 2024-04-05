import { useState, useEffect } from "react";
import { WORKS } from "@/consts/works";
import CTAButtonGreen from "@/components/CTAButtonGreen";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Works = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(6);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const total = Math.ceil(WORKS.length / projectsPerPage);
    setTotalPages(total);
  }, [WORKS]);

  const getProjectsForPage = () => {
    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = Math.min(startIndex + projectsPerPage, WORKS.length);
    return WORKS.slice(startIndex, endIndex);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
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
        <PaginationLink onClick={() => setCurrentPage(page)}>
          {page}
        </PaginationLink>
      </PaginationItem>
    ));
  };

  return (
    <section id="works" className="px-8 lg:px-16">
      <div className="grid grid-cols-2 gap-8 mt-16 pb-12">
        {getProjectsForPage().map((project, idx) => (
          <div key={idx} className="col-span-1 flex flex-col gap-2">
            <img
              src="src/assets/project.webp"
              alt="work image"
              width={300}
              height={200}
              className="w-full object-cover"
            />
            <div className="flex justify-between items-center">
              <h4 className="text-base text-[var(--color-primary)]">
                {project.title}
              </h4>
              <CTAButtonGreen
                target="_blank"
                url={project.url}
                text="View Project"
              />
            </div>
            <p className="text-xs text-[var(--color-primary)]">
              {`${project.services.join(" • ")}`}
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
                  onClick={handlePrevPage}
                />
              </PaginationItem>
              {renderPages()}
              <PaginationItem>
                <PaginationNext
                  className="text-white"
                  onClick={handleNextPage}
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
