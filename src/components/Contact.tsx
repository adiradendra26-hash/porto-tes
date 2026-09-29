import type { ComponentType } from "react";
import { CONTACT_SECTION } from "@/data/portfolio";
import type { SocialChannel } from "@/data/portfolio";
import SectionHeader from "@/components/SectionHeader";
import {
  GithubIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "@/components/BrandIcons";
import { ArrowUpRight, MapPin } from "lucide-react";

const CHANNEL_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  whatsapp: WhatsappIcon,
};

const CHANNEL_MODIFIERS: Record<string, string> = {
  github: "channel--github",
  linkedin: "channel--linkedin",
  whatsapp: "channel--whatsapp",
};

export default function Contact() {
  return (
    <section
      id="contact"
      aria-label="Kontak"
      className="contact-section-bg py-20 sm:py-28"
    >
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeader
          number={CONTACT_SECTION.number}
          title={CONTACT_SECTION.title}
        />

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Statement */}
          <div className="rise-item rise-item--1 lg:col-span-5">
            <h3 className="text-h1 font-medium tracking-tightest text-offwhite-100">
              Let&apos;s
              <br />
              connect.
            </h3>
            <p className="mt-5 max-w-sm leading-relaxed text-offwhite-300">
              {CONTACT_SECTION.subtext}
            </p>

            <p className="label mt-7 flex items-center gap-2">
              <MapPin aria-hidden="true" className="h-3.5 w-3.5 text-accent" />
              {CONTACT_SECTION.location}
            </p>
            <p className="label mt-2">{CONTACT_SECTION.note}</p>
          </div>

          {/* Channel cards */}
          <ul className="flex flex-col gap-3.5 sm:gap-4 lg:col-span-7">
            {CONTACT_SECTION.channels.map((channel, index) => (
              <li
                key={channel.id}
                className={`rise-item rise-item--${index + 1}`}
              >
                <ChannelCard channel={channel} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ChannelCard({ channel }: { channel: SocialChannel }) {
  const Icon = CHANNEL_ICONS[channel.id];
  const modifier = CHANNEL_MODIFIERS[channel.id];

  return (
    <a
      href={channel.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`channel ${modifier}`}
      aria-label={`${channel.label}: ${channel.displayValue}`}
    >
      {/* Icon tile — warna aksen lembut per platform */}
      <span className="channel-tile" aria-hidden="true">
        <Icon className="channel-icon h-5 w-5" />
      </span>

      {/* Text — warna solid eksplisit, kontras AA di kedua tema */}
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold tracking-tight">
          {channel.label}
        </span>
        <span className="channel-sub mt-0.5 block truncate text-xs">
          {channel.tagline} · {channel.displayValue}
        </span>
      </span>

      {/* Arrow */}
      <ArrowUpRight
        aria-hidden="true"
        className="channel-arrow h-5 w-5 shrink-0 opacity-90"
      />
    </a>
  );
}
