export const QuickNavigation = ()=> {
    return (
        // Marriage Cards: 
        <div>

            <div className="marriage-Related flex flex-row gap-5 justify-center">
                <div className="flex justify-center mt-10">
                    <a
                        href="/wedding"
                        className="px-4 sm:px-8 py-2 sm:py-3 bg-gradient-to-r dark:to-green-500 dark:from-emerald-600 dark:text-black from-green-500 to-emerald-600 text-white rounded-md sm:rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out font-semibold tracking-wide text-sm sm:text-base whitespace-nowrap"
                    >
                        Explore Weddings
                    </a>
                </div>
                
                <div className="flex justify-center mt-10">
                    <a
                        href="/prewedding"
                        className="px-4 sm:px-8 py-2 sm:py-3 bg-gradient-to-r dark:to-green-500 dark:from-emerald-600 dark:text-black from-green-500 to-emerald-600 text-white rounded-md sm:rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out font-semibold tracking-wide text-sm sm:text-base whitespace-nowrap"
                    >
                        Explore Pre Weddings
                    </a>
                </div>
            </div>

            <div className="non-marriage related flex flex-row gap-5 justify-center">
                <div className="flex justify-center mt-10">
                    <a
                        href="/prewedding"
                        className="px-4 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-[#fddede] to-[#2d9655] dark:to-[#fddede] dark:from-[#2d9655] text-black rounded-md sm:rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out font-semibold tracking-wide text-sm sm:text-base whitespace-nowrap"
                    >
                        Explore Child Photography
                    </a>
                </div>
                <div className="flex justify-center mt-10">
                    <a
                        href="/videos"
                        className="px-4 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-[#fddede] to-[#2d9655] dark:to-[#fddede] dark:from-[#2d9655] text-black rounded-md sm:rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out font-semibold tracking-wide text-sm sm:text-base whitespace-nowrap"
                    >
                        Explore Movies
                    </a>
                </div>
                
            </div>
        </div>
    )
}
