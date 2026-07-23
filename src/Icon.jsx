import {
  GithubLogo,
  LinkedinLogo,
  TelegramLogo,
  InstagramLogo,
  EnvelopeSimple,
} from '@phosphor-icons/react'

const icons = {
  github: GithubLogo,
  linkedin: LinkedinLogo,
  telegram: TelegramLogo,
  instagram: InstagramLogo,
  mail: EnvelopeSimple,
}

export default function Icon({ name, size = 18 }) {
  const Cmp = icons[name]
  return <Cmp size={size} weight="regular" />
}
