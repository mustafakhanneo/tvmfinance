import { useState } from 'react'
import { NumericFormat } from "react-number-format";

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
  const [quoteRate, setQuoteRate] = useState('');
  const [freqComp, setFreqComp] = useState('');
  const [expar, setExpar] = useState('');
  const [answerEAR, setAnswerEAR] = useState('');
  const [prepCashflow, setPrepCashflow] = useState('');
  const [prepintr, setPrepintr] = useState('');
  const [prepFuture, setPrepFuture] = useState('');
  const [answerPrepsimp, setAnswerPrepsimp] = useState('');
  const [gPrepCashflow, setGPrepCashflow] = useState('');
  const [gPrepintr, setGPrepintr] = useState('');
  const [gPrepFuture, setGPrepFuture] = useState('');
  const [gRate, setGRate] = useState('');
  const [answerGPrepsimp, setAnswerGPrepsimp] = useState('');
  const [gPresentValue, setGPresentValue] = useState('');
  const [gCashflow, setGCashflow] = useState('');
  const [gIntr, setGIntr] = useState('');
  const [gRateAnnu, setGRateAnnu] = useState('');
  const [gPeriod, setGPeriod] = useState('');
  const [answerGAnnu, setAnswerGAnnu] = useState('');
  const [bondValue, setBondValue] = useState('');
  const [couponAmount, setCouponAmount] = useState('');
  const [yeildRate, setYeildRate] = useState('');
  const [faceValue, setFaceValue] = useState('');
  const [bondPeriod, setBondPeriod] = useState('');
  const [answerBondValue, setAnswerBondValue] = useState('');

  const simpleAnnuity = () => {
   if(pvalue === '') {
    const a = 1 + intr/100;
    const b = fvalue/Math.pow(a, period);
    const c = b.toFixed(2);
    const d = parseFloat(c).toLocaleString();
    setAnswersimp(`$${d}`)
   } else if(fvalue === '') {
    const a = 1 + intr/100;
    const b = pvalue*Math.pow(a, period);
    const c = b.toFixed(2);
    const d = parseFloat(c).toLocaleString();
    setAnswersimp(`$${d}`)
   } else if(intr === '') {
   const a = fvalue/pvalue;
   const b = Math.pow(a, 1/period)-1;
   const c = b*100;
   setAnswersimp(`${c.toFixed(2)}%`)
   } else if(period === '') {
   const a = fvalue/pvalue;
   const b = 1 + intr/100;
   const c = Math.log(a)/Math.log(b);
   setAnswersimp(c.toFixed(2));
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
     const f = e.toFixed(2);
    const g = parseFloat(f).toLocaleString();
     setAnswerOrdinaryFuture(`$${g}`)
    } else if(oriFcash === '') {
      const a = 1 + oriFintr/100;
      const b = Math.pow(a, oriFperiod);
      const c = b - 1;
      const d = (c/oriFintr)*100;
      const e = oriFvalue/d;
      const f = e.toFixed(2);
    const g = parseFloat(f).toLocaleString();
      setAnswerOrdinaryFuture(`$${g}`)
    } else if(oriFintr === '') {
      setAnswerOrdinaryFuture("Calculate Your Self")
    } else if(oriFperiod === '') {
    const a = oriFvalue/oriFcash;
    const b = 1 + oriFintr/100;
    const c = a * oriFintr/100;
    const d = c + 1;
    const e = Math.log(d)/Math.log(b);
    setAnswerOrdinaryFuture(e.toFixed(2));
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
     const f = e.toFixed(2);
    const g = parseFloat(f).toLocaleString();
     setAnswerOrdinaryPresent(`$${g}`)
    } else if(oriPcash === '') {
      const a = 1 + oriPintr/100;
      const z = -oriPperiod;
      const b = Math.pow(a, z);
      const c = 1 - b;
      const d = (c/oriPintr)*100;
      const e = oriPvalue/d;
      const f = e.toFixed(2);
    const g = parseFloat(f).toLocaleString();
      setAnswerOrdinaryPresent(`$${g}`)
    } else if(oriPintr === '') {
      setAnswerOrdinaryPresent("Calculate Your Self")
    } else if(oriPperiod === '') {
    const a = oriPvalue/oriPcash;
    const b = 1 + oriPintr/100;
    const c = a * oriPintr/100;
    const d = 1 - c;
    const e = Math.log(d)/Math.log(b);
    const f = -e;
    setAnswerOrdinaryPresent(f.toFixed(2));
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
     const g = f.toFixed(2);
    const h = parseFloat(g).toLocaleString();
     setAnswerDueFuture(`$${h}`)
    } else if(dueFcash === '') {
      const a = 1 + dueFintr/100;
      const b = Math.pow(a, dueFperiod);
      const c = b - 1;
      const d = (c/dueFintr)*100;
      const e = dueFvalue/d;
      const f = e / a;
      const g = f.toFixed(2);
    const h = parseFloat(g).toLocaleString();
      setAnswerDueFuture(`$${h}`)
    } else if(dueFintr === '') {
      setAnswerDueFuture("Calculate Your Self")
    } else if(dueFperiod === '') {
    const a = 1 + dueFintr/100;
    const b = dueFcash * a;
    const c = dueFvalue * (dueFintr/100);
    const d = c / b;
    const e = d + 1;
    const g = Math.log(e)/Math.log(a);
    setAnswerDueFuture(g.toFixed(2));
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
     const g = f.toFixed(2);
    const h = parseFloat(g).toLocaleString();
     setAnswerDuePresent(`$${h}`)
    } else if(duePcash === '') {
      const a = 1 + duePintr/100;
      const z = -duePperiod;
      const b = Math.pow(a, z);
      const c = 1 - b;
      const d = (c/duePintr)*100;
      const e = duePvalue/d;
      const f = e / a;
      const g = f.toFixed(2);
    const h = parseFloat(g).toLocaleString();
      setAnswerDuePresent(`$${h}`)
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
    setAnswerDuePresent(f.toFixed(2));
    } else {
     setAnswerDuePresent("All Already Known")
    }
   }

   const calGAnnu = () => {
    if(gPresentValue === '') {
     const a = 1 + gIntr/100;
     const b = 1 + gRateAnnu/100;
     const c = (gIntr/100)-(gRateAnnu/100);
     const d = b/a;
     const e = Math.pow(d, gPeriod);
     const f = 1 - e;
     const g = f/c;
     const h = g * gCashflow;
     const i = h.toFixed(2);
    const j = parseFloat(i).toLocaleString();
     setAnswerGAnnu(`$${j}`)
    } else if(gCashflow === '') {
      const a = 1 + gIntr/100;
     const b = 1 + gRateAnnu/100;
     const c = (gIntr/100)-(gRateAnnu/100);
     const d = b/a;
     const e = Math.pow(d, gPeriod);
     const f = 1 - e;
     const g = f/c;
     const h = gPresentValue/g;
     const i = h.toFixed(2);
    const j = parseFloat(i).toLocaleString();
     setAnswerGAnnu(`$${j}`)
    } else if(gIntr === '') {
      setAnswerGAnnu("Calculate Your Self")
    } else if(gRateAnnu === '') {
      setAnswerGAnnu("Calculate Your Self")
    } else if(gPeriod === '') {
      const a = 1 + gIntr/100;
     const b = 1 + gRateAnnu/100;
     const c = (gIntr/100)-(gRateAnnu/100);
     const d = b/a;
     const e = gPresentValue/gCashflow;
     const f = e * c;
     const g = 1 - f;
      const h = Math.log(g)/Math.log(d);
      setAnswerGAnnu(h.toFixed(2))
      } else {
     setAnswerDuePresent("All Already Known")
    }
   }

   const calEAR = () => {
    if(expar === '') {
      const f = quoteRate/100;
     const a = 1 + f/freqComp;
     const b = Math.pow(a, freqComp);
     const c = b - 1;
     const d = c * 100;
     setAnswerEAR(`${d.toFixed(2)}%`)
    } else if(quoteRate === '') {
      const a = 1 + expar/100;
      const b = Math.pow(a, 1/freqComp);
      const c = b - 1;
      const d = c * freqComp;
      const f = d * 100;
      setAnswerEAR(`${f.toFixed(2)}%`)
    } else if(freqComp === '') {
    setAnswerEAR("Calculate yourself");
    } else {
      setAnswerEAR("All Already Known")
    }
   }

   const calPrep = () => {
    if(prepFuture === '') {
      const f = prepintr/100;
     const a = prepCashflow/f;
     const b = a.toFixed(2);
    const c = parseFloat(b).toLocaleString();
     setAnswerPrepsimp(`$${c}`)
    } else if(prepCashflow === '') {
      const f = prepintr/100;
     const a = prepFuture * f;
     const b = a.toFixed(2);
    const c = parseFloat(b).toLocaleString();
     setAnswerPrepsimp(`$${c}`)
    
    } else if(prepintr === '') {
      
     const a = prepCashflow/prepFuture;
     const f = a * 100;
     setAnswerPrepsimp(`${f.toFixed(2)}%`)
    setAnswerEAR("Calculate yourself");
    } else {
      setAnswerPrepsimp("All Already Known")
    }
   }

   const callGPrep = () => {
    if(gPrepFuture === '') {
     const a = gPrepintr/100;
     const z = gRate/100;
     const b = a - z;
     const c = gPrepCashflow/b;
     const d = c.toFixed(2);
    const e = parseFloat(d).toLocaleString();
     setAnswerGPrepsimp(`$${e}`)
    } else if(gPrepCashflow === '') {
      const a = gPrepintr/100;
     const z = gRate/100;
     const b = a - z;
     const c = gPrepFuture * b;
     const d = c.toFixed(2);
    const e = parseFloat(d).toLocaleString();
     setAnswerGPrepsimp(`$${e}`)
    } else if(gPrepintr === '') {
      const a = gRate/100;
      const b = a * gPrepFuture;
      const c = b + gPrepCashflow/1;
      const d = c / gPrepFuture;
      const e = d * 100;
      setAnswerGPrepsimp(`${e.toFixed(2)}%`)
      console.log(a, b, c, d, e)
    } else if(gRate === '') {
      const a = gPrepintr/100;
      const b = a * gPrepFuture;
      const c = b - gPrepCashflow/1;
      const d = c / gPrepFuture;
      const e = d * 100;
    setAnswerGPrepsimp(`${e.toFixed(2)}%`);
    } else {
     setAnswerGPrepsimp("All Already Known")
    }
   }

   const calBondValue = () => {
    if(bondValue === '') {
      const f = yeildRate/100
     const a = 1 + yeildRate/100;
     const z = -bondPeriod;
     const b = Math.pow(a, z);
     const c = 1 - b;
     const d = (c/f);
     const e = d * couponAmount;
    const g = faceValue/Math.pow(a, bondPeriod);
    const h = e + g;
    const i = h.toFixed(2);
    const j = parseFloat(i).toLocaleString();
     setAnswerBondValue(`$${j}`)
    } else if(faceValue === '') {
      const a = 1 + yeildRate/100;
      const z = -bondPeriod;
      const b = yeildRate/100;
      const c = Math.pow(a, bondPeriod);
      const d = c/b;
      const e = bondValue*b;
      const f = Math.pow(a, z);
      const g = 1 - f;
      const h = couponAmount*g;
      const i = e-h;
      const j = d*i;
      const k = j.toFixed(2);
    const l = parseFloat(k).toLocaleString();
      setAnswerBondValue(`$${l}`)
    } else if(couponAmount === '') {
      const f = yeildRate/100
     const a = 1 + yeildRate/100;
     const z = -bondPeriod;
     const b = Math.pow(a, z);
     const c = 1 - b;
     const d = (c/f);
    const g = faceValue/Math.pow(a, bondPeriod);
    const r = bondValue - g;
    const s = (r/d)
    const t = s.toFixed(2);
    const u = parseFloat(t).toLocaleString();
    setAnswerBondValue(`$${u}`)
    } else if(yeildRate === '') {
      setAnswerBondValue("Calculate Your Self")
    } else if(bondPeriod === '') {
      setAnswerBondValue("Calculate Your Self")
    } else {
     setAnswerBondValue("All Already Known")
    }
   }

  return (
    <div className='space-y-6 p-[1rem] m-auto max-w-[1280px]'>
    
<div className='flex flex-col justify-start pb-4 items-start'>
      <p className='sm:text-xl text-md font-pilcrow'>Instructions</p>
      <p className='font-archivo'>Just enter known values and left the unknown value empty and Click Calculate.</p>
     </div>
{/* Simple Annuity Calculator  */}
<details className="collapse collapse-arrow bg-base-200">
  <summary className="collapse-title sm:text-xl text-md font-pilcrow font-medium">Simple Present Future Value</summary>
  <div className="collapse-content"> 
        <div className='flex sm:flex-row flex-col sm:space-x-6 space-x-0 sm:space-y-0 space-y-2'>
          <NumericFormat
          value={pvalue}
          prefix="$"
          thousandSeparator
          placeholder='Present Value'
          onValueChange={values => setPvalue(values.value)}
          className="input input-bordered w-auto max-w-xs"
          />
          <NumericFormat
          value={fvalue}
          prefix="$"
          thousandSeparator
          placeholder='Future Value'
          onValueChange={values => setFvalue(values.value)}
          className="input input-bordered w-auto max-w-xs"
          />
          <NumericFormat
          value={intr}
          suffix="%"
          placeholder='Interest in %'
          onValueChange={values => setIntr(values.value)}
          className="input input-bordered w-auto max-w-xs"
          />
          <NumericFormat
          value={period}
          placeholder='Period'
          onValueChange={values => setPeroid(values.value)}
          className="input input-bordered w-auto max-w-xs"
          />
        <button onClick={simpleAnnuity} className="btn w-auto back input-bordered">Calculate</button>
        <div className='items-center input input-bordered justify-center flex'>
          <p className=''>{`${answersimp || "Answer"}`}</p>
        </div>
        
        </div>
      </div>
      </details>
{/* Ordinary Annuity Calculator  */}
      <div className='space-y-6'>
        {/* Future Value of Ordinary Annuity */}
        <details className="collapse collapse-arrow bg-base-200">
  <summary className="collapse-title sm:text-xl text-md font-pilcrow font-medium">Future Value of Ordinary Annuity</summary>
  <div className="collapse-content"> 
        <div className='flex sm:flex-row flex-col sm:space-x-6 space-x-0 sm:space-y-0 space-y-2'>
        <NumericFormat
          value={oriFvalue}
          placeholder='Future Value'
          prefix='$'
          thousandSeparator
          onValueChange={values => setOriFvalue(values.value)}
          className="input input-bordered w-auto max-w-xs"
          />
          <NumericFormat
          value={oriFcash}
          placeholder='Cash Flow'
          prefix='$'
          thousandSeparator
          onValueChange={values => setOriFcash(values.value)}
          className="input input-bordered w-auto max-w-xs"
          />
          <NumericFormat
          value={oriFintr}
          suffix='%'
          placeholder='Interest Rate in %'
          onValueChange={values => setOriFintr(values.value)}
          className="input input-bordered w-auto max-w-xs"
          />
          <NumericFormat
          value={oriFperiod}
          placeholder='Period'
          onValueChange={values => setOriFperiod(values.value)}
          className="input input-bordered w-auto max-w-xs"
          />
        <button onClick={oriFuture} className="btn input-bordered back">Calculate</button>
        <div className='items-center input input-bordered justify-center flex'>
          <p className=''>{`${answerOrdinaryFuture || "Answer"}`}</p>
        </div>
        
        </div>
        </div>
</details>

        {/* Present Value of Ordinary Annuity */}
        <details className="collapse collapse-arrow bg-base-200">
  <summary className="collapse-title sm:text-xl text-md font-pilcrow font-medium">Present Value of Ordinary Annuity</summary>
  <div className="collapse-content"> 
        <div className='flex sm:flex-row flex-col sm:space-x-6 space-x-0 sm:space-y-0 space-y-2'>
        <NumericFormat
          value={oriPvalue}
          placeholder='Present Value'
          prefix='$'
          thousandSeparator
          onValueChange={values => setOriPvalue(values.value)}
          className="input input-bordered w-auto max-w-xs"
          />
          <NumericFormat
          value={oriPcash}
          placeholder='Cash Flow'
          prefix='$'
          thousandSeparator
          onValueChange={values => setOriPcash(values.value)}
          className="input input-bordered w-auto max-w-xs"
          />
          <NumericFormat
          value={oriPintr}
          suffix='%'
          placeholder='Interest Rate in %'
          onValueChange={values => setOriPintr(values.value)}
          className="input input-bordered w-auto max-w-xs"
          />
          <NumericFormat
          value={oriPperiod}
          placeholder='Period'
          onValueChange={values => setOriPperiod(values.value)}
          className="input input-bordered w-auto max-w-xs"
          />
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
      <div className='space-y-6'>
        {/* Future Value of Annuity Due */}
        <details className="collapse collapse-arrow bg-base-200">
  <summary className="collapse-title sm:text-xl text-md font-pilcrow font-medium">Future Value of Annuity Due</summary>
  <div className="collapse-content"> 
        <div className='flex sm:flex-row flex-col sm:space-x-6 space-x-0 sm:space-y-0 space-y-2'>
        <NumericFormat
          value={dueFvalue}
          placeholder='Future Value'
          prefix='$'
          thousandSeparator
          onValueChange={values => setDueFvalue(values.value)}
          className="input input-bordered w-auto max-w-xs"
          />
          <NumericFormat
          value={dueFcash}
          placeholder='Cash Flow'
          prefix='$'
          thousandSeparator
          onValueChange={values => setDueFcash(values.value)}
          className="input input-bordered w-auto max-w-xs"
          />
          <NumericFormat
          value={dueFintr}
          suffix='%'
          placeholder='Interest Rate in %'
          onValueChange={values => setDueFintr(values.value)}
          className="input input-bordered w-auto max-w-xs"
          />
          <NumericFormat
          value={dueFperiod}
          placeholder='Period'
          onValueChange={values => setDueFperiod(values.value)}
          className="input input-bordered w-auto max-w-xs"
          />
        <button onClick={dueFuture} className="btn input-bordered back">Calculate</button>
        <div className='items-center input input-bordered justify-center flex'>
          <p className=''>{`${answerDueFuture || "Answer"}`}</p>
        </div>
        
        </div>
        </div>
        </details>

        {/* Present Value of Annuity DUe */}
        <details className="collapse collapse-arrow bg-base-200">
  <summary className="collapse-title sm:text-xl text-md font-pilcrow font-medium">Present Value of Annuity Due</summary>
  <div className="collapse-content"> 
        <div className='flex sm:flex-row flex-col sm:space-x-6 space-x-0 sm:space-y-0 space-y-2'>
        <NumericFormat
          value={duePvalue}
          placeholder='Present Value'
          prefix='$'
          thousandSeparator
          onValueChange={values => setDuePvalue(values.value)}
          className="input input-bordered w-auto max-w-xs"
          />
          <NumericFormat
          value={duePcash}
          placeholder='Cash Flow'
          prefix='$'
          thousandSeparator
          onValueChange={values => setDuePcash(values.value)}
          className="input input-bordered w-auto max-w-xs"
          />
          <NumericFormat
          value={duePintr}
          suffix='%'
          placeholder='Interest Rate in %'
          onValueChange={values => setDuePintr(values.value)}
          className="input input-bordered w-auto max-w-xs"
          />
          <NumericFormat
          value={duePperiod}
          placeholder='Period'
          onValueChange={values => setDuePperiod(values.value)}
          className="input input-bordered w-auto max-w-xs"
          />
        <button onClick={duePresent} className="btn input-bordered back">Calculate</button>
        <div className='items-center input input-bordered justify-center flex'>
          <p className=''>{`${answerDuePresent || "Answer"}`}</p>
        </div>
        </div>
        </div>
</details>

{/* Present Value of Growing Annuity */}
<details className="collapse collapse-arrow bg-base-200">
  <summary className="collapse-title sm:text-xl text-md font-pilcrow font-medium">Present Value of Growing Annuity</summary>
  <div className="collapse-content"> 
        <div className='flex sm:flex-row flex-col sm:space-x-6 space-x-0 sm:space-y-0 space-y-2'>
        <NumericFormat
          value={gPresentValue}
          placeholder='Present Value'
          prefix='$'
          thousandSeparator
          onValueChange={values => setGPresentValue(values.value)}
          className="input input-bordered sm:w-1/5 w-auto max-w-xs"
          />
          <NumericFormat
          value={gCashflow}
          placeholder='Cash Flow'
          prefix='$'
          thousandSeparator
          onValueChange={values => setGCashflow(values.value)}
          className="input input-bordered sm:w-1/5 w-auto max-w-xs"
          />
          <NumericFormat
          value={gIntr}
          suffix='%'
          placeholder='Interest Rate in %'
          onValueChange={values => setGIntr(values.value)}
          className="input input-bordered sm:w-1/5 w-auto max-w-xs"
          />
          <NumericFormat
          value={gRateAnnu}
          suffix='%'
          placeholder='Growth Rate in %'
          onValueChange={values => setGRateAnnu(values.value)}
          className="input input-bordered sm:w-1/5 w-auto max-w-xs"
          />
          <NumericFormat
          value={gPeriod}
          placeholder='Period'
          onValueChange={values => setGPeriod(values.value)}
          className="input input-bordered sm:w-1/5 w-auto max-w-xs"
          />
        <button onClick={calGAnnu} className="btn input-bordered back">Calculate</button>
        <div className='items-center input input-bordered justify-center flex'>
          <p className=''>{`${answerGAnnu || "Answer"}`}</p>
        </div>
        </div>
        </div>
</details>

{/* EAR Effective Annual Rate */}
<details className="collapse collapse-arrow bg-base-200">
  <summary className="collapse-title sm:text-xl text-md font-pilcrow font-medium">Effective Annual Rate</summary>
  <div className="collapse-content"> 
        <div className='flex sm:flex-row flex-col sm:space-x-6 space-x-0 sm:space-y-0 space-y-2'>
        <NumericFormat
          value={expar}
          suffix='%'
          placeholder='Effective Rate in %'
          onValueChange={values => setExpar(values.value)}
          className="input input-bordered w-auto max-w-xs"
          />
          <NumericFormat
          value={quoteRate}
          suffix='%'
          placeholder='Quote Rate in %'
          onValueChange={values => setQuoteRate(values.value)}
          className="input input-bordered w-auto max-w-xs"
          />
          <NumericFormat
          value={freqComp}
          placeholder='Compounding per Year'
          onValueChange={values => setFreqComp(values.value)}
          className="input input-bordered w-auto max-w-xs"
          />
        <button onClick={calEAR} className="btn input-bordered back">Calculate</button>
        <div className='items-center input input-bordered justify-center flex'>
          <p className=''>{`${answerEAR || "Answer"}`}</p>
        </div>
        </div>
        </div>
</details>


{/* Prepetual Investment Return */}
<details className="collapse collapse-arrow bg-base-200">
  <summary className="collapse-title sm:text-xl text-md font-pilcrow font-medium">Prepetual Investment Return</summary>
  <div className="collapse-content"> 
        <div className='flex sm:flex-row flex-col sm:space-x-6 space-x-0 sm:space-y-0 space-y-2'>
        <NumericFormat
          value={prepFuture}
          placeholder='Present Value'
          prefix='$'
          thousandSeparator
          onValueChange={values => setPrepFuture(values.value)}
          className="input input-bordered sm:w-1/5 w-auto max-w-xs"
          />
          <NumericFormat
          value={prepCashflow}
          placeholder='Cash Flow'
          prefix='$'
          thousandSeparator
          onValueChange={values => setPrepCashflow(values.value)}
          className="input input-bordered sm:w-1/5 w-auto max-w-xs"
          />
          <NumericFormat
          value={prepintr}
          suffix='%'
          placeholder='Interest Rate in %'
          onValueChange={values => setPrepintr(values.value)}
          className="input input-bordered sm:w-1/5 w-auto max-w-xs"
          />
        <button onClick={calPrep} className="btn input-bordered back">Calculate</button>
        <div className='items-center input input-bordered justify-center flex'>
          <p className=''>{`${answerPrepsimp || "Answer"}`}</p>
        </div>
        </div>
        </div>
</details>


{/* Growing Prepetual Investment Return */}
<details className="collapse collapse-arrow bg-base-200">
  <summary className="collapse-title sm:text-xl text-md font-pilcrow font-medium"> Growing Prepetual Investment Return</summary>
  <div className="collapse-content"> 
        <div className='flex sm:flex-row flex-col sm:space-x-6 space-x-0 sm:space-y-0 space-y-2'>
        <NumericFormat
          value={gPrepFuture}
          placeholder='Present Value'
          prefix='$'
          thousandSeparator
          onValueChange={values => setGPrepFuture(values.value)}
          className="input input-bordered sm:w-1/5 w-auto max-w-xs"
          />
          <NumericFormat
          value={gPrepCashflow}
          placeholder='Cash Flow'
          prefix='$'
          thousandSeparator
          onValueChange={values => setGPrepCashflow(values.value)}
          className="input input-bordered sm:w-1/5 w-auto max-w-xs"
          />
          <NumericFormat
          value={gPrepintr}
          suffix='%'
          placeholder='Interest Rate in %'
          onValueChange={values => setGPrepintr(values.value)}
          className="input input-bordered sm:w-1/5 w-auto max-w-xs"
          />
          <NumericFormat
          value={gRate}
          suffix='%'
          placeholder='Growth Rate in %'
          onValueChange={values => setGRate(values.value)}
          className="input input-bordered sm:w-1/5 w-auto max-w-xs"
          />
        <button onClick={callGPrep} className="btn input-bordered back">Calculate</button>
        <div className='items-center input input-bordered justify-center flex'>
          <p className=''>{`${answerGPrepsimp || "Answer"}`}</p>
        </div>
        </div>
        </div>
</details>

{/* Bond value Calculator  */}
<details className="collapse collapse-arrow bg-base-200">
  <summary className="collapse-title sm:text-xl text-md font-pilcrow font-medium">Bond Value</summary>
  <div className="collapse-content"> 
        <div className='flex sm:flex-row flex-col sm:space-x-6 space-x-0 sm:space-y-0 space-y-2'>
        <NumericFormat
          value={bondValue}
          prefix="$"
          thousandSeparator
          placeholder='Bond Value'
          onValueChange={values => setBondValue(values.value)}
          className="input input-bordered sm:w-1/5 w-auto max-w-xs"
          />
          <NumericFormat
          value={faceValue}
          prefix="$"
          thousandSeparator
          placeholder='Face Value'
          onValueChange={values => setFaceValue(values.value)}
          className="input input-bordered sm:w-1/5 w-auto max-w-xs"
          />
          <NumericFormat
          value={couponAmount}
          prefix="$"
          thousandSeparator
          placeholder='Coupon Amount'
          onValueChange={values => setCouponAmount(values.value)}
          className="input input-bordered sm:w-1/5 w-auto max-w-xs"
          />
          <NumericFormat
          value={yeildRate}
          suffix='%'
          placeholder='Yeild Rate in % eg: 10'
          onValueChange={values => setYeildRate(values.value)}
          className="input input-bordered sm:w-1/5 w-auto max-w-xs"
          />
        <NumericFormat
          value={bondPeriod}
          placeholder='Maturity Period'
          onValueChange={values => setBondPeriod(values.value)}
          className="input input-bordered sm:w-1/5 w-auto max-w-xs"
          />
        <button onClick={calBondValue} className="btn w-auto back input-bordered">Calculate</button>
        <div className='items-center input input-bordered justify-center flex'>
          <p className=''>{`${answerBondValue || "Answer"}`}</p>
        </div>
        
        </div>
      </div>
      </details>
      </div>
     
    </div>
  )
}

export default Home