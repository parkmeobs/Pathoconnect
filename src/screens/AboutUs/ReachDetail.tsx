import React from 'react'

const reachInfo = [
    {
        label: 'Years of Experience',
        value:'5'
    },
    {
        label: 'Dedicated support',
        value:'24/7'
    },
    {
        label: 'Happy Customers',
        value:'50'
    },
    {
        label: 'Overall Rating',
        value:'4.8'
    }

]

function ReachDetail() {
  return (
    <div className="max-w-8xl mx-auto  grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-8 m-10">
        {
            reachInfo.map((item, index) => (
                <div key={index} className="flex flex-col py-10 sm:py-12 md:py-14 lg:py-15 px-10 sm:px-13 md:px-17 lg:px-20 bg-[#E2DFDF] rounded-2xl align-center justify-center">
                    <span className="font-[900] font-[Roboto] text-[70px]  text-primary text-center">{item.value}</span>
                    <h2 className="text-[17px] font-[700] font-semibold text-blue text-center">{item.label}</h2>
                </div>
            ))
        }
      
    </div>
  )
}

export default ReachDetail
