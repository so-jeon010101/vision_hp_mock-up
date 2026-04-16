import { useNavigate } from "react-router";
import { Header, Footer } from "@/imports/VisionHpMainV3";

export default function ThankYouPage() {
  const navigate = useNavigate();

  const handleBackToTop = () => {
    navigate("/");
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "auto" });
  };

  return (
    <div className="w-full min-h-screen bg-white overflow-x-clip flex flex-col" data-name="thankyou-page">
      <Header minimal />

      <main
        className="bg-white flex flex-1 flex-col items-center justify-center gap-[24px] pt-[140px] pb-[80px] px-[16px] w-full"
        data-name="thankyou"
      >
        <div className="flex flex-col gap-[24px] items-center max-w-[460px] w-full">
          <div className="flex flex-col text-[#2d3748] text-[18px] lg:text-[20px] text-center font-extrabold leading-[1.4] w-full">
            <p>お問い合わせありがとうございます。</p>
            <p>担当者より、24時間以内にご連絡いたします。</p>
          </div>

          <div className="h-px w-full bg-[#bec3cf]" />

          <div className="flex flex-col text-[#62666c] text-[14px] leading-[1.6] text-center w-full">
            <p>もし24時間以内に連絡がない場合は、</p>
            <p>
              お手数ですが{" "}
              <a href="tel:0120-269-046" className="font-bold text-[#2d3748] hover:underline">
                0120-269-046
              </a>{" "}
              までご連絡ください。
            </p>
            <p>(24時間受付対応)</p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleBackToTop}
          className="bg-white border-2 border-[#137fec] border-solid flex items-center justify-center overflow-clip rounded-[999px] w-[200px] px-[12px] py-[16px] text-[#137fec] font-extrabold text-[18px] tracking-[0.36px] hover:bg-[#137fec] hover:text-white transition-colors cursor-pointer mt-[8px]"
          data-name="cta"
        >
          トップに戻る
        </button>
      </main>

      <Footer />
    </div>
  );
}
