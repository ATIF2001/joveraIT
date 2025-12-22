import { useEffect, useMemo, useState } from "react";

/* ================= CONFIG ================= */

const LOAN_TYPES = ["Mortgage", "Business Finance", "Personal Loan"];
const USER_TYPES = ["national", "resident"];

const LOAN_TYPE_MAP = {
  Mortgage: "mortgage",
  "Business Finance": "business",
  "Personal Loan": "personal",
};

const CONFIG = {
  personal: {
    national: {
      amount: [50000, 1000000],
      period: [6, 60],
      interest: [3.8, 25],
    },
    resident: {
      amount: [50000, 1000000],
      period: [6, 48],
      interest: [3.8, 25],
    },
  },

  mortgage: {
    national: {
      price: [2000000, 100000000],
      years: [1, 25],
      advance: [1600000, 8000000],
    },
    resident: {
      price: [2000000, 100000000],
      years: [1, 25],
      advance: [2000000, 8000000],
    },
  },

  business: {
    amount: [50000, 1000000],
    period: [6, 60],
    interest: [3.8, 25],
  },
};

const MORTGAGE_RATE = 4.5;

/* ================= HELPERS ================= */

const emi = (p, r, m) => {
  const rate = r / 12 / 100;
  return (p * rate * Math.pow(1 + rate, m)) / (Math.pow(1 + rate, m) - 1);
};

const format = (n) => new Intl.NumberFormat("en-AE").format(Math.round(n));

/* ================= TRANSLATIONS ================= */

const TEXT = {
  en: {
    mortgage: "Mortgage",
    business: "Business Finance",
    personal: "Personal Loan",

    uae: "UAE",
    national: "NATIONAL",
    resident: "RESIDENT",

    amount: "Amount",
    periodMonths: "Payment Period (Months)",
    periodYears: "Payment Period (Years)",
    interest: "Annual Interest Rate (%)",
    propertyPrice: "Property Price",
    advancePayment: "Advance Payment",

    monthlyPayment: "Monthly Payment",
    totalInterest: "Total Interest",
    totalAmount: "Total Amount",

    applyNow: "Apply Now",

    months: "months",
    years: "years",
    rate: "Rate",
  },

  ar: {
    mortgage: "الرهن العقاري",
    business: "تمويل الأعمال",
    personal: "قرض شخصي",

    uae: "الإمارات",
    national: "مواطن",
    resident: "مقيم",

    amount: "المبلغ",
    periodMonths: "مدة السداد (بالأشهر)",
    periodYears: "مدة السداد (بالسنوات)",
    interest: "نسبة الفائدة السنوية (%)",
    propertyPrice: "سعر العقار",
    advancePayment: "الدفعة المقدمة",

    monthlyPayment: "القسط الشهري",
    totalInterest: "إجمالي الفائدة",
    totalAmount: "إجمالي المبلغ",

    applyNow: "قدّم الآن",

    months: "شهر",
    years: "سنة",
    rate: "النسبة",
  },
};

/* ================= COMPONENT ================= */

export default function Calculator({ lang }) {
  const t = lang === "en" ? TEXT.en : TEXT.ar;

  const [loanType, setLoanType] = useState("Mortgage");
  const [userType, setUserType] = useState("national");

  const [amount, setAmount] = useState(100000);
  const [period, setPeriod] = useState(12);
  const [interest, setInterest] = useState(4);

  const [price, setPrice] = useState(3000000);
  const [advance, setAdvance] = useState(1600000);
  const [years, setYears] = useState(20);

  const loanKey = LOAN_TYPE_MAP[loanType];

  const rules = useMemo(() => {
    if (loanKey === "business") return CONFIG.business;
    return CONFIG[loanKey][userType];
  }, [loanKey, userType]);

  useEffect(() => {
    if (loanKey === "mortgage") {
      setPrice(rules.price[0]);
      setAdvance(rules.advance[0]);
      setYears(rules.years[0]);
    } else {
      setAmount(rules.amount[0]);
      setPeriod(rules.period[0]);
      setInterest(rules.interest[0]);
    }
  }, [loanKey, userType]);

  const result = useMemo(() => {
    if (loanKey === "mortgage") {
      const loan = price - advance;
      const months = years * 12;
      const monthly = emi(loan, MORTGAGE_RATE, months);

      return {
        monthly,
        interest: monthly * months - loan,
        total: monthly * months,
      };
    }

    const monthly = emi(amount, interest, period);
    return {
      monthly,
      interest: monthly * period - amount,
      total: monthly * period,
    };
  }, [loanKey, amount, period, interest, price, advance, years]);

  return (
    <section className="w-full bg-black text-white py-16">
      <div className="flex justify-center gap-10 mb-10">
        {LOAN_TYPES.map((type) => (
          <Toggle
            key={type}
            active={loanType === type}
            onClick={() => setLoanType(type)}
          >
            {type === "Mortgage"
              ? t.mortgage
              : type === "Business Finance"
              ? t.business
              : t.personal}
          </Toggle>
        ))}
      </div>

      <div className="max-w-7xl mx-auto bg-[#1b1b1b] rounded-2xl p-8 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          {loanKey !== "business" && (
            <div className="flex gap-4">
              {USER_TYPES.map((u) => (
                <Toggle
                  key={u}
                  active={userType === u}
                  onClick={() => setUserType(u)}
                >
                  {t.uae} {t[u]}
                </Toggle>
              ))}
            </div>
          )}

          {loanKey !== "mortgage" && (
            <>
              <Slider label={t.amount} value={amount} set={setAmount} type="amount" range={rules.amount} t={t} />
              <Slider label={t.periodMonths} value={period} set={setPeriod} type="period" range={rules.period} t={t} />
              <Slider label={t.interest} value={interest} set={setInterest} type="interest" step={0.1} range={rules.interest} t={t} />
            </>
          )}

          {loanKey === "mortgage" && (
            <>
              <Slider label={t.propertyPrice} value={price} set={setPrice} type="amount" range={rules.price} t={t} />
              <Slider label={t.advancePayment} value={advance} set={setAdvance} type="amount" range={rules.advance} t={t} />
              <Slider label={t.periodYears} value={years} set={setYears} type="years" range={rules.years} t={t} />
            </>
          )}
        </div>

        <div className="bg-[#715925] rounded-xl p-8">
          <h3 className="text-2xl mb-4">{t.monthlyPayment}</h3>
          <p className="text-4xl font-bold mb-8">{format(result.monthly)} AED</p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <Stat label={t.totalInterest} value={result.interest} />
            <Stat label={t.totalAmount} value={result.total} />
          </div>

          <button
            onClick={() =>
              window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
            }
            className="bg-[#D7AA47] w-full  text-white py-3 rounded-lg font-semibold"
          >
            {t.applyNow}
          </button>
        </div>
      </div>
    </section>
  );
}

/* ================= REUSABLE UI ================= */

const Toggle = ({ active, children, ...props }) => (
  <button
    {...props}
    className={`px-8 py-3 rounded-xl border font-semibold transition-all ${
      active
        ? "bg-[#D7AA47] text-white border-[#D7AA47]"
        : "bg-black text-white border-white"
    }`}
  >
    {children}
  </button>
);

const Slider = ({ label, value, set, step = 1, type, range: [min, max], t }) => {
  const legendType = {
    amount: t.amount,
    period: t.months,
    years: t.years,
    interest: t.rate,
  };

  const displayValue = () => {
    switch (type) {
      case "amount":
        return `AED ${format(value)}`;
      case "interest":
        return `${value.toFixed(1)} %`;
      case "period":
        return `${value} ${t.months}`;
      case "years":
        return `${value} ${t.years}`;
      default:
        return value;
    }
  };

  return (
    <div className="flex items-center w-full gap-4">
      <div className="flex flex-col space-y-2 flex-1">
        <div className="flex justify-between text-sm">
          <span>{label}</span>
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => set(Number(e.target.value))}
          className="w-full h-3 accent-[#D7AA47] rounded-lg"
        />
        <div className="flex justify-between text-xs text-white">
          <span>{format(min)}</span>
          <span>{format(max)}</span>
        </div>
      </div>

      <fieldset className="border border-gray-400 rounded px-3 py-2 min-w-[150px] text-left">
        <legend className="px-1 text-sm font-medium text-white">
          {legendType[type]}
        </legend>
        <div className="font-medium">{displayValue()}</div>
      </fieldset>
    </div>
  );
};

const Stat = ({ label, value }) => (
  <div className="bg-[#D7AA47] text-white text-center rounded-lg p-4">
    <p className="text-sm font-bold">{label}</p>
    <p className="font-bold">{format(value)} AED</p>
  </div>
);
