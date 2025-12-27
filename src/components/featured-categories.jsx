import {
  Home,
  Building2,
  Store,
  Briefcase,
  Landmark,
  House,
} from "lucide-react";

const categories = {
  en: [
    { title: "Town House", icon: Home },
    { title: "Modern Villa", icon: Landmark },
    { title: "Apartment", icon: Building2 },
    { title: "Office", icon: Briefcase },
    { title: "Single Family", icon: House },
    { title: "Shop House", icon: Store },
  ],
  ar: [
    { title: "منزل بلدي", icon: Home },
    { title: "فيلا حديثة", icon: Landmark },
    { title: "شقة", icon: Building2 },
    { title: "مكتب", icon: Briefcase },
    { title: "عائلة واحدة", icon: House },
    { title: "محل تجاري", icon: Store },
  ],
};

const FeaturedCategories = ({ lang = "en" }) => {
  const selectedCategories = lang === "en" ? categories.en : categories.ar;
  const title = lang === "en" ? "Featured Categories" : "الفئات المميزة";

  return (
    <section className="py-10 bg-black text-white">
      {/* Title */}
      <h2 className="text-center text-3xl font-bold text-[#D7AA47] mb-12">
        {title}
      </h2>

      {/* Container */}
      <div className="mx-auto py-2 px-6">
        <div className="border border-gray-700 rounded-2xl p-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {selectedCategories.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="min-h-[190px] bg-gradient-to-b from-[#1c1c1c] to-[#111] 
                             rounded-2xl p-6 flex flex-col items-center justify-center 
                             text-center hover:scale-105 transition duration-300"
                >
                  <Icon size={48} className="mb-8 text-white" />
                  <p className="text-sm font-medium">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
