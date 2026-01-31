const MissionContent = ({ t }) => (
  <>
    <div className="mb-16">
      <h2 className="text-3xl font-bold mb-8">
        {t.mission.title}
      </h2>

      <div className="space-y-8">
        {t.mission.points.map((point, idx) => (
          <div key={idx} className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-[#C99E18] flex items-center justify-center">
                ✓
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">{point.heading}</h3>
              <p className="text-gray-400 text-sm">{point.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div>
      <h2 className="text-3xl font-bold mb-6">{t.vision.title}</h2>
      <p className="text-gray-400 text-sm leading-relaxed">
        {t.vision.text}
      </p>
    </div>
  </>
);

export default MissionContent;