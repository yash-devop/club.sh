import { MaxWidthContainer } from "@club/ui";

export const Footer = () => {
    return (
        <footer className="bg-[#fafaf8] py-14 border-t">
            <MaxWidthContainer>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
                    {/* Logo and tagline */}
                    <div>
                        <p className="font-semibold text-2xl tracking-tighter text-[#1e1e1edc]">club.url</p>

                        <p className="mt-2">The URL Shortener Platform</p>
                        <div className="flex mt-4 space-x-4">
                            <a href="#" className="hover:text-gray-900">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="#" className="hover:text-gray-900">
                                <i className="fas fa-times"></i>
                            </a>
                            <a href="#" className="hover:text-gray-900">
                                <i className="fas fa-rss"></i>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end mt-4">
                        <ul className="text-left md:text-right flex items-center gap-3">
                            <li><a href="https://x.com/yash_devop" target="_blank" className="">Twitter</a></li>
                            <li><a href="https://www.linkedin.com/in/yash-dev/" target="_blank" className="">Linkedin</a></li>
                        </ul>
                        <ul className="flex text-left md:text-right items-center gap-3">
                            <li><a href="mailto:yashkamble.dev@gmail.com" className="text-sm text-[#7a7a7a]">yashkamble.dev@gmail.com</a></li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-black/5 mt-8 pt-6 text-center flex items-start md:items-center justify-between">
                    <div className="flex flex-col md:flex-row items-start md:items-center text-sm px-8 gap-4">
                        <a href="#" className="hover:text-gray-900">Terms of Service</a>
                        <a href="#" className="hover:text-gray-900">Privacy</a>
                    </div>
                    <p className="mt-4 text-xs text-gray-500 pr-8">© {new Date().getFullYear()} club.url</p>
                </div>
            </MaxWidthContainer>
        </footer>
    );
};

export default Footer;