import home_photo from "../images/home_photo.jpeg";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="overflow-hidden rounded-[30px] border border-stone-300/80 bg-[#f5efe7] shadow-[0_28px_80px_rgba(77,58,35,0.12)]">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 p-5 sm:p-8 lg:p-10">
          <div className="w-full max-w-85 lg:max-w-95">
            <div className="overflow-hidden rounded-[26px] border border-stone-700/15 bg-stone-100 p-2 shadow-[0_18px_40px_rgba(46,35,22,0.18)]">
              <img
                src={home_photo}
                alt="Abdullah Al Mahim"
                className="h-105 sm:h-125 w-full rounded-[20px] object-cover object-center grayscale-[8%] contrast-105"
              />
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px flex-1 bg-stone-400" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-stone-600">
                About Me
              </span>
              <span className="h-px flex-1 bg-stone-400" />
            </div>

            <h1 className="mb-5 text-xl flex justify-center sm:text-2xl lg:text-4xl font-serif font-semibold tracking-[0.04em] text-stone-800 uppercase">
              Abdullah Al Mahim
            </h1>

            <p className="text-base sm:text-lg leading-8 sm:leading-9 text-justify text-stone-700 font-medium tracking-[0.02em]">
              My name is Abdullah Al Mahim. I was born on September 28, 2002, in
              Pathaliya,Jamalpur,Bangladesh. From an early age, I have been
              interested in building strong relationships with people, standing
              beside members of my community, and taking responsibility for the
              people around me. Since 2015, I have been associated with the
              Bangladesh National Party (BMP) as a dedicated party worker. Through
              my long journey with the organization, I have gained valuable
              experience in teamwork, discipline, communication, organizational
              activities, and carrying out responsibilities with sincerity.
              <br />
              <br />
              One of the greatest inspirations in my political journey is my
              father. He is a dedicated and hardworking political worker, and from
              him I have learned the importance of commitment, patience, courage,
              hard work, and standing beside people during difficult times. His
              dedication has encouraged me to become more responsible and
              committed to my own duties. I believe that true leadership is not
              simply about holding a position or having a title. Real leadership
              is built through trust, respect, responsibility, and the ability to
              listen to people and work with them.
              <br />
              <br />
              I am fortunate to have many friends and well-wishers who respect me
              and support me in different situations. I also value their opinions
              and believe that cooperation and mutual respect are essential
              qualities of a good leader. My goal is to continue developing
              myself as an honest, responsible, people-oriented, and principled
              political worker. I want to contribute positively to society,
              uphold the values of respect and responsibility, and perform my
              organizational duties with dedication and sincerity. I believe that
              with hard work, discipline, and commitment, I can continue to make a
              meaningful contribution to the people and the organization I serve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
