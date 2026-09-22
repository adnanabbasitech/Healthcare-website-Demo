import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, NavLink, useParams } from "react-router-dom";
import * as Icons from "lucide-react";
import { clinic, services, doctors, faqs, blogPosts } from "./data";
import "./styles.css";

const I = ({ name, size = 20 }) => {
  const C = Icons[name] || Icons.Activity;
  return <C size={size} strokeWidth={1.8} />;
};

const copy = {
  en: {
    home:"Home", about:"About", services:"Services", doctors:"Doctors", laboratory:"Laboratory", blog:"Health Journal", contact:"Contact", appointment:"Book Appointment",
    badge:"Trusted healthcare for everyday wellbeing", hero:"Better healthcare. Clearer decisions. A more confident you.",
    heroText:"A modern general clinic and diagnostic laboratory experience designed around patient comfort, professional care, and clear communication.",
    explore:"Explore services", book:"Book a visit", appointmentTitle:"Ready to take the next step?",
    appointmentText:"Request a demo appointment. A production deployment can connect this form to your clinic workflow.",
    name:"Full name", phone:"Mobile number", email:"Email", date:"Preferred date", time:"Preferred time", select:"Select service", message:"Message", submit:"Request appointment",
    demo:"Demo only · No real appointment is created.", success:"Thank you. This demo request has been recorded locally in the interface only.",
    footer:"A bilingual healthcare website concept for clinics and laboratories in Saudi Arabia."
  },
  ar: {
    home:"الرئيسية", about:"من نحن", services:"الخدمات", doctors:"الأطباء", laboratory:"المختبر", blog:"المجلة الصحية", contact:"تواصل معنا", appointment:"حجز موعد",
    badge:"رعاية صحية موثوقة لرفاهيتك اليومية", hero:"رعاية أفضل. قرارات أوضح. حياة أكثر اطمئنانًا.",
    heroText:"تجربة حديثة للعيادات العامة والمختبرات التشخيصية، مصممة لراحة المريض والرعاية المهنية والتواصل الواضح.",
    explore:"استكشف الخدمات", book:"احجز زيارة", appointmentTitle:"هل أنت مستعد للخطوة التالية؟",
    appointmentText:"اطلب موعدًا تجريبيًا. يمكن ربط النموذج الحقيقي بسير عمل العيادة.",
    name:"الاسم الكامل", phone:"رقم الجوال", email:"البريد الإلكتروني", date:"التاريخ المفضل", time:"الوقت المفضل", select:"اختر الخدمة", message:"رسالتك", submit:"طلب موعد",
    demo:"تجريبي فقط · لا يتم إنشاء موعد حقيقي.", success:"شكرًا لك. تم تسجيل الطلب داخل الواجهة التجريبية فقط.",
    footer:"مفهوم موقع صحي ثنائي اللغة للعيادات والمختبرات في المملكة العربية السعودية."
  }
};

function Logo({ lang }) {
  return <Link to="/" className="brand" aria-label="Raha Medical home">
    <span className="brand-mark"><Icons.HeartPulse size={25}/><span className="brand-spark">+</span></span>
    <span className="brand-copy">
      <b>{lang === "ar" ? clinic.arabicName : clinic.name}</b>
      <small>{lang === "ar" ? clinic.arabicTagline : clinic.tagline}</small>
    </span>
  </Link>;
}

function Header({ lang, setLang }) {
  const t = copy[lang];
  const [open, setOpen] = useState(false);
  const links = [["/","home"],["/about","about"],["/services","services"],["/laboratory","laboratory"],["/doctors","doctors"],["/blog","blog"],["/contact","contact"]];
  return <header className="site-header">
    <div className="header-inner">
      <Logo lang={lang}/>
      <nav className="desktop-nav">{links.map(([to,key]) => <NavLink key={to} to={to} end={to === "/"}>{t[key]}</NavLink>)}</nav>
      <div className="header-actions">
        <button className="language-btn" onClick={() => setLang(lang === "en" ? "ar" : "en")}>{lang === "en" ? "العربية" : "English"}</button>
        <Link className="appointment-btn" to="/appointment"><Icons.CalendarCheck size={16}/><span>{t.appointment}</span></Link>
        <button className="menu-btn" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <Icons.X/> : <Icons.Menu/>}</button>
      </div>
    </div>
    {open && <div className="mobile-panel">
      {links.map(([to,key]) => <Link key={to} to={to} onClick={() => setOpen(false)}>{t[key]}</Link>)}
      <Link className="mobile-appointment" to="/appointment" onClick={() => setOpen(false)}><Icons.CalendarCheck size={17}/>{t.appointment}</Link>
    </div>}
  </header>;
}

function Footer({ lang }) {
  const t = copy[lang];
  return <footer className="footer"><div className="container footer-grid">
    <div><Logo lang={lang}/><p>{t.footer}</p></div>
    <div><h3>{lang === "en" ? "Quick Links" : "روابط سريعة"}</h3>{["about","services","laboratory","doctors","contact"].map(k => <Link key={k} to={"/" + k}>{t[k]}</Link>)}</div>
    <div><h3>{lang === "en" ? "Clinic Hours" : "ساعات العمل"}</h3><p>{clinic.hours}</p></div>
    <div><h3>{t.contact}</h3><p>{clinic.address}</p><p>{clinic.phone}</p><p>{clinic.email}</p></div>
  </div><div className="footer-bottom">© 2026 {clinic.name}. Demo website.</div></footer>;
}

function Layout({ children, lang, setLang }) {
  return <div dir={lang === "ar" ? "rtl" : "ltr"} className={lang === "ar" ? "arabic" : ""}><Header lang={lang} setLang={setLang}/><main>{children}</main><Footer lang={lang}/><a className="whatsapp" href={`https://wa.me/${clinic.whatsapp}`} target="_blank" rel="noreferrer"><Icons.MessageCircle size={24}/></a></div>;
}

function ButtonLink({ to, children, secondary=false }) { return <Link className={secondary ? "btn btn-secondary" : "btn"} to={to}>{children}<Icons.ArrowUpRight size={16}/></Link>; }

function Hero({ lang }) {
  const t = copy[lang];
  return <section className="hero"><div className="container hero-grid"><div>
    <div className="eyebrow-pill"><span/> {t.badge}</div>
    <h1>{t.hero}</h1><p className="lead">{t.heroText}</p>
    <div className="hero-actions"><ButtonLink to="/appointment">{t.book}</ButtonLink><ButtonLink to="/services" secondary>{t.explore}</ButtonLink></div>
    <div className="trust-row"><span><Icons.CheckCircle2 size={16}/> {lang === "en" ? "Patient-first care" : "رعاية تضع المريض أولًا"}</span><span><Icons.CheckCircle2 size={16}/> {lang === "en" ? "Modern workflow" : "سير عمل حديث"}</span></div>
  </div><div className="hero-visual"><img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=90" alt="Modern medical clinic"/><div className="floating-card"><Icons.BadgeCheck size={28}/><div><b>{lang === "en" ? "Clear care journey" : "رحلة رعاية واضحة"}</b><small>{lang === "en" ? "From visit to report" : "من الزيارة إلى التقرير"}</small></div></div></div></div></section>;
}

function SectionHeading({ eyebrow, title, text }) { return <div className="section-heading"><div className="eyebrow">{eyebrow}</div><h2>{title}</h2>{text && <p>{text}</p>}</div>; }

function ServiceCard({ s, lang }) {
  return <Link className="service-card" to={`/services/${s.id}`}><img src={s.image} alt=""/><div className="service-card-body"><span className="icon-tile"><I name={s.icon}/></span><h3>{lang === "ar" ? s.ar : s.title}</h3><p>{lang === "ar" ? s.arDescription : s.description}</p><b>{lang === "en" ? "Learn more" : "اعرف المزيد"} <Icons.ArrowUpRight size={15}/></b></div></Link>;
}

function CTA({ lang }) { const t = copy[lang]; return <section className="container cta"><div><div className="eyebrow light">{lang === "en" ? "YOUR HEALTH MATTERS" : "صحتك تهمنا"}</div><h2>{t.appointmentTitle}</h2><p>{t.appointmentText}</p></div><ButtonLink to="/appointment">{t.appointment}</ButtonLink></section>; }

function Home({ lang }) {
  const t = copy[lang];
  return <><Hero lang={lang}/><section className="container feature-strip"><div><I name="Activity"/><b>{lang === "en" ? "Comprehensive Care" : "رعاية شاملة"}</b><p>{lang === "en" ? "Clinic and laboratory services" : "خدمات العيادة والمختبر"}</p></div><div><I name="Users"/><b>{lang === "en" ? "Family Friendly" : "مناسب للعائلات"}</b><p>{lang === "en" ? "A welcoming patient experience" : "تجربة مريحة للمرضى"}</p></div><div><I name="ShieldCheck"/><b>{lang === "en" ? "Modern Standards" : "معايير حديثة"}</b><p>{lang === "en" ? "Structured and clear workflows" : "سير عمل منظم وواضح"}</p></div></section>
  <section className="container section"><SectionHeading eyebrow={lang === "en" ? "OUR SERVICES" : "خدماتنا"} title={t.hero.includes("Better") ? "Complete care, under one roof." : "رعاية متكاملة في مكان واحد."} text={lang === "en" ? "From general consultations to reliable laboratory testing." : "من الاستشارات العامة إلى التحاليل المخبرية الموثوقة."}/><div className="card-grid">{services.slice(0,6).map(s => <ServiceCard key={s.id} s={s} lang={lang}/>)}</div></section>
  <section className="container split-section"><img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1100&q=85" alt="Healthcare consultation"/><div><SectionHeading eyebrow={lang === "en" ? "WHY RAHA MEDICAL" : "لماذا رها الطبية"} title={lang === "en" ? "Professional care with a human approach." : "رعاية مهنية بروح إنسانية."} text={lang === "en" ? "We aim to make every visit calm, clear, and convenient." : "نسعى إلى جعل كل زيارة هادئة وواضحة وسهلة."}/><div className="check-grid"><span>✓ {lang === "en" ? "Personalized care" : "رعاية مخصصة"}</span><span>✓ {lang === "en" ? "Clear communication" : "تواصل واضح"}</span><span>✓ {lang === "en" ? "Modern workflow" : "سير عمل حديث"}</span><span>✓ {lang === "en" ? "Comfortable visits" : "زيارات مريحة"}</span></div></div></section><CTA lang={lang}/></>;
}

function InnerHero({ lang, eyebrow, title, text }) { return <section className="inner-hero"><div className="container"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{text}</p></div></section>; }

function Services({ lang, labOnly=false }) {
  const list = labOnly ? services.filter(s => s.category === "lab") : services;
  return <><InnerHero lang={lang} eyebrow={labOnly ? (lang === "en" ? "LABORATORY SERVICES" : "خدمات المختبر") : (lang === "en" ? "CLINIC & LABORATORY" : "العيادة والمختبر")} title={labOnly ? (lang === "en" ? "Diagnostic testing with a clear patient journey." : "تحاليل تشخيصية برحلة واضحة للمريض.") : (lang === "en" ? "Complete services for everyday health needs." : "خدمات متكاملة للاحتياجات الصحية اليومية.")} text={lang === "en" ? "Explore services designed around patient comfort and clear communication." : "استكشف خدماتنا المصممة حول راحة المريض والتواصل الواضح."}/><section className="container section"><div className="card-grid">{list.map(s => <ServiceCard key={s.id} s={s} lang={lang}/>)}</div></section><CTA lang={lang}/></>;
}

function Appointment({ lang }) {
  const t = copy[lang]; const [sent, setSent] = useState(false);
  return <><InnerHero eyebrow={lang === "en" ? "BOOK A VISIT" : "حجز زيارة"} title={lang === "en" ? "Let's find a time that works for you." : "لنجد وقتًا مناسبًا لك."} text={t.appointmentText}/><section className="container section appointment-layout"><form className="form-card" onSubmit={e => { e.preventDefault(); setSent(true); }}>{sent ? <div className="success"><Icons.CheckCircle2 size={50}/><h2>{t.success}</h2><button type="button" onClick={() => setSent(false)}>Submit another</button></div> : <><h2>{t.appointment}</h2><div className="form-grid"><Field label={t.name} required/><Field label={t.phone} required placeholder="+966 5X XXX XXXX"/><Field label={t.email} type="email"/><Field label={t.date} type="date" required/><Field label={t.time} type="time"/><label><span>{t.select}</span><select required><option value="">{t.select}</option>{services.map(s => <option key={s.id}>{lang === "ar" ? s.ar : s.title}</option>)}</select></label><Field label={t.message} textarea full/></div><button className="submit-btn">{t.submit}</button><p className="form-note">{t.demo}</p></>}</form><div className="contact-card"><Icons.MessageCircle size={35}/><h2>{lang === "en" ? "Prefer WhatsApp?" : "تفضل الواتساب؟"}</h2><p>{lang === "en" ? "Connect the production version to your official WhatsApp workflow." : "يمكن ربط النسخة الإنتاجية بسير عمل الواتساب الرسمي."}</p><a href={`https://wa.me/${clinic.whatsapp}`}>WhatsApp</a></div></section></>;
}

function Field({ label, type="text", required=false, placeholder="", textarea=false, full=false }) { return <label className={full ? "full" : ""}><span>{label}{required && " *"}</span>{textarea ? <textarea rows="4" required={required}/> : <input type={type} required={required} placeholder={placeholder}/>}</label>; }

function About({ lang }) { return <><InnerHero eyebrow={lang === "en" ? "ABOUT RAHA MEDICAL" : "عن رها الطبية"} title={lang === "en" ? "A modern healthcare experience built around people." : "تجربة رعاية صحية حديثة تتمحور حول الإنسان."} text={lang === "en" ? "We combine general medical care, preventive support, and diagnostic services." : "نجمع بين الرعاية الطبية العامة والوقاية والخدمات التشخيصية."}/><section className="container section split-section"><img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1100&q=85" alt="Healthcare facility"/><SectionHeading eyebrow={lang === "en" ? "OUR PHILOSOPHY" : "فلسفتنا"} title={lang === "en" ? "Care should feel clear, respectful, and human." : "يجب أن تكون الرعاية واضحة ومحترمة وإنسانية."} text={lang === "en" ? "Patients deserve to understand their options and know what happens next." : "يستحق المرضى فهم خياراتهم ومعرفة الخطوة التالية."}/></section><CTA lang={lang}/></>; }

function Doctors({ lang }) { return <><InnerHero eyebrow={lang === "en" ? "OUR TEAM" : "فريقنا"} title={lang === "en" ? "Professionals who put clarity first." : "مختصون يضعون الوضوح أولًا."} text={lang === "en" ? "Demo profiles for a general clinic and laboratory team." : "ملفات تعريفية تجريبية لفريق العيادة والمختبر."}/><section className="container section card-grid">{doctors.map(d => <div className="doctor-card" key={d.name}><img src={d.image} alt=""/><div><h3>{lang === "ar" ? d.arName : d.name}</h3><b>{lang === "ar" ? d.arRole : d.role}</b><p>{lang === "ar" ? d.arBio : d.bio}</p></div></div>)}</section><CTA lang={lang}/></>; }

function Contact({ lang }) { return <><InnerHero eyebrow={lang === "en" ? "CONTACT" : "تواصل معنا"} title={lang === "en" ? "Questions? We are here to help." : "هل لديك أسئلة؟ نحن هنا للمساعدة."} text={lang === "en" ? "Call, email, or use WhatsApp for the demo contact experience." : "اتصل أو أرسل بريدًا أو استخدم الواتساب."}/><section className="container section contact-grid">{[[Icons.MapPin,clinic.address],[Icons.Phone,clinic.phone],[Icons.Mail,clinic.email]].map(([C,text]) => <div className="info-card" key={text}><C size={28}/><p>{text}</p></div>)}</section><CTA lang={lang}/></>; }

function Blog({ lang }) { return <><InnerHero eyebrow={lang === "en" ? "HEALTH JOURNAL" : "المجلة الصحية"} title={lang === "en" ? "Useful health information without the jargon." : "معلومات صحية مفيدة بلغة واضحة."} text={lang === "en" ? "Educational demo articles for visitors." : "مقالات تجريبية تثقيفية للزوار."}/><section className="container section card-grid">{blogPosts.map(p => <article className="blog-card" key={p.title}><img src={p.image} alt=""/><div><b>{p.category}</b><h3>{lang === "ar" ? p.arTitle : p.title}</h3><p>{p.excerpt}</p></div></article>)}</section><CTA lang={lang}/></>; }

function ServiceDetail({ lang }) { const { id } = useParams(); const s = services.find(x => x.id === id) || services[0]; return <><InnerHero eyebrow={lang === "en" ? "SERVICE DETAILS" : "تفاصيل الخدمة"} title={lang === "ar" ? s.ar : s.title} text={lang === "ar" ? s.arDescription : s.description}/><section className="container section split-section"><img src={s.image} alt=""/><div><SectionHeading eyebrow={lang === "en" ? "PATIENT-FOCUSED" : "يركز على المريض"} title={lang === "en" ? "A structured approach to your visit." : "نهج منظم لزيارتك."} text={lang === "en" ? "A qualified clinician determines the appropriate next step. Replace this demo copy with approved service-specific information." : "يحدد المختص الخطوة التالية المناسبة. استبدل هذا النص بالمعلومات المعتمدة."}/><ButtonLink to="/appointment">{copy[lang].appointment}</ButtonLink></div></section><CTA lang={lang}/></>; }

function FAQ({ lang }) { const [open, setOpen] = useState(-1); return <section className="container section faq"><SectionHeading eyebrow="FAQ" title={lang === "en" ? "Common questions, answered clearly." : "إجابات واضحة عن الأسئلة الشائعة."}/>{faqs.map((f,i) => <div className="faq-item" key={f.q}><button onClick={() => setOpen(open === i ? -1 : i)}><span>{lang === "ar" ? ["هل أحتاج إلى موعد؟","كيف أستلم نتائج المختبر؟","هل جميع التحاليل متاحة يوميًا؟","هل يمكن استشارة الطبيب قبل التحليل؟","هل هذا نظام حجز حقيقي؟"][i] : f.q}</span><Icons.ChevronDown/></button>{open === i && <p>{f.a}</p>}</div>)}</section>; }

function App() { const [lang,setLang] = useState("en"); return <Layout lang={lang} setLang={setLang}><Routes><Route path="/" element={<Home lang={lang}/>}/><Route path="/about" element={<About lang={lang}/>}/><Route path="/services" element={<Services lang={lang}/>}/><Route path="/laboratory" element={<Services lang={lang} labOnly/>}/><Route path="/services/:id" element={<ServiceDetail lang={lang}/>}/><Route path="/doctors" element={<Doctors lang={lang}/>}/><Route path="/appointment" element={<Appointment lang={lang}/>}/><Route path="/contact" element={<Contact lang={lang}/>}/><Route path="/blog" element={<><Blog lang={lang}/><FAQ lang={lang}/></>}/><Route path="*" element={<Home lang={lang}/>}/></Routes></Layout>; }

createRoot(document.getElementById("root")).render(<BrowserRouter><App/></BrowserRouter>);
