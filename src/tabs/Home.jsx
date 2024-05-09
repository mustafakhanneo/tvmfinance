import { useState } from 'react'

function Home() {
  const [pvalue, setPvalue] = useState('');
  const [fvalue, setFvalue] = useState('');
  const [intr, setIntr] = useState('');
  const [period, setPeroid] = useState('');
  const [answersimp, setAnswersimp] = useState('')
  const [answerOrdinaryFuture, setAnswerOrdinaryFuture] = useState('');
  const [answerOrdinaryPresent, setAnswerOrdinaryPresent] = useState('');
  const [oriFvalue, setOriFvalue] = useState('');
  const [oriPvalue, setOriPvalue] = useState('');
  const [oriFcash, setOriFcash] = useState('');
  const [oriPcash, setOriPcash] = useState('');
  const [oriFintr, setOriFintr] = useState('');
  const [oriPintr, setOriPintr] = useState('');
  const [oriFperiod, setOriFperiod] = useState('');
  const [oriPperiod, setOriPperiod] = useState('');
  const [answerDueFuture, setAnswerDueFuture] = useState('');
  const [answerDuePresent, setAnswerDuePresent] = useState('');
  const [dueFvalue, setDueFvalue] = useState('');
  const [duePvalue, setDuePvalue] = useState('');
  const [dueFcash, setDueFcash] = useState('');
  const [duePcash, setDuePcash] = useState('');
  const [dueFintr, setDueFintr] = useState('');
  const [duePintr, setDuePintr] = useState('');
  const [dueFperiod, setDueFperiod] = useState('');
  const [duePperiod, setDuePperiod] = useState('');

  const simpleAnnuity = () => {
   if(pvalue === '') {
    const a = 1 + intr/100;
    const b = fvalue/Math.pow(a, period);
    setAnswersimp(b.toFixed(5))
   } else if(fvalue === '') {
    const a = 1 + intr/100;
    const b = pvalue*Math.pow(a, period);
    setAnswersimp(b.toFixed(5))
   } else if(intr === '') {
   const a = fvalue/pvalue;
   const b = Math.pow(a, 1/period)-1;
   const c = b*100;
   setAnswersimp(`${c.toFixed(2)}%`)
   } else if(period === '') {
   const a = fvalue/pvalue;
   const b = 1 + intr/100;
   const c = Math.log(a)/Math.log(b);
   setAnswersimp(c.toFixed(5));
   } else {
    setAnswersimp("All Already Known")
   }
  }

  const oriFuture = () => {
    if(oriFvalue === '') {
     const a = 1 + oriFintr/100;
     const b = Math.pow(a, oriFperiod);
     const c = b - 1;
     const d = (c/oriFintr)*100;
     const e = d * oriFcash
     setAnswerOrdinaryFuture(e.toFixed(5))
    } else if(oriFcash === '') {
      const a = 1 + oriFintr/100;
      const b = Math.pow(a, oriFperiod);
      const c = b - 1;
      const d = (c/oriFintr)*100;
      const e = oriFvalue/d;
      setAnswerOrdinaryFuture(e.toFixed(5))
    } else if(oriFintr === '') {
      setAnswerOrdinaryFuture("Calculate Your Self")
    } else if(oriFperiod === '') {
    const a = oriFvalue/oriFcash;
    const b = 1 + oriFintr/100;
    const c = a * oriFintr/100;
    const d = c + 1;
    const e = Math.log(d)/Math.log(b);
    setAnswerOrdinaryFuture(e.toFixed(5));
    } else {
     setAnswerOrdinaryFuture("All Already Known")
    }
   }

   const oriPresent = () => {
    if(oriPvalue === '') {
     const a = 1 + oriPintr/100;
     const z = -oriPperiod;
     const b = Math.pow(a, z);
     const c = 1 - b;
     const d = (c/oriPintr)*100;
     const e = d * oriPcash
     setAnswerOrdinaryPresent(e.toFixed(5))
    } else if(oriPcash === '') {
      const a = 1 + oriPintr/100;
      const z = -oriPperiod;
      const b = Math.pow(a, z);
      const c = 1 - b;
      const d = (c/oriPintr)*100;
      const e = oriPvalue/d;
      setAnswerOrdinaryPresent(e.toFixed(5))
    } else if(oriPintr === '') {
      setAnswerOrdinaryPresent("Calculate Your Self")
    } else if(oriPperiod === '') {
    const a = oriPvalue/oriPcash;
    const b = 1 + oriPintr/100;
    const c = a * oriPintr/100;
    const d = 1 - c;
    const e = Math.log(d)/Math.log(b);
    const f = -e;
    setAnswerOrdinaryPresent(f.toFixed(5));
    } else {
     setAnswerOrdinaryPresent("All Already Known")
    }
   }


   const dueFuture = () => {
    if(dueFvalue === '') {
     const a = 1 + dueFintr/100;
     const b = Math.pow(a, dueFperiod);
     const c = b - 1;
     const d = (c/dueFintr)*100;
     const e = d * dueFcash;
     const f = e * a;
     setAnswerDueFuture(f.toFixed(5))
    } else if(dueFcash === '') {
      const a = 1 + dueFintr/100;
      const b = Math.pow(a, dueFperiod);
      const c = b - 1;
      const d = (c/dueFintr)*100;
      const e = dueFvalue/d;
      const f = e / a;
      setAnswerDueFuture(f.toFixed(5))
    } else if(dueFintr === '') {
      setAnswerDueFuture("Calculate Your Self")
    } else if(dueFperiod === '') {
    const a = 1 + dueFintr/100;
    const b = dueFcash * a;
    const c = dueFvalue * (dueFintr/100);
    const d = c / b;
    const e = d + 1;
    const g = Math.log(e)/Math.log(a);
    setAnswerDueFuture(g.toFixed(5));
    } else {
     setAnswerDueFuture("All Already Known")
    }
   }

   const duePresent = () => {
    if(duePvalue === '') {
     const a = 1 + duePintr/100;
     const z = -duePperiod;
     const b = Math.pow(a, z);
     const c = 1 - b;
     const d = (c/duePintr)*100;
     const e = d * duePcash
     const f = e * a;
     setAnswerDuePresent(f.toFixed(5))
    } else if(duePcash === '') {
      const a = 1 + duePintr/100;
      const z = -duePperiod;
      const b = Math.pow(a, z);
      const c = 1 - b;
      const d = (c/duePintr)*100;
      const e = duePvalue/d;
      const f = e / a;
      setAnswerDuePresent(f.toFixed(5))
    } else if(duePintr === '') {
      setAnswerDuePresent("Calculate Your Self")
    } else if(duePperiod === '') {
    const a = duePvalue/duePcash;
    const b = 1 + duePintr/100;
    const c = a * duePintr/100;
    const g = c / b;
    const d = 1 - g;
    const e = Math.log(d)/Math.log(b);
    const f = -e;
    setAnswerDuePresent(f.toFixed(5));
    } else {
     setAnswerDuePresent("All Already Known")
    }
   }

  return (
    <div className='space-y-16 p-[1rem] m-auto max-w-[1280px]'>
    
<div className='flex flex-col justify-start items-start'>
      <p className='font-bold'>Instructions</p>
      <p>Just enter known values and left the unknown value empty and Click Calculate.</p>
     </div>
{/* Simple Annuity Calculator  */}
<details className="collapse collapse-arrow bg-base-200">
  <summary className="collapse-title sm:text-xl text-md font-medium">Simple Present Future Value</summary>
  <div className="collapse-content"> 
        <div className='flex sm:flex-row flex-col sm:space-x-6 space-x-0 sm:space-y-0 space-y-2'>
        <input onChange={e => setPvalue(e.target.value)} type="text" placeholder="Present Value" className="input input-bordered w-auto max-w-xs" />
        <input onChange={e => setFvalue(e.target.value)} type="text" placeholder="Future Value" className="input input-bordered w-auto max-w-xs" />
        <input onChange={e => setIntr(e.target.value)} type="text" placeholder="Interest in % eg: 10" className="input input-bordered w-auto max-w-xs" />
        <input onChange={e => setPeroid(e.target.value)} type="text" placeholder="Period" className="input input-bordered w-auto max-w-xs" />
        <button onClick={simpleAnnuity} className="btn w-auto back input-bordered">Calculate</button>
        <div className='items-center input input-bordered justify-center flex'>
          <p className=''>{`${answersimp || "Answer"}`}</p>
        </div>
        
        </div>
      </div>
      </details>
{/* Ordinary Annuity Calculator  */}
      <div className='space-y-16'>
        {/* Present Value of Ordinary Annuity */}
        <details className="collapse collapse-arrow bg-base-200">
  <summary className="collapse-title sm:text-xl text-md font-medium">Future Value of Ordinary Annuity</summary>
  <div className="collapse-content"> 
        <div className='flex sm:flex-row flex-col sm:space-x-6 space-x-0 sm:space-y-0 space-y-2'>
        <input onChange={e => setOriFvalue(e.target.value)} type="text" placeholder="Future Value" className="input input-bordered w-auto max-w-xs" />
        <input onChange={e => setOriFcash(e.target.value)} type="text" placeholder="Cash Flow" className="input input-bordered w-auto max-w-xs" />
        <input onChange={e => setOriFintr(e.target.value)} type="text" placeholder="Interest in % eg: 10" className="input input-bordered w-auto max-w-xs" />
        <input onChange={e => setOriFperiod(e.target.value)} type="text" placeholder="Period" className="input input-bordered w-auto max-w-xs" />
        <button onClick={oriFuture} className="btn input-bordered back">Calculate</button>
        <div className='items-center input input-bordered justify-center flex'>
          <p className=''>{`${answerOrdinaryFuture || "Answer"}`}</p>
        </div>
        
        </div>
        </div>
</details>

        {/* Present Value of Ordinary Annuity */}
        <details className="collapse collapse-arrow bg-base-200">
  <summary className="collapse-title sm:text-xl text-md font-medium">Present Value of Ordinary Annuity</summary>
  <div className="collapse-content"> 
        <div className='flex sm:flex-row flex-col sm:space-x-6 space-x-0 sm:space-y-0 space-y-2'>
        <input onChange={e => setOriPvalue(e.target.value)} type="text" placeholder="Present Value" className="input input-bordered w-auto max-w-xs" />
        <input onChange={e => setOriPcash(e.target.value)} type="text" placeholder="Cash Flow" className="input input-bordered w-auto max-w-xs" />
        <input onChange={e => setOriPintr(e.target.value)} type="text" placeholder="Interest in % eg: 10" className="input input-bordered w-auto max-w-xs" />
        <input onChange={e => setOriPperiod(e.target.value)} type="text" placeholder="Period" className="input input-bordered w-auto max-w-xs" />
        <button onClick={oriPresent} className="btn input-bordered back">Calculate</button>
        <div className='items-center input input-bordered justify-center flex'>
          <p className=''>{`${answerOrdinaryPresent || "Answer"}`}</p>
        </div>
        </div>
        </div>
        </details>
      </div>
      {/* Simple Annuity Calculator  */}
     
{/* Annuity Due Calculator  */}
      <div className='space-y-16'>
        {/* Present Value of Annuity Due */}
        <details className="collapse collapse-arrow bg-base-200">
  <summary className="collapse-title sm:text-xl text-md font-medium">Future Value of Annuity Due</summary>
  <div className="collapse-content"> 
        <div className='flex sm:flex-row flex-col sm:space-x-6 space-x-0 sm:space-y-0 space-y-2'>
        <input onChange={e => setDueFvalue(e.target.value)} type="text" placeholder="Future Value" className="input input-bordered w-auto max-w-xs" />
        <input onChange={e => setDueFcash(e.target.value)} type="text" placeholder="Cash Flow" className="input input-bordered w-auto max-w-xs" />
        <input onChange={e => setDueFintr(e.target.value)} type="text" placeholder="Interest in % eg: 10" className="input input-bordered w-auto max-w-xs" />
        <input onChange={e => setDueFperiod(e.target.value)} type="text" placeholder="Period" className="input input-bordered w-auto max-w-xs" />
        <button onClick={dueFuture} className="btn input-bordered back">Calculate</button>
        <div className='items-center input input-bordered justify-center flex'>
          <p className=''>{`${answerDueFuture || "Answer"}`}</p>
        </div>
        
        </div>
        </div>
        </details>

        {/* Present Value of Annuity DUe */}
        <details className="collapse collapse-arrow bg-base-200">
  <summary className="collapse-title sm:text-xl text-md font-medium">Present Value of Annuity Due</summary>
  <div className="collapse-content"> 
        <div className='flex sm:flex-row flex-col sm:space-x-6 space-x-0 sm:space-y-0 space-y-2'>
        <input onChange={e => setDuePvalue(e.target.value)} type="text" placeholder="Present Value" className="input input-bordered w-auto max-w-xs" />
        <input onChange={e => setDuePcash(e.target.value)} type="text" placeholder="Cash Flow" className="input input-bordered w-auto max-w-xs" />
        <input onChange={e => setDuePintr(e.target.value)} type="text" placeholder="Interest in % eg: 10" className="input input-bordered w-auto max-w-xs" />
        <input onChange={e => setDuePperiod(e.target.value)} type="text" placeholder="Period" className="input input-bordered w-auto max-w-xs" />
        <button onClick={duePresent} className="btn input-bordered back">Calculate</button>
        <div className='items-center input input-bordered justify-center flex'>
          <p className=''>{`${answerDueFuture || "Answer"}`}</p>
        </div>
        </div>
        </div>
</details>


      </div>
     
    </div>
  )
}

export default Home