
import { useEffect, useState, useRef } from 'react'
import { profile, skillGroups, languages, projects, education, certificates } from './data'
import { Icon } from '@iconify/react'

const card = 'rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900'
const muted = 'text-slate-600 dark:text-slate-400'
const btn = 'inline-flex items-center rounded-md px-4 py-2 text-sm font-medium'
const btnPrimary = `${btn} bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300`
const btnGhost = `${btn} border border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800`
const link = 'text-blue-700 underline-offset-2 hover:underline dark:text-blue-300'

const iconClass = 'shrink-0 text-blue-600 dark:text-blue-400'

const techIcons = {
  python: 'logos:python',
  fastapi: 'logos:fastapi',
  django: 'logos:django',
  flask: 'simple-icons:flask',
  mongodb: 'logos:mongodb-icon',
  postgresql: 'logos:postgresql',
  mysql: 'logos:mysql',
  docker: 'logos:docker-icon',
  git: 'logos:git-icon',
  github: 'mdi:github',
  javascript: 'logos:javascript',
  typescript: 'logos:typescript-icon',
  react: 'logos:react',
  html: 'logos:html-5',
  css: 'logos:css-3',
  linux: 'logos:linux-tux',
  redis: 'logos:redis',
  api: 'mdi:api',
}

function techIcon(name) {
  const key = String(name).toLowerCase()

  return techIcons[key] ||
    (key.includes('python') ? techIcons.python :
    key.includes('fastapi') ? techIcons.fastapi :
    key.includes('mongo') ? techIcons.mongodb :
    key.includes('postgres') ? techIcons.postgresql :
    key.includes('docker') ? techIcons.docker :
    key.includes('git') ? techIcons.git :
    'mdi:code-tags')
}

const Title = ({ children, note }) => (
  <div className="mb-6">
    <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
      {children}
    </h1>
    {note && <p className={`mt-2 text-sm ${muted}`}>{note}</p>}
  </div>
)

function Img({ src, alt, className, fallback }) {
  const [bad, setBad] = useState(false)

  if (bad) return fallback

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setBad(true)}
    />
  )
}

function getProjectImages(id, count) {
  return Array.from({ length: count }, (_, index) => ({
    number: index + 1,
    src: `/projects/${id}/${index + 1}.png`,
  }))
}

const initials = profile.fullName.split(' ').map((w) => w[0]).join('')

export function Home({ t }) {
  const facts = [
    [t('home.stack'), 'Python · FastAPI · MongoDB · Docker · Git & GitHub'],
    [t('home.work'), t('home.workVal')],
    [t('home.study'), t('home.studyVal')],
  ]

  return (
    <div>
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        <Img
          src={profile.photo}
          alt={profile.fullName}
          className="h-32 w-32 shrink-0 rounded-full object-cover sm:h-40 sm:w-40"
          fallback={
            <div
              aria-hidden
              className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-slate-900 text-4xl font-semibold text-white sm:h-40 sm:w-40 dark:bg-slate-100 dark:text-slate-900"
            >
              {initials}
            </div>
          }
        />

        <div>
          <p className={muted}>{t('home.hi')}</p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            {profile.fullName}
          </h1>

          <p className="mt-1 text-lg font-medium text-blue-700 dark:text-blue-300">
            {t('role')}
          </p>

          <p className={`mt-2 flex items-center gap-1.5 text-sm ${muted}`}>
            <Icon
              icon="mdi:map-marker"
              className={iconClass}
              width="18"
            />
            {t('home.loc')}
          </p>
        </div>
      </div>

      <p className="mt-6 max-w-4xl text-lg leading-relaxed">
        {t('home.tag')}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a href="#/projects" className={btnPrimary}>
          <Icon icon="mdi:folder-star-outline" className="mr-2" width="18" />
          {t('home.projects')}
        </a>

        <a href={profile.cv} download className={btnGhost}>
          <Icon icon="mdi:file-download-outline" className="mr-2" width="18" />
          {t('home.cv')}
        </a>

        <a href="#/contact" className={btnGhost}>
          <Icon icon="mdi:email-outline" className="mr-2" width="18" />
          {t('home.contact')}
        </a>
      </div>

      <dl className="mt-10 grid gap-3 sm:grid-cols-3">
        {facts.map(([k, v]) => (
          <div key={k} className={card}>
            <dt className={`flex items-center gap-2 text-sm ${muted}`}>
              <Icon
                icon={
                  k === t('home.stack')
                    ? 'mdi:code-braces'
                    : k === t('home.work')
                      ? 'mdi:briefcase-outline'
                      : 'mdi:school-outline'
                }
                className={iconClass}
                width="17"
              />
              {k}
            </dt>
            <dd className="mt-1 font-medium">{v}</dd>
          </div>
        ))}
      </dl>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-slate-800">
        <About t={t} />
      </section>
    </div>
  )
}

function About({ t }) {
  return (
    <div>
      <Title>{t('about.title')}</Title>

      <div className="max-w-4xl space-y-4 leading-relaxed">
        <p>{t('about.p1')}</p>
        <p>{t('about.p2')}</p>
        <p>{t('about.p3')}</p>
        <p>{t('about.p4')}</p>
      </div>

      <h2 className="mb-3 mt-10 flex items-center gap-2 text-xl font-semibold">
        <Icon icon="mdi:translate" className={iconClass} width="21" />
        {t('about.langs')}
      </h2>

      <ul className="grid gap-3 sm:grid-cols-2">
        {languages.map((l) => (
          <li
            key={l.name[0]}
            className={`${card} flex items-center justify-between gap-3`}
          >
            <span className="flex items-center gap-2 font-medium">
              {l.flag === 'persian-lion-sun' ? (
                <img
                  src="https://commons.wikimedia.org/wiki/Special:FilePath/State_flag_of_the_Imperial_State_of_Iran_(with_standardized_lion_and_sun).svg"
                  alt="Lion and Sun"
                  className="h-[17px] w-[21px] object-cover"
                />
              ) : (
                <Icon icon={l.flag} width="21" />
              )}
              {t(l.name)}
            </span>
            <span className={`flex items-center gap-1.5 text-sm ${muted}`}>
              <Icon icon="mdi:chart-line" width="16" />
              {t(l.level)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Skills({ t }) {
  return (
    <div>
      <Title note={t('skills.note')}>
        {t('skills.title')}
      </Title>

      <div className="columns-1 gap-4 sm:columns-2">
        {skillGroups.map((g) => (
          <section
            key={g.title[0]}
            className={`${card} mb-4 break-inside-avoid`}
          >
            <h2 className="mb-3 text-lg font-semibold">
              {t(g.title)}
            </h2>

            <ul className="space-y-3">
              {g.items.map(([name, level]) => (
                <li
                  key={name}
                  className="flex items-center justify-between gap-3"
                >
                  <span className="flex min-w-0 items-center gap-2">
                    <Icon
                      icon={techIcon(name)}
                      className="shrink-0"
                      width="19"
                      height="19"
                    />
                    <span>{name}</span>
                  </span>

                  <span
                    className="flex shrink-0 items-center gap-2"
                    title={`${t('skills.level')}: ${t(`skills.levels.${level}`)}`}
                  >
                    <span className="flex gap-1" aria-hidden="true">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <span
                          key={n}
                          className={`h-2 w-3.5 rounded-sm ${
                            n <= level
                              ? 'bg-blue-600 dark:bg-blue-400'
                              : 'bg-slate-200 dark:bg-slate-700'
                          }`}
                        />
                      ))}
                    </span>

                    <span className={`text-xs ${muted}`}>
                      {t(`skills.levels.${level}`)}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}

export function Projects({ t }) {
  const sliderRef = useRef(null)

  const [activeProject, setActiveProject] = useState(null)
  const [currentImage, setCurrentImage] = useState(0)

  const activeProjectData = projects.find(
    (project) => project.id === activeProject
  )

  const galleryImages = activeProjectData
    ? getProjectImages(
        activeProjectData.id,
        activeProjectData.imageCount
      )
    : []

  // Close gallery and keyboard controls
  useEffect(() => {
    if (!activeProject) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveProject(null)
      }

      if (event.key === 'ArrowRight') {
        nextImage()
      }

      if (event.key === 'ArrowLeft') {
        previousImage()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeProject, galleryImages.length, currentImage])

  // Open gallery
  const openGallery = (id) => {
    const project = projects.find((p) => p.id === id)

    if (project?.imageCount > 0) {
      setCurrentImage(0)
      setActiveProject(id)
    }
  }

  // Navigate to a specific image
  const goToImage = (index) => {
    const slider = sliderRef.current

    if (!slider) return

    const nextIndex = Math.max(
      0,
      Math.min(index, galleryImages.length - 1)
    )

    setCurrentImage(nextIndex)

    slider.scrollTo({
      left: nextIndex * slider.clientWidth,
      behavior: 'smooth',
    })
  }

  // Previous image
  const previousImage = () => {
    goToImage(currentImage - 1)
  }

  // Next image
  const nextImage = () => {
    goToImage(currentImage + 1)
  }

  // Update current image after manual scrolling
  const handleSliderScroll = (event) => {
    const slider = event.currentTarget

    const index = Math.round(
      slider.scrollLeft / slider.clientWidth
    )

    setCurrentImage((prev) => (
      prev === index ? prev : index
    ))
  }

  return (
    <div>
      <Title note={t('projects.note')}>
        {t('projects.title')}
      </Title>

      {/* Projects list */}
      <div className="columns-1 gap-5 md:columns-2">
        {projects.map((p) => {
          const preview = `/projects/${p.id}/0.png`
          const hasGallery = p.imageCount > 0

          return (
            <article
              key={p.id}
              role={hasGallery ? 'button' : undefined}
              tabIndex={hasGallery ? 0 : undefined}
              onClick={() => openGallery(p.id)}
              onKeyDown={(event) => {
                if (
                  hasGallery &&
                  (event.key === 'Enter' || event.key === ' ')
                ) {
                  event.preventDefault()
                  openGallery(p.id)
                }
              }}
              className={`${card} mb-5 break-inside-avoid overflow-hidden !p-0 ${
                hasGallery
                  ? 'cursor-pointer transition hover:-translate-y-1 hover:shadow-lg'
                  : ''
              }`}
            >
              {/* Project preview */}
              <div className="relative">
                <Img
                  src={preview}
                  alt={p.title}
                  className="block h-auto w-full object-contain"
                  fallback={
                    <div className="flex min-h-48 w-full items-center justify-center bg-slate-100 text-2xl font-semibold text-slate-400 dark:bg-slate-800 dark:text-slate-600">
                      {p.title}
                    </div>
                  }
                />

                {hasGallery && (
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-lg bg-black/65 px-3 py-1.5 text-xs text-white backdrop-blur-sm">
                    <Icon
                      icon="mdi:image-multiple-outline"
                      width="16"
                    />
                    {t('projects.gallery')}
                  </div>
                )}
              </div>

              {/* Project information */}
              <div className="flex flex-col p-5">
                <h2 className="text-xl font-semibold">
                  {p.title}
                </h2>

                <p className={`mt-2 text-sm leading-relaxed ${muted}`}>
                  {t(p.desc)}
                </p>

                {/* Technologies */}
                <ul className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((x) => (
                    <li
                      key={x}
                      className="inline-flex items-center gap-1.5 rounded border border-slate-300 px-2 py-1 text-xs dark:border-slate-700"
                    >
                      <Icon
                        icon={techIcon(x)}
                        width="14"
                        height="14"
                      />
                      {x}
                    </li>
                  ))}
                </ul>

                {/* Project links */}
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                  {p.website && (
                    <a
                      href={p.website}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className={`inline-flex items-center gap-1 ${link}`}
                    >
                      <Icon icon="mdi:open-in-new" width="16" />
                      {t('projects.open')}
                    </a>
                  )}

                  {p.links.map(([label, url]) => (
                    <a
                      key={url}
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className={`inline-flex items-center gap-1 ${link}`}
                    >
                      <Icon icon="mdi:github" width="16" />
                      {label} (GitHub)
                    </a>
                  ))}
                </div>
              </div>
            </article>
          )
        })}
      </div>

      {/* Horizontal fullscreen gallery */}
      {activeProjectData && galleryImages.length > 0 && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/85 backdrop-blur-md"
          onClick={() => setActiveProject(null)}
        >
          {/* Image counter */}
          <div className="fixed left-5 top-5 z-[102] rounded-full border border-white/20 bg-black/40 px-4 py-2 text-sm text-white backdrop-blur-md">
            {currentImage + 1} / {galleryImages.length}
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={() => setActiveProject(null)}
            aria-label="Close gallery"
            className="fixed right-5 top-5 z-[102] flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-colors duration-150 hover:bg-white/20"
          >
            <Icon icon="mdi:close" width="24" />
          </button>

          {/* Previous button */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              previousImage()
            }}
            disabled={currentImage === 0}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-[102] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition-colors duration-150 hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-30 sm:left-6"
          >
            <Icon icon="mdi:chevron-left" width="32" />
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              nextImage()
            }}
            disabled={currentImage === galleryImages.length - 1}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-[102] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition-colors duration-150 hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-30 sm:right-6"
          >
            <Icon icon="mdi:chevron-right" width="32" />
          </button>

          {/* Horizontal slider */}
          <div
            ref={sliderRef}
            onScroll={handleSliderScroll}
            onClick={(event) => event.stopPropagation()}
            className="flex h-full w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {galleryImages.map((image) => (
              <div
                key={image.number}
                className="flex h-full w-full min-w-full shrink-0 snap-center items-center justify-center p-5 sm:p-16"
              >
                <Img
                  src={image.src}
                  alt={`${activeProjectData.title} - ${image.number}`}
                  className="max-h-[85svh] max-w-full rounded-xl object-contain shadow-2xl"
                  fallback={
                    <div className="flex min-h-[300px] w-full items-center justify-center rounded-xl bg-slate-800 text-white">
                      Image {image.number} not found
                    </div>
                  }
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export function Education({ t }) {
  return (
    <div>
      <Title>{t('edu.title')}</Title>

      <ol className="space-y-4">
        {education.map((e) => (
          <li key={e.school[0]} className={card}>
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <Icon icon="mdi:school-outline" className={iconClass} width="20" />
              {t(e.school)}
            </h2>

            <p className="mt-1 flex items-center gap-2 font-medium text-blue-700 dark:text-blue-300">
              <Icon icon="mdi:certificate-outline" width="17" />
              {t(e.degree)}
            </p>

            <p className={`mt-1 flex items-center gap-1.5 text-sm ${muted}`}>
              <Icon icon="mdi:calendar-range-outline" width="16" />
              {t(e.period)}
            </p>

            <p className="mt-3 text-sm leading-relaxed">
              {t(e.desc)}
            </p>
          </li>
        ))}
      </ol>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-slate-800">
        <Certificates t={t} />
      </section>
    </div>
  )
}

function Certificates({ t }) {
  return (
    <div>
      <Title>{t('cert.title')}</Title>

      <ul className="grid gap-4 sm:grid-cols-2">
        {certificates.map((c) => (
          <li
            key={c.id}
            className={`${card} ${c.image ? 'sm:col-span-2' : ''}`}
          >
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <Icon icon="mdi:certificate-outline" className={iconClass} width="20" />
              {t(c.title)}
            </h2>

            <p className={`mt-1 flex items-center gap-1.5 text-sm ${muted}`}>
              <Icon icon="mdi:office-building-outline" width="16" />
              {c.issuer}
            </p>

            {/* Акси сертификат */}
            {c.status === 'ready' && c.image && (
              <a
                href={c.verify || c.file || c.image}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-4 block overflow-hidden rounded-md border border-slate-200 bg-slate-50 transition hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
              >
                <Img
                  src={c.image}
                  alt={`${t(c.title)} — ${c.issuer}`}
                  className="mx-auto block h-auto w-full max-w-3xl object-contain"
                  fallback={
                    <div className="flex min-h-48 w-full items-center justify-center text-slate-400">
                      {t(c.title)}
                    </div>
                  }
                />
              </a>
            )}

            {c.status === 'ready' ? (
              <div className="mt-4 flex flex-wrap gap-3">
                {c.verify && (
                  <a
                    href={c.verify}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={btnPrimary}
                  >
                    <Icon icon="mdi:shield-check-outline" className="mr-2" width="18" />
                    {t('cert.verify')}
                  </a>
                )}

                {c.file && (
                  <a href={c.file} download className={btnGhost}>
                    <Icon icon="mdi:download" className="mr-2" width="18" />
                    {t('cert.download')}
                  </a>
                )}

                {!c.verify && c.url && (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={btnPrimary}
                  >
                    <Icon icon="mdi:open-in-new" className="mr-2" width="18" />
                    {t('cert.view')}
                  </a>
                )}
              </div>
            ) : (
              <p className="mt-3 inline-flex items-center gap-1.5 rounded border border-amber-400 bg-amber-50 px-2 py-1 text-sm text-amber-900 dark:border-amber-600 dark:bg-amber-950 dark:text-amber-200">
                <Icon icon="mdi:clock-outline" width="16" />
                {t('cert.pending')}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

function useGithub() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    try {
      const c = sessionStorage.getItem('gh-cache')
      if (c) {
        setData(JSON.parse(c))
        return
      }
    } catch {
      // ignore
    }

    const u = `https://api.github.com/users/${profile.githubUser}`

    const ok = (r) =>
      r.ok ? r.json() : Promise.reject(new Error(r.status))

    Promise.all([
      fetch(u).then(ok),
      fetch(`${u}/repos?per_page=100&sort=updated`).then(ok),
    ])
      .then(([user, repos]) => {
        const v = { user, repos }

        try {
          sessionStorage.setItem('gh-cache', JSON.stringify(v))
        } catch {
          // ignore
        }

        setData(v)
      })
      .catch(() => setError(true))
  }, [])

  return { data, error }
}

export function GitHub({ t }) {
  const { data, error } = useGithub()

  const open = (
    <a
      href={profile.github}
      target="_blank"
      rel="noreferrer"
      className={btnGhost}
    >
      <Icon icon="mdi:github" className="mr-2" width="18" />
      {t('gh.open')}
    </a>
  )

  if (error) {
    return (
      <div>
        <Title>{t('gh.title')}</Title>
        <p className={`mb-4 ${muted}`}>{t('gh.error')}</p>
        {open}
      </div>
    )
  }

  if (!data) {
    return (
      <div>
        <Title>{t('gh.title')}</Title>
        <p className={muted}>{t('gh.loading')}</p>
      </div>
    )
  }

  const repos = data.repos.filter((r) => !r.fork)
  const stars = repos.reduce((s, r) => s + r.stargazers_count, 0)

  const langs = {}

  repos.forEach((r) => {
    if (r.language) {
      langs[r.language] = (langs[r.language] || 0) + 1
    }
  })

  const langList = Object.entries(langs).sort((a, b) => b[1] - a[1])

  const stats = [
    [t('gh.repos'), data.user.public_repos],
    [t('gh.followers'), data.user.followers],
    [t('gh.stars'), stars],
  ]

  const date = (s) => new Date(s).toLocaleDateString()

  return (
    <div>
      <Title>{t('gh.title')}</Title>

      <dl className="grid grid-cols-3 gap-3">
        {stats.map(([k, v]) => (
          <div key={k} className={card}>
            <dt className={`flex items-center gap-2 text-sm ${muted}`}>
              <Icon
                icon={
                  k === t('gh.repos')
                    ? 'mdi:source-repository'
                    : k === t('gh.followers')
                      ? 'mdi:account-group-outline'
                      : 'mdi:star-outline'
                }
                className={iconClass}
                width="17"
              />
              {k}
            </dt>

            <dd className="mt-1 text-2xl font-semibold">
              {v}
            </dd>
          </div>
        ))}
      </dl>

      {langList.length > 0 && (
        <section className={`${card} mt-4`}>
          <h2 className="mb-3 flex items-center gap-2 font-semibold">
            <Icon icon="mdi:code-json" className={iconClass} width="19" />
            {t('gh.langs')}
          </h2>

          <ul className="space-y-2">
            {langList.map(([name, n]) => (
              <li
                key={name}
                className="flex items-center gap-3 text-sm"
              >
                <span className="flex w-24 shrink-0 items-center gap-1.5">
                  <Icon icon={techIcon(name)} width="16" height="16" />
                  {name}
                </span>

                <span className="h-2 flex-1 rounded-sm bg-slate-200 dark:bg-slate-700">
                  <span
                    className="block h-2 rounded-sm bg-blue-600 dark:bg-blue-400"
                    style={{ width: `${(n / repos.length) * 100}%` }}
                  />
                </span>

                <span className={muted}>{n}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <h2 className="mb-3 mt-8 flex items-center gap-2 text-xl font-semibold">
        <Icon icon="mdi:source-repository-multiple" className={iconClass} width="21" />
        {t('gh.list')}
      </h2>

      <ul className="space-y-3">
        {repos.map((r) => (
          <li key={r.id} className={card}>
            <a
              href={r.html_url}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1.5 font-semibold ${link}`}
            >
              <Icon icon="mdi:github" width="17" />
              {r.name}
            </a>

            {r.description && (
              <p className={`mt-1 text-sm ${muted}`}>
                {r.description}
              </p>
            )}

            <p className={`mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm ${muted}`}>
              {r.language && (
                <span className="inline-flex items-center gap-1.5">
                  <Icon icon={techIcon(r.language)} width="15" />
                  {r.language}
                </span>
              )}

              <span className="inline-flex items-center gap-1.5">
                <Icon icon="mdi:update" width="15" />
                {t('gh.updated')}: {date(r.pushed_at)}
              </span>
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-6">{open}</div>
    </div>
  )
}

export function Contact({ t }) {
  const contacts = [
    {
      label: t('contact.email'),
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: 'mdi:email-outline',
    },
    {
      label: 'Telegram',
      value: 't.me/simplysanjar',
      href: 'https://t.me/simplysanjar',
      icon: 'mdi:telegram',
    },
    {
      label: 'GitHub',
      value: 'github.com/simplysanjar',
      href: profile.github,
      icon: 'mdi:github',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/simplysanjar',
      href: profile.linkedin,
      icon: 'mdi:linkedin',
    },
    {
      label: 'Portfolio',
      value: 'sanjar.world',
      href: profile.site,
      icon: 'mdi:briefcase-outline',
    },
  ]

  return (
    <div>
      <Title>{t('contact.title')}</Title>

      <p className="mb-6 max-w-2xl leading-relaxed">
        {t('contact.text')}
      </p>

      <ul className="max-w-xl divide-y divide-gray-200 dark:divide-gray-800">
        {contacts.map(({ label, value, href, icon }) => (
          <li key={label} className="flex items-center gap-3 py-3">
            <Icon
              icon={icon}
              className={`${iconClass} shrink-0`}
              width="19"
            />

            <span className={`shrink-0 text-sm ${muted}`}>
              {label}
            </span>

            <a
              href={href}
              target={
                href.startsWith('mailto:') || href.startsWith('tel:')
                  ? undefined
                  : '_blank'
              }
              rel="noreferrer"
              className={`inline-flex min-w-0 items-center gap-1.5 text-sm font-medium ${link}`}
            >
              <span className="break-all">{value}</span>
              {href.startsWith('tel:') ? null : (
                <Icon
                  icon="mdi:arrow-top-right"
                  width="15"
                  className="shrink-0"
                />
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}