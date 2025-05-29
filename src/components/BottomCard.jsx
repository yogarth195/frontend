import { Socials } from "./Social";

export const BottomCard = () => {
  return (
    <div className="mt-auto">
      <footer className="bg-black text-white pb-12 px-10 w-full mt-auto border-white dark:border-t-[0.5px] flex flex-col items-center">
        <div>
            <Socials /> 
        </div>
        <div>
          @2025 SurajStudios
        </div>
        
      </footer>
    </div>
  );
};
