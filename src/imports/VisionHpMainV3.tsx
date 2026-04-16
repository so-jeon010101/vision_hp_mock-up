import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { motion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react";
import svgPaths from "./svg-pkqay5en87";
import imgPixta134083016M1 from "../assets/bg.png";
import imgImage01 from "figma:asset/9ddfc687389fd8b47c3e5ab70e66d8a3eb41b3df.png";
import imgImage2 from "figma:asset/82a6b94af09086a2813caa2c8b3b3f5e725d7d98.png";
import imgImage3 from "figma:asset/35488e3e2a9f664d2d181b211fc62547de322636.png";
import imgImage4 from "figma:asset/02f1a7ea0c1bc4e2318167619d1e21bd342596d6.png";
import imgImage5 from "figma:asset/14883ceee0485d30ad51b858369bbc1bb7c0d8e3.png";
import imgImage6 from "figma:asset/d4a4d49909c474c3aea8f283ce76c3bff99f33d6.png";
import imgImage7 from "figma:asset/72759f3e3c2bfcaca36f58e562ddf48521c127d1.png";
import imgImage8 from "figma:asset/a7d6c16c5d97937877b54d353a9abed82206b344.png";
import imgImage9 from "figma:asset/2a64bd2d074e3c632b05cc262cfc1380d3103411.png";
import imgImage10 from "figma:asset/349b3ad205a37d5c4e6a66450225fce263a7a2b3.png";
import imgImage11 from "figma:asset/cb1ea35c9a04ed4acf6bcb7c8c0fc48d01fb8712.png";
import imgImage12 from "figma:asset/e2a21058d851b33509039ed9bdc20b2a831b0e6c.png";
import imgImage13 from "figma:asset/587fac379a98b55c9873cb6b3efb9132bc7918cc.png";
import imgImage14 from "figma:asset/bdfaaebfb305c161fee11b833ef652a8f4a7853e.png";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import imgVisionHpCase011 from "figma:asset/734c1b5b6d6bf7571dd917e735b8eb2b5030c57e.png";
import imgVisionHpCaseSp021 from "figma:asset/71f398ee96dbcb325f7587d266dca9ea177b1f8b.png";
import imgVisionHpCase12 from "figma:asset/cadf73cf16547e7bd394da6f1479be05921122d0.png";
import imgVisionHpCaseSp22 from "figma:asset/4aa0055b8ee8929d8f230a4459fc4ff6a6ad285b.png";
import imgVisionHpCase13 from "figma:asset/75e77711978af2d1cc8d1bc79658aed57709f355.png";
import imgVisionHpCaseSp23 from "figma:asset/512f77aabb929ed1dca26b33b4bf99858198aadd.png";
import imgVisionHpCase14 from "figma:asset/55dee01de1b68d08592471a0047e157ac24f731c.png";
import imgVisionHpCaseSp24 from "figma:asset/52f772e98058da0e08bc61bdedfd08f54c095cb6.png";
import imgVisionHpCase15 from "figma:asset/b299f7ce5935e75efbfe830fea616861e323a267.png";
import imgVisionHpCaseSp25 from "figma:asset/8902ad8a77156fb670b2ee680bb4455e6dd1b840.png";
import imgVisionHpCase16 from "figma:asset/3fc7c217d6a75ae5b551e8a67017f5d6242ceb1a.png";
import imgVisionHpCaseSp26 from "figma:asset/f0f56cf6bb8fe8ff426d146cfb1cd944afd9200a.png";
import imgRectangle40 from "figma:asset/e300a980c2c48f8f741287f19cfd5ba105d39ad9.png";
import imgRectangle41 from "figma:asset/79ba0d19997b8ec1c8ffd966573b23ffa2bd4feb.png";
import imgRectangle42 from "figma:asset/7525b0107a7a43d4b9ab6666a32ee480f65a4397.png";
import imgLogo from "figma:asset/669a487b3768e70c6d55e5531a73cea03480b944.png";
import imgImage15 from "figma:asset/ba80eaa187f0cd6968cbaec749cac742f9e71339.png";
import imgImage16 from "figma:asset/30d96e80a8eb6130f0a1e0db7faf1cc20ff5d7c0.png";
import imgImage17 from "figma:asset/1152d237df6c623303afb02c27bb90c6b79e38cd.png";
import imgImage18 from "figma:asset/aaa5e147d36d606814bc367f1f736b93c7a2eb81.png";
import imgImage19 from "figma:asset/7527223faeeba3fd60a55063c3b60f633c9a5e39.png";
import imgRectangle27 from "@/assets/Image_logo_05.png";
import imgBizfonLogo from "@/assets/Image_logo_04.png";
import imgLogoCopicom from "@/assets/Image_logo_03.png";
import imgLogoHojin from "@/assets/Image_logo_02.png";
import imgLogoDenwakanyuken from "@/assets/Image_logo_01.png";
import imgRectangle28 from "figma:asset/f086641bcf22937eda51650ff810628c261a0519.png";
import imgRectangle29 from "figma:asset/418151bb8690cc6ea2c361eea3e5c1b7d34295b4.png";
import imgRectangle30 from "figma:asset/e5f8086d68588b07adb8f0ad9a73cc33afbf79bc.png";
import imgRectangle31 from "figma:asset/ee71b0967ab1f156cec97b3a44d085054cfd369f.png";
import imgRectangle32 from "figma:asset/e052a0e0c7a440c97548103ab75d1ca3e1845276.png";
import imgRectangle33 from "figma:asset/e442c4fb852ef6a5a1860c272cfa7aff9505696b.png";
import imgRectangle34 from "figma:asset/c3062f1e1bf2a069fa5e95efb3b59a0872a8fa3c.png";
import imgBgKv from "@/assets/bg-kv.jpg";
import imgDeco from "@/assets/deco.png";
import imgBadge1 from "@/assets/kv-badges/badge-1.svg";
import imgBadge2 from "@/assets/kv-badges/badge-2.svg";
import imgBadge3 from "@/assets/kv-badges/badge-3.svg";
import imgBadge4 from "@/assets/kv-badges/badge-4.svg";
import { imgDrafts } from "./svg-279bb";

function Layer1Badges() {
  return (
    <div className="flex gap-[8px] items-center shrink-0" data-name="Layer_1">
      <img alt="累計10,000社超の導入実績" src={imgBadge1} className="size-[88px] shrink-0" />
      <img alt="最短2週間で完成" src={imgBadge2} className="size-[88px] shrink-0" />
      <img alt="24時間受付対応" src={imgBadge3} className="size-[88px] shrink-0" />
      <img alt="初期費用0円" src={imgBadge4} className="size-[88px] shrink-0" />
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex flex-col items-center lg:items-start relative shrink-0 w-full lg:w-auto">
      {/* Line 1-2: ホームページを作るだけで / 終わらせない。 */}
      <div className="font-extrabold not-italic text-[#2d3748] text-center lg:text-left whitespace-nowrap">
        <p className="leading-[1.4] mb-0 text-[28px] lg:text-[clamp(26px,2.22vw,44px)]">
          <span className="text-[#137fec]">ホームページを作る</span>だけで
        </p>
        <p className="leading-[1.4] text-[28px] lg:text-[clamp(26px,2.22vw,44px)]">終わらせない。</p>
      </div>
      {/* Mobile: 2-line (集客まで、 / まるごとお任せ ください。) */}
      <div className="lg:hidden flex flex-col items-center">
        <p className="font-extrabold leading-[1.4] text-[#2d3748] text-[28px] whitespace-nowrap">
          <span className="text-[#137fec]">集客</span>まで、
        </p>
        <div className="flex items-center justify-center">
          <span className="bg-[#ffe347] font-extrabold leading-[1.4] text-[#2d3748] text-[28px] whitespace-nowrap px-[6px]">まるごとお任せ</span>
          <span className="font-extrabold leading-[1.4] text-[#2d3748] text-[28px] whitespace-nowrap">ください。</span>
        </div>
      </div>
      {/* Desktop: 1-line inline (集客まで、まるごとお任せください。) */}
      <p className="hidden lg:block font-extrabold leading-[1.4] text-[#2d3748] text-[clamp(26px,2.22vw,44px)] whitespace-nowrap">
        <span className="text-[#137fec]">集客</span>まで、<span className="bg-[#ffe347] px-[6px]">まるごとお任せ</span>ください。
      </p>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex flex-col items-center lg:items-start gap-[16px] relative shrink-0 w-full lg:w-auto">
      <Layer1Badges />
      <Frame113 />
      <div className="flex flex-col font-light justify-center not-italic relative shrink-0 text-[#2d3748] text-[14px] lg:text-[clamp(18px,1.53vw,30px)] text-center lg:text-left w-full lg:w-auto">
        <p className="leading-[1.6] mb-0">制作から運用まで一社で完結。</p>
        <p className="leading-[1.6]">担当者がゴールまで伴走します。</p>
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col  items-center justify-center leading-[normal] min-h-px min-w-px not-italic relative text-white">
      <p className="relative shrink-0 font-semibold text-[23px] tracking-[0.46px] w-full">無料資料を受け取る</p>
      <p className="relative shrink-0 text-[16px] tracking-[0.32px] w-full">1分で完了 · 登録不要</p>
    </div>
  );
}

function ArrowForward() {
  return (
    <svg className="size-[24px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
      <path fill="#FF4343" d="M647-440H240v-80h407L433-744l57-56 320 320-320 320-57-56 224-224Z" />
    </svg>
  );
}

function ArrowCircle() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[56px]" data-name="Arrow Circle">
      <ArrowForward />
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col  items-center leading-[normal] min-h-px min-w-px not-italic relative text-[#00b5ad]">
      <p className="relative shrink-0 font-semibold text-[17.5px] tracking-[0.35px] w-full">今すぐ無料相談する</p>
      <p className="relative shrink-0 text-[10.5px] tracking-[0.21px] w-full">24時間受付対応 · 全国対応可能</p>
    </div>
  );
}

function ArrowCircle1() {
  return (
    <div className="bg-[#00B5AD] relative rounded-full flex items-center justify-center shrink-0 size-[56px]" data-name="Arrow Circle">
      <svg className="size-[28px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
        <path fill="white" d="M647-440H240v-80h407L433-744l57-56 320 320-320 320-57-56 224-224Z" />
      </svg>
    </div>
  );
}

function Cta() {
  return (
    <a href="tel:0120-269-046" className="bg-white relative rounded-[999px] block no-underline w-full max-w-[300px]" data-name="cta">
      <div className="content-stretch flex items-center justify-between overflow-clip pl-[28px] pr-[14px] py-[14px] relative rounded-[inherit] size-full">
        <Frame95 />
        <ArrowCircle1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#00b5ad] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </a>
  );
}

function Frame109() {
  return (
    <div className="content-center flex flex-col lg:flex-row flex-wrap gap-[16px] items-center justify-center relative shrink-0 w-full">
      <div className="max-h-[100px] min-h-[80px] relative rounded-[999px] shadow-[0px_2px_8px_0px_rgba(158,36,36,0.16),0px_4px_16px_0px_rgba(158,36,36,0.08)] w-full max-w-[400px] min-w-[320px] lg:flex-[1_0_0]" data-name="cta">
        <div aria-hidden="true" className="absolute bg-[#ff4343] inset-0 pointer-events-none rounded-[999px]" />
        <div className="flex flex-row items-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-between max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] pl-[32px] pr-[16px] py-[16px] relative size-full">
            <Frame82 />
            <ArrowCircle />
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_2px_2px_4px_0px_rgba(255,255,255,0.24)]" />
      </div>
      <Cta />
    </div>
  );
}

function Frame110() {
  return (
    <div className="relative content-stretch flex flex-col gap-[40px] items-center lg:items-start px-[16px] lg:px-0 pb-[50px] pt-[100px] lg:pb-0 lg:pt-0 w-full lg:flex-1 lg:min-w-px lg:max-w-[clamp(460px,45.5vw,900px)]">
      <Frame108 />
      <Frame109 />
    </div>
  );
}

function HeroImageColumn({ columnImages, duration, delayMultiplier, height = 800, fillWidth = false }: { columnImages: typeof imgImage01[], duration: number, delayMultiplier: number, height?: number, fillWidth?: boolean }) {
  const imageHeight = 221;
  const baseHeight = imageHeight * 6;

  return (
    <div
      className="flex-shrink-0 overflow-hidden"
      style={{
        width: fillWidth ? undefined : '200px',
        flex: fillWidth ? '1 0 0' : undefined,
        height: `${height}px`,
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
      data-scroll-hero-column
    >
      <style>{`
        [data-scroll-hero-column] {
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
        }
        [data-scroll-hero-column]::-webkit-scrollbar {
          display: none !important;
        }
        @keyframes scroll-infinite-col {
          0% { transform: translateY(0); }
          100% { transform: translateY(-${baseHeight}px); }
        }
      `}</style>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          animation: `scroll-infinite-col ${duration}ms linear infinite`,
          animationDelay: `${delayMultiplier * 100}ms`,
          willChange: 'transform',
          minHeight: `${baseHeight * 3}px`,
          overflow: 'hidden',
        }}
      >
        {[0, 1, 2].flatMap((rep) =>
          columnImages.map((img, idx) => (
            <img
              key={`${rep}-${idx}`}
              src={img}
              alt=""
              style={{
                width: '100%',
                height: `${imageHeight}px`,
                objectFit: 'cover',
                display: 'block',
                flexShrink: 0,
              }}
            />
          ))
        )}
      </div>
    </div>
  );
}

function HeroImageContainer() {
  const col1Images = [imgImage01, imgImage4, imgImage7, imgImage10, imgImage12, imgImage14];
  const col2Images = [imgImage2, imgImage5, imgImage8, imgImage2, imgImage6, imgImage7];
  const col3Images = [imgImage3, imgImage6, imgImage9, imgImage11, imgImage13, imgImage01];

  return (
    <>
      {/* Desktop: 3 columns as flex slot, 600x800 */}
      <div
        className="hidden lg:flex h-[800px] w-[clamp(420px,41.67vw,600px)] items-center justify-center overflow-hidden gap-0 pointer-events-none shrink-0 relative"
        data-name="HeroImage_container"
      >
        <HeroImageColumn columnImages={col1Images} duration={13000} delayMultiplier={0} />
        <HeroImageColumn columnImages={col2Images} duration={15000} delayMultiplier={1} />
        <HeroImageColumn columnImages={col3Images} duration={17000} delayMultiplier={2} />
      </div>
      {/* Mobile: 2 columns, relative flow */}
      <div
        className="lg:hidden flex h-[221px] items-center overflow-hidden gap-0 pointer-events-none relative w-full"
        data-name="HeroImage_container"
      >
        <HeroImageColumn columnImages={col1Images} duration={15000} delayMultiplier={0} height={221} fillWidth />
        <HeroImageColumn columnImages={col2Images} duration={17000} delayMultiplier={1} height={221} fillWidth />
      </div>
    </>
  );
}

function Kv() {
  return (
    <div className="bg-white relative shrink-0 w-full overflow-clip lg:h-[800px]" data-name="kv">
      {/* Tiled pattern background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        data-name="bg"
        style={{
          backgroundImage: `url(${imgBgKv})`,
          backgroundRepeat: "repeat",
          backgroundSize: "25px 25px",
        }}
      />
      {/* Fade to white at bottom for readability */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[63%] from-[rgba(255,255,255,0)] to-[85%] to-white" />
      {/* Content — flex layout per new design, centered within max-width */}
      <div className="relative mx-auto h-full w-full max-w-[1920px] lg:flex lg:content-center lg:flex-wrap lg:gap-[40px] lg:items-center lg:justify-center lg:px-[40px]">
        <Frame110 />
        <HeroImageContainer />
      </div>
    </div>
  );
}

function Tlt() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="tlt">
      <div className="flex flex-col font-bold justify-center leading-[0] relative shrink-0 text-[#137fec] text-[28px] text-center uppercase whitespace-nowrap">
        <p className="leading-[1.3]">features</p>
      </div>
      <div className="bg-[#137fec] h-[8px] shrink-0 w-[120px]" />
      <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#2d3748] font-extrabold text-[28px] lg:text-[40px] text-center lg:whitespace-nowrap">
        <p className="leading-[1.4]">多くの企業に選ばれる理由</p>
      </div>
      <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#62666c] text-[16px] lg:text-[20px] text-center lg:whitespace-nowrap">
        <p className="leading-[1.8] mb-0">信頼の実績と手厚いサポート体制で、</p>
        <p className="leading-[1.8]">初めてのWebサイト制作でも安心してお任せいただけます。</p>
      </div>
    </div>
  );
}

function Caption() {
  return (
    <div className="bg-[#edf6ff] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[50px] shrink-0" data-name="caption">
      <div aria-hidden="true" className="absolute border border-[rgba(19,127,236,0.1)] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="flex flex-col font-extrabold justify-center leading-[0] relative shrink-0 text-[#137fec] text-[20px] text-center tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-none">point 01</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center lg:items-start justify-center lg:justify-end relative shrink-0 w-full lg:w-auto max-w-[636px] lg:max-w-none lg:h-[229px] mx-auto lg:mx-0" data-name="text">
      <Caption />
      <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#2d3748] lg:text-[#62666c] font-extrabold text-[24px] lg:text-[32px] text-center lg:text-left w-full lg:w-auto lg:whitespace-nowrap">
        <p className="leading-[1.4]">上場企業かつ、数万社の実績</p>
      </div>
      <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#62666c] text-[18px] text-center lg:text-left w-full lg:w-auto">
        <p className="lg:hidden leading-[1.7]">
          値段の安い制作サービスは数多くあります。値段よりも大切なのは、それぞれのタイミングで経営者がやりたことができるかどうか。当社は新規立ち上げや作り替え、テストマーケティングから本格運用まで幅広いニーズにお応えしてきました。
        </p>
        <div className="hidden lg:block whitespace-nowrap">
          <p className="leading-[1.7] mb-0">値段の安い制作サービスは数多くあります。</p>
          <p className="leading-[1.7] mb-0">値段よりも大切なのは、それぞれのタイミングで経営者がやりたことができるかどうか。</p>
          <p className="leading-[1.7] mb-0">当社は新規立ち上げや作り替え、テストマーケティングから</p>
          <p className="leading-[1.7]">本格運用まで幅広いニーズにお応えしてきました。</p>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-center lg:justify-start lg:gap-[32px] relative shrink-0 w-full" data-name="container">
      <Text />
      <div className="hidden lg:flex -translate-y-1/2 absolute flex-col font-thin justify-center leading-[0] opacity-10 right-[208px] text-[#2d3748] text-[200px] top-[calc(50%+0.5px)] translate-x-full whitespace-nowrap">
        <p className="leading-none">01</p>
      </div>
    </div>
  );
}

function Canvas() {
  return (
    <div className="relative shrink-0 size-[300px]" data-name="Canvas">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={CHART_LEGEND_DATA}
            dataKey={(d) => parseFloat(d.value)}
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={140}
            paddingAngle={0}
            stroke="#fff"
            strokeWidth={2}
            isAnimationActive={false}
          >
            {CHART_LEGEND_DATA.map((item) => (
              <Cell key={item.name} fill={item.color} />
            ))}
          </Pie>
          <Tooltip
            cursor={false}
            formatter={(value: number, name: string) => [`${value}%`, name]}
            contentStyle={{
              backgroundColor: "rgba(45,55,72,0.95)",
              border: "none",
              borderRadius: "8px",
              padding: "8px 12px",
              fontSize: "14px",
            }}
            itemStyle={{ color: "#fff" }}
            labelStyle={{ color: "#fff" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-[#4472c4] shrink-0 size-[16px]" data-name="Text" />
  );
}

function Container2() {
  return (
    <div className="col-1 content-stretch flex gap-[10px] items-center justify-self-stretch py-[12px] relative row-1 self-start shrink-0" data-name="Container">
      <Text1 />
      <p className="font-light leading-none not-italic relative shrink-0 text-[#2d3748] text-[16px] whitespace-nowrap">その他</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-[#9b57a0] shrink-0 size-[16px]" data-name="Text" />
  );
}

function Container3() {
  return (
    <div className="col-2 content-stretch flex gap-[10px] items-center justify-self-stretch py-[12px] relative row-3 self-start shrink-0" data-name="Container">
      <Text2 />
      <p className="font-light leading-none not-italic relative shrink-0 text-[#2d3748] text-[16px] whitespace-nowrap">製造業</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-[#333f4f] shrink-0 size-[16px]" data-name="Text" />
  );
}

function Container4() {
  return (
    <div className="col-3 content-stretch flex gap-[10px] items-center justify-self-stretch py-[12px] relative row-5 self-start shrink-0" data-name="Container">
      <Text3 />
      <p className="font-light leading-none not-italic relative shrink-0 text-[#2d3748] text-[16px] whitespace-nowrap">保険業</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="bg-[#a5a5a5] shrink-0 size-[16px]" data-name="Text" />
  );
}

function Container5() {
  return (
    <div className="col-1 content-stretch flex gap-[10px] items-center justify-self-stretch py-[12px] relative row-3 self-start shrink-0" data-name="Container">
      <Text4 />
      <p className="font-light leading-none not-italic relative shrink-0 text-[#2d3748] text-[16px] whitespace-nowrap">建設・工業</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="bg-[#ed7d31] shrink-0 size-[16px]" data-name="Text" />
  );
}

function Container6() {
  return (
    <div className="col-1 content-stretch flex gap-[10px] items-center justify-self-stretch py-[12px] relative row-2 self-start shrink-0" data-name="Container">
      <Text5 />
      <p className="font-light leading-none not-italic relative shrink-0 text-[#2d3748] text-[16px] whitespace-nowrap">サービス業</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="bg-[#ffc000] shrink-0 size-[16px]" data-name="Text" />
  );
}

function Container7() {
  return (
    <div className="col-1 content-stretch flex gap-[10px] items-center justify-self-stretch py-[12px] relative row-4 self-start shrink-0" data-name="Container">
      <Text6 />
      <p className="flex-[1_0_0] font-light leading-none min-w-px not-italic relative text-[#2d3748] text-[16px]">住宅・リフォーム・設備</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="bg-[#5b9bd5] shrink-0 size-[16px]" data-name="Text" />
  );
}

function Container8() {
  return (
    <div className="col-1 content-stretch flex gap-[10px] items-center justify-self-stretch py-[12px] relative row-5 self-start shrink-0" data-name="Container">
      <Text7 />
      <p className="font-light leading-none not-italic relative shrink-0 text-[#2d3748] text-[16px] whitespace-nowrap">介護福祉保育</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="bg-[#70ad47] shrink-0 size-[16px]" data-name="Text" />
  );
}

function Container9() {
  return (
    <div className="col-2 content-stretch flex gap-[10px] items-center justify-self-stretch py-[12px] relative row-1 self-start shrink-0" data-name="Container">
      <Text8 />
      <p className="font-light leading-none not-italic relative shrink-0 text-[#2d3748] text-[16px] whitespace-nowrap">卸売・小売</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="bg-[#264478] shrink-0 size-[16px]" data-name="Text" />
  );
}

function Container10() {
  return (
    <div className="col-2 content-stretch flex gap-[10px] items-center justify-self-stretch py-[12px] relative row-2 self-start shrink-0" data-name="Container">
      <Text9 />
      <p className="font-light leading-none not-italic relative shrink-0 text-[#2d3748] text-[16px] whitespace-nowrap">不動産</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="bg-[#43682b] shrink-0 size-[16px]" data-name="Text" />
  );
}

function Container11() {
  return (
    <div className="col-2 content-stretch flex gap-[10px] items-center justify-self-stretch py-[12px] relative row-4 self-start shrink-0" data-name="Container">
      <Text10 />
      <p className="font-light leading-none not-italic relative shrink-0 text-[#2d3748] text-[16px] whitespace-nowrap">飲食業</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="bg-[#255e91] shrink-0 size-[16px]" data-name="Text" />
  );
}

function Container12() {
  return (
    <div className="col-3 content-stretch flex gap-[10px] items-center justify-self-stretch py-[12px] relative row-1 self-start shrink-0" data-name="Container">
      <Text11 />
      <p className="font-light leading-none not-italic relative shrink-0 text-[#2d3748] text-[16px] whitespace-nowrap">教育</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="bg-[#bf8f00] shrink-0 size-[16px]" data-name="Text" />
  );
}

function Container13() {
  return (
    <div className="col-2 content-stretch flex gap-[10px] items-center justify-self-stretch py-[12px] relative row-5 self-start shrink-0" data-name="Container">
      <Text12 />
      <p className="font-light leading-none not-italic relative shrink-0 text-[#2d3748] text-[16px] whitespace-nowrap">美容</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="bg-[#7030a0] shrink-0 size-[16px]" data-name="Text" />
  );
}

function Container14() {
  return (
    <div className="col-3 content-stretch flex gap-[10px] items-center justify-self-stretch py-[12px] relative row-4 self-start shrink-0" data-name="Container">
      <Text13 />
      <p className="font-light leading-none not-italic relative shrink-0 text-[#2d3748] text-[16px] whitespace-nowrap">医療</p>
    </div>
  );
}

function Text14() {
  return (
    <div className="bg-[#548235] shrink-0 size-[16px]" data-name="Text" />
  );
}

function Container15() {
  return (
    <div className="col-3 content-stretch flex gap-[10px] items-center justify-self-stretch py-[12px] relative row-2 self-start shrink-0" data-name="Container">
      <Text14 />
      <p className="font-light leading-none not-italic relative shrink-0 text-[#2d3748] text-[16px] whitespace-nowrap">士業</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="bg-[#c55a11] shrink-0 size-[16px]" data-name="Text" />
  );
}

function Container16() {
  return (
    <div className="col-3 content-stretch flex gap-[10px] items-center justify-self-stretch py-[12px] relative row-3 self-start shrink-0" data-name="Container">
      <Text15 />
      <p className="flex-[1_0_0] font-light leading-none min-h-px min-w-px not-italic relative text-[#2d3748] text-[16px]">リラク鍼灸整骨</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="gap-x-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(5,fit-content(100%))] max-w-[636px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
      <Container12 />
      <Container13 />
      <Container14 />
      <Container15 />
      <Container16 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center justify-center max-w-[636px] min-h-px min-w-[320px] relative w-full lg:w-auto lg:flex-[1_0_0]">
      <Canvas />
      <Container1 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="col-1 justify-self-stretch relative row-2 self-stretch shrink-0">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#2d3748] text-[18px] whitespace-nowrap">
            <p className="leading-[normal]">その他</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Inner() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center leading-[0] relative shrink-0 text-[#2d3748] whitespace-nowrap" data-name="inner">
      <div className="flex flex-col font-medium justify-center relative shrink-0 text-[20px]">
        <p className="leading-[normal]">17.70</p>
      </div>
      <div className="flex flex-col  justify-center not-italic relative shrink-0 text-[18px]">
        <p className="leading-[1.7]">%</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="col-1 justify-self-stretch relative row-3 self-stretch shrink-0">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#2d3748] text-[18px] whitespace-nowrap">
            <p className="leading-[normal]">サービス業</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Inner1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center leading-[0] relative shrink-0 text-[#2d3748] whitespace-nowrap" data-name="inner">
      <div className="flex flex-col font-medium justify-center relative shrink-0 text-[20px]">
        <p className="leading-[normal]">14.30</p>
      </div>
      <div className="flex flex-col  justify-center not-italic relative shrink-0 text-[18px]">
        <p className="leading-[1.7]">%</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="col-1 justify-self-stretch relative row-4 self-stretch shrink-0">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#2d3748] text-[18px] whitespace-nowrap">
            <p className="leading-[normal]">建設・工業</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Inner2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center leading-[0] relative shrink-0 text-[#2d3748] whitespace-nowrap" data-name="inner">
      <div className="flex flex-col font-medium justify-center relative shrink-0 text-[20px]">
        <p className="leading-[normal]">11.80</p>
      </div>
      <div className="flex flex-col  justify-center not-italic relative shrink-0 text-[18px]">
        <p className="leading-[1.7]">%</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="col-1 justify-self-stretch relative row-5 self-stretch shrink-0">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#2d3748] text-[18px] whitespace-nowrap">
            <p className="leading-[normal]">住宅・リフォーム・設備</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Inner3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center leading-[0] relative shrink-0 text-[#2d3748] whitespace-nowrap" data-name="inner">
      <div className="flex flex-col font-medium justify-center relative shrink-0 text-[20px]">
        <p className="leading-[normal]">10.70</p>
      </div>
      <div className="flex flex-col  justify-center not-italic relative shrink-0 text-[18px]">
        <p className="leading-[1.7]">%</p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="col-1 justify-self-stretch relative row-6 self-stretch shrink-0">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#2d3748] text-[18px] whitespace-nowrap">
            <p className="leading-[normal]">介護福祉保育</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Inner4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center leading-[0] relative shrink-0 text-[#2d3748] whitespace-nowrap" data-name="inner">
      <div className="flex flex-col font-medium justify-center relative shrink-0 text-[20px]">
        <p className="leading-[normal]">10.30</p>
      </div>
      <div className="flex flex-col  justify-center not-italic relative shrink-0 text-[18px]">
        <p className="leading-[1.7]">%</p>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-[rgba(19,127,236,0.05)] col-1 justify-self-stretch relative row-1 self-stretch shrink-0">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#2d3748] text-[18px] text-center">
            <p className="leading-[normal]">業種</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-[rgba(19,127,236,0.05)] col-2 justify-self-stretch relative row-1 self-stretch shrink-0">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#2d3748] text-[18px] text-center">
            <p className="leading-[normal]">割合</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="col-1 justify-self-stretch relative row-7 self-stretch shrink-0">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#2d3748] text-[18px] whitespace-nowrap">
            <p className="leading-[normal]">卸売・小売</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Inner5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center leading-[0] relative shrink-0 text-[#2d3748] whitespace-nowrap" data-name="inner">
      <div className="flex flex-col font-medium justify-center relative shrink-0 text-[20px]">
        <p className="leading-[normal]">6.90</p>
      </div>
      <div className="flex flex-col  justify-center not-italic relative shrink-0 text-[18px]">
        <p className="leading-[1.7]">%</p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="col-1 justify-self-stretch relative row-8 self-stretch shrink-0">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#2d3748] text-[18px] whitespace-nowrap">
            <p className="leading-[normal]">不動産</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Inner6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center leading-[0] relative shrink-0 text-[#2d3748] whitespace-nowrap" data-name="inner">
      <div className="flex flex-col font-medium justify-center relative shrink-0 text-[20px]">
        <p className="leading-[normal]">6.00</p>
      </div>
      <div className="flex flex-col  justify-center not-italic relative shrink-0 text-[18px]">
        <p className="leading-[1.7]">%</p>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="col-1 justify-self-stretch relative row-9 self-stretch shrink-0">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#2d3748] text-[18px] whitespace-nowrap">
            <p className="leading-[normal]">製造業</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Inner7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center leading-[0] relative shrink-0 text-[#2d3748] whitespace-nowrap" data-name="inner">
      <div className="flex flex-col font-medium justify-center relative shrink-0 text-[20px]">
        <p className="leading-[normal]">5.30</p>
      </div>
      <div className="flex flex-col  justify-center not-italic relative shrink-0 text-[18px]">
        <p className="leading-[1.7]">%</p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="col-1 justify-self-stretch relative row-10 self-stretch shrink-0">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#2d3748] text-[18px] whitespace-nowrap">
            <p className="leading-[normal]">飲食業</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Inner8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center leading-[0] relative shrink-0 text-[#2d3748] whitespace-nowrap" data-name="inner">
      <div className="flex flex-col font-medium justify-center relative shrink-0 text-[20px]">
        <p className="leading-[normal]">3.90</p>
      </div>
      <div className="flex flex-col  justify-center not-italic relative shrink-0 text-[18px]">
        <p className="leading-[1.7]">%</p>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="col-1 justify-self-stretch relative row-11 self-stretch shrink-0">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#2d3748] text-[18px] whitespace-nowrap">
            <p className="leading-[normal]">美容</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Inner9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center leading-[0] relative shrink-0 text-[#2d3748] whitespace-nowrap" data-name="inner">
      <div className="flex flex-col font-medium justify-center relative shrink-0 text-[20px]">
        <p className="leading-[normal]">2.70</p>
      </div>
      <div className="flex flex-col  justify-center not-italic relative shrink-0 text-[18px]">
        <p className="leading-[1.7]">%</p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="col-1 justify-self-stretch relative row-12 self-stretch shrink-0">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#2d3748] text-[18px] whitespace-nowrap">
            <p className="leading-[normal]">教育</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Inner10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center leading-[0] relative shrink-0 text-[#2d3748] whitespace-nowrap" data-name="inner">
      <div className="flex flex-col font-medium justify-center relative shrink-0 text-[20px]">
        <p className="leading-[normal]">2.60</p>
      </div>
      <div className="flex flex-col  justify-center not-italic relative shrink-0 text-[18px]">
        <p className="leading-[1.7]">%</p>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="col-1 justify-self-stretch relative row-13 self-stretch shrink-0">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#2d3748] text-[18px] whitespace-nowrap">
            <p className="leading-[normal]">士業</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Inner11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center leading-[0] relative shrink-0 text-[#2d3748] whitespace-nowrap" data-name="inner">
      <div className="flex flex-col font-medium justify-center relative shrink-0 text-[20px]">
        <p className="leading-[normal]">2.50</p>
      </div>
      <div className="flex flex-col  justify-center not-italic relative shrink-0 text-[18px]">
        <p className="leading-[1.7]">%</p>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="col-1 justify-self-stretch relative row-14 self-stretch shrink-0">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#2d3748] text-[18px] whitespace-nowrap">
            <p className="leading-[normal]">リラク鍼灸整骨</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Inner12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center leading-[0] relative shrink-0 text-[#2d3748] whitespace-nowrap" data-name="inner">
      <div className="flex flex-col font-medium justify-center relative shrink-0 text-[20px]">
        <p className="leading-[normal]">2.40</p>
      </div>
      <div className="flex flex-col  justify-center not-italic relative shrink-0 text-[18px]">
        <p className="leading-[1.7]">%</p>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="col-1 justify-self-stretch relative row-15 self-stretch shrink-0">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#2d3748] text-[18px] whitespace-nowrap">
            <p className="leading-[normal]">医療</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Inner13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center leading-[0] relative shrink-0 text-[#2d3748] whitespace-nowrap" data-name="inner">
      <div className="flex flex-col font-medium justify-center relative shrink-0 text-[20px]">
        <p className="leading-[normal]">2.20</p>
      </div>
      <div className="flex flex-col  justify-center not-italic relative shrink-0 text-[18px]">
        <p className="leading-[1.7]">%</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="col-1 justify-self-stretch relative row-16 self-stretch shrink-0">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#2d3748] text-[18px] whitespace-nowrap">
            <p className="leading-[normal]">保険業</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Inner14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center leading-[0] relative shrink-0 text-[#2d3748] whitespace-nowrap" data-name="inner">
      <div className="flex flex-col font-medium justify-center relative shrink-0 text-[20px]">
        <p className="leading-[normal]">0.60</p>
      </div>
      <div className="flex flex-col  justify-center not-italic relative shrink-0 text-[18px]">
        <p className="leading-[1.7]">%</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-white grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[42px_repeat(15,minmax(0,1fr))] h-[700px] max-w-[500px] min-h-px min-w-[320px] relative w-full lg:w-auto lg:flex-[1_0_0]">
      <Frame22 />
      <div className="col-2 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="tr">
        <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
            <Inner />
          </div>
        </div>
      </div>
      <Frame23 />
      <div className="col-2 justify-self-stretch relative row-3 self-stretch shrink-0" data-name="tr">
        <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
            <Inner1 />
          </div>
        </div>
      </div>
      <Frame24 />
      <div className="col-2 justify-self-stretch relative row-4 self-stretch shrink-0" data-name="tr">
        <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
            <Inner2 />
          </div>
        </div>
      </div>
      <Frame25 />
      <div className="col-2 justify-self-stretch relative row-5 self-stretch shrink-0" data-name="tr">
        <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
            <Inner3 />
          </div>
        </div>
      </div>
      <Frame26 />
      <div className="col-2 justify-self-stretch relative row-6 self-stretch shrink-0" data-name="tr">
        <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
            <Inner4 />
          </div>
        </div>
      </div>
      <Frame37 />
      <Frame38 />
      <Frame27 />
      <div className="col-2 justify-self-stretch relative row-7 self-stretch shrink-0" data-name="tr">
        <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
            <Inner5 />
          </div>
        </div>
      </div>
      <Frame28 />
      <div className="col-2 justify-self-stretch relative row-8 self-stretch shrink-0" data-name="tr">
        <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
            <Inner6 />
          </div>
        </div>
      </div>
      <Frame29 />
      <div className="col-2 justify-self-stretch relative row-9 self-stretch shrink-0" data-name="tr">
        <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
            <Inner7 />
          </div>
        </div>
      </div>
      <Frame30 />
      <div className="col-2 justify-self-stretch relative row-10 self-stretch shrink-0" data-name="tr">
        <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
            <Inner8 />
          </div>
        </div>
      </div>
      <Frame31 />
      <div className="col-2 justify-self-stretch relative row-11 self-stretch shrink-0" data-name="tr">
        <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
            <Inner9 />
          </div>
        </div>
      </div>
      <Frame32 />
      <div className="col-2 justify-self-stretch relative row-12 self-stretch shrink-0" data-name="tr">
        <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
            <Inner10 />
          </div>
        </div>
      </div>
      <Frame33 />
      <div className="col-2 justify-self-stretch relative row-13 self-stretch shrink-0" data-name="tr">
        <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
            <Inner11 />
          </div>
        </div>
      </div>
      <Frame34 />
      <div className="col-2 justify-self-stretch relative row-14 self-stretch shrink-0" data-name="tr">
        <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
            <Inner12 />
          </div>
        </div>
      </div>
      <Frame35 />
      <div className="col-2 justify-self-stretch relative row-15 self-stretch shrink-0" data-name="tr">
        <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
            <Inner13 />
          </div>
        </div>
      </div>
      <Frame36 />
      <div className="col-2 justify-self-stretch relative row-16 self-stretch shrink-0" data-name="tr">
        <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
            <Inner14 />
          </div>
        </div>
      </div>
    </div>
  );
}

const CHART_LEGEND_DATA: { color: string; name: string; value: string }[] = [
  { color: "#4E79A7", name: "その他", value: "17.70" },
  { color: "#F28E2B", name: "サービス業", value: "14.30" },
  { color: "#59A14F", name: "建設・工業", value: "11.80" },
  { color: "#E15759", name: "住宅・リフォーム・設備", value: "10.70" },
  { color: "#76B7B2", name: "介護福祉保育", value: "10.30" },
  { color: "#EDC948", name: "卸売・小売", value: "6.90" },
  { color: "#B07AA1", name: "不動産", value: "6.00" },
  { color: "#FF9DA7", name: "製造業", value: "5.30" },
  { color: "#9C755F", name: "飲食業", value: "3.90" },
  { color: "#499894", name: "美容", value: "2.70" },
  { color: "#86BCB6", name: "教育", value: "2.60" },
  { color: "#D37295", name: "士業", value: "2.50" },
  { color: "#A0CBE8", name: "リラク鍼灸整骨", value: "2.40" },
  { color: "#FABFD2", name: "医療", value: "2.20" },
  { color: "#BAB0AC", name: "保険業", value: "0.60" },
];

function ChartWithLegend() {
  return (
    <div className="content-center flex flex-wrap gap-[32px] items-center justify-center p-[16px] relative w-full max-w-[1200px] mx-auto" data-name="chart_with_legend">
      <Canvas />
      <div className="content-start flex flex-[1_0_0] flex-wrap gap-0 items-start min-w-[320px] relative">
        {CHART_LEGEND_DATA.map((item) => (
          <div
            key={item.name}
            className="content-stretch flex flex-[1_0_0] gap-[10px] items-center max-w-[400px] min-w-[300px] py-[12px] relative"
            data-name="Container"
          >
            <div className="size-[16px] shrink-0" style={{ backgroundColor: item.color }} />
            <p className="font-light leading-none not-italic text-[#2d3748] text-[16px] whitespace-nowrap shrink-0">
              {item.name}
            </p>
            <div className="flex gap-[4px] items-center text-[#2d3748] whitespace-nowrap shrink-0">
              <span className="font-medium text-[20px] leading-none">{item.value}</span>
              <span className="font-semibold text-[18px] leading-[1.7]">%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-center flex flex-col items-center justify-center min-w-[320px] relative shrink-0 w-full">
      <ChartWithLegend />
      {/* table_old — hidden for now, may be restored later */}
      <div className="hidden" data-name="table_old">
        <Frame21 />
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[54px] items-center justify-center min-h-px min-w-px relative">
      <Container />
      <Frame115 />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="1">
      <Frame40 />
    </div>
  );
}

function Caption1() {
  return (
    <div className="bg-[#edf6ff] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[50px] shrink-0" data-name="caption">
      <div aria-hidden="true" className="absolute border border-[rgba(19,127,236,0.1)] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="flex flex-col font-extrabold justify-center leading-[0] relative shrink-0 text-[#137fec] text-[20px] text-center tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-none">point 02</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center lg:items-end justify-center relative shrink-0 w-full max-w-[636px] lg:max-w-none mx-auto lg:mx-0">
      <Caption1 />
      <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#2d3748] lg:text-[#62666c] font-extrabold text-[24px] lg:text-[32px] text-center lg:text-right w-full lg:w-auto lg:whitespace-nowrap">
        <p className="leading-[1.4]">「はじめての不安」を徹底的に払拭！</p>
      </div>
      <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#62666c] text-[18px] text-center lg:text-right w-full lg:w-auto">
        <p className="lg:hidden leading-[1.7]">
          初めてのホームページ作成は、わからないことだらけで当然です。ホームページドットコムは、そんなお客様の不安を解消するために、担当コンサルタントが丁寧にサポートします。専門用語は使わず、お客様の目線でご説明しますのでご安心ください。
        </p>
        <div className="hidden lg:block">
          <p className="leading-[1.7] mb-0">初めてのホームページ作成は、わからないことだらけで当然です。</p>
          <p className="leading-[1.7] mb-0">ホームページドットコムは、そんなお客様の不安を解消するために、</p>
          <p className="leading-[1.7] mb-0">担当コンサルタントが丁寧にサポートします。</p>
          <p className="leading-[1.7]">専門用語は使わず、お客様の目線でご説明しますのでご安心ください。</p>
        </div>
      </div>
      <div className="hidden lg:flex -translate-y-1/2 absolute flex-col font-thin justify-center leading-[0] left-0 opacity-10 text-[#2d3748] text-[200px] top-[calc(50%+0.5px)] whitespace-nowrap">
        <p className="leading-none">02</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[40.95%_17.17%_0_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 117.549 77.3606">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p2c5cfa00} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p19859500} fill="var(--fill-0, #202933)" id="Vector_2" />
          </g>
          <g id="Group_3">
            <path d={svgPaths.p19eb1500} fill="var(--fill-0, white)" id="Vector_3" />
            <path d={svgPaths.p344f1580} fill="var(--fill-0, #202933)" id="Vector_4" />
          </g>
          <path d={svgPaths.p24dcde00} fill="var(--fill-0, #3D81E2)" id="Vector_5" />
          <g id="Group_4">
            <path d={svgPaths.p29bd4800} fill="var(--fill-0, #3D81E2)" id="Vector_6" />
            <path d={svgPaths.p3d836200} fill="var(--fill-0, #202933)" id="Vector_7" />
          </g>
          <path d={svgPaths.p148ad100} fill="var(--fill-0, #202933)" id="Vector_8" />
          <path d={svgPaths.p1b43b000} fill="var(--fill-0, #202933)" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[0_33.67%_36.23%_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94.134 83.5375">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p2f35c800} fill="var(--fill-0, #202933)" id="Vector" />
            <path d={svgPaths.p19304300} fill="var(--fill-0, #202933)" id="Vector_2" />
          </g>
          <path d={svgPaths.p307e6d80} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.pf421800} fill="var(--fill-0, #202933)" id="Vector_4" />
          <path d={svgPaths.p2df9f380} fill="var(--fill-0, #202933)" id="Vector_5" />
          <g id="Group_3">
            <path d={svgPaths.p32c87dc0} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.p161c7c00} fill="var(--fill-0, #202933)" id="Vector_7" />
          </g>
          <g id="Vector_8" />
          <path d={svgPaths.p33e19280} fill="var(--fill-0, #202933)" id="Vector_9" />
          <path d={svgPaths.p3d69a000} fill="var(--fill-0, #202933)" id="Vector_10" />
          <g id="Group_4">
            <path d={svgPaths.p41eac00} fill="var(--fill-0, white)" id="Vector_11" />
            <path d={svgPaths.p3df2cc00} fill="var(--fill-0, #202933)" id="Vector_12" />
          </g>
          <g id="Group_5">
            <path d={svgPaths.p13c86c00} fill="var(--fill-0, #202933)" id="Vector_13" />
            <path d={svgPaths.p3c5a1080} fill="var(--fill-0, #202933)" id="Vector_14" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[44.03%_73.82%_47.01%_19.71%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.1892 11.7424">
        <g id="Group">
          <path d={svgPaths.p10041800} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.pecd040} fill="var(--fill-0, #202933)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[26.21%_46.01%_45.13%_29.01%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.4491 37.5369">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p120b8180} fill="var(--fill-0, #202933)" id="Vector" />
            <path d={svgPaths.p37be8b80} fill="var(--fill-0, #202933)" id="Vector_2" />
            <path d={svgPaths.p261a8000} fill="var(--fill-0, #202933)" id="Vector_3" />
            <path d={svgPaths.p149e9d80} fill="var(--fill-0, #202933)" id="Vector_4" />
            <path d={svgPaths.p20df7e80} fill="var(--fill-0, #202933)" id="Vector_5" />
          </g>
          <path d={svgPaths.p17230700} fill="var(--fill-0, #202933)" id="Vector_6" />
          <g id="Group_3">
            <path d={svgPaths.p15066780} fill="var(--fill-0, white)" id="Vector_7" />
            <path d={svgPaths.p34e38600} fill="var(--fill-0, #202933)" id="Vector_8" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[0_33.67%_36.23%_0]" data-name="Group">
      <Group3 />
      <Group4 />
      <Group5 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[0_17.17%_0_0]" data-name="Group">
      <Group1 />
      <Group2 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[65.71%_0_6.54%_88.1%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8977 36.3565">
        <g id="Group">
          <path d={svgPaths.p7882a00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p19be0080} fill="var(--fill-0, #202933)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[75.56%_5.54%_-0.01%_63.63%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.7605 32.0231">
        <g id="Group">
          <path d={svgPaths.pb053c80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2abaf600} fill="var(--fill-0, #202933)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[57.7%_3.71%_6.49%_69.18%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.479 46.9215">
        <g id="Group">
          <path d={svgPaths.p31be3a00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2c729100} fill="var(--fill-0, #202933)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute inset-[62.25%_7.91%_31.13%_73.38%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.556 8.67133">
        <g id="Group">
          <path d={svgPaths.p1aecca00} fill="var(--fill-0, #3D81E2)" id="Vector" />
          <path d={svgPaths.p162e8580} fill="var(--fill-0, #202933)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[72.94%_9.6%_24.99%_75.06%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.7687 2.70987">
        <g id="Group">
          <path d={svgPaths.p375e5f00} fill="var(--fill-0, #202933)" id="Vector" />
          <path d={svgPaths.pa781900} fill="var(--fill-0, #202933)" id="Vector_2" />
          <path d={svgPaths.p3b5d7c00} fill="var(--fill-0, #202933)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute inset-[78.55%_9.6%_19.38%_75.06%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.7687 2.70984">
        <g id="Group">
          <path d={svgPaths.p2e31eb00} fill="var(--fill-0, #202933)" id="Vector" />
          <path d={svgPaths.pa781900} fill="var(--fill-0, #202933)" id="Vector_2" />
          <path d={svgPaths.p3b5d7c00} fill="var(--fill-0, #202933)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute inset-[84.16%_9.6%_13.77%_75.06%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.7687 2.70981">
        <g id="Group">
          <path d={svgPaths.p91aef00} fill="var(--fill-0, #202933)" id="Vector" />
          <path d={svgPaths.pa781900} fill="var(--fill-0, #202933)" id="Vector_2" />
          <path d={svgPaths.p3b5d7c00} fill="var(--fill-0, #202933)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[57.7%_3.71%_6.49%_69.18%]" data-name="Group">
      <Group10 />
      <Group11 />
      <Group12 />
      <Group13 />
      <Group14 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute inset-[70.26%_27.63%_14.23%_63.63%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4138 20.3153">
        <g id="Group">
          <path d={svgPaths.p149d6800} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p3860d070} fill="var(--fill-0, #202933)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute inset-[47.77%_9.99%_47.46%_75.46%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.6393 6.24464">
        <g id="Group">
          <path d={svgPaths.p2bdae280} fill="var(--fill-0, #202933)" id="Vector" />
          <path d={svgPaths.p3f7f1c80} fill="var(--fill-0, #202933)" id="Vector_2" />
          <path d={svgPaths.p15aef300} fill="var(--fill-0, #202933)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[47.77%_0_-0.01%_63.63%]" data-name="Group">
      <Group7 />
      <Group8 />
      <Group9 />
      <Group15 />
      <Group16 />
    </div>
  );
}

function EaEcena() {
  return (
    <div className="absolute h-[130.997px] left-[-1.91px] overflow-clip top-[6px] w-[141.915px]" data-name="_ÉåÉCÉÑÅ__1">
      <Group />
      <Group6 />
    </div>
  );
}

function Image() {
  return (
    <div className="h-[133px] overflow-clip relative shrink-0 w-[140px]" data-name="Image">
      <EaEcena />
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[0] not-italic relative shrink-0 text-center w-[264px]">
      <div className="flex flex-col font-semibold justify-center min-w-full relative shrink-0 text-[#2d3748] text-[22px] w-[min-content]">
        <p className="leading-[1.8]">初期費用を抑えて、</p>
      </div>
      <div className="flex flex-col  justify-center min-w-full relative shrink-0 text-[#62666c] text-[20px] w-[min-content]">
        <p className="leading-[1.8]">{`上場企業ならではの `}</p>
      </div>
      <div className="flex flex-col font-semibold justify-center relative shrink-0 text-[#137fec] text-[22px] whitespace-nowrap">
        <p className="leading-[1.8]">透明な料金体系でご提案</p>
      </div>
    </div>
  );
}

function Frame138() {
  return (
    <div className="bg-[#eff0f3] content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0">
      <Frame124 />
    </div>
  );
}

function Frame136() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-full items-center justify-end min-h-px min-w-px relative">
      <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#62666c] text-[14px] lg:text-[20px] text-center lg:whitespace-nowrap">
        <p className="leading-[1.4]">制作費用に対する不安...</p>
      </div>
      <Frame138 />
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute inset-[45.3%_-0.24%_0.27%_10.6%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 125.487 72.3893">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p1d6df332} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p125b8a70} fill="var(--fill-0, #111111)" id="Vector_2" />
          </g>
          <g id="Group_3">
            <path d={svgPaths.p143adc00} fill="var(--fill-0, white)" id="Vector_3" />
            <path d={svgPaths.pf7bbf00} fill="var(--fill-0, #111111)" id="Vector_4" />
          </g>
          <path d={svgPaths.p2f4a8100} fill="var(--fill-0, #111111)" id="Vector_5" />
          <path d={svgPaths.p1d6017b0} fill="var(--fill-0, #111111)" id="Vector_6" />
          <g id="Group_4">
            <g id="Group_5">
              <path d={svgPaths.p23695100} fill="var(--fill-0, #137FEC)" id="Vector_7" />
              <path d={svgPaths.p3daabf00} fill="var(--fill-0, #111111)" id="Vector_8" />
            </g>
            <path d={svgPaths.p3e0618f0} fill="var(--fill-0, #111111)" id="Vector_9" />
            <path d={svgPaths.p2fd34300} fill="var(--fill-0, #111111)" id="Vector_10" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute inset-[8.35%_22.41%_33.8%_33.01%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.414 76.941">
        <g id="Group">
          <path d={svgPaths.p24930580} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p3001ccf0} fill="var(--fill-0, #111111)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute inset-[6.02%_23.14%_60.87%_33.71%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60.4102 44.0445">
        <g id="Group">
          <path d={svgPaths.pa79a00} fill="var(--fill-0, #111111)" id="Vector" />
          <path d={svgPaths.p15cd6d00} fill="var(--fill-0, #111111)" id="Vector_2" />
          <path d={svgPaths.p309a5480} fill="var(--fill-0, #111111)" id="Vector_3" />
          <path d={svgPaths.p1b079700} fill="var(--fill-0, #111111)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute inset-[34.71%_60.17%_49.49%_33.01%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.56043 21.0094">
        <g id="Group">
          <path d={svgPaths.p24f3e480} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p1b615300} fill="var(--fill-0, #111111)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute inset-[34.71%_22.41%_49.5%_70.76%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.55989 21.0118">
        <g id="Group">
          <path d={svgPaths.p10e20300} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p28dee900} fill="var(--fill-0, #111111)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents inset-[6.02%_22.41%_33.8%_33.01%]" data-name="Group">
      <Group22 />
      <Group23 />
      <Group24 />
      <Group25 />
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute inset-[31.67%_32.47%_42.15%_43.06%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.2516 34.8149">
        <g id="Group">
          <path d={svgPaths.p30d8b500} fill="var(--fill-0, #111111)" id="Vector" />
          <path d={svgPaths.p179d22f2} fill="var(--fill-0, #111111)" id="Vector_2" />
          <path d={svgPaths.p8652000} fill="var(--fill-0, #111111)" id="Vector_3" />
          <path d={svgPaths.p24de0c00} fill="var(--fill-0, #111111)" id="Vector_4" />
          <path d={svgPaths.p1b50aa00} fill="var(--fill-0, #111111)" id="Vector_5" />
          <path d={svgPaths.p2bf7cdc0} fill="var(--fill-0, #111111)" id="Vector_6" />
          <path d={svgPaths.p13e81200} fill="var(--fill-0, #111111)" id="Vector_7" />
          <path d={svgPaths.p2c22c200} fill="var(--fill-0, #111111)" id="Vector_8" />
          <g id="Group_2">
            <path d={svgPaths.p4f46070} fill="var(--fill-0, white)" id="Vector_9" />
            <path d={svgPaths.pc15f6b0} fill="var(--fill-0, #111111)" id="Vector_10" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents inset-[6.02%_22.41%_33.8%_33.01%]" data-name="Group">
      <Group21 />
      <Group26 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents inset-[6.02%_-0.24%_0.27%_10.6%]" data-name="Group">
      <Group19 />
      <Group20 />
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute inset-[54.63%_68.88%_0.27%_7.38%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.2312 59.988">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p1016600} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p1c6a4700} fill="var(--fill-0, #111111)" id="Vector_2" />
          </g>
          <path d={svgPaths.p1ba3f700} fill="var(--fill-0, #111111)" id="Vector_3" />
          <path d={svgPaths.p24138c00} fill="var(--fill-0, #111111)" id="Vector_4" />
          <path d={svgPaths.p26222c40} fill="var(--fill-0, #111111)" id="Vector_5" />
          <path d={svgPaths.p3a458d00} fill="var(--fill-0, #111111)" id="Vector_6" />
          <path d={svgPaths.p1084db80} fill="var(--fill-0, #111111)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[6.02%_-0.24%_0.27%_7.38%]">
      <Group18 />
      <Group27 />
    </div>
  );
}

function Image1() {
  return (
    <div className="h-[133px] overflow-clip relative shrink-0 w-[140px]" data-name="Image">
      <Group17 />
    </div>
  );
}

function Frame125() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[0] not-italic relative shrink-0 text-center w-[264px]">
      <div className="flex flex-col font-semibold justify-center min-w-full relative shrink-0 text-[#2d3748] text-[22px] w-[min-content]">
        <p className="leading-[1.8]">専属サポートチームが</p>
      </div>
      <div className="flex flex-col  justify-center min-w-full relative shrink-0 text-[#62666c] text-[20px] w-[min-content]">
        <p className="leading-[1.8]">操作方法から基礎まで</p>
      </div>
      <div className="flex flex-col font-semibold justify-center relative shrink-0 text-[#137fec] text-[22px] whitespace-nowrap">
        <p className="leading-[1.8]">丁寧にご説明</p>
      </div>
    </div>
  );
}

function Frame140() {
  return (
    <div className="bg-[#eff0f3] content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0">
      <Frame125 />
    </div>
  );
}

function Frame137() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-full items-center justify-end min-h-px min-w-px relative">
      <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#62666c] text-[14px] lg:text-[20px] text-center lg:whitespace-nowrap">
        <p className="leading-[1.4]">制作費用に対する不安...</p>
      </div>
      <Frame140 />
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute inset-[36.81%_8.36%_12.66%_57.28%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.5524 67.923">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p240452c0} fill="var(--fill-0, #137FEC)" id="Vector" />
            <path d={svgPaths.p58c0a80} fill="var(--fill-0, #111111)" id="Vector_2" />
          </g>
          <path d={svgPaths.p21f44980} fill="var(--fill-0, #111111)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute inset-[43.51%_17.25%_4.38%_17.54%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76.9423 70.0513">
        <g id="Group">
          <path d={svgPaths.p39d3d80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p12499f00} fill="var(--fill-0, #111111)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute inset-[1.68%_20.61%_62.12%_20.25%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69.7886 48.6532">
        <g id="Group">
          <path d={svgPaths.p9a71000} fill="var(--fill-0, #137FEC)" id="Vector" />
          <path d={svgPaths.p178d8180} fill="var(--fill-0, #111111)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute inset-[32.23%_69.62%_50.96%_21.66%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2912 22.5928">
        <g id="Group">
          <path d={svgPaths.p85c5c00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p28dcfe00} fill="var(--fill-0, #111111)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute inset-[32.22%_21.37%_50.97%_69.9%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2967 22.5954">
        <g id="Group">
          <path d={svgPaths.p1c789700} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p18c1d700} fill="var(--fill-0, #111111)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute inset-[45.82%_69.33%_46.93%_22.43%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.72587 9.73804">
        <g id="Group">
          <path d={svgPaths.p5b85480} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2f35b900} fill="var(--fill-0, #111111)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute inset-[45.83%_22.15%_46.93%_69.61%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.72588 9.73804">
        <g id="Group">
          <path d={svgPaths.p38f19a00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p34536f80} fill="var(--fill-0, #111111)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents inset-[45.82%_22.15%_46.93%_22.43%]" data-name="Group">
      <Group36 />
      <Group37 />
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents inset-[1.68%_8.36%_4.38%_17.54%]" data-name="Group">
      <Group30 />
      <Group31 />
      <Group32 />
      <div className="absolute inset-[11.9%_22.4%_35.17%_22.69%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64.7972 71.1488">
          <path d={svgPaths.p1b35cc00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[32.24%_21.36%_34.27%_21.66%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67.2304 45.0261">
          <path d={svgPaths.p1ff5dfc0} fill="var(--fill-0, #111111)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[6.94%_36.24%_86.77%_46.01%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.9505 8.44218">
          <path d={svgPaths.p135b9080} fill="var(--fill-0, #111111)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[11.97%_58%_72.4%_26.05%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.8301 21.0152">
          <path d={svgPaths.p109f3180} fill="var(--fill-0, #111111)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[10.23%_27.67%_75.34%_51.58%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.4946 19.3988">
          <path d={svgPaths.pec3d900} fill="var(--fill-0, #111111)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[26.11%_68.29%_65.66%_27.28%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.22753 11.062">
          <path d={svgPaths.p2a1f3880} fill="var(--fill-0, #111111)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[18.64%_26.97%_65.67%_64.45%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1146 21.1007">
          <path d={svgPaths.p12900000} fill="var(--fill-0, #111111)" id="Vector" />
        </svg>
      </div>
      <Group33 />
      <Group34 />
      <div className="absolute inset-[8.85%_55.05%_85.05%_30.34%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.2315 8.21058">
          <path d={svgPaths.p2f43940} fill="var(--fill-0, #111111)" id="Vector" />
        </svg>
      </div>
      <Group35 />
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute inset-[33.5%_31.06%_56.39%_31.36%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.3471 13.59">
        <g id="Group">
          <path d={svgPaths.p7373e00} fill="var(--fill-0, #111111)" id="Vector" />
          <path d={svgPaths.p20143c00} fill="var(--fill-0, #111111)" id="Vector_2" />
          <path d={svgPaths.p117aa800} fill="var(--fill-0, #111111)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute inset-[28.89%_34.61%_42.91%_34.92%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.9611 37.9188">
        <g id="Group">
          <path d={svgPaths.p394cc980} fill="var(--fill-0, #111111)" id="Vector" />
          <path d={svgPaths.p1a12e440} fill="var(--fill-0, #111111)" id="Vector_2" />
          <g id="Group_2">
            <path d={svgPaths.p1d7c9600} fill="var(--fill-0, white)" id="Vector_3" />
            <path d={svgPaths.p3a5bca00} fill="var(--fill-0, #111111)" id="Vector_4" />
          </g>
          <path d={svgPaths.pf7cac00} fill="var(--fill-0, #111111)" id="Vector_5" />
          <path d={svgPaths.p3429f100} fill="var(--fill-0, #111111)" id="Vector_6" />
          <path d={svgPaths.p2e1180} fill="var(--fill-0, #111111)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute contents inset-[28.89%_31.06%_42.91%_31.36%]" data-name="Group">
      <Group39 />
      <Group40 />
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute inset-[71.85%_0.11%_-1.41%_0.39%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 117.412 39.7259">
        <g id="Group">
          <path d={svgPaths.p15b7b0b0} fill="var(--fill-0, white)" id="Vector" />
          <g id="Group_2">
            <path d={svgPaths.p3f8f7770} fill="var(--fill-0, #9DA98A)" id="Vector_2" />
            <path d={svgPaths.p3f859780} fill="var(--fill-0, #9DA98A)" id="Vector_3" />
            <path d={svgPaths.p3ff87c00} fill="var(--fill-0, #9DA98A)" id="Vector_4" />
            <path d={svgPaths.p39267080} fill="var(--fill-0, #9DA98A)" id="Vector_5" />
            <path d={svgPaths.p17cfbb00} fill="var(--fill-0, #9DA98A)" id="Vector_6" />
            <path d={svgPaths.p39747700} fill="var(--fill-0, #9DA98A)" id="Vector_7" />
            <path d={svgPaths.p33f3e380} fill="var(--fill-0, #9DA98A)" id="Vector_8" />
            <path d={svgPaths.p2525db80} fill="var(--fill-0, #9DA98A)" id="Vector_9" />
            <path d={svgPaths.p3c5b6a00} fill="var(--fill-0, #9DA98A)" id="Vector_10" />
            <path d={svgPaths.p3f29fe80} fill="var(--fill-0, #9DA98A)" id="Vector_11" />
            <path d={svgPaths.p3e9fcd80} fill="var(--fill-0, #9DA98A)" id="Vector_12" />
            <path d={svgPaths.p664aa00} fill="var(--fill-0, #9DA98A)" id="Vector_13" />
            <path d={svgPaths.p2972f280} fill="var(--fill-0, #9DA98A)" id="Vector_14" />
            <path d={svgPaths.p2c1c2400} fill="var(--fill-0, #9DA98A)" id="Vector_15" />
            <path d={svgPaths.p321b09c0} fill="var(--fill-0, #9DA98A)" id="Vector_16" />
            <path d={svgPaths.p3bc9b200} fill="var(--fill-0, #9DA98A)" id="Vector_17" />
            <path d={svgPaths.p3e89800} fill="var(--fill-0, #9DA98A)" id="Vector_18" />
            <path d={svgPaths.p977ed00} fill="var(--fill-0, #9DA98A)" id="Vector_19" />
            <path d={svgPaths.p1e6d1100} fill="var(--fill-0, #9DA98A)" id="Vector_20" />
            <path d={svgPaths.p2a882b00} fill="var(--fill-0, #9DA98A)" id="Vector_21" />
            <path d={svgPaths.p30476770} fill="var(--fill-0, #9DA98A)" id="Vector_22" />
            <path d={svgPaths.p2a426b00} fill="var(--fill-0, #9DA98A)" id="Vector_23" />
            <path d={svgPaths.p74a42f0} fill="var(--fill-0, #9DA98A)" id="Vector_24" />
            <path d={svgPaths.pd49c800} fill="var(--fill-0, #9DA98A)" id="Vector_25" />
            <path d={svgPaths.p21861800} fill="var(--fill-0, #9DA98A)" id="Vector_26" />
            <path d={svgPaths.p3fa5b800} fill="var(--fill-0, #9DA98A)" id="Vector_27" />
            <path d={svgPaths.p2269a480} fill="var(--fill-0, #9DA98A)" id="Vector_28" />
            <path d={svgPaths.p318a9240} fill="var(--fill-0, #9DA98A)" id="Vector_29" />
            <path d={svgPaths.p36356200} fill="var(--fill-0, #9DA98A)" id="Vector_30" />
            <path d={svgPaths.p131bd600} fill="var(--fill-0, #9DA98A)" id="Vector_31" />
            <path d={svgPaths.p300c2a80} fill="var(--fill-0, #9DA98A)" id="Vector_32" />
            <path d={svgPaths.p1c8da680} fill="var(--fill-0, #9DA98A)" id="Vector_33" />
            <path d={svgPaths.p3c067300} fill="var(--fill-0, #9DA98A)" id="Vector_34" />
            <path d={svgPaths.p35d04400} fill="var(--fill-0, #9DA98A)" id="Vector_35" />
            <path d={svgPaths.p3d7a8a00} fill="var(--fill-0, #9DA98A)" id="Vector_36" />
            <path d={svgPaths.p11507b00} fill="var(--fill-0, #9DA98A)" id="Vector_37" />
            <path d={svgPaths.p18d93940} fill="var(--fill-0, #9DA98A)" id="Vector_38" />
            <path d={svgPaths.p3bca4880} fill="var(--fill-0, #9DA98A)" id="Vector_39" />
            <path d={svgPaths.p10afaf70} fill="var(--fill-0, #9DA98A)" id="Vector_40" />
            <path d={svgPaths.p14bc6400} fill="var(--fill-0, #9DA98A)" id="Vector_41" />
            <path d={svgPaths.p2382f800} fill="var(--fill-0, #9DA98A)" id="Vector_42" />
            <path d={svgPaths.pce10280} fill="var(--fill-0, #9DA98A)" id="Vector_43" />
            <path d={svgPaths.pe60b900} fill="var(--fill-0, #9DA98A)" id="Vector_44" />
            <path d={svgPaths.p233bae80} fill="var(--fill-0, #9DA98A)" id="Vector_45" />
            <path d={svgPaths.p2b94e180} fill="var(--fill-0, #9DA98A)" id="Vector_46" />
            <path d={svgPaths.p3a3f4700} fill="var(--fill-0, #9DA98A)" id="Vector_47" />
            <path d={svgPaths.p17831980} fill="var(--fill-0, #9DA98A)" id="Vector_48" />
            <path d={svgPaths.p16ddd7c0} fill="var(--fill-0, #9DA98A)" id="Vector_49" />
            <path d={svgPaths.p26177500} fill="var(--fill-0, #9DA98A)" id="Vector_50" />
            <path d={svgPaths.p13b0a700} fill="var(--fill-0, #9DA98A)" id="Vector_51" />
            <path d={svgPaths.p2a7ce5a0} fill="var(--fill-0, #9DA98A)" id="Vector_52" />
            <path d={svgPaths.p273d5db0} fill="var(--fill-0, #9DA98A)" id="Vector_53" />
            <path d={svgPaths.p97a7c00} fill="var(--fill-0, #9DA98A)" id="Vector_54" />
            <path d={svgPaths.pa7c9cc0} fill="var(--fill-0, #9DA98A)" id="Vector_55" />
            <path d={svgPaths.p5608a00} fill="var(--fill-0, #9DA98A)" id="Vector_56" />
            <path d={svgPaths.p3a6dd800} fill="var(--fill-0, #9DA98A)" id="Vector_57" />
            <path d={svgPaths.p2a8f4080} fill="var(--fill-0, #9DA98A)" id="Vector_58" />
            <path d={svgPaths.p2f5abe70} fill="var(--fill-0, #9DA98A)" id="Vector_59" />
            <path d={svgPaths.p16a91800} fill="var(--fill-0, #9DA98A)" id="Vector_60" />
            <path d={svgPaths.p2af49580} fill="var(--fill-0, #9DA98A)" id="Vector_61" />
            <path d={svgPaths.p145f3600} fill="var(--fill-0, #9DA98A)" id="Vector_62" />
            <path d={svgPaths.p9884b00} fill="var(--fill-0, #9DA98A)" id="Vector_63" />
            <path d={svgPaths.p3e2ddb80} fill="var(--fill-0, #9DA98A)" id="Vector_64" />
            <path d={svgPaths.p1aaa42f2} fill="var(--fill-0, #9DA98A)" id="Vector_65" />
            <path d={svgPaths.p3863f200} fill="var(--fill-0, #9DA98A)" id="Vector_66" />
            <path d={svgPaths.pb0ddb80} fill="var(--fill-0, #9DA98A)" id="Vector_67" />
            <path d={svgPaths.pf3b8770} fill="var(--fill-0, #9DA98A)" id="Vector_68" />
            <path d={svgPaths.p358a2d80} fill="var(--fill-0, #9DA98A)" id="Vector_69" />
            <path d={svgPaths.p1018ca00} fill="var(--fill-0, #9DA98A)" id="Vector_70" />
            <path d={svgPaths.p32ca4780} fill="var(--fill-0, #9DA98A)" id="Vector_71" />
            <path d={svgPaths.p20027000} fill="var(--fill-0, #9DA98A)" id="Vector_72" />
            <path d={svgPaths.p1f619300} fill="var(--fill-0, #9DA98A)" id="Vector_73" />
            <path d={svgPaths.p3d639c00} fill="var(--fill-0, #9DA98A)" id="Vector_74" />
            <path d={svgPaths.p23819180} fill="var(--fill-0, #9DA98A)" id="Vector_75" />
            <path d={svgPaths.p3b0ba180} fill="var(--fill-0, #9DA98A)" id="Vector_76" />
            <path d={svgPaths.p8fa4b80} fill="var(--fill-0, #9DA98A)" id="Vector_77" />
            <path d={svgPaths.pb26b980} fill="var(--fill-0, #9DA98A)" id="Vector_78" />
            <path d={svgPaths.p3cf6a480} fill="var(--fill-0, #9DA98A)" id="Vector_79" />
            <path d={svgPaths.p743b700} fill="var(--fill-0, #9DA98A)" id="Vector_80" />
            <path d={svgPaths.p3d925e80} fill="var(--fill-0, #9DA98A)" id="Vector_81" />
            <path d={svgPaths.p12c91580} fill="var(--fill-0, #9DA98A)" id="Vector_82" />
            <path d={svgPaths.pa844600} fill="var(--fill-0, #9DA98A)" id="Vector_83" />
            <path d={svgPaths.p1a01f600} fill="var(--fill-0, #9DA98A)" id="Vector_84" />
            <path d={svgPaths.p66a90f0} fill="var(--fill-0, #9DA98A)" id="Vector_85" />
            <path d={svgPaths.p7149980} fill="var(--fill-0, #9DA98A)" id="Vector_86" />
            <path d={svgPaths.p1730f0c0} fill="var(--fill-0, #9DA98A)" id="Vector_87" />
            <path d={svgPaths.p2cbb9d00} fill="var(--fill-0, #9DA98A)" id="Vector_88" />
            <path d={svgPaths.p22404700} fill="var(--fill-0, #9DA98A)" id="Vector_89" />
            <path d={svgPaths.p3e4ae700} fill="var(--fill-0, #9DA98A)" id="Vector_90" />
            <path d={svgPaths.p1c396780} fill="var(--fill-0, #9DA98A)" id="Vector_91" />
            <path d={svgPaths.p29ec7880} fill="var(--fill-0, #9DA98A)" id="Vector_92" />
            <path d={svgPaths.p2cc3aa80} fill="var(--fill-0, #9DA98A)" id="Vector_93" />
            <path d={svgPaths.p2733c800} fill="var(--fill-0, #9DA98A)" id="Vector_94" />
            <path d={svgPaths.pa18f700} fill="var(--fill-0, #9DA98A)" id="Vector_95" />
            <path d={svgPaths.p3bb3a800} fill="var(--fill-0, #9DA98A)" id="Vector_96" />
            <path d={svgPaths.pc7df980} fill="var(--fill-0, #9DA98A)" id="Vector_97" />
            <path d={svgPaths.p16f0e140} fill="var(--fill-0, #9DA98A)" id="Vector_98" />
            <path d={svgPaths.p2151cc00} fill="var(--fill-0, #9DA98A)" id="Vector_99" />
            <path d={svgPaths.p18c7ad30} fill="var(--fill-0, #9DA98A)" id="Vector_100" />
            <path d={svgPaths.p1bb737f0} fill="var(--fill-0, #9DA98A)" id="Vector_101" />
            <path d={svgPaths.pc8d15f0} fill="var(--fill-0, #9DA98A)" id="Vector_102" />
            <path d={svgPaths.p2d18bd00} fill="var(--fill-0, #9DA98A)" id="Vector_103" />
            <path d={svgPaths.p13e0a100} fill="var(--fill-0, #9DA98A)" id="Vector_104" />
            <path d={svgPaths.p1db04980} fill="var(--fill-0, #9DA98A)" id="Vector_105" />
            <path d={svgPaths.p387ef500} fill="var(--fill-0, #9DA98A)" id="Vector_106" />
            <path d={svgPaths.p344ad800} fill="var(--fill-0, #9DA98A)" id="Vector_107" />
            <path d={svgPaths.p1f4d4700} fill="var(--fill-0, #9DA98A)" id="Vector_108" />
            <path d={svgPaths.p16b25c00} fill="var(--fill-0, #9DA98A)" id="Vector_109" />
            <path d={svgPaths.p26894500} fill="var(--fill-0, #9DA98A)" id="Vector_110" />
            <path d={svgPaths.p3ee51580} fill="var(--fill-0, #9DA98A)" id="Vector_111" />
            <path d={svgPaths.p3261dc00} fill="var(--fill-0, #9DA98A)" id="Vector_112" />
            <path d={svgPaths.p3e219880} fill="var(--fill-0, #9DA98A)" id="Vector_113" />
          </g>
          <path d={svgPaths.p1e9d5e00} fill="var(--fill-0, #111111)" id="Vector_114" />
        </g>
      </svg>
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute inset-[67.55%_23.74%_12.25%_24.03%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61.6341 27.15">
        <g id="Group">
          <path d={svgPaths.p28e4c700} fill="var(--fill-0, #BDCAA5)" id="Vector" />
          <path d={svgPaths.p2c4c9d80} fill="var(--fill-0, #111111)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute contents inset-[67.55%_0.11%_-1.41%_0.39%]" data-name="Group">
      <Group42 />
      <Group43 />
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute inset-[58.28%_26.84%_-1.41%_27.37%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54.0319 57.9839">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.pee6f8f0} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p21386180} fill="var(--fill-0, #111111)" id="Vector_2" />
          </g>
          <g id="Group_3">
            <path d={svgPaths.p292d1400} fill="var(--fill-0, white)" id="Vector_3" />
            <path d={svgPaths.p296686c0} fill="var(--fill-0, #111111)" id="Vector_4" />
          </g>
          <path d={svgPaths.p3faeea00} fill="var(--fill-0, #111111)" id="Vector_5" />
          <path d={svgPaths.p5b56000} fill="var(--fill-0, #111111)" id="Vector_6" />
          <g id="Group_4">
            <path d={svgPaths.p28e1dc00} fill="var(--fill-0, white)" id="Vector_7" />
            <path d={svgPaths.p19084700} fill="var(--fill-0, #111111)" id="Vector_8" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents inset-[1.68%_0.11%_-1.41%_0.39%]">
      <Group29 />
      <Group38 />
      <Group41 />
      <Group44 />
    </div>
  );
}

function Image3() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[-2.42px] h-[134.423px] left-[calc(50%-0.33px)] overflow-clip w-[118px]" data-name="Image">
      <Group28 />
    </div>
  );
}

function Image2() {
  return (
    <div className="h-[133px] overflow-clip relative shrink-0 w-[140px]" data-name="Image">
      <Image3 />
    </div>
  );
}

function Frame126() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[0] not-italic relative shrink-0 text-center w-[264px]">
      <div className="flex flex-col font-semibold justify-center min-w-full relative shrink-0 text-[#2d3748] text-[22px] w-[min-content]">
        <p className="leading-[1.8]">最短2週間で納品、</p>
      </div>
      <div className="flex flex-col  justify-center min-w-full relative shrink-0 text-[#62666c] text-[20px] w-[min-content]">
        <p className="leading-[1.8]">時間がない企業様も</p>
      </div>
      <div className="flex flex-col font-semibold justify-center relative shrink-0 text-[#137fec] text-[22px] whitespace-nowrap">
        <p className="leading-[1.8]">安心してご依頼</p>
      </div>
    </div>
  );
}

function Frame142() {
  return (
    <div className="bg-[#eff0f3] content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0">
      <Frame126 />
    </div>
  );
}

function Frame141() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-full items-center justify-end min-h-px min-w-px relative">
      <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#62666c] text-[14px] lg:text-[20px] text-center lg:whitespace-nowrap">
        <p className="leading-[1.4]">制作費用に対する不安...</p>
      </div>
      <Frame142 />
    </div>
  );
}

function Frame139() {
  return (
    <div className="content-stretch flex flex-col lg:flex-row gap-[16px] lg:gap-0 items-stretch lg:items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[16px] items-end min-h-px min-w-px relative w-full max-w-[420px] mx-auto lg:max-w-none lg:mx-0 lg:w-auto lg:flex-[1_0_0]" data-name="reslove">
        <Image />
        <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
          <Frame136 />
        </div>
      </div>
      <div className="content-stretch flex gap-[16px] items-end min-h-px min-w-px relative w-full max-w-[420px] mx-auto lg:max-w-none lg:mx-0 lg:w-auto lg:flex-[1_0_0]" data-name="reslove">
        <Image1 />
        <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
          <Frame137 />
        </div>
      </div>
      <div className="content-stretch flex gap-[16px] items-end min-h-px min-w-px relative w-full max-w-[420px] mx-auto lg:max-w-none lg:mx-0 lg:w-auto lg:flex-[1_0_0]" data-name="reslove">
        <Image2 />
        <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
          <Frame141 />
        </div>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] lg:gap-[54px] items-center lg:items-start relative shrink-0 w-full" data-name="2">
      <Frame18 />
      <Frame139 />
    </div>
  );
}

function Caption2() {
  return (
    <div className="bg-[#edf6ff] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[50px] shrink-0" data-name="caption">
      <div aria-hidden="true" className="absolute border border-[rgba(19,127,236,0.1)] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="flex flex-col font-extrabold justify-center leading-[0] relative shrink-0 text-[#137fec] text-[20px] text-center tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-none">point 03</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center lg:items-start justify-center relative shrink-0 w-full max-w-[636px] lg:max-w-none mx-auto lg:mx-0">
      <Caption2 />
      <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#2d3748] lg:text-[#62666c] font-extrabold text-[24px] lg:text-[32px] text-center lg:text-left w-full lg:w-auto lg:whitespace-nowrap">
        <p className="leading-[1.4]">経営者の「やりたい」が何でも叶う！</p>
      </div>
      <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#62666c] text-[18px] text-center lg:text-left w-full lg:w-auto">
        <p className="leading-[1.7]">
          <span className="lg:hidden">SEO・リスティング広告の戦略設計から運用改善まで対応。顧客獲得・採用強化など目的別に成果を最大化します。</span>
          <span className="hidden lg:inline">SEO・リスティング広告の戦略設計から運用改善まで対応。<br aria-hidden="true" />顧客獲得・採用強化など目的別に成果を最大化します。</span>
        </p>
      </div>
      <div className="hidden lg:flex -translate-y-1/2 absolute flex-col font-thin justify-center leading-[0] opacity-10 right-[233px] text-[#2d3748] text-[200px] top-[calc(50%+0.5px)] translate-x-full whitespace-nowrap">
        <p className="leading-none">03</p>
      </div>
    </div>
  );
}

function Illustration1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[103.435px] left-1/2 top-1/2 w-[103.43px]" data-name="illustration">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 103.43 103.435">
        <g clipPath="url(#clip0_1_3988)" id="illustration">
          <path d={svgPaths.p2fbda200} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #2D3748)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.37436" />
          <path d={svgPaths.p23e159c0} fill="var(--fill-0, #137FEC)" id="Vector_2" stroke="var(--stroke-0, #2D3748)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.37436" />
          <path d={svgPaths.pa5a9a00} id="Vector_3" stroke="var(--stroke-0, #2D3748)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.37436" />
        </g>
        <defs>
          <clipPath id="clip0_1_3988">
            <rect fill="white" height="103.435" width="103.43" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Illustration() {
  return (
    <div className="bg-white relative rounded-[120px] shrink-0 size-[240px]" data-name="illustration">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Illustration1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eff0f3] border-solid inset-0 pointer-events-none rounded-[120px]" />
    </div>
  );
}

function IconText() {
  return (
    <div className="bg-[#f5f8fc] min-h-[342.3999938964844px] min-w-[320px] relative w-full lg:w-auto lg:flex-[1_0_0] lg:aspect-[100/107]" data-name="icon+text">
      <div className="flex flex-col items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-center justify-center min-h-[inherit] min-w-[inherit] p-[20px] relative size-full">
          <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#3e607a] font-semibold text-[24px] text-center whitespace-nowrap">
            <p className="leading-[1.2]">制作</p>
          </div>
          <Illustration />
          <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#3e607a] text-[14px] lg:text-[20px] text-center lg:whitespace-nowrap">
            <p className="leading-[1.6]">
              目的に合わせたWebサイト・LPを
              <br aria-hidden="true" />
              設計・制作します。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Illustration3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[111.836px] left-1/2 top-1/2 w-[122.566px]" data-name="illustration">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 122.566 111.836">
        <g clipPath="url(#clip0_1_4001)" id="illustration">
          <path d={svgPaths.p1c9ab300} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #2D3748)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.37436" />
          <path d={svgPaths.p140b0a00} fill="var(--fill-0, #137FEC)" id="Vector_2" />
          <g id="arrow_upward_alt">
            <mask height="49" id="mask0_1_4001" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="49" x="37" y="20">
              <rect fill="var(--fill-0, #D9D9D9)" height="48" id="Bounding box" width="48" x="37.2832" y="20.4114" />
            </mask>
            <g mask="url(#mask0_1_4001)">
              <path d={svgPaths.p14aee300} fill="var(--fill-0, white)" id="arrow_upward_alt_2" />
            </g>
          </g>
          <path d={svgPaths.p22470e80} fill="var(--fill-0, #137FEC)" id="Vector_3" stroke="var(--stroke-0, #2D3748)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.37436" />
          <path d="M30.835 108.148H91.7296" id="Vector_4" stroke="var(--stroke-0, #2D3748)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.37436" />
        </g>
        <defs>
          <clipPath id="clip0_1_4001">
            <rect fill="white" height="111.836" width="122.566" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Illustration2() {
  return (
    <div className="bg-white relative rounded-[120px] shrink-0 size-[240px]" data-name="illustration">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Illustration3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eff0f3] border-solid inset-0 pointer-events-none rounded-[120px]" />
    </div>
  );
}

function IconText1() {
  return (
    <div className="bg-[#f5f8fc] min-h-[342.3999938964844px] min-w-[320px] relative w-full lg:w-auto lg:flex-[1_0_0] lg:aspect-[100/107]" data-name="icon+text">
      <div className="flex flex-col items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-center justify-center min-h-[inherit] min-w-[inherit] p-[20px] relative size-full">
          <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#3e607a] font-semibold text-[24px] text-center whitespace-nowrap">
            <p className="leading-[1.2]">公開</p>
          </div>
          <Illustration2 />
          <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#3e607a] text-[14px] lg:text-[20px] text-center lg:whitespace-nowrap">
            <p className="leading-[1.6]">
              品質チェックを経て
              <br aria-hidden="true" />
              迅速に本番公開します。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute inset-[4.83%_2.21%_7.73%_57.75%]" data-name="Group">
      <div className="absolute inset-[-5.53%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74.0758 74.0753">
          <g id="Group">
            <path d={svgPaths.p321fb440} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #137FEC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.37436" />
            <path d={svgPaths.p1a0f8480} id="Vector_2" stroke="var(--stroke-0, #137FEC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.37436" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute inset-[31.85%_24.37%_4.83%_2.21%]" data-name="Group">
      <div className="absolute inset-[-7.63%_-3.01%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 129.7 55.671">
          <g id="Group">
            <path d={svgPaths.p398187f0} id="Vector" stroke="var(--stroke-0, #137FEC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.37436" />
            <path d={svgPaths.p1fd64b80} id="Vector_2" stroke="var(--stroke-0, #137FEC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.37436" />
            <path d={svgPaths.p2961dd00} id="Vector_3" stroke="var(--stroke-0, #137FEC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.37436" />
            <path d={svgPaths.p27dc1500} id="Vector_4" stroke="var(--stroke-0, #137FEC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.37436" />
            <path d={svgPaths.p2bb52f80} id="Vector_5" stroke="var(--stroke-0, #137FEC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.37436" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Illustration5() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[76.282px] left-1/2 overflow-clip top-1/2 w-[166.607px]" data-name="illustration">
      <Group45 />
      <Group46 />
    </div>
  );
}

function Illustration4() {
  return (
    <div className="bg-white relative rounded-[120px] shrink-0 size-[240px]" data-name="illustration">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Illustration5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eff0f3] border-solid inset-0 pointer-events-none rounded-[120px]" />
    </div>
  );
}

function IconText2() {
  return (
    <div className="bg-[rgba(19,127,236,0.1)] min-h-[342.3999938964844px] min-w-[320px] relative w-full lg:w-auto lg:flex-[1_0_0] lg:aspect-[100/107]" data-name="icon+text">
      <div className="flex flex-col items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-center justify-center min-h-[inherit] min-w-[inherit] p-[20px] relative size-full">
          <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] font-semibold text-[24px] text-center whitespace-nowrap">
            <p className="leading-[1.2]">集客・運用</p>
          </div>
          <Illustration4 />
          <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[14px] lg:text-[20px] text-center lg:whitespace-nowrap">
            <p className="leading-[1.6]">
              SEO・広告の運用改善で
              <br aria-hidden="true" />
              成果を継続的に最大化します。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col lg:flex-row gap-[16px] lg:gap-[54px] items-stretch lg:items-center relative shrink-0 w-full">
      <IconText />
      <IconText1 />
      <IconText2 />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] lg:gap-[54px] items-center lg:items-start relative shrink-0 w-full" data-name="3">
      <Frame19 />
      <Frame41 />
    </div>
  );
}

function Caption3() {
  return (
    <div className="bg-[#edf6ff] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[50px] shrink-0" data-name="caption">
      <div aria-hidden="true" className="absolute border border-[rgba(19,127,236,0.1)] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="flex flex-col font-extrabold justify-center leading-[0] relative shrink-0 text-[#137fec] text-[20px] text-center tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-none">point 04</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center lg:items-end justify-center relative shrink-0 w-full max-w-[636px] lg:max-w-none mx-auto lg:mx-0">
      <Caption3 />
      <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#2d3748] lg:text-[#62666c] font-extrabold text-[24px] lg:text-[32px] text-center lg:text-right w-full lg:w-auto lg:whitespace-nowrap">
        <p className="leading-[1.4]">充実したオプション</p>
      </div>
      <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#62666c] text-[18px] text-center lg:text-right w-full lg:w-auto">
        <p className="lg:hidden leading-[1.7]">
          リソース・知識がなくても運営できるよう、多彩なオプションを用意しております。
        </p>
        <div className="hidden lg:block">
          <p className="leading-[1.7] mb-0">リソース・知識がなくても運営できるよう、</p>
          <p className="leading-[1.7]">多彩なオプションを用意しております。</p>
        </div>
      </div>
      <div className="hidden lg:flex -translate-y-1/2 absolute flex-col font-thin justify-center leading-[0] left-0 opacity-10 text-[#2d3748] text-[200px] top-[calc(50%+0.49px)] whitespace-nowrap">
        <p className="leading-none">04</p>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[54px]" data-name="icon">
        <div className="absolute inset-[4.17%_8.33%_12.5%_8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.5px_-2.25px] mask-size-[54px_54px]" style={{ maskImage: `url('${imgDrafts}')` }} data-name="drafts">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
            <path d={svgPaths.pa24080} fill="var(--fill-0, white)" id="drafts" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Option() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-center p-[20px] relative rounded-[16px] shrink-0 size-[200px]" data-name="option">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(19,127,236,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-[#137fec] content-stretch flex flex-col items-center justify-center p-[16px] relative rounded-[100px] shrink-0 size-[100px]" data-name="option">
        <Frame42 />
      </div>
      <div className="flex flex-col font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#2d3748] text-[20px] text-center w-[min-content]">
        <p className="leading-[1.8]">メール設定</p>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[54px]" data-name="icon">
        <div className="absolute inset-[12.5%_12.5%_8.33%_12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-6.75px_-6.75px] mask-size-[54px_54px]" style={{ maskImage: `url('${imgDrafts}')` }} data-name="dns">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.5 42.75">
            <path d={svgPaths.p308ffd00} fill="var(--fill-0, white)" id="dns" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Option1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-center p-[20px] relative rounded-[16px] shrink-0 size-[200px]" data-name="option">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(19,127,236,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-[#137fec] content-stretch flex flex-col items-center justify-center p-[16px] relative rounded-[100px] shrink-0 size-[100px]" data-name="option">
        <Frame44 />
      </div>
      <div className="flex flex-col font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#2d3748] text-[20px] text-center w-[min-content]">
        <p className="leading-[1.8]">サーバー設定</p>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[54px]" data-name="icon">
        <div className="absolute inset-[12.5%_8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.5px_-6.75px] mask-size-[54px_54px]" style={{ maskImage: `url('${imgDrafts}')` }} data-name="domain">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 40.5">
            <path d={svgPaths.p13214040} fill="var(--fill-0, white)" id="domain" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Option2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-center p-[20px] relative rounded-[16px] shrink-0 size-[200px]" data-name="option">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(19,127,236,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-[#137fec] content-stretch flex flex-col items-center justify-center p-[16px] relative rounded-[100px] shrink-0 size-[100px]" data-name="option">
        <Frame45 />
      </div>
      <div className="flex flex-col font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#2d3748] text-[20px] text-center w-[min-content]">
        <p className="leading-[1.8]">ドメイン取得代行</p>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[54px]" data-name="icon">
        <div className="absolute inset-[8.33%_4.17%_8.33%_4.12%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.227px_-4.5px] mask-size-[54px_54px]" style={{ maskImage: `url('${imgDrafts}')` }} data-name="handshake">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.5225 45">
            <path d={svgPaths.ped8aa00} fill="var(--fill-0, white)" id="handshake" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Option3() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-center p-[20px] relative rounded-[16px] shrink-0 size-[200px]" data-name="option">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(19,127,236,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-[#137fec] content-stretch flex flex-col items-center justify-center p-[16px] relative rounded-[100px] shrink-0 size-[100px]" data-name="option">
        <Frame46 />
      </div>
      <div className="flex flex-col font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#2d3748] text-[20px] text-center w-[min-content]">
        <p className="leading-[1.8]">広告運用代行</p>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[54px]" data-name="icon">
        <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.5px_-4.5px] mask-size-[54px_54px]" style={{ maskImage: `url('${imgDrafts}')` }} data-name="g_translate">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
            <path d={svgPaths.pb67f300} fill="var(--fill-0, white)" id="g_translate" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Option4() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-center p-[20px] relative rounded-[16px] shrink-0 size-[200px]" data-name="option">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(19,127,236,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-[#137fec] content-stretch flex flex-col items-center justify-center p-[16px] relative rounded-[100px] shrink-0 size-[100px]" data-name="option">
        <Frame47 />
      </div>
      <div className="flex flex-col font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#2d3748] text-[20px] text-center w-[min-content]">
        <p className="leading-[1.8]">翻訳</p>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[54px]" data-name="icon">
        <div className="absolute inset-[4.17%_4.17%_12.5%_4.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.25px_-2.25px] mask-size-[54px_54px]" style={{ maskImage: `url('${imgDrafts}')` }} data-name="add_a_photo">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.5 45">
            <path d={svgPaths.pc8f2680} fill="var(--fill-0, white)" id="add_a_photo" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Option5() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-center p-[20px] relative rounded-[16px] shrink-0 size-[200px]" data-name="option">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(19,127,236,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-[#137fec] content-stretch flex flex-col items-center justify-center p-[16px] relative rounded-[100px] shrink-0 size-[100px]" data-name="option">
        <Frame48 />
      </div>
      <div className="flex flex-col font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#2d3748] text-[20px] text-center w-[min-content]">
        <p className="leading-[1.8]">写真/動画撮影</p>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[54px]" data-name="icon">
        <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.5px_-4.5px] mask-size-[54px_54px]" style={{ maskImage: `url('${imgDrafts}')` }} data-name="chat">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
            <path d={svgPaths.p14dfc780} fill="var(--fill-0, white)" id="chat" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Option6() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-center p-[20px] relative rounded-[16px] shrink-0 size-[200px]" data-name="option">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(19,127,236,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-[#137fec] content-stretch flex flex-col items-center justify-center p-[16px] relative rounded-[100px] shrink-0 size-[100px]" data-name="option">
        <Frame49 />
      </div>
      <div className="flex flex-col font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#2d3748] text-[20px] text-center w-[min-content]">
        <p className="leading-[1.8]">チャットサポート</p>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[54px]" data-name="icon">
        <div className="absolute inset-[16.67%_4.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.25px_-9px] mask-size-[54px_54px]" style={{ maskImage: `url('${imgDrafts}')` }} data-name="cloud_upload">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.5 36">
            <path d={svgPaths.p33713100} fill="var(--fill-0, white)" id="cloud_upload" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Option7() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-center p-[20px] relative rounded-[16px] shrink-0 size-[200px]" data-name="option">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(19,127,236,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-[#137fec] content-stretch flex flex-col items-center justify-center p-[16px] relative rounded-[100px] shrink-0 size-[100px]" data-name="option">
        <Frame50 />
      </div>
      <div className="flex flex-col font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#2d3748] text-[20px] text-center w-[min-content]">
        <p className="leading-[1.8]">バックアップ</p>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[54px]" data-name="icon">
        <div className="absolute inset-[4.17%_16.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-9px_-2.25px] mask-size-[54px_54px]" style={{ maskImage: `url('${imgDrafts}')` }} data-name="autorenew">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 49.5">
            <path d={svgPaths.p3083fe00} fill="var(--fill-0, white)" id="autorenew" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Option8() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-center p-[20px] relative rounded-[16px] shrink-0 size-[200px]" data-name="option">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(19,127,236,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-[#137fec] content-stretch flex flex-col items-center justify-center p-[16px] relative rounded-[100px] shrink-0 size-[100px]" data-name="option">
        <Frame51 />
      </div>
      <div className="flex flex-col font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#2d3748] text-[20px] text-center w-[min-content]">
        <p className="leading-[1.8]">アップデート代行</p>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[54px]" data-name="icon">
        <div className="absolute inset-[8.33%_4.17%_8.33%_16.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-9px_-4.5px] mask-size-[54px_54px]" style={{ maskImage: `url('${imgDrafts}')` }} data-name="edit_document">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.75 45">
            <path d={svgPaths.p1debaf00} fill="var(--fill-0, white)" id="edit_document" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Option9() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-center p-[20px] relative rounded-[16px] shrink-0 size-[200px]" data-name="option">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(19,127,236,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-[#137fec] content-stretch flex flex-col items-center justify-center p-[16px] relative rounded-[100px] shrink-0 size-[100px]" data-name="option">
        <Frame52 />
      </div>
      <div className="flex flex-col font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#2d3748] text-[20px] text-center w-[min-content]">
        <p className="leading-[1.8]">テキスト修正</p>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[54px]" data-name="icon">
        <div className="absolute inset-[8.33%_4.17%_4.17%_12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-6.75px_-4.5px] mask-size-[54px_54px]" style={{ maskImage: `url('${imgDrafts}')` }} data-name="play_lesson">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 47.25">
            <path d={svgPaths.p19fcf600} fill="var(--fill-0, white)" id="play_lesson" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Option10() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-center p-[20px] relative rounded-[16px] shrink-0 size-[200px]" data-name="option">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(19,127,236,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-[#137fec] content-stretch flex flex-col items-center justify-center p-[16px] relative rounded-[100px] shrink-0 size-[100px]" data-name="option">
        <Frame53 />
      </div>
      <div className="flex flex-col font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#2d3748] text-[20px] text-center w-[min-content]">
        <p className="leading-[1.8]">操作レクチャー</p>
      </div>
    </div>
  );
}

function Group47() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+3.25px)] top-[calc(50%+7px)]">
      <div className="-translate-y-1/2 absolute flex h-[64.546px] items-center justify-center right-[108.44px] top-[calc(50%-12.73px)] w-[86.059px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[116.79deg] skew-x-[0.12deg]">
          <div className="h-[80.156px] relative w-[32.011px]" data-name="illust">
            <div className="absolute inset-[-1.87%_-4.39%_-1.87%_-4.69%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.9158 83.1566">
                <path d={svgPaths.p2d9f2700} id="illust" stroke="var(--stroke-0, #064B82)" strokeDasharray="2 6" strokeLinecap="round" strokeWidth="3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-[-1px] size-[120.137px] top-[11.93px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120.137 120.137">
          <path d={svgPaths.p23d27600} fill="var(--fill-0, #FFE347)" id="Vector" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[54.568px] items-center justify-center left-[141.86px] top-[71.08px] w-[99.362px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="flex-none rotate-[3.99deg] skew-x-[-0.02deg]">
          <div className="flex flex-col font-['Inter:Black','Noto_Sans_JP:Black',sans-serif] font-black h-[47.991px] justify-center leading-[0] not-italic relative text-[#2d3748] text-[20px] text-center tracking-[-1.2px] w-[96.239px]">
            <p className="leading-[1.2] mb-0">ここまで</p>
            <p className="leading-[1.2]">やります！</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Deco() {
  return (
    <div className="shrink-0 w-[200px] aspect-[402/265] relative" data-name="deco">
      <img alt="ここまでやります" src={imgDeco} className="absolute inset-0 size-full object-contain" />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start justify-center relative shrink-0 w-full">
      <Option />
      <Option1 />
      <Option2 />
      <Option3 />
      <Option4 />
      <Option5 />
      <Option6 />
      <Option7 />
      <Option8 />
      <Option9 />
      <Option10 />
      <Deco />
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex flex-col gap-[54px] items-center lg:items-start relative shrink-0 w-full" data-name="4">
      <Frame20 />
      <Frame43 />
    </div>
  );
}

function Contaienr() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] lg:gap-[100px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="contaienr">
      <Tlt />
      <Component />
      <Component1 />
      <Component2 />
      <Component3 />
    </div>
  );
}

function Features() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip px-[16px] lg:px-0 py-[60px] lg:py-[100px] relative shrink-0 w-full" data-name="features">
      <Contaienr />
    </div>
  );
}

function Tlt1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center min-h-px min-w-px relative w-full lg:flex-[1_0_0]" data-name="tlt">
      <div className="flex flex-col font-bold justify-center leading-[0] relative shrink-0 text-[#137fec] text-[18px] lg:text-[28px] text-center uppercase whitespace-nowrap">
        <p className="leading-[1.3]">REASON</p>
      </div>
      <div className="bg-[#137fec] h-[8px] shrink-0 w-[120px]" />
      <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#2d3748] font-extrabold text-[28px] lg:text-[40px] text-center w-full">
        <p className="leading-[1.4]">成果が出る５つの理由</p>
      </div>
      <div className="flex flex-col font-light justify-center leading-[0] not-italic relative shrink-0 text-[#62666c] text-[14px] lg:text-[20px] text-center w-full">
        <p className="leading-[1.8] lg:hidden">Webサイト制作はゴールではありません。 事業の成長を見据えた、失敗しないための重要なチェックポイントをご紹介します。</p>
        <div className="hidden lg:block">
          <p className="leading-[1.8] mb-0">Webサイト制作はゴールではありません。 事業の成長を見据えた、</p>
          <p className="leading-[1.8]">失敗しないための重要なチェックポイントをご紹介します。</p>
        </div>
      </div>
    </div>
  );
}

function ReasonContainer({ y, fills }: { y: MotionValue<string>, fills: MotionValue<number>[] }) {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col h-screen items-center max-h-screen min-h-px min-w-px overflow-hidden relative" data-name="reason_container">
      <div aria-hidden="true" className="absolute border border-[#f5f8fc] border-solid inset-0 pointer-events-none z-10" />
      <motion.div style={{ y }} className="content-stretch flex flex-col w-full will-change-transform">
      <ReasonCard fill={fills[0]} bg="#ffffff" number="01">
        <div className="flex flex-col  justify-center min-w-full not-italic relative shrink-0 text-[#2d3748] font-extrabold text-[24px] lg:text-[40px] text-left w-full">
          <p>
            <span className="leading-[1.4]">目的を「作る前」に</span>
            <span className="leading-[1.4] not-italic text-[#137fec]">言語化</span>
            <span className="leading-[1.4]">する</span>
          </p>
        </div>
        <div className="flex flex-col  justify-center min-w-full not-italic relative shrink-0 text-[#2d3748] text-[16px] lg:text-[22px] text-left w-full font-light">
          <p className="leading-[1.7]">
            会社紹介か、問い合わせ獲得か、採用強化か。
            <br aria-hidden="true" />
            目的が曖昧なまま作ると、成果の出ないサイトに。
          </p>
        </div>
      </ReasonCard>
      <ReasonCard fill={fills[1]} bg="#e9f3fd" number="02">
        <div className="flex flex-col  justify-center min-w-full not-italic relative shrink-0 text-[#2d3748] font-extrabold text-[24px] lg:text-[40px] text-left w-full">
          <p>
            <span className="leading-[1.4] text-[#137fec]">ユーザー視点</span>
            <span className="leading-[1.4] not-italic">を徹底する</span>
          </p>
        </div>
        <div className="flex flex-col  justify-center min-w-full not-italic relative shrink-0 text-[#2d3748] text-[16px] lg:text-[22px] text-left w-full font-light">
          <p className="leading-[1.7] mb-0">「誰にでも向けたサイト」は、誰にも刺さらない。</p>
          <p className="leading-[1.7]">ターゲットを明確にすることで、文章・デザイン・導線が一気にブレなくなります。</p>
        </div>
      </ReasonCard>
      <ReasonCard fill={fills[2]} bg="#ffffff" number="03">
        <div className="flex flex-col  justify-center min-w-full not-italic relative shrink-0 text-[#2d3748] font-extrabold text-[24px] lg:text-[40px] text-left w-full">
          <p>
            <span className="leading-[1.4] not-italic">デザインより</span>
            <span className="leading-[1.4] text-[#137fec]">伝わる構成</span>
            <span className="leading-[1.4] not-italic">を優先</span>
          </p>
        </div>
        <div className="flex flex-col  justify-center min-w-full not-italic relative shrink-0 text-[#2d3748] text-[16px] lg:text-[22px] text-left w-full font-light">
          <p className="leading-[1.7]">見た目が良くても、強みが伝わらない、行動（問い合わせ）に繋がらない、これでは意味がありません。</p>
        </div>
      </ReasonCard>
      <ReasonCard fill={fills[3]} bg="#e9f3fd" number="04">
        <div className="flex flex-col  justify-center min-w-full not-italic relative shrink-0 text-[#2d3748] font-extrabold text-[24px] lg:text-[40px] text-left w-full">
          <p>
            <span className="leading-[1.4] not-italic">公開後の</span>
            <span className="leading-[1.4] text-[#137fec]">運用を前提</span>
            <span className="leading-[1.4] not-italic">に設計する</span>
          </p>
        </div>
        <div className="flex flex-col  justify-center min-w-full not-italic relative shrink-0 text-[#2d3748] text-[16px] lg:text-[22px] text-left w-full font-light">
          <p className="leading-[1.7] mb-0">更新しづらいサイトは、必ず止まります。</p>
          <p className="leading-[1.7]">自社で更新できる仕組みや、将来の拡張を考えた設計が重要です。</p>
        </div>
      </ReasonCard>
      <ReasonCard fill={fills[4]} bg="#ffffff" number="05">
        <div className="flex flex-col justify-center min-w-full not-italic relative shrink-0 font-extrabold text-[#137fec] text-[40px] text-left w-full">
          <p className="leading-[1.4]">「作って終わり」にしない</p>
        </div>
        <div className="flex flex-col  justify-center min-w-full not-italic relative shrink-0 text-[#2d3748] text-[16px] lg:text-[22px] text-left w-full font-light">
          <p className="leading-[1.7] mb-0">ホームページ制作はスタート地点。</p>
          <p className="leading-[1.7]">公開後の改善・集客・活用まで考えてこそ、投資価値のあるサイトになります。</p>
        </div>
      </ReasonCard>
      </motion.div>
    </div>
  );
}

function ReasonCard({ fill, bg, number, children }: { fill: MotionValue<number>, bg: string, number: string, children: React.ReactNode }) {
  return (
    <div className="h-screen relative shrink-0 w-full overflow-hidden" data-name="reason">
      <motion.div aria-hidden="true" className="absolute inset-0 origin-left will-change-transform" style={{ scaleX: fill, backgroundColor: bg }} />
      <div className="relative h-full">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center leading-[0] mix-blend-multiply px-[16px] lg:p-[20px] relative size-full">
            <div className="flex flex-col font-thin justify-center relative shrink-0 text-[#2d3748] text-[60px] lg:text-[100px] whitespace-nowrap">
              <p className="leading-none">{number}</p>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function ReasonCardStatic({ number, bg, children }: { number: string; bg: string; children: React.ReactNode }) {
  return (
    <div className={`${bg} content-stretch flex flex-col items-start justify-center p-[20px] relative shrink-0 w-full`} data-name="reason">
      <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 text-[#2d3748] w-full">
        <div className="flex flex-col font-thin justify-center relative shrink-0 text-[50px] whitespace-nowrap">
          <p className="leading-none">{number}</p>
        </div>
        {children}
      </div>
    </div>
  );
}

function ReasonMobile() {
  return (
    <div className="lg:hidden bg-[#f5f8fc] content-stretch flex flex-col gap-[80px] items-center px-[16px] py-[64px] relative w-full" data-name="Reason">
      <Tlt1 />
      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="reason_container">
        <ReasonCardStatic number="01" bg="bg-white">
          <div className="flex flex-col font-extrabold justify-center min-w-full not-italic relative shrink-0 text-[#2d3748] w-[min-content]">
            <p className="text-[24px]">
              <span className="leading-[1.4]">目的を「作る前」に</span>
              <span className="leading-[1.4] text-[#137fec]">言語化</span>
              <span className="leading-[1.4]">する</span>
            </p>
          </div>
          <div className="flex flex-col font-light justify-center min-w-full not-italic relative shrink-0 text-[#2d3748] text-[16px] w-[min-content]">
            <p className="leading-[1.7]">
              会社紹介か、問い合わせ獲得か、採用強化か。
              <br aria-hidden="true" />
              目的が曖昧なまま作ると、成果の出ないサイトに。
            </p>
          </div>
        </ReasonCardStatic>
        <ReasonCardStatic number="02" bg="bg-[#e9f3fd]">
          <div className="flex flex-col font-extrabold justify-center min-w-full not-italic relative shrink-0 text-[#2d3748] w-[min-content]">
            <p className="text-[24px]">
              <span className="leading-[1.4] text-[#137fec]">ユーザー視点</span>
              <span className="leading-[1.4]">を徹底する</span>
            </p>
          </div>
          <div className="flex flex-col font-light justify-center min-w-full not-italic relative shrink-0 text-[#2d3748] text-[16px] w-[min-content]">
            <p className="leading-[1.7] mb-0">「誰にでも向けたサイト」は、誰にも刺さらない。</p>
            <p className="leading-[1.7]">ターゲットを明確にすることで、文章・デザイン・導線が一気にブレなくなります。</p>
          </div>
        </ReasonCardStatic>
        <ReasonCardStatic number="03" bg="bg-white">
          <div className="flex flex-col font-extrabold justify-center min-w-full not-italic relative shrink-0 text-[#2d3748] w-[min-content]">
            <p className="text-[24px]">
              <span className="leading-[1.4]">デザインより</span>
              <span className="leading-[1.4] text-[#137fec]">伝わる構成</span>
              <span className="leading-[1.4]">を優先</span>
            </p>
          </div>
          <div className="flex flex-col font-light justify-center min-w-full not-italic relative shrink-0 text-[#2d3748] text-[16px] w-[min-content]">
            <p className="leading-[1.7]">見た目が良くても、強みが伝わらない、行動（問い合わせ）に繋がらない、これでは意味がありません。</p>
          </div>
        </ReasonCardStatic>
        <ReasonCardStatic number="04" bg="bg-[#e9f3fd]">
          <div className="flex flex-col font-extrabold justify-center min-w-full not-italic relative shrink-0 text-[#2d3748] w-[min-content]">
            <p className="text-[24px]">
              <span className="leading-[1.4]">公開後の</span>
              <span className="leading-[1.4] text-[#137fec]">運用を前提</span>
              <span className="leading-[1.4]">に設計する</span>
            </p>
          </div>
          <div className="flex flex-col font-light justify-center min-w-full not-italic relative shrink-0 text-[#2d3748] text-[16px] w-[min-content]">
            <p className="leading-[1.7] mb-0">更新しづらいサイトは、必ず止まります。</p>
            <p className="leading-[1.7]">自社で更新できる仕組みや、将来の拡張を考えた設計が重要です。</p>
          </div>
        </ReasonCardStatic>
        <ReasonCardStatic number="05" bg="bg-white">
          <div className="flex flex-col font-extrabold justify-center min-w-full not-italic relative shrink-0 text-[#137fec] w-[min-content]">
            <p className="leading-[1.4] text-[24px]">「作って終わり」にしない</p>
          </div>
          <div className="flex flex-col font-light justify-center min-w-full not-italic relative shrink-0 text-[#2d3748] text-[16px] w-[min-content]">
            <p className="leading-[1.7] mb-0">ホームページ制作はスタート地点。</p>
            <p className="leading-[1.7]">公開後の改善・集客・活用まで考えてこそ、投資価値のあるサイトになります。</p>
          </div>
        </ReasonCardStatic>
      </div>
    </div>
  );
}

function ReasonDesktop() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const y = useTransform(smooth, [0, 1], ["0%", "-80%"]);

  const fill1 = useTransform(smooth, [0, 0.05], [0, 1]);
  const fill2 = useTransform(smooth, [0.05, 0.25], [0, 1]);
  const fill3 = useTransform(smooth, [0.25, 0.5], [0, 1]);
  const fill4 = useTransform(smooth, [0.5, 0.75], [0, 1]);
  const fill5 = useTransform(smooth, [0.75, 1], [0, 1]);
  const fills = [fill1, fill2, fill3, fill4, fill5];

  return (
    <div ref={ref} data-name="Reason" className="hidden lg:block relative w-full" style={{ height: "500vh" }}>
      <div className="sticky top-0 h-screen bg-[#f5f8fc] content-center flex flex-wrap gap-0 items-center overflow-clip w-full">
        <Tlt1 />
        <ReasonContainer y={y} fills={fills} />
      </div>
    </div>
  );
}

function Reason() {
  return (
    <>
      <ReasonMobile />
      <ReasonDesktop />
    </>
  );
}

function Group48() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[960px] top-[calc(50%-41.5px)] opacity-20 lg:opacity-100 pointer-events-none">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 960 960">
        <g id="Group 22">
          <circle cx="480" cy="480" id="Ellipse 6" r="479.4" stroke="var(--stroke-0, white)" strokeWidth="1.2" />
          <circle cx="480" cy="480" fill="var(--fill-0, white)" id="Ellipse 7" opacity="0.1" r="419.4" stroke="var(--stroke-0, white)" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col  items-center justify-center leading-[normal] min-h-px min-w-px not-italic relative text-white">
      <p className="relative shrink-0 font-semibold text-[23px] tracking-[0.46px] w-full">無料資料を受け取る</p>
      <p className="relative shrink-0 text-[16px] tracking-[0.32px] w-full">1分で完了 · 登録不要</p>
    </div>
  );
}

function ArrowForward1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow_forward">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_forward">
          <mask height="24" id="mask0_1_3970" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_1_3970)">
            <path d={svgPaths.p54e7200} fill="var(--fill-0, #FF4343)" id="arrow_forward_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ArrowCircle2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[56px]" data-name="Arrow Circle">
      <ArrowForward1 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col  h-[29px] items-center justify-center leading-[normal] min-h-px min-w-px not-italic relative text-[#00b5ad]">
      <p className="relative shrink-0 font-semibold text-[17.5px] tracking-[0.35px] w-full">今すぐ無料相談する</p>
      <p className="relative shrink-0 text-[10.5px] tracking-[0.21px] w-full">24時間受付対応 · 全国対応可能</p>
    </div>
  );
}

function ArrowCircle3() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="Arrow Circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g id="Arrow Circle">
          <rect fill="var(--fill-0, #00B5AD)" height="56" rx="28" width="56" />
          <path d={svgPaths.p3569c700} fill="var(--fill-0, white)" id="arrow_forward" />
        </g>
      </svg>
    </div>
  );
}

function Cta1() {
  return (
    <a href="tel:0120-269-046" className="bg-white relative rounded-[999px] block no-underline w-full max-w-[300px]" data-name="cta">
      <div className="content-stretch flex items-center justify-between overflow-clip pl-[28px] pr-[14px] py-[14px] relative rounded-[inherit] size-full">
        <Frame84 />
        <ArrowCircle3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#00b5ad] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </a>
  );
}

function Frame86() {
  return (
    <div className="content-center flex flex-wrap gap-[16px] items-center justify-center relative shrink-0 w-full">
      <div className="max-h-[100px] min-h-[80px] relative rounded-[999px] shadow-[0px_2px_8px_0px_rgba(158,36,36,0.16),0px_4px_16px_0px_rgba(158,36,36,0.08)] w-full max-w-[400px] min-w-[320px] lg:flex-[1_0_0]" data-name="cta">
        <div aria-hidden="true" className="absolute bg-[#ff4343] inset-0 pointer-events-none rounded-[999px]" />
        <div className="flex flex-row items-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-between max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] pl-[32px] pr-[16px] py-[16px] relative size-full">
            <Frame83 />
            <ArrowCircle2 />
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_2px_2px_4px_0px_rgba(255,255,255,0.24)]" />
      </div>
      <Cta1 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center max-w-[700px] min-w-[320px] relative shrink-0 w-full">
      <div className="font-extrabold not-italic relative shrink-0 text-center text-white tracking-[0.56px] w-full">
        {/* Mobile: 3 lines with \/ on yellow phrase */}
        <div className="lg:hidden flex flex-col items-center">
          <p className="leading-[1.3] text-[24px]">まずは気軽に</p>
          <p className="leading-[1.3] text-[#ffe347] text-[32px]">\お見積もり・ご相談/</p>
          <p className="leading-[1.3] text-[24px]">ください</p>
        </div>
        {/* Desktop: single line, yellow phrase larger inline */}
        <p className="hidden lg:block leading-[1.3] text-[28px]">
          まずは気軽に
          <span className="text-[#ffe347] text-[40px]">お見積もり・ご相談</span>
          ください
        </p>
      </div>
      <Frame86 />
    </div>
  );
}

function Tlt2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="tlt">
      <div className="flex flex-col font-bold justify-center leading-[0] relative shrink-0 text-[#137fec] text-[28px] text-center uppercase whitespace-nowrap">
        <p className="leading-[1.3]">Case Studies</p>
      </div>
      <div className="bg-[#137fec] h-[8px] shrink-0 w-[120px]" />
      <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#2d3748] font-extrabold text-[28px] lg:text-[40px] text-center lg:whitespace-nowrap">
        <p className="leading-[1.4]">制作実績</p>
      </div>
      <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#62666c] text-[14px] lg:text-[20px] text-center lg:whitespace-nowrap">
        <p className="leading-[1.8] mb-0">私たちは、小規模ビジネスやフリーランスの成長を支える、</p>
        <p className="leading-[1.8]">効果的で魅力的なウェブサイトを制作しています。</p>
      </div>
    </div>
  );
}

function Pc() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[235px]" data-name="pc">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="aspect-[470/400] relative shrink-0 w-full" data-name="vision_hp_case_01 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVisionHpCase011} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Sp() {
  return (
    <div className="bg-white content-stretch flex items-center overflow-clip relative shrink-0" data-name="sp">
      <div className="h-[168px] relative shrink-0 w-[84px]" data-name="vision_hp_case_sp_02 1">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgVisionHpCaseSp021} />
      </div>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex items-start justify-between relative self-stretch shrink-0 w-[327px]">
      <Pc />
      <Sp />
    </div>
  );
}

function Image4() {
  return (
    <div className="content-stretch flex h-[168px] items-start justify-center relative shrink-0" data-name="Image">
      <Frame93 />
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#edf6ff] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="tag">
      <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[12px] tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[normal]">サービスサイト</p>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <Tag />
      <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#62666c] text-[12px] tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[normal]">美容・健康</p>
      </div>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame55 />
      <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#363c4d] text-[16px] text-center w-full">
        <p className="leading-[1.7]">埼玉県 ピラティス E様</p>
      </div>
    </div>
  );
}

function Pc1() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[235px]" data-name="pc">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="aspect-[470/400] relative shrink-0 w-full" data-name="vision_hp_case_01 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVisionHpCase12} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Sp1() {
  return (
    <div className="bg-white content-stretch flex items-center overflow-clip relative shrink-0" data-name="sp">
      <div className="h-[168px] relative shrink-0 w-[84px]" data-name="vision_hp_case_sp_02 1">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgVisionHpCaseSp22} />
      </div>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex items-start justify-between relative self-stretch shrink-0 w-[327px]">
      <Pc1 />
      <Sp1 />
    </div>
  );
}

function Image5() {
  return (
    <div className="content-stretch flex h-[168px] items-start justify-center relative shrink-0" data-name="Image">
      <Frame94 />
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[#edf6ff] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="tag">
      <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[12px] tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[normal]">コーポレートサイト</p>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <Tag1 />
      <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#62666c] text-[12px] tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[normal]">製造業・工業</p>
      </div>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame57 />
      <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#363c4d] text-[16px] text-center w-full">
        <p className="leading-[1.7]">茨城県 機器設備販売 R様</p>
      </div>
    </div>
  );
}

function Pc2() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[235px]" data-name="pc">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="aspect-[470/400] relative shrink-0 w-full" data-name="vision_hp_case_01 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVisionHpCase13} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Sp2() {
  return (
    <div className="bg-white content-stretch flex items-center overflow-clip relative shrink-0" data-name="sp">
      <div className="h-[168px] relative shrink-0 w-[84px]" data-name="vision_hp_case_sp_02 1">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgVisionHpCaseSp23} />
      </div>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex items-start justify-between relative self-stretch shrink-0 w-[327px]">
      <Pc2 />
      <Sp2 />
    </div>
  );
}

function Image6() {
  return (
    <div className="content-stretch flex h-[168px] items-start justify-center relative shrink-0" data-name="Image">
      <Frame96 />
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[#edf6ff] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="tag">
      <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[12px] tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[normal]">コーポレートサイト</p>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <Tag2 />
      <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#62666c] text-[12px] tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[normal]">建設業</p>
      </div>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame58 />
      <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#363c4d] text-[16px] text-center w-full">
        <p className="leading-[1.7]">東京都 デザイン設計・施工 I様</p>
      </div>
    </div>
  );
}

function Pc3() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[235px]" data-name="pc">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="aspect-[470/400] relative shrink-0 w-full" data-name="vision_hp_case_01 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVisionHpCase14} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Sp3() {
  return (
    <div className="bg-white content-stretch flex items-center overflow-clip relative shrink-0" data-name="sp">
      <div className="h-[168px] relative shrink-0 w-[84px]" data-name="vision_hp_case_sp_02 1">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgVisionHpCaseSp24} />
      </div>
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex items-start justify-between relative self-stretch shrink-0 w-[327px]">
      <Pc3 />
      <Sp3 />
    </div>
  );
}

function Image7() {
  return (
    <div className="content-stretch flex h-[168px] items-start justify-center relative shrink-0" data-name="Image">
      <Frame97 />
    </div>
  );
}

function Tag3() {
  return (
    <div className="bg-[#edf6ff] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="tag">
      <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[12px] tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[normal]">サービスサイト</p>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <Tag3 />
      <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#62666c] text-[12px] tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[normal]">教育・カルチャー</p>
      </div>
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame59 />
      <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#363c4d] text-[16px] text-center w-full">
        <p className="leading-[1.7]">東京都 書道教室 K様</p>
      </div>
    </div>
  );
}

function Pc4() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[235px]" data-name="pc">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="aspect-[470/400] relative shrink-0 w-full" data-name="vision_hp_case_01 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVisionHpCase15} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Sp4() {
  return (
    <div className="bg-white content-stretch flex items-center overflow-clip relative shrink-0" data-name="sp">
      <div className="h-[168px] relative shrink-0 w-[84px]" data-name="vision_hp_case_sp_02 1">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgVisionHpCaseSp25} />
      </div>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex items-start justify-between relative self-stretch shrink-0 w-[327px]">
      <Pc4 />
      <Sp4 />
    </div>
  );
}

function Image8() {
  return (
    <div className="content-stretch flex h-[168px] items-start justify-center relative shrink-0" data-name="Image">
      <Frame98 />
    </div>
  );
}

function Tag4() {
  return (
    <div className="bg-[#edf6ff] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="tag">
      <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[12px] tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[normal]">コーポレートサイト</p>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <Tag4 />
      <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#62666c] text-[12px] tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[normal]">建設業</p>
      </div>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame60 />
      <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#363c4d] text-[16px] text-center w-full">
        <p className="leading-[1.7]">東京都 解体工事 K様</p>
      </div>
    </div>
  );
}

function Pc5() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[235px]" data-name="pc">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="aspect-[470/400] relative shrink-0 w-full" data-name="vision_hp_case_01 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVisionHpCase16} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Sp5() {
  return (
    <div className="bg-white content-stretch flex items-center overflow-clip relative shrink-0" data-name="sp">
      <div className="h-[168px] relative shrink-0 w-[84px]" data-name="vision_hp_case_sp_02 1">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgVisionHpCaseSp26} />
      </div>
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex items-start justify-between relative self-stretch shrink-0 w-[327px]">
      <Pc5 />
      <Sp5 />
    </div>
  );
}

function Image9() {
  return (
    <div className="content-stretch flex h-[168px] items-start justify-center relative shrink-0" data-name="Image">
      <Frame99 />
    </div>
  );
}

function Tag5() {
  return (
    <div className="bg-[#edf6ff] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="tag">
      <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[12px] tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[normal]">コーポレートサイト</p>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <Tag5 />
      <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#62666c] text-[12px] tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[normal]">住宅・リフォーム・設備</p>
      </div>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame61 />
      <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#363c4d] text-[16px] text-center w-full">
        <p className="leading-[1.7]">大阪府 住宅設計 K様</p>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-center flex flex-col lg:flex-row lg:flex-wrap gap-[16px] items-center justify-center max-w-[1280px] min-w-[320px] relative shrink-0">
      <div className="bg-white content-stretch flex flex-col gap-[24px] items-start justify-end p-[16px] relative rounded-[8px] shrink-0" data-name="case">
        <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <Image4 />
        <Frame85 />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[24px] items-start justify-end p-[16px] relative rounded-[8px] shrink-0" data-name="case">
        <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <Image5 />
        <Frame88 />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[24px] items-start justify-end p-[16px] relative rounded-[8px] shrink-0" data-name="case">
        <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <Image6 />
        <Frame89 />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[24px] items-start justify-end p-[16px] relative rounded-[8px] shrink-0" data-name="case">
        <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <Image7 />
        <Frame90 />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[24px] items-start justify-end p-[16px] relative rounded-[8px] shrink-0" data-name="case">
        <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <Image8 />
        <Frame91 />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[24px] items-start justify-end p-[16px] relative rounded-[8px] shrink-0" data-name="case">
        <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <Image9 />
        <Frame92 />
      </div>
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center leading-[normal] min-h-px min-w-px not-italic relative text-[#137fec]">
      <p className="relative shrink-0 font-semibold text-[20px] tracking-[0.4px] w-full">制作実績をもっと見る</p>
      <p className=" relative shrink-0 text-[12px] tracking-[0.24px] w-full">24時間受付対応 · 全国対応可能</p>
    </div>
  );
}

function ArrowCircle4() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="Arrow Circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g id="Arrow Circle">
          <rect fill="var(--fill-0, #137FEC)" height="56" rx="28" width="56" />
          <path d={svgPaths.p3569c700} fill="var(--fill-0, white)" id="arrow_forward" />
        </g>
      </svg>
    </div>
  );
}

function Cta2() {
  return (
    <a
      href="https://homepage296.com/lp02/works?gclid=Cj0KCQiAhOfLBhCCARIsAJPiopNYijSwxvwM9jdvxm7mB71z1Ss1PMsgBNo8rRexvSfLpdwMvrc7kVcaAjTKEALw_wcB&gbraid=0AAAAACjqPur_AQUOZGs2EYLELHZT8TBym"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white max-h-[100px] max-w-[360px] min-h-[80px] min-w-[320px] relative rounded-[999px] shrink-0 w-full block no-underline"
      data-name="cta"
    >
      <div className="flex flex-row items-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] pl-[32px] pr-[16px] py-[16px] relative size-full">
          <Frame100 />
          <ArrowCircle4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#137fec] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </a>
  );
}

function CaseStudy() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] lg:gap-[40px] lg:h-[1134px] items-center px-[16px] lg:px-0 py-[60px] lg:py-[100px] relative shrink-0 w-full" data-name="case_study">
      <Tlt2 />
      <Frame56 />
      <Cta2 />
    </div>
  );
}

function Tlt3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="tlt">
      <div className="flex flex-col font-bold justify-center leading-[0] relative shrink-0 text-[#137fec] text-[28px] text-center uppercase whitespace-nowrap">
        <p className="leading-[1.3]">voices</p>
      </div>
      <div className="bg-[#137fec] h-[8px] shrink-0 w-[120px]" />
      <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#363c4d] font-extrabold text-[28px] lg:text-[40px] text-center lg:whitespace-nowrap">
        <p className="leading-[1.4]">お客様の声</p>
      </div>
      <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#62666c] text-[14px] lg:text-[20px] text-center lg:whitespace-nowrap">
        <p className="leading-[1.8]">様々な声を頂いております。</p>
      </div>
    </div>
  );
}

function Group50() {
  return (
    <div className="absolute inset-[47.84%_8.7%_-1.17%_10.05%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97.5031 63.9929">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p37ff3d00} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p134e3b00} fill="var(--fill-0, #111111)" id="Vector_2" />
          </g>
          <g id="Group_3">
            <path d={svgPaths.p8aa6100} fill="var(--fill-0, white)" id="Vector_3" />
            <path d={svgPaths.p1773a900} fill="var(--fill-0, #111111)" id="Vector_4" />
          </g>
          <g id="Group_4">
            <path d={svgPaths.p2aa5a0f0} fill="var(--fill-0, #137FEC)" id="Vector_5" />
            <path d={svgPaths.pee38900} fill="var(--fill-0, #111111)" id="Vector_6" />
          </g>
          <path d={svgPaths.p18ee1600} fill="var(--fill-0, #111111)" id="Vector_7" />
          <g id="Group_5">
            <path d={svgPaths.pee8ac00} fill="var(--fill-0, #137FEC)" id="Vector_8" />
            <path d={svgPaths.p1a587400} fill="var(--fill-0, #111111)" id="Vector_9" />
          </g>
          <path d={svgPaths.p1f493580} fill="var(--fill-0, #111111)" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

function Group52() {
  return (
    <div className="absolute inset-[9.67%_23.28%_31.78%_10.04%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80.0181 70.2586">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p3e215500} fill="var(--fill-0, #111111)" id="Vector" />
            <path d={svgPaths.p12d39200} fill="var(--fill-0, #111111)" id="Vector_2" />
          </g>
          <g id="Vector_3" />
          <g id="Group_3">
            <path d={svgPaths.p18c55b00} fill="var(--fill-0, white)" id="Vector_4" />
            <path d={svgPaths.p12deeb80} fill="var(--fill-0, #111111)" id="Vector_5" />
          </g>
          <g id="Group_4">
            <path d={svgPaths.p1836880} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.p12106700} fill="var(--fill-0, #111111)" id="Vector_7" />
          </g>
          <g id="Group_5">
            <path d={svgPaths.p1af9400} fill="var(--fill-0, white)" id="Vector_8" />
            <path d={svgPaths.p1144f400} fill="var(--fill-0, #111111)" id="Vector_9" />
          </g>
          <g id="Group_6">
            <path d={svgPaths.p2b8ecb00} fill="var(--fill-0, #111111)" id="Vector_10" />
            <path d={svgPaths.p136c1a00} fill="var(--fill-0, #111111)" id="Vector_11" />
          </g>
          <g id="Group_7">
            <path d={svgPaths.p18481300} fill="var(--fill-0, #137FEC)" id="Vector_12" />
            <path d={svgPaths.p148b9f00} fill="var(--fill-0, #137FEC)" id="Vector_13" />
          </g>
          <g id="Group_8">
            <path d={svgPaths.p2d094100} fill="var(--fill-0, #777777)" id="Vector_14" />
            <path d={svgPaths.p369e9900} fill="var(--fill-0, #777777)" id="Vector_15" />
            <path d={svgPaths.pc1aeb00} fill="var(--fill-0, #777777)" id="Vector_16" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group53() {
  return (
    <div className="absolute inset-[33.34%_38.86%_39.7%_36.37%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.7256 32.3556">
        <g id="Group">
          <path d={svgPaths.p36243f00} fill="var(--fill-0, #111111)" id="Vector" />
          <path d={svgPaths.p3883b470} fill="var(--fill-0, #111111)" id="Vector_2" />
          <path d={svgPaths.p1fcd4d70} fill="var(--fill-0, #111111)" id="Vector_3" />
          <path d={svgPaths.p2803700} fill="var(--fill-0, #111111)" id="Vector_4" />
          <path d={svgPaths.padcb000} fill="var(--fill-0, #111111)" id="Vector_5" />
          <path d={svgPaths.p2a321f00} fill="var(--fill-0, #111111)" id="Vector_6" />
          <g id="Group_2">
            <path d={svgPaths.p256bbef0} fill="var(--fill-0, white)" id="Vector_7" />
            <path d={svgPaths.pd4d2600} fill="var(--fill-0, #111111)" id="Vector_8" />
          </g>
          <path d={svgPaths.p26169a80} fill="var(--fill-0, #111111)" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

function Group51() {
  return (
    <div className="absolute contents inset-[9.67%_23.28%_31.78%_10.04%]" data-name="Group">
      <Group52 />
      <Group53 />
    </div>
  );
}

function Group54() {
  return (
    <div className="absolute inset-[59.51%_38.99%_-1.16%_38.59%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.9087 49.9905">
        <g id="Group">
          <path d={svgPaths.p22b7b200} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2ea56b80} fill="var(--fill-0, #111111)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group49() {
  return (
    <div className="absolute contents inset-[9.67%_8.7%_-1.17%_10.04%]">
      <Group50 />
      <Group51 />
      <Group54 />
      <div className="absolute inset-[76.28%_39.97%_19.1%_49.02%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.2123 5.5482">
          <path d={svgPaths.p314c1700} fill="var(--fill-0, #111111)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.25%_39.69%_14.2%_49.8%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6104 6.66145">
          <path d={svgPaths.p2f93dd00} fill="var(--fill-0, #111111)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[85.15%_42.66%_5.96%_52.78%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.47258 10.6769">
          <path d={svgPaths.p275c5600} fill="var(--fill-0, #111111)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Tlt4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full" data-name="tlt">
      <p className="font-semibold relative shrink-0 text-[#363c4d] text-[12px] tracking-[0.24px] w-full">テキストダミーテキストダミーテキストダミー</p>
      <p className="font-['Hiragino_Kaku_Gothic_Std',sans-serif] font-extrabold leading-[1.2] relative shrink-0 text-[#137fec] text-[14px] tracking-[0.28px] w-full">MORPHコーポレートプラン</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[8px] relative" data-name="container">
      <Tlt4 />
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <div className="bg-white relative rounded-[80px] shrink-0 size-[120px]" data-name="person">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <Group49 />
        </div>
        <div aria-hidden="true" className="absolute border-[#dfdfdf] border-[0.75px] border-solid inset-0 pointer-events-none rounded-[80px]" />
      </div>
      <Container17 />
    </div>
  );
}

function Group58() {
  return (
    <div className="absolute inset-[49.04%_25.02%_4.56%_24.03%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61.1426 55.6845">
        <g id="Group">
          <path d={svgPaths.p70b3830} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p27e86fc0} fill="var(--fill-0, #111111)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group59() {
  return (
    <div className="absolute inset-[66.36%_5.64%_-0.59%_4.84%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 107.43 41.0821">
        <g id="Group">
          <path d={svgPaths.p2207a400} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2f711480} fill="var(--fill-0, #111111)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group61() {
  return (
    <div className="absolute inset-[70.87%_57.76%_-0.6%_17.74%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.3911 35.6668">
        <g id="Group">
          <path d={svgPaths.p379ce600} fill="var(--fill-0, white)" id="Vector" />
          <g id="Group_2">
            <path d={svgPaths.p4036e20} fill="var(--fill-0, #BBBBBB)" id="Vector_2" />
            <path d={svgPaths.pbca9900} fill="var(--fill-0, #BBBBBB)" id="Vector_3" />
            <path d={svgPaths.pba54d00} fill="var(--fill-0, #BBBBBB)" id="Vector_4" />
            <path d={svgPaths.p11fee100} fill="var(--fill-0, #BBBBBB)" id="Vector_5" />
            <path d={svgPaths.p3b754000} fill="var(--fill-0, #BBBBBB)" id="Vector_6" />
            <path d={svgPaths.p61f9b80} fill="var(--fill-0, #BBBBBB)" id="Vector_7" />
            <path d={svgPaths.p2061a100} fill="var(--fill-0, #BBBBBB)" id="Vector_8" />
            <path d={svgPaths.p27636b00} fill="var(--fill-0, #BBBBBB)" id="Vector_9" />
            <path d={svgPaths.p8807e00} fill="var(--fill-0, #BBBBBB)" id="Vector_10" />
            <path d={svgPaths.p374eb500} fill="var(--fill-0, #BBBBBB)" id="Vector_11" />
            <path d={svgPaths.p2257cf00} fill="var(--fill-0, #BBBBBB)" id="Vector_12" />
            <path d={svgPaths.pcb49e00} fill="var(--fill-0, #BBBBBB)" id="Vector_13" />
            <path d={svgPaths.p3d35cd00} fill="var(--fill-0, #BBBBBB)" id="Vector_14" />
            <path d={svgPaths.p29247b80} fill="var(--fill-0, #BBBBBB)" id="Vector_15" />
            <path d={svgPaths.pd31fd00} fill="var(--fill-0, #BBBBBB)" id="Vector_16" />
            <path d={svgPaths.p28b6500} fill="var(--fill-0, #BBBBBB)" id="Vector_17" />
            <path d={svgPaths.p35891300} fill="var(--fill-0, #BBBBBB)" id="Vector_18" />
            <path d={svgPaths.p3d3f7e00} fill="var(--fill-0, #BBBBBB)" id="Vector_19" />
            <path d={svgPaths.p1de24000} fill="var(--fill-0, #BBBBBB)" id="Vector_20" />
            <path d={svgPaths.p10cfd80} fill="var(--fill-0, #BBBBBB)" id="Vector_21" />
            <path d={svgPaths.p3e4e1500} fill="var(--fill-0, #BBBBBB)" id="Vector_22" />
            <path d={svgPaths.p29cac500} fill="var(--fill-0, #BBBBBB)" id="Vector_23" />
            <path d={svgPaths.p108a0800} fill="var(--fill-0, #BBBBBB)" id="Vector_24" />
            <path d={svgPaths.p12154a00} fill="var(--fill-0, #BBBBBB)" id="Vector_25" />
            <path d={svgPaths.pd275f90} fill="var(--fill-0, #BBBBBB)" id="Vector_26" />
            <path d={svgPaths.p2d89cc0} fill="var(--fill-0, #BBBBBB)" id="Vector_27" />
            <path d={svgPaths.p3e706380} fill="var(--fill-0, #BBBBBB)" id="Vector_28" />
            <path d={svgPaths.p3125e000} fill="var(--fill-0, #BBBBBB)" id="Vector_29" />
            <path d={svgPaths.pcbad280} fill="var(--fill-0, #BBBBBB)" id="Vector_30" />
            <path d={svgPaths.p1b550d80} fill="var(--fill-0, #BBBBBB)" id="Vector_31" />
            <path d={svgPaths.p1f9937c0} fill="var(--fill-0, #BBBBBB)" id="Vector_32" />
            <path d={svgPaths.p1bf10b00} fill="var(--fill-0, #BBBBBB)" id="Vector_33" />
            <path d={svgPaths.p2515b880} fill="var(--fill-0, #BBBBBB)" id="Vector_34" />
            <path d={svgPaths.p382bc580} fill="var(--fill-0, #BBBBBB)" id="Vector_35" />
            <path d={svgPaths.p3cd13380} fill="var(--fill-0, #BBBBBB)" id="Vector_36" />
            <path d={svgPaths.p14cf2b00} fill="var(--fill-0, #BBBBBB)" id="Vector_37" />
            <path d={svgPaths.p25059740} fill="var(--fill-0, #BBBBBB)" id="Vector_38" />
          </g>
          <path d={svgPaths.p1102d00} fill="var(--fill-0, #111111)" id="Vector_39" />
        </g>
      </svg>
    </div>
  );
}

function Group62() {
  return (
    <div className="absolute inset-[70.87%_18.52%_-0.59%_56.98%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.3911 35.6668">
        <g id="Group">
          <path d={svgPaths.pba35a00} fill="var(--fill-0, white)" id="Vector" />
          <g id="Group_2">
            <path d={svgPaths.pd036d00} fill="var(--fill-0, #BBBBBB)" id="Vector_2" />
            <path d={svgPaths.p302afc00} fill="var(--fill-0, #BBBBBB)" id="Vector_3" />
            <path d={svgPaths.p29bde500} fill="var(--fill-0, #BBBBBB)" id="Vector_4" />
            <path d={svgPaths.p10205480} fill="var(--fill-0, #BBBBBB)" id="Vector_5" />
            <path d={svgPaths.p1651d900} fill="var(--fill-0, #BBBBBB)" id="Vector_6" />
            <path d={svgPaths.p1b95ce80} fill="var(--fill-0, #BBBBBB)" id="Vector_7" />
            <path d={svgPaths.pc26c100} fill="var(--fill-0, #BBBBBB)" id="Vector_8" />
            <path d={svgPaths.pb7beb20} fill="var(--fill-0, #BBBBBB)" id="Vector_9" />
            <path d={svgPaths.pdcb76f0} fill="var(--fill-0, #BBBBBB)" id="Vector_10" />
            <path d={svgPaths.p2ad180} fill="var(--fill-0, #BBBBBB)" id="Vector_11" />
            <path d={svgPaths.p3b34ae00} fill="var(--fill-0, #BBBBBB)" id="Vector_12" />
            <path d={svgPaths.p115df180} fill="var(--fill-0, #BBBBBB)" id="Vector_13" />
            <path d={svgPaths.p3166c700} fill="var(--fill-0, #BBBBBB)" id="Vector_14" />
            <path d={svgPaths.p2c25ea00} fill="var(--fill-0, #BBBBBB)" id="Vector_15" />
            <path d={svgPaths.p334532c0} fill="var(--fill-0, #BBBBBB)" id="Vector_16" />
            <path d={svgPaths.p230fb400} fill="var(--fill-0, #BBBBBB)" id="Vector_17" />
            <path d={svgPaths.p33098580} fill="var(--fill-0, #BBBBBB)" id="Vector_18" />
            <path d={svgPaths.p2c93d380} fill="var(--fill-0, #BBBBBB)" id="Vector_19" />
            <path d={svgPaths.p53f6f80} fill="var(--fill-0, #BBBBBB)" id="Vector_20" />
            <path d={svgPaths.p3d12aff0} fill="var(--fill-0, #BBBBBB)" id="Vector_21" />
            <path d={svgPaths.p5961080} fill="var(--fill-0, #BBBBBB)" id="Vector_22" />
            <path d={svgPaths.p6192000} fill="var(--fill-0, #BBBBBB)" id="Vector_23" />
            <path d={svgPaths.p3f063a80} fill="var(--fill-0, #BBBBBB)" id="Vector_24" />
            <path d={svgPaths.p14aa6870} fill="var(--fill-0, #BBBBBB)" id="Vector_25" />
            <path d={svgPaths.p2a9bf300} fill="var(--fill-0, #BBBBBB)" id="Vector_26" />
            <path d={svgPaths.p4bf8600} fill="var(--fill-0, #BBBBBB)" id="Vector_27" />
            <path d={svgPaths.p33e5d00} fill="var(--fill-0, #BBBBBB)" id="Vector_28" />
            <path d={svgPaths.p34db0000} fill="var(--fill-0, #BBBBBB)" id="Vector_29" />
            <path d={svgPaths.p2b3b4f00} fill="var(--fill-0, #BBBBBB)" id="Vector_30" />
            <path d={svgPaths.p14d3c100} fill="var(--fill-0, #BBBBBB)" id="Vector_31" />
            <path d={svgPaths.p2aa63080} fill="var(--fill-0, #BBBBBB)" id="Vector_32" />
            <path d={svgPaths.p2c454380} fill="var(--fill-0, #BBBBBB)" id="Vector_33" />
          </g>
          <path d={svgPaths.p2b2c3100} fill="var(--fill-0, #111111)" id="Vector_34" />
        </g>
      </svg>
    </div>
  );
}

function Group60() {
  return (
    <div className="absolute contents inset-[70.87%_18.52%_-0.6%_17.74%]" data-name="Group">
      <Group61 />
      <Group62 />
    </div>
  );
}

function Group63() {
  return (
    <div className="absolute inset-[72.51%_45.59%_-0.59%_44.61%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7699 33.6924">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p10edd780} fill="var(--fill-0, #137FEC)" id="Vector" />
            <path d={svgPaths.p8f00040} fill="var(--fill-0, #111111)" id="Vector_2" />
          </g>
          <path d={svgPaths.p3d2e1c00} fill="var(--fill-0, #111111)" id="Vector_3" />
          <path d={svgPaths.p13e4900} fill="var(--fill-0, #111111)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Group57() {
  return (
    <div className="absolute contents inset-[49.04%_5.64%_-0.6%_4.84%]" data-name="Group">
      <Group58 />
      <Group59 />
      <div className="absolute inset-[72.52%_38.41%_15.44%_48.71%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4607 14.4397">
          <path d={svgPaths.pdfcb80} fill="var(--fill-0, #111111)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[72.52%_49.69%_15.45%_38.37%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3342 14.4376">
          <path d={svgPaths.p25c938a0} fill="var(--fill-0, #111111)" id="Vector" />
        </svg>
      </div>
      <Group60 />
      <Group63 />
    </div>
  );
}

function Group65() {
  return (
    <div className="absolute inset-[10.96%_28.26%_31.17%_27.21%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53.4377 69.4479">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p3926af80} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p388c2280} fill="var(--fill-0, #111111)" id="Vector_2" />
          </g>
          <g id="Group_3">
            <path d={svgPaths.p2a143800} fill="var(--fill-0, #111111)" id="Vector_3" />
            <path d={svgPaths.p2c5ac870} fill="var(--fill-0, #111111)" id="Vector_4" />
          </g>
          <g id="Group_4">
            <path d={svgPaths.pee8b280} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p2cdf1900} fill="var(--fill-0, #111111)" id="Vector_6" />
          </g>
          <g id="Group_5">
            <path d={svgPaths.p3fe0600} fill="var(--fill-0, white)" id="Vector_7" />
            <path d={svgPaths.p34e53000} fill="var(--fill-0, #111111)" id="Vector_8" />
          </g>
          <path d={svgPaths.p3387700} fill="var(--fill-0, #777777)" id="Vector_9" />
          <path d={svgPaths.p39a4c9c0} fill="var(--fill-0, #777777)" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

function Group66() {
  return (
    <div className="absolute inset-[36.29%_38.39%_39.08%_37.33%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.1352 29.5487">
        <g id="Group">
          <path d={svgPaths.p3a54a600} fill="var(--fill-0, #111111)" id="Vector" />
          <g id="Group_2">
            <path d={svgPaths.p3c2a4600} fill="var(--fill-0, white)" id="Vector_2" />
            <path d={svgPaths.p219a6080} fill="var(--fill-0, #111111)" id="Vector_3" />
          </g>
          <path d={svgPaths.p2e529900} fill="var(--fill-0, #111111)" id="Vector_4" />
          <path d={svgPaths.p84018b0} fill="var(--fill-0, #111111)" id="Vector_5" />
          <path d={svgPaths.p3fdf6080} fill="var(--fill-0, #111111)" id="Vector_6" />
          <path d={svgPaths.pfca5400} fill="var(--fill-0, #111111)" id="Vector_7" />
          <path d={svgPaths.p9c8de00} fill="var(--fill-0, #111111)" id="Vector_8" />
          <path d={svgPaths.pf7b0080} fill="var(--fill-0, #111111)" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

function Group64() {
  return (
    <div className="absolute contents inset-[10.96%_28.26%_31.17%_27.21%]" data-name="Group">
      <Group65 />
      <Group66 />
    </div>
  );
}

function Group56() {
  return (
    <div className="absolute contents inset-[10.96%_5.64%_-0.6%_4.84%]" data-name="Group">
      <Group57 />
      <Group64 />
    </div>
  );
}

function Group67() {
  return (
    <div className="absolute inset-[62.39%_74.04%_-0.59%_-5.62%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.9 45.8413">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p1ae80300} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p130c5e80} fill="var(--fill-0, white)" id="Vector_2" />
            <path d={svgPaths.p40bc780} fill="var(--fill-0, #111111)" id="Vector_3" />
          </g>
          <path d={svgPaths.p36ce3cf0} fill="var(--fill-0, #111111)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Group55() {
  return (
    <div className="absolute contents inset-[10.96%_5.64%_-0.6%_-5.62%]">
      <Group56 />
      <Group67 />
    </div>
  );
}

function Tlt5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full" data-name="tlt">
      <p className="font-semibold relative shrink-0 text-[#363c4d] text-[12px] tracking-[0.24px] w-full">50代男性 / メディアリテラシーのある中小企業経営者</p>
      <p className="font-['Hiragino_Kaku_Gothic_Std',sans-serif] font-extrabold leading-[1.2] relative shrink-0 text-[#137fec] text-[14px] tracking-[0.28px] w-full">MORPHコーポレートプラン</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[8px] relative" data-name="container">
      <Tlt5 />
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <div className="bg-white relative rounded-[80px] shrink-0 size-[120px]" data-name="person">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <Group55 />
        </div>
        <div aria-hidden="true" className="absolute border-[#eaeaea] border-[0.75px] border-solid inset-0 pointer-events-none rounded-[80px]" />
      </div>
      <Container18 />
    </div>
  );
}

function Group69() {
  return (
    <div className="absolute inset-[48.48%_4.54%_-2.54%_1.25%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113.056 64.8709">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p116fd700} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p1273dec0} fill="var(--fill-0, #111111)" id="Vector_2" />
          </g>
          <g id="Group_3">
            <g id="Group_4">
              <path d={svgPaths.pc7d97a0} fill="var(--fill-0, white)" id="Vector_3" />
              <path d={svgPaths.p1fe41500} fill="var(--fill-0, #111111)" id="Vector_4" />
            </g>
            <path d={svgPaths.p142b1400} fill="var(--fill-0, #111111)" id="Vector_5" />
            <path d={svgPaths.p28a4e200} fill="var(--fill-0, #111111)" id="Vector_6" />
          </g>
          <g id="Group_5">
            <path d={svgPaths.p12767c80} fill="var(--fill-0, #DDDDDD)" id="Vector_7" />
            <path d={svgPaths.p2917d000} fill="var(--fill-0, #111111)" id="Vector_8" />
          </g>
          <path d={svgPaths.p19b76a80} fill="var(--fill-0, #111111)" id="Vector_9" />
          <g id="Group_6">
            <path d={svgPaths.p2a268600} fill="var(--fill-0, #DDDDDD)" id="Vector_10" />
            <path d={svgPaths.p379a5c00} fill="var(--fill-0, #111111)" id="Vector_11" />
          </g>
          <path d={svgPaths.p1a107500} fill="var(--fill-0, #111111)" id="Vector_12" />
        </g>
      </svg>
    </div>
  );
}

function Group71() {
  return (
    <div className="absolute inset-[6.22%_27.86%_30.77%_24.41%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57.277 75.6148">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p35826f80} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p187b0200} fill="var(--fill-0, #111111)" id="Vector_2" />
          </g>
          <g id="Group_3">
            <path d={svgPaths.p1cf3e480} fill="var(--fill-0, white)" id="Vector_3" />
            <path d={svgPaths.p32e2600} fill="var(--fill-0, #111111)" id="Vector_4" />
          </g>
          <g id="Group_4">
            <path d={svgPaths.p14f62c00} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p13b6a300} fill="var(--fill-0, #111111)" id="Vector_6" />
          </g>
          <g id="Group_5">
            <path d={svgPaths.p3889fd00} fill="var(--fill-0, #137FEC)" id="Vector_7" />
            <path d={svgPaths.p4c0ebf0} fill="var(--fill-0, #111111)" id="Vector_8" />
          </g>
          <path d={svgPaths.p23a84600} fill="var(--fill-0, #111111)" id="Vector_9" />
          <path d={svgPaths.p2013a00} fill="var(--fill-0, #111111)" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

function Group72() {
  return (
    <div className="absolute inset-[34.93%_38.83%_39.06%_35.55%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.7473 31.2036">
        <g id="Group">
          <path d={svgPaths.pa199e00} fill="var(--fill-0, #111111)" id="Vector" />
          <path d={svgPaths.p274f1b80} fill="var(--fill-0, #111111)" id="Vector_2" />
          <path d={svgPaths.p311d9880} fill="var(--fill-0, #111111)" id="Vector_3" />
          <path d={svgPaths.p28273780} fill="var(--fill-0, #111111)" id="Vector_4" />
          <path d={svgPaths.pcdb1530} fill="var(--fill-0, #111111)" id="Vector_5" />
          <path d={svgPaths.p276e4480} fill="var(--fill-0, #111111)" id="Vector_6" />
          <path d={svgPaths.p29af6a00} fill="var(--fill-0, #111111)" id="Vector_7" />
          <path d={svgPaths.p3d9be700} fill="var(--fill-0, #111111)" id="Vector_8" />
          <g id="Group_2">
            <path d={svgPaths.p372cbf80} fill="var(--fill-0, white)" id="Vector_9" />
            <path d={svgPaths.pe680f00} fill="var(--fill-0, #111111)" id="Vector_10" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group70() {
  return (
    <div className="absolute contents inset-[6.22%_27.86%_30.77%_24.41%]" data-name="Group">
      <Group71 />
      <Group72 />
    </div>
  );
}

function Group73() {
  return (
    <div className="absolute inset-[71.83%_-1.25%_-2.54%_79.54%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.0537 36.8463">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.pb9e6700} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p2d215572} fill="var(--fill-0, #111111)" id="Vector_2" />
          </g>
          <path d={svgPaths.p2b7fdb00} fill="var(--fill-0, #111111)" id="Vector_3" />
          <path d={svgPaths.p333ab300} fill="var(--fill-0, #111111)" id="Vector_4" />
          <path d={svgPaths.p34f88f80} fill="var(--fill-0, #111111)" id="Vector_5" />
          <path d={svgPaths.p15d38e80} fill="var(--fill-0, #111111)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Group68() {
  return (
    <div className="absolute contents inset-[6.22%_-1.25%_-2.54%_1.25%]">
      <Group69 />
      <Group70 />
      <Group73 />
    </div>
  );
}

function Tlt6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full" data-name="tlt">
      <p className="font-semibold relative shrink-0 text-[#363c4d] text-[12px] tracking-[0.24px] w-full">30代男性 / スタートアップ創業期</p>
      <p className="font-['Hiragino_Kaku_Gothic_Std',sans-serif] font-extrabold leading-[1.2] relative shrink-0 text-[#137fec] text-[14px] tracking-[0.28px] w-full">ビジョクラプラン</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[8px] relative" data-name="container">
      <Tlt6 />
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <div className="bg-white relative rounded-[80px] shrink-0 size-[120px]" data-name="person">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <Group68 />
        </div>
        <div aria-hidden="true" className="absolute border-[#eaeaea] border-[0.75px] border-solid inset-0 pointer-events-none rounded-[80px]" />
      </div>
      <Container19 />
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] items-start justify-center max-w-[1280px] min-w-[320px] relative shrink-0 w-full lg:w-[1280px]">
      <div className="bg-white flex-[1_0_0] max-w-[410px] min-h-px min-w-[320px] relative rounded-[12px]" data-name="customer">
        <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[inherit] min-w-[inherit] p-[16px] relative size-full">
          <Frame116 />
          <p className=" leading-[normal] min-h-[147px] not-italic relative shrink-0 text-[#363c4d] text-[14px] tracking-[0.28px] w-full">テキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミー</p>
        </div>
      </div>
      <div className="bg-white flex-[1_0_0] max-w-[410px] min-h-px min-w-[320px] relative rounded-[12px]" data-name="customer">
        <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[inherit] min-w-[inherit] p-[16px] relative size-full">
          <Frame117 />
          <p className=" leading-[normal] min-h-[147px] not-italic relative shrink-0 text-[#363c4d] text-[14px] tracking-[0.28px] w-full">テキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミー</p>
        </div>
      </div>
      <div className="bg-white flex-[1_0_0] max-w-[410px] min-h-px min-w-[320px] relative rounded-[12px]" data-name="customer">
        <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[inherit] min-w-[inherit] p-[16px] relative size-full">
          <Frame118 />
          <p className=" leading-[normal] min-h-[147px] not-italic relative shrink-0 text-[#363c4d] text-[14px] tracking-[0.28px] w-full">テキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミー</p>
        </div>
      </div>
    </div>
  );
}

function Voices() {
  return (
    <div className="bg-[#f5f8fc] content-stretch flex flex-col gap-[24px] lg:gap-[40px] items-center px-[16px] lg:px-0 py-[60px] lg:py-[100px] relative shrink-0 w-full" data-name="voices">
      <Tlt3 />
      <Frame123 />
    </div>
  );
}

function Tlt7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="tlt">
      <div className="flex flex-col font-bold justify-center leading-[0] relative shrink-0 text-[#137fec] text-[28px] text-center uppercase whitespace-nowrap">
        <p className="leading-[1.3]">RESULTS</p>
      </div>
      <div className="bg-[#137fec] h-[8px] shrink-0 w-[120px]" />
      <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#2d3748] font-extrabold text-[28px] lg:text-[40px] text-center lg:whitespace-nowrap">
        <p className="leading-[1.4]">導入効果</p>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 text-center whitespace-nowrap" data-name="text">
      <p className="font-bold leading-none relative shrink-0 text-[#137fec] text-[64px] tracking-[-2.56px]">3.6</p>
      <p className="font-semibold leading-[1.5] not-italic relative shrink-0 text-[#2d3748] text-[24px] tracking-[0.48px]">倍増！</p>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="h-[121.556px] relative shrink-0 w-[58.379px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.3794 121.556">
          <path d={svgPaths.p39381680} fill="var(--fill-0, #137FEC)" fillOpacity="0.2" id="Vector" />
        </svg>
      </div>
      <Text16 />
      <div className="h-[121.551px] relative shrink-0 w-[58.374px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.3744 121.551">
          <path d={svgPaths.p357b2100} fill="var(--fill-0, #137FEC)" fillOpacity="0.2" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-[280.754px]">
      <p className="font-extrabold leading-[normal] not-italic relative shrink-0 text-[#2d3748] text-[22px] text-center tracking-[0.44px] w-full">新規顧客獲得</p>
      <Frame72 />
    </div>
  );
}

function Text17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 text-center whitespace-nowrap" data-name="text">
      <p className=" leading-[normal] not-italic relative shrink-0 text-[#2d3748] text-[20px] tracking-[0.4px]">&nbsp;</p>
      <p className="font-bold leading-none relative shrink-0 text-[#137fec] text-[64px] tracking-[-2.56px]">1</p>
      <p className="font-extrabold leading-none not-italic relative shrink-0 text-[#137fec] text-[26px] tracking-[0.52px]">万人</p>
      <p className="font-semibold leading-[1.5] not-italic relative shrink-0 text-[#2d3748] text-[24px] tracking-[0.48px]">達成！</p>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="h-[121.556px] relative shrink-0 w-[58.379px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.3794 121.556">
          <path d={svgPaths.p39381680} fill="var(--fill-0, #137FEC)" fillOpacity="0.2" id="Vector" />
        </svg>
      </div>
      <Text17 />
      <div className="h-[121.551px] relative shrink-0 w-[58.374px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.3744 121.551">
          <path d={svgPaths.p357b2100} fill="var(--fill-0, #137FEC)" fillOpacity="0.2" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-[280.754px]">
      <p className="font-extrabold leading-[normal] not-italic relative shrink-0 text-[#2d3748] text-[22px] text-center tracking-[0.44px] w-full">SNSフォロアー</p>
      <Frame75 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center not-italic relative shrink-0 text-[#2d3748] font-semibold text-[24px] tracking-[0.48px]">
      <p className="leading-none relative shrink-0">%</p>
      <p className="leading-[1.5] relative shrink-0">成長！</p>
    </div>
  );
}

function Text18() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 text-center whitespace-nowrap" data-name="text">
      <p className=" leading-[normal] not-italic relative shrink-0 text-[#2d3748] text-[20px] tracking-[0.4px]">&nbsp;</p>
      <p className="font-bold leading-none relative shrink-0 text-[#137fec] text-[64px] tracking-[-2.56px]">400</p>
      <Frame78 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="h-[121.556px] relative shrink-0 w-[58.379px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.3794 121.556">
          <path d={svgPaths.p39381680} fill="var(--fill-0, #137FEC)" fillOpacity="0.2" id="Vector" />
        </svg>
      </div>
      <Text18 />
      <div className="h-[121.551px] relative shrink-0 w-[58.374px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.3744 121.551">
          <path d={svgPaths.p357b2100} fill="var(--fill-0, #137FEC)" fillOpacity="0.2" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-[280.754px]">
      <p className="font-extrabold leading-[normal] not-italic relative shrink-0 text-[#2d3748] text-[22px] text-center tracking-[0.44px] w-full">社名・サービス指名検索</p>
      <Frame77 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center not-italic relative shrink-0 text-[#2d3748] font-semibold text-[24px] tracking-[0.48px]">
      <p className="leading-none relative shrink-0">%</p>
      <p className="leading-[1.5] relative shrink-0">向上！</p>
    </div>
  );
}

function Text19() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 text-center whitespace-nowrap" data-name="text">
      <p className="font-bold leading-none relative shrink-0 text-[#137fec] text-[64px] tracking-[-2.56px]">180</p>
      <Frame81 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="h-[121.556px] relative shrink-0 w-[58.379px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.3794 121.556">
          <path d={svgPaths.p39381680} fill="var(--fill-0, #137FEC)" fillOpacity="0.2" id="Vector" />
        </svg>
      </div>
      <Text19 />
      <div className="h-[121.551px] relative shrink-0 w-[58.374px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.3744 121.551">
          <path d={svgPaths.p357b2100} fill="var(--fill-0, #137FEC)" fillOpacity="0.2" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-[280.754px]">
      <p className="font-extrabold leading-[normal] not-italic relative shrink-0 text-[#2d3748] text-[22px] text-center tracking-[0.44px] w-full">社員評価(満足度)</p>
      <Frame80 />
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center not-italic relative shrink-0 text-[#2d3748] font-semibold text-[24px] tracking-[0.48px]">
      <p className="leading-none relative shrink-0">%</p>
      <p className="leading-[1.5] relative shrink-0">削減！</p>
    </div>
  );
}

function Text21() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 text-center whitespace-nowrap" data-name="text">
      <p className="font-bold leading-none relative shrink-0 text-[#137fec] text-[64px] tracking-[-2.56px]">40</p>
      <Frame106 />
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="h-[121.556px] relative shrink-0 w-[58.379px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.3794 121.556">
          <path d={svgPaths.p39381680} fill="var(--fill-0, #137FEC)" fillOpacity="0.2" id="Vector" />
        </svg>
      </div>
      <Text21 />
      <div className="h-[121.551px] relative shrink-0 w-[58.374px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.3744 121.551">
          <path d={svgPaths.p357b2100} fill="var(--fill-0, #137FEC)" fillOpacity="0.2" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-[280.754px]">
      <p className="font-extrabold leading-[normal] not-italic relative shrink-0 text-[#2d3748] text-[22px] text-center tracking-[0.44px] w-full">広告費</p>
      <Frame105 />
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center not-italic relative shrink-0 text-[#2d3748] font-semibold text-[24px] tracking-[0.48px]">
      <p className="leading-none relative shrink-0">%</p>
      <p className="leading-[1.5] relative shrink-0">達成！</p>
    </div>
  );
}

function Text22() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 text-center whitespace-nowrap" data-name="text">
      <p className="font-bold leading-none relative shrink-0 text-[#137fec] text-[64px] tracking-[-2.56px]">210</p>
      <Frame112 />
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="h-[121.556px] relative shrink-0 w-[58.379px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.3794 121.556">
          <path d={svgPaths.p39381680} fill="var(--fill-0, #137FEC)" fillOpacity="0.2" id="Vector" />
        </svg>
      </div>
      <Text22 />
      <div className="h-[121.551px] relative shrink-0 w-[58.374px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.3744 121.551">
          <path d={svgPaths.p357b2100} fill="var(--fill-0, #137FEC)" fillOpacity="0.2" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-[280.754px]">
      <p className="font-extrabold leading-[normal] not-italic relative shrink-0 text-[#2d3748] text-[22px] text-center tracking-[0.44px] w-full">採用応募数</p>
      <Frame111 />
    </div>
  );
}

function Frame121() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center not-italic relative shrink-0 text-[#2d3748] font-semibold text-[24px] tracking-[0.48px]">
      <p className="leading-none relative shrink-0">%</p>
      <p className="leading-[1.5] relative shrink-0">倍増！</p>
    </div>
  );
}

function Text23() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 text-center whitespace-nowrap" data-name="text">
      <p className="font-bold leading-none relative shrink-0 text-[#137fec] text-[64px] tracking-[-2.56px]">2.5</p>
      <Frame121 />
    </div>
  );
}

function Frame120() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="h-[121.556px] relative shrink-0 w-[58.379px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.3794 121.556">
          <path d={svgPaths.p39381680} fill="var(--fill-0, #137FEC)" fillOpacity="0.2" id="Vector" />
        </svg>
      </div>
      <Text23 />
      <div className="h-[121.551px] relative shrink-0 w-[58.374px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.3744 121.551">
          <path d={svgPaths.p357b2100} fill="var(--fill-0, #137FEC)" fillOpacity="0.2" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-[280.754px]">
      <p className="font-extrabold leading-[normal] not-italic relative shrink-0 text-[#2d3748] text-[22px] text-center tracking-[0.44px] w-full">既存顧客追加発注</p>
      <Frame120 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="flex flex-col gap-[8px] lg:grid lg:grid-cols-[repeat(8,minmax(0,1fr))] lg:grid-rows-[repeat(2,minmax(0,1fr))] lg:h-[400px] max-w-[1280px] relative shrink-0 w-full">
      <div className="w-full lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:justify-self-stretch relative lg:self-stretch shrink-0" data-name="数字で見る">
        <div className="flex flex-row items-center justify-center rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
            <Frame73 />
          </div>
        </div>
      </div>
      <div className="w-full lg:col-span-2 lg:col-start-3 lg:row-start-1 lg:justify-self-stretch relative lg:self-stretch shrink-0" data-name="数字で見る">
        <div className="flex flex-row items-center justify-center rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
            <Frame74 />
          </div>
        </div>
      </div>
      <div className="w-full lg:col-span-2 lg:col-start-5 lg:row-start-1 lg:justify-self-stretch relative lg:self-stretch shrink-0" data-name="数字で見る">
        <div className="flex flex-row items-center justify-center rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
            <Frame76 />
          </div>
        </div>
      </div>
      <div className="w-full lg:col-span-2 lg:col-start-7 lg:row-start-1 lg:justify-self-stretch relative lg:self-stretch shrink-0" data-name="数字で見る">
        <div className="flex flex-row items-center justify-center rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
            <Frame79 />
          </div>
        </div>
      </div>
      <div className="w-full lg:col-span-2 lg:col-start-2 lg:row-start-2 lg:justify-self-stretch relative lg:self-stretch shrink-0" data-name="数字で見る">
        <div className="flex flex-row items-center justify-center rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
            <Frame104 />
          </div>
        </div>
      </div>
      <div className="w-full lg:col-span-2 lg:col-start-4 lg:row-start-2 lg:justify-self-stretch relative lg:self-stretch shrink-0" data-name="数字で見る">
        <div className="flex flex-row items-center justify-center rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
            <Frame107 />
          </div>
        </div>
      </div>
      <div className="w-full lg:col-span-2 lg:col-start-6 lg:row-start-2 lg:justify-self-stretch relative lg:self-stretch shrink-0" data-name="数字で見る">
        <div className="flex flex-row items-center justify-center rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
            <Frame119 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Result() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] lg:gap-[40px] items-center px-[16px] lg:px-0 py-[60px] lg:py-[100px] relative shrink-0 w-full" data-name="result">
      <Tlt7 />
      <Frame68 />
    </div>
  );
}

function Tlt8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="tlt">
      <div className="flex flex-col font-bold justify-center leading-[0] relative shrink-0 text-[#137fec] text-[18px] lg:text-[28px] text-center uppercase whitespace-nowrap">
        <p className="leading-[1.3]">PROCESS</p>
      </div>
      <div className="bg-[#137fec] h-[8px] shrink-0 w-[120px]" />
      <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#2d3748] font-extrabold text-[28px] lg:text-[40px] text-center lg:whitespace-nowrap">
        <p className="leading-[1.4]">簡単３ステップ</p>
      </div>
      <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#62666c] text-[14px] lg:text-[20px] text-center lg:whitespace-nowrap">
        <p className="leading-[1.8] mb-0">お問い合わせから公開まで、ステップごとに丁寧にご案内いたします。</p>
        <p className="leading-[1.8]">Webサイト制作が初めての方もご安心ください。</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="bg-[rgba(19,127,236,0.1)] content-stretch flex items-center justify-center px-[16px] py-[4px] relative rounded-[50px] shrink-0" data-name="label">
      <p className="font-extrabold leading-[1.6] relative shrink-0 text-[#137fec] text-[16px] uppercase whitespace-nowrap">step 01</p>
    </div>
  );
}

function Label1() {
  return (
    <div className="bg-[rgba(19,127,236,0.1)] content-stretch flex items-center justify-center px-[16px] py-[4px] relative rounded-[50px] shrink-0" data-name="label">
      <p className="font-extrabold leading-[1.6] relative shrink-0 text-[#137fec] text-[16px] uppercase whitespace-nowrap">step 02</p>
    </div>
  );
}

function Label2() {
  return (
    <div className="bg-[rgba(19,127,236,0.1)] content-stretch flex items-center justify-center px-[16px] py-[4px] relative rounded-[50px] shrink-0" data-name="label">
      <p className="font-extrabold leading-[1.6] relative shrink-0 text-[#137fec] text-[16px] uppercase whitespace-nowrap">step 03</p>
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex flex-col lg:flex-row items-stretch lg:items-center gap-[16px] lg:gap-0 relative shrink-0 w-full lg:w-[1117px]">
      <div className="bg-white w-full lg:flex-[1_0_0] lg:min-h-px lg:min-w-px relative rounded-[24px]" data-name="flow">
        <div aria-hidden="true" className="hidden lg:block absolute border-[#eaeaea] border-dashed border-r inset-0 pointer-events-none rounded-[24px]" />
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-center p-[24px] relative size-full">
            <Label />
            <p className="font-extrabold leading-[1.3] min-w-full not-italic relative shrink-0 text-[#2d3748] text-[28px] text-center tracking-[-1.4px] w-[min-content]">内容ヒアリング</p>
            <div className="h-[240px] relative rounded-[12px] shrink-0 w-full">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle40} />
            </div>
            <p className=" lg:h-[78px] leading-[1.6] min-w-full not-italic relative shrink-0 text-[#2d3748] text-[16px] w-[min-content]">お客様のご要望や課題を丁寧にヒヤリング。どんな小さなことでも、まず気軽に話してみてください。</p>
          </div>
        </div>
      </div>
      <div className="bg-white w-full lg:flex-[1_0_0] lg:min-h-px lg:min-w-px relative rounded-[24px]" data-name="flow">
        <div aria-hidden="true" className="hidden lg:block absolute border-[#eaeaea] border-dashed border-r inset-0 pointer-events-none rounded-[24px]" />
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-center p-[24px] relative size-full">
            <Label1 />
            <p className="font-extrabold leading-[1.3] min-w-full not-italic relative shrink-0 text-[#2d3748] text-[28px] text-center tracking-[-1.4px] w-[min-content]">制作・確認</p>
            <div className="h-[240px] relative rounded-[12px] shrink-0 w-full">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle41} />
            </div>
            <p className=" lg:h-[78px] leading-[1.6] min-w-full not-italic relative shrink-0 text-[#2d3748] text-[16px] w-[min-content]">ヒヤリング内容をもとに制作を進めていきます。途中でも確認いただけるので、安心してお任せください。</p>
          </div>
        </div>
      </div>
      <div className="bg-white w-full lg:flex-[1_0_0] lg:min-h-px lg:min-w-px relative rounded-[24px]" data-name="flow">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-center p-[24px] relative size-full">
            <Label2 />
            <p className="font-extrabold leading-[1.3] min-w-full not-italic relative shrink-0 text-[#2d3748] text-[28px] text-center tracking-[-1.4px] w-[min-content]">完成・運用</p>
            <div className="h-[240px] relative rounded-[12px] shrink-0 w-full">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle42} />
            </div>
            <p className=" lg:h-[78px] leading-[1.6] min-w-full not-italic relative shrink-0 text-[#2d3748] text-[16px] w-[min-content]">サイト完成で、すぐに公開へ。その後の運用も安心で、いつでもサポートでお気軽にご相談できます。</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Process() {
  return (
    <div className="bg-[#f5f8fc] content-stretch flex flex-col gap-[48px] lg:gap-[40px] items-center overflow-clip px-[16px] lg:px-0 py-[64px] lg:py-[100px] relative shrink-0 w-full" data-name="process">
      <Tlt8 />
      <Frame122 />
    </div>
  );
}

function Group74() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[960px] top-[calc(50%-41.5px)] opacity-20 lg:opacity-100 pointer-events-none">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 960 960">
        <g id="Group 22">
          <circle cx="480" cy="480" id="Ellipse 6" r="479.4" stroke="var(--stroke-0, white)" strokeWidth="1.2" />
          <circle cx="480" cy="480" fill="var(--fill-0, white)" id="Ellipse 7" opacity="0.1" r="419.4" stroke="var(--stroke-0, white)" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Frame129() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col  items-center justify-center leading-[normal] min-h-px min-w-px not-italic relative text-white">
      <p className="relative shrink-0 font-semibold text-[23px] tracking-[0.46px] w-full">無料資料を受け取る</p>
      <p className="relative shrink-0 text-[16px] tracking-[0.32px] w-full">1分で完了 · 登録不要</p>
    </div>
  );
}

function ArrowForward2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow_forward">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_forward">
          <mask height="24" id="mask0_1_3970" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_1_3970)">
            <path d={svgPaths.p54e7200} fill="var(--fill-0, #FF4343)" id="arrow_forward_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ArrowCircle5() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[56px]" data-name="Arrow Circle">
      <ArrowForward2 />
    </div>
  );
}

function Frame130() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col  h-[29px] items-center justify-center leading-[normal] min-h-px min-w-px not-italic relative text-[#00b5ad]">
      <p className="relative shrink-0 font-semibold text-[17.5px] tracking-[0.35px] w-full">今すぐ無料相談する</p>
      <p className="relative shrink-0 text-[10.5px] tracking-[0.21px] w-full">24時間受付対応 · 全国対応可能</p>
    </div>
  );
}

function ArrowCircle6() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="Arrow Circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g id="Arrow Circle">
          <rect fill="var(--fill-0, #00B5AD)" height="56" rx="28" width="56" />
          <path d={svgPaths.p3569c700} fill="var(--fill-0, white)" id="arrow_forward" />
        </g>
      </svg>
    </div>
  );
}

function Cta3() {
  return (
    <a href="tel:0120-269-046" className="bg-white relative rounded-[999px] block no-underline w-full max-w-[300px]" data-name="cta">
      <div className="content-stretch flex items-center justify-between overflow-clip pl-[28px] pr-[14px] py-[14px] relative rounded-[inherit] size-full">
        <Frame130 />
        <ArrowCircle6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#00b5ad] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </a>
  );
}

function Frame128() {
  return (
    <div className="content-center flex flex-wrap gap-[16px] items-center justify-center relative shrink-0 w-full">
      <div className="max-h-[100px] min-h-[80px] relative rounded-[999px] shadow-[0px_2px_8px_0px_rgba(158,36,36,0.16),0px_4px_16px_0px_rgba(158,36,36,0.08)] w-full max-w-[400px] min-w-[320px] lg:flex-[1_0_0]" data-name="cta">
        <div aria-hidden="true" className="absolute bg-[#ff4343] inset-0 pointer-events-none rounded-[999px]" />
        <div className="flex flex-row items-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-between max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] pl-[32px] pr-[16px] py-[16px] relative size-full">
            <Frame129 />
            <ArrowCircle5 />
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_2px_2px_4px_0px_rgba(255,255,255,0.24)]" />
      </div>
      <Cta3 />
    </div>
  );
}

function Frame127() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center max-w-[700px] min-w-[320px] relative shrink-0 w-full">
      <div className="font-extrabold not-italic relative shrink-0 text-center text-white tracking-[0.56px] w-full">
        {/* Mobile: 3 lines with \/ on yellow phrase */}
        <div className="lg:hidden flex flex-col items-center">
          <p className="leading-[1.3] text-[24px]">まずは気軽に</p>
          <p className="leading-[1.3] text-[#ffe347] text-[32px]">\お見積もり・ご相談/</p>
          <p className="leading-[1.3] text-[24px]">ください</p>
        </div>
        {/* Desktop: single line, yellow phrase larger inline */}
        <p className="hidden lg:block leading-[1.3] text-[28px]">
          まずは気軽に
          <span className="text-[#ffe347] text-[40px]">お見積もり・ご相談</span>
          ください
        </p>
      </div>
      <Frame128 />
    </div>
  );
}

function Tlt9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="tlt">
      <div className="flex flex-col font-bold justify-center leading-[0] relative shrink-0 text-[#137fec] text-[28px] text-center uppercase whitespace-nowrap">
        <p className="leading-[1.3]">plan</p>
      </div>
      <div className="bg-[#137fec] h-[8px] shrink-0 w-[120px]" />
      <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#2d3748] font-extrabold text-[28px] lg:text-[40px] text-center lg:whitespace-nowrap">
        <p className="leading-[1.4]">料金プラン</p>
      </div>
      <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#62666c] text-[14px] lg:text-[20px] text-center lg:whitespace-nowrap">
        <p className="leading-[1.8] mb-0">小規模ビジネスやフリーランスの方にも分かりやすい、</p>
        <p className="leading-[1.8]">透明性の高いシンプルな料金プランをご用意しました。</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <p className="font-semibold leading-[1.5] not-italic relative shrink-0 text-[#2d3748] text-[14px] text-center whitespace-nowrap">ページ規模</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <p className="font-semibold leading-[1.5] not-italic relative shrink-0 text-[#2d3748] text-[14px] text-center whitespace-nowrap">デザイン</p>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <p className="font-semibold leading-[1.5] not-italic relative shrink-0 text-[#2d3748] text-[14px] text-center whitespace-nowrap">スマホ対応</p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <p className="font-semibold leading-[1.5] not-italic relative shrink-0 text-[#2d3748] text-[14px] text-center whitespace-nowrap">独自ドメイン</p>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <p className="font-semibold leading-[1.5] not-italic relative shrink-0 text-[#2d3748] text-[14px] text-center whitespace-nowrap">ブログ投稿</p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <p className="font-semibold leading-[1.5] not-italic relative shrink-0 text-[#2d3748] text-[14px] text-center whitespace-nowrap">修正代行</p>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <p className="font-semibold leading-[1.5] not-italic relative shrink-0 text-[#2d3748] text-[14px] text-center whitespace-nowrap">SSL対応</p>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <p className="font-semibold leading-[1.5] not-italic relative shrink-0 text-[#2d3748] text-[14px] text-center whitespace-nowrap">
            カスタマイズ
            <br aria-hidden="true" />
            対応
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <p className="font-semibold leading-[1.5] not-italic relative shrink-0 text-[#2d3748] text-[14px] text-center whitespace-nowrap">制作期間</p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <p className="font-semibold leading-[1.5] not-italic relative shrink-0 text-[#2d3748] text-[14px] text-center whitespace-nowrap">初期費用</p>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <p className="font-semibold leading-[1.5] not-italic relative shrink-0 text-[#2d3748] text-[14px] text-center whitespace-nowrap">月額費用</p>
        </div>
      </div>
    </div>
  );
}

function Tlt10() {
  return (
    <div className="absolute bg-[#fafbfd] content-stretch flex flex-col h-[930px] items-start left-0 rounded-[16px] top-0 w-[112px]" data-name="tlt">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-[-0.5px] pointer-events-none rounded-[16.5px]" />
      <Frame1 />
      <Frame17 />
      <Frame2 />
      <Frame13 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame14 />
      <Frame15 />
      <Frame7 />
      <Frame6 />
      <Frame16 />
    </div>
  );
}

function Frame131() {
  return (
    <div className="content-stretch flex flex-col items-center not-italic relative shrink-0 text-[#4f5669] text-center whitespace-nowrap">
      <p className="font-semibold leading-[1.2] relative shrink-0 text-[15px]">コスト・納期重視</p>
      <div className="flex flex-col  justify-center leading-[0] relative shrink-0 text-[20px]">
        <p className="font-['Hiragino_Kaku_Gothic_Std',sans-serif] font-extrabold leading-[1.4]">ビジョクラLITE</p>
      </div>
    </div>
  );
}

function Tlt11() {
  return (
    <div className="bg-[#eff0f3] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-[150px] relative w-full" data-name="tlt">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <Frame131 />
    </div>
  );
}

function Div() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center leading-[1.5] p-[16px] relative size-full text-center whitespace-nowrap">
          <p className="font-semibold relative shrink-0 text-[#2d3748] text-[24px]">1</p>
          <p className="font-semibold not-italic relative shrink-0 text-[#62666c] text-[18px]">ページ</p>
        </div>
      </div>
    </div>
  );
}

function Div1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <p className="font-semibold leading-[1.5] not-italic relative shrink-0 text-[#62666c] text-[18px] text-center whitespace-nowrap">テンプレート</p>
        </div>
      </div>
    </div>
  );
}

function Div2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <div className="bg-[#4f5669] content-stretch flex flex-col items-start px-[6px] py-[7px] relative rounded-[12px] shrink-0 size-[24px]" data-name="check">
            <div className="h-[9.4px] relative shrink-0 w-[12px]" data-name="check_small">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9.4">
                <path d={svgPaths.p35d39780} fill="var(--fill-0, white)" id="check_small" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <p className="font-semibold leading-[1.5] not-italic relative shrink-0 text-[#62666c] text-[18px] text-center whitespace-nowrap">オプション</p>
        </div>
      </div>
    </div>
  );
}

function Div4() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <p className="font-semibold leading-[1.5] not-italic relative shrink-0 text-[#62666c] text-[18px] text-center whitespace-nowrap">オプション</p>
        </div>
      </div>
    </div>
  );
}

function Div5() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <div className="content-stretch flex items-center p-[7px] relative shrink-0 size-[24px]" data-name="check">
            <div className="relative shrink-0 size-[9.975px]" data-name="close_small">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.975 9.975">
                <path d={svgPaths.p1df3e600} fill="var(--fill-0, #4F5669)" id="close_small" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div6() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <div className="bg-[#4f5669] content-stretch flex flex-col items-start px-[6px] py-[7px] relative rounded-[12px] shrink-0 size-[24px]" data-name="check">
            <div className="h-[9.4px] relative shrink-0 w-[12px]" data-name="check_small">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9.4">
                <path d={svgPaths.p35d39780} fill="var(--fill-0, white)" id="check_small" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div7() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <div className="content-stretch flex items-center p-[7px] relative shrink-0 size-[24px]" data-name="check">
            <div className="relative shrink-0 size-[9.975px]" data-name="close_small">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.975 9.975">
                <path d={svgPaths.p1df3e600} fill="var(--fill-0, #4F5669)" id="close_small" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div8() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <p className="font-semibold leading-[1.5] not-italic relative shrink-0 text-[#62666c] text-[18px] text-center whitespace-nowrap">最短1週間</p>
        </div>
      </div>
    </div>
  );
}

function Div9() {
  return (
    <div className="bg-[#eff0f3] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center p-[16px] relative size-full text-center whitespace-nowrap">
          <p className="font-black leading-none relative shrink-0 text-[#4f5669] font-extrabold text-[40px]">0</p>
          <p className=" leading-[normal] not-italic relative shrink-0 text-[#2d3748] text-[20px]">円</p>
        </div>
      </div>
    </div>
  );
}

function Div10() {
  return (
    <div className="bg-[#eff0f3] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center p-[16px] relative size-full text-center whitespace-nowrap">
          <p className="font-black leading-none relative shrink-0 text-[#4f5669] font-extrabold text-[40px]">900</p>
          <p className=" leading-[normal] not-italic relative shrink-0 text-[#2d3748] text-[20px]">円~</p>
        </div>
      </div>
    </div>
  );
}

function Plan1() {
  return (
    <div className="absolute h-[930px] left-[112px] rounded-[16px] top-0 w-[272px]" data-name="plan">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <Tlt11 />
        <Div />
        <Div1 />
        <Div2 />
        <Div3 />
        <Div4 />
        <Div5 />
        <Div6 />
        <Div7 />
        <Div8 />
        <Div9 />
        <Div10 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-[-0.5px] pointer-events-none rounded-[16.5px]" />
    </div>
  );
}

function Frame132() {
  return (
    <div className="content-stretch flex flex-col items-center not-italic relative shrink-0 text-[#00b5ad] text-center whitespace-nowrap">
      <p className="font-semibold leading-[1.2] relative shrink-0 text-[15px]">低コストでも充実の内容</p>
      <div className="flex flex-col  justify-center leading-[0] relative shrink-0 text-[20px]">
        <p className="font-['Hiragino_Kaku_Gothic_Std',sans-serif] font-extrabold leading-[1.4]">ビジョクラ</p>
      </div>
    </div>
  );
}

function Tlt12() {
  return (
    <div className="bg-[#eaf9f9] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-[150px] relative w-full" data-name="tlt">
      <div aria-hidden="true" className="absolute border-[#eff0f3] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <Frame132 />
    </div>
  );
}

function Div11() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#eff0f3] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center leading-[1.5] p-[16px] relative size-full text-center whitespace-nowrap">
          <p className="font-semibold relative shrink-0 text-[#2d3748] text-[24px]">6</p>
          <p className="font-semibold not-italic relative shrink-0 text-[#62666c] text-[18px]">ページ</p>
        </div>
      </div>
    </div>
  );
}

function Div12() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#eff0f3] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <p className="font-semibold leading-[1.5] not-italic relative shrink-0 text-[#62666c] text-[18px] text-center whitespace-nowrap">テンプレート</p>
        </div>
      </div>
    </div>
  );
}

function Div13() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#eff0f3] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <div className="bg-[#00b5ad] content-stretch flex flex-col items-start px-[6px] py-[7px] relative rounded-[12px] shrink-0 size-[24px]" data-name="check">
            <div className="h-[9.4px] relative shrink-0 w-[12px]" data-name="check_small">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9.4">
                <path d={svgPaths.p35d39780} fill="var(--fill-0, white)" id="check_small" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div14() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#eff0f3] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <div className="bg-[#00b5ad] content-stretch flex flex-col items-start px-[6px] py-[7px] relative rounded-[12px] shrink-0 size-[24px]" data-name="check">
            <div className="h-[9.4px] relative shrink-0 w-[12px]" data-name="check_small">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9.4">
                <path d={svgPaths.p35d39780} fill="var(--fill-0, white)" id="check_small" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div15() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#eff0f3] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <div className="bg-[#00b5ad] content-stretch flex flex-col items-start px-[6px] py-[7px] relative rounded-[12px] shrink-0 size-[24px]" data-name="check">
            <div className="h-[9.4px] relative shrink-0 w-[12px]" data-name="check_small">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9.4">
                <path d={svgPaths.p35d39780} fill="var(--fill-0, white)" id="check_small" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div16() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#eff0f3] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <div className="content-stretch flex items-center p-[7px] relative shrink-0 size-[24px]" data-name="check">
            <div className="relative shrink-0 size-[9.975px]" data-name="close_small">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.975 9.975">
                <path d={svgPaths.p1df3e600} fill="var(--fill-0, #00B5AD)" id="close_small" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div17() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#eff0f3] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <div className="bg-[#00b5ad] content-stretch flex flex-col items-start px-[6px] py-[7px] relative rounded-[12px] shrink-0 size-[24px]" data-name="check">
            <div className="h-[9.4px] relative shrink-0 w-[12px]" data-name="check_small">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9.4">
                <path d={svgPaths.p35d39780} fill="var(--fill-0, white)" id="check_small" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div18() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#eff0f3] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <div className="content-stretch flex items-center p-[7px] relative shrink-0 size-[24px]" data-name="check">
            <div className="relative shrink-0 size-[9.975px]" data-name="close_small">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.975 9.975">
                <path d={svgPaths.p1df3e600} fill="var(--fill-0, #00B5AD)" id="close_small" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div19() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#eff0f3] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <p className="font-semibold leading-[1.5] not-italic relative shrink-0 text-[#62666c] text-[18px] text-center whitespace-nowrap">1～2週間</p>
        </div>
      </div>
    </div>
  );
}

function Div20() {
  return (
    <div className="bg-[#eaf9f9] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#eff0f3] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center p-[16px] relative size-full text-center whitespace-nowrap">
          <p className="font-black leading-none relative shrink-0 text-[#00b5ad] font-extrabold text-[40px]">0</p>
          <p className=" leading-[normal] not-italic relative shrink-0 text-[#2d3748] text-[20px]">円</p>
        </div>
      </div>
    </div>
  );
}

function Div21() {
  return (
    <div className="bg-[#eaf9f9] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center p-[16px] relative size-full text-center whitespace-nowrap">
          <p className="font-black leading-none relative shrink-0 text-[#00b5ad] font-extrabold text-[40px]">3,980</p>
          <p className=" leading-[normal] not-italic relative shrink-0 text-[#2d3748] text-[20px]">円～</p>
        </div>
      </div>
    </div>
  );
}

function Plan2() {
  return (
    <div className="absolute bg-white h-[930px] left-[384px] rounded-[16px] top-0 w-[272px]" data-name="plan">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <Tlt12 />
        <Div11 />
        <Div12 />
        <Div13 />
        <Div14 />
        <Div15 />
        <Div16 />
        <Div17 />
        <Div18 />
        <Div19 />
        <Div20 />
        <Div21 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-[-0.5px] pointer-events-none rounded-[16.5px]" />
    </div>
  );
}

function Frame133() {
  return (
    <div className="content-stretch flex flex-col items-center not-italic relative shrink-0 text-[#ff7e33] text-center whitespace-nowrap">
      <p className="font-semibold leading-[1.2] relative shrink-0 text-[15px]">広告を打って集客、宣伝</p>
      <div className="flex flex-col  justify-center leading-[0] relative shrink-0 text-[20px]">
        <p className="font-['Hiragino_Kaku_Gothic_Std',sans-serif] font-extrabold leading-[1.4]">LP(ランディングページ)</p>
      </div>
    </div>
  );
}

function Tlt13() {
  return (
    <div className="bg-[#fff4ec] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-[150px] relative w-full" data-name="tlt">
      <div aria-hidden="true" className="absolute border-[#eff0f3] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <Frame133 />
    </div>
  );
}

function Div22() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#eff0f3] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center leading-[1.5] p-[16px] relative size-full text-center whitespace-nowrap">
          <p className="font-semibold relative shrink-0 text-[#2d3748] text-[24px]">1</p>
          <p className="font-semibold not-italic relative shrink-0 text-[#62666c] text-[18px]">ページ～</p>
        </div>
      </div>
    </div>
  );
}

function Div23() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#eff0f3] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[#62666c] text-[18px] text-center whitespace-nowrap">
            <p className="leading-[1.5] mb-0">オリジナル</p>
            <p className="leading-[1.5]">デザイン</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div24() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#eff0f3] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <div className="bg-[#ff7e33] content-stretch flex flex-col items-start px-[6px] py-[7px] relative rounded-[12px] shrink-0 size-[24px]" data-name="check">
            <div className="h-[9.4px] relative shrink-0 w-[12px]" data-name="check_small">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9.4">
                <path d={svgPaths.p35d39780} fill="var(--fill-0, white)" id="check_small" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div25() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#eff0f3] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <div className="bg-[#ff7e33] content-stretch flex flex-col items-start px-[6px] py-[7px] relative rounded-[12px] shrink-0 size-[24px]" data-name="check">
            <div className="h-[9.4px] relative shrink-0 w-[12px]" data-name="check_small">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9.4">
                <path d={svgPaths.p35d39780} fill="var(--fill-0, white)" id="check_small" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Remove() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="remove">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="remove">
          <mask height="16" id="mask0_1_3184" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_3184)">
            <path d={svgPaths.p35e51200} fill="var(--fill-0, #FF7E33)" id="remove_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Div26() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#eff0f3] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <div className="content-stretch flex items-center justify-center p-[7px] relative shrink-0 size-[24px]" data-name="check">
            <Remove />
          </div>
        </div>
      </div>
    </div>
  );
}

function Div27() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#eff0f3] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <div className="content-stretch flex items-center p-[7px] relative shrink-0 size-[24px]" data-name="check">
            <div className="relative shrink-0 size-[9.975px]" data-name="close_small">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.975 9.975">
                <path d={svgPaths.p1df3e600} fill="var(--fill-0, #FF7E33)" id="close_small" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div28() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#eff0f3] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <div className="bg-[#ff7e33] content-stretch flex flex-col items-start px-[6px] py-[7px] relative rounded-[12px] shrink-0 size-[24px]" data-name="check">
            <div className="h-[9.4px] relative shrink-0 w-[12px]" data-name="check_small">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9.4">
                <path d={svgPaths.p35d39780} fill="var(--fill-0, white)" id="check_small" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div29() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#eff0f3] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <div className="content-stretch flex items-center p-[7px] relative shrink-0 size-[24px]" data-name="check">
            <div className="relative shrink-0 size-[9.975px]" data-name="close_small">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.975 9.975">
                <path d={svgPaths.p1df3e600} fill="var(--fill-0, #FF7E33)" id="close_small" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div30() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#eff0f3] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <p className="font-semibold leading-[1.5] not-italic relative shrink-0 text-[#62666c] text-[18px] text-center whitespace-nowrap">10日～30日</p>
        </div>
      </div>
    </div>
  );
}

function Div31() {
  return (
    <div className="bg-[#fff4ec] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#eff0f3] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center p-[16px] relative size-full text-center whitespace-nowrap">
          <p className="font-black leading-none relative shrink-0 text-[#ff7e33] font-extrabold text-[40px]">0</p>
          <p className=" leading-[normal] not-italic relative shrink-0 text-[#2d3748] text-[20px]">円</p>
        </div>
      </div>
    </div>
  );
}

function Div32() {
  return (
    <div className="bg-[#fff4ec] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center p-[16px] relative size-full">
          <p className="font-['Hiragino_Kaku_Gothic_Std',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[#2d3748] text-[24px] text-center whitespace-nowrap">別途ご相談</p>
        </div>
      </div>
    </div>
  );
}

function Plan3() {
  return (
    <div className="absolute h-[930px] left-[928px] rounded-[16px] top-0 w-[272px]" data-name="plan">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <Tlt13 />
        <Div22 />
        <Div23 />
        <Div24 />
        <Div25 />
        <Div26 />
        <Div27 />
        <Div28 />
        <Div29 />
        <Div30 />
        <Div31 />
        <Div32 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-[-0.5px] pointer-events-none rounded-[16.5px]" />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="label">
      <div className="h-[26px] relative shrink-0 w-[60px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 26">
          <ellipse cx="30" cy="13" fill="var(--fill-0, #FFE347)" id="Ellipse 4" rx="30" ry="13" />
        </svg>
      </div>
      <p className="-translate-x-1/2 absolute font-['Hiragino_Kaku_Gothic_Std',sans-serif] font-extrabold leading-[1.2] left-[calc(50%+0.5px)] not-italic text-[#dc2626] text-[11px] text-center top-[calc(50%-6.75px)] tracking-[-0.44px] whitespace-nowrap">おすすめ</p>
    </div>
  );
}

function Frame135() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <Label3 />
      <p className="font-semibold leading-[1.2] not-italic relative shrink-0 text-[15px] text-center text-white tracking-[-1.5px] whitespace-nowrap">集客・ブランディング</p>
    </div>
  );
}

function Frame134() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <Frame135 />
      <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-white whitespace-nowrap">
        <p className="font-['Hiragino_Kaku_Gothic_Std',sans-serif] font-extrabold leading-[1.4]">MORPHコーポレート</p>
      </div>
    </div>
  );
}

function Tlt14() {
  return (
    <div className="bg-[#137fec] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-[150px] relative w-full" data-name="tlt">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <Frame134 />
    </div>
  );
}

function Div33() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center leading-[1.5] p-[16px] relative size-full text-center whitespace-nowrap">
          <p className="font-semibold relative shrink-0 text-[#2d3748] text-[24px]">6</p>
          <p className="font-semibold not-italic relative shrink-0 text-[#62666c] text-[18px]">ページ～</p>
        </div>
      </div>
    </div>
  );
}

function Div34() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[#62666c] text-[18px] text-center whitespace-nowrap">
            <p className="leading-[1.5] mb-0">オリジナル</p>
            <p className="leading-[1.5]">デザイン</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div35() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <div className="bg-[#137fec] content-stretch flex flex-col items-start px-[6px] py-[7px] relative rounded-[12px] shrink-0 size-[24px]" data-name="check">
            <div className="h-[9.4px] relative shrink-0 w-[12px]" data-name="check_small">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9.4">
                <path d={svgPaths.p35d39780} fill="var(--fill-0, white)" id="check_small" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div36() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <div className="bg-[#137fec] content-stretch flex flex-col items-start px-[6px] py-[7px] relative rounded-[12px] shrink-0 size-[24px]" data-name="check">
            <div className="h-[9.4px] relative shrink-0 w-[12px]" data-name="check_small">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9.4">
                <path d={svgPaths.p35d39780} fill="var(--fill-0, white)" id="check_small" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div37() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <div className="bg-[#137fec] content-stretch flex flex-col items-start px-[6px] py-[7px] relative rounded-[12px] shrink-0 size-[24px]" data-name="check">
            <div className="h-[9.4px] relative shrink-0 w-[12px]" data-name="check_small">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9.4">
                <path d={svgPaths.p35d39780} fill="var(--fill-0, white)" id="check_small" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div38() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <div className="bg-[#137fec] content-stretch flex flex-col items-start px-[6px] py-[7px] relative rounded-[12px] shrink-0 size-[24px]" data-name="check">
            <div className="h-[9.4px] relative shrink-0 w-[12px]" data-name="check_small">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9.4">
                <path d={svgPaths.p35d39780} fill="var(--fill-0, white)" id="check_small" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div39() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <div className="bg-[#137fec] content-stretch flex flex-col items-start px-[6px] py-[7px] relative rounded-[12px] shrink-0 size-[24px]" data-name="check">
            <div className="h-[9.4px] relative shrink-0 w-[12px]" data-name="check_small">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9.4">
                <path d={svgPaths.p35d39780} fill="var(--fill-0, white)" id="check_small" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div40() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <div className="bg-[#137fec] content-stretch flex flex-col items-start px-[6px] py-[7px] relative rounded-[12px] shrink-0 size-[24px]" data-name="check">
            <div className="h-[9.4px] relative shrink-0 w-[12px]" data-name="check_small">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9.4">
                <path d={svgPaths.p35d39780} fill="var(--fill-0, white)" id="check_small" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div41() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <p className="font-semibold leading-[1.5] not-italic relative shrink-0 text-[#62666c] text-[18px] text-center whitespace-nowrap">1～3ヶ月</p>
        </div>
      </div>
    </div>
  );
}

function Div42() {
  return (
    <div className="bg-[#edf6ff] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center p-[16px] relative size-full text-center whitespace-nowrap">
          <p className="font-black leading-none relative shrink-0 text-[#137fec] font-extrabold text-[40px]">0</p>
          <p className=" leading-[normal] not-italic relative shrink-0 text-[#2d3748] text-[20px]">円</p>
        </div>
      </div>
    </div>
  );
}

function Div43() {
  return (
    <div className="bg-[#edf6ff] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center p-[16px] relative size-full text-center whitespace-nowrap">
          <p className="font-black leading-none relative shrink-0 text-[#137fec] font-extrabold text-[40px]">9,800</p>
          <p className=" leading-[normal] not-italic relative shrink-0 text-[#2d3748] text-[20px]">円～</p>
        </div>
      </div>
    </div>
  );
}

function Plan4() {
  return (
    <div className="absolute h-[930px] left-[656px] rounded-[16px] top-0 w-[272px]" data-name="plan">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <Tlt14 />
        <Div33 />
        <Div34 />
        <Div35 />
        <Div36 />
        <Div37 />
        <Div38 />
        <Div39 />
        <Div40 />
        <Div41 />
        <Div42 />
        <Div43 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#137fec] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[930px] relative shrink-0 w-full" data-name="table">
      <Tlt10 />
      <Plan1 />
      <Plan2 />
      <Plan3 />
      <Plan4 />
    </div>
  );
}

function ScrollableTable() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hintVisible, setHintVisible] = React.useState(true);

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onDown = (e: MouseEvent) => {
      isDown = true;
      el.style.cursor = "grabbing";
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };
    const onUp = () => {
      isDown = false;
      el.style.cursor = "grab";
    };
    const onMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      el.scrollLeft = scrollLeft - (x - startX);
    };
    const hideHint = () => {
      if (el.scrollLeft > 8) setHintVisible(false);
    };

    el.addEventListener("mousedown", onDown);
    el.addEventListener("mouseleave", onUp);
    el.addEventListener("mouseup", onUp);
    el.addEventListener("mousemove", onMove);
    el.addEventListener("scroll", hideHint, { passive: true });
    el.addEventListener("touchstart", () => setHintVisible(false), { passive: true });

    return () => {
      el.removeEventListener("mousedown", onDown);
      el.removeEventListener("mouseleave", onUp);
      el.removeEventListener("mouseup", onUp);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("scroll", hideHint);
    };
  }, []);

  return (
    <div className="relative w-full">
      <div
        ref={containerRef}
        className="overflow-x-auto overflow-y-hidden lg:overflow-visible select-none lg:select-auto"
        style={{ cursor: "grab", WebkitOverflowScrolling: "touch" }}
      >
        <div className="w-[1200px] lg:w-full">
          <Table />
        </div>
      </div>
      {/* Scroll hint — mobile only, fades on first interaction */}
      <div
        className={`lg:hidden pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
          hintVisible ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      >
        <div className="bg-[rgba(45,55,72,0.78)] rounded-[16px] px-[32px] py-[24px] flex flex-col items-center gap-[8px] text-white">
          <div className="flex items-center gap-[12px]">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
            <span className="material-icons text-[40px]" style={{ fontFamily: "Material Icons" }}>
              touch_app
            </span>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
            </svg>
          </div>
          <p className="font-bold text-[18px] italic tracking-wide">scrollable</p>
        </div>
      </div>
    </div>
  );
}

function TableComment() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative rounded-[16px] shrink-0 w-full lg:w-[1200px]" data-name="table+comment">
      <ScrollableTable />
      <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#2d3748] text-[14px] w-full">
        <p className="leading-[1.5] mb-0">※ 各プランの内容は最低構成となります。</p>
        <p className="leading-[1.5] mb-0">※ 作業内容・ボリュームにより対応範囲が異なる場合があります。</p>
        <p className="leading-[1.5]">※ 詳細は事前にご相談ください。</p>
      </div>
    </div>
  );
}

function Frame143() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col  items-center justify-center leading-[normal] min-h-px min-w-px not-italic relative text-white">
      <p className="relative shrink-0 font-semibold text-[23px] tracking-[0.46px] w-full">無料資料を受け取る</p>
      <p className="relative shrink-0 text-[16px] tracking-[0.32px] w-full">1分で完了 · 登録不要</p>
    </div>
  );
}

function ArrowForward3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow_forward">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_forward">
          <mask height="24" id="mask0_1_3970" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_1_3970)">
            <path d={svgPaths.p54e7200} fill="var(--fill-0, #FF4343)" id="arrow_forward_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ArrowCircle7() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[56px]" data-name="Arrow Circle">
      <ArrowForward3 />
    </div>
  );
}

function StrokedJp({ children }: { children: string }) {
  const text = children;
  const fontSize = 28;
  const lineHeight = Math.round(fontSize * 1.3);
  const tracking = 5.6;
  const charCount = [...text].length;
  const width = Math.max(fontSize, Math.round(charCount * fontSize + (charCount - 1) * tracking));
  return (
    <svg
      width={width}
      height={lineHeight}
      viewBox={`0 0 ${width} ${lineHeight}`}
      overflow="visible"
      className="block"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x={width / 2}
        y={Math.round(fontSize * 0.95)}
        textAnchor="middle"
        fill="#FFF"
        stroke="#2D3748"
        strokeWidth="9"
        strokeLinejoin="round"
        strokeLinecap="round"
        paintOrder="stroke"
        fontFamily="'Hiragino Kaku Gothic Std', 'Hiragino Kaku Gothic Pro', sans-serif"
        fontWeight="800"
        fontSize={fontSize}
        letterSpacing={charCount > 1 ? tracking : 0}
      >
        {text}
      </text>
    </svg>
  );
}

function Frame146() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-[28px]">
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #2D3748)" id="Ellipse 3" r="3" />
        </svg>
      </div>
      <StrokedJp>安</StrokedJp>
    </div>
  );
}

function Frame147() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-[28px]">
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #2D3748)" id="Ellipse 3" r="3" />
        </svg>
      </div>
      <StrokedJp>心</StrokedJp>
    </div>
  );
}

function Frame148() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-[28px]">
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #2D3748)" id="Ellipse 3" r="3" />
        </svg>
      </div>
      <StrokedJp>サ</StrokedJp>
    </div>
  );
}

function Frame149() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-[28px]">
      <StrokedJp>ー</StrokedJp>
    </div>
  );
}

function Frame150() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-[28px]">
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #2D3748)" id="Ellipse 3" r="3" />
        </svg>
      </div>
      <StrokedJp>ビ</StrokedJp>
    </div>
  );
}

function Frame151() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-[28px]">
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #2D3748)" id="Ellipse 3" r="3" />
        </svg>
      </div>
      <StrokedJp>ス</StrokedJp>
    </div>
  );
}

function Frame145() {
  return (
    <div className="content-stretch flex gap-[8px] items-end justify-center relative shrink-0">
      <Frame146 />
      <Frame147 />
      <StrokedJp>できる</StrokedJp>
      <div className="flex h-[60.565px] items-center justify-center relative shrink-0 w-[57.777px]">
        <div className="flex-none rotate-[3.927deg]">
          <svg width="58" height="61" viewBox="0 0 58 61" overflow="visible" xmlns="http://www.w3.org/2000/svg">
            <text
              x="29"
              y="44"
              textAnchor="middle"
              fill="#FFF"
              stroke="#2D3748"
              strokeWidth="12"
              strokeLinejoin="round"
              strokeLinecap="round"
              paintOrder="stroke"
              fontFamily="Lexend, sans-serif"
              fontWeight="800"
              fontSize="44"
              letterSpacing="1.76"
            >
              11
            </text>
          </svg>
        </div>
      </div>
      <StrokedJp>の</StrokedJp>
      <Frame148 />
      <Frame149 />
      <Frame150 />
      <Frame151 />
    </div>
  );
}

function Frame144() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0">
      <Frame145 />
      <div className="h-[25px] relative shrink-0 w-full">
        <div className="absolute inset-[-8%_-0.5%_-14.18%_-0.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 404 30.5461">
            <path d={svgPaths.p3e16ec00} id="Vector 9" stroke="var(--stroke-0, #2D3748)" strokeLinecap="round" strokeWidth="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[54px]" data-name="icon">
        <div className="absolute inset-[4.17%_8.33%_12.5%_8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.5px_-2.25px] mask-size-[54px_54px]" style={{ maskImage: `url('${imgDrafts}')` }} data-name="drafts">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
            <path d={svgPaths.pa24080} fill="var(--fill-0, white)" id="drafts" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Option12() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-center p-[20px] relative rounded-[16px] shrink-0 size-[200px]" data-name="option">
      <div aria-hidden="true" className="absolute border border-[rgba(19,127,236,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-[#137fec] content-stretch flex flex-col items-center justify-center p-[16px] relative rounded-[100px] shrink-0 size-[100px]" data-name="option">
        <Frame62 />
      </div>
      <div className="flex flex-col font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#2d3748] text-[20px] text-center w-[min-content]">
        <p className="leading-[1.8]">メール設定</p>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[54px]" data-name="icon">
        <div className="absolute inset-[12.5%_12.5%_8.33%_12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-6.75px_-6.75px] mask-size-[54px_54px]" style={{ maskImage: `url('${imgDrafts}')` }} data-name="dns">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.5 42.75">
            <path d={svgPaths.p308ffd00} fill="var(--fill-0, white)" id="dns" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Option13() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-center p-[20px] relative rounded-[16px] shrink-0 size-[200px]" data-name="option">
      <div aria-hidden="true" className="absolute border border-[rgba(19,127,236,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-[#137fec] content-stretch flex flex-col items-center justify-center p-[16px] relative rounded-[100px] shrink-0 size-[100px]" data-name="option">
        <Frame63 />
      </div>
      <div className="flex flex-col font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#2d3748] text-[20px] text-center w-[min-content]">
        <p className="leading-[1.8]">サーバー設定</p>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[54px]" data-name="icon">
        <div className="absolute inset-[12.5%_8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.5px_-6.75px] mask-size-[54px_54px]" style={{ maskImage: `url('${imgDrafts}')` }} data-name="domain">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 40.5">
            <path d={svgPaths.p13214040} fill="var(--fill-0, white)" id="domain" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Option14() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-center p-[20px] relative rounded-[16px] shrink-0 size-[200px]" data-name="option">
      <div aria-hidden="true" className="absolute border border-[rgba(19,127,236,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-[#137fec] content-stretch flex flex-col items-center justify-center p-[16px] relative rounded-[100px] shrink-0 size-[100px]" data-name="option">
        <Frame64 />
      </div>
      <div className="flex flex-col font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#2d3748] text-[20px] text-center w-[min-content]">
        <p className="leading-[1.8]">ドメイン取得代行</p>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[54px]" data-name="icon">
        <div className="absolute inset-[8.33%_4.17%_8.33%_4.12%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.227px_-4.5px] mask-size-[54px_54px]" style={{ maskImage: `url('${imgDrafts}')` }} data-name="handshake">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.5225 45">
            <path d={svgPaths.ped8aa00} fill="var(--fill-0, white)" id="handshake" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Option15() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-center p-[20px] relative rounded-[16px] shrink-0 size-[200px]" data-name="option">
      <div aria-hidden="true" className="absolute border border-[rgba(19,127,236,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-[#137fec] content-stretch flex flex-col items-center justify-center p-[16px] relative rounded-[100px] shrink-0 size-[100px]" data-name="option">
        <Frame65 />
      </div>
      <div className="flex flex-col font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#2d3748] text-[20px] text-center w-[min-content]">
        <p className="leading-[1.8]">広告運用代行</p>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[54px]" data-name="icon">
        <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.5px_-4.5px] mask-size-[54px_54px]" style={{ maskImage: `url('${imgDrafts}')` }} data-name="g_translate">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
            <path d={svgPaths.pb67f300} fill="var(--fill-0, white)" id="g_translate" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Option16() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-center p-[20px] relative rounded-[16px] shrink-0 size-[200px]" data-name="option">
      <div aria-hidden="true" className="absolute border border-[rgba(19,127,236,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-[#137fec] content-stretch flex flex-col items-center justify-center p-[16px] relative rounded-[100px] shrink-0 size-[100px]" data-name="option">
        <Frame66 />
      </div>
      <div className="flex flex-col font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#2d3748] text-[20px] text-center w-[min-content]">
        <p className="leading-[1.8]">翻訳</p>
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[54px]" data-name="icon">
        <div className="absolute inset-[4.17%_4.17%_12.5%_4.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.25px_-2.25px] mask-size-[54px_54px]" style={{ maskImage: `url('${imgDrafts}')` }} data-name="add_a_photo">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.5 45">
            <path d={svgPaths.pc8f2680} fill="var(--fill-0, white)" id="add_a_photo" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Option17() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-center p-[20px] relative rounded-[16px] shrink-0 size-[200px]" data-name="option">
      <div aria-hidden="true" className="absolute border border-[rgba(19,127,236,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-[#137fec] content-stretch flex flex-col items-center justify-center p-[16px] relative rounded-[100px] shrink-0 size-[100px]" data-name="option">
        <Frame67 />
      </div>
      <div className="flex flex-col font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#2d3748] text-[20px] text-center w-[min-content]">
        <p className="leading-[1.8]">写真/動画撮影</p>
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[54px]" data-name="icon">
        <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.5px_-4.5px] mask-size-[54px_54px]" style={{ maskImage: `url('${imgDrafts}')` }} data-name="chat">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
            <path d={svgPaths.p14dfc780} fill="var(--fill-0, white)" id="chat" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Option18() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-center p-[20px] relative rounded-[16px] shrink-0 size-[200px]" data-name="option">
      <div aria-hidden="true" className="absolute border border-[rgba(19,127,236,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-[#137fec] content-stretch flex flex-col items-center justify-center p-[16px] relative rounded-[100px] shrink-0 size-[100px]" data-name="option">
        <Frame69 />
      </div>
      <div className="flex flex-col font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#2d3748] text-[20px] text-center w-[min-content]">
        <p className="leading-[1.8]">チャットサポート</p>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[54px]" data-name="icon">
        <div className="absolute inset-[16.67%_4.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.25px_-9px] mask-size-[54px_54px]" style={{ maskImage: `url('${imgDrafts}')` }} data-name="cloud_upload">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.5 36">
            <path d={svgPaths.p33713100} fill="var(--fill-0, white)" id="cloud_upload" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Option19() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-center p-[20px] relative rounded-[16px] shrink-0 size-[200px]" data-name="option">
      <div aria-hidden="true" className="absolute border border-[rgba(19,127,236,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-[#137fec] content-stretch flex flex-col items-center justify-center p-[16px] relative rounded-[100px] shrink-0 size-[100px]" data-name="option">
        <Frame70 />
      </div>
      <div className="flex flex-col font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#2d3748] text-[20px] text-center w-[min-content]">
        <p className="leading-[1.8]">バックアップ</p>
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[54px]" data-name="icon">
        <div className="absolute inset-[4.17%_16.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-9px_-2.25px] mask-size-[54px_54px]" style={{ maskImage: `url('${imgDrafts}')` }} data-name="autorenew">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 49.5">
            <path d={svgPaths.p3083fe00} fill="var(--fill-0, white)" id="autorenew" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Option20() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-center p-[20px] relative rounded-[16px] shrink-0 size-[200px]" data-name="option">
      <div aria-hidden="true" className="absolute border border-[rgba(19,127,236,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-[#137fec] content-stretch flex flex-col items-center justify-center p-[16px] relative rounded-[100px] shrink-0 size-[100px]" data-name="option">
        <Frame71 />
      </div>
      <div className="flex flex-col font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#2d3748] text-[20px] text-center w-[min-content]">
        <p className="leading-[1.8]">アップデート代行</p>
      </div>
    </div>
  );
}

function Frame152() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[54px]" data-name="icon">
        <div className="absolute inset-[8.33%_4.17%_8.33%_16.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-9px_-4.5px] mask-size-[54px_54px]" style={{ maskImage: `url('${imgDrafts}')` }} data-name="edit_document">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.75 45">
            <path d={svgPaths.p1debaf00} fill="var(--fill-0, white)" id="edit_document" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Option21() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-center p-[20px] relative rounded-[16px] shrink-0 size-[200px]" data-name="option">
      <div aria-hidden="true" className="absolute border border-[rgba(19,127,236,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-[#137fec] content-stretch flex flex-col items-center justify-center p-[16px] relative rounded-[100px] shrink-0 size-[100px]" data-name="option">
        <Frame152 />
      </div>
      <div className="flex flex-col font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#2d3748] text-[20px] text-center w-[min-content]">
        <p className="leading-[1.8]">テキスト修正</p>
      </div>
    </div>
  );
}

function Frame153() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[54px]" data-name="icon">
        <div className="absolute inset-[8.33%_4.17%_4.17%_12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-6.75px_-4.5px] mask-size-[54px_54px]" style={{ maskImage: `url('${imgDrafts}')` }} data-name="play_lesson">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 47.25">
            <path d={svgPaths.p19fcf600} fill="var(--fill-0, white)" id="play_lesson" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Option22() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-center p-[20px] relative rounded-[16px] shrink-0 size-[200px]" data-name="option">
      <div aria-hidden="true" className="absolute border border-[rgba(19,127,236,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-[#137fec] content-stretch flex flex-col items-center justify-center p-[16px] relative rounded-[100px] shrink-0 size-[100px]" data-name="option">
        <Frame153 />
      </div>
      <div className="flex flex-col font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#2d3748] text-[20px] text-center w-[min-content]">
        <p className="leading-[1.8]">操作レクチャー</p>
      </div>
    </div>
  );
}

function Group75() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+3.25px)] top-[calc(50%+7px)]">
      <div className="-translate-y-1/2 absolute flex h-[64.546px] items-center justify-center right-[108.44px] top-[calc(50%-12.73px)] w-[86.059px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[116.79deg] skew-x-[0.12deg]">
          <div className="h-[80.156px] relative w-[32.011px]" data-name="illust">
            <div className="absolute inset-[-1.87%_-4.39%_-1.87%_-4.69%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.9158 83.1566">
                <path d={svgPaths.p2d9f2700} id="illust" stroke="var(--stroke-0, #064B82)" strokeDasharray="2 6" strokeLinecap="round" strokeWidth="3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-[-1px] size-[120.137px] top-[11.93px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120.137 120.137">
          <path d={svgPaths.p23d27600} fill="var(--fill-0, #FFE347)" id="Vector" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[54.568px] items-center justify-center left-[141.86px] top-[71.08px] w-[99.362px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="flex-none rotate-[3.99deg] skew-x-[-0.02deg]">
          <div className="flex flex-col font-['Inter:Black','Noto_Sans_JP:Black',sans-serif] font-black h-[47.991px] justify-center leading-[0] not-italic relative text-[#2d3748] text-[20px] text-center tracking-[-1.2px] w-[96.239px]">
            <p className="leading-[1.2] mb-0">ここまで</p>
            <p className="leading-[1.2]">やります！</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Deco1() {
  return (
    <div className="shrink-0 w-[200px] aspect-[402/265] relative" data-name="deco">
      <img alt="ここまでやります" src={imgDeco} className="absolute inset-0 size-full object-contain" />
    </div>
  );
}

function Frame54() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-6 gap-[16px] max-w-[1280px] px-[16px] lg:px-0 relative shrink-0 w-full [&>*]:size-auto">
      <Option12 />
      <Option13 />
      <Option14 />
      <Option15 />
      <Option16 />
      <Option17 />
      <Option18 />
      <Option19 />
      <Option20 />
      <Option21 />
      <Option22 />
      <Deco1 />
    </div>
  );
}

function Option11() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] lg:gap-[40px] items-center py-[60px] lg:py-[100px] relative shrink-0 w-full" data-name="option">
      <Frame144 />
      <Frame54 />
    </div>
  );
}

function Plan() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] lg:gap-[40px] lg:h-[2354px] items-center px-[16px] lg:px-0 py-[60px] lg:py-[100px] relative shrink-0 w-full" data-name="plan">
      <Tlt9 />
      <TableComment />
      <div className="max-h-[100px] max-w-[400px] min-h-[80px] min-w-[320px] relative rounded-[999px] shadow-[0px_2px_8px_0px_rgba(158,36,36,0.16),0px_4px_16px_0px_rgba(158,36,36,0.08)] shrink-0 w-full" data-name="cta">
        <div aria-hidden="true" className="absolute bg-[#ff4343] inset-0 pointer-events-none rounded-[999px]" />
        <div className="flex flex-row items-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-between max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] pl-[32px] pr-[16px] py-[16px] relative size-full">
            <Frame143 />
            <ArrowCircle7 />
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_2px_2px_4px_0px_rgba(255,255,255,0.24)]" />
      </div>
      <Option11 />
    </div>
  );
}

function Tlt15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0" data-name="tlt">
      <div className="flex flex-col font-bold justify-center leading-[0] relative shrink-0 text-[#137fec] text-[28px] text-center uppercase whitespace-nowrap">
        <p className="leading-[1.3]">FaQ</p>
      </div>
      <div className="bg-[#137fec] h-[8px] shrink-0 w-[120px]" />
      <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#2d3748] font-extrabold text-[28px] lg:text-[40px] text-center lg:whitespace-nowrap">
        <p className="leading-[1.4]">よくある質問</p>
      </div>
      <div className="flex flex-col  justify-center leading-[0] not-italic relative shrink-0 text-[#2d3748] text-[14px] lg:text-[20px] text-center lg:whitespace-nowrap">
        <p className="leading-[1.8] mb-0">Web制作や運用に関するご不明な点にお答えします。</p>
        <p className="leading-[1.8]">ここにない質問はお気軽にお問い合わせください。</p>
      </div>
    </div>
  );
}

interface AccordionItemProps {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
  index: number;
}

function AccordionItem({ question, answer, open, onToggle }: AccordionItemProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative w-full">
      <div
        className={`bg-white content-stretch flex gap-[8px] items-center px-[16px] py-[20px] relative rounded-[8px] shrink-0 w-full cursor-pointer transition-colors border-2 border-solid box-border ${
          open
            ? 'border-[#137fec] text-[#137fec]'
            : 'border-[#eaeaea] text-[#2d3748] hover:border-[#bec3cf]'
        }`}
        data-name="arccordion"
        onClick={onToggle}
      >
        <div className="flex flex-col font-extrabold justify-center leading-[0] relative shrink-0 text-[20px] whitespace-nowrap">
          <p className="leading-[1.2]">Q</p>
        </div>
        <div className="flex flex-[1_0_0] flex-col font-['Hiragino_Kaku_Gothic_Pro',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[16px]">
          <p className="leading-[1.8]">{question}</p>
        </div>
        <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0">
          <svg
            className="size-[24px] transition-transform duration-300"
            style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
          >
            <path fill="currentColor" d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </div>
      </div>
      {open && (
        <div
          className="content-stretch flex items-center px-[8px] py-[20px] relative shrink-0 w-full"
          data-name="anwser"
          style={{
            animation: 'slideDown 300ms ease-out forwards'
          }}
        >
          <div className="flex flex-[1_0_0] flex-col justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#2d3748] text-[16px]">
            <p className="leading-[1.8]">{answer}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function Frame154() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  
  const items = [
    {
      question: 'ホームページ.comでホームページを作成するメリットは何ですか？',
      answer: '実際にホームページを作成いただいたお客様に特にご好評な点が2つあります。1つ目は店舗・会社を実際に見る「無料の訪問提案」を行っている点です。魅力の伝わるホームページがどうして作成できるのかを直接話して分かっていただいてからご注文いただけます（※一部お伺いが難しいエリアもあります）。2つ目は起業・開業時にかかせない機器などの手配をまるっとサポートする「トータルソリューション」です。店舗・オフィスどちらのお客さまにも対応しておりますのでお気軽にご相談下さい。起業・開業時の時間のない中、手間がかかる業務を省略することができます。'
    },
    {
      question: 'どのくらいでホームページの作成は完了しますか？',
      answer: '納期は通常1ヶ月～1ヵ月半の納期をいただいております。導入を急いでいるお客様に関しては最短で2週間での納品も可能です。ホームページ制作の希望納期や導入時期に合わせて柔軟に対応いたしますので、お急ぎの方はお気軽にご相談下さい。'
    },
    {
      question: 'ホームページ制作は初めてですが、大丈夫でしょうか？',
      answer: 'もちろん大丈夫です。ホームページ.comは、たくさんの「初めてホームページを作成される方」にご依頼いただいています。前提知識がなくても、まるっとおまかせいただけます。また、インターネット回線や電子機器など、起業・開業の必需品もご提案できますので、ご相談ください。'
    },
    {
      question: '保守サービスはありますか？',
      answer: 'はい。具体的な保守サービスの内容として、ホームページ制作後の改ざん監視、アップデート・プラグイン作業代行、それにあたる不具合の対処代替案の提示、ハッキングされた際の復旧作業、データバックアップサービスの提供及び復元作業となります。保守サービスの各内容についての更なる詳細はお気軽にお問い合わせ下さい。'
    },
    {
      question: 'ホームページ制作の料金はいくらになりますか？',
      answer: 'お客さまの作成したいホームページやご要望によって異なります。複数の制作プランからお選びいただくことになることが多いですが、オーダーメイド対応も承っております。まずは内容をお伺いした上でお見積もりを作成いたしますので、お電話かメールにてお問い合わせください。'
    },
    {
      question: '制作費用の支払いは一括・分割で選べますか？',
      answer: 'ホームページ.comでは、複数の制作プランがあります。支払い方法はお客様のご都合や制作予算に合わせ「分割払い」、「一括払い」からお選び頂けますので、お客様のご要望に応じてお見積りを作成いたします。'
    },
    {
      question: 'オフィス機器など、ホームページ以外の提案もお願いできますか？',
      answer: 'ホームページ.comではホームページ制作の他にも、オフィス機器の取り扱いも幅広く行っております。インターネット回線、電話回線、ビジネスフォン、コピー機など、店舗やオフィスの必需品をまとめてご提案することが可能です。オフィスや店舗の移転・開設・リニューアルの際は、ホームページ制作と併せて、ホームページ.comにご相談ください。'
    }
  ];

  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full max-w-[1280px]">
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
            overflow: hidden;
          }
          to {
            opacity: 1;
            max-height: 500px;
            overflow: visible;
          }
        }
      `}</style>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          open={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          index={index}
        />
      ))}
    </div>
  );
}

function Faq() {
  return (
    <div className="bg-[#f5f8fc] content-stretch flex flex-col gap-[24px] lg:gap-[40px] items-center overflow-clip px-[16px] lg:px-0 py-[60px] lg:py-[100px] relative shrink-0 w-full" data-name="faq">
      <Tlt15 />
      <Frame154 />
    </div>
  );
}

function Group76() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[960px] top-1/2 opacity-20 lg:opacity-100 pointer-events-none">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 960 960">
        <g id="Group 22">
          <circle cx="480" cy="480" id="Ellipse 6" r="479.4" stroke="var(--stroke-0, white)" strokeWidth="1.2" />
          <circle cx="480" cy="480" fill="var(--fill-0, white)" id="Ellipse 7" opacity="0.1" r="419.4" stroke="var(--stroke-0, white)" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Frame155() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full max-w-[700px] px-[16px]">
      <div className="font-extrabold not-italic relative shrink-0 text-center text-white tracking-[0.56px] w-full">
        {/* Mobile: 3 lines with \/ on yellow phrase */}
        <div className="lg:hidden flex flex-col items-center">
          <p className="leading-[1.3] text-[24px]">まずは気軽に</p>
          <p className="leading-[1.3] text-[#ffe347] text-[32px]">\お見積もり・ご相談/</p>
          <p className="leading-[1.3] text-[24px]">ください</p>
        </div>
        {/* Desktop: single line, yellow phrase larger inline */}
        <p className="hidden lg:block leading-[1.3] text-[28px]">
          まずは気軽に
          <span className="text-[#ffe347] text-[40px]">お見積もり・ご相談</span>
          ください
        </p>
      </div>
      <div className="hidden lg:block h-[34px] relative shrink-0 w-full max-w-[666px]">
        <div className="absolute inset-[-5.88%_-0.3%_-11.49%_-0.3%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 670 39.9083">
            <path d={svgPaths.p3a4bc980} id="Vector 10" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame158() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col  items-center justify-center leading-[normal] min-h-px min-w-px not-italic relative text-white">
      <p className="relative shrink-0 font-semibold text-[23px] tracking-[0.46px] w-full">無料資料を受け取る</p>
      <p className="relative shrink-0 text-[16px] tracking-[0.32px] w-full">1分で完了 · 登録不要</p>
    </div>
  );
}

function ArrowForward4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow_forward">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_forward">
          <mask height="24" id="mask0_1_3970" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_1_3970)">
            <path d={svgPaths.p54e7200} fill="var(--fill-0, #FF4343)" id="arrow_forward_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ArrowCircle8() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[56px]" data-name="Arrow Circle">
      <ArrowForward4 />
    </div>
  );
}

function Frame157() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center min-h-px min-w-px relative w-full lg:flex-[1_0_0] lg:w-auto">
      <p className="font-['Hiragino_Kaku_Gothic_Std',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[#2d3748] text-[28px] text-center tracking-[0.56px] w-full">まずは資料がみたい</p>
      <div className="max-h-[100px] max-w-[400px] min-h-[80px] min-w-[320px] relative rounded-[999px] shadow-[0px_2px_8px_0px_rgba(158,36,36,0.16),0px_4px_16px_0px_rgba(158,36,36,0.08)] shrink-0 w-full" data-name="cta">
        <div aria-hidden="true" className="absolute bg-[#ff4343] inset-0 pointer-events-none rounded-[999px]" />
        <div className="flex flex-row items-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-between max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] pl-[32px] pr-[16px] py-[16px] relative size-full">
            <Frame158 />
            <ArrowCircle8 />
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_2px_2px_4px_0px_rgba(255,255,255,0.24)]" />
      </div>
    </div>
  );
}

function Group80() {
  return (
    <div className="absolute inset-[44.45%_21.4%_4.13%_23.61%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 126.468 115.183">
        <g id="Group">
          <path d={svgPaths.p3fc1e000} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p19fe7400} fill="var(--fill-0, #111111)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group81() {
  return (
    <div className="absolute inset-[64.1%_28.36%_4.62%_30.35%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94.9626 70.0598">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p38098100} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p15b0f960} fill="var(--fill-0, #111111)" id="Vector_2" />
          </g>
          <path d={svgPaths.p2a26bf00} fill="var(--fill-0, #111111)" id="Vector_3" />
          <path d={svgPaths.p9b0bd00} fill="var(--fill-0, #111111)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Group82() {
  return (
    <div className="absolute inset-[69.77%_0.43%_-1.59%_2.66%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 222.902 71.2774">
        <g id="Group">
          <path d={svgPaths.p1dd9fd00} fill="var(--fill-0, #FF4343)" id="Vector" />
          <path d={svgPaths.p1db0ac00} fill="var(--fill-0, #111111)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group79() {
  return (
    <div className="absolute contents inset-[44.45%_0.43%_-1.59%_2.66%]" data-name="Group">
      <Group80 />
      <Group81 />
      <Group82 />
    </div>
  );
}

function Group84() {
  return (
    <div className="absolute inset-[2.23%_26.07%_34.05%_24.93%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 112.694 142.721">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p264e0500} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p1082fb00} fill="var(--fill-0, #111111)" id="Vector_2" />
          </g>
          <path d={svgPaths.p24846f00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p2303e400} fill="var(--fill-0, #111111)" id="Vector_4" />
          <g id="Group_3">
            <path d={svgPaths.p205a4a80} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p36923a00} fill="var(--fill-0, #111111)" id="Vector_6" />
          </g>
          <g id="Group_4">
            <path d={svgPaths.p2919b500} fill="var(--fill-0, white)" id="Vector_7" />
            <path d={svgPaths.p2291bf00} fill="var(--fill-0, #111111)" id="Vector_8" />
          </g>
          <path d={svgPaths.p6ba5100} fill="var(--fill-0, #A3A3A3)" id="Vector_9" />
          <path d={svgPaths.p344ae00} fill="var(--fill-0, #A3A3A3)" id="Vector_10" />
          <path d={svgPaths.p2d126a00} fill="var(--fill-0, #A3A3A3)" id="Vector_11" />
          <path d={svgPaths.p1cd12d00} fill="var(--fill-0, #A3A3A3)" id="Vector_12" />
        </g>
      </svg>
    </div>
  );
}

function Group85() {
  return (
    <div className="absolute inset-[32.87%_33.58%_55.79%_32.73%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77.4856 25.4065">
        <g id="Group">
          <path d={svgPaths.p3621b00} fill="var(--fill-0, #111111)" id="Vector" />
          <path d={svgPaths.p3c5a6900} fill="var(--fill-0, #111111)" id="Vector_2" />
          <path d={svgPaths.p1f829400} fill="var(--fill-0, #111111)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group86() {
  return (
    <div className="absolute inset-[29.3%_37.68%_44.66%_36.05%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60.4143 58.3279">
        <g id="Group">
          <path d={svgPaths.p37a27a00} fill="var(--fill-0, #111111)" id="Vector" />
          <path d={svgPaths.p22e5b80} fill="var(--fill-0, #111111)" id="Vector_2" />
          <path d={svgPaths.p35f273f0} fill="var(--fill-0, #111111)" id="Vector_3" />
          <path d={svgPaths.p120042e0} fill="var(--fill-0, #111111)" id="Vector_4" />
          <path d={svgPaths.p30b96b00} fill="var(--fill-0, #111111)" id="Vector_5" />
          <path d={svgPaths.p45bb7e0} fill="var(--fill-0, #111111)" id="Vector_6" />
          <path d={svgPaths.p39645d80} fill="var(--fill-0, #111111)" id="Vector_7" />
          <path d={svgPaths.p1aaf8700} fill="var(--fill-0, #111111)" id="Vector_8" />
          <path d={svgPaths.p11ac0780} fill="var(--fill-0, #111111)" id="Vector_9" />
          <path d={svgPaths.p39645d80} fill="var(--fill-0, #111111)" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

function Group83() {
  return (
    <div className="absolute contents inset-[2.23%_26.07%_34.05%_24.93%]" data-name="Group">
      <Group84 />
      <Group85 />
      <Group86 />
    </div>
  );
}

function Group78() {
  return (
    <div className="absolute contents inset-[2.23%_0.43%_-1.59%_2.66%]" data-name="Group">
      <Group79 />
      <Group83 />
    </div>
  );
}

function Group87() {
  return (
    <div className="absolute inset-[63.12%_38.12%_-1.59%_41.62%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.6157 86.158">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p34564c00} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p2507ef00} fill="var(--fill-0, #111111)" id="Vector_2" />
          </g>
          <path d={svgPaths.p3ea3a880} fill="var(--fill-0, #111111)" id="Vector_3" />
          <path d={svgPaths.p32817580} fill="var(--fill-0, #111111)" id="Vector_4" />
          <path d={svgPaths.p38089e00} fill="var(--fill-0, #111111)" id="Vector_5" />
          <path d={svgPaths.p27422f80} fill="var(--fill-0, #111111)" id="Vector_6" />
          <path d={svgPaths.p2f47cb00} fill="var(--fill-0, #111111)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function Group89() {
  return (
    <div className="absolute inset-[50.45%_66.07%_7.24%_0.83%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76.1201 94.7634">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p20293900} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p41c100} fill="var(--fill-0, #111111)" id="Vector_2" />
          </g>
          <path d={svgPaths.p3a176e00} fill="var(--fill-0, #111111)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group91() {
  return (
    <div className="absolute inset-[63.3%_72.43%_-1.59%_0.43%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.4129 85.7627">
        <g id="Group">
          <path d={svgPaths.p2400ba00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p1197e380} fill="var(--fill-0, #111111)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group92() {
  return (
    <div className="absolute inset-[73.28%_75.27%_18.2%_9.29%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.5075 19.0683">
        <g id="Group">
          <path d={svgPaths.p3abf9700} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p1728e270} fill="var(--fill-0, #111111)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group93() {
  return (
    <div className="absolute inset-[76.89%_73.65%_14.38%_12.15%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.68 19.5519">
        <g id="Group">
          <path d={svgPaths.p1dc71580} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p21f66200} fill="var(--fill-0, #111111)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group90() {
  return (
    <div className="absolute contents inset-[63.3%_72.43%_-1.59%_0.43%]" data-name="Group">
      <Group91 />
      <Group92 />
      <Group93 />
    </div>
  );
}

function Group88() {
  return (
    <div className="absolute contents inset-[50.45%_66.07%_-1.59%_0.43%]" data-name="Group">
      <Group89 />
      <Group90 />
    </div>
  );
}

function Group77() {
  return (
    <div className="absolute contents inset-[2.23%_0.43%_-1.59%_0.43%]">
      <Group78 />
      <Group87 />
      <Group88 />
    </div>
  );
}

function Image10() {
  return (
    <div className="h-[224px] overflow-clip relative shrink-0 w-[230px]" data-name="Image">
      <Group77 />
    </div>
  );
}

function SectionCta1() {
  return (
    <div className="bg-white w-full max-w-[1440px] min-h-px min-w-[320px] relative rounded-[16px] lg:flex-[1_0_0]" data-name="section_cta">
      <div className="relative flex flex-row items-center justify-center max-w-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div aria-hidden="true" className="pointer-events-none absolute size-[500px] rounded-full bg-[#FFF1EE]" style={{ left: "-122px", top: "-130px" }} />
        <div className="content-stretch flex flex-col lg:flex-row gap-[16px] items-center justify-center max-w-[inherit] min-w-[inherit] pt-[16px] px-[16px] relative size-full z-10">
          <Frame157 />
          <Image10 />
        </div>
      </div>
    </div>
  );
}

function Frame160() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col  items-center leading-[normal] min-h-px min-w-px not-italic relative text-[#00b5ad]">
      <p className="relative shrink-0 font-semibold text-[17.5px] tracking-[0.35px] w-full">今すぐ無料相談する</p>
      <p className="relative shrink-0 text-[10.5px] tracking-[0.21px] w-full">24時間受付対応 · 全国対応可能</p>
    </div>
  );
}

function ArrowCircle9() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="Arrow Circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g id="Arrow Circle">
          <rect fill="var(--fill-0, #00B5AD)" height="56" rx="28" width="56" />
          <path d={svgPaths.p3569c700} fill="var(--fill-0, white)" id="arrow_forward" />
        </g>
      </svg>
    </div>
  );
}

function Cta4() {
  return (
    <a href="tel:0120-269-046" className="bg-white relative rounded-[999px] block no-underline w-full max-w-[300px]" data-name="cta">
      <div className="content-stretch flex items-center justify-between overflow-clip pl-[28px] pr-[14px] py-[14px] relative rounded-[inherit] size-full">
        <Frame160 />
        <ArrowCircle9 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#00b5ad] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </a>
  );
}

function Frame159() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center min-h-px min-w-px relative w-full lg:flex-[1_0_0] lg:w-auto">
      <p className="font-['Hiragino_Kaku_Gothic_Std',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[#2d3748] text-[28px] text-center tracking-[0.56px] w-full">話を聞いてみたい</p>
      <Cta4 />
    </div>
  );
}

function Group96() {
  return (
    <div className="absolute inset-[44.24%_0.3%_-1.59%_14.69%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 195.517 128.469">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p1d81b00} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p8e81e40} fill="var(--fill-0, #202933)" id="Vector_2" />
          </g>
          <g id="Group_3">
            <path d={svgPaths.p30db8880} fill="var(--fill-0, white)" id="Vector_3" />
            <path d={svgPaths.p332e7d00} fill="var(--fill-0, #202933)" id="Vector_4" />
          </g>
          <g id="Group_4">
            <path d={svgPaths.p3f6aa900} fill="var(--fill-0, #00B5AD)" id="Vector_5" />
            <path d={svgPaths.p272c9100} fill="var(--fill-0, #202933)" id="Vector_6" />
          </g>
          <path d={svgPaths.p2e7f2200} fill="var(--fill-0, #202933)" id="Vector_7" />
          <g id="Group_5">
            <path d={svgPaths.p20176000} fill="var(--fill-0, #00B5AD)" id="Vector_8" />
            <path d={svgPaths.pdc79e00} fill="var(--fill-0, #202933)" id="Vector_9" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group98() {
  return (
    <div className="absolute inset-[4.46%_17.34%_33.62%_0.43%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 189.113 138.696">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p23980180} fill="var(--fill-0, #202933)" id="Vector" />
            <path d={svgPaths.p8f0e200} fill="var(--fill-0, #202933)" id="Vector_2" />
          </g>
          <path d={svgPaths.p30064c00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p16211800} fill="var(--fill-0, #202933)" id="Vector_4" />
          <path d={svgPaths.pf9517f0} fill="var(--fill-0, #202933)" id="Vector_5" />
          <g id="Group_3">
            <path d={svgPaths.p3ce94d00} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.p3968b700} fill="var(--fill-0, #202933)" id="Vector_7" />
          </g>
          <g id="Vector_8" />
          <path d={svgPaths.p31616500} fill="var(--fill-0, #202933)" id="Vector_9" />
          <path d={svgPaths.p3c2670c0} fill="var(--fill-0, #202933)" id="Vector_10" />
          <g id="Group_4">
            <path d={svgPaths.p1d112000} fill="var(--fill-0, white)" id="Vector_11" />
            <path d={svgPaths.p2feecb00} fill="var(--fill-0, #202933)" id="Vector_12" />
          </g>
          <g id="Group_5">
            <path d={svgPaths.p141d8480} fill="var(--fill-0, #202933)" id="Vector_13" />
            <path d={svgPaths.p370f5200} fill="var(--fill-0, #202933)" id="Vector_14" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group99() {
  return (
    <div className="absolute inset-[47.23%_58.48%_44.07%_34.89%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.26 19.5">
        <g id="Group">
          <path d={svgPaths.p1a4d0e80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p10baf480} fill="var(--fill-0, #202933)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group100() {
  return (
    <div className="absolute inset-[29.92%_29.99%_42.25%_44.42%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.8683 62.3355">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p15602640} fill="var(--fill-0, #202933)" id="Vector" />
            <path d={svgPaths.p17d65f00} fill="var(--fill-0, #202933)" id="Vector_2" />
            <path d={svgPaths.p1de62c0} fill="var(--fill-0, #202933)" id="Vector_3" />
            <path d={svgPaths.p37c5ea80} fill="var(--fill-0, #202933)" id="Vector_4" />
            <path d={svgPaths.p1ad0c100} fill="var(--fill-0, #202933)" id="Vector_5" />
          </g>
          <path d={svgPaths.p1fe8d940} fill="var(--fill-0, #202933)" id="Vector_6" />
          <g id="Group_3">
            <path d={svgPaths.p2b232500} fill="var(--fill-0, white)" id="Vector_7" />
            <path d={svgPaths.p38bb800} fill="var(--fill-0, #202933)" id="Vector_8" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group97() {
  return (
    <div className="absolute contents inset-[4.46%_17.34%_33.62%_0.43%]" data-name="Group">
      <Group98 />
      <Group99 />
      <Group100 />
    </div>
  );
}

function Group95() {
  return (
    <div className="absolute contents inset-[4.46%_0.3%_-1.59%_0.43%]" data-name="Group">
      <Group96 />
      <Group97 />
    </div>
  );
}

function Group101() {
  return (
    <div className="absolute inset-[59.04%_62.31%_-1.58%_3.38%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78.9043 95.2951">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p3d337600} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p22e4af00} fill="var(--fill-0, white)" id="Vector_2" />
            <path d={svgPaths.p138f0600} fill="var(--fill-0, #202933)" id="Vector_3" />
          </g>
          <path d={svgPaths.pfaab340} fill="var(--fill-0, #202933)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Group103() {
  return (
    <div className="absolute inset-[24.59%_78.48%_45.84%_0.43%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.5 66.2344">
        <g id="Group">
          <path d={svgPaths.p873400} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p366d7900} fill="var(--fill-0, #00B5AD)" id="Vector_2" />
          <path d={svgPaths.pfa9ff00} fill="var(--fill-0, #202933)" id="Vector_3" />
          <path d={svgPaths.p3a2c6c00} fill="var(--fill-0, #202933)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Group104() {
  return (
    <div className="absolute inset-[16.11%_81.57%_79.25%_3.53%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.2745 10.38">
        <g id="Group">
          <path d={svgPaths.p1f95db00} fill="var(--fill-0, #202933)" id="Vector" />
          <path d={svgPaths.p16bbc040} fill="var(--fill-0, #202933)" id="Vector_2" />
          <path d={svgPaths.p14197400} fill="var(--fill-0, #202933)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group102() {
  return (
    <div className="absolute contents inset-[16.11%_78.48%_45.84%_0.43%]" data-name="Group">
      <Group103 />
      <Group104 />
    </div>
  );
}

function IsolationMode() {
  return <div className="h-[77.92px] w-[44.59px]" data-name="Isolation_Mode" />;
}

function Group94() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[-3.56px] contents left-[calc(50%+0.15px)]">
      <Group95 />
      <Group101 />
      <Group102 />
      <div className="absolute flex h-[81.343px] items-center justify-center left-[10.85px] top-[43.29px] w-[50.885px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[4.75deg]">
          <IsolationMode />
        </div>
      </div>
    </div>
  );
}

function Image11() {
  return (
    <div className="h-[224px] overflow-clip relative shrink-0 w-[230px]" data-name="Image">
      <Group94 />
    </div>
  );
}

function SectionCta2() {
  return (
    <div className="bg-white w-full max-w-[1440px] min-h-px min-w-[320px] relative rounded-[16px] lg:flex-[1_0_0]" data-name="section_cta">
      <div className="relative flex flex-row items-center justify-center max-w-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div aria-hidden="true" className="pointer-events-none absolute size-[500px] rounded-full bg-[#E8F7F4]" style={{ left: "-122px", top: "-130px" }} />
        <div className="content-stretch flex flex-col lg:flex-row gap-[16px] items-center justify-center max-w-[inherit] min-w-[inherit] pt-[16px] px-[16px] relative size-full z-10">
          <Frame159 />
          <Image11 />
        </div>
      </div>
    </div>
  );
}

function Frame156() {
  return (
    <div className="content-stretch flex flex-col lg:flex-row gap-[32px] items-stretch lg:items-center justify-center max-w-[1280px] px-[16px] lg:px-0 relative shrink-0 w-full">
      <SectionCta1 />
      <SectionCta2 />
    </div>
  );
}

function SectionCta() {
  return (
    <div className="bg-[#137fec] content-stretch flex flex-col gap-[24px] lg:gap-[40px] items-center overflow-clip py-[60px] lg:py-[100px] relative shrink-0 w-full" data-name="section_cta">
      <Group76 />
      <Frame155 />
      <Frame156 />
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="main">
      <Features />
      <Reason />
      <div className="bg-[#137fec] content-stretch flex flex-col gap-[24px] lg:gap-[40px] items-center overflow-clip px-[16px] lg:px-0 py-[60px] lg:py-[100px] relative shrink-0 w-full" data-name="section_cta">
        <Group48 />
        <Frame87 />
      </div>
      <CaseStudy />
      <Voices />
      <Result />
      <Process />
      <div className="bg-[#137fec] content-stretch flex flex-col gap-[24px] lg:gap-[40px] items-center overflow-clip px-[16px] lg:px-0 py-[60px] lg:py-[100px] relative shrink-0 w-full" data-name="section_cta">
        <Group74 />
        <Frame127 />
      </div>
      <Plan />
      <Faq />
      <SectionCta />
    </div>
  );
}

function Frame() {
  const navigate = useNavigate();
  const location = useLocation();
  const scrollTo = (name: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: name } });
      return;
    }
    const el = document.querySelector(`[data-name="${name}"]`);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80; // offset for sticky header
    window.scrollTo({ top: y, behavior: 'smooth' });
  };
  const items: { label: string; target: string }[] = [
    { label: 'サービス', target: 'features' },
    { label: '制作実績', target: 'case_study' },
    { label: '料金プラン', target: 'plan' },
    { label: 'よくある質問', target: 'faq' },
  ];
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        {items.map(({ label, target }) => (
          <button
            key={target}
            type="button"
            onClick={() => scrollTo(target)}
            className="content-stretch flex h-[44px] items-center justify-center relative rounded-[4px] shrink-0 w-[110px] cursor-pointer bg-transparent border-0 p-0 transition-opacity hover:opacity-70"
            data-name="menu"
          >
            <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#2d3748] text-[14px] whitespace-nowrap">
              <p className="leading-[1.6]">{label}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function Cta5() {
  return (
    <div className="content-stretch flex flex-col flex-[1_0_0] lg:flex-none h-[46px] lg:h-[54px] items-center justify-center overflow-clip relative rounded-[499.5px] shadow-[1px_2px_2px_0px_rgba(0,0,0,0.25)] lg:shrink-0 lg:w-[200px]" data-name="cta">
      <div aria-hidden="true" className="absolute bg-[#ff4343] inset-0 pointer-events-none rounded-[499.5px]" />
      <p className="font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white tracking-[0.28px] whitespace-nowrap"><span className="lg:hidden">無料資料</span><span className="hidden lg:inline">無料資料を受け取る</span></p>
      <p className=" leading-[normal] not-italic relative shrink-0 text-[10px] text-white tracking-[0.2px] whitespace-nowrap"><span className="lg:hidden">1分で完了</span><span className="hidden lg:inline">1分で完了 · 登録不要</span></p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_1px_1px_2px_0px_rgba(255,255,255,0.24)]" />
    </div>
  );
}

function Cta6() {
  return (
    <a href="tel:0120-269-046" className="bg-white flex-[1_0_0] lg:flex-none h-[46px] lg:h-[54px] relative rounded-[613.023px] lg:shrink-0 lg:w-[200px] block no-underline" data-name="cta">
      <div className="content-stretch flex flex-col items-center justify-center leading-[normal] not-italic overflow-clip relative rounded-[inherit] size-full text-[#00b5ad] whitespace-nowrap">
        <p className="font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] tracking-[0.28px]"><span className="lg:hidden">無料相談</span><span className="hidden lg:inline">今すぐ無料相談する</span></p>
        <p className=" relative shrink-0 text-[10px] tracking-[0.2px]"><span className="lg:hidden">24時間受付</span><span className="hidden lg:inline">24時間受付対応 · 全国対応可能</span></p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#00b5ad] border-solid inset-0 pointer-events-none rounded-[613.023px]" />
    </a>
  );
}

function Frame161() {
  return (
    <div className="relative flex-[1_0_0] max-w-[200px] lg:max-w-none lg:flex-none lg:shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Cta5 />
        <Cta6 />
      </div>
    </div>
  );
}

export function Header({ minimal = false }: { minimal?: boolean } = {}) {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[56px] lg:h-[80px] items-center justify-between lg:justify-start pointer-events-auto px-[16px] lg:px-[100px] sticky top-0 w-full z-50" data-name="Header">
      <a href="/" className="h-[31px] lg:h-[41px] max-h-[41px] max-w-[160px] min-h-[31px] min-w-[120.97561645507812px] relative shrink-0 w-[121px] lg:w-[160px] block" data-name="logo">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo} />
        </div>
      </a>
      {minimal ? (
        <div className="ml-auto relative flex flex-col items-center justify-center gap-[4px]">
          <div className="hidden lg:flex items-center relative shrink-0">
            <a href="tel:0120-269-046" className="flex items-center gap-[4px] no-underline">
              <span className="material-icons text-[18px] text-[#00b5ad]" style={{ fontFamily: "Material Icons" }}>call</span>
              <span className="font-extrabold text-[#00b5ad] text-[16px] tracking-[0.32px] whitespace-nowrap" style={{ fontFamily: "'Lexend', sans-serif" }}>0120-269-046</span>
            </a>
          </div>
          <a
            href="tel:0120-269-046"
            className="bg-white border border-[#00b5ad] border-solid flex flex-col h-[46px] lg:h-[54px] items-center justify-center overflow-clip rounded-[613.023px] shrink-0 text-[#00b5ad] w-[120px] lg:w-[140px] no-underline whitespace-nowrap hover:bg-[#00b5ad] hover:text-white transition-colors"
            data-name="cta"
          >
            <p className="font-semibold text-[14px] tracking-[0.28px] leading-none">無料相談</p>
            <p className="text-[10px] tracking-[0.2px] leading-none mt-[4px]">24時間受付</p>
          </a>
        </div>
      ) : (
        <>
          <div className="hidden lg:contents">
            <Frame />
          </div>
          <Frame161 />
        </>
      )}
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-end flex flex-wrap font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium gap-[16px_24px] lg:gap-[26px_24px] items-end leading-[1.3] not-italic relative shrink-0 text-[#62666c] text-[14px] text-center w-full lg:w-[482px] whitespace-nowrap">
      <a className="relative shrink-0 underline" href="https://www.vision-net.co.jp/company/com_data.html" target="_blank" rel="noopener noreferrer">会社案内・IR情報</a>
      <a className="relative shrink-0 underline" href="https://www.vision-net.co.jp/company/com_list.html" target="_blank" rel="noopener noreferrer">拠点一覧</a>
      <a className="relative shrink-0 underline" href="https://homepage296.com/company#terms" target="_blank" rel="noopener noreferrer">特定商品取引法に基づく記載</a>
      <a className="relative shrink-0 underline" href="https://www.vision-net.co.jp/privacy.html" target="_blank" rel="noopener noreferrer">プライバシーポリシー</a>
      <a className="relative shrink-0 underline" href="https://homepage296.com/cookie-policy" target="_blank" rel="noopener noreferrer">クッキーポリシー</a>
    </div>
  );
}

function Footer1() {
  return (
    <div className="content-start flex flex-wrap gap-[16px_24px] items-start w-full lg:flex-[1_0_0] max-w-[600px] min-w-[280px] relative" data-name="footer">
      <div className="h-[28.421px] relative shrink-0 w-[240px]" data-name="image 7">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage15} />
      </div>
      <Frame11 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-center justify-center relative shrink-0 w-[184px]">
      <div className="aspect-[184/64] pointer-events-none relative shrink-0 w-full" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgImage17} />
        <div aria-hidden="true" className="absolute border-[#eaeaea] border-[0.5px] border-solid inset-0" />
      </div>
      <p className="font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[11px] text-black text-center whitespace-nowrap">
        経済産業省・JETRO・NEDO運営
        <br aria-hidden="true" />
        「J-Startup」サポーター認定企業
      </p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-center lg:content-stretch flex flex-wrap lg:flex-nowrap gap-[24px] items-center lg:items-start justify-center lg:justify-start w-full lg:w-auto lg:shrink-0 relative">
      <div className="h-[64px] relative shrink-0 w-[176.552px]" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage16} />
      </div>
      <Frame8 />
      <div className="h-[64px] pointer-events-none relative shrink-0 w-[227.404px]" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgImage18} />
        <div aria-hidden="true" className="absolute border-[#eaeaea] border-[0.5px] border-solid inset-0" />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-start flex flex-col lg:flex-row lg:flex-nowrap gap-y-[40px] items-start justify-between max-w-[1200px] px-[16px] lg:px-0 relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#eff0f3] border-b border-solid inset-0 pointer-events-none" />
      <Footer1 />
      <Frame9 />
    </div>
  );
}

function Frame162() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-center pb-[16px] pt-[40px] relative shrink-0 w-full">
      <Frame10 />
      <div className="aspect-[450/90] lg:aspect-auto lg:h-[90px] relative shrink-0 w-full lg:w-[450px] max-w-[450px] px-[16px] lg:px-0" data-name="image 8">
        <img alt="" className="absolute inset-0 object-contain lg:object-cover pointer-events-none size-full" src={imgImage19} />
      </div>
    </div>
  );
}

function Pre() {
  return (
    <div className="bg-[#bfbfbf] h-full relative" data-name="Pre">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[2px] py-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[10px] items-center justify-center left-[calc(50%+1px)] top-1/2 w-[6px]">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="h-[10px] relative w-[6px]" data-name="arrow_back_2">
                  <div className="absolute inset-[11.33%_0_11.33%_9.37%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.43795 7.73374">
                      <path d={svgPaths.p265b1f00} fill="var(--fill-0, white)" id="arrow_back_2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <a
      href="https://denwa-hikari.com/?ref=homepage29"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white h-[72px] relative shrink-0 w-[204px] block cursor-pointer transition-opacity hover:opacity-80"
      data-name="logo"
    >
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[inherit] size-full">
        <div className="h-[40px] relative shrink-0 w-full">
          <img alt="ひかり電話.com" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgRectangle27} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none" />
    </a>
  );
}

function LogoWithName() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[204px]" data-name="logoWithName">
      <Logo />
      <p className="font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[1.4] min-w-full not-italic relative shrink-0 text-[#2d3748] text-[11px] text-center w-[min-content]">ひかり電話.com</p>
    </div>
  );
}

function Logo1() {
  return (
    <a
      href="https://copyki-pr.com/lease?ref=homepage29"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white h-[72px] relative shrink-0 w-[204px] block cursor-pointer transition-opacity hover:opacity-80"
      data-name="logo"
    >
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[inherit] size-full">
        <div className="h-[40px] relative shrink-0 w-full">
          <img alt="コピー機ドットコム" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgLogoCopicom} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none" />
    </a>
  );
}

function LogoWithName1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[204px]" data-name="logoWithName">
      <Logo1 />
      <p className="font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[1.4] min-w-full not-italic relative shrink-0 text-[#2d3748] text-[11px] text-center w-[min-content]">コピー機ドットコム</p>
    </div>
  );
}

function Logo2() {
  return (
    <a
      href="https://houjin-keitai.com/?ref=homepage296"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white h-[72px] relative shrink-0 w-[204px] block cursor-pointer transition-opacity hover:opacity-80"
      data-name="logo"
    >
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[inherit] size-full">
        <div className="h-[40px] relative shrink-0 w-full">
          <img alt="法人携帯ドットコム" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgLogoHojin} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none" />
    </a>
  );
}

function LogoWithName2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[204px]" data-name="logoWithName">
      <Logo2 />
      <p className="font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[1.4] min-w-full not-italic relative shrink-0 text-[#2d3748] text-[11px] text-center w-[min-content]">法人携帯ドットコム</p>
    </div>
  );
}

function Logo3() {
  return (
    <a
      href="https://biziphone.com/?ref=homepage29"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white h-[72px] relative shrink-0 w-[204px] block cursor-pointer transition-opacity hover:opacity-80"
      data-name="logo"
    >
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[inherit] size-full">
        <div className="h-[75px] relative shrink-0 w-[167px]">
          <img alt="ビジフォン.com" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBizfonLogo} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none" />
    </a>
  );
}

function LogoWithName3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[204px]" data-name="logoWithName">
      <Logo3 />
      <p className="font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[1.4] min-w-full not-italic relative shrink-0 text-[#2d3748] text-[11px] text-center w-[min-content]">ビジフォン.com</p>
    </div>
  );
}

function Logo4() {
  return (
    <a
      href="https://denwa-kanyuken.com/?ref=homepage296"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white h-[72px] relative shrink-0 w-[204px] block cursor-pointer transition-opacity hover:opacity-80"
      data-name="logo"
    >
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[inherit] size-full">
        <div className="h-[40px] relative shrink-0 w-full">
          <img alt="電話加入権ドットコム" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgLogoDenwakanyuken} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none" />
    </a>
  );
}

function LogoWithName4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[204px]" data-name="logoWithName">
      <Logo4 />
      <p className="font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[1.4] min-w-full not-italic relative shrink-0 text-[#2d3748] text-[11px] text-center w-[min-content]">電話加入権ドットコム</p>
    </div>
  );
}

function Logo5() {
  return (
    <div className="bg-white h-[72px] relative shrink-0 w-[204px]" data-name="logo">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[inherit] size-full">
        <div className="h-[40px] relative shrink-0 w-full">
          <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgRectangle32} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function LogoWithName5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[204px]" data-name="logoWithName">
      <Logo5 />
      <p className="font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[1.4] min-w-full not-italic relative shrink-0 text-[#2d3748] text-[11px] text-center w-[min-content]">ビジフォンドットコム</p>
    </div>
  );
}

function Logo6() {
  return (
    <div className="bg-white h-[72px] relative shrink-0 w-[204px]" data-name="logo">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[inherit] size-full">
        <div className="h-[40px] relative shrink-0 w-full">
          <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgRectangle33} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function LogoWithName6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[204px]" data-name="logoWithName">
      <Logo6 />
      <p className="font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[1.4] min-w-full not-italic relative shrink-0 text-[#2d3748] text-[11px] text-center w-[min-content]">ヒカリ電話ドットコム</p>
    </div>
  );
}

function Logo7() {
  return (
    <div className="bg-white h-[72px] relative shrink-0 w-[204px]" data-name="logo">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[inherit] size-full">
        <div className="h-[40px] relative shrink-0 w-full">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle34} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function LogoWithName7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[204px]" data-name="logoWithName">
      <Logo7 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] min-w-full not-italic relative shrink-0 text-[#2d3748] text-[11px] text-center w-[min-content]">VWS</p>
    </div>
  );
}

function Inner15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[1048px]" data-name="inner">
      <LogoWithName />
      <LogoWithName3 />
      <LogoWithName1 />
      <LogoWithName2 />
      <LogoWithName4 />
      <LogoWithName5 />
      <LogoWithName6 />
      <LogoWithName7 />
    </div>
  );
}

function Next() {
  return (
    <div className="bg-[#bfbfbf] h-full relative shrink-0" data-name="Next">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[2px] py-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[10px] items-center justify-center left-[calc(50%+1px)] top-1/2 w-[6px]">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="h-[10px] relative w-[6px]" data-name="arrow_back_2">
                  <div className="absolute inset-[11.33%_0_11.33%_9.37%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.43795 7.73374">
                      <path d={svgPaths.p265b1f00} fill="var(--fill-0, white)" id="arrow_back_2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoWrapper() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const scrollBy = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 212, behavior: "smooth" });
  };
  return (
    <div className="bg-[#eff0f3] relative shrink-0 w-full" data-name="logo-wrapper">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-0 lg:px-[400px] py-[16px] relative size-full">
          <button type="button" aria-label="前へ" onClick={() => scrollBy(-1)} className="flex flex-row items-stretch self-stretch lg:hidden cursor-pointer">
            <Pre />
          </button>
          <div ref={scrollRef} className="flex-1 lg:flex-none overflow-x-auto lg:overflow-clip scroll-smooth lg:w-[1048px] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden" data-name="inner">
            <div className="flex gap-[8px] items-center w-max lg:w-[1048px]" style={{ scrollSnapType: "x mandatory" }}>
              <LogoWithName />
              <LogoWithName3 />
              <LogoWithName1 />
              <LogoWithName2 />
              <LogoWithName4 />
              <LogoWithName5 />
              <LogoWithName6 />
              <LogoWithName7 />
            </div>
          </div>
          <button type="button" aria-label="次へ" onClick={() => scrollBy(1)} className="flex flex-row items-stretch self-stretch lg:hidden cursor-pointer">
            <Next />
          </button>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#344f6e] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col lg:flex-row font-medium gap-[12px] lg:gap-0 items-start lg:items-center justify-start lg:justify-between leading-[1.4] not-italic px-[16px] lg:px-[160px] py-[12px] relative text-[12px] lg:text-[11px] text-left lg:text-center text-white w-full">
        <p className="font-['Inter:Medium',sans-serif] relative shrink-0 lg:whitespace-nowrap">Copyright© 2026 Vision Inc.All Rights Reserved.</p>
        <p className="font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] relative shrink-0 lg:whitespace-nowrap">ホームページ.comで使用している写真・テキスト・画像の無断転載・無断複製を一切禁じます。</p>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <div className="bg-[#eff0f3] content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="footer">
      <Frame162 />
      <LogoWrapper />
      <Frame12 />
    </div>
  );
}

export default function VisionHpMainV() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="vision_hp_main_v3">
      <Kv />
      <Main />
      <div className="absolute bottom-0 h-[13774.4345703125px] left-0 right-0 pointer-events-none top-0">
        <Header />
      </div>
      <Footer />
    </div>
  );
}