import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface HeroSectionProps {
  version?: string;
  title: ReactNode;
  subtitle: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta: {
    text: string;
    href: string;
    external?: boolean;
  };
  demoImageLight?: {
    src: string;
    alt: string;
  };
  demoImageDark?: {
    src: string;
    alt: string;
  };
}

export function HeroSection({
version,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  demoImageLight,
  demoImageDark,
}: HeroSectionProps) {
  return (
    <section className="flex flex-col items-center justify-center pt-12 text-center bg-gradient-to-b from-white to-teal-50/30 dark:from-gray-950 dark:to-cyan-800/30">
      
        {version && (
        <div className="mb-4 sm:mb-6">
          <Link
            href="https://github.com/lin-snow/Ech0/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-orange-800 dark:text-orange-200 bg-orange-100 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-700 rounded-full hover:bg-orange-200 dark:hover:bg-orange-900/50 hover:shadow-sm transition-all"
          >
            <span>🎉</span>
            <span className="hidden xs:inline">Released </span>
            {version}
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </Link>
        </div>
      )}

      <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight px-2">{title}</h1>

      <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-200 px-4">{subtitle}</p>

      <div className="mt-6 sm:mt-8 flex flex-row gap-3 sm:gap-4 w-auto mx-auto">
        <Link
          href={primaryCta.href}
          className="inline-flex items-center justify-center px-6 py-3 sm:px-6 sm:py-3 text-sm sm:text-base font-medium text-white bg-cyan-600 border border-transparent rounded-lg shadow-lg hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-all"
        >
          {primaryCta.text}
        </Link>
        <Link
          href={secondaryCta.href}
          target={secondaryCta.external ? "_blank" : undefined}
          rel={secondaryCta.external ? "noopener noreferrer" : undefined}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-6 sm:py-3 text-sm sm:text-base font-medium text-cyan-700 dark:text-cyan-300 bg-white dark:bg-gray-800 border border-cyan-200 dark:border-cyan-600 rounded-lg hover:bg-cyan-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-all"
        >
          {secondaryCta.text}
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </Link>
      </div>

      {(demoImageLight || demoImageDark) && (
        //TODO 这个会使图片在小屏幕溢出
        <div className="mt-8 sm:mt-12 w-fit max-w-6xl overflow-auto">
          {demoImageLight && (
            <img src={demoImageLight.src} alt={demoImageLight.alt} className="w-[200vw] max-w-none sm:w-full h-auto block dark:hidden" />
          )}
          {demoImageDark && (
            <img src={demoImageDark.src} alt={demoImageDark.alt} className="w-[200vw] max-w-none sm:w-full h-auto hidden dark:block" />
          )}
        </div>
      )}
    </section>
  );
}
