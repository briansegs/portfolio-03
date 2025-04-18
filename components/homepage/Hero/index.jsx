import ButtonDark from '@/components/ButtonDark'
import DownloadCVBtn from '@/components/DownloadCVBtn'
import Link from 'next/link'

import avatar from '@/assets/hero/avatar_03.webp'
import bgHero from '@/assets/hero/bgHero.webp'
import { ImageMedia } from '@/components/ImageMedia'
import { heroData } from '@/constants'
import ParticleContainer from './Hero.client'

const { headingText, headingSubtext, buttonText } = heroData

const Hero = () => (
  <section className="relative size-full px-8 sm:px-16">
    {/* Background Image */}
    <ImageMedia src={bgHero} alt="Hero Background" fill priority className="-z-10 object-cover" />

    {/* Particles */}
    <ParticleContainer />

    <div className="max-container flex min-h-screen w-full items-center">
      {/* Text */}
      <div className="absolute z-0 flex w-[310px] flex-col sm:w-fit">
        <h1 className="ml-0 w-full font-primary text-6xl leading-[55px] font-black tracking-[-3px] text-white sm:ml-[-8px] sm:w-[670px] sm:text-8xl sm:leading-[90px] sm:tracking-[-6px]">
          {headingText}
        </h1>
        <p className="my-7 w-full border-t-2 border-white pt-4 text-2xl tracking-[-0.5px] text-white sm:w-[500px] sm:text-3xl sm:tracking-[-1px]">
          {headingSubtext}
        </p>

        <div className="flex w-fit items-center gap-4">
          <Link href={'/Brian Segers Resume.pdf'} target="_blank" download>
            <DownloadCVBtn dark={false} />
          </Link>

          <Link href={'/contact'}>
            <ButtonDark title={buttonText} />
          </Link>
        </div>
      </div>

      {/* Avatar Image */}
      <div className="absolute right-40 bottom-0">
        <div className="hidden xl:flex xl:max-w-none">
          <ImageMedia
            src={avatar}
            alt="avatar"
            width={650}
            height={720}
            priority
            className="h-[720px] w-[650px] mix-blend-screen"
          />
        </div>
      </div>
    </div>
  </section>
)

export default Hero
