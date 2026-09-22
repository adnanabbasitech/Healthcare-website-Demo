export const clinic = {
  name: "Raha Medical",
  arabicName: "رها الطبية",
  tagline: "General Clinic & Laboratory",
  arabicTagline: "العيادة العامة والمختبر",
  address: "Riyadh, Saudi Arabia",
  phone: "+966 11 000 0000",
  email: "hello@rahamedical.sa",
  whatsapp: "966500000000",
  hours: "Sat–Thu: 9:00 AM – 10:00 PM",
};

const img = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=85`;

export const services = [
  { id:"general-consultation", category:"clinic", icon:"Stethoscope", title:"General Consultation", ar:"الاستشارات العامة", description:"Thoughtful assessment and guidance for everyday health needs.", arDescription:"تقييم وإرشاد طبي للاحتياجات الصحية اليومية.", image:img("photo-1559757175-0eb30cd8c063") },
  { id:"family-medicine", category:"clinic", icon:"Users", title:"Family Medicine", ar:"طب الأسرة", description:"Continuity of care for individuals and families.", arDescription:"رعاية مستمرة للأفراد والعائلات.", image:img("photo-1576091160399-112ba8d25d1d") },
  { id:"preventive-checkup", category:"clinic", icon:"ShieldCheck", title:"Preventive Checkups", ar:"الفحوصات الوقائية", description:"Structured health screening and preventive guidance.", arDescription:"فحوصات صحية منظمة وإرشادات وقائية.", image:img("photo-1505751172876-fa1923c5c528") },
  { id:"blood-testing", category:"lab", icon:"TestTube", title:"Blood Testing", ar:"تحاليل الدم", description:"Common hematology and chemistry testing categories.", arDescription:"فئات شائعة من تحاليل الدم والكيمياء الحيوية.", image:img("photo-1579154204601-01588f351e67") },
  { id:"hormone-testing", category:"lab", icon:"Activity", title:"Hormone Testing", ar:"تحاليل الهرمونات", description:"Hormone-related testing based on clinical indication.", arDescription:"تحاليل الهرمونات حسب الحاجة السريرية.", image:img("photo-1582719478250-c89cae4dc85b") },
  { id:"urine-testing", category:"lab", icon:"FlaskConical", title:"Urine Testing", ar:"تحاليل البول", description:"Routine urine testing and selected screening panels.", arDescription:"تحاليل البول الروتينية وبعض فحوصات الكشف.", image:img("photo-1581595219315-a187dd40c322") },
  { id:"diabetes-panel", category:"lab", icon:"Droplet", title:"Diabetes Panel", ar:"تحاليل السكري", description:"Glucose and related tests as clinically appropriate.", arDescription:"تحاليل الجلوكوز والفحوصات المرتبطة بها.", image:img("photo-1612277795421-9bc7706a4a34") },
  { id:"vitamin-tests", category:"lab", icon:"Pill", title:"Vitamin Testing", ar:"تحاليل الفيتامينات", description:"Selected vitamin testing and clinician-led interpretation.", arDescription:"تحاليل مختارة للفيتامينات وتفسيرها من المختص.", image:img("photo-1471864190281-a93a3070b6de") },
  { id:"infection-screening", category:"lab", icon:"Microscope", title:"Infection Screening", ar:"فحوصات العدوى", description:"Selected screening tests subject to availability.", arDescription:"فحوصات مختارة للكشف عن العدوى حسب التوفر.", image:img("photo-1576086213369-97a306d36557") },
];

export const doctors = [
  { name:"Dr. Sara Al-Harbi", arName:"د. سارة الحربي", role:"General Practitioner", arRole:"طبيبة عامة", bio:"Demo profile — replace with approved credentials before launch.", arBio:"ملف تجريبي — استبدله بالمؤهلات المعتمدة قبل الإطلاق.", image:img("photo-1559839734-2b71ea197ec2") },
  { name:"Dr. Omar Al-Qahtani", arName:"د. عمر القحطاني", role:"Family Medicine", arRole:"طب الأسرة", bio:"Demo profile — replace with approved credentials before launch.", arBio:"ملف تجريبي — استبدله بالمؤهلات المعتمدة قبل الإطلاق.", image:img("photo-1612349317150-e413f6a5b16d") },
  { name:"Maha Al-Salem", arName:"مها السالم", role:"Laboratory Specialist", arRole:"أخصائية مختبر", bio:"Demo profile — replace with approved credentials before launch.", arBio:"ملف تجريبي — استبدله بالمؤهلات المعتمدة قبل الإطلاق.", image:img("photo-1594824476967-48c8b964273f") },
];

export const faqs = [
  { q:"Do I need an appointment?", a:"Appointments are recommended. The production version can connect to your scheduling workflow." },
  { q:"How do I receive laboratory results?", a:"The final workflow can support secure delivery through an approved patient channel." },
  { q:"Are all tests available every day?", a:"Availability depends on the test, facility workflow, and operating schedule." },
  { q:"Can I speak with a clinician first?", a:"Yes, a clinician can guide the appropriate next step based on your needs." },
  { q:"Is this a real booking system?", a:"This starter project contains a demo form. A backend and approved integrations are required for live bookings." },
];

export const blogPosts = [
  { title:"Preparing for a Laboratory Visit", arTitle:"الاستعداد لزيارة المختبر", category:"Laboratory", image:img("photo-1579154204601-01588f351e67"), excerpt:"General preparation guidance. Replace with medically reviewed content before publishing." },
  { title:"Why Preventive Checkups Matter", arTitle:"أهمية الفحوصات الوقائية", category:"Wellness", image:img("photo-1505751172876-fa1923c5c528"), excerpt:"A simple overview of preventive care and clinician-led screening." },
  { title:"Understanding Your Patient Journey", arTitle:"فهم رحلة المريض", category:"Patient Care", image:img("photo-1519494026892-80bbd2d6fd0d"), excerpt:"How clear communication can make a clinic visit more comfortable." },
];
