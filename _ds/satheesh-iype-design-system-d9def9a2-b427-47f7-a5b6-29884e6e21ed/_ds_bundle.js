/* @ds-bundle: {"format":4,"namespace":"SatheeshIypeDesignSystem_d9def9","components":[{"name":"CTABanner","sourcePath":"components/content/CTABanner.jsx"},{"name":"ConditionProcedureTemplate","sourcePath":"components/content/ConditionProcedureTemplate.jsx"},{"name":"DifferentiatorList","sourcePath":"components/content/DifferentiatorList.jsx"},{"name":"PathList","sourcePath":"components/content/PathList.jsx"},{"name":"PublicationList","sourcePath":"components/content/PublicationList.jsx"},{"name":"QuoteFeature","sourcePath":"components/content/QuoteFeature.jsx"},{"name":"ResearchInterestsGrid","sourcePath":"components/content/ResearchInterestsGrid.jsx"},{"name":"TableOfContents","sourcePath":"components/content/TableOfContents.jsx"},{"name":"TwoUpCard","sourcePath":"components/content/TwoUpCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"FAQAccordion","sourcePath":"components/feedback/FAQAccordion.jsx"},{"name":"LogoStrip","sourcePath":"components/feedback/LogoStrip.jsx"},{"name":"RatingCard","sourcePath":"components/feedback/RatingCard.jsx"},{"name":"ReviewWidgetEmbed","sourcePath":"components/feedback/ReviewWidgetEmbed.jsx"},{"name":"TestimonialCarousel","sourcePath":"components/feedback/TestimonialCarousel.jsx"},{"name":"ContactForm","sourcePath":"components/forms/ContactForm.jsx"},{"name":"MultiFieldForm","sourcePath":"components/forms/MultiFieldForm.jsx"},{"name":"CredentialsStrip","sourcePath":"components/hero/CredentialsStrip.jsx"},{"name":"HeroBanner","sourcePath":"components/hero/HeroBanner.jsx"},{"name":"SimplePageHeader","sourcePath":"components/hero/SimplePageHeader.jsx"},{"name":"PatientJourneyStepper","sourcePath":"components/journey/PatientJourneyStepper.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"}],"sourceHashes":{"components/content/CTABanner.jsx":"dc0b5bf39967","components/content/ConditionProcedureTemplate.jsx":"ad9a7dfa6d1a","components/content/DifferentiatorList.jsx":"f22602a64dde","components/content/PathList.jsx":"6d0127749e7f","components/content/PublicationList.jsx":"e3800d1872d8","components/content/QuoteFeature.jsx":"55661ac37f16","components/content/ResearchInterestsGrid.jsx":"e12023c6e6f6","components/content/TableOfContents.jsx":"ff78b9046588","components/content/TwoUpCard.jsx":"1c2116abdf96","components/core/Button.jsx":"afe3eb01a6ba","components/core/Icon.jsx":"4751d99e65e9","components/feedback/FAQAccordion.jsx":"f8fc5f009e1a","components/feedback/LogoStrip.jsx":"d18d0976e21d","components/feedback/RatingCard.jsx":"a51aee09b3c7","components/feedback/ReviewWidgetEmbed.jsx":"237b72d2821b","components/feedback/TestimonialCarousel.jsx":"6b68ff434b7a","components/forms/ContactForm.jsx":"55e64a56af82","components/forms/MultiFieldForm.jsx":"1eaa6149f7c4","components/hero/CredentialsStrip.jsx":"416c737955aa","components/hero/HeroBanner.jsx":"56e16e702c6a","components/hero/SimplePageHeader.jsx":"f162f43543e4","components/journey/PatientJourneyStepper.jsx":"42c86947b7af","components/navigation/Footer.jsx":"07cabde8d687","components/navigation/SiteHeader.jsx":"8239513c18cd"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SatheeshIypeDesignSystem_d9def9 = window.SatheeshIypeDesignSystem_d9def9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/PathList.jsx
try { (() => {
// NEW v3: "Three Clear Paths In" on Home. Dark ink panel (teal glow top-right, shadow-float) that overlaps the section above by 64px.
function PathList({
  eyebrow = 'How to see Mr Iype',
  heading,
  body,
  paths,
  overlap = true
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      zIndex: 2,
      maxWidth: 1160,
      margin: (overlap ? '-64px' : '0') + ' auto 0',
      padding: '0 32px',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'radial-gradient(90% 120% at 100% 0%,rgba(30,143,166,0.32) 0%,rgba(30,143,166,0) 60%),linear-gradient(160deg,color-mix(in oklch,var(--ink) 88%,var(--teal)) 0%,var(--ink) 70%)',
      borderRadius: 20,
      boxShadow: 'var(--shadow-float)',
      padding: 'clamp(36px,5vw,60px)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))',
      gap: 40,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-eyebrow)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-eyebrow)',
      color: 'var(--teal-light)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontWeight: 'var(--weight-display)',
      letterSpacing: '-0.03em',
      fontSize: 'clamp(28px,3.2vw,36px)',
      lineHeight: 1.1,
      color: 'var(--white)'
    }
  }, heading), body ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.65,
      color: '#B9C8CB',
      maxWidth: 440
    }
  }, body) : null), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      borderTop: '1px solid var(--border-inverse)'
    }
  }, paths.map((p, i) => /*#__PURE__*/React.createElement("li", {
    key: p.href,
    style: {
      borderBottom: '1px solid var(--border-inverse)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: p.href,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      padding: '22px 4px',
      color: 'var(--white)',
      textDecoration: 'none',
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--teal-light)'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-display)',
      fontSize: 22,
      letterSpacing: '-0.02em'
    }
  }, p.label)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--teal-light)'
    }
  }, "\u2192")))))));
}
Object.assign(__ds_scope, { PathList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PathList.jsx", error: String((e && e.message) || e) }); }

// components/content/PublicationList.jsx
try { (() => {
// NEW v3: the Selected Publications archive. Sticky intro column (year chips + PubMed link) beside year-grouped entries.
// Year = journal issue year. Each entry: title (links to its own page), meta line, external PubMed link.
const srOnly = {
  position: 'absolute',
  width: 1,
  height: 1,
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)'
};
function PublicationList({
  eyebrow = 'Archive',
  heading = 'Selected Publications',
  intro = 'A curated list of published research, each linking out to the original journal page.',
  years,
  pubmedHref,
  pubmedLabel = 'View all publications on PubMed ↗',
  pubmedCaption = 'The complete, up-to-date record',
  stickyTop = 96
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '24px 64px',
      alignItems: 'flex-start',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 260px',
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      position: 'sticky',
      top: stickyTop
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-eyebrow)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-eyebrow)',
      color: 'var(--teal-text)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontWeight: 'var(--weight-display)',
      letterSpacing: '-0.03em',
      fontSize: 'clamp(26px,3vw,34px)',
      lineHeight: 1.12,
      color: 'var(--ink)',
      textWrap: 'balance'
    }
  }, heading), intro ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.65,
      color: 'var(--stone)'
    }
  }, intro) : null, /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Years",
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 6
    }
  }, years.map(y => /*#__PURE__*/React.createElement("a", {
    key: y.year,
    href: '#y' + y.year,
    style: {
      padding: '8px 14px',
      borderRadius: 999,
      background: 'var(--mint)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--teal-text)',
      textDecoration: 'none'
    }
  }, y.year))), pubmedHref ? /*#__PURE__*/React.createElement("a", {
    href: pubmedHref,
    target: "_blank",
    rel: "noopener",
    style: {
      marginTop: 14,
      paddingTop: 16,
      borderTop: '1px solid var(--border-default)',
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      color: 'var(--ink)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 600
    }
  }, pubmedLabel), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--stone)'
    }
  }, pubmedCaption), /*#__PURE__*/React.createElement("span", {
    style: srOnly
  }, "(opens in new tab)")) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '2 1 560px',
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }
  }, years.map(y => /*#__PURE__*/React.createElement("div", {
    key: y.year,
    id: 'y' + y.year,
    style: {
      display: 'flex',
      flexDirection: 'column',
      scrollMarginTop: 120
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      paddingBottom: 12,
      borderBottom: '2px solid var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontWeight: 'var(--weight-display)',
      fontSize: 28,
      letterSpacing: '-0.02em',
      color: 'var(--ink)'
    }
  }, y.year), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--stone)'
    }
  }, y.items.length, " ", y.items.length === 1 ? 'publication' : 'publications')), y.items.map((p, i) => /*#__PURE__*/React.createElement("article", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) auto',
      gap: '8px 24px',
      padding: '22px 0',
      borderBottom: '1px solid var(--border-default)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: p.href,
    style: {
      fontWeight: 'var(--weight-display)',
      letterSpacing: 'var(--tracking-display)',
      fontSize: 19,
      lineHeight: 1.35,
      color: 'var(--ink)',
      textDecoration: 'none',
      textWrap: 'pretty'
    }
  }, p.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      lineHeight: 1.5,
      color: 'var(--stone)'
    }
  }, p.meta)), p.externalHref ? /*#__PURE__*/React.createElement("a", {
    href: p.externalHref,
    target: "_blank",
    rel: "noopener",
    style: {
      fontSize: 14,
      fontWeight: 600,
      whiteSpace: 'nowrap',
      paddingTop: 3,
      color: 'var(--teal-text)',
      textDecoration: 'none'
    }
  }, p.externalLabel || 'PubMed ↗', /*#__PURE__*/React.createElement("span", {
    style: srOnly
  }, "(opens in new tab)")) : null))))));
}
Object.assign(__ds_scope, { PublicationList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PublicationList.jsx", error: String((e && e.message) || e) }); }

// components/content/QuoteFeature.jsx
try { (() => {
const {
  useEffect,
  useState
} = React; // NEW v3: "In his own words" on About. Portrait on a soft arch (left) + quote (right) on a sky-to-mint gradient.
// The large Georgia quote mark is decorative, sits behind the text and hangs left; it must not touch the eyebrow.
function QuoteFeature({
  eyebrow = 'In His Own Words',
  quote,
  attribution,
  role,
  photoSrc,
  photoAlt = ''
}) {
  const [w, setW] = useState(typeof window !== 'undefined' ? window.innerWidth : 1280);
  useEffect(() => {
    const r = () => setW(window.innerWidth);
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);
  const wide = w >= 1060;
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 20,
      border: '1px solid var(--border-default)',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'stretch',
      fontFamily: 'var(--font-body)',
      background: 'radial-gradient(60% 80% at 0% 100%,rgba(30,143,166,0.16) 0%,rgba(30,143,166,0) 70%),linear-gradient(150deg,var(--sky-1) 0%,var(--mint) 60%,var(--white) 100%)'
    }
  }, photoSrc ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 360px',
      minWidth: 0,
      maxWidth: 500,
      margin: '0 auto',
      position: 'relative',
      minHeight: 420,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      padding: '48px clamp(16px,3vw,40px) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: '50%',
      bottom: 0,
      transform: 'translateX(-50%)',
      width: '84%',
      height: '82%',
      borderRadius: '999px 999px 0 0',
      background: 'radial-gradient(ellipse 70% 60% at 50% 35%,rgba(255,255,255,0.95) 0%,rgba(255,255,255,0.4) 75%)',
      border: '1px solid rgba(30,143,166,0.18)',
      borderBottom: 0
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: photoSrc,
    alt: photoAlt,
    style: {
      position: 'relative',
      display: 'block',
      width: '100%',
      maxWidth: 440,
      height: 'auto'
    }
  })) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1.3 1 420px',
      minWidth: 0,
      padding: 'clamp(40px,5vw,72px) clamp(28px,5vw,72px) clamp(40px,5vw,72px) ' + (wide ? '112px' : '28px'),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 28,
      position: 'relative',
      isolation: 'isolate'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      zIndex: -1,
      top: wide ? 84 : 96,
      left: wide ? -28 : 8,
      fontFamily: "Georgia,'Times New Roman',serif",
      fontWeight: 400,
      fontSize: wide ? 540 : 640,
      lineHeight: 0.8,
      color: 'rgba(30,143,166,0.16)',
      pointerEvents: 'none',
      userSelect: 'none'
    }
  }, '\u201C'), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-eyebrow)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-eyebrow)',
      color: 'var(--teal-text)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      padding: 0,
      fontWeight: 500,
      fontSize: 'clamp(18px,1.75vw,22px)',
      lineHeight: 1.6,
      letterSpacing: '-0.012em',
      color: 'var(--ink)',
      maxWidth: '34em',
      textWrap: 'pretty'
    }
  }, quote), attribution ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      fontWeight: 600,
      color: 'var(--ink)'
    }
  }, attribution), role ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--stone)'
    }
  }, role) : null) : null));
}
Object.assign(__ds_scope, { QuoteFeature });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/QuoteFeature.jsx", error: String((e && e.message) || e) }); }

// components/content/ResearchInterestsGrid.jsx
try { (() => {
const {
  useEffect,
  useState
} = React; // NEW v3: numbered interests on a mint-to-sky band. 4 columns >1024px, 2 at 641–1024px, 1 at <=640px. No orphans: pass 4 or 8 items.
function ResearchInterestsGrid({
  eyebrow = 'Research Interests',
  items
}) {
  const [w, setW] = useState(typeof window !== 'undefined' ? window.innerWidth : 1280);
  useEffect(() => {
    const r = () => setW(window.innerWidth);
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);
  const cols = w > 1024 ? 4 : w > 640 ? 2 : 1;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'linear-gradient(160deg,var(--mint) 0%,var(--sky-1) 100%)',
      borderTop: '1px solid var(--border-default)',
      borderBottom: '1px solid var(--border-default)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1160,
      margin: '0 auto',
      padding: '56px 32px 60px',
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--text-eyebrow)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-eyebrow)',
      color: 'var(--teal-text)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gridTemplateColumns: 'repeat(' + cols + ',minmax(0,1fr))',
      gap: '28px 40px'
    }
  }, items.map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      borderTop: '2px solid var(--teal)',
      paddingTop: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--teal-text)'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      fontWeight: 500,
      lineHeight: 1.45,
      color: 'var(--ink)',
      textWrap: 'pretty'
    }
  }, t))))));
}
Object.assign(__ds_scope, { ResearchInterestsGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ResearchInterestsGrid.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const {
  useState
} = React; // v3: visible focus ring (2px --teal-text, 3px offset), 8px radius documented, inline-flex gap for an optional trailing icon.
function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  type = 'button',
  style
}) {
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);
  const sizes = {
    sm: {
      fontSize: 13,
      padding: '9px 18px'
    },
    md: {
      fontSize: 14,
      padding: '12px 26px'
    },
    lg: {
      fontSize: 15,
      padding: '14px 30px'
    }
  };
  const variants = {
    primary: {
      background: hover ? 'var(--ink)' : 'var(--teal-text)',
      color: 'var(--white)',
      border: 'none'
    },
    secondary: {
      background: hover ? 'var(--mint)' : 'transparent',
      color: 'var(--teal-text)',
      border: '1px solid var(--border-strong)'
    },
    inverse: {
      background: hover ? 'var(--sky-1)' : 'var(--white)',
      color: 'var(--ink)',
      border: 'none'
    }
  };
  const Tag = href && !disabled ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, {
    href: Tag === 'a' ? href : undefined,
    type: Tag === 'button' ? type : undefined,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onFocus: e => setFocus(e.target.matches(':focus-visible')),
    onBlur: () => setFocus(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      lineHeight: 1.2,
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'default' : 'pointer',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      transition: 'background var(--duration-fast) var(--ease-standard)',
      opacity: disabled ? 0.5 : 1,
      outline: focus ? '2px solid var(--teal-text)' : 'none',
      outlineOffset: 3,
      ...sizes[size],
      ...variants[variant],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/content/CTABanner.jsx
try { (() => {
// v3: matches CTA Banner.dc.html. Sky gradient panel with a white radial highlight, 20px radius, text left / button right, wraps on narrow screens.
function CTABanner({
  heading = 'Arrange a Consultation or Second Opinion',
  body = "We'll guide you through the details.",
  ctaLabel = 'Book a Consultation',
  ctaHref = '/consultations/#book',
  secondaryLabel,
  secondaryHref
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1160,
      margin: '0 auto',
      padding: '0 32px 64px',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 20,
      background: 'radial-gradient(80% 120% at 100% 0%,rgba(255,255,255,0.7) 0%,rgba(255,255,255,0) 60%),linear-gradient(160deg,var(--sky-1) 0%,var(--sky-2) 60%,color-mix(in oklch,var(--sky-2) 78%,var(--teal)) 100%)',
      padding: 'clamp(40px,6vw,72px) clamp(28px,6vw,72px)',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '28px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 420px',
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-display)',
      letterSpacing: 'var(--tracking-display)',
      fontSize: 'clamp(28px,3.4vw,40px)',
      lineHeight: 1.12,
      color: 'var(--ink)',
      textWrap: 'balance'
    }
  }, heading), body ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 17,
      color: 'color-mix(in oklch,var(--stone) 78%,var(--ink))'
    }
  }, body) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    href: ctaHref
  }, ctaLabel), secondaryLabel ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    variant: "secondary",
    href: secondaryHref
  }, secondaryLabel) : null)));
}
Object.assign(__ds_scope, { CTABanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CTABanner.jsx", error: String((e && e.message) || e) }); }

// components/content/TableOfContents.jsx
try { (() => {
const {
  useEffect,
  useState
} = React;
// NEW v3: sticky "On this page" sidebar for condition and procedure pages. Highlights the section in view.
function TableOfContents({
  items,
  ctaLabel = 'Book a Consultation',
  ctaHref = '/consultations/#book',
  top = 96
}) {
  const [active, setActive] = useState(items[0] && items[0].href);
  useEffect(() => {
    const els = items.map(i => document.querySelector(i.href)).filter(Boolean);
    if (!els.length || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(es => {
      const v = es.filter(e => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (v) setActive('#' + v.target.id);
    }, {
      rootMargin: '-' + top + 'px 0px -60% 0px'
    });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  }, [items, top]);
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      flex: '0 0 220px',
      position: 'sticky',
      top,
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-eyebrow)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-eyebrow)',
      color: 'var(--stone)'
    }
  }, "On this page"), /*#__PURE__*/React.createElement("nav", {
    "aria-label": "On this page",
    style: {
      display: 'flex',
      flexDirection: 'column',
      borderLeft: '1px solid var(--border-default)'
    }
  }, items.map(i => {
    const on = i.href === active;
    return /*#__PURE__*/React.createElement("a", {
      key: i.href,
      href: i.href,
      "aria-current": on ? 'true' : undefined,
      style: {
        padding: '7px 0 7px 16px',
        marginLeft: -1,
        borderLeft: '2px solid ' + (on ? 'var(--teal)' : 'transparent'),
        fontSize: 14,
        lineHeight: 1.4,
        color: on ? 'var(--teal-text)' : 'var(--stone)',
        fontWeight: on ? 600 : 400,
        textDecoration: 'none',
        transition: 'color var(--duration-fast), border-color var(--duration-fast)'
      }
    }, i.label);
  })), ctaLabel ? /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 18,
      borderTop: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    href: ctaHref
  }, ctaLabel)) : null);
}
Object.assign(__ds_scope, { TableOfContents });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TableOfContents.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
// Renders a Lucide icon as inline SVG (no DOM scanning). Requires lucide UMD on window.
function Icon({
  name,
  size = 32,
  strokeWidth = 1.5,
  style
}) {
  const key = String(name).split('-').map(s => s[0].toUpperCase() + s.slice(1)).join('');
  const node = window.lucide && window.lucide.icons && window.lucide.icons[key];
  if (!node) return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      display: 'inline-block',
      ...style
    }
  });
  const kids = node[0] === 'svg' && Array.isArray(node[2]) ? node[2] : node;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: style
  }, kids.map(([tag, attrs], i) => React.createElement(tag, {
    key: i,
    ...attrs
  })));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/DifferentiatorList.jsx
try { (() => {
// v2: 2×2 responsive grid (1 column on narrow screens), icon beside text, 15px body.
// items: [{ icon, title, description }]
function DifferentiatorList({
  items,
  background = 'var(--mint)'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,400px),1fr))',
      gap: 1,
      background: 'var(--border-strong)',
      border: '1px solid var(--border-strong)',
      borderRadius: 16,
      overflow: 'hidden',
      fontFamily: 'var(--font-body)'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background,
      padding: '34px 32px',
      display: 'flex',
      gap: 22,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--teal)',
      display: 'flex',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon || 'circle'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-display)',
      letterSpacing: 'var(--tracking-display)',
      fontSize: 'var(--text-h4)',
      lineHeight: 1.25,
      color: 'var(--ink)'
    }
  }, it.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-sm)',
      lineHeight: 'var(--leading-normal)',
      color: 'var(--stone)',
      textWrap: 'pretty'
    }
  }, it.description)))));
}
Object.assign(__ds_scope, { DifferentiatorList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/DifferentiatorList.jsx", error: String((e && e.message) || e) }); }

// components/content/TwoUpCard.jsx
try { (() => {
const {
  useState
} = React;
// v2: content flows top-down (no forced min-height gap), optional icon, explicit link label,
// hover = subtle darken (no lift), visible focus ring.
function TwoUpCard({
  icon,
  title,
  description,
  linkLabel,
  href = '#',
  tone = 'mint'
}) {
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);
  const tones = {
    mint: {
      bg: 'var(--mint)',
      bgHover: '#DDF0EC',
      color: 'var(--ink)',
      body: 'var(--stone)',
      icon: 'var(--teal)',
      link: 'var(--teal-text)',
      rule: 'rgba(0,0,0,0.1)'
    },
    blue: {
      bg: 'var(--blue-card)',
      bgHover: '#2A59AD',
      color: 'var(--white)',
      body: 'var(--white)',
      icon: 'var(--white)',
      link: 'var(--white)',
      rule: 'rgba(255,255,255,0.25)'
    },
    dark: {
      bg: 'var(--dark-card)',
      bgHover: '#16313A',
      color: 'var(--white)',
      body: '#D5E0E2',
      icon: 'var(--teal-light)',
      link: 'var(--white)',
      rule: 'rgba(255,255,255,0.25)'
    }
  };
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 16,
      padding: '32px 30px',
      background: hover ? t.bgHover : t.bg,
      color: t.color,
      textDecoration: 'none',
      fontFamily: 'var(--font-body)',
      transition: 'background var(--duration-fast) var(--ease-standard)',
      outline: focus ? '3px solid var(--focus-ring)' : 'none',
      outlineOffset: 3
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.icon,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: icon ? 18 : 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-display)',
      letterSpacing: 'var(--tracking-display)',
      fontSize: 'var(--text-h3)',
      lineHeight: 1.2
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 10,
      fontSize: 'var(--text-body)',
      lineHeight: 'var(--leading-normal)',
      color: t.body
    }
  }, description), linkLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 22,
      paddingTop: 16,
      borderTop: `1px solid ${t.rule}`,
      fontSize: 14,
      fontWeight: 600,
      color: t.link
    }
  }, linkLabel, " \u2192"));
}
Object.assign(__ds_scope, { TwoUpCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TwoUpCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/FAQAccordion.jsx
try { (() => {
const {
  useState,
  useRef,
  useEffect
} = React; // v3: real buttons inside a heading, region labelled by its button, height animates 220ms, + rotates to ×.
// One item open at a time by default; allowMultiple lets several stay open.
function Item({
  q,
  a,
  isOpen,
  onToggle,
  id,
  headingLevel
}) {
  const ref = useRef(null);
  const [h, setH] = useState(0);
  useEffect(() => {
    if (ref.current) setH(isOpen ? ref.current.scrollHeight : 0);
  }, [isOpen, a]);
  const H = 'h' + headingLevel;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--border-strong)'
    }
  }, /*#__PURE__*/React.createElement(H, {
    style: {
      margin: 0,
      font: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("button", {
    id: id + '-btn',
    onClick: onToggle,
    "aria-expanded": isOpen,
    "aria-controls": id,
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16,
      padding: '20px 0',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 1.4,
      color: 'var(--ink)',
      borderRadius: 4
    }
  }, q, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: 'none',
      fontSize: 20,
      lineHeight: 1,
      color: 'var(--teal-text)',
      transition: 'transform var(--duration-base) var(--ease-standard)',
      transform: `rotate(${isOpen ? 45 : 0}deg)`
    }
  }, "+"))), /*#__PURE__*/React.createElement("div", {
    id: id,
    role: "region",
    "aria-labelledby": id + '-btn',
    style: {
      height: h,
      overflow: 'hidden',
      visibility: isOpen || h ? 'visible' : 'hidden',
      transition: 'height var(--duration-base) var(--ease-standard), visibility var(--duration-base)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      paddingBottom: 20,
      fontSize: 'var(--text-body-sm)',
      lineHeight: 'var(--leading-normal)',
      color: 'var(--stone)',
      maxWidth: 640
    }
  }, a)));
}
function FAQAccordion({
  items,
  allowMultiple = false,
  headingLevel = 3,
  idPrefix = 'faq'
}) {
  const [open, setOpen] = useState([]);
  const toggle = i => setOpen(o => o.includes(i) ? o.filter(x => x !== i) : allowMultiple ? [...o, i] : [i]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      borderTop: '1px solid var(--border-strong)'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(Item, {
    key: i,
    id: `${idPrefix}-${i}`,
    q: it.question,
    a: it.answer,
    headingLevel: headingLevel,
    isOpen: open.includes(i),
    onToggle: () => toggle(i)
  })));
}
Object.assign(__ds_scope, { FAQAccordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/FAQAccordion.jsx", error: String((e && e.message) || e) }); }

// components/feedback/LogoStrip.jsx
try { (() => {
// NEW v3: "Recognised by" insurer logos. Real <img> with alt, auto-fill grid, hairline under each cell. Text fallback when a logo is missing.
function LogoStrip({
  label = 'Recognised by',
  logos
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-eyebrow)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-eyebrow)',
      color: 'var(--stone)'
    }
  }, label), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(110px,1fr))',
      gap: '16px 24px'
    }
  }, logos.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.name,
    style: {
      height: 64,
      display: 'flex',
      alignItems: 'center',
      borderBottom: '1px solid var(--border-default)'
    }
  }, l.src ? /*#__PURE__*/React.createElement("img", {
    src: l.src,
    alt: l.name,
    width: l.width,
    height: l.height,
    style: {
      display: 'block',
      width: l.width,
      height: l.height,
      objectFit: 'contain',
      objectPosition: 'left center'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--stone)'
    }
  }, l.name)))));
}
Object.assign(__ds_scope, { LogoStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/LogoStrip.jsx", error: String((e && e.message) || e) }); }

// components/feedback/RatingCard.jsx
try { (() => {
// NEW v3: the floating Doctify rating card on the Home hero (white, shadow-float, factual only).
const star = /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"
}));
function RatingCard({
  href,
  logoSrc,
  logoAlt = 'Doctify',
  rating = '5.0',
  stars = 5,
  count = '16 verified reviews',
  style
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noopener",
    style: {
      background: 'var(--white)',
      borderRadius: 14,
      boxShadow: 'var(--shadow-float)',
      padding: '12px 16px',
      display: 'inline-flex',
      flexDirection: 'column',
      gap: 2,
      color: 'var(--ink)',
      textDecoration: 'none',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: logoAlt,
    style: {
      display: 'block',
      alignSelf: 'flex-start',
      height: 22,
      width: 'auto',
      marginBottom: 4
    }
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      lineHeight: 1.1
    }
  }, rating), /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": 'Rated ' + stars + ' out of 5 stars',
    style: {
      display: 'flex',
      gap: 2,
      color: 'var(--teal)'
    }
  }, Array.from({
    length: stars
  }, (_, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, star)))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--stone)'
    }
  }, count), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      width: 1,
      height: 1,
      overflow: 'hidden',
      clip: 'rect(0 0 0 0)'
    }
  }, "(opens in new tab)"));
}
Object.assign(__ds_scope, { RatingCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/RatingCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ReviewWidgetEmbed.jsx
try { (() => {
function ReviewWidgetEmbed({
  provider = 'Doctify',
  rating = '4.9',
  reviewCount = 128
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border-default)',
      borderRadius: 16,
      padding: '22px 26px',
      background: 'var(--white)',
      fontFamily: 'var(--font-body)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--teal-text)',
      letterSpacing: 2,
      fontSize: 15
    }
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--stone)',
      marginTop: 6
    }
  }, rating, " average \xB7 ", reviewCount, " verified reviews")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--ink)',
      border: '1px solid var(--border-strong)',
      borderRadius: 999,
      padding: '8px 18px'
    }
  }, provider));
}
Object.assign(__ds_scope, { ReviewWidgetEmbed });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ReviewWidgetEmbed.jsx", error: String((e && e.message) || e) }); }

// components/feedback/TestimonialCarousel.jsx
try { (() => {
const {
  useState
} = React;
function TestimonialCarousel({
  testimonials,
  photoGradient = 'var(--photo-duotone-5)'
}) {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.4fr',
      borderRadius: 20,
      overflow: 'hidden',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 340,
      background: photoGradient
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--mint)',
      padding: 40,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 20,
      color: 'var(--ink)',
      lineHeight: 1.4
    }
  }, t.quote), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--ink)'
    }
  }, t.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--stone)'
    }
  }, t.role)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: 16
    }
  }, testimonials.map((_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setIdx(i),
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      background: i === idx ? 'var(--teal)' : 'var(--line)'
    }
  }))))));
}
Object.assign(__ds_scope, { TestimonialCarousel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/TestimonialCarousel.jsx", error: String((e && e.message) || e) }); }

// components/forms/MultiFieldForm.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useRef
} = React;
// v3: config-driven form matching the Consultations and Contact forms. Visible labels, "(required)" in label text,
// radio groups in fieldset/legend, native file input, error summary that takes focus, ink error text (never red), focused success message.
const field = {
  height: 48,
  padding: '0 14px',
  borderRadius: 8,
  border: '1px solid var(--border-strong)',
  background: 'var(--white)',
  fontFamily: 'var(--font-body)',
  fontSize: 16,
  color: 'var(--ink)',
  width: '100%',
  boxSizing: 'border-box'
};
const labelText = {
  fontSize: 14,
  fontWeight: 600,
  color: 'var(--ink)'
};
const err = {
  fontSize: 14,
  color: 'var(--ink)',
  display: 'flex',
  gap: 6,
  alignItems: 'baseline'
};
function MultiFieldForm({
  fields,
  submitLabel = 'Submit',
  footnote,
  successTitle = 'Thank you',
  successBody = 'Your enquiry has been sent. The practice secretary will be in touch.',
  onSubmit,
  idPrefix = 'f'
}) {
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const summary = useRef(null),
    done = useRef(null);
  const id = n => `${idPrefix}-${n}`;
  const submit = e => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget),
      next = {};
    fields.forEach(f => {
      if (!f.required) return;
      const v = f.type === 'checkbox' ? fd.get(f.name) : String(fd.get(f.name) || '').trim();
      if (!v) next[f.name] = f.error || `Enter ${f.label.toLowerCase()}`;
    });
    setErrors(next);
    if (Object.keys(next).length) {
      setTimeout(() => summary.current && summary.current.focus(), 0);
      return;
    }
    onSubmit && onSubmit(fd);
    setSent(true);
    setTimeout(() => done.current && done.current.focus(), 0);
  };
  if (sent) return /*#__PURE__*/React.createElement("div", {
    ref: done,
    tabIndex: -1,
    role: "status",
    style: {
      borderRadius: 20,
      background: 'var(--white)',
      padding: 'clamp(24px,4vw,40px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontFamily: 'var(--font-body)',
      outline: 'none'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 20,
      fontWeight: 600,
      color: 'var(--ink)'
    }
  }, successTitle), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      color: 'var(--stone)'
    }
  }, successBody));
  const errKeys = Object.keys(errors);
  const msg = f => errors[f.name] ? /*#__PURE__*/React.createElement("span", {
    id: id(f.name) + '-err',
    style: err
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--teal-text)',
      fontWeight: 700
    }
  }, "!"), errors[f.name]) : null;
  const aria = f => ({
    'aria-invalid': errors[f.name] ? true : undefined,
    'aria-describedby': [f.help && id(f.name) + '-help', errors[f.name] && id(f.name) + '-err'].filter(Boolean).join(' ') || undefined
  });
  const label = f => /*#__PURE__*/React.createElement("span", {
    style: labelText
  }, f.label, f.required ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: 'var(--stone)'
    }
  }, " (required)") : null);
  const help = f => f.help ? /*#__PURE__*/React.createElement("span", {
    id: id(f.name) + '-help',
    style: {
      fontSize: 14,
      color: 'var(--stone)'
    }
  }, f.help) : null;
  return /*#__PURE__*/React.createElement("form", {
    noValidate: true,
    onSubmit: submit,
    style: {
      borderRadius: 20,
      background: 'var(--white)',
      padding: 'clamp(24px,4vw,40px)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))',
      gap: '20px 24px',
      fontFamily: 'var(--font-body)'
    }
  }, errKeys.length ? /*#__PURE__*/React.createElement("div", {
    ref: summary,
    tabIndex: -1,
    role: "alert",
    style: {
      gridColumn: '1 / -1',
      borderRadius: 12,
      background: 'var(--mint)',
      padding: '16px 18px',
      outline: 'none'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 6px',
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--ink)'
    }
  }, "Please check ", errKeys.length === 1 ? 'this field' : `these ${errKeys.length} fields`), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 18,
      fontSize: 14
    }
  }, errKeys.map(k => /*#__PURE__*/React.createElement("li", {
    key: k
  }, /*#__PURE__*/React.createElement("a", {
    href: '#' + id(k),
    style: {
      color: 'var(--teal-text)'
    }
  }, errors[k]))))) : null, fields.map(f => {
    const full = f.full || ['textarea', 'radio', 'checkbox', 'file'].includes(f.type) ? {
      gridColumn: '1 / -1'
    } : {};
    if (f.type === 'radio') return /*#__PURE__*/React.createElement("fieldset", _extends({
      key: f.name,
      style: {
        ...full,
        margin: 0,
        padding: 0,
        border: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, aria(f)), /*#__PURE__*/React.createElement("legend", {
      style: {
        ...labelText,
        padding: 0,
        marginBottom: 8
      }
    }, f.label), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 10
      }
    }, f.options.map((o, i) => /*#__PURE__*/React.createElement("label", {
      key: o,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        height: 48,
        padding: '0 18px',
        borderRadius: 999,
        border: '1px solid var(--border-strong)',
        fontSize: 15,
        fontWeight: 500,
        color: 'var(--ink)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: f.name,
      value: o,
      defaultChecked: f.defaultValue ? f.defaultValue === o : i === 0,
      style: {
        accentColor: 'var(--teal-text)',
        width: 18,
        height: 18,
        margin: 0
      }
    }), o))), msg(f));
    if (f.type === 'checkbox') return /*#__PURE__*/React.createElement("div", {
      key: f.name,
      style: {
        ...full,
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: id(f.name),
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'flex-start',
        fontSize: 15,
        lineHeight: 1.5,
        color: 'var(--ink)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("input", _extends({
      id: id(f.name),
      name: f.name,
      type: "checkbox"
    }, aria(f), {
      style: {
        accentColor: 'var(--teal-text)',
        width: 20,
        height: 20,
        margin: '1px 0 0',
        flex: 'none'
      }
    })), /*#__PURE__*/React.createElement("span", null, f.label)), msg(f));
    const common = {
      id: id(f.name),
      name: f.name,
      autoComplete: f.autoComplete,
      ...aria(f)
    };
    const control = f.type === 'select' ? /*#__PURE__*/React.createElement("select", _extends({}, common, {
      defaultValue: "",
      style: {
        ...field,
        appearance: 'auto'
      }
    }), /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Select\u2026"), f.options.map(o => /*#__PURE__*/React.createElement("option", {
      key: o,
      value: o
    }, o))) : f.type === 'textarea' ? /*#__PURE__*/React.createElement("textarea", _extends({}, common, {
      rows: 5,
      style: {
        ...field,
        height: 'auto',
        minHeight: 140,
        padding: '12px 14px',
        resize: 'vertical',
        lineHeight: 1.5
      }
    })) : f.type === 'file' ? /*#__PURE__*/React.createElement("input", _extends({}, common, {
      type: "file",
      multiple: true,
      accept: f.accept,
      style: {
        ...field,
        height: 'auto',
        padding: 12,
        borderStyle: 'dashed'
      }
    })) : /*#__PURE__*/React.createElement("input", _extends({}, common, {
      type: f.type || 'text',
      style: field
    }));
    return /*#__PURE__*/React.createElement("label", {
      key: f.name,
      htmlFor: id(f.name),
      style: {
        ...full,
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, label(f), help(f), control, msg(f));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: '12px 20px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit"
  }, submitLabel), footnote ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--stone)'
    }
  }, footnote) : null));
}
Object.assign(__ds_scope, { MultiFieldForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/MultiFieldForm.jsx", error: String((e && e.message) || e) }); }

// components/forms/ContactForm.jsx
try { (() => {
// v3: the General Enquiries form on Contact, built on MultiFieldForm so labels, errors and success behave identically.
function ContactForm({
  submitLabel = 'Send Message',
  privacyHref = '/privacy-policy/',
  onSubmit
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.MultiFieldForm, {
    idPrefix: "g",
    submitLabel: submitLabel,
    onSubmit: onSubmit,
    fields: [{
      name: 'name',
      label: 'Name',
      required: true,
      autoComplete: 'name'
    }, {
      name: 'phone',
      label: 'Phone Number',
      type: 'tel',
      autoComplete: 'tel'
    }, {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      required: true,
      autoComplete: 'email',
      full: true
    }, {
      name: 'message',
      label: 'Message',
      type: 'textarea',
      required: true
    }, {
      name: 'consent',
      type: 'checkbox',
      required: true,
      error: 'Confirm you agree to be contacted',
      label: /*#__PURE__*/React.createElement(React.Fragment, null, "I agree to the practice contacting me about this enquiry, and to my details being handled in line with the ", /*#__PURE__*/React.createElement("a", {
        href: privacyHref,
        style: {
          color: 'var(--teal-text)'
        }
      }, "Privacy Policy"), ".")
    }]
  });
}
Object.assign(__ds_scope, { ContactForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ContactForm.jsx", error: String((e && e.message) || e) }); }

// components/hero/CredentialsStrip.jsx
try { (() => {
// v2: single quiet line of plain text with hairline separators (per content brief).
// items: string[]  e.g. ['FRCS','FEBS','MPhil (Cantab)','GMC 6047680']
function CredentialsStrip({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      rowGap: 10,
      padding: '24px 0',
      borderBottom: '1px solid var(--border-default)',
      fontFamily: 'var(--font-body)'
    }
  }, items.map((label, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--stone)',
      whiteSpace: 'nowrap'
    }
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 14,
      background: 'var(--border-strong)',
      margin: '0 16px'
    }
  }), label)));
}
Object.assign(__ds_scope, { CredentialsStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/hero/CredentialsStrip.jsx", error: String((e && e.message) || e) }); }

// components/hero/HeroBanner.jsx
try { (() => {
// v2: responsive (stacks under ~800px), real photo slot, ghost word removed,
// role line separated from eyebrow, factual float card (no star rating).
function HeroBanner({
  eyebrow,
  title,
  role,
  subtitle,
  ctaLabel,
  ctaHref,
  photoSrc,
  photoAlt = '',
  photoGradient = 'var(--photo-duotone-1)',
  floatEyebrow,
  floatTitle,
  floatCaption
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-hero)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1160,
      margin: '0 auto',
      padding: '72px 32px 84px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,360px),1fr))',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      alignItems: 'flex-start'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-eyebrow)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-eyebrow)',
      color: 'var(--teal-text)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-display)',
      letterSpacing: 'var(--tracking-display)',
      fontSize: 'var(--text-h1)',
      lineHeight: 'var(--leading-tight)',
      color: 'var(--ink)',
      textWrap: 'balance'
    }
  }, title), role && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 17,
      fontWeight: 600,
      lineHeight: 1.4,
      color: 'var(--ink)'
    }
  }, role), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-body)',
      lineHeight: 'var(--leading-normal)',
      color: 'var(--stone)',
      maxWidth: 480,
      textWrap: 'pretty'
    }
  }, subtitle), ctaLabel && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    href: ctaHref
  }, ctaLabel))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      paddingBottom: floatTitle ? 28 : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'clamp(360px,42vw,480px)',
      borderRadius: 16,
      overflow: 'hidden',
      background: photoGradient
    }
  }, photoSrc && /*#__PURE__*/React.createElement("img", {
    src: photoSrc,
    alt: photoAlt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })), floatTitle && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: -20,
      bottom: 0,
      background: 'var(--white)',
      borderRadius: 14,
      boxShadow: 'var(--shadow-float)',
      padding: '18px 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      maxWidth: 260
    }
  }, floatEyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-eyebrow)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-eyebrow)',
      color: 'var(--teal-text)'
    }
  }, floatEyebrow), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-display)',
      fontSize: 18,
      lineHeight: 1.25,
      color: 'var(--ink)'
    }
  }, floatTitle), floatCaption && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--stone)'
    }
  }, floatCaption)))));
}
Object.assign(__ds_scope, { HeroBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/hero/HeroBanner.jsx", error: String((e && e.message) || e) }); }

// components/hero/SimplePageHeader.jsx
try { (() => {
// v3: matches Page Header.dc.html. Mint-to-white band, breadcrumb, eyebrow, fluid h1, optional intro and pill links.
function SimplePageHeader({
  title,
  eyebrow,
  intro,
  crumb,
  parentLabel,
  parentHref,
  homeHref = '/',
  links = []
}) {
  const sep = /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "/");
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'linear-gradient(180deg,var(--mint) 0%,var(--white) 100%)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1160,
      margin: '0 auto',
      padding: '40px 32px 56px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Breadcrumb",
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      fontSize: 14,
      color: 'var(--stone)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: homeHref,
    style: {
      color: 'var(--teal-text)',
      textDecoration: 'none'
    }
  }, "Home"), sep, parentLabel ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
    href: parentHref,
    style: {
      color: 'var(--teal-text)',
      textDecoration: 'none'
    }
  }, parentLabel), sep) : null, /*#__PURE__*/React.createElement("span", {
    "aria-current": "page",
    style: {
      color: 'var(--ink)'
    }
  }, crumb || title)), eyebrow ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      fontSize: 'var(--text-eyebrow)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-eyebrow)',
      color: 'var(--teal-text)'
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-display)',
      letterSpacing: '-0.035em',
      fontSize: 'var(--text-h1)',
      lineHeight: 1.04,
      color: 'var(--ink)',
      textWrap: 'balance'
    }
  }, title), intro ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 19,
      fontWeight: 500,
      lineHeight: 1.45,
      color: 'var(--ink)',
      maxWidth: 680,
      textWrap: 'pretty'
    }
  }, intro) : null, links.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 8
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.href,
    href: l.href,
    style: {
      padding: '10px 18px',
      borderRadius: 999,
      background: 'var(--white)',
      border: '1px solid var(--border-strong)',
      color: 'var(--ink)',
      fontSize: 14,
      fontWeight: 600,
      textDecoration: 'none',
      transition: 'background-color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)'
    }
  }, l.label))) : null));
}
Object.assign(__ds_scope, { SimplePageHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/hero/SimplePageHeader.jsx", error: String((e && e.message) || e) }); }

// components/content/ConditionProcedureTemplate.jsx
try { (() => {
// v3: matches Condition - Gallstones / Procedure - Liver Resection. Page header with breadcrumb, sticky table of contents
// (hidden below 900px) beside a 720px article, h2 sections at 600 weight, FAQ, closing CTA banner.
const slug = s => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
function ConditionProcedureTemplate({
  eyebrow,
  title,
  intro,
  parentLabel,
  parentHref,
  sections,
  faqItems,
  ctaHeading = 'Arrange a Consultation or Second Opinion',
  ctaBody = "We'll guide you through the details.",
  ctaLabel = 'Book a Consultation',
  ctaHref = '/consultations/#book'
}) {
  const [w, setW] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 1280);
  React.useEffect(() => {
    const r = () => setW(window.innerWidth);
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);
  const secs = sections.map(s => ({
    ...s,
    id: s.id || slug(s.heading)
  }));
  const hasFaq = faqItems && faqItems.length > 0;
  const toc = [...secs.map(s => ({
    label: s.heading,
    href: '#' + s.id
  })), ...(hasFaq ? [{
    label: 'Frequently Asked Questions',
    href: '#faq'
  }] : [])];
  const h2 = {
    margin: 0,
    fontFamily: 'var(--font-display)',
    fontWeight: 'var(--weight-display)',
    letterSpacing: '-0.025em',
    fontSize: 'clamp(24px,2.6vw,30px)',
    lineHeight: 1.15,
    color: 'var(--ink)'
  };
  const sec = {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    scrollMarginTop: 96
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SimplePageHeader, {
    eyebrow: eyebrow,
    title: title,
    intro: intro,
    parentLabel: parentLabel,
    parentHref: parentHref
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1160,
      margin: '0 auto',
      padding: '16px 32px 96px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '40px 72px',
      alignItems: 'flex-start'
    }
  }, w >= 900 ? /*#__PURE__*/React.createElement(__ds_scope.TableOfContents, {
    items: toc,
    ctaHref: ctaHref
  }) : null, /*#__PURE__*/React.createElement("article", {
    style: {
      flex: '1 1 520px',
      minWidth: 0,
      maxWidth: 720,
      display: 'flex',
      flexDirection: 'column',
      gap: 56
    }
  }, secs.map(s => /*#__PURE__*/React.createElement("section", {
    key: s.id,
    id: s.id,
    style: s.callout ? {
      ...sec,
      borderRadius: 16,
      background: 'var(--mint)',
      padding: 28
    } : sec
  }, /*#__PURE__*/React.createElement("h2", {
    style: h2
  }, s.heading), typeof s.body === 'string' ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 17,
      lineHeight: 1.75,
      color: 'var(--stone)',
      textWrap: 'pretty'
    }
  }, s.body) : s.body, s.bullets && s.bullets.length ? /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, s.bullets.map((b, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '18px minmax(0,1fr)',
      gap: 12,
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--teal)',
      marginTop: 10
    }
  }), /*#__PURE__*/React.createElement("span", null, b)))) : null)), hasFaq ? /*#__PURE__*/React.createElement("section", {
    id: "faq",
    style: sec
  }, /*#__PURE__*/React.createElement("h2", {
    style: h2
  }, "Frequently Asked Questions"), /*#__PURE__*/React.createElement(__ds_scope.FAQAccordion, {
    items: faqItems
  })) : null)), /*#__PURE__*/React.createElement(__ds_scope.CTABanner, {
    heading: ctaHeading,
    body: ctaBody,
    ctaLabel: ctaLabel,
    ctaHref: ctaHref
  }));
}
Object.assign(__ds_scope, { ConditionProcedureTemplate });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ConditionProcedureTemplate.jsx", error: String((e && e.message) || e) }); }

// components/journey/PatientJourneyStepper.jsx
try { (() => {
const {
  useState,
  useEffect,
  useRef
} = React;
// v3: matches Patient Journey.dc.html. Wide: tablist of circular nodes on a progress rail + mint detail panel with optional timeline + Previous/Next.
// Narrow (<1024px): every stage stacked, no interaction. Arrow keys move between tabs.
function PatientJourneyStepper({
  steps,
  breakpoint = 1024,
  initial = 0
}) {
  const [w, setW] = useState(typeof window !== 'undefined' ? window.innerWidth : 1280);
  const [cur, setCur] = useState(initial);
  const tabs = useRef([]);
  useEffect(() => {
    const r = () => setW(window.innerWidth);
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);
  const n = steps.length;
  const pad = i => String(i + 1).padStart(2, '0');
  const go = i => {
    const k = Math.max(0, Math.min(n - 1, i));
    setCur(k);
    tabs.current[k] && tabs.current[k].focus();
  };
  const eyebrow = {
    fontSize: 'var(--text-eyebrow)',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: 'var(--tracking-eyebrow)'
  };
  const navBtn = dis => ({
    height: 44,
    padding: '0 18px',
    borderRadius: 999,
    border: '1px solid var(--border-strong)',
    background: 'var(--white)',
    fontFamily: 'var(--font-body)',
    fontSize: 14,
    fontWeight: 600,
    color: 'var(--ink)',
    cursor: dis ? 'default' : 'pointer',
    opacity: dis ? 0.4 : 1
  });
  const Timeline = ({
    times
  }) => times && times.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      padding: '22px 24px',
      borderRadius: 16,
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...eyebrow,
      color: 'var(--stone)'
    }
  }, "Timeline"), times.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontSize: 16,
      lineHeight: 1.55,
      color: 'var(--ink)'
    }
  }, t))) : null;
  if (w < breakpoint) return /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      fontFamily: 'var(--font-body)'
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      borderRadius: 20,
      background: 'var(--mint)',
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--white)',
      color: 'var(--teal-text)',
      border: '2px solid var(--teal)'
    }
  }, s.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: 22
  }) : pad(i)), /*#__PURE__*/React.createElement("span", {
    style: {
      ...eyebrow,
      color: 'var(--teal-text)'
    }
  }, "Stage ", pad(i))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontWeight: 'var(--weight-display)',
      letterSpacing: 'var(--tracking-display)',
      fontSize: 22,
      color: 'var(--ink)'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.65,
      color: 'var(--stone)'
    }
  }, s.description), /*#__PURE__*/React.createElement(Timeline, {
    times: s.times
  }))));
  const s = steps[cur];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28,
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    "aria-label": "Stages of care",
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: `repeat(${n},minmax(0,1fr))`,
      gap: 8
    },
    onKeyDown: e => {
      if (e.key === 'ArrowRight') go(cur + 1);
      if (e.key === 'ArrowLeft') go(cur - 1);
      if (e.key === 'Home') go(0);
      if (e.key === 'End') go(n - 1);
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: '7%',
      right: '7%',
      top: 28,
      height: 2,
      background: 'var(--border-default)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: '7%',
      top: 28,
      height: 2,
      width: `${cur / (n - 1) * 86}%`,
      background: 'var(--teal)',
      transition: 'width var(--duration-base) var(--ease-standard)'
    }
  }), steps.map((st, i) => {
    const on = i === cur,
      done = i < cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      ref: el => tabs.current[i] = el,
      role: "tab",
      id: `stage-tab-${i}`,
      "aria-selected": on,
      "aria-controls": "stage-panel",
      tabIndex: on ? 0 : -1,
      onClick: () => setCur(i),
      style: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12,
        padding: '0 4px 8px',
        border: 0,
        background: 'transparent',
        fontFamily: 'var(--font-body)',
        cursor: 'pointer',
        textAlign: 'center',
        borderRadius: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 56,
        height: 56,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: on ? 'var(--teal-text)' : 'var(--white)',
        color: on ? 'var(--white)' : 'var(--teal-text)',
        border: `2px solid ${on || done ? 'var(--teal-text)' : 'var(--border-strong)'}`,
        transition: 'background var(--duration-fast), color var(--duration-fast)'
      }
    }, st.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: st.icon,
      size: 24
    }) : pad(i)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: 'var(--teal-text)'
      }
    }, pad(i)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        fontWeight: on ? 600 : 500,
        lineHeight: 1.3,
        color: 'var(--ink)'
      }
    }, st.title));
  })), /*#__PURE__*/React.createElement("div", {
    id: "stage-panel",
    role: "tabpanel",
    "aria-labelledby": `stage-tab-${cur}`,
    "aria-live": "polite",
    style: {
      borderRadius: 20,
      background: 'var(--mint)',
      padding: 'clamp(28px,4vw,44px)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.4fr) minmax(0,1fr)',
      gap: '32px 56px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...eyebrow,
      color: 'var(--teal-text)'
    }
  }, "Stage ", pad(cur), " of ", n), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontWeight: 'var(--weight-display)',
      letterSpacing: 'var(--tracking-display)',
      fontSize: 28,
      lineHeight: 1.15,
      color: 'var(--ink)'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 17,
      lineHeight: 1.7,
      color: 'color-mix(in oklch,var(--stone) 80%,var(--ink))'
    }
  }, s.description)), /*#__PURE__*/React.createElement(Timeline, {
    times: s.times
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    disabled: cur === 0,
    onClick: () => setCur(cur - 1),
    style: navBtn(cur === 0)
  }, "\u2190 Previous stage"), /*#__PURE__*/React.createElement("button", {
    disabled: cur === n - 1,
    onClick: () => setCur(cur + 1),
    style: navBtn(cur === n - 1)
  }, "Next stage \u2192")));
}
Object.assign(__ds_scope, { PatientJourneyStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/journey/PatientJourneyStepper.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
// v3: real links, one <nav> per link column. Plain strings are still accepted for non-link lines.
// The page owns the <footer> landmark and the 1160px wrap (unchanged from v2 usage).
function Footer({
  columns,
  note
}) {
  const linkStyle = {
    color: 'var(--text-inverse-muted)',
    textDecoration: 'none'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink)',
      color: 'var(--text-inverse-muted)',
      padding: '40px 44px',
      fontSize: 13,
      lineHeight: 1.5,
      borderRadius: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 28,
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 22
    }
  }, columns.map((col, i) => {
    const hasLinks = col.links.some(l => typeof l === 'object' && l.href);
    const Wrap = hasLinks ? 'nav' : 'div';
    return /*#__PURE__*/React.createElement(Wrap, {
      key: i,
      "aria-label": hasLinks ? col.heading : undefined,
      style: {
        minWidth: 160
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        color: 'var(--white)',
        fontSize: 12,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        margin: '0 0 10px',
        fontWeight: 600
      }
    }, col.heading), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      }
    }, col.links.map((l, j) => /*#__PURE__*/React.createElement("li", {
      key: j
    }, typeof l === 'string' ? l : /*#__PURE__*/React.createElement("a", {
      href: l.href,
      target: l.external ? '_blank' : undefined,
      rel: l.external ? 'noopener' : undefined,
      style: linkStyle
    }, l.label, l.external ? /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        width: 1,
        height: 1,
        overflow: 'hidden',
        clip: 'rect(0 0 0 0)'
      }
    }, " (opens in new tab)") : null)))));
  })), note ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      paddingTop: 20,
      borderTop: '1px solid var(--border-inverse)',
      fontSize: 12
    }
  }, note) : null);
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
const {
  useState,
  useEffect,
  useRef
} = React;
// v3: matches Site Header.dc.html. Sticky positioning is applied by the page (position:sticky; top:0; z-index:50).
// Desktop >=1180px: inline nav, dropdowns on hover-intent (160ms close) and click, Escape closes.
// Below: 44px Menu button, accordion sub-lists. Book CTA always visible. Compacts 76 -> 60px after 64px scroll.
const DEFAULT_ITEMS = [{
  label: 'Home',
  href: '/'
}, {
  label: 'About',
  href: '/about/'
}, {
  label: 'Conditions',
  href: '/conditions/',
  hubLabel: 'All conditions →',
  menu: [{
    label: 'Gallstones',
    href: '/conditions/gallstones/'
  }, {
    label: 'Pancreatic Cancer',
    href: '/conditions/pancreatic-cancer/'
  }, {
    label: 'Liver Cancer',
    href: '/conditions/liver-cancer/'
  }, {
    label: 'Hernia',
    href: '/conditions/hernia/'
  }, {
    label: 'Bile Duct Cancer',
    href: '/conditions/bile-duct-cancer/'
  }]
}, {
  label: 'Procedures',
  href: '/procedures/',
  hubLabel: 'All procedures →',
  menu: [{
    label: 'Laparoscopic or Robotic Cholecystectomy',
    href: '/procedures/cholecystectomy/'
  }, {
    label: 'Whipple Procedure',
    href: '/procedures/whipple/'
  }, {
    label: 'Distal Pancreatectomy',
    href: '/procedures/distal-pancreatectomy/'
  }, {
    label: 'Liver Resection',
    href: '/procedures/liver-resection/'
  }, {
    label: 'Hernia Repair',
    href: '/procedures/hernia-repair/'
  }]
}, {
  label: 'Patient Journey',
  href: '/patient-journey/'
}, {
  label: 'Publications & Media',
  href: '/publications-media/'
}, {
  label: 'Consultations',
  href: '/consultations/'
}, {
  label: 'Contact',
  href: '/contact/'
}];
const ease = 'var(--ease-standard)';
function SiteHeader({
  wordmark = 'Satheesh Iype',
  homeHref = '/',
  items = DEFAULT_ITEMS,
  current,
  ctaLabel = 'Book a Consultation',
  ctaHref = '/consultations/#book',
  breakpoint = 1180
}) {
  const [w, setW] = useState(typeof window !== 'undefined' ? window.innerWidth : 1280);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState(null);
  const ct = useRef(null);
  useEffect(() => {
    const onScroll = () => setScrolled(s => s ? window.scrollY > 4 : window.scrollY > 64);
    const onResize = () => setW(window.innerWidth);
    const onKey = e => {
      if (e.key === 'Escape') {
        setOpen(null);
        setMobileOpen(false);
        setMobileSub(null);
      }
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    window.addEventListener('resize', onResize);
    window.addEventListener('keydown', onKey);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('keydown', onKey);
      clearTimeout(ct.current);
    };
  }, []);
  const desktop = w >= breakpoint;
  const isCur = it => it.label === current;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--white)',
      borderBottom: '1px solid var(--border-default)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1160,
      margin: '0 auto',
      padding: '0 32px',
      height: scrolled ? 60 : 76,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 20,
      transition: `height var(--duration-base) ${ease}`
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: homeHref,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-display)',
      letterSpacing: 'var(--tracking-display)',
      fontSize: 21,
      color: 'var(--ink)',
      whiteSpace: 'nowrap',
      textDecoration: 'none'
    }
  }, wordmark), desktop && /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Main",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 22,
      height: '100%'
    }
  }, items.map(it => {
    const m = it.menu && it.menu.length;
    const o = m && open === it.label;
    const cur = isCur(it);
    return /*#__PURE__*/React.createElement("div", {
      key: it.label,
      style: {
        position: 'relative',
        height: '100%',
        display: 'flex',
        alignItems: 'center'
      },
      onMouseEnter: () => {
        clearTimeout(ct.current);
        setOpen(m ? it.label : null);
      },
      onMouseLeave: () => {
        clearTimeout(ct.current);
        ct.current = setTimeout(() => setOpen(null), 160);
      },
      onBlur: e => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(null);
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: it.href,
      "aria-current": cur ? 'page' : undefined,
      "aria-expanded": m ? !!o : undefined,
      onClick: e => {
        if (m) {
          e.preventDefault();
          setOpen(o ? null : it.label);
        }
      },
      style: {
        fontSize: 14,
        fontWeight: cur ? 600 : 500,
        color: cur ? 'var(--teal-text)' : 'var(--stone)',
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        whiteSpace: 'nowrap',
        padding: '8px 0',
        textDecoration: 'none',
        borderRadius: 4
      }
    }, it.label, m ? /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        fontSize: 9,
        color: 'var(--teal-text)',
        transition: `transform var(--duration-base) ${ease}`,
        transform: `rotate(${o ? 180 : 0}deg)`
      }
    }, "\u25BC") : null), m ? /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 'calc(100% - 6px)',
        left: -20,
        minWidth: 290,
        background: 'var(--white)',
        borderRadius: 16,
        boxShadow: 'var(--shadow-card)',
        padding: 12,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        opacity: o ? 1 : 0,
        visibility: o ? 'visible' : 'hidden',
        transform: `translateY(${o ? 0 : -6}px)`,
        transition: `opacity var(--duration-fast) ${ease}, transform var(--duration-base) ${ease}, visibility var(--duration-base)`
      }
    }, it.menu.map(s => /*#__PURE__*/React.createElement("a", {
      key: s.label,
      href: s.href,
      style: {
        padding: '10px 12px',
        borderRadius: 8,
        fontSize: 14,
        color: 'var(--ink)',
        textDecoration: 'none'
      }
    }, s.label)), /*#__PURE__*/React.createElement("a", {
      href: it.href,
      style: {
        marginTop: 6,
        padding: '12px 12px 4px',
        borderTop: '1px solid var(--border-default)',
        fontSize: 13,
        fontWeight: 600,
        color: 'var(--teal-text)',
        textDecoration: 'none'
      }
    }, it.hubLabel)) : null);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    href: ctaHref,
    size: "sm"
  }, ctaLabel), !desktop && /*#__PURE__*/React.createElement("button", {
    "aria-expanded": mobileOpen,
    "aria-controls": "site-mobile-menu",
    onClick: () => setMobileOpen(!mobileOpen),
    style: {
      height: 44,
      padding: '0 14px',
      borderRadius: 8,
      border: '1px solid var(--border-strong)',
      background: 'var(--white)',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--ink)',
      cursor: 'pointer'
    }
  }, mobileOpen ? 'Close' : 'Menu'))), !desktop && mobileOpen && /*#__PURE__*/React.createElement("nav", {
    id: "site-mobile-menu",
    "aria-label": "Main",
    style: {
      borderTop: '1px solid var(--border-default)',
      padding: '8px 32px 20px',
      display: 'flex',
      flexDirection: 'column'
    }
  }, items.map(it => {
    const m = it.menu && it.menu.length;
    const so = m && mobileSub === it.label;
    const cur = isCur(it);
    return /*#__PURE__*/React.createElement("div", {
      key: it.label,
      style: {
        borderBottom: '1px solid var(--border-default)'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: it.href,
      "aria-current": cur ? 'page' : undefined,
      "aria-expanded": m ? !!so : undefined,
      onClick: e => {
        if (m) {
          e.preventDefault();
          setMobileSub(so ? null : it.label);
        }
      },
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '14px 0',
        fontSize: 16,
        fontWeight: cur ? 600 : 500,
        color: 'var(--ink)',
        textDecoration: 'none'
      }
    }, it.label, m ? /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        color: 'var(--teal-text)'
      }
    }, so ? '–' : '+') : null), so ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0 0 12px 14px'
      }
    }, it.menu.map(s => /*#__PURE__*/React.createElement("a", {
      key: s.label,
      href: s.href,
      style: {
        padding: '9px 0',
        fontSize: 15,
        color: 'var(--stone)',
        textDecoration: 'none'
      }
    }, s.label)), /*#__PURE__*/React.createElement("a", {
      href: it.href,
      style: {
        padding: '9px 0',
        fontSize: 14,
        fontWeight: 600,
        color: 'var(--teal-text)',
        textDecoration: 'none'
      }
    }, it.hubLabel)) : null);
  })));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CTABanner = __ds_scope.CTABanner;

__ds_ns.ConditionProcedureTemplate = __ds_scope.ConditionProcedureTemplate;

__ds_ns.DifferentiatorList = __ds_scope.DifferentiatorList;

__ds_ns.PathList = __ds_scope.PathList;

__ds_ns.PublicationList = __ds_scope.PublicationList;

__ds_ns.QuoteFeature = __ds_scope.QuoteFeature;

__ds_ns.ResearchInterestsGrid = __ds_scope.ResearchInterestsGrid;

__ds_ns.TableOfContents = __ds_scope.TableOfContents;

__ds_ns.TwoUpCard = __ds_scope.TwoUpCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.FAQAccordion = __ds_scope.FAQAccordion;

__ds_ns.LogoStrip = __ds_scope.LogoStrip;

__ds_ns.RatingCard = __ds_scope.RatingCard;

__ds_ns.ReviewWidgetEmbed = __ds_scope.ReviewWidgetEmbed;

__ds_ns.TestimonialCarousel = __ds_scope.TestimonialCarousel;

__ds_ns.ContactForm = __ds_scope.ContactForm;

__ds_ns.MultiFieldForm = __ds_scope.MultiFieldForm;

__ds_ns.CredentialsStrip = __ds_scope.CredentialsStrip;

__ds_ns.HeroBanner = __ds_scope.HeroBanner;

__ds_ns.SimplePageHeader = __ds_scope.SimplePageHeader;

__ds_ns.PatientJourneyStepper = __ds_scope.PatientJourneyStepper;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
