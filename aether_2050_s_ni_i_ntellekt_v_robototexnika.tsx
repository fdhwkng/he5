import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  Cpu,
  Bot,
  Brain,
  Rocket,
  HeartPulse,
  Leaf,
  GraduationCap,
  Building2,
  ArrowRight,
  ChevronRight,
  X,
  Eye,
  Scan,
  Zap,
  ShieldCheck,
  Globe,
  Sliders,
  Menu,
  ArrowUp,
  CheckCircle2,
  Activity,
  Layers,
  Compass
} from 'lucide-react';

/**
 * ============================================================================
 * AETHER 2050 — Süni İntellekt və Robototexnika Ekosistemi
 * ============================================================================
 * Dizayn Fəlsəfəsi: "Canlı Hiss Etdirən İnterfeyslər" (Interfaces That Feel Alive)
 * - Kursoru izləyən dinamik işıq haləsi (Ambient Spotlight)
 * - Çoxqatlı paralaks sürüşdürmə (Multi-layer Parallax Scrolling)
 * - IntersectionObserver əsaslı mərhələli görünmə animasiyaları (Scroll Reveal)
 * - 3D perspektivli əyilən interaktiv kartlar (3D Tilt Cards)
 * - Xarici keçidlərdən asılı olmayan 100% generasiya olunmuş Canvas və SVG qrafikləri
 */

// ----------------------------------------------------------------------------
// 1. MƏLUMAT BAZASI (Azərbaycan dilində zəngin məzmun)
// ----------------------------------------------------------------------------

const KINETIC_WORDS = [
  'Avtonom Sistemlər',
  'Neyro-İnterfeyslər',
  'Kvant Zəkası',
  'Humanoid Köməkçilər'
];

const IMPACT_DOMAINS = [
  {
    id: 'medicine',
    category: 'Səhiyyə və Biotexnologiya',
    title: 'Avtonom Tibb və Nanorobotlar',
    shortDesc:
      'Qan dövranında hərəkət edən mikroskopik nanorobotlar hüceyrə səviyyəsində xəstəlikləri erkən mərhələdə aşkarlayır və müalicə edir.',
    fullDesc:
      '2040-cı illərə doğru cərrahiyyə və diaqnostika tamamilə yeni mərhələyə keçir. Süni intellektlə idarə olunan mikro-robotlar sağlam toxumalara toxunmadan yalnız zədələnmiş hüceyrələri bərpa edir, fərdi genetik kod əsasında dərman molekullarını birbaşa hədəfə çatdırır.',
    metricLabel: 'Diaqnostika Dəqiqliyi',
    metricValue: '99.8%',
    accent: '#00F0FF',
    icon: HeartPulse,
    breakthroughs: [
      'Hüceyrədaxili real vaxtlı biometrik monitorinq və avtomatik müdaxilə',
      'Süni intellekt tərəfindən saniyələr içində modelləşdirilən fərdi vaksinlər',
      'İnsan əlindən 50 dəfə daha stabil mikro-cərrahiyyə robotları'
    ],
    stats: [
      { label: 'Orta Ömür Uzadılması', value: 88 },
      { label: 'Əməliyyat Təhlükəsizliyi', value: 99 },
      { label: 'Erkən Diaqnoz Sürəti', value: 95 }
    ]
  },
  {
    id: 'industry',
    category: 'Yeni Nəsil İstehsalat',
    title: 'Ağıllı Sənaye və Kobotlar',
    shortDesc:
      'İnsanlarla çiyin-çiyinə təhlükəsiz şəkildə işləyən, öz-özünü öyrədən əməkdaş robotlar (kobotlar) istehsalatı transformasiya edir.',
    fullDesc:
      'Ənənəvi qapalı fabrik robotlarından fərqli olaraq, yeni nəsil kobotlar toxunma sensorları və kompüter görməsi vasitəsilə insan niyyətini öncədən anlayır. Təhlükəli və təkrarlanan ağır işləri robotlar öz üzərinə götürərək insanlara yaradıcı və strateji sahələrdə fokuslanma imkanı verir.',
    metricLabel: 'İstehsalat Səmərəliliyi',
    metricValue: '+340%',
    accent: '#8B5CF6',
    icon: Cpu,
    breakthroughs: [
      'Öz-özünü təmir edən və proqramlaşdıran modul fabrik xətləri',
      'Sıfır tullantı prinsipinə əsaslanan qapalı dövrəli ağıllı logistika',
      'İnsan hərəkətlərini bir baxışda mənimsəyən neyro-motor öyrənmə'
    ],
    stats: [
      { label: 'Enerji Qənaəti', value: 82 },
      { label: 'İstehsal Sürəti', value: 94 },
      { label: 'İş Yeri Təhlükəsizliyi', value: 98 }
    ]
  },
  {
    id: 'space',
    category: 'Astro-Robototexnika',
    title: 'Kosmosun Fəthi və Ekspedisiya',
    shortDesc:
      'Mars, Ay və uzaq peyklərdə insan gəlməzdən əvvəl yaşayış bazaları quran tam avtonom kosmik robot sürüləri.',
    fullDesc:
      'Kosmosun dərinliklərində işıq sürəti məhdudiyyəti səbəbindən Yerdən canlı idarəetmə mümkün deyil. Kvant Sİ nüvəsinə malik avtonom roverlər və tikinti dronları yerli planetar resurslardan (regolit və buz) istifadə edərək radiasiyadan qorunan bazalar inşa edir.',
    metricLabel: 'Avtonom Qərarvermə',
    metricValue: '100%',
    accent: '#F59E0B',
    icon: Rocket,
    breakthroughs: [
      '3D çap texnologiyası ilə Ay və Mars səthində avtonom baza tikintisi',
      'Asteroidlərdən nadir metalların çıxarılması və orbital emalı',
      'Dərin kosmosda öz marşrutunu tapan neyro-naviqasiya sistemləri'
    ],
    stats: [
      { label: 'Ekstremal Davamlılıq', value: 96 },
      { label: 'Resurs Hasilatı', value: 85 },
      { label: 'Naviqasiya Dəqiqliyi', value: 99 }
    ]
  },
  {
    id: 'ecology',
    category: 'Planetar Bərpa',
    title: 'İqlim Bərpası və Ekoloji Dronlar',
    shortDesc:
      'Okeanları mikroplastikdən təmizləyən avtonom sualtı aparatlar və səhraları yenidən meşəyə çevirən əkin dronları.',
    fullDesc:
      'Süni intellekt peyk məlumatlarını analiz edərək ekosistemin zəif nöqtələrini müəyyənləşdirir. Günəş enerjisi ilə işləyən avtonom dron sürüləri hər gün milyonlarla toxum əkir, sualtı robotlar isə mərcan riflərini bərpa edərək okean balansını qoruyur.',
    metricLabel: 'Karbon Azaldılması',
    metricValue: '-64%',
    accent: '#10B981',
    icon: Leaf,
    breakthroughs: [
      'Gündə 10 milyon ağac əkmə gücünə malik avtonom toxumlama dronları',
      'Okean axınlarını izləyərək tullantıları toplayan bio-mimetik robotlar',
      'Kənd təsərrüfatında su sərfiyyatını 75% azaldan dəqiq aqro-robotlar'
    ],
    stats: [
      { label: 'Okean Təmizliyi', value: 89 },
      { label: 'Meşə Bərpası', value: 92 },
      { label: 'Enerji Müstəqilliyi', value: 97 }
    ]
  },
  {
    id: 'education',
    category: 'Koqnitiv İnkişaf',
    title: 'Fərdi Təhsil və Koqnitiv Sİ',
    shortDesc:
      'Hər bir insanın öyrənmə sürətinə, maraqlarına və düşünmə tərzinə uyğunlaşan fərdi süni intellekt mentorları.',
    fullDesc:
      'Standart təhsil modelləri yerini tam fərdiləşdirilmiş koqnitiv ekosistemlərə verir. Süni intellekt tələbənin hansı mövzunu vizual, hansını praktiki daha yaxşı qavradığını analiz edir və interaktiv holoqrafik simulyasiyalarla öyrənməni 5 dəfə sürətləndirir.',
    metricLabel: 'Mənimsəmə Sürəti',
    metricValue: '4.5x',
    accent: '#38BDF8',
    icon: GraduationCap,
    breakthroughs: [
      'Real vaxtlı koqnitiv yük analizi və adaptiv dərs proqramları',
      'Dil baryerlərini tam aradan qaldıran ani neyro-tərcümə mühiti',
      'Elmi tədqiqatları demokratikləşdirən virtual laboratoriya assistentləri'
    ],
    stats: [
      { label: 'Fərdiləşdirmə Səviyyəsi', value: 98 },
      { label: 'Bilik Yaddaşı', value: 91 },
      { label: 'Əlçatanlıq', value: 96 }
    ]
  },
  {
    id: 'cities',
    category: 'Ağıllı İnfrastruktur',
    title: 'Ağıllı Şəhərlər və Avtonom Nəqliyyat',
    shortDesc:
      'Sıfır tıxac, sıfır yol qəzası və öz-özünü balanslaşdıran yaşıl enerji şəbəkələri ilə idarə olunan meqapolislər.',
    fullDesc:
      'Gələcəyin şəhərləri vahid bir neyron şəbəkəsi kimi nəfəs alır. Avtonom elektrik kapsulları və hava taksiləri bir-biri ilə millisaniyələr içində əlaqə saxlayaraq nəqliyyat axınını optimallaşdırır, binalar isə günəş və külək enerjisini dinamik bölüşdürür.',
    metricLabel: 'Nəqliyyat Qəzaları',
    metricValue: '-99.4%',
    accent: '#EC4899',
    icon: Building2,
    breakthroughs: [
      'Vahid Sİ trafik mərkəzinə qoşulmuş pilotsuz yerüstü və hava nəqliyyatı',
      'İstilik və elektrik itkisini minimuma endirən ağıllı mikro-şəbəkələr',
      'Təbii fəlakətləri öncədən proqnozlaşdıran şəhər sensor ekosistemi'
    ],
    stats: [
      { label: 'Tıxacların Azalması', value: 93 },
      { label: 'Yaşıl Enerji Payı', value: 90 },
      { label: 'Vətəndaş Məmnuniyyəti', value: 94 }
    ]
  }
];

const TIMELINE_ERAS = [
  {
    year: '2026',
    era: 'Multimodal İntellekt və İlkin Humanoidlər',
    badge: 'Hazırkı Mərhələ',
    summary:
      'Süni intellekt artıq təkcə mətn və kod deyil, fiziki dünyanı görmə, eşitmə və məkan qavrayışı ilə dərk edir. İlk kommersiya humanoid robotları logistika mərkəzlərində və müasir fabriklərdə fəaliyyətə başlayır.',
    highlights: [
      'Real vaxtlı səs, görüntü və fiziki hərəkət koordinasiyasına malik Sİ modelləri',
      'Sənaye anbarlarında insanlarla birlikdə işləyən ilk ikiayaqlı humanoidlər',
      'Elmi kəşfləri sürətləndirən avtonom laboratoriya sistemləri'
    ],
    metrics: [
      { label: 'Fiziki Avtonomluq', value: 38 },
      { label: 'Kvant Hesablama İnteqrasiyası', value: 24 },
      { label: 'İnsan-Robot Əməkdaşlığı', value: 45 }
    ]
  },
  {
    year: '2033',
    era: 'Sənaye və Tibbdə Tam Avtonomiya',
    badge: 'Yaxın Üfüq',
    summary:
      'Robotlar standart ev və şəhər infrastrukturunun ayrılmaz hissəsinə çevrilir. Tibbi diaqnostika və mikro-cərrahiyyədə Sİ dəstəkli sistemlər qlobal standart halını alır, təhlükəli iş sahələrində insan riski minimuma enir.',
    highlights: [
      'Ev təsərrüfatı və yaşlılara qulluq sahəsində etibarlı şəxsi robot köməkçilər',
      'Ağıllı şəhərlərdə tam avtonom ictimai nəqliyyat və yükdaşıma şəbəkələri',
      'Kvant prosessorları ilə gücləndirilmiş fərdi tibbi profilaktika'
    ],
    metrics: [
      { label: 'Fiziki Avtonomluq', value: 68 },
      { label: 'Kvant Hesablama İnteqrasiyası', value: 56 },
      { label: 'İnsan-Robot Əməkdaşlığı', value: 74 }
    ]
  },
  {
    year: '2041',
    era: 'Neyro-İnterfeys və İnsan-Sİ Simbiozu',
    badge: 'Koqnitiv Sıçrayış',
    summary:
      'Qeyri-invaziv neyro-interfeyslər insan düşüncəsi ilə rəqəmsal sistemlər arasında birbaşa körpü qurur. Fiziki məhdudiyyətli insanlar biometrik robotik protezlərlə tam hərəkət azadlığı əldə edir, yaradıcılıq sərhədləri genişlənir.',
    highlights: [
      'Fikir gücü ilə idarə olunan yüksək həssaslıqlı bionik protezlər',
      'Qlobal iqlim balansını tənzimləyən avtonom ekoloji robot şəbəkələri',
      'Süni intellektlə birgə işləyən qlobal elmi tədqiqat konsorsiumları'
    ],
    metrics: [
      { label: 'Fiziki Avtonomluq', value: 87 },
      { label: 'Kvant Hesablama İnteqrasiyası', value: 82 },
      { label: 'İnsan-Robot Əməkdaşlığı', value: 91 }
    ]
  },
  {
    year: '2050',
    era: 'Planetar Ağıllı Ekosistem və Kosmik Genişlənmə',
    badge: 'Yeni Sivilizasiya',
    summary:
      'Yer kürəsi təmiz enerji və dairəvi iqtisadiyyat üzərində qurulan ağıllı bir ekosistemə çevrilir. Avtonom robot donanmaları Ay və Marsda daimi tədqiqat stansiyalarını idarə edərək bəşəriyyətin çoxplanetli gələcəyini təmin edir.',
    highlights: [
      'Ay və Mars səthində öz-özünü genişləndirən avtonom robot koloniyaları',
      'Xəstəliklərin böyük əksəriyyətinin qarşısını alan nanorobotik tibb sistemi',
      'İnsan potensialının tamamilə elm, incəsənət və kəşflərə yönəldiyi cəmiyyət'
    ],
    metrics: [
      { label: 'Fiziki Avtonomluq', value: 98 },
      { label: 'Kvant Hesablama İnteqrasiyası', value: 96 },
      { label: 'İnsan-Robot Əməkdaşlığı', value: 99 }
    ]
  }
];

const ROBOT_MODELS = [
  {
    id: 'humanoid',
    code: 'AETHER-X1',
    name: 'AETHER-X1 Humanoid',
    role: 'Universal Koqnitiv və Fiziki Köməkçi',
    height: '182 sm',
    weight: '64 kq',
    power: 'Qrafin-Kvant Batareya (72 saat)',
    description:
      'İnsan anatomiyasından ilhamlanaraq yaradılmış sintetik əzələ lifləri və 360° optik LIDAR görmə sistemi ilə təchiz olunmuş çoxməqsədli humanoid robot.',
    hotspots: [
      {
        id: 'head',
        x: 50,
        y: 16,
        title: 'Neyro-Optik Sensor Massivi',
        spec: '16K Spektral Görmə + 360° LIDAR',
        detail:
          'İnsan mimikasını, mikro-emosiyaları və ətraf mühitin 3D xəritəsini millisaniyələr içində analiz edir.'
      },
      {
        id: 'core',
        x: 50,
        y: 38,
        title: 'Kvant Neyron Nüvəsi (Q-Core)',
        spec: '1.2 ExaFLOPS Lokal Hesablama',
        detail:
          'Bulud bağlantısı olmadan belə mürəkkəb etik və fiziki qərarları yerində qəbul edən soyudulan kvant prosessoru.'
      },
      {
        id: 'arm',
        x: 28,
        y: 48,
        title: 'Sintetik Bio-Əzələ Aktuatorları',
        spec: '0.02 mm Həssaslıq Dəqiqliyi',
        detail:
          'Həm həssas şüşə alətləri zədələmədən tuta, həm də 120 kq yükü rahatlıqla qaldıra bilən elastik polimer əzələlər.'
      },
      {
        id: 'legs',
        x: 56,
        y: 74,
        title: 'Dinamik Balans və Giroskop Sistemi',
        spec: 'Adaptiv Qravitasiya Kompensasiyası',
        detail:
          'Nahamar səthlərdə, pilləkənlərdə və sürüşkən mühitlərdə insan kimi təbii və səssiz hərəkəti təmin edir.'
      }
    ]
  },
  {
    id: 'mednano',
    code: 'MED-NANO V4',
    name: 'MED-NANO V4 Mikro-Cərrah',
    role: 'Hüceyrə Səviyyəli Tibbi Avtonom Sistem',
    height: '45 sm (Konsol) / 400 nm (Zond)',
    weight: '4.2 kq',
    power: 'Bio-Termal və Maqnit Rezonans',
    description:
      'Qeyri-invaziv diaqnostika və mikro-cərrahiyyə üçün hazırlanmış, maqnit sahəsi və Sİ naviqasiyası ilə işləyən yeni nəsil tibbi platforma.',
    hotspots: [
      {
        id: 'scanner',
        x: 50,
        y: 22,
        title: 'Molekulyar Spektrometr Başlığı',
        spec: 'Atomar Səviyyədə Toxuma Analizi',
        detail:
          'Hüceyrə mutasiyalarını və iltihab ocaqlarını cərrahi müdaxilə olmadan 3D holoqram kimi vizuallaşdırır.'
      },
      {
        id: 'chamber',
        x: 50,
        y: 46,
        title: 'Nanorobot İnkubasiya Kamerası',
        spec: '50,000 Proqramlaşdırılan Bio-Bot',
        detail:
          'Xüsusi tapşırıq üçün kodlaşdırılmış bioloji uyğun nanorobotları hazırlayır və maqnit impulslarla istiqamətləndirir.'
      },
      {
        id: 'arms',
        x: 72,
        y: 54,
        title: 'Lazer Mikro-Manipulyator Qolları',
        spec: 'Mikron Altı Lazer Dəqiqliyi',
        detail:
          'Sağlam toxumalara zərər vermədən zədələnmiş damar və sinir uclarını bərpa edən soyuq lazer sistemi.'
      }
    ]
  },
  {
    id: 'astrorover',
    code: 'ASTRO-ROVER IX',
    name: 'ASTRO-ROVER IX Kəşfiyyatçı',
    role: 'Planetar Koloniya və Dərin Kosmos Platforması',
    height: '240 sm',
    weight: '410 kq',
    power: 'Radioizotop + Perovskit Günəş Qanadları',
    description:
      '-180°C temperaturda və güclü radiasiya mühitində belə fasiləsiz işləyən, yerli süxurlardan yaşayış modulları çap edən avtonom planetar robot.',
    hotspots: [
      {
        id: 'mast',
        x: 50,
        y: 20,
        title: 'Kvant Lazer Rabitə və Radar Qülləsi',
        spec: 'Planetlərarası Optika + Yeraltı Radar',
        detail:
          'Səthin 500 metr dərinliyindəki su buzlaqlarını aşkarlayır və orbital peyklərlə yüksək sürətli əlaqə qurur.'
      },
      {
        id: 'printer',
        x: 50,
        y: 48,
        title: 'Regolit 3D Ekstruziya Modulu',
        spec: 'Avtonom Baza Tikinti Nüvəsi',
        detail:
          'Planet torpağını günəş enerjisi ilə əridərək astronavtlar üçün radiasiyaya davamlı günbəzlər inşa edir.'
      },
      {
        id: 'wheels',
        x: 26,
        y: 74,
        title: 'Süni Yaddaşlı Titan Şinləri',
        spec: 'Deformasiyaya Davamlı Məsaməli Struktur',
        detail:
          'İti krater qayaları üzərində öz formasını avtomatik bərpa edən ağıllı ərintidən hazırlanmış 6 təkərli şassi.'
      }
    ]
  }
];

const SIMULATOR_SCENARIOS = {
  medicine: {
    name: 'Tibb və Biotexnologiya',
    color: '#00F0FF',
    baseEfficiency: 42,
    baseTimeSaved: 35,
    baseRiskDrop: 48,
    lowForecast:
      'Süni intellekt yalnız diaqnostik analizlərdə həkimlərə köməkçi kimi çıxış edir. Xəstəxana növbələri azalır, lakin mürəkkəb müdaxilələr hələ də ənənəvi üsullarla aparılır.',
    midForecast:
      'Avtonom cərrahi robotlar və fərdi genetik Sİ modelləri standart müalicə protokoluna çevrilir. Xroniki xəstəliklərin erkən aşkarlanması qlobal miqyasda 3 dəfə artır.',
    highForecast:
      'Tam avtonom nanorobotik səhiyyə ekosistemi qurulur. Xəstəliklər simptomlar yaranmadan hüceyrə səviyyəsində neytrallaşdırılır, orta insan ömrü və həyat keyfiyyəti rekord həddə çatır.'
  },
  space: {
    name: 'Kosmos və Planetlər',
    color: '#F59E0B',
    baseEfficiency: 38,
    baseTimeSaved: 40,
    baseRiskDrop: 52,
    lowForecast:
      'Avtonom roverlər yalnız kəşfiyyat və nümunə toplama missiyalarını yerinə yetirir. İnsanlı uçuşlar üçün hazırlıq işləri Yerdən idarə olunur.',
    midForecast:
      'Robot sürüləri Ay səthində ilk avtonom enerji və oksigen hasilatı stansiyalarını qurur. Kosmik missiyaların xərci 70% azalır.',
    highForecast:
      'Öz-özünü təkrarlayan avtonom robot koloniyaları Marsda və asteroid qurşağında tam infrastruktur yaradır. Bəşəriyyət çoxplanetli sivilizasiya mərhələsinə qədəm qoyur.'
  },
  cities: {
    name: 'Ağıllı Şəhərlər',
    color: '#8B5CF6',
    baseEfficiency: 45,
    baseTimeSaved: 50,
    baseRiskDrop: 44,
    lowForecast:
      'Ağıllı işıqforlar və enerji sensorları şəhər mərkəzlərində tıxacları və elektrik itkisini qismən azaldır.',
    midForecast:
      'Avtonom elektrik nəqliyyatı və yeraltı robotik logistika şəbəkələri şəhər havasını təmizləyir, gündəlik nəqliyyat vaxtına 60% qənaət edilir.',
    highForecast:
      'Şəhərlər vahid koqnitiv orqanizm kimi fəaliyyət göstərir: sıfır qəza, 100% bərpa olunan enerji balansı və hər bir vətəndaş üçün təhlükəsiz, yaşıl yaşayış mühiti.'
  },
  ecology: {
    name: 'Ekologiya və İqlim',
    color: '#10B981',
    baseEfficiency: 40,
    baseTimeSaved: 38,
    baseRiskDrop: 55,
    lowForecast:
      'Peyk Sİ sistemləri meşə yanğınlarını və sənaye emissiyalarını real vaxtda izləyərək erkən xəbərdarlıq edir.',
    midForecast:
      'Avtonom əkin dronları və okean təmizləyici robotlar ekosistemin zədələnmiş sahələrini sürətlə bərpa etməyə başlayır.',
    highForecast:
      'Qlobal miqyasda fəaliyyət göstərən milyonlarla ekoloji robot atmosferdəki karbon balansını sabitləşdirir, okeanlar təmizlənir və biomüxtəliflik tam bərpa olunur.'
  }
};

// ----------------------------------------------------------------------------
// 2. XÜSUSİ HOOK-LAR (Scroll Reveal və Paralaks)
// ----------------------------------------------------------------------------

function useScrollReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}

// ----------------------------------------------------------------------------
// 3. GENERASİYA OLUNMUŞ VİZUAL KOMPONENTLƏR (Canvas & Bespoke SVG Artworks)
// ----------------------------------------------------------------------------

/**
 * Hero Bölməsi üçün İnteraktiv 3D Neyron Nüvəsi və Sinaptik Hissəcik Canvas-ı
 */
function NeuralCoreCanvas() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = 0;
    let height = 0;

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // 3D sfera üzərində sinaptik düyünlər yaradırıq
    const nodeCount = 68;
    const nodes = Array.from({ length: nodeCount }, (_, i) => {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      return {
        bx: Math.cos(theta) * Math.sin(phi),
        by: Math.sin(theta) * Math.sin(phi),
        bz: Math.cos(phi),
        pulseOffset: Math.random() * Math.PI * 2,
        color: i % 3 === 0 ? '#00F0FF' : i % 3 === 1 ? '#8B5CF6' : '#F59E0B'
      };
    });

    let angleY = 0;
    let angleX = 0.25;

    const render = (time) => {
      const t = time * 0.001;
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const radius = Math.min(width, height) * 0.34;

      // Kursor hərəkətinə yumşaq reaksiya
      const targetAngleY = mouseRef.current.active
        ? mouseRef.current.x * 1.4
        : t * 0.35;
      const targetAngleX = mouseRef.current.active
        ? 0.25 + mouseRef.current.y * 0.9
        : 0.25 + Math.sin(t * 0.4) * 0.15;

      angleY += (targetAngleY - angleY) * 0.04;
      angleX += (targetAngleX - angleX) * 0.04;

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      // Mərkəzi enerji parıltısı
      const coreGrad = ctx.createRadialGradient(cx, cy, 4, cx, cy, radius * 1.15);
      coreGrad.addColorStop(0, 'rgba(0, 240, 255, 0.26)');
      coreGrad.addColorStop(0.5, 'rgba(139, 92, 246, 0.12)');
      coreGrad.addColorStop(1, 'rgba(5, 7, 14, 0)');
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.15, 0, Math.PI * 2);
      ctx.fill();

      // 3D koordinatları 2D müstəviyə proyeksiya edirik
      const projected = nodes.map((n) => {
        // Y oxu üzrə fırlanma
        const x1 = n.bx * cosY - n.bz * sinY;
        const z1 = n.bz * cosY + n.bx * sinY;
        // X oxu üzrə fırlanma
        const y2 = n.by * cosX - z1 * sinX;
        const z2 = z1 * cosX + n.by * sinX;

        const scale = 2.6 / (2.6 - z2);
        return {
          x: cx + x1 * radius * scale,
          y: cy + y2 * radius * scale,
          z: z2,
          scale,
          color: n.color,
          pulse: Math.sin(t * 2.5 + n.pulseOffset)
        };
      });

      // Sinaptik əlaqə xətləri
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const a = projected[i];
          const b = projected[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);

          if (dist < radius * 0.56) {
            const alpha = (1 - dist / (radius * 0.56)) * 0.38 * ((a.z + b.z + 2) / 4);
            ctx.strokeStyle =
              (i + j) % 2 === 0
                ? `rgba(0, 240, 255, ${alpha.toFixed(3)})`
                : `rgba(139, 92, 246, ${alpha.toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Düyün nöqtələri
      projected
        .sort((a, b) => a.z - b.z)
        .forEach((p) => {
          const size = Math.max(1.5, (2.4 + p.pulse * 0.8) * p.scale);
          ctx.beginPath();
          ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = Math.min(1, Math.max(0.25, (p.z + 1.3) / 2.2));
          ctx.fill();
        });

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseRef.current = {
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
      active: true
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current.active = false;
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[360px] sm:h-[440px] lg:h-[500px] flex items-center justify-center select-none"
    >
      {/* Fırlanan SVG HUD Orbit Halqaları */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 w-full h-full pointer-events-none opacity-75"
      >
        <defs>
          <linearGradient id="hudGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        <circle
          cx="200"
          cy="200"
          r="175"
          fill="none"
          stroke="url(#hudGrad1)"
          strokeWidth="1"
          strokeDasharray="12 8 3 8"
          className="animate-spin-slow origin-center"
        />
        <circle
          cx="200"
          cy="200"
          r="148"
          fill="none"
          stroke="#00F0FF"
          strokeOpacity="0.22"
          strokeWidth="1.5"
          strokeDasharray="40 20"
          className="animate-spin-reverse origin-center"
        />
        {/* Dekorativ künclər */}
        <path
          d="M 45 75 L 45 45 L 75 45 M 325 45 L 355 45 L 355 75 M 45 325 L 45 355 L 75 355 M 325 355 L 355 355 L 355 325"
          fill="none"
          stroke="#00F0FF"
          strokeOpacity="0.45"
          strokeWidth="1.5"
        />
      </svg>

      {/* Canlı Neyron Şəbəkəsi Canvas-ı */}
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Üzən Telemetriya Etiketləri */}
      <div className="absolute top-6 left-3 sm:left-6 px-3 py-1.5 rounded-xl bg-[#0B1021]/80 border border-cyan-400/30 backdrop-blur-md text-xs text-cyan-300 flex items-center gap-2 shadow-lg animate-float">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span>Neyron Sinxronizasiya: 99.94%</span>
      </div>

      <div className="absolute bottom-8 right-3 sm:right-6 px-3 py-1.5 rounded-xl bg-[#0B1021]/80 border border-violet-400/30 backdrop-blur-md text-xs text-violet-300 flex items-center gap-2 shadow-lg animate-float-delayed">
        <Cpu className="w-3.5 h-3.5 text-violet-400" />
        <span>Kvant Nüvə: Aktiv</span>
      </div>
    </div>
  );
}

/**
 * Hər bir Sİ və Robototexnika Sahəsi üçün Xüsusi Generasiya Olunmuş SVG İllüstrasiya
 */
function DomainArtwork({ id, accent }) {
  switch (id) {
    case 'medicine':
      return (
        <svg viewBox="0 0 320 150" className="w-full h-36 overflow-visible">
          <defs>
            <radialGradient id="medGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={accent} stopOpacity="0.35" />
              <stop offset="100%" stopColor={accent} stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="160" cy="75" r="65" fill="url(#medGlow)" />
          {/* DNA / Biometrik Dalğa */}
          <path
            d="M 20 75 Q 65 25, 110 75 T 200 75 T 295 75"
            fill="none"
            stroke={accent}
            strokeOpacity="0.45"
            strokeWidth="2"
            strokeDasharray="6 4"
          />
          <path
            d="M 20 75 Q 65 125, 110 75 T 200 75 T 295 75"
            fill="none"
            stroke="#8B5CF6"
            strokeOpacity="0.45"
            strokeWidth="2"
          />
          {/* Mərkəzi Nanorobot Kapsulu */}
          <g className="animate-float">
            <rect
              x="122"
              y="55"
              width="76"
              height="40"
              rx="20"
              fill="#0B1021"
              stroke={accent}
              strokeWidth="2"
            />
            <circle cx="145" cy="75" r="9" fill={accent} fillOpacity="0.25" stroke={accent} strokeWidth="1.5" />
            <circle cx="145" cy="75" r="3.5" fill={accent} />
            <line x1="163" y1="68" x2="184" y2="68" stroke={accent} strokeWidth="2" strokeLinecap="round" />
            <line x1="163" y1="75" x2="180" y2="75" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
            <line x1="163" y1="82" x2="184" y2="82" stroke={accent} strokeWidth="2" strokeLinecap="round" />
            {/* Mikro sensor ayaqları */}
            <path d="M 130 55 L 118 42 M 190 55 L 202 42 M 130 95 L 118 108 M 190 95 L 202 108" stroke={accent} strokeWidth="1.5" strokeLinecap="round" />
          </g>
        </svg>
      );

    case 'industry':
      return (
        <svg viewBox="0 0 320 150" className="w-full h-36 overflow-visible">
          {/* Perspektiv şəbəkə */}
          <line x1="40" y1="125" x2="280" y2="125" stroke={accent} strokeOpacity="0.35" strokeWidth="1.5" />
          {/* Robotik Kobot Qolu */}
          <rect x="85" y="108" width="54" height="17" rx="4" fill="#0B1021" stroke={accent} strokeWidth="1.8" />
          <path
            d="M 112 108 L 95 65 L 155 42 L 195 66"
            fill="none"
            stroke={accent}
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="112" cy="108" r="7" fill="#05070E" stroke={accent} strokeWidth="2" />
          <circle cx="95" cy="65" r="8" fill="#05070E" stroke="#00F0FF" strokeWidth="2" />
          <circle cx="155" cy="42" r="7" fill="#05070E" stroke={accent} strokeWidth="2" />
          {/* Tutqac və Holoqrafik Kub */}
          <path d="M 192 58 L 206 54 M 192 74 L 206 78" stroke="#00F0FF" strokeWidth="2" strokeLinecap="round" />
          <g className="animate-float">
            <polygon
              points="232,48 256,60 256,88 232,100 208,88 208,60"
              fill={accent}
              fillOpacity="0.18"
              stroke="#00F0FF"
              strokeWidth="1.5"
            />
            <polyline points="208,60 232,72 256,60" fill="none" stroke="#00F0FF" strokeWidth="1.2" />
            <line x1="232" y1="72" x2="232" y2="100" stroke="#00F0FF" strokeWidth="1.2" />
          </g>
        </svg>
      );

    case 'space':
      return (
        <svg viewBox="0 0 320 150" className="w-full h-36 overflow-visible">
          {/* Ulduzlar */}
          <circle cx="52" cy="30" r="1.5" fill="#fff" opacity="0.7" />
          <circle cx="270" cy="28" r="2" fill={accent} opacity="0.9" />
          <circle cx="235" cy="48" r="1.2" fill="#fff" opacity="0.6" />
          {/* Halqalı Planet */}
          <circle cx="225" cy="65" r="26" fill="#0B1021" stroke={accent} strokeWidth="1.8" />
          <ellipse
            cx="225"
            cy="65"
            rx="46"
            ry="11"
            transform="rotate(-18 225 65)"
            fill="none"
            stroke="#00F0FF"
            strokeOpacity="0.65"
            strokeWidth="1.5"
          />
          {/* Planet Səthi və Avtonom Rover */}
          <path d="M 20 128 Q 160 104 300 128" fill="none" stroke={accent} strokeOpacity="0.5" strokeWidth="2" />
          <g className="animate-float">
            <rect x="86" y="84" width="58" height="22" rx="6" fill="#0B1021" stroke={accent} strokeWidth="1.8" />
            <line x1="104" y1="84" x2="104" y2="66" stroke={accent} strokeWidth="2" />
            <rect x="95" y="58" width="20" height="10" rx="3" fill="#00F0FF" fillOpacity="0.25" stroke="#00F0FF" strokeWidth="1.5" />
            <circle cx="96" cy="111" r="7" fill="#05070E" stroke={accent} strokeWidth="2" />
            <circle cx="115" cy="111" r="7" fill="#05070E" stroke={accent} strokeWidth="2" />
            <circle cx="134" cy="111" r="7" fill="#05070E" stroke={accent} strokeWidth="2" />
          </g>
        </svg>
      );

    case 'ecology':
      return (
        <svg viewBox="0 0 320 150" className="w-full h-36 overflow-visible">
          {/* Eko-Dron */}
          <g className="animate-float">
            <line x1="112" y1="45" x2="208" y2="45" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
            <ellipse cx="112" cy="41" rx="22" ry="3.5" fill={accent} fillOpacity="0.4" />
            <ellipse cx="208" cy="41" rx="22" ry="3.5" fill={accent} fillOpacity="0.4" />
            <rect x="142" y="37" width="36" height="16" rx="8" fill="#0B1021" stroke={accent} strokeWidth="1.8" />
            <circle cx="160" cy="45" r="3" fill="#00F0FF" />
            {/* Skaner şüası */}
            <polygon points="150,53 170,53 195,112 125,112" fill={accent} fillOpacity="0.12" />
          </g>
          {/* Bio-Sfera və Yarpaq */}
          <path d="M 70 120 Q 160 105 250 120" fill="none" stroke={accent} strokeOpacity="0.5" strokeWidth="2" />
          <path
            d="M 160 112 C 160 88, 184 78, 188 78 C 188 94, 174 108, 160 112 Z"
            fill={accent}
            fillOpacity="0.35"
            stroke={accent}
            strokeWidth="1.5"
          />
          <path
            d="M 160 112 C 160 92, 138 84, 134 84 C 134 98, 146 108, 160 112 Z"
            fill="#00F0FF"
            fillOpacity="0.25"
            stroke="#00F0FF"
            strokeWidth="1.5"
          />
        </svg>
      );

    case 'education':
      return (
        <svg viewBox="0 0 320 150" className="w-full h-36 overflow-visible">
          {/* Koqnitiv Neyron Çip və Beyin Konturu */}
          <circle cx="160" cy="75" r="46" fill="none" stroke={accent} strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="5 5" />
          <g className="animate-float">
            <rect x="132" y="47" width="56" height="56" rx="14" fill="#0B1021" stroke={accent} strokeWidth="2" />
            <rect x="144" y="59" width="32" height="32" rx="7" fill={accent} fillOpacity="0.2" stroke="#8B5CF6" strokeWidth="1.5" />
            <circle cx="160" cy="75" r="6" fill={accent} />
            {/* Çip çıxışları */}
            <path
              d="M 120 62 H 132 M 120 75 H 132 M 120 88 H 132 M 188 62 H 200 M 188 75 H 200 M 188 88 H 200"
              stroke={accent}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
          {/* Orbit edən bilik nöqtələri */}
          <circle cx="92" cy="52" r="5" fill="#8B5CF6" />
          <circle cx="228" cy="96" r="5" fill={accent} />
          <line x1="97" y1="54" x2="132" y2="68" stroke="#8B5CF6" strokeOpacity="0.45" strokeWidth="1.2" />
          <line x1="223" y1="94" x2="188" y2="82" stroke={accent} strokeOpacity="0.45" strokeWidth="1.2" />
        </svg>
      );

    case 'cities':
    default:
      return (
        <svg viewBox="0 0 320 150" className="w-full h-36 overflow-visible">
          {/* Futuristik Göydələnlər */}
          <rect x="74" y="48" width="28" height="72" rx="4" fill="#0B1021" stroke={accent} strokeOpacity="0.6" strokeWidth="1.5" />
          <rect x="112" y="30" width="36" height="90" rx="5" fill="#0B1021" stroke="#00F0FF" strokeWidth="1.8" />
          <rect x="158" y="42" width="32" height="78" rx="4" fill="#0B1021" stroke="#8B5CF6" strokeWidth="1.6" />
          <rect x="200" y="56" width="30" height="64" rx="4" fill="#0B1021" stroke={accent} strokeOpacity="0.6" strokeWidth="1.5" />
          {/* Enerji Körpüsü və Avtonom Kapsul */}
          <path d="M 45 96 Q 160 82 275 96" fill="none" stroke="#00F0FF" strokeOpacity="0.45" strokeWidth="1.5" />
          <g className="animate-float">
            <rect x="142" y="83" width="36" height="12" rx="6" fill="#05070E" stroke={accent} strokeWidth="2" />
            <circle cx="152" cy="89" r="2" fill="#00F0FF" />
            <circle cx="168" cy="89" r="2" fill="#00F0FF" />
          </g>
          <line x1="40" y1="120" x2="280" y2="120" stroke={accent} strokeOpacity="0.4" strokeWidth="2" />
        </svg>
      );
  }
}

/**
 * İnteraktiv Robot Anatomiyası & Rentgen (X-Ray) SVG Visualizer
 */
function RobotBlueprintSVG({ modelId, xrayMode, activeHotspot, onSelectHotspot, hotspots }) {
  const primary = xrayMode ? '#00F0FF' : '#8B5CF6';
  const secondary = xrayMode ? '#F59E0B' : '#00F0FF';

  return (
    <div className="relative w-full h-[430px] sm:h-[490px] flex items-center justify-center rounded-2xl bg-[#05070E]/90 border border-white/10 overflow-hidden select-none">
      {/* Arxa fon texniki tor (Blueprint Grid) */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0,240,255,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,240,255,0.18) 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      {/* Rentgen rejimində hərəkətli lazer skan xətti */}
      {xrayMode && (
        <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_#00F0FF] animate-scanline pointer-events-none z-10" />
      )}

      {/* Robot SVG Silueti */}
      <svg viewBox="0 0 300 420" className="w-full h-full max-w-[320px] p-4 z-0">
        <defs>
          <radialGradient id="corePulse" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={secondary} stopOpacity="0.9" />
            <stop offset="100%" stopColor={primary} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Koordinat Dairələri */}
        <circle cx="150" cy="210" r="135" fill="none" stroke={primary} strokeOpacity="0.18" strokeDasharray="6 6" />
        <circle cx="150" cy="210" r="95" fill="none" stroke={secondary} strokeOpacity="0.15" />

        {modelId === 'humanoid' && (
          <g className="transition-all duration-500">
            {/* Baş */}
            <rect
              x="124"
              y="34"
              width="52"
              height="60"
              rx="22"
              fill={xrayMode ? 'rgba(0,240,255,0.06)' : '#0E152B'}
              stroke={primary}
              strokeWidth="2.2"
            />
            {/* Vizor */}
            <rect
              x="131"
              y="54"
              width="38"
              height="14"
              rx="7"
              fill={secondary}
              fillOpacity={xrayMode ? '0.45' : '0.25'}
              stroke={secondary}
              strokeWidth="1.5"
            />
            {xrayMode && (
              <circle cx="150" cy="46" r="6" fill="none" stroke="#00F0FF" strokeWidth="1.5" />
            )}

            {/* Boyun */}
            <rect x="140" y="94" width="20" height="16" rx="4" fill="#0B1021" stroke={primary} strokeWidth="1.8" />

            {/* Gövdə */}
            <path
              d="M 102 114 L 198 114 L 186 226 L 114 226 Z"
              fill={xrayMode ? 'rgba(0,240,255,0.05)' : '#0E152B'}
              stroke={primary}
              strokeWidth="2.4"
              strokeLinejoin="round"
            />

            {/* Kvant Nüvəsi */}
            <circle cx="150" cy="162" r="24" fill="url(#corePulse)" />
            <circle
              cx="150"
              cy="162"
              r="14"
              fill="#05070E"
              stroke={secondary}
              strokeWidth="2.2"
            />
            <circle cx="150" cy="162" r="5" fill={secondary} />

            {/* Rentgen rejimində daxili enerji xətləri */}
            {xrayMode && (
              <g stroke="#00F0FF" strokeWidth="1.4" opacity="0.85">
                <line x1="150" y1="68" x2="150" y2="148" />
                <path d="M 136 162 L 90 140 L 76 230" fill="none" />
                <path d="M 164 162 L 210 140 L 224 230" fill="none" />
                <path d="M 142 176 L 130 250 L 128 365" fill="none" />
                <path d="M 158 176 L 170 250 L 172 365" fill="none" />
              </g>
            )}

            {/* Sol və Sağ Qollar */}
            <path
              d="M 98 122 L 72 185 L 68 248"
              fill="none"
              stroke={primary}
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={xrayMode ? 0.35 : 0.9}
            />
            <path
              d="M 202 122 L 228 185 L 232 248"
              fill="none"
              stroke={primary}
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={xrayMode ? 0.35 : 0.9}
            />

            {/* Ayaqlar */}
            <path
              d="M 130 230 L 126 305 L 124 378"
              fill="none"
              stroke={primary}
              strokeWidth="16"
              strokeLinecap="round"
              opacity={xrayMode ? 0.35 : 0.9}
            />
            <path
              d="M 170 230 L 174 305 L 176 378"
              fill="none"
              stroke={primary}
              strokeWidth="16"
              strokeLinecap="round"
              opacity={xrayMode ? 0.35 : 0.9}
            />
          </g>
        )}

        {modelId === 'mednano' && (
          <g className="transition-all duration-500">
            {/* Yuxarı Skaner Qübbəsi */}
            <path
              d="M 95 110 C 95 55, 205 55, 205 110 Z"
              fill={xrayMode ? 'rgba(0,240,255,0.08)' : '#0E152B'}
              stroke={primary}
              strokeWidth="2.4"
            />
            <circle cx="150" cy="92" r="14" fill="#05070E" stroke={secondary} strokeWidth="2" />
            <circle cx="150" cy="92" r="5" fill={secondary} />

            {/* Mərkəzi İnkubasiya Silindri */}
            <rect
              x="110"
              y="120"
              width="80"
              height="150"
              rx="28"
              fill={xrayMode ? 'rgba(0,240,255,0.05)' : '#0E152B'}
              stroke={primary}
              strokeWidth="2.4"
            />
            <circle cx="150" cy="195" r="30" fill="url(#corePulse)" />
            <circle cx="150" cy="195" r="18" fill="none" stroke={secondary} strokeWidth="2" strokeDasharray="4 4" />

            {/* Mikro Manipulyator Qollar */}
            <path d="M 110 165 L 62 195 L 82 245" fill="none" stroke={secondary} strokeWidth="4" strokeLinecap="round" />
            <path d="M 190 165 L 238 195 L 218 245" fill="none" stroke={secondary} strokeWidth="4" strokeLinecap="round" />

            {/* Alt Maqnit Stabilizator */}
            <ellipse cx="150" cy="310" rx="68" ry="18" fill="none" stroke={primary} strokeWidth="2" />
            <ellipse cx="150" cy="332" rx="46" ry="12" fill="none" stroke={secondary} strokeWidth="1.5" strokeDasharray="5 5" />

            {xrayMode && (
              <g stroke="#00F0FF" strokeWidth="1.4">
                <line x1="150" y1="106" x2="150" y2="290" />
                <circle cx="138" cy="175" r="3" fill="#00F0FF" />
                <circle cx="162" cy="212" r="3" fill="#F59E0B" />
                <circle cx="145" cy="235" r="3" fill="#00F0FF" />
              </g>
            )}
          </g>
        )}

        {modelId === 'astrorover' && (
          <g className="transition-all duration-500">
            {/* Radar Qülləsi */}
            <line x1="150" y1="62" x2="150" y2="145" stroke={primary} strokeWidth="5" />
            <rect
              x="114"
              y="44"
              width="72"
              height="28"
              rx="10"
              fill={xrayMode ? 'rgba(0,240,255,0.1)' : '#0E152B'}
              stroke={secondary}
              strokeWidth="2.2"
            />
            <circle cx="134" cy="58" r="6" fill={secondary} />
            <circle cx="166" cy="58" r="6" fill={primary} />

            {/* Əsas Korpus */}
            <polygon
              points="75,145 225,145 245,235 55,235"
              fill={xrayMode ? 'rgba(0,240,255,0.06)' : '#0E152B'}
              stroke={primary}
              strokeWidth="2.4"
              strokeLinejoin="round"
            />
            {/* 3D Ekstruziya Nüvəsi */}
            <rect x="115" y="165" width="70" height="50" rx="10" fill="#05070E" stroke={secondary} strokeWidth="2" />
            <circle cx="150" cy="190" r="14" fill="url(#corePulse)" />

            {/* Şassi və 3 Cüt Təkər */}
            <path d="M 75 235 L 62 295 M 150 235 L 150 295 M 225 235 L 238 295" stroke={primary} strokeWidth="4" />
            <circle cx="62" cy="308" r="24" fill="#05070E" stroke={primary} strokeWidth="3" />
            <circle cx="150" cy="308" r="24" fill="#05070E" stroke={secondary} strokeWidth="3" />
            <circle cx="238" cy="308" r="24" fill="#05070E" stroke={primary} strokeWidth="3" />

            {xrayMode && (
              <g stroke="#00F0FF" strokeWidth="1.4">
                <line x1="150" y1="72" x2="150" y2="165" />
                <line x1="115" y1="190" x2="62" y2="308" />
                <line x1="185" y1="190" x2="238" y2="308" />
              </g>
            )}
          </g>
        )}
      </svg>

      {/* İnteraktiv Hotspot Düymələri */}
      {hotspots.map((spot) => {
        const isSelected = activeHotspot?.id === spot.id;
        return (
          <button
            key={spot.id}
            type="button"
            onClick={() => onSelectHotspot(spot)}
            style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
            aria-label={spot.title}
            className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 group p-2 focus:outline-none`}
          >
            <span
              className={`relative flex items-center justify-center w-7 h-7 rounded-full border transition-all duration-300 ${
                isSelected
                  ? 'bg-cyan-400 text-slate-950 border-white scale-115 shadow-[0_0_20px_#00F0FF]'
                  : 'bg-[#0B1021]/90 text-cyan-300 border-cyan-400/70 hover:scale-110 hover:border-white'
              }`}
            >
              <span
                className={`absolute inset-0 rounded-full bg-cyan-400/40 ${
                  isSelected ? 'animate-ping' : 'group-hover:animate-ping'
                }`}
              />
              <span className="relative w-2.5 h-2.5 rounded-full bg-current" />
            </span>
          </button>
        );
      })}

      {/* Alt Status Bar */}
      <div className="absolute bottom-3 inset-x-4 flex items-center justify-between text-[11px] text-slate-400 font-mono">
        <span>REJİM: {xrayMode ? 'RENTGEN SKAN (X-RAY)' : 'ZİREH VƏ KORPUS'}</span>
        <span className="text-cyan-400">NÖQTƏLƏRƏ KLİKLƏYİN</span>
      </div>
    </div>
  );
}

/**
 * Simulyator üçün Dinamik Kvant Dalğası Canvas-ı
 */
function QuantumFieldCanvas({ autonomy, color }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let width = 0;
    let height = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    const draw = (time) => {
      const t = time * 0.001;
      ctx.clearRect(0, 0, width, height);

      const speed = 0.8 + (autonomy / 100) * 3.2;
      const amplitude = 14 + (autonomy / 100) * 34;
      const waves = 4;

      for (let w = 0; w < waves; w++) {
        ctx.beginPath();
        ctx.lineWidth = w === 0 ? 2.5 : 1.3;
        ctx.strokeStyle = color;
        ctx.globalAlpha = 0.75 - w * 0.16;

        for (let x = 0; x <= width; x += 6) {
          const normX = x / width;
          const envelope = Math.sin(normX * Math.PI);
          const y =
            height / 2 +
            Math.sin(normX * (6 + w * 2) + t * speed + w) * amplitude * envelope;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Enerji hissəcikləri
      const particleCount = Math.floor(10 + (autonomy / 100) * 28);
      ctx.globalAlpha = 0.85;
      for (let i = 0; i < particleCount; i++) {
        const px = ((i * 97 + t * 40 * speed) % width);
        const py =
          height / 2 +
          Math.sin((px / width) * 8 + t * speed + i) * (amplitude * 0.9);
        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [autonomy, color]);

  return <canvas ref={canvasRef} className="w-full h-36 sm:h-44 block rounded-xl" />;
}

// ----------------------------------------------------------------------------
// 4. İNTERAKTİV 3D TILT KART KOMPONENTİ
// ----------------------------------------------------------------------------

function TiltCard({ domain, index, onSelect }) {
  const [ref, isVisible] = useScrollReveal(0.1);
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, spotX: 50, spotY: 50 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setTilt({
      rotateX,
      rotateY,
      spotX: (x / rect.width) * 100,
      spotY: (y / rect.height) * 100
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, spotX: 50, spotY: 50 });
  };

  const IconComponent = domain.icon;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 90}ms` }}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => onSelect(domain)}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`
        }}
        className="group relative h-full rounded-2xl bg-[#0B1021]/80 border border-white/10 p-6 cursor-pointer transition-transform duration-200 ease-out hover:border-cyan-400/40 backdrop-blur-xl flex flex-col justify-between overflow-hidden"
      >
        {/* Kursoru izləyən daxili spotlight parıltısı */}
        <div
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(380px circle at ${tilt.spotX}% ${tilt.spotY}%, ${domain.accent}22, transparent 70%)`
          }}
        />

        <div>
          {/* Üst Kateqoriya və İkon */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span
              className="text-xs font-medium px-3 py-1 rounded-full border"
              style={{
                color: domain.accent,
                borderColor: `${domain.accent}40`,
                backgroundColor: `${domain.accent}12`
              }}
            >
              {domain.category}
            </span>
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 bg-white/5 transition-transform duration-300 group-hover:scale-110"
              style={{ color: domain.accent }}
            >
              <IconComponent className="w-4 h-4" />
            </div>
          </div>

          {/* Generasiya Olunmuş SVG İllüstrasiya */}
          <div className="my-2 rounded-xl bg-[#05070E]/70 border border-white/5 p-2 overflow-hidden">
            <DomainArtwork id={domain.id} accent={domain.accent} />
          </div>

          {/* Başlıq və Təsvir */}
          <h3 className="text-xl font-bold text-white mt-4 mb-2 group-hover:text-cyan-300 transition-colors">
            {domain.title}
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">{domain.shortDesc}</p>
        </div>

        {/* Alt Metrika və Keçid */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-wider text-slate-500">
              {domain.metricLabel}
            </div>
            <div className="text-lg font-bold" style={{ color: domain.accent }}>
              {domain.metricValue}
            </div>
          </div>

          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-200 group-hover:text-cyan-300 transition-colors">
            Ətraflı Bax
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------------
// 5. ƏSAS TƏTBİQ KOMPONENTİ (App)
// ----------------------------------------------------------------------------

export default function App() {
  // Kursor izləyən qlobal işıq haləsi
  const [cursorPos, setCursorPos] = useState({ x: -500, y: -500 });
  // Paralaks sürüşdürmə mövqeyi
  const [scrollY, setScrollY] = useState(0);
  // Hero giriş animasiyası
  const [heroLoaded, setHeroLoaded] = useState(false);
  // Kinetik mətn indeksi
  const [wordIndex, setWordIndex] = useState(0);
  // Mobil menyu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Aktiv Modal (Sahə detalları)
  const [selectedDomain, setSelectedDomain] = useState(null);
  // Zaman xətti aktiv ili
  const [activeEraIndex, setActiveEraIndex] = useState(0);
  // Robot arxitekturası seçimi və Rentgen rejimi
  const [selectedRobotId, setSelectedRobotId] = useState('humanoid');
  const [xrayMode, setXrayMode] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState(ROBOT_MODELS[0].hotspots[1]);
  // Simulyator vəziyyəti
  const [simCategory, setSimCategory] = useState('medicine');
  const [simAutonomy, setSimAutonomy] = useState(76);
  // Footer abunəlik mesajı
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Scroll-reveal hook-ları bölmə başlıqları üçün
  const [domainsHeadRef, domainsHeadVisible] = useScrollReveal(0.15);
  const [timelineHeadRef, timelineHeadVisible] = useScrollReveal(0.15);
  const [robotsHeadRef, robotsHeadVisible] = useScrollReveal(0.15);
  const [simHeadRef, simHeadVisible] = useScrollReveal(0.15);

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 80);
    return () => clearTimeout(timer);
  }, []);

  // Kinetik mətn dövrü
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % KINETIC_WORDS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Hamar paralaks sürüşdürmə izləyicisi
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Kursor izləyicisi
  const handleGlobalMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  // Robot modeli dəyişəndə ilkin hotspot-u yeniləyirik
  const handleSelectRobot = (id) => {
    setSelectedRobotId(id);
    const found = ROBOT_MODELS.find((r) => r.id === id);
    if (found && found.hotspots.length > 0) {
      setActiveHotspot(found.hotspots[0]);
    }
  };

  const currentRobot =
    ROBOT_MODELS.find((r) => r.id === selectedRobotId) || ROBOT_MODELS[0];
  const currentEra = TIMELINE_ERAS[activeEraIndex];
  const currentScenario = SIMULATOR_SCENARIOS[simCategory];

  // Simulyator hesablamaları
  const computedEfficiency = Math.min(
    99,
    Math.round(currentScenario.baseEfficiency + simAutonomy * 0.54)
  );
  const computedTimeSaved = Math.min(
    96,
    Math.round(currentScenario.baseTimeSaved + simAutonomy * 0.45)
  );
  const computedRiskDrop = Math.min(
    99,
    Math.round(currentScenario.baseRiskDrop + simAutonomy * 0.48)
  );

  const computedForecastText =
    simAutonomy < 45
      ? currentScenario.lowForecast
      : simAutonomy < 80
      ? currentScenario.midForecast
      : currentScenario.highForecast;

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!emailInput.trim() || !emailInput.includes('@')) return;
    setSubscribed(true);
    setEmailInput('');
  };

  return (
    <div
      onMouseMove={handleGlobalMouseMove}
      className="min-h-screen bg-[#05070E] text-slate-100 selection:bg-cyan-400 selection:text-slate-950 overflow-x-hidden relative font-sans"
    >
      {/* Xüsusi CSS Animasiya Keyframe-ləri */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-9px); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes scanline {
          0% { top: 8%; opacity: 0.2; }
          50% { opacity: 1; }
          100% { top: 92%; opacity: 0.2; }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-float {
          animation: float 4.5s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 5.2s ease-in-out 1.4s infinite;
        }
        .animate-spin-slow {
          animation: spinSlow 28s linear infinite;
        }
        .animate-spin-reverse {
          animation: spinReverse 20s linear infinite;
        }
        .animate-scanline {
          animation: scanline 3.2s ease-in-out infinite alternate;
        }
        .animate-gradient-text {
          background-size: 200% 200%;
          animation: gradientShift 6s ease infinite;
        }
      `}</style>

      {/* Kursoru izləyən qlobal işıq haləsi (Desktop) */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(520px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(0, 240, 255, 0.065), transparent 70%)`
        }}
      />

      {/* ====================================================================
          1. STICKY GLASSMORPHIC NAVİQASİYA PANELİ
         ==================================================================== */}
      <header className="sticky top-0 z-40 bg-[#05070E]/75 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 py-3.5 flex items-center justify-between">
          {/* Brend Loqosu */}
          <button
            type="button"
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 border border-cyan-400/40 flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.2)] group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 32 32" className="w-6 h-6">
                <polygon
                  points="16,3 28,10 28,22 16,29 4,22 4,10"
                  fill="none"
                  stroke="#00F0FF"
                  strokeWidth="2"
                />
                <circle cx="16" cy="16" r="4" fill="#8B5CF6" />
                <line x1="16" y1="3" x2="16" y2="12" stroke="#00F0FF" strokeWidth="1.5" />
                <line x1="28" y1="22" x2="20" y2="18" stroke="#00F0FF" strokeWidth="1.5" />
                <line x1="4" y1="22" x2="12" y2="18" stroke="#00F0FF" strokeWidth="1.5" />
              </svg>
            </div>
            <div>
              <div className="font-extrabold tracking-wider text-base sm:text-lg text-white flex items-center gap-1.5">
                AETHER <span className="text-cyan-400">2050</span>
              </div>
              <div className="text-[10px] text-slate-400 hidden sm:block">
                Süni İntellekt və Robototexnika
              </div>
            </div>
          </button>

          {/* Desktop Menyu Keçidləri */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            {[
              { id: 'hero', label: 'Başlanğıc' },
              { id: 'domains', label: 'Sahələr' },
              { id: 'timeline', label: 'Zaman Xətti' },
              { id: 'robots', label: 'Robotlar' },
              { id: 'simulator', label: 'Simulyator' }
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="relative py-1 hover:text-cyan-300 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 hover:after:w-full after:transition-all"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA və Mobil Menyu Düyməsi */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollToSection('simulator')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-violet-400 hover:from-cyan-300 hover:to-violet-300 shadow-[0_0_25px_rgba(0,240,255,0.3)] transition-all active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              Gələcəyi Kəşf Et
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Menyunu aç"
              className="md:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-cyan-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobil Açılan Menyu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#0B1021]/95 backdrop-blur-2xl px-4 py-4 space-y-2">
            {[
              { id: 'hero', label: 'Başlanğıc' },
              { id: 'domains', label: 'Sahələr' },
              { id: 'timeline', label: 'Zaman Xətti' },
              { id: 'robots', label: 'Robotlar' },
              { id: 'simulator', label: 'Simulyator' }
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-cyan-300"
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => scrollToSection('simulator')}
              className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-violet-400"
            >
              <Sparkles className="w-4 h-4" />
              Gələcəyi Kəşf Et
            </button>
          </div>
        )}
      </header>

      {/* ====================================================================
          2. ANİMASİYALI HERO BÖLMƏSİ (Paralaks + Kinetik Mətn + Neyron Nüvə)
         ==================================================================== */}
      <section id="hero" className="relative pt-10 pb-20 lg:pt-16 lg:pb-28 overflow-hidden">
        {/* Paralaks Arxa Fon Qatları */}
        <div
          style={{ transform: `translateY(${scrollY * 0.22}px)` }}
          className="pointer-events-none absolute inset-0 opacity-20"
        >
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(0,240,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(139,92,246,0.15) 1px, transparent 1px)',
              backgroundSize: '64px 64px'
            }}
          />
        </div>

        {/* Paralaks İşıq Kürələri */}
        <div
          style={{ transform: `translate3d(0, ${scrollY * -0.15}px, 0)` }}
          className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-cyan-500/15 blur-[120px]"
        />
        <div
          style={{ transform: `translate3d(0, ${scrollY * 0.18}px, 0)` }}
          className="pointer-events-none absolute top-40 -right-24 w-[440px] h-[440px] rounded-full bg-violet-600/15 blur-[130px]"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Sol Sütun: Giriş Animasiyaları və Kinetik Mətn */}
            <div className="lg:col-span-7 space-y-6">
              {/* Kinetik Nişan */}
              <div
                className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0B1021]/90 border border-cyan-400/30 backdrop-blur-md transition-all duration-700 ${
                  heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                <Zap className="w-4 h-4 text-amber-400" />
                <span className="text-xs sm:text-sm text-slate-300">Yeni Era:</span>
                <span
                  key={wordIndex}
                  className="text-xs sm:text-sm font-bold text-cyan-300 transition-all duration-500"
                >
                  {KINETIC_WORDS[wordIndex]}
                </span>
              </div>

              {/* Əsas Gradient Başlıq */}
              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] transition-all duration-700 delay-100 ${
                  heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <span className="text-white block">Süni İntellekt və</span>
                <span className="bg-gradient-to-r from-cyan-300 via-violet-400 to-amber-300 bg-clip-text text-transparent animate-gradient-text block mt-1">
                  Robotlar Dünyanı Yenidən Qurur
                </span>
              </h1>

              {/* İzah Mətni */}
              <p
                className={`text-base sm:text-lg text-slate-300/90 max-w-2xl leading-relaxed transition-all duration-700 delay-200 ${
                  heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Koqnitiv alqoritmlər və avtonom robototexnika tibbdən kosmosun fəthinə,
                iqlimin bərpasından ağıllı şəhərlərə qədər bəşəriyyətin imkanlarını
                misli görünməmiş səviyyəyə daşıyır. Gələcəyin texnoloji ekosistemini
                interaktiv şəkildə kəşf edin.
              </p>

              {/* Fəaliyyət Düymələri */}
              <div
                className={`flex flex-wrap items-center gap-4 pt-2 transition-all duration-700 delay-300 ${
                  heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <button
                  type="button"
                  onClick={() => scrollToSection('domains')}
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.45)] transition-all active:scale-95"
                >
                  Texnologiyaları Araşdır
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('robots')}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-white/5 border border-white/15 hover:bg-white/10 hover:border-cyan-400/40 backdrop-blur-md transition-all active:scale-95"
                >
                  <Scan className="w-4 h-4 text-cyan-400" />
                  Robot Rentgeni
                </button>
              </div>

              {/* Canlı Telemetriya Göstəriciləri */}
              <div
                className={`grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-white/10 transition-all duration-700 delay-500 ${
                  heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-cyan-300">78%</div>
                  <div className="text-xs sm:text-sm text-slate-400 mt-0.5">
                    2050-yə Qədər Avtomatlaşma
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-violet-400">1000x</div>
                  <div className="text-xs sm:text-sm text-slate-400 mt-0.5">
                    Neyron Hesablama Sürəti
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-300">24/7</div>
                  <div className="text-xs sm:text-sm text-slate-400 mt-0.5">
                    Avtonom Qlobal Ekosistem
                  </div>
                </div>
              </div>
            </div>

            {/* Sağ Sütun: Paralaks Neyron Nüvəsi */}
            <div
              style={{ transform: `translate3d(0, ${scrollY * -0.06}px, 0)` }}
              className={`lg:col-span-5 transition-all duration-1000 delay-200 ${
                heroLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <NeuralCoreCanvas />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. SCROLL-REVEAL SAHƏLƏR BÖLMƏSİ ("Robotlar Dünyanı Necə Dəyişəcək?")
         ==================================================================== */}
      <section id="domains" className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Bölmə Başlığı */}
          <div
            ref={domainsHeadRef}
            className={`max-w-3xl mb-14 transition-all duration-700 ${
              domainsHeadVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-400/30 text-violet-300 text-xs font-semibold mb-4">
              <Layers className="w-3.5 h-3.5" />
              STRATEJİ TRANSFORMASİYA SAHƏLƏRİ
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Robotlar Dünyanı Necə Dəyişəcək?
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
              Hər bir kartın üzərinə gələrək 3D interaktiv effekti sınayın və detal
              pəncərəsini açmaq üçün klikləyin.
            </p>
          </div>

          {/* 6 İnteraktiv 3D Tilt Kart */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {IMPACT_DOMAINS.map((domain, idx) => (
              <TiltCard
                key={domain.id}
                domain={domain}
                index={idx}
                onSelect={setSelectedDomain}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. İNTERAKTİV ZAMAN XƏTTİ ("2026 – 2050: Təkamül Xəritəsi")
         ==================================================================== */}
      <section
        id="timeline"
        className="py-20 lg:py-28 relative bg-[#080C1A]/80 border-y border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={timelineHeadRef}
            className={`max-w-3xl mb-12 transition-all duration-700 ${
              timelineHeadVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold mb-4">
              <Compass className="w-3.5 h-3.5" />
              XRONOLOJİ PROQNOZ
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              2026 – 2050: Təkamül Xəritəsi
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mt-3">
              İllər üzrə keçid edərək süni intellekt və robototexnikanın mərhələli
              inkişafını izləyin.
            </p>
          </div>

          {/* İnteraktiv İl Seçicisi və Proqres Xətti */}
          <div className="relative mb-10">
            <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-1 bg-white/10 -translate-y-1/2 rounded-full" />
            <div
              className="hidden sm:block absolute top-1/2 left-0 h-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 -translate-y-1/2 rounded-full transition-all duration-500"
              style={{
                width: `${(activeEraIndex / (TIMELINE_ERAS.length - 1)) * 100}%`
              }}
            />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative z-10">
              {TIMELINE_ERAS.map((item, idx) => {
                const isActive = idx === activeEraIndex;
                return (
                  <button
                    key={item.year}
                    type="button"
                    onClick={() => setActiveEraIndex(idx)}
                    className={`p-4 rounded-2xl border text-left sm:text-center transition-all duration-300 backdrop-blur-xl ${
                      isActive
                        ? 'bg-[#0E1630] border-cyan-400 shadow-[0_0_25px_rgba(0,240,255,0.25)] scale-[1.03]'
                        : 'bg-[#0B1021]/70 border-white/10 hover:border-white/25'
                    }`}
                  >
                    <div
                      className={`text-2xl sm:text-3xl font-extrabold ${
                        isActive ? 'text-cyan-300' : 'text-slate-400'
                      }`}
                    >
                      {item.year}
                    </div>
                    <div className="text-xs text-slate-400 mt-1 line-clamp-1">
                      {item.badge}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Seçilmiş Dövrün Detallı Məlumat Kartı */}
          <div
            key={currentEra.year}
            className="rounded-3xl bg-[#0B1021]/90 border border-white/10 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl transition-all duration-500"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-semibold">
                  {currentEra.year} • {currentEra.badge}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {currentEra.era}
                </h3>
                <p className="text-slate-300 leading-relaxed text-base">
                  {currentEra.summary}
                </p>

                <div className="space-y-3 pt-2">
                  {currentEra.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-slate-200">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sağ Sütun: Animasiyalı Texnoloji İndekslər */}
              <div className="lg:col-span-5 rounded-2xl bg-[#05070E]/80 border border-white/10 p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-white">
                    Texnoloji Yetkinlik İndeksi
                  </span>
                  <Activity className="w-4 h-4 text-cyan-400" />
                </div>

                {currentEra.metrics.map((m, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-slate-300">{m.label}</span>
                      <span className="font-bold text-cyan-300">{m.value}%</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-700"
                        style={{ width: `${m.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. İNTERAKTİV ROBOT ARXİTEKTURASI VƏ RENTGEN (X-RAY) BÖLMƏSİ
         ==================================================================== */}
      <section id="robots" className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={robotsHeadRef}
            className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 transition-all duration-700 ${
              robotsHeadVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold mb-4">
                <Bot className="w-3.5 h-3.5" />
                İNTERAKTİV TEXNİKİ ÇERTYOJ
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                Yeni Nəsil Robot Arxitekturası
              </h2>
            </div>

            {/* Rentgen (X-Ray) Keçid Düyməsi */}
            <button
              type="button"
              onClick={() => setXrayMode((prev) => !prev)}
              className={`inline-flex items-center gap-3 px-5 py-3 rounded-xl font-semibold text-sm border transition-all self-start lg:self-auto ${
                xrayMode
                  ? 'bg-cyan-400 text-slate-950 border-cyan-300 shadow-[0_0_25px_rgba(0,240,255,0.4)]'
                  : 'bg-[#0B1021] text-cyan-300 border-cyan-400/40 hover:bg-cyan-400/10'
              }`}
            >
              {xrayMode ? <Eye className="w-4 h-4" /> : <Scan className="w-4 h-4" />}
              {xrayMode ? 'Normal Görünüşə Qayıt' : 'Rentgen (X-Ray) Rejimini Aktiv Et'}
            </button>
          </div>

          {/* Model Seçim Tabları */}
          <div className="flex flex-wrap gap-3 mb-8">
            {ROBOT_MODELS.map((model) => {
              const active = model.id === selectedRobotId;
              return (
                <button
                  key={model.id}
                  type="button"
                  onClick={() => handleSelectRobot(model.id)}
                  className={`px-5 py-3 rounded-xl text-sm font-semibold border transition-all ${
                    active
                      ? 'bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border-cyan-400 text-white shadow-lg'
                      : 'bg-[#0B1021]/70 border-white/10 text-slate-400 hover:text-white hover:border-white/25'
                  }`}
                >
                  {model.name}
                </button>
              );
            })}
          </div>

          {/* Robot Visualizer + Texniki İnspektor Paneli */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <RobotBlueprintSVG
                modelId={currentRobot.id}
                xrayMode={xrayMode}
                activeHotspot={activeHotspot}
                onSelectHotspot={setActiveHotspot}
                hotspots={currentRobot.hotspots}
              />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-3xl bg-[#0B1021]/85 border border-white/10 p-6 sm:p-8 backdrop-blur-xl space-y-6">
                <div>
                  <div className="text-xs font-mono text-cyan-400 mb-1">
                    MODEL KODU: {currentRobot.code}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {currentRobot.name}
                  </h3>
                  <div className="text-sm text-violet-300 font-medium mt-1">
                    {currentRobot.role}
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {currentRobot.description}
                </p>

                {/* Əsas Fiziki Parametrlər */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-[#05070E]/80 border border-white/10">
                    <div className="text-[11px] text-slate-500">Ölçü</div>
                    <div className="text-sm font-bold text-white mt-0.5">
                      {currentRobot.height}
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#05070E]/80 border border-white/10">
                    <div className="text-[11px] text-slate-500">Çəki</div>
                    <div className="text-sm font-bold text-white mt-0.5">
                      {currentRobot.weight}
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#05070E]/80 border border-white/10">
                    <div className="text-[11px] text-slate-500">Enerji Mənbəyi</div>
                    <div className="text-sm font-bold text-cyan-300 mt-0.5">
                      {currentRobot.power}
                    </div>
                  </div>
                </div>

                {/* Seçilmiş Hotspot Alt-Sistem İnspektoru */}
                {activeHotspot && (
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 border border-cyan-400/35 space-y-2 transition-all">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                        <Brain className="w-4 h-4" />
                        Aktiv Alt-Sistem Modulu
                      </span>
                      <span className="text-xs font-mono text-amber-300">
                        {activeHotspot.spec}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white">
                      {activeHotspot.title}
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {activeHotspot.detail}
                    </p>
                  </div>
                )}

                {/* Hotspot Sürətli Keçid Düymələri */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {currentRobot.hotspots.map((spot) => (
                    <button
                      key={spot.id}
                      type="button"
                      onClick={() => setActiveHotspot(spot)}
                      className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                        activeHotspot?.id === spot.id
                          ? 'bg-cyan-400/20 border-cyan-400 text-cyan-200'
                          : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      {spot.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. İNTERAKTİV GƏLƏCƏK SİMULYATORU (AI Impact Sandbox)
         ==================================================================== */}
      <section
        id="simulator"
        className="py-20 lg:py-28 relative bg-[#080C1A]/90 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={simHeadRef}
            className={`max-w-3xl mb-12 transition-all duration-700 ${
              simHeadVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold mb-4">
              <Sliders className="w-3.5 h-3.5" />
              İNTERAKTİV MODELLEŞDİRMƏ
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Gələcək Simulyatoru
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mt-3">
              Strateji sahəni seçin və süni intellektin avtonomluq səviyyəsini
              tənzimləyərək qlobal təsirləri real vaxtda hesablayın.
            </p>
          </div>

          <div className="rounded-3xl bg-[#0B1021]/90 border border-white/10 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Sol Kontrol Paneli */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                    1. Strateji Sahəni Seçin
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(SIMULATOR_SCENARIOS).map(([key, item]) => {
                      const active = simCategory === key;
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setSimCategory(key)}
                          className={`p-3.5 rounded-xl border text-left text-sm font-semibold transition-all ${
                            active
                              ? 'bg-white/10 border-cyan-400 text-white shadow-md'
                              : 'bg-[#05070E]/70 border-white/10 text-slate-400 hover:text-white'
                          }`}
                        >
                          <span
                            className="inline-block w-2.5 h-2.5 rounded-full mr-2"
                            style={{ backgroundColor: item.color }}
                          />
                          {item.name}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Avtonomluq Sürgüsü (Slider) */}
                <div className="p-5 rounded-2xl bg-[#05070E]/80 border border-white/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="autonomy-range"
                      className="text-sm font-semibold text-white"
                    >
                      2. Sİ Avtonomluq Səviyyəsi
                    </label>
                    <span
                      className="text-xl font-extrabold font-mono"
                      style={{ color: currentScenario.color }}
                    >
                      {simAutonomy}%
                    </span>
                  </div>

                  <input
                    id="autonomy-range"
                    type="range"
                    min="20"
                    max="100"
                    value={simAutonomy}
                    onChange={(e) => setSimAutonomy(Number(e.target.value))}
                    className="w-full h-2.5 bg-white/15 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />

                  <div className="flex justify-between text-[11px] text-slate-500">
                    <span>20% (İnsan Nəzarətli)</span>
                    <span>60% (Hibrid Simbioz)</span>
                    <span>100% (Tam Avtonom)</span>
                  </div>
                </div>

                {/* Dinamik Strateji Proqnoz Kartı */}
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-cyan-300 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    Strateji Proqnoz Analizi
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {computedForecastText}
                  </p>
                </div>
              </div>

              {/* Sağ Canlı Vizualizasiya və KPI Paneli */}
              <div className="lg:col-span-6 space-y-6">
                <div className="p-4 rounded-2xl bg-[#05070E] border border-white/10">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2 px-1">
                    <span>KVANT REZONANS SAHƏSİ</span>
                    <span style={{ color: currentScenario.color }}>
                      {currentScenario.name.toUpperCase()}
                    </span>
                  </div>
                  <QuantumFieldCanvas
                    autonomy={simAutonomy}
                    color={currentScenario.color}
                  />
                </div>

                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  <div className="p-4 rounded-2xl bg-[#05070E]/90 border border-white/10 text-center">
                    <div
                      className="text-2xl sm:text-3xl font-extrabold"
                      style={{ color: currentScenario.color }}
                    >
                      +{computedEfficiency}%
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      Resurs Səmərəliliyi
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#05070E]/90 border border-white/10 text-center">
                    <div className="text-2xl sm:text-3xl font-extrabold text-violet-400">
                      {computedTimeSaved}%
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      İnsan Zamanına Qənaət
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#05070E]/90 border border-white/10 text-center">
                    <div className="text-2xl sm:text-3xl font-extrabold text-amber-300">
                      -{computedRiskDrop}%
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      İnsan Xətası və Risk
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          7. RESPONSİV FOOTER VƏ BÜLLETEN ABUNƏLİYİ
         ==================================================================== */}
      <footer className="bg-[#04060C] border-t border-white/10 pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-2.5 font-extrabold text-xl text-white">
                <Globe className="w-6 h-6 text-cyan-400" />
                <span>
                  AETHER <span className="text-cyan-400">2050</span>
                </span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed max-w-md">
                Süni intellekt, neyro-texnologiyalar və yeni nəsil robototexnikanın
                bəşəriyyətin gələcəyini necə formalaşdırdığını araşdıran interaktiv
                rəqəmsal platforma.
              </p>
            </div>

            <div className="md:col-span-3 space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Bölmələr
              </h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection('domains')}
                    className="hover:text-cyan-300 transition-colors"
                  >
                    Transformasiya Sahələri
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection('timeline')}
                    className="hover:text-cyan-300 transition-colors"
                  >
                    2026 – 2050 Zaman Xətti
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection('robots')}
                    className="hover:text-cyan-300 transition-colors"
                  >
                    Robot Arxitekturası
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection('simulator')}
                    className="hover:text-cyan-300 transition-colors"
                  >
                    Gələcək Simulyatoru
                  </button>
                </li>
              </ul>
            </div>

            <div className="md:col-span-4 space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Gələcək Bülleteni
              </h4>
              <p className="text-sm text-slate-400">
                Sİ və robototexnika sahəsindəki ən son elmi sıçrayışlardan xəbərdar
                olun.
              </p>

              {subscribed ? (
                <div className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Abunəliyiniz təsdiqləndi! Gələcək bülleteninə xoş gəldiniz.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="E-poçt ünvanınız..."
                    className="flex-1 min-w-0 px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-cyan-400 text-slate-950 font-semibold text-sm hover:bg-cyan-300 transition-colors shrink-0"
                  >
                    Qoşul
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>© 2026 AETHER 2050. Bütün hüquqlar qorunur.</div>
            <button
              type="button"
              onClick={() => scrollToSection('hero')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/40 transition-all"
            >
              Yuxarı Qayıt
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>

      {/* ====================================================================
          8. SAHƏ DETALLARI MODALI (Glassmorphic Interactive Modal)
         ==================================================================== */}
      {selectedDomain && (
        <div
          onClick={() => setSelectedDomain(null)}
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-lg flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0B1021] border border-white/15 p-6 sm:p-8 shadow-[0_0_60px_rgba(0,240,255,0.2)] space-y-6"
          >
            {/* Bağlama Düyməsi */}
            <button
              type="button"
              onClick={() => setSelectedDomain(null)}
              aria-label="Bağla"
              className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span
                className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3"
                style={{
                  color: selectedDomain.accent,
                  backgroundColor: `${selectedDomain.accent}18`
                }}
              >
                {selectedDomain.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {selectedDomain.title}
              </h3>
            </div>

            {/* Böyüdülmüş SVG İllüstrasiya */}
            <div className="rounded-2xl bg-[#05070E] border border-white/10 p-4">
              <DomainArtwork id={selectedDomain.id} accent={selectedDomain.accent} />
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {selectedDomain.fullDesc}
            </p>

            {/* Əsas Texnoloji Sıçrayışlar */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                Əsas Texnoloji Sıçrayışlar
              </h4>
              {selectedDomain.breakthroughs.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-sm text-slate-200"
                >
                  <ChevronRight
                    className="w-4 h-4 shrink-0 mt-0.5"
                    style={{ color: selectedDomain.accent }}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Statistik Göstəricilər */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {selectedDomain.stats.map((st, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#05070E]/90 border border-white/10"
                >
                  <div className="text-xs text-slate-400">{st.label}</div>
                  <div
                    className="text-xl font-extrabold mt-1"
                    style={{ color: selectedDomain.accent }}
                  >
                    {st.value}%
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10 mt-2 overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${st.value}%`,
                        backgroundColor: selectedDomain.accent
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}