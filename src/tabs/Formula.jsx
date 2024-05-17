import KatexSpan from "../comps/KatexSpan";

function Formula() {
  const simpleAnnuity = `$ FV = PV \\times \\left(1 + i\\right)^n$`;
  const futureOdiAnnuity = `$ FV = C \\times \\biggl[\\dfrac{\\left(1 + i\\right)^n - 1}{i}\\biggr]$`;
  const presentOdiAnnuity = `$ PV = C \\times \\biggl[\\dfrac{1- \\left(1 + i\\right)^{-n}}{i}\\biggr]$`;
  const futureDueAnnuity = `$ FV = C \\times \\biggl[\\dfrac{\\left(1 + i\\right)^n -1}{i}\\biggr] \\times \\left(1 + i\\right)$`;
  const presentDueAnnuity = `$ PV = C \\times \\biggl[\\dfrac{1- \\left(1 + i\\right)^{-n}}{i}\\biggr] \\times \\left(1 + i\\right)$`;
  const growingAnnuity = `$ PV = C \\times \\Biggl[\\dfrac{1- \\left(\\dfrac{1+g}{1+i}\\right)^{n}}{i - g}\\Biggr]$`;
  const effAR = `$ EAR = \\left(1 + \\dfrac{QR}{m}\\right)^m - 1$`;
  const prepReturn = `$ PV = \\dfrac{C}{i}$`;
  const growingPrepReturn = `$ PV = \\dfrac{C}{i-g}$`;
  const bondValue = `$ BV = C \\times \\biggl[\\dfrac{1- \\left(1 + i\\right)^{-n}}{i}\\biggr] + \\dfrac{FV}{\\left(1 + i\\right)^n}$`;

  return (
    <div className="space-y-6 p-[1rem] m-auto max-w-[1280px]">
      <div className="flex flex-col justify-start pb-4 items-start">
        <p className="font-bold font-pilcrow">Formulas</p>
        <p className="font-archivo">
          All formulas are listed. Tap on formula name to view formula.
        </p>
      </div>
      {/* Simple Annuity Calculator  */}
      <details className="collapse collapse-arrow bg-base-200">
        <summary className="collapse-title sm:text-xl text-md font-pilcrow font-medium">
          Simple Present Future Value
        </summary>
        <div className="flex flex-col justify-center pb-5">
          <div className="flex justify-center items-center">
            <KatexSpan text={simpleAnnuity} />
          </div>
          <p className="flex pl-5 font-medium">Where:</p>
          <div className="flex flex-col space-y-2 pl-5 pt-2">
            <KatexSpan text={`$FV =$ Future Value`} />
            <KatexSpan text={`$PV =$ Present Value`} />
            <KatexSpan text={`$i =$ Interest Rate`} />
            <KatexSpan text={`$n =$ Period`} />
          </div>
        </div>
      </details>
      {/* Ordinary Annuity Calculator  */}
      <div className="space-y-6">
        {/* Future Value of Ordinary Annuity */}
        <details className="collapse collapse-arrow bg-base-200">
          <summary className="collapse-title sm:text-xl text-md font-pilcrow font-medium">
            Future Value of Ordinary Annuity
          </summary>
          <div className="flex flex-col justify-center pb-5">
            <div className="flex justify-center items-center">
              <KatexSpan text={futureOdiAnnuity} />
            </div>
            <p className="flex pl-5 font-medium">Where:</p>
            <div className="flex flex-col space-y-2 pl-5 pt-2">
              <KatexSpan text={`$FV =$ Future Value`} />
              <KatexSpan text={`$C =$ Cash Flow`} />
              <KatexSpan text={`$i =$ Interest Rate`} />
              <KatexSpan text={`$n =$ Period`} />
            </div>
          </div>
        </details>

        {/* Present Value of Ordinary Annuity */}
        <details className="collapse collapse-arrow bg-base-200">
          <summary className="collapse-title sm:text-xl text-md font-pilcrow font-medium">
            Present Value of Ordinary Annuity
          </summary>
          <div className="flex flex-col justify-center pb-5">
            <div className="flex justify-center items-center">
              <KatexSpan text={presentOdiAnnuity} />
            </div>
            <p className="flex pl-5 font-medium">Where:</p>
            <div className="flex flex-col space-y-2 pl-5 pt-2">
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
      <div className="space-y-6">
        {/* Future Value of Annuity Due */}
        <details className="collapse collapse-arrow bg-base-200">
          <summary className="collapse-title sm:text-xl text-md font-pilcrow font-medium">
            Future Value of Annuity Due
          </summary>
          <div className="flex flex-col justify-center pb-5">
            <div className="flex justify-center sm:text-lg text-sm items-center">
              <KatexSpan text={futureDueAnnuity} />
            </div>
            <p className="flex pl-5 font-medium">Where:</p>
            <div className="flex flex-col space-y-2 pl-5 pt-2">
              <KatexSpan text={`$FV =$ Future Value`} />
              <KatexSpan text={`$C =$ Cash Flow`} />
              <KatexSpan text={`$i =$ Interest Rate`} />
              <KatexSpan text={`$n =$ Period`} />
            </div>
          </div>
        </details>

        {/* Present Value of Annuity DUe */}
        <details className="collapse collapse-arrow bg-base-200">
          <summary className="collapse-title sm:text-xl text-md font-pilcrow font-medium">
            Present Value of Annuity Due
          </summary>
          <div className="flex flex-col justify-center pb-5">
            <div className="flex justify-center sm:text-lg text-sm items-center">
              <KatexSpan text={presentDueAnnuity} />
            </div>
            <p className="flex pl-5 font-medium">Where:</p>
            <div className="flex flex-col space-y-2 pl-5 pt-2">
              <KatexSpan text={`$PV =$ Present Value`} />
              <KatexSpan text={`$C =$ Cash Flow`} />
              <KatexSpan text={`$i =$ Interest Rate`} />
              <KatexSpan text={`$n =$ Period`} />
            </div>
          </div>
        </details>

        {/* Present Value of Growing Annuity */}
        <details className="collapse collapse-arrow bg-base-200">
          <summary className="collapse-title sm:text-xl text-md font-pilcrow font-medium">
            Present Value of Growing Annuity
          </summary>
          <div className="flex flex-col justify-center pb-5">
            <div className="flex justify-center items-center">
              <KatexSpan text={growingAnnuity} />
            </div>
            <p className="flex pl-5 font-medium">Where:</p>
            <div className="flex flex-col space-y-2 pl-5 pt-2">
              <KatexSpan text={`$PV =$ Present Value`} />
              <KatexSpan text={`$C =$ Cash Flow`} />
              <KatexSpan text={`$i =$ Interest Rate`} />
              <KatexSpan text={`$g =$ Growing Rate`} />
              <KatexSpan text={`$n =$ Period`} />
            </div>
          </div>
        </details>

        {/* EAR Effective Annual Rate */}
        <details className="collapse collapse-arrow bg-base-200">
          <summary className="collapse-title sm:text-xl text-md font-pilcrow font-medium">
            Effective Annual Rate
          </summary>
          <div className="flex flex-col justify-center pb-5">
            <div className="flex justify-center items-center">
              <KatexSpan text={effAR} />
            </div>
            <p className="flex pl-5 font-medium">Where:</p>
            <div className="flex flex-col space-y-2 pl-5 pt-2">
              <KatexSpan text={`$EAR =$ Effective Annual Rate`} />
              <KatexSpan text={`$QR =$ Quote Rate`} />
              <KatexSpan text={`$m =$ No. of Compounding`} />
            </div>
          </div>
        </details>

        {/* Prepetual Investment Return */}
        <details className="collapse collapse-arrow bg-base-200">
          <summary className="collapse-title sm:text-xl text-md font-pilcrow font-medium">
            Prepetual Investment Return
          </summary>
          <div className="flex flex-col justify-center pb-5">
            <div className="flex justify-center items-center">
              <KatexSpan text={prepReturn} />
            </div>
            <p className="flex pl-5 font-medium">Where:</p>
            <div className="flex flex-col space-y-2 pl-5 pt-2">
              <KatexSpan text={`$PV =$ Present Value`} />
              <KatexSpan text={`$C =$ Cash Flow`} />
              <KatexSpan text={`$i =$ Interest Rate`} />
            </div>
          </div>
        </details>

        {/* Growing Prepetual Investment Return */}
        <details className="collapse collapse-arrow bg-base-200">
          <summary className="collapse-title sm:text-xl text-md font-pilcrow font-medium">
            {" "}
            Growing Prepetual Investment Return
          </summary>
          <div className="flex flex-col justify-center pb-5">
            <div className="flex justify-center items-center">
              <KatexSpan text={growingPrepReturn} />
            </div>
            <p className="flex pl-5 font-medium">Where:</p>
            <div className="flex flex-col space-y-2 pl-5 pt-2">
              <KatexSpan text={`$PV =$ Present Value`} />
              <KatexSpan text={`$C =$ Cash Flow`} />
              <KatexSpan text={`$i =$ Interest Rate`} />
              <KatexSpan text={`$g =$ Growth Rate`} />
            </div>
          </div>
        </details>

        {/* Bond Value */}
        <details className="collapse collapse-arrow bg-base-200">
          <summary className="collapse-title sm:text-xl text-md font-pilcrow font-medium">
            Bond Value
          </summary>
          <div className="flex flex-col justify-center pb-5">
            <div className="flex justify-center sm:text-lg text-sm items-center">
              <KatexSpan text={bondValue} />
            </div>
            <p className="flex pl-5 font-medium">Where:</p>
            <div className="flex flex-col space-y-2 pl-5 pt-2">
              <KatexSpan text={`$BV =$ Bond Value`} />
              <KatexSpan text={`$FV =$ Face Value`} />
              <KatexSpan text={`$C =$ Coupon Amount`} />
              <KatexSpan text={`$i =$ Yeild Rate`} />
              <KatexSpan text={`$n =$ Period of Maturity`} />
            </div>
          </div>
        </details>
      </div>
    </div>
  );
}

export default Formula;
