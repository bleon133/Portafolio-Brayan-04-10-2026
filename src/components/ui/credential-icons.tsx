import {
  BadgeCheck,
  BookOpen,
  Cloud,
  Database,
  Globe,
  Landmark,
  Languages,
  Network,
  Server,
  Smartphone,
  Wrench,
  type LucideProps,
} from "lucide-react";

// ── 1. Kind ──
export type CredentialIconKind =
  | "aws"
  | "mongodb"
  | "oracle"
  | "cisco"
  | "efset"
  | "sena"
  | "udemy"
  | "unab"
  | "uttt"
  | "sena-tecnico"
  | "generic";

// ── 2. CredentialIcon ──
const GLYPH_MAP: Record<CredentialIconKind, React.FC<LucideProps>> = {
  aws: Cloud,
  mongodb: Database,
  oracle: Server,
  cisco: Network,
  efset: Languages,
  sena: Smartphone,
  udemy: BookOpen,
  unab: Landmark,
  uttt: Globe,
  "sena-tecnico": Wrench,
  generic: BadgeCheck,
};

export function CredentialIcon({
  kind,
  className = "size-5",
  ...rest
}: {
  kind: CredentialIconKind;
  className?: string;
} & Omit<LucideProps, "ref">) {
  const Component = GLYPH_MAP[kind];
  return <Component aria-hidden="true" className={className} strokeWidth={1.5} {...rest} />;
}

// ── 3. CredentialIconBubble ──
export function CredentialIconBubble({ kind }: { kind: CredentialIconKind }) {
  return (
    <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border text-ink">
      <CredentialIcon kind={kind} />
    </span>
  );
}

// ── 4. kindFromIssuer ──
export function kindFromIssuer(issuer: string): CredentialIconKind {
  const k = issuer.toLowerCase();
  if (k === "amazon web services" || k === "aws") return "aws";
  if (k === "mongodb") return "mongodb";
  if (k === "oracle") return "oracle";
  if (k === "cisco") return "cisco";
  if (k === "ef set") return "efset";
  if (k === "sena") return "sena";
  if (k === "udemy") return "udemy";
  return "generic";
}

// ── 5. kindFromEducationId ──
export function kindFromEducationId(id: string): CredentialIconKind {
  if (id === "unab") return "unab";
  if (id === "uttt") return "uttt";
  if (id === "sena-sistemas") return "sena-tecnico";
  return "generic";
}
