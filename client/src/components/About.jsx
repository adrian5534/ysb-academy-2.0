import React from 'react'
import generalImg from '../assets/images/Genaral.png' // Place your image in src/assets/general.png

function About() {
  return (
    <section className="about-section" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '64px 0', background: '#faf8ff' }}>
      <div className="about-img" style={{ flex: '0 0 320px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '48px' }}>
        <img
          src={generalImg}
          alt="The General A.R."
          style={{ width: '320px', height: '320px', borderRadius: '16px', objectFit: 'cover', boxShadow: '0 4px 24px rgba(124,58,237,0.10)' }}
        />
      </div>
      <div className="about-content" style={{ maxWidth: '600px', textAlign: 'left' }}>
        <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: '8px', letterSpacing: '1px' }}>
          About “The General” A.R.
        </h2>
        <h3 style={{ textAlign: 'center', color: '#7c3aed', fontWeight: 700, marginBottom: '32px', fontSize: '1.15rem', letterSpacing: '2px' }}>
          THE FIVE-STAR BLUEPRINT FOR DOMINATION
        </h3>
        <p style={{ fontSize: '1.05rem', marginBottom: '18px', color: '#222' }}>
          Born in 1997, The General A.R. isn’t your average mentor — he’s a calculated tactician, a relentless executor, and the founder of YSB Academy: a digital stronghold for warriors who want to dominate in the worlds of trading, e-commerce, AI/content creation, and copywriting.
        </p>
        <p style={{ fontSize: '1.05rem', marginBottom: '18px', color: '#222' }}>
          While most follow the system, he broke it.
        </p>
        <p style={{ fontSize: '1.05rem', marginBottom: '18px', color: '#222' }}>
          With nothing but obsession, logic, and hunger for results, A.R. stepped into the financial markets in 2021 — not with luck, but with a strategy. He mastered Forex, synthetic indices, and cryptocurrencies, not by chance, but by treating the charts like a battlefield: with precision, discipline, and zero emotion.
        </p>
        <p style={{ fontSize: '1.05rem', marginBottom: '18px', color: '#222' }}>
          But trading is just the beginning.
        </p>
        <p style={{ fontSize: '1.05rem', marginBottom: '18px', color: '#222' }}>
          The General realized the real edge lies in building income systems that compound — and then scaling those systems through automation, content, and digital leverage. That’s when YSB Academy was born — not as another course, but as a campus of killers.
        </p>
        <p style={{ fontSize: '1.05rem', marginBottom: '18px', color: '#222' }}>
          Inside YSB, you’re not just learning from one man.<br />
          You're trained by real teachers — people already making money from the exact skills they teach. Every instructor has been in the trenches, turned knowledge into cash, and now they pass that system to you. No theorists. No pretenders. Just real operators with real receipts.
        </p>
        <ul style={{ fontSize: '1.05rem', marginBottom: '18px', color: '#222', paddingLeft: '20px' }}>
          <li>Cracking algorithms to go viral and monetize content</li>
          <li>Using AI to automate income and build authority fast</li>
          <li>Writing copy that prints cash like a machine</li>
          <li>Or building ecom stores that scale without touching inventory</li>
        </ul>
        <p style={{ fontSize: '1.05rem', marginBottom: '18px', color: '#222' }}>
          Every mentor inside YSB is proof of concept.
        </p>
        <p style={{ fontSize: '1.05rem', marginBottom: '18px', color: '#222' }}>
          And every lesson, every strategy, every community inside this fortress is built to instill one truth:
        </p>
        <p style={{ fontWeight: 700, color: '#7c3aed', fontSize: '1.1rem', marginBottom: '18px' }}>
          Success is war — and the weak don’t survive.
        </p>
        <p style={{ fontSize: '1.05rem', marginBottom: '0', color: '#222' }}>
          This is your call to arms.<br />
          Follow the blueprint.<br />
          Rise through the ranks.<br />
          And earn your five stars.
        </p>
      </div>
    </section>
  )
}

export default About