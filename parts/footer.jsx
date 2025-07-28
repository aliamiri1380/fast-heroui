import { Link } from "@heroui/link";
import Icon from "./icon";
import Title from "./title";
import Button from "./button";
import BackToTopButton from "./back_to_top_button";


export default ({socials=[], copyright, links}) => {
    return (
        <footer className="relative">
            <svg className="footer-split" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path d="M1000 0H0v52C62.5 28 125 4 250 4c250 0 250 96 500 96 125 0 187.5-24 250-48V0Z"></path></svg>
            <div className="translate-y-[-100px] absolute left-0 w-full flex justify-center ">
                <BackToTopButton />
            </div>
            <div className="footer-content">
                <div className="w-full">
                    {links}
                    <div className="w-full px-4 py-6 flex-end sm:flex sm:items-center sm:justify-between">
                        <Link href="/" className="text-slate-900">{copyright}</Link>
                        <div className="mt-4 flex gap-4 sm:mt-0 sm:justify-center">
                            {socials.map(r => r)}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
