import Link from "next/link";
import {services} from "@/data";
import {Button} from "@/components/ui/button";
import {ChevronDown} from "lucide-react";

const MobileNav = ({setMobileMenuOpen, showServices, toggleServices}) => {
    return (
        <div className="flex flex-col p-4 space-y-3">
            <Link href="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Главная</Link>
            <Link href="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>О нас</Link>

            <div>
                <button
                    type="button"
                    onClick={toggleServices}
                    className="flex items-center justify-between w-full py-2 rounded-md font-medium text-gray-800 hover:bg-lime-50 hover:text-lime-700 transition-colors"
                >
                    Услуги
                    <ChevronDown
                        className={`ml-2 h-5 w-5 transition-transform duration-300 ${showServices ? "rotate-180" : ""}`}
                    />
                </button>

                {showServices && (
                    <div className="mt-2 grid grid-cols-2 gap-2 px-3">
                        {services.map(({href, title}) => (
                            <Link
                                key={href}
                                href={href}
                                className="block px-2 py-1 rounded-md text-sm text-gray-600 hover:bg-lime-100 hover:text-lime-700 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {title}
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            <Link href="/terms" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Условия вывоза</Link>
            <Link href="/contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Контакты</Link>

            <Button
                className="bg-lime-600 hover:bg-lime-700 text-white font-semibold px-6 py-2 rounded-lg shadow-lg transition-transform hover:scale-105 active:scale-95 mt-2"
                onClick={() => setMobileMenuOpen(false)}
            >
                Подать заявку
            </Button>
        </div>
    );
};

export default MobileNav;
