import Link from "next/link";

const Footer = () => {
    return (<footer className="font-mono text-sm text-slate-500 flex justify-center p-5 bottom-0">
    <div>
        Built by{" "}
        <Link
            href="https://pratikstemkar.in"
            target="_blank"
            className="underline "
        >
            pratikstemkar
        </Link>
        . The Source Code is available on{" "}
        <Link
            href="https://github.com/pratikstemkar/streamink"
            target="_blank"
            className="underline "
        >
            GitHub
        </Link>
        .
    </div>
</footer>)
}

export default Footer;