export const Item = ({ mainHeading, subheading }) => {
    return (
        <>
      <div className="flex flex-col border border-black bg-slate-500 rounded items-center text-black w-full my-2 p-4">
        <div className="w-full bg-black text-white text-center">
          {mainHeading}
        </div>
        <div className="text-sm">{subheading}</div>
        <div>What is in this package:</div>
        <div>
          <button className="bg-blue-950 text-white rounded-md p-2 text-sm" onClick={()=> alert(`You have clicked to book the ${mainHeading} package`)}>BOOK</button>
        </div>
      </div>
      </>
    );
  };
  