import { Copy, CornerDownRight } from "lucide-react";

export default function LinkCard() {
    return (
        <>
            <div className="bg-white border rounded-xl hover:shadow-2xl hover:shadow-gray-200">

                <div className="flex items-center gap-5 p-4">
                    <div className="border rounded-full size-12 p-2.5 items-center bg-gradient-to-t from-gray-100 hidden sm:flex shrink-0">
                        <svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M39.1761 4.3822C38.7148 2.66887 37.3639 1.31797 35.6506 0.856684C32.5205 1.52588e-05 19.9999 1.52588e-05 19.9999 1.52588e-05C19.9999 1.52588e-05 7.47937 1.52588e-05 4.34924 0.823735C2.66885 1.28502 1.285 2.66887 0.82372 4.3822C0 7.51234 0 14.0032 0 14.0032C0 14.0032 0 20.5271 0.82372 23.6243C1.285 25.3376 2.6359 26.6885 4.34924 27.1498C7.51232 28.0065 19.9999 28.0065 19.9999 28.0065C19.9999 28.0065 32.5205 28.0065 35.6506 27.1828C37.3639 26.7215 38.7148 25.3706 39.1761 23.6572C39.9998 20.5271 39.9998 14.0362 39.9998 14.0362C39.9998 14.0362 40.0328 7.51234 39.1761 4.3822Z" fill="#FF0000" />
                            <path d="M16.0131 19.9999L26.425 14.0032L16.0131 8.00655V19.9999Z" fill="white" />
                        </svg>
                    </div>
                    <div className="flex flex-col gap min-w-0">
                        <div className="flex items-center gap-3">
                            <span className="font-medium text-sm">club.sh/hiteshbhau</span>
                            <Copy size={15} className="text-slate-400"/>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1 min-w-0">
                                <CornerDownRight size={15} className="text-slate-500 cursor-pointer"/>
                                <p className="truncate text-slate-500 font-light text-sm cursor-pointer hover:text-black">
                                    https://www.youtube.com/watch?v=jt5bqO_r2DQ
                                </p>
                            </div>
                            <div className="flex items-center gap-3 text-slate-500">
                                <div className="w-4 h-4 rounded-full bg-slate-300 shrink-0 "></div>
                                <span className="text-xs">Sep 2</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
