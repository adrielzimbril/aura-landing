import Image from "next/image";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="reveal-band group relative overflow-hidden border-b border-white/10 px-6 py-24 md:px-12 lg:px-16"
    >
      <Image
        src="/img/futuristic-representation-robotic-human-heart.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover brightness-[0.76] contrast-125 transition duration-700 group-hover:scale-105 group-hover:brightness-[0.9]"
      />
      <div className="absolute inset-0 bg-black/36" />
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <p className="font-orbitron text-xs uppercase tracking-[0.35em] text-cyan-300">
          Init sequence
        </p>
        <h2 className="mt-5 font-orbitron text-3xl uppercase md:text-5xl">
          Request Aura access
        </h2>
        <a
          href="mailto:access@orisync.ai"
          className="mt-8 inline-flex border border-cyan-300 px-8 py-4 font-orbitron text-xs uppercase tracking-[0.2em] text-cyan-200 transition-colors hover:bg-cyan-300 hover:text-black"
        >
          access@orisync.ai
        </a>
      </div>
    </section>
  );
}
