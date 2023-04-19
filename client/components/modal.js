import { useEffect, useState } from 'react'
import {Chart} from 'react-google-charts'


export default function Modal({setOpen,result}){

    return (
        <div className="w-full h-full fixed top-0 left-0 flex items-center justify-center bg-black/70">
            <div className="py-2 px-4 text-lg fixed top-2 right-2 bg-gray-300/70 rounded-full cursor-pointer" onClick={()=>setOpen(false)}>
                X
            </div>
            <div className="w-[70%] h-[70%] bg-white rounded-xl p-4 flex flex-col ">
                <h1 className="font-bold text-xl">Graph</h1>
                <div className="flex-grow">
                    <Chart
                        chartType='Line'
                        loader={<div>Loading Chart...</div>}
                        data={[["Words","Similarity"], ...result]}
                        width="100%"
                        height="100%"
                        legendToggle
                    />                    
                </div>
            </div>
        </div>
    )
}