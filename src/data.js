// ====== EDIT HERE: all portfolio content lives in this file ======
// Texts in [English, Тоҷикӣ, Русский] order.

export const profile = {
  name: 'Sanjar',
  fullName: 'Asadzoda Sanjar',
  email: 'simplysanjar@gmail.com',
  github: 'https://github.com/simplysanjar',
  githubUser: 'simplysanjar',
  linkedin: 'https://www.linkedin.com/in/simplysanjar/',
  site: 'https://www.sanjar.world',
  photo: '/profile/photo.png',          // put your photo in public/profile/
  cv: '/cv/Asadzoda_Sanjar_CV.pdf',     // put your CV in public/cv/ (replace the file to update)
}

// level: 1..5 (3 = intermediate)
export const skillGroups = [
  { title: ['Programming Languages', 'Забонҳои Барноманависӣ', 'Языки программирования'], items: [['Python', 3]] },
  { title: ['Frameworks', 'Фреймворкҳо', 'Фреймворки'], items: [['FastAPI', 3]] },
  { title: ['Tools', 'DevOps ва абзорҳо', 'DevOps и инструменты'], items: [['Docker', 3], ['Render', 3]] },
  { title: ['Backend Development', 'Таҳияи қисми серверӣ', 'Бэкенд-разработка'], items: [['API & REST API', 3], ['HTTP / HTTPS', 3], ['Docker', 3], ['Git / GitHub', 3]] },
  { title: ['Databases', 'Пойгоҳҳои додаҳо', 'Базы данных'], items: [['MongoDB', 3]] },
]

export const languages = [
  { name: ['Tajik', 'Тоҷикӣ', 'Таджикский'], level: ['Native', 'Забони модарӣ', 'Родной'], flag: 'flagpack:tj' },
  { name: ['Persian', 'Форсӣ', 'Персидский'], level: ['Full professional', 'Касбии пурра', 'Профессиональное полное'], flag: 'persian-lion-sun' },
  { name: ['English', 'Англисӣ', 'Английский'], level: ['Limited working', 'Корӣ (маҳдуд)', 'Ограниченное рабочее'], flag: 'flagpack:us' },
  { name: ['Russian', 'Русӣ', 'Русский'], level: ['Elementary', 'Ибтидоӣ', 'Базовое'], flag: 'flagpack:ru' },
]

// images: public/projects/<id>/cover.png (add later; a placeholder shows until then)
export const projects = [
  {
    id: 'anyvoice', title: 'AnyVoice',
    imageCount: 10,
    desc: [
      'Social network for freedom of speech',
      'Шабакаи иҷтимои барои озодии баён',
      'Социальная сеть для свободы слова',
    ],
    tech: ["Python", "FastAPI", "MongoDB", "Docker", "API & REST API", "Git & GitHub", "WebSocket", "JavaScript", "React", "HTML", "CSS", "i18n",],
    links: [['Frontend', 'https://github.com/simplysanjar/anyvoice'], ['Backend', 'https://github.com/simplysanjar/anyvoice-backend']],
    website: 'https://anyvoice.world',
  },
  {
    id: 'capsulix', title: 'Capsulix',
    imageCount: 0,
    desc: [
      'Time capsule in Telegram',
      'Капсулаи вақт дар Telegram',
      'Капсула времени в Telegram',
    ],
    tech: ["Python", "aiogram"],
    links: [['Code', 'https://github.com/simplysanjar/capsulix']],
    website: 'https://t.me/capsulixbot',
  },
  {
    id: 'portfolio', title: 'Portfolio',
    imageCount: 6,
    desc: [
      "Personal portfolio",
      "Портфолиои шахсӣ",
      "Личное портфолио",
    ],
    tech: ['React', 'Tailwind CSS', 'i18n', 'JavaScript', 'HTML', 'CSS'],
    links: [['Code', 'https://github.com/simplysanjar/portfolio']],
    website: 'https://www.sanjar.world',
  },
  {
    id: 'messenger0', title: 'Messenger0',
    imageCount: 3,
    desc: [
      'Safe messenger for comfortable communication',
      'Паёмрасони амн барои сӯҳбати роҳат',
      'Безопасный мессенджер для удобного общения',
    ],
    tech: ["Python", "JavaScript", "React", "FastAPI", "MongoDB", "Websocket", "HTML", "CSS", "Tailwind", "i18n", "Docker", "API & REST API", "Git & GitHub"],
    links: [['Frontend', 'https://github.com/simplysanjar/messenger0'], ['Backend', 'https://github.com/simplysanjar/messenger0-backend']],
    website: 'https://messenger0.world',
  },
]

export const education = [
  {
    school: ['Institute of Digital Technologies and Artificial Intelligence', 'Донишкадаи технологияҳои рақамӣ ва зеҳни сунъӣ', 'Институт цифровых технологий и искусственного интеллекта'],
    degree: ["Bachelor's Degree, Software Engineering", 'Бакалавр, Муҳандисии нармафзор', 'Бакалавр, программная инженерия'],
    period: ['Sep 2026 – May 2030', 'Сентябри 2026 – Майи 2030', 'Сент. 2026 – май 2030'],
    desc: [
      'Focus on programming fundamentals, algorithms and data structures, database management and modern software engineering practices. Building practical skills in Python, backend development and API design.',
      'Таваҷҷӯҳ ба асосҳои барномасозӣ, алгоритмҳо ва сохтори маълумот, идоракунии пойгоҳи маълумот ва усулҳои муосири муҳандисии нармафзор. Рушди малакаҳои амалӣ дар Python, backend ва тарҳрезии API.',
      'Упор на основы программирования, алгоритмы и структуры данных, управление базами данных и современные практики разработки. Практические навыки в Python, backend и проектировании API.',
    ],
  },
  {
    school: ['Secondary School No. 33, Tursunzoda', 'Мактаби миёнаи № 33, Турсунзода', 'Средняя школа № 33, Турсунзода'],
    degree: ['High School Diploma (general secondary education)', 'Шаҳодатнома дар бораи таҳсилоти миёнаи умумӣ', 'Аттестат о среднем общем образовании'],
    period: ['Sep 2015 – May 2026', 'Сентябри 2015 – Майи 2026', 'Сент. 2015 – май 2026'],
    desc: [
      'Strong foundation in mathematics, computer science, languages and natural sciences. Grading: 10-point scale.',
      'Асоси мустаҳкам дар математика, информатика, забонҳо ва илмҳои табиӣ. Низоми баҳогузорӣ: 10-балла.',
      'Прочная база по математике, информатике, языкам и естественным наукам. Шкала оценок: 10-балльная.',
    ],
  },
]

// status: 'pending' | 'ready'. When ready, add the file to public/certificates/ and set file (or url).
export const certificates = [
  {
    id: 'hr-python',
    title: ['HackerRank — Python (Basic)', 'HackerRank — Python (Basic)', 'HackerRank — Python (Basic)'],
    issuer: 'HackerRank',
    status: 'ready',
    image: '/certificates/python_basic_certificate.png',
    file: '/certificates/python_basic_certificate.pdf',
    verify: 'https://www.hackerrank.com/certificates/0c7b5d9b5e8b',
  },
]
