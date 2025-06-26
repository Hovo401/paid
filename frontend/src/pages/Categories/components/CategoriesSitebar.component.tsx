import { useState } from "react";
import { Range } from "react-range";

function CategoriesSitebar() {
  const [filters, setFilters] = useState({
    social: ["Facebook"],
    price: "$25 - $50",
    priceRange: [50, 800],
    responseTime: "3 days",
    region: "",
  });

  const handleSocialChange = (value: any) => {
    setFilters((prev) => {
      const newSocial = prev.social.includes(value)
        ? prev.social.filter((item) => item !== value)
        : [...prev.social, value];
      return { ...prev, social: newSocial };
    });
  };

  const handleFilterChange = (field: any, value: any) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const handlePriceChange = (option: any) => {
    let newRange;
    switch (option) {
      case "$0 - $25":
        newRange = [0, 25];
        break;
      case "$25 - $50":
        newRange = [25, 50];
        break;
      case "$50 - $100":
        newRange = [50, 100];
        break;
      case "$100 - $200":
        newRange = [100, 200];
        break;
      case "Free":
        newRange = [0, 0];
        break;
      default:
        newRange = [0, 25];
    }
    setFilters({
      ...filters,
      price: option,
      priceRange: newRange,
    });
  };



  return (
    <>
      <div className="pr-5 mt-2 select-none">
        <div className="text-[16px]">
          <span>Home</span>
          <span className="mx-1">&gt;</span>
          <span className="font-bold">Sport</span>
        </div>
        <div className="mt-4 divide-y divide-gray-200">
          <div className="py-4">
            <h3 className="uppercase font-bold text-sm">Social</h3>
            <div className="space-y-2 mt-2">
              {["Instagram", "Facebook", "LinkedIn", "TikTok"].map(
                (platform) => (
                  <label key={platform} className="flex items-center">
                    <input
                      type="checkbox"
                      value={platform}
                      checked={filters?.social?.includes(platform)}
                      onChange={() => handleSocialChange(platform)}
                      className="h-4 w-4 rounded border-gray-300"
                    />
                    <span className="ml-2">{platform}</span>
                  </label>
                )
              )}
            </div>
          </div>

          <div className="py-4">
            <h3 className="uppercase font-bold text-sm">Price</h3>
            <div className="space-y-2 mt-2">
              {[
                "$0 - $25",
                "$25 - $50",
                "$50 - $100",
                "$100 - $200",
                "Free",
              ].map((option) => (
                <label key={option} className="flex items-center">
                  <input
                    type="radio"
                    name="price"
                    value={option}
                    checked={filters.price === option}
                    onChange={() => handlePriceChange(option)}
                    className="h-4 w-4 rounded-full border-gray-300 accent-purple-600"
                  />
                  <span className="ml-2">{option}</span>
                </label>
              ))}
            </div>
            <div className="mt-4">
              <div className="bg-gray-400 h-[6px]">
                <Range
                  step={1}
                  min={0}
                  max={800}
                  values={filters.priceRange}
                  onChange={(values) =>
                    handleFilterChange("priceRange", values)
                  }
                  renderTrack={({ props, children }) => (
                    <div className="bg-gray-400" {...props}>
                      <div
                        style={{
                          height: "6px",
                          width: `${
                            ((filters.priceRange[1] - filters.priceRange[0]) /
                              800) *
                            100
                          }%`,
                          backgroundColor: "#7C3AED",
                          position: "absolute",
                          left: `${(filters.priceRange[0] / 800) * 100}%`,
                        }}
                      />
                      {children}
                    </div>
                  )}
                  renderThumb={({ props }) => (
                    <div
                      {...props}
                      className="absolute top-0.5  h-4 w-4 rounded-2xl border-gray-500 bg-white solid border-1 shadow"
                    />
                  )}
                />
              </div>
              <div className="flex justify-between  pt-3 text-sm">
                <span>{filters.priceRange[0]}</span>
                <span>{filters.priceRange[1]}</span>
              </div>
            </div>
          </div>

          <div className="py-4">
            <h3 className="uppercase font-bold text-sm">Response time</h3>
            <div className="space-y-2 mt-2">
              {[
                "1 day",
                "2 days",
                "3 days",
                "4 days",
                "5 days",
                "6 days",
                "7 days",
                "24 hr",
              ].map((time) => (
                <label key={time} className="flex items-center">
                  <input
                    type="radio"
                    name="response_time"
                    value={time}
                    checked={filters.responseTime === time}
                    onChange={() => handleFilterChange("responseTime", time)}
                    className="h-4 w-4 rounded-full border-gray-300 accent-purple-600"
                  />
                  <span className="ml-2">{time}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="py-4">
            <h3 className="uppercase font-bold text-sm">Region</h3>
            <div className="space-y-2 mt-2">
              {["Armenia", "USA", "Japan", "Italy"].map((region) => (
                <label key={region} className="flex items-center">
                  <input
                    type="radio"
                    name="region"
                    value={region}
                    checked={filters.region === region}
                    onChange={() => handleFilterChange("region", region)}
                    className="h-4 w-4 rounded-full border-gray-300 accent-purple-600"
                  />
                  <span className="ml-2">{region}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesSitebar;
