const WeddingPage = () => {
  const imageUrls = [
    "https://images-pw.pixieset.com/elementfield/892749223/203_2023_Photography-db69530a.jpg",
    "https://images-pw.pixieset.com/elementfield/892749223/201_2023_Photography-feba0e5b.jpg",
    "https://images-pw.pixieset.com/elementfield/892749223/202_2023_Photography-0c0d8ca8.jpg",
    "https://images-pw.pixieset.com/elementfield/892749223/197_2023_Photography-17544b57.jpg",
    "https://images-pw.pixieset.com/elementfield/892749223/192_2023_Photography-967e4a7b.jpg",
    "https://images-pw.pixieset.com/elementfield/892749223/191_2023_Photography-64c9c888.jpg",
    "https://images-pw.pixieset.com/elementfield/892749223/190_2023_Photography-c50c8e98.jpg",
    "https://images-pw.pixieset.com/elementfield/892749223/188_2023_Photography-37bb0c6b.jpg",
    "https://images-pw.pixieset.com/elementfield/892749223/189_2023_Photography-878703b8.jpg",
    "https://images-pw.pixieset.com/elementfield/892749223/187_2023_Photography-d442da9a.jpg",
    "https://images-pw.pixieset.com/elementfield/892749223/185_2023_Photography-26f55869.jpg",
    "https://images-pw.pixieset.com/elementfield/892749223/182_2023_Photography-03898fca.jpg",
    "https://images-pw.pixieset.com/elementfield/892749223/181_2023_Photography-c2ecf13f.jpg",
    "https://images-pw.pixieset.com/elementfield/892749223/180_2023_Photography-305b73cc.jpg",
    "https://images-pw.pixieset.com/elementfield/892749223/179_2023_Photography-80677c1f.jpg",
    "https://images-pw.pixieset.com/elementfield/892749223/177_2023_Photography-6329b72f.jpg"
  ];

  return (
    <div className="w-full px-5 pb-5">
      <h2 className="text-3xl font-semibold text-center mb-6">Wedding Photography</h2>

      {/* Masonry Grid Layout */}
      <div className="columns-1 md:columns-4 gap-4 space-y-4">
        {imageUrls.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Wedding ${index + 1}`}
            className="w-full shadow-md"
          />
        ))}
      </div>
      <div className="flex justify-center">
        This is was Our Wedding Photography
      </div>
    </div>
  );
};

export default WeddingPage;
