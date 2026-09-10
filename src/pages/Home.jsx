import home_photo from "../images/home_photo.jpeg";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-yellow-50 to-amber-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="overflow-hidden rounded-[30px] border-4 border-amber-700/30 bg-gradient-to-br from-amber-100 to-yellow-100 shadow-[0_28px_80px_rgba(180,83,9,0.15)]">
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
                  ~ About Me ~
                </span>
                <span className="h-1 flex-1 bg-gradient-to-l from-amber-800/60 to-transparent rounded" />
              </div>

              <h1 className="mb-6 text-2xl text-center sm:text-3xl lg:text-5xl font-serif font-bold tracking-[0.06em] text-amber-950 uppercase drop-shadow-sm">
                Abdullah Al Mahim
              </h1>

              <p className="text-base sm:text-lg leading-8 sm:leading-9 text-justify text-amber-950 font-medium tracking-[0.02em]">
                I am Abdullah Al Mahim (যুগ্ম সাধারণ সম্পাদক — জামালপুর জেলা
                ছাত্রদল). I was born on October 29, 2002, in
                Pathaliya,Jamalpur,Bangladesh. From an early age, I have been
                interested in building strong relationships with people,
                standing beside members of my community, and taking
                responsibility for the people around me. Since 2015, I have been
                associated with the Bangladesh National Party BMP as a Joint
                General Secretary. Through my long journey with the
                organization, I have gained valuable experience in teamwork,
                discipline, communication, organizational activities, and
                carrying out responsibilities with sincerity.
                <br />
                <br />
                One of the greatest inspirations in my political journey is my
                father Arif Hossain Bahaz (সাংগঠনিক সম্পাদক - জেলা বিএনপি
                জামালপুর). His dedication has encouraged me to become more
                responsible and committed to my own duties. I believe that true
                leadership is not simply about holding a position or having a
                title. Real leadership is built through trust, respect,
                responsibility, and the ability to listen to people and work
                with them.
                <br />
                <br />I am fortunate to have many friends and well-wishers who
                respect me and support me in different situations. I also value
                their opinions and believe that cooperation and mutual respect
                are essential qualities of a good leader. My goal is to continue
                developing myself as an honest, responsible, people-oriented,
                and principled political worker. I want to contribute positively
                to society, uphold the values of respect and responsibility, and
                perform my organizational duties with dedication and sincerity.
                I believe that with hard work, discipline, and commitment, I can
                continue to make a meaningful contribution to the people and the
                organization I serve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
