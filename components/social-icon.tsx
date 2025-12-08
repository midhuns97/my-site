// components/social-icon.tsx
import {
  Camera,
  Play,
  Linkedin,
  Pin,
  ThumbsUp,
} from "lucide-react";

interface SocialIconProps {
  type: "facebook" | "instagram" | "youtube" | "linkedin" | "pinterest";
  size?: number;
  className?: string;
}

export default function SocialIcon({ type, size = 20, className }: SocialIconProps) {
  const icons: Record<string, JSX.Element> = {
    facebook: <ThumbsUp size={size} />,
    instagram: <Camera size={size} />,
    youtube: <Play size={size} />,
    linkedin: <Linkedin size={size} />,
    pinterest: <Pin size={size} />,
  };

  // Brand-inspired colors
  const brandColors: Record<string, string> = {
    facebook: "text-[#1778F2]",

    instagram:
      "text-transparent bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] bg-clip-text",

    youtube: "text-[#FF0000]",
    linkedin: "text-[#0A66C2]",
    pinterest: "text-[#E60023]",
  };

  return (
    <span
      className={`inline-flex items-center justify-center transition transform hover:scale-110 ${brandColors[type]} ${className}`}
    >
      {icons[type]}
    </span>
  );
}
