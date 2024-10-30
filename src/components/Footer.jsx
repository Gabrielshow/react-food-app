  //Do the routing for proper navigation
export const Footer = () => {
    return (
        <footer class="bg-gray-800">
            <div class="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Company</h2>
                    <ul class="text-gray-300">
                        <li class="mb-4">
                        
                            <a href="#About" className=" hover:underline" alt="">About</a>
                        </li>
                        <li class="mb-4">
                            <a href="#Menu" className="hover:underline" alt="">Menu</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Legal</h2>
                    <ul class="text-gray-300">
                        <li class="mb-4">
                            <a href="#Privacy policy" className="hover:underline">Privacy Policy</a>
                        </li>
                        <li class="mb-4">
                            <a href="#License" className="hover:underline">Licensing</a>
                        </li>
                        <li class="mb-4">
                            <a href="#Condition" className="hover:underline">Terms &amp; Conditions</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="py-6 px-4 bg-gray-700 md:flex md:items-center md:justify-between">
                <span class="text-sm text-gray-300 sm:text-center">© 2022 Food Delivery. All Rights Reserved.
                </span>
            </div>
        </footer>
    )
}