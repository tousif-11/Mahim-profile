import { useState } from "react";
import home_photo from "../images/home_photo.jpeg";

const Home = () => {
  const [language, setLanguage] = useState("english");

  const content = {
    english: {
      title: "Abdullah Al Mahim",
      aboutLabel: "~ About Me ~",
      text: "I am Abdullah Al Mahim (যুগ্ম সাধারণ সম্পাদক — জামালপুর জেলা ছাত্রদল). I was born on October 29, 2002, in Pathaliya,Jamalpur,Bangladesh. From an early age, I have been interested in building strong relationships with people, standing beside members of my community, and taking responsibility for the people around me. Since 2015, I have been associated with the Bangladesh National Party (BMP) . Through my long journey with the organization, I have gained valuable experience in teamwork, discipline, communication, organizational activities, and carrying out responsibilities with sincerity.\n\nOne of the greatest inspirations in my political journey is my father Arif Hossain Bahaz (সাংগঠনিক সম্পাদক - জেলা বিএনপি জামালপুর). His dedication has encouraged me to become more responsible and committed to my own duties. I believe that true leadership is not simply about holding a position or having a title. Real leadership is built through trust, respect, responsibility, and the ability to listen to people and work with them.\n\nI am fortunate to have many friends and well-wishers who respect me and support me in different situations. I also value their opinions and believe that cooperation and mutual respect are essential qualities of a good leader. My goal is to continue developing myself as an honest, responsible, people-oriented, and principled political worker. I want to contribute positively to society, uphold the values of respect and responsibility, and perform my organizational duties with dedication and sincerity. I believe that with hard work, discipline, and commitment, I can continue to make a meaningful contribution to the people and the organization I serve.",
    },
    bangla: {
      title: "আব্দুল্লাহ আল মাহিম",
      aboutLabel: "~ আমার সম্পর্কে ~",
      text: "আমি আব্দুল্লাহ আল মাহিম, যুগ্ম সাধারণ সম্পাদক — জামালপুর জেলা ছাত্রদল। আমি জন্মগ্রহণ করেছি ২০০২ সালের ২৯ অক্টোবর জামালপুরের পাঠালিয়ায়, বাংলাদেশে। প্রথম থেকেই আমি মানুষের সাথে শক্তিশালী সম্পর্ক গড়ে তুলতে, আমার সম্প্রদায়ের সদস্যদের পাশে থাকতে এবং আমার চারপাশের মানুষের জন্য দায়িত্বশীল থাকতে আগ্রহী। ২০১৫ সাল থেকে আমি বাংলাদেশ জাতীয়তাবাদী দল (বিএনপি) এর সাথে যুক্ত রয়েছি। সংগঠনের সাথে আমার দীর্ঘ যাত্রায়, আমি দলগত কাজ, শৃঙ্খলা, যোগাযোগ, সাংগঠনিক কার্যক্রম এবং দায়িত্ব পালনে মূল্যবান অভিজ্ঞতা অর্জন করেছি।\n\nআমার রাজনৈতিক যাত্রার সবচেয়ে বড় অনুপ্রেরণা আমার পিতা আরিফ হোসেন বাহাজ, সাংগঠনিক সম্পাদক - জেলা বিএনপি জামালপুর। তার নিবেদন আমাকে আরও দায়িত্বশীল এবং আমার নিজের দায়িত্বের প্রতি প্রতিশ্রুতিবদ্ধ হতে উৎসাহিত করেছে। আমি বিশ্বাস করি যে প্রকৃত নেতৃত্ব কেবল একটি অবস্থান ধারণ করা বা একটি শিরোনাম থাকা নয়। প্রকৃত নেতৃত্ব বিশ্বাস, সম্মান, দায়িত্ব এবং মানুষের কথা শোনার এবং তাদের সাথে কাজ করার ক্ষমতার মাধ্যমে তৈরি হয়।\n\nআমি আমার বন্ধু এবং শুভাকাঙ্ক্ষীদের জানাই আমার ভালোবাসা, যারা আমাকে সম্মান করেন এবং বিভিন্ন পরিস্থিতিতে আমাকে সমর্থন করেন। আমি তাদের মতামত মূল্য দিই এবং বিশ্বাস করি যে সহযোগিতা এবং পারস্পরিক সম্মান একটি ভাল নেতার অপরিহার্য গুণাবলী। আমার লক্ষ্য একজন সৎ, দায়িত্বশীল, মানুষ-কেন্দ্রিক এবং নীতিনিষ্ঠ রাজনৈতিক কর্মী হিসেবে নিজেকে বিকশিত করা। আমি সমাজে ইতিবাচক অবদান রাখতে, সম্মান এবং দায়িত্বের মূল্যবোধ বজায় রাখতে এবং আমার সাংগঠনিক দায়িত্ব নিষ্ঠা এবং আন্তরিকতার সাথে পালন করতে চাই। আমি বিশ্বাস করি যে কঠোর পরিশ্রম, শৃঙ্খলা এবং প্রতিশ্রুতির মাধ্যমে, আমি যে সংগঠনের সেবা করি তার জন্য গুরুত্বপূর্ণ অবদান রাখতে পারি।",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-yellow-50 to-amber-50 relative">
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 flex gap-2">
        <button
          onClick={() => setLanguage("english")}
          className={`px-2  text-sm font-semibold rounded-l-lg transition-all ${
            language === "english"
              ? "bg-amber-700 text-white shadow-md"
              : "bg-amber-200 text-amber-900 hover:bg-amber-300"
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage("bangla")}
          className={`px-2 text-sm font-semibold rounded-r-lg transition-all ${
            language === "bangla"
              ? "bg-amber-700 text-white shadow-md"
              : "bg-amber-200 text-amber-900 hover:bg-amber-300"
          }`}
        >
          বাং
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-12">
        <div className="overflow-hidden rounded-[30px] border-4 border-amber-700/30 bg-linear-to-br from-amber-100 to-yellow-100 shadow-[0_28px_80px_rgba(180,83,9,0.15)]">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 p-5 sm:p-8 lg:p-10">
            <div className="w-full max-w-85 lg:max-w-95">
              <div className="overflow-hidden rounded-[26px] border-4 border-amber-800/40 bg-amber-50 p-2 shadow-[0_18px_40px_rgba(92,51,23,0.25)]">
                <img
                  src={home_photo}
                  alt="Abdullah Al Mahim"
                  className="h-105 sm:h-125 w-full rounded-[20px] object-cover object-center grayscale-[8%] contrast-105"
                />
              </div>
            </div>

            <div className="flex-1 w-full">
              <div className="mb-6 flex items-center gap-4">
                <span className="h-1 flex-1 bg-gradient-to-r from-amber-800/60 to-transparent rounded" />
                <span className="text-[11px] font-serif font-bold uppercase tracking-[0.4em] text-amber-900/80">
                  {content[language].aboutLabel}
                </span>
                <span className="h-1 flex-1 bg-gradient-to-l from-amber-800/60 to-transparent rounded" />
              </div>

              <h1 className="mb-6 text-2xl text-center sm:text-3xl lg:text-5xl font-serif font-bold tracking-[0.06em] text-amber-950 uppercase drop-shadow-sm">
                {content[language].title}
              </h1>

              <p className="text-base sm:text-lg leading-8 sm:leading-9 text-justify text-amber-950 font-medium tracking-[0.02em] whitespace-pre-line">
                {content[language].text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
