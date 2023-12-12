import React from 'react'
import '../css/dashboard.css';
import ProfileImg from '../assets/alvin.jpg'
import CodeIgniter from '../assets/codeigniter.svg'
import Laravel from '../assets/laravel-2.svg'
import PHP from '../assets/php-1.svg'
import React2 from '../assets/react-2.svg'
import Mysql from '../assets/mysql-6.svg'
import HTML from '../assets/html-1.svg'
import CSS from '../assets/css-3.svg'
import Bootstrap from '../assets/bootstrap-5-1.svg'
import Tailwind from '../assets/tailwind-css-2.svg'
import Javascript from '../assets/logo-javascript.svg'
const dashboard = () => {
    const userName = 'Alvin Salvacion';
    const codeIgniterPercentage = 9;
    const CIProgress = Math.min(codeIgniterPercentage, 10);
    const LaravelPercentage = 7;
    const LaraProgress = Math.min(LaravelPercentage, 10);
    const PHPPercentage = 8;
    const PHPProgress = Math.min(PHPPercentage, 10);
    const React2Percentage = 5;
    const React2Progress = Math.min(React2Percentage, 10);
    const MysqlPercentage = 7;
    const MysqlProgress = Math.min(MysqlPercentage, 10);
    const HtmlPercentage = 9;
    const HtmlProgress = Math.min(HtmlPercentage, 10);
    const CSSPercentage = 7;
    const CSSProgress = Math.min(CSSPercentage, 10);
    const BootstrapPercentage = 9;
    const BootstrapProgress = Math.min(BootstrapPercentage, 10);
    const TailwindPercentage = 6;
    const TailwindProgress = Math.min(TailwindPercentage, 10);
    const JavascriptPercentage = 7;
    const JavascriptProgress = Math.min(JavascriptPercentage, 10);
    return (
        <div>
            <div className="bg-cover text-gray-100 h-screen flex flex-col md:flex-row">
                <div className="w-full md:w-2/3">
                    <div className="mt-5">
                        <p className="text-cyan-600 font-bold text-base pl-5">Hey There 👋 I am</p>
                        <span className="text-cyan-900 text-4xl font-bold p-5 pt-10">{userName}</span>
                        <p className="text-gray-500 text-2xl font-semibold pl-5">Computer Programmer/Web Developer</p>
                        <p className="text-gray-500 pl-5 p-5 w-full md:w-12/12 text-justify">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat obcaecati tenetur velit temporibus ipsam explicabo voluptatem rem ex tempora quam, et quos nemo optio autem pariatur eum reprehenderit corporis. Necessitatibus accusamus numquam quas eligendi commodi vitae, sequi magni ipsa suscipit, cupiditate culpa quis ipsum possimus modi nesciunt incidunt a consequatur!
                        </p>
                        <div>
                            <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-5 px-5 rounded-full m-4">
                                About Me
                            </a>
                            <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-5 px-5 rounded-full">
                                Download CV
                            </button>
                        </div>
                        <div className="flex flex-col md:flex-row">
                            <div className="mt-5 pl-5">
                                <span className="text-4xl font-bold text-cyan-900">My Expertise</span>
                                <div>
                                    <div className="flex items-center">
                                        <img src={CodeIgniter} alt="CodeIgniter" className="w-16 h-16 mb-2 mt-2" />
                                        <div className="ml-4 w-60 bg-gray-200 rounded-full dark:bg-gray-700">
                                            <div
                                                className="bg-blue-600 text-xs font-bold text-blue-100 text-center p-0.5 leading-none rounded-full"
                                                style={{ width: `${CIProgress * 10}%` }}
                                            >
                                                {CIProgress}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <img src={Laravel} alt="Laravel" className="w-16 h-16 mb-2 mt-2" />
                                    <div className="ml-4 w-60 bg-gray-200 rounded-full dark:bg-gray-700">
                                        <div
                                            className="bg-blue-600 text-xs font-bold text-blue-100 text-center p-0.5 leading-none rounded-full"
                                            style={{ width: `${LaraProgress * 10}%` }}
                                        >
                                            {LaraProgress}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <img src={React2} alt="React2" className="w-16 h-16 mb-2 mt-2" />
                                    <div className="ml-4 w-60 bg-gray-200 rounded-full dark:bg-gray-700">
                                        <div
                                            className="bg-blue-600 text-xs font-bold text-blue-100 text-center p-0.5 leading-none rounded-full"
                                            style={{ width: `${React2Progress * 10}%` }}
                                        >
                                            {React2Progress}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <img src={Mysql} alt="Mysql" className="w-16 h-16 mb-2 mt-2" />
                                    <div className="ml-4 w-60 bg-gray-200 rounded-full dark:bg-gray-700">
                                        <div
                                            className="bg-blue-600 text-xs font-bold text-blue-100 text-center p-0.5 leading-none rounded-full"
                                            style={{ width: `${MysqlProgress * 10}%` }}
                                        >
                                            {MysqlProgress}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <img src={PHP} alt="PHP" className="w-16 h-16 mt-2" />
                                    <div className="ml-4 w-60 bg-gray-200 rounded-full dark:bg-gray-700">
                                        <div
                                            className="bg-blue-600 text-xs font-bold text-blue-100 text-center p-0.5 leading-none rounded-full"
                                            style={{ width: `${PHPProgress * 10}%` }}
                                        >
                                            {PHPProgress}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 flex flex-col items-start">
                                <div className="mt-5 pl-5">
                                    <div className="flex items-center">
                                        <img src={HTML} alt="HTML" className="w-16 h-16 mb-2 mt-2" />
                                        <div className="ml-4 w-60 bg-gray-200 rounded-full dark:bg-gray-700">
                                            <div
                                                className="bg-blue-600 text-xs font-bold text-blue-100 text-center p-0.5 leading-none rounded-full"
                                                style={{ width: `${HtmlProgress * 10}%` }}
                                            >
                                                {HtmlProgress}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <img src={CSS} alt="CSS" className="w-16 h-16 mb-2 mt-2" />
                                        <div className="ml-4 w-60 bg-gray-200 rounded-full dark:bg-gray-700">
                                            <div
                                                className="bg-blue-600 text-xs font-bold text-blue-100 text-center p-0.5 leading-none rounded-full"
                                                style={{ width: `${CSSProgress * 10}%` }}
                                            >
                                                {CSSProgress}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <img src={Bootstrap} alt="Bootstrap" className="w-16 h-16 mb-2 mt-2" />
                                        <div className="ml-4 w-60 bg-gray-200 rounded-full dark:bg-gray-700">
                                            <div
                                                className="bg-blue-600 text-xs font-bold text-blue-100 text-center p-0.5 leading-none rounded-full"
                                                style={{ width: `${BootstrapProgress * 10}%` }}
                                            >
                                                {BootstrapProgress}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <img src={Tailwind} alt="Tailwind" className="w-16 h-16 mb-2 mt-2" />
                                        <div className="ml-4 w-60 bg-gray-200 rounded-full dark:bg-gray-700">
                                            <div
                                                className="bg-blue-600 text-xs font-bold text-blue-100 text-center p-0.5 leading-none rounded-full"
                                                style={{ width: `${TailwindProgress * 10}%` }}
                                            >
                                                {TailwindProgress}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <img src={Javascript} alt="Javascript" className="w-16 h-16 mb-2 mt-2" />
                                        <div className="ml-4 w-60 bg-gray-200 rounded-full dark:bg-gray-700">
                                            <div
                                                className="bg-blue-600 text-xs font-bold text-blue-100 text-center p-0.5 leading-none rounded-full"
                                                style={{ width: `${JavascriptProgress * 10}%` }}
                                            >
                                                {JavascriptProgress}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column (Profile Image) */}
                <div className="md:w-1/3 mt-5 md:mt-0 p-10">
                    <img src={ProfileImg} alt="Profile" className="rounded-full profile" />
                </div>
            </div>
            <div>
            </div>
        </div >
    );
}
export default dashboard