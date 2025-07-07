const Vision = () => {
  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage: `url('/lovable-uploads/cdead82f-785e-45b4-9366-a2dc6818c380.png')`,
      }}
    >
      {/* Dark overlay - only on background */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">رؤيتنا</h2>
          <p className="text-lg text-white leading-relaxed">
            أن تكون العلامة الرائدة في الشرق الأوسط في مجال أدوات المطبخ الخشبية
            الصحية، من خلال الابتكار والاستدامة، والالتزام بأعلى معايير الجودة.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
