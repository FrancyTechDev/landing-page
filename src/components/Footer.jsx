const Footer = () => {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-base text-white">Parkins-Off</p>
          <p className="mt-2">Sistema integrato ambiente-salute-AI per il Parkinson.</p>
        </div>
        <div className="space-y-2 text-right">
          <p>Contatti: info@parkins-off.it</p>
          <p>FAST Milano · Progetto interdisciplinare</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;