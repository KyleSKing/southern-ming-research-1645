
import React from 'react';

const Yangzhou1645 = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-white p-8 font-mono selection:bg-red-600">
      {/* HEADER SECTION */}
      <header className="border-8 border-white p-6 mb-12 transform -rotate-1 shadow-[12px_12px_0px_0px_rgba(255,0,0,1)] hover:rotate-0 transition-transform duration-300">
        <h1 className="text-7xl font-black uppercase tracking-tighter leading-none">
          YANGZHOU <br />
          <span className="text-red-600">FALLS</span> 1645
        </h1>
        <div className="mt-4 flex justify-between items-end border-t-4 border-white pt-4">
          <p className="text-xl font-bold italic underline decoration-red-600">THE REASON FOR THE COLLAPSE OF SOUTHERN MING</p>
          <span className="bg-white text-black px-4 py-2 font-black text-2xl uppercase">Classified Report</span>
        </div>
      </header>

      {/* CORE DATA BLOCKS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* POLITICAL BLOCK */}
        <div className="border-4 border-white p-6 hover:bg-white hover:text-black transition-colors duration-500 cursor-pointer group">
          <span className="text-4xl font-black block mb-4 border-b-2 border-red-600 pb-2">01 POLITICS</span>
          <h3 className="text-2xl font-bold mb-4 uppercase">Fragmentation of Legitimacy</h3>
          <p className="leading-tight group-hover:font-medium">
            While Southern Song had one legitimate heir (Zhao Gou), Southern Ming suffered from 
            competing claimants (Hongguang, Tang, Lu). Internal strife outpaced defense.
            <br /><br />
            <span className="text-red-500 font-black group-hover:text-black italic">"INTERNAL CONSUMPTION KILLS NATIONS."</span>
          </p>
        </div>

        {/* SOCIAL BLOCK */}
        <div className="border-4 border-white p-6 hover:bg-white hover:text-black transition-colors duration-500 cursor-pointer group">
          <span className="text-4xl font-black block mb-4 border-b-2 border-red-600 pb-2">02 SOCIETY</span>
          <h3 className="text-2xl font-bold mb-4 uppercase">Elite Betrayal</h3>
          <p className="leading-tight group-hover:font-medium">
            Local gentry chose stability under Qing over predatory taxation under Ming generals. 
            The alliance between Manchu and Han elites isolated the Southern Ming regime.
            <br /><br />
            <span className="text-red-500 font-black group-hover:text-black italic">"ORDER > LOYALTY."</span>
          </p>
        </div>

        {/* ECONOMIC BLOCK */}
        <div className="border-4 border-white p-6 hover:bg-white hover:text-black transition-colors duration-500 cursor-pointer group">
          <span className="text-4xl font-black block mb-4 border-b-2 border-red-600 pb-2">03 ECONOMY</span>
          <h3 className="text-2xl font-bold mb-4 uppercase">Predatory Finance</h3>
          <p className="leading-tight group-hover:font-medium">
            Southern Ming lacked a taxation system. Armies survived by looting (Jiangbei Four Towns). 
            Song had tea/salt taxes; Ming had only plunder.
            <br /><br />
            <span className="text-red-500 font-black group-hover:text-black italic">"LOOTING IS NOT A REVENUE MODEL."</span>
          </p>
        </div>
      </div>

      {/* THE FALL OF YANGZHOU SECTION */}
      <section className="relative border-r-8 border-b-8 border-white p-10 bg-red-600 text-white mb-20">
        <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-black py-2 px-8 border-4 border-white font-black text-3xl uppercase rotate-6">
          Impact Point
        </div>
        <h2 className="text-6xl font-black uppercase mb-6 drop-shadow-lg">10 DAYS OF MASSACRE</h2>
        <div className="text-2xl font-bold space-y-4 max-w-4xl">
          <p>YANGZHOU was the pivot. Its fall meant the end of the Huaihe defense line.</p>
          <p className="border-l-8 border-black pl-6 py-2 bg-neutral-900/20">
            The failure was not just military—it was the total collapse of the 
            social mobilization capability of the Southern Ming.
          </p>
        </div>
      </section>

      {/* FOOTER - THE SOUL OF RESEARCH */}
      <footer className="flex flex-wrap gap-4 items-center">
        <span className="bg-white text-black px-3 py-1 font-bold">RESEARCHED BY OPENCLAW 2026</span>
        <span className="border-2 border-red-600 px-3 py-1 text-red-600 font-bold uppercase hover:bg-red-600 hover:text-white cursor-pointer">Export to Google Drive</span>
        <span className="italic ml-auto opacity-50">Ref: Gu Cheng, History of Southern Ming.</span>
      </footer>
    </div>
  );
};

export default Yangzhou1645;
