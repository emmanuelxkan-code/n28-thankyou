import { useState } from 'react'

/* ─── Brand tokens ─────────────────────────────────────── */
const C = {
  bg:      '#0E0E0E',
  surface: '#161616',
  border:  '#232323',
  orange:  '#F5620A',
  white:   '#FFFFFF',
  body:    '#C0C0C0',
  muted:   '#6A6A6A',
}

/* ─── N28 Logo ─────────────────────────────────────────── */
const Logo = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
    <circle cx="100" cy="100" r="88" stroke={C.orange} strokeWidth="10" fill={C.bg} />
    <text
      x="100" y="137"
      textAnchor="middle"
      fill={C.orange}
      fontFamily="'Arial Black', Impact, sans-serif"
      fontWeight="900"
      fontSize="82"
      letterSpacing="-3"
    >
      N28
    </text>
  </svg>
)

/* ─── Vimeo Video ──────────────────────────────────────── */
const Video = () => (
  <div
    style={{
      position:      'relative',
      paddingBottom: '56.25%',
      height:        0,
      overflow:      'hidden',
      borderRadius:  '0 0 8px 8px',
      background:    '#000',
      border:        `1px solid ${C.border}`,
      borderTop:     'none',
    }}
  >
    <iframe
      src="https://player.vimeo.com/video/1193557003?autoplay=1&muted=1&loop=0&autopause=0&title=0&byline=0&portrait=0&dnt=1"
      style={{
        position: 'absolute',
        top:      0,
        left:     0,
        width:    '100%',
        height:   '100%',
        border:   'none',
      }}
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
      title="N28 Digital — Strategy Call VSL"
    />
  </div>
)

/* ─── FAQ data ─────────────────────────────────────────── */
const FAQ_ITEMS = [
  {
    q: 'How does this work?',
    a: 'It starts with a free strategy call. We review your business, identify where leads are being lost, and map out what a consistent lead system would look like for your specific trade and location. From there, if it\'s a good fit, we\'ll walk you through how we can help.',
  },
  {
    q: 'What types of contractors do you work with?',
    a: 'We work with Australian trade businesses — renovators, builders, landscapers, painters, roofers, bathroom renovators, plumbers, electricians, and similar. If you run a home service business and want a more consistent pipeline of quality work, this call is for you.',
  },
  {
    q: 'What happens on the strategy call?',
    a: "It's a focused 30–45 minute session. We'll look at your current lead flow, where the gaps are, and what your market looks like. At the end, we'll be honest with you about whether we're the right fit — no pressure, no hard sell.",
  },
  {
    q: 'Is this suitable for a small trade business?',
    a: "Yes, as long as you're serious about growth. We work with sole traders through to established contractors with teams. The strategy call is designed to figure out where you are and what makes sense for your stage of business.",
  },
  {
    q: 'Do you only work with Australian businesses?',
    a: 'Yes. We focus exclusively on the Australian market. Our campaigns, strategies, and understanding of local contractor businesses are built specifically for this environment.',
  },
  {
    q: 'How long until I see results?',
    a: "Most clients start seeing movement within the first 30–60 days. Results depend on your trade, location, and how competitive your market is. We'll be upfront about expectations on the call — we'd rather set realistic targets and exceed them.",
  },
  {
    q: 'What does it cost?',
    a: "Pricing depends on your goals, trade, and what's involved. We'll give you a clear picture on the call once we understand your situation. The strategy session itself is completely free.",
  },
]

/* ─── FAQ Accordion Item ───────────────────────────────── */
const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ borderBottom: `1px solid ${C.border}` }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width:          '100%',
          background:     'none',
          border:         'none',
          padding:        '20px 0',
          cursor:         'pointer',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'space-between',
          gap:            '16px',
          textAlign:      'left',
        }}
      >
        <span
          style={{
            fontSize:   '16px',
            fontWeight: 500,
            color:      open ? C.white : C.body,
            lineHeight: '1.4',
            transition: 'color 0.15s',
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {q}
        </span>
        <span
          style={{
            width:          '24px',
            height:         '24px',
            borderRadius:   '50%',
            flexShrink:     0,
            border:         `1px solid ${open ? C.orange : C.border}`,
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'center',
            color:          open ? C.orange : C.muted,
            fontSize:       '18px',
            lineHeight:     1,
            transition:     'border-color 0.15s, color 0.15s',
          }}
        >
          {open ? '−' : '+'}
        </span>
      </button>

      <div
        style={{
          maxHeight:  open ? '400px' : '0',
          overflow:   'hidden',
          transition: 'max-height 0.3s ease',
        }}
      >
        <p
          style={{
            fontSize:     '15px',
            color:        C.muted,
            lineHeight:   '1.7',
            paddingBottom:'20px',
            maxWidth:     '640px',
            fontFamily:   "'DM Sans', sans-serif",
          }}
        >
          {a}
        </p>
      </div>
    </div>
  )
}

/* ─── Page styles injected once ───────────────────────── */
const PAGE_STYLES = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0);    }
  }
  @keyframes glowBtn {
    0%,  100% { box-shadow: 0 0 0 0  rgba(245,98,10,0.4); }
    55%        { box-shadow: 0 0 0 14px rgba(245,98,10,0);   }
  }

  .pe { animation: fadeIn 0.55s ease both; }
  .d1 { animation-delay: 0.08s; }
  .d2 { animation-delay: 0.18s; }
  .d3 { animation-delay: 0.28s; }
  .d4 { animation-delay: 0.38s; }
  .d5 { animation-delay: 0.48s; }

  .n28-cta {
    display:        block;
    width:          100%;
    background:     #F5620A;
    color:          #fff;
    border:         none;
    font-family:    'DM Sans', sans-serif;
    font-weight:    700;
    font-size:      16px;
    letter-spacing: 0.4px;
    padding:        17px 24px;
    border-radius:  6px;
    cursor:         pointer;
    text-align:     center;
    transition:     background 0.15s, transform 0.15s;
    animation:      glowBtn 3s ease-in-out infinite;
  }
  .n28-cta:hover {
    background:  #FF7828;
    transform:   translateY(-1px);
    animation:   none;
    box-shadow:  0 8px 30px rgba(245,98,10,0.38);
  }

  @media (max-width: 600px) {
    .trust-row { flex-direction: column !important; gap: 10px !important; }
  }
`

/* ─── App ──────────────────────────────────────────────── */
export default function App() {
  return (
    <>
      <style>{PAGE_STYLES}</style>

      <div
        style={{
          fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif",
          background: C.bg,
          color:      C.white,
          minHeight:  '100vh',
          overflowX:  'hidden',
        }}
      >

        {/* ── NAV ──────────────────────────────────────── */}
        <nav style={{ borderBottom: `1px solid ${C.border}` }}>
          <div
            style={{
              maxWidth:       '860px',
              margin:         '0 auto',
              padding:        '0 28px',
              height:         '60px',
              display:        'flex',
              alignItems:     'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Logo size={32} />
              <span style={{ fontSize: '15px', fontWeight: 700, letterSpacing: '0.3px' }}>
                N28 Digital
              </span>
            </div>

            <div
              style={{
                display:      'flex',
                alignItems:   'center',
                gap:          '7px',
                background:   'rgba(46,204,113,0.07)',
                border:       '1px solid rgba(46,204,113,0.18)',
                borderRadius: '100px',
                padding:      '5px 12px',
              }}
            >
              <div
                style={{
                  width:        '6px',
                  height:       '6px',
                  borderRadius: '50%',
                  background:   '#2ECC71',
                  flexShrink:   0,
                }}
              />
              <span style={{ fontSize: '12px', color: '#2ECC71', fontWeight: 500 }}>
                Info Received
              </span>
            </div>
          </div>
        </nav>

        {/* ── HERO ─────────────────────────────────────── */}
        <div
          style={{
            maxWidth: '860px',
            margin:   '0 auto',
            padding:  '48px 28px 56px',
          }}
        >
          {/* Headline */}
          <h1
            className="pe d1"
            style={{
              fontSize:      'clamp(26px, 4.2vw, 42px)',
              fontWeight:    700,
              lineHeight:    1.15,
              textAlign:     'center',
              marginBottom:  '12px',
              letterSpacing: '-0.5px',
            }}
          >
            Thanks for Submitting Your Information.
          </h1>

          {/* Sub */}
          <p
            className="pe d2"
            style={{
              textAlign:    'center',
              fontSize:     'clamp(15px, 2vw, 17px)',
              color:        C.body,
              lineHeight:   1.6,
              maxWidth:     '560px',
              margin:       '0 auto 8px',
              fontWeight:   400,
            }}
          >
            Now Let's Talk About What You Really Came Here For:
          </p>

          {/* Offer line */}
          <p
            className="pe d2"
            style={{
              textAlign:     'center',
              fontSize:      'clamp(20px, 3.2vw, 30px)',
              fontWeight:    700,
              color:         C.orange,
              lineHeight:    1.25,
              margin:        '0 auto 28px',
              letterSpacing: '-0.3px',
            }}
          >
            More Leads. More Jobs. A System That Works While You Do.
          </p>

          {/* Orange strip */}
          <div
            className="pe d3"
            style={{
              background:   C.orange,
              borderRadius: '6px 6px 0 0',
              padding:      '13px 20px',
              textAlign:    'center',
            }}
          >
            <span style={{ fontSize: '15px', fontWeight: 700, color: '#fff' }}>
              🔊 Watch This Before Booking Your Strategy Call
            </span>
          </div>

          {/* Video */}
          <div className="pe d3">
            <Video />
          </div>

          {/* CTA */}
          <div className="pe d4" style={{ marginTop: '20px' }}>
            <button className="n28-cta">
              Book Your Strategy Call →
            </button>
            <p
              style={{
                textAlign:  'center',
                fontSize:   '13px',
                color:      C.muted,
                marginTop:  '10px',
              }}
            >
              Free · No obligation · 30–45 minutes
            </p>
          </div>

          {/* Trust row */}
          <div
            className="pe d5 trust-row"
            style={{
              display:        'flex',
              alignItems:     'center',
              justifyContent: 'center',
              gap:            '24px',
              marginTop:      '18px',
              flexWrap:       'wrap',
            }}
          >
            {[
              '📅 Check your email for the calendar invite',
              '🔒 100% confidential',
              '🇦🇺 Australian-focused',
            ].map((t) => (
              <span key={t} style={{ fontSize: '13px', color: '#454545' }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ── DIVIDER ──────────────────────────────────── */}
        <div
          style={{
            height:     '1px',
            background: C.border,
            maxWidth:   '860px',
            margin:     '0 auto',
          }}
        />

        {/* ── FAQ ──────────────────────────────────────── */}
        <div
          style={{
            maxWidth: '860px',
            margin:   '0 auto',
            padding:  '0 28px 72px',
          }}
        >
          <h2
            style={{
              fontSize:      'clamp(18px, 2.5vw, 22px)',
              fontWeight:    700,
              padding:       '40px 0 6px',
              letterSpacing: '-0.2px',
            }}
          >
            Frequently Asked Questions
          </h2>
          <p style={{ fontSize: '14px', color: C.muted, marginBottom: '24px' }}>
            Everything you need to know before the call.
          </p>

          <div style={{ borderTop: `1px solid ${C.border}` }}>
            {FAQ_ITEMS.map(({ q, a }) => (
              <FaqItem key={q} q={q} a={a} />
            ))}
          </div>
        </div>

        {/* ── FOOTER ───────────────────────────────────── */}
        <div style={{ borderTop: `1px solid ${C.border}` }}>
          <div
            style={{
              maxWidth:       '860px',
              margin:         '0 auto',
              padding:        '24px 28px',
              display:        'flex',
              alignItems:     'center',
              justifyContent: 'space-between',
              flexWrap:       'wrap',
              gap:            '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Logo size={28} />
              <span style={{ fontSize: '13px', color: C.muted }}>
                N28 Digital · Contractor Growth Systems · Australia
              </span>
            </div>
            <span style={{ fontSize: '13px', color: '#333' }}>
              © {new Date().getFullYear()} N28 Digital
            </span>
          </div>
        </div>

      </div>
    </>
  )
}
