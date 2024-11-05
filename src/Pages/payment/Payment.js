import React from 'react'

export default function Payment() {
    return (
        <>
            <div class="font-[sans-serif] bg-white p-4">
                <div class="md:max-w-5xl max-w-5xl mx-auto">
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div class="lg:col-span-2 max-md:order-1">
                            <form class="font-[sans-serif] max-w-4xl mx-auto">
                                <div class="grid sm:grid-cols-2 gap-4">
                                    <div class="relative flex items-center">
                                        <input type="text" placeholder="First Name"
                                            class="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border outline-[#007bff] rounded transition-all" />
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-4"
                                            viewBox="0 0 24 24">
                                            <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                                            <path
                                                d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                                                data-original="#000000"></path>
                                        </svg>
                                    </div>

                                    <div class="relative flex items-center">
                                        <input type="text" placeholder="Last Name"
                                            class="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border outline-[#007bff] rounded transition-all" />
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-4"
                                            viewBox="0 0 24 24">
                                            <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                                            <path
                                                d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                                                data-original="#000000"></path>
                                        </svg>
                                    </div>

                                    <div class="relative flex items-center">
                                        <input type="email" placeholder="Email"
                                            class="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border outline-[#007bff] rounded transition-all" />
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-4"
                                            viewBox="0 0 682.667 682.667">
                                            <defs>
                                                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                                    <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                                                </clipPath>
                                            </defs>
                                            <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                                <path fill="none" stroke-miterlimit="10" stroke-width="40"
                                                    d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                                                    data-original="#000000"></path>
                                                <path
                                                    d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                                                    data-original="#000000"></path>
                                            </g>
                                        </svg>
                                    </div>

                                    <div class="relative flex items-center">
                                        <input type="password" placeholder="Password"
                                            class="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border outline-[#007bff] rounded transition-all" />
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb"
                                            class="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                                            <path
                                                d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                                                data-original="#000000"></path>
                                        </svg>
                                    </div>
                                </div>

                                <button type="button"
                                    class="mt-8 px-6 py-2.5 text-sm w-full bg-[#007bff] hover:bg-[#006bff] text-white rounded transition-all">Submit</button>
                            </form>
                            <h2 class="text-3xl font-extrabold text-gray-800">Make a payment</h2>
                            <p class="text-gray-800 text-sm mt-4">Complete your transaction swiftly and securely with our easy-to-use payment process.</p>

                            <form class="mt-8 max-w-lg">
                                <div class="grid gap-4">
                                    <div>
                                        <input type="text" placeholder="Cardholder's Name"
                                            class="px-4 py-3.5 bg-gray-100 text-gray-800 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none" />
                                    </div>

                                    <div class="flex bg-gray-100 border rounded-md focus-within:border-purple-500 focus-within:bg-transparent overflow-hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 ml-3" viewBox="0 0 32 20">
                                            <circle cx="10" cy="10" r="10" fill="#f93232" data-original="#f93232" />
                                            <path fill="#fed049"
                                                d="M22 0c-2.246 0-4.312.75-5.98 2H16v.014c-.396.298-.76.634-1.107.986h2.214c.308.313.592.648.855 1H14.03a9.932 9.932 0 0 0-.667 1h5.264c.188.324.365.654.518 1h-6.291a9.833 9.833 0 0 0-.377 1h7.044c.104.326.186.661.258 1h-7.563c-.067.328-.123.66-.157 1h7.881c.039.328.06.661.06 1h-8c0 .339.027.67.06 1h7.882c-.038.339-.093.672-.162 1h-7.563c.069.341.158.673.261 1h7.044a9.833 9.833 0 0 1-.377 1h-6.291c.151.344.321.678.509 1h5.264a9.783 9.783 0 0 1-.669 1H14.03c.266.352.553.687.862 1h2.215a10.05 10.05 0 0 1-1.107.986A9.937 9.937 0 0 0 22 20c5.523 0 10-4.478 10-10S27.523 0 22 0z"
                                                class="hovered-path" data-original="#fed049" />
                                        </svg>
                                        <input type="number" placeholder="Card Number"
                                            class="px-4 py-3.5 text-gray-800 w-full text-sm outline-none bg-transparent" />
                                    </div>

                                    <div class="grid grid-cols-2 gap-4">
                                        <div>
                                            <input type="number" placeholder="EXP."
                                                class="px-4 py-3.5 bg-gray-100 text-gray-800 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none" />
                                        </div>
                                        <div>
                                            <input type="number" placeholder="CVV"
                                                class="px-4 py-3.5 bg-gray-100 text-gray-800 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none" />
                                        </div>
                                    </div>
                                </div>

                                <button type="button" class="mt-8 w-40 py-3.5 text-sm bg-purple-500 text-white rounded-md hover:bg-purple-600 tracking-wide">Pay  </button>
                            </form>


                        </div>

                        <div class="bg-gray-100 p-6 rounded-md">
                            <h2 class="text-3xl font-extrabold text-gray-800">$250.00</h2>

                            <ul class="text-gray-800 mt-8 space-y-4">
                                <li class="flex flex-wrap gap-4 text-sm">Split Sneakers <span class="ml-auto font-bold">$150.00</span></li>
                                <li class="flex flex-wrap gap-4 text-sm">Echo Elegance <span class="ml-auto font-bold">$90.00</span></li>
                                <li class="flex flex-wrap gap-4 text-sm">Tax <span class="ml-auto font-bold">$10.00</span></li>
                                <li class="flex flex-wrap gap-4 text-sm font-bold border-t-2 pt-4">Total <span class="ml-auto">$250.00</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
