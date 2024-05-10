import { useState } from 'react'
import KatexSpan from '../comps/KatexSpan'

function Formula() {
 
  const simpleAnnuity = `$ FV = PV \\times \\left(1 + i\\right)^n$`;
  const futureOdiAnnuity = `$ FV = C \\times \\biggl[\\dfrac{\\left(1 + i\\right)^n - 1}{i}\\biggr]$`;
  const presentOdiAnnuity = `$ PV = C \\times \\biggl[\\dfrac{1- \\left(1 + i\\right)^{-n}}{i}\\biggr]$`;
  const futureDueAnnuity = `$ FV = C \\times \\biggl[\\dfrac{\\left(1 + i\\right)^n -1}{i}\\biggr] \\times \\left(1 + i\\right)$`;
  const presentDueAnnuity = `$ PV = C \\times \\biggl[\\dfrac{1- \\left(1 + i\\right)^{-n}}{i}\\biggr] \\times \\left(1 + i\\right)$`;


  return (
    <div className='space-y-6 p-[1rem] m-auto max-w-[1280px]'>
    
<div className='flex flex-col justify-start pb-4 items-start'>
      <p className='font-bold'>Instructions</p>
      <p>Just enter known values and left the unknown value empty and Click Calculate.</p>
     </div>
{/* Simple Annuity Calculator  */}
<details className="collapse collapse-arrow bg-base-200">
  <summary className="collapse-title sm:text-xl text-md font-medium">Simple Present Future Value</summary>
  <div className='flex flex-col justify-center pb-5'>
    <div className='flex justify-center items-center'>
  <KatexSpan text={simpleAnnuity} />
  </div>
  <p className='flex pl-5 font-medium'>Where:</p>
  <div className='flex flex-col space-y-2 pl-5 pt-2'>
  <KatexSpan text={`$FV =$ Future Value`} />
  <KatexSpan text={`$PV =$ Present Value`} />
  <KatexSpan text={`$i =$ Interest Rate`} />
  <KatexSpan text={`$n =$ Period`} />
  </div>
  </div>
      </details>
{/* Ordinary Annuity Calculator  */}
      <div className='space-y-6'>
        {/* Future Value of Ordinary Annuity */}
        <details className="collapse collapse-arrow bg-base-200">
  <summary className="collapse-title sm:text-xl text-md font-medium">Future Value of Ordinary Annuity</summary>
  <div className='flex flex-col justify-center pb-5'>
    <div className='flex justify-center items-center'>
  <KatexSpan text={futureOdiAnnuity} />
  </div>
  <p className='flex pl-5 font-medium'>Where:</p>
  <div className='flex flex-col space-y-2 pl-5 pt-2'>
  <KatexSpan text={`$FV =$ Future Value`} />
  <KatexSpan text={`$C =$ Cash Flow`} />
  <KatexSpan text={`$i =$ Interest Rate`} />
  <KatexSpan text={`$n =$ Period`} />
  </div>
  </div>
</details>

        {/* Present Value of Ordinary Annuity */}
        <details className="collapse collapse-arrow bg-base-200">
  <summary className="collapse-title sm:text-xl text-md font-medium">Present Value of Ordinary Annuity</summary>
  <div className='flex flex-col justify-center pb-5'>
    <div className='flex justify-center items-center'>
  <KatexSpan text={presentOdiAnnuity} />
  </div>
  <p className='flex pl-5 font-medium'>Where:</p>
  <div className='flex flex-col space-y-2 pl-5 pt-2'>
  <KatexSpan text={`$PV =$ Present Value`} />
  <KatexSpan text={`$C =$ Cash Flow`} />
  <KatexSpan text={`$i =$ Interest Rate`} />
  <KatexSpan text={`$n =$ Period`} />
  </div>
  </div>
        </details>
      </div>
      {/* Simple Annuity Calculator  */}
     
{/* Annuity Due Calculator  */}
      <div className='space-y-6'>
        {/* Present Value of Annuity Due */}
        <details className="collapse collapse-arrow bg-base-200">
  <summary className="collapse-title sm:text-xl text-md font-medium">Future Value of Annuity Due</summary>
  <div className='flex flex-col justify-center pb-5'>
    <div className='flex justify-center items-center'>
  <KatexSpan text={futureDueAnnuity} />
  </div>
  <p className='flex pl-5 font-medium'>Where:</p>
  <div className='flex flex-col space-y-2 pl-5 pt-2'>
  <KatexSpan text={`$FV =$ Future Value`} />
  <KatexSpan text={`$C =$ Cash Flow`} />
  <KatexSpan text={`$i =$ Interest Rate`} />
  <KatexSpan text={`$n =$ Period`} />
  </div>
  </div>
        </details>

        {/* Present Value of Annuity DUe */}
        <details className="collapse collapse-arrow bg-base-200">
  <summary className="collapse-title sm:text-xl text-md font-medium">Present Value of Annuity Due</summary>
  <div className='flex flex-col justify-center pb-5'>
    <div className='flex justify-center items-center'>
  <KatexSpan text={presentDueAnnuity} />
  </div>
  <p className='flex pl-5 font-medium'>Where:</p>
  <div className='flex flex-col space-y-2 pl-5 pt-2'>
  <KatexSpan text={`$PV =$ Present Value`} />
  <KatexSpan text={`$C =$ Cash Flow`} />
  <KatexSpan text={`$i =$ Interest Rate`} />
  <KatexSpan text={`$n =$ Period`} />
  </div>
  </div>
</details>

{/* Present Value of Growing Annuity */}
<details className="collapse collapse-arrow bg-base-200">
  <summary className="collapse-title sm:text-xl text-md font-medium">Present Value of Growing Annuity</summary>
  
</details>

{/* EAR Effective Annual Rate */}
<details className="collapse collapse-arrow bg-base-200">
  <summary className="collapse-title sm:text-xl text-md font-medium">Effective Annual Rate</summary>
  
</details>


{/* Prepetual Investment Return */}
<details className="collapse collapse-arrow bg-base-200">
  <summary className="collapse-title sm:text-xl text-md font-medium">Prepetual Investment Return</summary>
  
</details>


{/* Growing Prepetual Investment Return */}
<details className="collapse collapse-arrow bg-base-200">
  <summary className="collapse-title sm:text-xl text-md font-medium"> Growing Prepetual Investment Return</summary>
  
</details>

      </div>
     
    </div>
  )
}

export default Formula