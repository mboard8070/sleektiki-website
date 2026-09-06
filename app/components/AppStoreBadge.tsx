const BADGE_SRC = "/images/projects/app-store-badge-us-uk-black.svg";

export const CYTE_APP_STORE_URL =
  "https://apps.apple.com/us/app/cyte/id6804433245";

export default function AppStoreBadge({
  href = CYTE_APP_STORE_URL,
  className = "",
}: {
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block ${className}`.trim()}
      aria-label="Download on the App Store"
    >
      <img
        src={BADGE_SRC}
        alt="Download on the App Store"
        width={156}
        height={52}
        style={{ display: "block", width: 156, height: "auto" }}
      />
    </a>
  );
}
