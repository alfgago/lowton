const CTAButtonGreen = ({ url, text, target }) => {
  return (
    <a
      className="group flex gap-x-3 w-fit font-base text-xs text-[var(--color-primary)] fill-[var(--color-primary)]"
      target={target}
      href={url}
    >
      <div className="group relative overflow-hidden">
        <span className="ease-out-expo flex transition-all duration-500 group-hover:-translate-y-12">
          {text}
        </span>
        <span className="ease-out-expo absolute left-0 top-0 translate-y-12 transition-all duration-500 group-hover:-translate-y-0">
          {text}
        </span>
      </div>

      <span className="relative flex h-4 w-4 items-center justify-center overflow-hidden rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="ease-out-expo absolute h-auto w-auto -translate-x-12 translate-y-12 transition-all duration-500 group-hover:-translate-x-0 group-hover:translate-y-0"
        >
          <path d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06" />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="ease-out-expo absolute h-auto w-auto transition-all duration-500 group-hover:-translate-y-12 group-hover:translate-x-12"
        >
          <path d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06" />
        </svg>
      </span>
    </a>
  );
};

export default CTAButtonGreen;
