import React from 'react'
import generalImg from '../assets/images/Genaral.png'

function About() {
  return (
    <section className="flex justify-center items-center py-16 bg-isabelline dark:bg-eerie-black-2">
      <div className="flex flex-col md:flex-row items-center max-w-5xl w-full px-4">
        <div className="flex-shrink-0 flex justify-center items-center mb-8 md:mb-0 md:mr-12" style={{ flex: '0 0 320px' }}>
          <img
            src={generalImg}
            alt="The General A.R."
            className="w-80 h-80 rounded-xl object-cover shadow-lg"
          />
        </div>
        <div className="max-w-xl w-full text-left">
          <h2 className="text-center font-bold text-3xl mb-2 tracking-wide text-eerie-black-1 dark:text-white">
            About “The General” A.R.
          </h2>
          <h3 className="text-center text-selective-purple font-bold mb-8 text-lg tracking-widest">
            THE FIVE-STAR BLUEPRINT FOR DOMINATION
          </h3>
          <p className="mb-4 text-base text-eerie-black-1 dark:text-gray-x-11">
            Born in 1997, The General A.R. isn’t your average mentor — he’s a calculated tactician, a relentless executor, and the founder of YSB Academy: a digital stronghold for warriors who want to dominate in the worlds of trading, e-commerce, AI/content creation, and copywriting.
          </p>
          <p className="mb-4 text-base text-eerie-black-1 dark:text-gray-x-11">
            While most follow the system, he broke it.
          </p>
          <p className="mb-4 text-base text-eerie-black-1 dark:text-gray-x-11">
            With nothing but obsession, logic, and hunger for results, A.R. stepped into the financial markets in 2021 — not with luck, but with a strategy. He mastered Forex, synthetic indices, and cryptocurrencies, not by chance, but by treating the charts like a battlefield: with precision, discipline, and zero emotion.
          </p>
          <p className="mb-4 text-base text-eerie-black-1 dark:text-gray-x-11">
            But trading is just the beginning.
          </p>
          <p className="mb-4 text-base text-eerie-black-1 dark:text-gray-x-11">
            The General realized the real edge lies in building income systems that compound — and then scaling those systems through automation, content, and digital leverage. That’s when YSB Academy was born — not as another course, but as a campus of killers.
          </p>
          <p className="mb-4 text-base text-eerie-black-1 dark:text-gray-x-11">
            Inside YSB, you’re not just learning from one man.<br />
            You're trained by real teachers — people already making money from the exact skills they teach. Every instructor has been in the trenches, turned knowledge into cash, and now they pass that system to you. No theorists. No pretenders. Just real operators with real receipts.
          </p>
          <ul className="mb-4 text-base text-eerie-black-1 dark:text-gray-x-11 list-disc pl-5">
            <li>Cracking algorithms to go viral and monetize content</li>
            <li>Using AI to automate income and build authority fast</li>
            <li>Writing copy that prints cash like a machine</li>
            <li>Or building ecom stores that scale without touching inventory</li>
          </ul>
          <p className="mb-4 text-base text-eerie-black-1 dark:text-gray-x-11">
            Every mentor inside YSB is proof of concept.
          </p>
          <p className="mb-4 text-base text-eerie-black-1 dark:text-gray-x-11">
            And every lesson, every strategy, every community inside this fortress is built to instill one truth:
          </p>
          <p className="font-bold text-selective-purple text-base mb-4">
            Success is war — and the weak don’t survive.
          </p>
          <p className="text-base text-eerie-black-1 dark:text-gray-x-11">
            This is your call to arms.<br />
            Follow the blueprint.<br />
            Rise through the ranks.<br />
            And earn your five stars.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About