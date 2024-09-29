import { motion } from 'framer-motion';

import { styles } from '../styles'
import { ComputersCanvas } from './canvas';
import { badges } from '../constants';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[150px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Azamat</span>
          </h1>
          <p className={`${styles.heroSubText} mt-6 text-white-100`}>
            <strong className="text-[#915eff]">
              a Full Stack AI Engineer with 4 years of experience
            </strong>{' '}
            <br className="sm:block hidden" />
            certified by Google, Meta, and IBM.
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      {/* <div className="relative border border-red-500 flex flex-row">
        <img
          src="src/assets/meta-full-stack-engineer-certificate.png"
          alt="meta badge"
          className="w-56 absolute right-20 top-20"
        />
        <img
          src="src/assets/google-advanced-data-analytics.png"
          alt="google badge"
          className="w-56 absolute right-20 top-"
        />
        <img
          src="src/assets/Professional_Certificate_-_AI_Engineering.png"
          alt="ibm ai engineering"
          className="w-56 absolute right-20 top-20"
        />
        <img
          src="src/assets/google-python-automation.png"
          alt="google python automation"
          className="w-56 absolute right-20 top-20"
        />
        <img
          src="src/assets/ibm-full-stack.png"
          alt="ibm full stack badge"
          className="w-56 absolute right-20 top-20"
        />
        <img
          src="src/assets/ibm-full-stack.png"
          alt="ibm full stack badge"
          className="w-56 absolute right-20 top-20"
        />
      </div> */}

      {/* <div class="absolute flex justify-between items-center right-40 top-40 gap-20">
        <div class=" flex flex-1 flex-col gap-5">
          <img
            src="src/assets/meta-full-stack-engineer-certificate.png"
            alt="meta badge"
            class="h-56"
          />
          <img
            src="src/assets/google-advanced-data-analytics.png"
            alt="google badge"
            class="h-56"
          />
          <img
            src="src/assets/Professional_Certificate_-_AI_Engineering.png"
            alt="ibm ai engineering"
            class="h-56"
          />
        </div>
        <div class="flex flex-1 flex-col gap-5">
          <img
            src="src/assets/ibm-full-stack.png"
            alt="ibm full stack badge"
            class="h-56"
          />
          <img
            src="src/assets/google-python-automation.png"
            alt="google python automation"
            class="h-56"
          />
          <img
            src="src/assets/nau-tertiary-white-text.png"
            alt="nau badge"
            class="h-56"
          />
        </div>
      </div> */}

      {/* <div class="overflow-hidden whitespace-nowrap">
        <div class="flex animate-scrollImages -ml-20">
          <img
            src="src/assets/meta-full-stack-engineer-certificate.png"
            alt="meta badge"
            class="w-56"
          />
          <img
            src="src/assets/google-advanced-data-analytics.png"
            alt="google badge"
            class="w-56"
          />
          <img
            src="src/assets/Professional_Certificate_-_AI_Engineering.png"
            alt="ibm ai engineering"
            class="w-56"
          />
          <img
            src="src/assets/google-python-automation.png"
            alt="google python automation"
            class="w-56"
          />
          <img
            src="src/assets/ibm-full-stack.png"
            alt="ibm full stack badge"
            class="w-56"
          />
          <img
            src="src/assets/ibm-full-stack.png"
            alt="ibm full stack badge"
            class="w-56"
          />
        </div>
      </div> */}

      <div class="absolute top-[500px] w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {badges.map((badge, index) => {
            return (
              <li key={index}>
                <img src={badge} alt="" className='w-40'/>
              </li>
            );
          })}
          {/* <li>
            <img
              src="assets/meta-full-stack-engineer-certificate.png"
              alt="meta badge"
              class="w-40"
            />
          </li>
          <li>
            <img
              src="assets/google-advanced-data-analytics.png"
              alt="meta badge"
              class="w-40"
            />
          </li>
          <li>
            <img
              src="assets/Professional_Certificate_-_AI_Engineering.png"
              alt="meta badge"
              class="w-40"
            />
          </li>
          <li>
            <img
              src="assets/google-python-automation.png"
              alt="meta badge"
              class="w-40"
            />
          </li>
          <li>
            <img
              src="assets/ibm-full-stack.png"
              alt="meta badge"
              class="w-40"
            />
          </li>
          <li>
            <img
              src="assets/nau-tertiary-white-text.png"
              alt="meta badge"
              class="w-40"
            />
          </li> */}
        </ul>
        <ul
          class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          {badges.map((badge, index) => {
            return (
              <li key={index}>
                <img src={badge} alt="" className='w-40'/>
              </li>
            );
          })}
          {/* <li>
            <img
              src="assets/meta-full-stack-engineer-certificate.png"
              alt="meta badge"
              class="w-40"
            />
          </li>
          <li>
            <img
              src="assets/google-advanced-data-analytics.png"
              alt="meta badge"
              class="w-40"
            />
          </li>
          <li>
            <img
              src="assets/Professional_Certificate_-_AI_Engineering.png"
              alt="meta badge"
              class="w-40"
            />
          </li>
          <li>
            <img
              src="assets/google-python-automation.png"
              alt="meta badge"
              class="w-40"
            />
          </li>
          <li>
            <img
              src="assets/ibm-full-stack.png"
              alt="meta badge"
              class="w-40"
            />
          </li>
          <li>
            <img
              src="assets/nau-tertiary-white-text.png"
              alt="meta badge"
              class="w-40"
            />
          </li> */}
        </ul>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero