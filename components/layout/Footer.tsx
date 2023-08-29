import Link from "next/link";

const Footer = () => {
  return (
    <footer className="font-mono text-xs lg:text-sm text-slate-500 flex items-center justify-center p-5 bottom-0 z-10 dark:bg-slate-950">
      <div>
        {/* Built by{" "}
        <Link
          href="https://pratikstemkar.in"
          target="_blank"
          className="underline "
        >
          pratikstemkar
        </Link>
        . */}
        The Source Code is available on{" "}
        <Link
          href="https://github.com/pratikstemkar/streamink"
          target="_blank"
          className="underline "
        >
          GitHub
        </Link>
        .
      </div>
    </footer>
  );
};

export default Footer;
