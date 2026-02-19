
import React from 'react';

export default function Dashboard() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      {/* Original body content wrapped */}

<div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">

<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 lg:px-10 py-3 bg-background-light dark:bg-background-dark sticky top-0 z-50">
<div className="flex items-center gap-8">
<div className="flex items-center gap-3 text-primary">
<div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg">
<span className="material-symbols-outlined text-primary">auto_stories</span>
</div>
<h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">Modern Library</h2>
</div>
<label className="hidden md:flex flex-col min-w-40 h-10 max-w-64">
<div className="flex w-full flex-1 items-stretch rounded-lg h-full overflow-hidden">
<div className="text-slate-500 dark:text-slate-400 flex border-none bg-slate-100 dark:bg-slate-800 items-center justify-center pl-4">
<span className="material-symbols-outlined text-xl">search</span>
</div>
<input className="form-input flex w-full min-w-0 flex-1 border-none bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-0 h-full placeholder:text-slate-500 dark:placeholder:text-slate-400 px-4 pl-2 text-sm font-normal" placeholder="Search books, authors, events..." defaultValue=""/>
</div>
</label>
</div>
<div className="flex flex-1 justify-end gap-4 lg:gap-8">
<nav className="hidden lg:flex items-center gap-6">
<a className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-sm font-medium" href="#">Catalog</a>
<a className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-sm font-medium" href="#">E-books</a>
<a className="text-primary text-sm font-semibold" href="#">My Dashboard</a>
<a className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-sm font-medium" href="#">Locations</a>
</nav>
<div className="flex gap-2">
<button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
<span className="material-symbols-outlined">settings</span>
</button>
</div>
<div className="bg-primary/20 rounded-full size-10 flex items-center justify-center border-2 border-primary" data-alt="User avatar placeholder with abstract colors">
<span className="material-symbols-outlined text-primary">person</span>
</div>
</div>
</header>
<main className="flex-1 px-4 lg:px-10 py-8 max-w-[1400px] mx-auto w-full">

<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
<div className="flex items-center gap-6">
<div className="size-24 rounded-2xl bg-slate-200 dark:bg-slate-800 overflow-hidden relative border-4 border-white dark:border-slate-800 shadow-xl" data-alt="Portrait of library member Alex Johnson">
<img alt="Alex Johnson" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWsgGHBpy7dje3D4yfj8hoCZ53LaiOuPi2bLPfedRl4SDZarBn_WW6YkwjbGFFZBi1gCueqVXte5MLUtRa3WYQE9Y-rkNiMMP2sg6f4HBXfq9krl2nF7fR2yKuekDGeX8eo0e8NhPPeLUJ45Z_hDIbUPLMZZYfnlkYT0yL6u1rYb2h7G8CMf4DPMPSHQsF2sjMEjB3OsVJwq8_k2kmwiI8ahLPlHkNghdTRJh_zAYPk-r6criLC5_M131cndkJKGM1qlH810e4WPk"/>
</div>
<div>
<h1 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">Hi, Alex!</h1>
<p className="text-slate-500 dark:text-slate-400 text-sm lg:text-base mt-1">
                                Library Card: <span className="font-mono font-bold text-primary">#LIB-88293-XP</span> • Member since 2021
                            </p>
</div>
</div>
<div className="flex flex-wrap gap-3">
<div className="flex flex-col items-center justify-center px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
<p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Fine Balance</p>
<p className="text-2xl font-black text-green-500">$0.00</p>
</div>
<div className="flex flex-col items-center justify-center px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
<p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Books Read (2024)</p>
<p className="text-2xl font-black text-primary">24 <span className="text-xs text-primary/70 font-medium ml-1">+15%</span></p>
</div>
<button className="flex items-center justify-center rounded-xl px-6 py-3 bg-primary text-white font-bold text-sm shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all gap-2">
<span className="material-symbols-outlined text-lg">credit_card</span>
                            View Card
                        </button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-8 space-y-10">

<section>
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-extrabold flex items-center gap-2">
<span className="material-symbols-outlined text-primary">menu_book</span>
                                    Currently Checked Out
                                </h2>
<span className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full text-xs font-bold text-slate-500 uppercase tracking-widest">3 Items</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="flex gap-4 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-all">
<div className="w-24 h-36 flex-shrink-0 bg-slate-200 dark:bg-slate-700 rounded-lg overflow-hidden shadow-inner" data-alt="Book cover of The Midnight Library">
<img alt="The Midnight Library" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBh8mquhQJfchVZFYA8O_bFJXEHGomfrDmHr8XctRURkXNi7X4djZE3kw20cvsNzdp047r1MoimdCiEmihlh5X8L5d97v10C6IwGE4Qr-l7PAPJ_1q9Ew9vZHFT1B2-Fb5N8bFuk_95RXvEuSdVLfTxuQdaTBqZIoqfFY_mc86X7NGOZ_Asx6oovxS90tCev67oUcR3iyMZJxCPrRPOHUs7Opwt7i134HTOeH4nBfrymTYdHZxzMPm-5MxVP7m-r_Y6XPfvyeXJJYw"/>
</div>
<div className="flex flex-col justify-between flex-1">
<div>
<h3 className="font-bold text-slate-900 dark:text-white leading-tight">The Midnight Library</h3>
<p className="text-xs text-slate-500 mt-1">by Matt Haig</p>
<div className="mt-3 flex items-center gap-2 text-amber-500 font-bold text-[11px] uppercase tracking-tighter">
<span className="material-symbols-outlined text-sm">schedule</span>
                                                Due in 4 days
                                            </div>
</div>
<button className="w-full mt-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg text-xs font-bold transition-all">Renew Item</button>
</div>
</div>

<div className="flex gap-4 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-all">
<div className="w-24 h-36 flex-shrink-0 bg-slate-200 dark:bg-slate-700 rounded-lg overflow-hidden shadow-inner" data-alt="Book cover of Project Hail Mary">
<img alt="Project Hail Mary" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDWK0BoXuEfD7HkXYh9N403ZZOdpUecOGnIu8lq6PhsPqaOFJDnahvIyY2Nk8mceSnKjsx2aAEMqc3N9rmIpWBBHRRO3m2j2r2iyrHURAIig0GXV45woLf-HQBAw6bZxNOJrGg0M_KVyKm3QDW26BoyA6cKYpyhMSg3otU4Z86SCB62GNmDEhC3qRYpqJKQotT04uvwSFDfNKZ7el6gZ8oYW2KHefJVbEOUkOXzpOwVb-mnUNNVkm7ZC5phsY2w7QK76aald5HGE0"/>
</div>
<div className="flex flex-col justify-between flex-1">
<div>
<h3 className="font-bold text-slate-900 dark:text-white leading-tight">Project Hail Mary</h3>
<p className="text-xs text-slate-500 mt-1">by Andy Weir</p>
<div className="mt-3 flex items-center gap-2 text-slate-400 font-bold text-[11px] uppercase tracking-tighter">
<span className="material-symbols-outlined text-sm">event_available</span>
                                                Due in 18 days
                                            </div>
</div>
<button className="w-full mt-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg text-xs font-bold transition-all">Renew Item</button>
</div>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-extrabold flex items-center gap-2">
<span className="material-symbols-outlined text-primary">hourglass_empty</span>
                                    Active Holds
                                </h2>
<a className="text-xs font-bold text-primary hover:underline" href="#">Manage All</a>
</div>
<div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700/50 overflow-hidden">
<div className="p-4 border-b border-slate-200 dark:border-slate-700/50 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined">auto_stories</span>
</div>
<div>
<h4 className="font-bold text-sm text-slate-900 dark:text-white">Tomorrow, and Tomorrow, and Tomorrow</h4>
<p className="text-xs text-slate-500">Gabrielle Zevin</p>
</div>
</div>
<div className="text-right">
<p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Queue Status</p>
<span className="px-3 py-1 bg-amber-500/10 text-amber-500 rounded-full text-[10px] font-black uppercase">2nd in line</span>
</div>
</div>
<div className="px-4 py-3 bg-slate-50 dark:bg-slate-900/50 flex items-center justify-between">
<div className="flex-1 max-w-[200px]">
<p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Estimated Wait</p>
<div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{width: "85%"}}></div>
</div>
</div>
<p className="text-xs font-bold text-slate-600 dark:text-slate-300">~ 4 Days</p>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-extrabold flex items-center gap-2">
<span className="material-symbols-outlined text-primary">history</span>
                                    Reading History
                                </h2>
<button className="text-xs font-bold text-slate-400 hover:text-primary transition-colors flex items-center gap-1">
                                    View Full History
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
<div className="space-y-3">
<div className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors group">
<div className="w-12 h-16 bg-slate-200 dark:bg-slate-700 rounded-md overflow-hidden" data-alt="Cover of Atomic Habits">
<img alt="Atomic Habits" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2CHgEj-wF0zBxvKMd5I9zF3ipRJRP1G01fvnVXqXcOT317fF2LwSlLspS7kT1Zs8-TIT62kOO4QBiGWjmq91xw5OEkP41QNmmbF_W5JQrYDXh4m3kZNolp9sDics2d-M6eiD2MoLscfQ7IQBfPUVj8hnMcpyn1RHySXpCOHRd8sl6imTX4d6fZO7H6xAu9D4BD7OS9nGw-Jl0RKrAoAJrIHAN2OdqNY3KRXk2lfd9cxqDihN_Bp1KWdo7E_BOqqXF7GenNLl6I0A"/>
</div>
<div className="flex-1">
<h4 className="font-bold text-sm">Atomic Habits</h4>
<p className="text-xs text-slate-500 italic">Returned on Oct 12, 2024</p>
</div>
<div className="flex items-center gap-1 text-primary">
<span className="material-symbols-outlined fill-1 text-sm">star</span>
<span className="text-xs font-bold">5.0</span>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 text-slate-400 hover:text-primary">
<span className="material-symbols-outlined">add_circle</span>
</button>
</div>
<div className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors group">
<div className="w-12 h-16 bg-slate-200 dark:bg-slate-700 rounded-md overflow-hidden" data-alt="Cover of Circe">
<img alt="Circe" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU07KnfgXY1D6bP-AWYOYZqU3kJpbBTBlDMoBosgDvX-DiKi0RADRsvNgHFroq3SuhaCNruLTWmcDJfCEShXtkwgHCHUw4AQkW1pk78sa4oUKvI4hP-c1w5ngXQ_cxqiu0IeO7REwnKtsFTl-7b16x3c9fO8wdxBzIFyup1bxKaCCmv7LjjCXSQU2P3GLqFcjjL3uUlse6Bfa83gch8n23g36fMNsfLlGx7D52W0m1XRMyGVSwYTJfKZzKbclsZv1R-VDlJH4R3n0"/>
</div>
<div className="flex-1">
<h4 className="font-bold text-sm">Circe</h4>
<p className="text-xs text-slate-500 italic">Returned on Sept 28, 2024</p>
</div>
<div className="flex items-center gap-1 text-slate-400">
<span className="material-symbols-outlined text-sm">star</span>
<span className="text-xs font-bold">Rate</span>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 text-slate-400 hover:text-primary">
<span className="material-symbols-outlined">add_circle</span>
</button>
</div>
</div>
</section>
</div>

<div className="lg:col-span-4 space-y-10">

<section>
<h2 className="text-xl font-extrabold flex items-center gap-2 mb-6">
<span className="material-symbols-outlined text-primary">calendar_month</span>
                                My Events
                            </h2>
<div className="space-y-4">

<div className="p-4 rounded-xl bg-primary/10 border border-primary/20 relative overflow-hidden">
<div className="absolute -right-4 -top-4 text-primary/10 pointer-events-none">
<span className="material-symbols-outlined text-8xl">event</span>
</div>
<div className="flex items-start gap-4">
<div className="flex flex-col items-center justify-center bg-white dark:bg-slate-800 rounded-lg p-2 min-w-[50px] shadow-sm">
<span className="text-[10px] font-black uppercase text-primary">Nov</span>
<span className="text-xl font-black text-slate-900 dark:text-white leading-none">14</span>
</div>
<div>
<h3 className="font-bold text-sm leading-tight text-slate-900 dark:text-white">Sci-Fi Book Club: Deep Space</h3>
<p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
<span className="material-symbols-outlined text-xs">location_on</span>
                                                Central Branch • 6:30 PM
                                            </p>
</div>
</div>
<button className="w-full mt-4 py-2 bg-white dark:bg-slate-800 text-primary border border-primary/20 hover:border-primary rounded-lg text-xs font-bold transition-all">View Registration</button>
</div>

<div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/50 shadow-sm">
<div className="flex items-start gap-4">
<div className="flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-900/50 rounded-lg p-2 min-w-[50px]">
<span className="text-[10px] font-black uppercase text-slate-400">Nov</span>
<span className="text-xl font-black text-slate-900 dark:text-white leading-none">22</span>
</div>
<div>
<h3 className="font-bold text-sm leading-tight text-slate-900 dark:text-white">Author Talk: Emily Henry</h3>
<p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
<span className="material-symbols-outlined text-xs">videocam</span>
                                                Virtual Webinar • 2:00 PM
                                            </p>
</div>
</div>
</div>
</div>
<button className="w-full mt-4 flex items-center justify-center gap-2 text-slate-500 text-sm font-bold hover:text-primary transition-colors">
<span className="material-symbols-outlined text-lg">add</span>
                                Browse More Events
                            </button>
</section>

<section className="p-6 rounded-2xl bg-slate-900 text-white relative overflow-hidden shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-transparent"></div>
<div className="relative z-10">
<h3 className="text-lg font-bold mb-2">Picked for You</h3>
<p className="text-slate-300 text-xs mb-6">Based on your love for Space Sci-Fi</p>
<div className="flex gap-4 items-center">
<div className="w-16 h-24 bg-white/20 rounded shadow-lg overflow-hidden flex-shrink-0" data-alt="Cover of The Martian">
<img alt="The Martian" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqx4xlstzSui4cpHyVUmE7tCDs9Kt9NvRRyCxyDE4imSSseGlmegzjJb8X2NVbPImQNoWDkVu5Pr3GO37eFxpFhH5OKVr65h75qfZGSfHmjRTIXoHnWpQOMnDaK170h8PKIl1F96Klj8R74872zzNU2MHF3-Q70BgmmXIBmSxPDo8_7NlP8_HZMY2NYMAchwrI-7g6bdtmk3WiapaccJIoi4bxNqmbANWPDv2UOs7ImPHg2QU-so_Io0ZHkp7z-dG5Jaas_UmqdI8"/>
</div>
<div>
<h4 className="font-bold text-sm">The Martian</h4>
<p className="text-xs text-slate-400">Andy Weir</p>
<div className="mt-4 flex gap-2">
<button className="bg-primary px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider">Place Hold</button>
<button className="bg-white/10 p-1.5 rounded-lg">
<span className="material-symbols-outlined text-sm">bookmark</span>
</button>
</div>
</div>
</div>
</div>
</section>

<div className="grid grid-cols-2 gap-3">
<div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/30 text-center">
<span className="material-symbols-outlined text-primary mb-2">local_library</span>
<p className="text-[10px] font-bold text-slate-400 uppercase">Home Library</p>
<p className="text-xs font-bold text-slate-700 dark:text-slate-300">Central Branch</p>
</div>
<div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/30 text-center">
<span className="material-symbols-outlined text-primary mb-2">wifi</span>
<p className="text-[10px] font-bold text-slate-400 uppercase">Daily WiFi Code</p>
<p className="text-xs font-bold font-mono text-slate-700 dark:text-slate-300">LIBR-992</p>
</div>
</div>
</div>
</div>
</main>

<footer className="mt-20 border-t border-slate-200 dark:border-slate-800 py-10 px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-slate-400">
<span className="material-symbols-outlined text-lg">auto_stories</span>
<span className="text-sm font-medium">© 2024 Modern Library Systems</span>
</div>
<div className="flex gap-8">
<a className="text-xs font-bold text-slate-400 hover:text-primary uppercase tracking-widest" href="#">Help Center</a>
<a className="text-xs font-bold text-slate-400 hover:text-primary uppercase tracking-widest" href="#">Privacy Policy</a>
<a className="text-xs font-bold text-slate-400 hover:text-primary uppercase tracking-widest" href="#">Contact Support</a>
</div>
</footer>
</div>
</div>

    </div>
  );
}
