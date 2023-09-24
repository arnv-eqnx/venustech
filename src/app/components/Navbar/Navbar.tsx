import Link from "next/link";

export default function Navbar (){
    return(
        <div className="px-16 z-9999 h-[10vh] w-full flex items-center justify-between text-white font-semibold text-lg backdrop-blur-[6px]">
            <Link href="/" className="text-4xl tracking-[9px] font-bold">IONI</Link>
            <div className="navMenu flex gap-4">
                <Link href="/">Features</Link>
                <Link href="/">Resources</Link>
                <Link href="/">Pricing</Link>
                <Link href="/">FAQ</Link>
            </div>
            <button className="button-white-nav">Contact Sales</button>
        </div>
    );
}