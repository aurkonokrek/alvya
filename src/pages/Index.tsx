import PortfolioGrid from "@/components/PortfolioGrid";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-black">
      <iframe
        title="Alvy Arnob Portfolio"
        src="/alvy-arnob-portfolio.html"
        className="block h-screen w-full border-0"
      />
      <PortfolioGrid />
    </div>
  );
};

export default Index;
