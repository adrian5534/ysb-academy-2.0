import React from 'react'
import generalImg from '../assets/images/Genaral.png'

function About() {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* Image */}
          <div className="col-md-4 d-flex justify-content-center mb-4 mb-md-0">
            <img
              src={generalImg}
              alt="The General A.R."
              className="img-fluid rounded"
              style={{
                width: '320px',
                height: '320px',
                objectFit: 'cover',
                boxShadow: '0 4px 24px rgba(124,58,237,0.10)'
              }}
            />
          </div>
          {/* Content */}
          <div className="col-md-6">
            <h2 className="text-center fw-bold mb-2" style={{ letterSpacing: '1px' }}>
              About “The General” A.R.
            </h2>
            <h3 className="text-center fw-bold mb-4 text-selective-purple" style={{ letterSpacing: '2px', fontSize: '1.15rem' }}>
              THE FIVE-STAR BLUEPRINT FOR DOMINATION
            </h3>
            <p className="mb-3">
              Born in 1997, The General A.R. isn’t your average mentor — he’s a calculated tactician, a relentless executor, and the founder of YSB Academy: a digital stronghold for warriors who want to dominate in the worlds of trading, e-commerce, AI/content creation, and copywriting.
            </p>
            <p className="mb-3">
              While most follow the system, he broke it.
            </p>
            <p className="mb-3">
              With nothing but obsession, logic, and hunger for results, A.R. stepped into the financial markets in 2021 — not with luck, but with a strategy. He mastered Forex, synthetic indices, and cryptocurrencies, not by chance, but by treating the charts like a battlefield: with precision, discipline, and zero emotion.
            </p>
            <p className="mb-3">
              But trading is just the beginning.
            </p>
            <p className="mb-3">
              The General realized the real edge lies in building income systems that compound — and then scaling those systems through automation, content, and digital leverage. That’s when YSB Academy was born — not as another course, but as a campus of killers.
            </p>
            <p className="mb-3">
              Inside YSB, you’re not just learning from one man.<br />
              You're trained by real teachers — people already making money from the exact skills they teach. Every instructor has been in the trenches, turned knowledge into cash, and now they pass that system to you. No theorists. No pretenders. Just real operators with real receipts.
            </p>
            <ul className="mb-3 ps-3">
              <li>Cracking algorithms to go viral and monetize content</li>
              <li>Using AI to automate income and build authority fast</li>
              <li>Writing copy that prints cash like a machine</li>
              <li>Or building ecom stores that scale without touching inventory</li>
            </ul>
            <p className="mb-3">
              Every mentor inside YSB is proof of concept.
            </p>
            <p className="mb-3">
              And every lesson, every strategy, every community inside this fortress is built to instill one truth:
            </p>
            <p className="fw-bold text-selective-purple mb-3" style={{ fontSize: '1.1rem' }}>
              Success is war — and the weak don’t survive.
            </p>
            <p className="mb-0">
              This is your call to arms.<br />
              Follow the blueprint.<br />
              Rise through the ranks.<br />
              And earn your five stars.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About