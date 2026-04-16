import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router";
import { Header, Footer } from "@/imports/VisionHpMainV3";

const PREFECTURES = [
  "北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県",
  "茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県",
  "新潟県","富山県","石川県","福井県","山梨県","長野県",
  "岐阜県","静岡県","愛知県","三重県",
  "滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県",
  "鳥取県","島根県","岡山県","広島県","山口県",
  "徳島県","香川県","愛媛県","高知県",
  "福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県",
];

type FieldKey = "name" | "email" | "tel" | "company" | "prefecture" | "message";

type FormState = Record<FieldKey, string> & { agree: boolean };

const INITIAL: FormState = {
  name: "",
  email: "",
  tel: "",
  company: "",
  prefecture: "",
  message: "",
  agree: false,
};

const REQUIRED_FIELDS: FieldKey[] = ["name", "email", "tel", "company", "prefecture"];

function Chip({ variant = "required" }: { variant?: "required" | "optional" }) {
  const bg = variant === "required" ? "bg-[#dc2626]" : "bg-[#2d3748]";
  const label = variant === "required" ? "必須" : "任意";
  return (
    <div className={`${bg} content-stretch flex items-center justify-center overflow-clip px-[6px] py-[3px] relative rounded-[4px] shrink-0`} data-name="chip">
      <p className="font-semibold leading-[normal] not-italic text-[10px] text-white tracking-[-0.2px] whitespace-nowrap">
        {label}
      </p>
    </div>
  );
}

type FieldProps = {
  name: FieldKey;
  label: string;
  icon: string;
  placeholder: string;
  required?: boolean;
  type?: "text" | "email" | "tel";
  value: string;
  error?: string;
  onChange: (name: FieldKey, value: string) => void;
  onBlur?: (name: FieldKey) => void;
};

function TextField({ name, label, icon, placeholder, required = true, type = "text", value, error, onChange, onBlur }: FieldProps) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Label+Input">
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
        <Chip variant={required ? "required" : "optional"} />
        <label htmlFor={name} className="font-semibold leading-[normal] not-italic text-[#2d3748] text-[14px] whitespace-nowrap cursor-pointer">
          {label}
        </label>
      </div>
      <div
        className={`bg-white border border-solid ${error ? "border-[#dc2626]" : "border-[#bec3cf]"} content-stretch flex gap-[8px] items-center overflow-clip px-[13px] py-[9px] relative rounded-[8px] shrink-0 w-full focus-within:border-[#137fec] transition-colors`}
        data-name="Input"
      >
        <span className="material-icons text-[14px] text-[#8b94a7] shrink-0" style={{ fontFamily: "Material Icons" }}>
          {icon}
        </span>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(name, e.target.value)}
          onBlur={() => onBlur?.(name)}
          className="flex-1 min-w-px bg-transparent outline-none border-none text-[14px] text-[#2d3748] placeholder:text-[#bec3cf] leading-[1.6] py-0"
          autoComplete={name === "email" ? "email" : name === "tel" ? "tel" : "off"}
        />
      </div>
      {error && (
        <p className="w-full text-left text-[12px] text-[#dc2626] leading-[1.4]">{error}</p>
      )}
    </div>
  );
}

function TextAreaField({ name, label, icon, placeholder, value, onChange }: Omit<FieldProps, "required" | "type" | "error"> & { required?: false }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Label+Input">
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
        <Chip variant="optional" />
        <label htmlFor={name} className="font-semibold leading-[normal] not-italic text-[#2d3748] text-[14px] whitespace-nowrap cursor-pointer">
          {label}
        </label>
      </div>
      <div className="bg-white border border-[#bec3cf] border-solid content-stretch flex gap-[8px] items-start px-[13px] py-[9px] relative rounded-[8px] shrink-0 w-full focus-within:border-[#137fec] transition-colors">
        <span className="material-icons text-[14px] text-[#8b94a7] shrink-0 mt-[3px]" style={{ fontFamily: "Material Icons" }}>
          {icon}
        </span>
        <textarea
          id={name}
          name={name}
          value={value}
          rows={3}
          placeholder={placeholder}
          onChange={(e) => onChange(name, e.target.value)}
          className="flex-1 min-w-px bg-transparent outline-none border-none text-[14px] text-[#2d3748] placeholder:text-[#bec3cf] leading-[1.6] resize-y"
        />
      </div>
    </div>
  );
}

function PrefectureField({ value, error, onChange, onBlur }: { value: string; error?: string; onChange: (v: string) => void; onBlur?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Label+Input">
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
        <Chip variant="required" />
        <label htmlFor="prefecture" className="font-semibold leading-[normal] not-italic text-[#2d3748] text-[14px] whitespace-nowrap cursor-pointer">
          住所（都道府県）
        </label>
      </div>
      <div
        className={`bg-white border border-solid ${error ? "border-[#dc2626]" : "border-[#bec3cf]"} content-stretch flex gap-[8px] items-center overflow-clip px-[13px] py-[9px] relative rounded-[8px] shrink-0 w-full focus-within:border-[#137fec] transition-colors`}
      >
        <span className="material-icons text-[14px] text-[#8b94a7] shrink-0" style={{ fontFamily: "Material Icons" }}>
          location_on
        </span>
        <select
          id="prefecture"
          name="prefecture"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={() => onBlur?.()}
          className={`flex-1 min-w-px bg-transparent outline-none border-none text-[14px] ${value ? "text-[#2d3748]" : "text-[#bec3cf]"} leading-[1.6] appearance-none cursor-pointer`}
        >
          <option value="" disabled>都道府県を選択</option>
          {PREFECTURES.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
        <span className="material-icons text-[14px] text-[#8b94a7] shrink-0 pointer-events-none" style={{ fontFamily: "Material Icons" }}>
          keyboard_arrow_down
        </span>
      </div>
      {error && (
        <p className="w-full text-left text-[12px] text-[#dc2626] leading-[1.4]">{error}</p>
      )}
    </div>
  );
}

export default function ContactPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<FieldKey | "agree", string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (name: FieldKey, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const isFormFilled = useMemo(() => {
    return REQUIRED_FIELDS.every((f) => form[f].trim().length > 0) && form.agree;
  }, [form]);

  const validateField = (name: FieldKey, value: string): string | undefined => {
    const v = value.trim();
    switch (name) {
      case "name":
        return v ? undefined : "お名前を入力してください";
      case "email":
        if (!v) return "メールアドレスを入力してください";
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? undefined : "有効なメールアドレスを入力してください";
      case "tel":
        if (!v) return "電話番号を入力してください";
        return /^[0-9+\-\s()]{9,15}$/.test(v) ? undefined : "有効な電話番号を入力してください";
      case "company":
        return v ? undefined : "会社名・店舗名を入力してください";
      case "prefecture":
        return v ? undefined : "都道府県を選択してください";
      default:
        return undefined;
    }
  };

  const handleBlur = (name: FieldKey) => {
    const err = validateField(name, form[name]);
    setErrors((prev) => ({ ...prev, [name]: err }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<FieldKey | "agree", string>> = {};
    REQUIRED_FIELDS.forEach((f) => {
      const err = validateField(f, form[f]);
      if (err) next[f] = err;
    });
    if (!form.agree) next.agree = "個人情報の取り扱いにご同意ください";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    navigate("/thankyou");
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "auto" });
  };

  return (
    <div className="w-full min-h-screen bg-white overflow-x-clip flex flex-col" data-name="contact-page">
      <Header minimal />

      <main
        className="bg-white flex flex-col items-center gap-[32px] lg:gap-[48px] pt-[100px] pb-[80px] px-[16px] w-full"
        data-node-id="486:3431"
        data-name="contact"
      >
        <div className="flex flex-col gap-[8px] items-center justify-center w-full" data-name="tlt">
          <p className="font-extrabold text-[#137fec] text-[20px] lg:text-[28px] tracking-[0.6px] uppercase leading-[1.3] text-center">
            contact us
          </p>
          <div className="bg-[#137fec] h-[8px] w-[120px]" />
          <h1 className="font-extrabold text-[#2d3748] text-[28px] lg:text-[40px] leading-[1.4] text-center">
            無料相談・お見積もり
          </h1>
          <p className="text-[#62666c] text-[14px] lg:text-[20px] leading-[1.8] text-center">
            担当者からメールもしくは、お電話にてご連絡差し上げます。
          </p>
        </div>

        <form
          id="form"
          onSubmit={handleSubmit}
          noValidate
          className="bg-[#f5f8fc] flex flex-col gap-[20px] items-center justify-end max-w-[600px] min-w-[343px] w-full px-[32px] py-[56px] rounded-[16px]"
        >
            <TextField
              name="name"
              label="お名前"
              icon="person"
              placeholder="山田 太郎"
              value={form.name}
              error={errors.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextField
              name="email"
              label="メールアドレス"
              icon="mail"
              type="email"
              placeholder="taro@example.com"
              value={form.email}
              error={errors.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextField
              name="tel"
              label="電話番号"
              icon="phone"
              type="tel"
              placeholder="090-1234-5678"
              value={form.tel}
              error={errors.tel}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextField
              name="company"
              label="会社名/店舗名"
              icon="corporate_fare"
              placeholder="株式会社○○ / ○○店"
              value={form.company}
              error={errors.company}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <PrefectureField
              value={form.prefecture}
              error={errors.prefecture}
              onChange={(v) => handleChange("prefecture", v)}
              onBlur={() => handleBlur("prefecture")}
            />
            <TextAreaField
              name="message"
              label="ご要望・ご質問"
              icon="edit_note"
              placeholder="ご要望やご質問があればご記入ください"
              value={form.message}
              onChange={handleChange}
            />

            <div className="flex flex-col gap-[4px] items-start w-full py-[16px]">
              <label className="flex gap-[8px] items-center justify-center cursor-pointer select-none w-full" data-name="checkbox">
                <input
                  type="checkbox"
                  checked={form.agree}
                  onChange={(e) => {
                    setForm((prev) => ({ ...prev, agree: e.target.checked }));
                    if (errors.agree) setErrors((prev) => ({ ...prev, agree: undefined }));
                  }}
                  className="size-[24px] rounded-[4px] border border-[#bec3cf] accent-[#137fec] cursor-pointer shrink-0"
                />
                <Chip variant="required" />
                <span className="font-normal text-[#2d3748] text-[14px]">
                  <a
                    className="font-bold underline"
                    href="https://www.vision-net.co.jp/handling.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    個人情報の取り扱いについて
                  </a>
                  {" 同意する"}
                </span>
              </label>
              {errors.agree && (
                <p className="text-[12px] text-[#dc2626] leading-[1.4] pl-[32px]">{errors.agree}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitting || !isFormFilled}
              className={`border-2 border-solid flex items-center justify-center max-h-[100px] max-w-[360px] min-h-[80px] overflow-clip rounded-[999px] w-full px-[32px] py-[16px] transition-colors font-bold text-[20px] tracking-[0.4px] ${
                submitting || !isFormFilled
                  ? "bg-[#f0f1f3] border-[#bec3cf] text-[#8b94a7] cursor-not-allowed"
                  : "bg-white border-[#137fec] text-[#137fec] hover:bg-[#137fec] hover:text-white cursor-pointer"
              }`}
              data-name="cta"
            >
              {submitting ? "送信中..." : "送信する"}
            </button>
        </form>
      </main>

      <Footer />
    </div>
  );
}
