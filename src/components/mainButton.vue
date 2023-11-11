<template>
  <div class="flex justify-center items-center h-screen relative max-h-full">
    <div
      class="absolute flex justify-center items-center transform transition-all duration-300 hover:scale-90"
    >
      <svg
        class="animate-spin-slow hover:animate-spin-medium transition-all"
        id="skyrim"
        viewBox="0 0 100 100"
        width="400"
        height="400"
      >
        <defs>
          <path
            id="circle"
            d="
                      M 50, 50
                      m -35, 0
                      a 35,35 0 1,1 70,0
                      a 35,35 0 1,1 -70,0"
          />
        </defs>
        <text
          font-weight="bold"
          font-size="7"
          letter-spacing="-0.12"
          font-family="'Inter', sans-serif"
        >
          <textPath xlink:href="#circle">
            CLICK
            <tspan class="text-[#5E2BFF]">ME!</tspan>
            CLICK
            <tspan class="text-[#5E2BFF]">ME!</tspan>
            CLICK
            <tspan class="text-[#5E2BFF]">ME!</tspan>
            CLICK
            <tspan class="text-[#5E2BFF]">ME!</tspan>
            CLICK
            <tspan class="text-[#5E2BFF]">ME!</tspan>
            CLICK
            <tspan class="text-[#5E2BFF]">ME!</tspan>
          </textPath>
        </text>
      </svg>
    </div>
    <button
      class="absolute z-1 flex items-center justify-center bg-transparent text-white font-bold uppercase px-2 py-1 rounded-lg text-3xl border-4 border-white transform transition-all duration-300 hover:scale-125"
      @click="playClick()"
    >
      BO<span class="text-[#5E2BFF]">RED</span>
      <svg
        width="25"
        height="26"
        viewBox="0 0 25 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.58179 2.31567L10.1741 3.86158C10.5578 4.8626 11.3076 5.68493 12.2748 6.16596C13.0375 6.54523 13.6702 7.13923 14.0914 7.87311L14.6333 8.81586"
          stroke="#5E2BFF"
          stroke-width="4"
          stroke-linecap="round"
        />
        <path
          d="M2.15295 6.15674L2.74522 7.70264C3.12893 8.7037 3.8782 9.52604 4.84597 10.007C5.60871 10.3863 6.24081 10.9803 6.6626 11.7142L7.20449 12.6569"
          stroke="#5E2BFF"
          stroke-width="4"
          stroke-linecap="round"
        />
        <path
          d="M17.1594 22.2596L18.7704 20.7151C20.4377 19.1164 21.6281 17.0954 22.211 14.873L22.4687 13.1659C22.5917 12.3477 22.5033 11.5118 22.211 10.7366"
          stroke="#5E2BFF"
          stroke-width="4"
          stroke-linecap="round"
        />
        <path
          d="M3.78735 22.2596L8.12243 23.3649C9.09138 23.6119 10.0884 23.7369 11.089 23.7369H11.6221C13.2091 23.7369 14.7727 23.3532 16.1751 22.6191C16.6327 22.3798 17.0697 22.1049 17.4827 21.7969L19.1335 20.5658C20.3673 19.6459 21.3087 18.3971 21.8488 16.9662C22.1862 16.0705 22.3596 15.1222 22.3596 14.1662V12.0662V10.5889"
          stroke="white"
          stroke-width="4"
          stroke-linecap="round"
        />
      </svg>
    </button>
    <audio id="bgAudio" autoplay controls volume="0.1" loop>
      <source
        src="https://bored-bucket.s3.eu-west-3.amazonaws.com/Wii+Menu+Music+1+Hour.mp4"
        type="audio/mp3"
      />
      This was supposed to be the background music but your browser does not
      support the audio element.
    </audio>
    <audio ref="audioClick" volume="0.5">
      <source
        src="https://bored-bucket.s3.eu-west-3.amazonaws.com/click.mp3"
        type="audio/mp3"
      />
      This was supposed to be the click sound effect but your browser does not
      support the audio element.
    </audio>
  </div>
  <div class="fixed top-0 left-0 p-4 flex flex-row gap-6">
    <svg
    v-if="showButton1"
      class="fixed"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      @click="playClick"
    >
      <path
        d="M3.50002 1.99999C3.31701 2.03311 3.14687 2.11661 3.00871 2.2411C2.87055 2.36559 2.76984 2.52614 2.71789 2.70471C2.66595 2.88329 2.66484 3.07281 2.71468 3.25198C2.76451 3.43116 2.86333 3.59288 3.00002 3.71899L23 23.719C23.0883 23.8278 23.1984 23.9169 23.3233 23.9805C23.4482 24.044 23.585 24.0806 23.7249 24.0879C23.8649 24.0951 24.0048 24.0729 24.1355 24.0226C24.2663 23.9724 24.3851 23.8952 24.4842 23.7961C24.5832 23.697 24.6603 23.5781 24.7105 23.4473C24.7607 23.3165 24.7828 23.1766 24.7754 23.0366C24.768 22.8967 24.7314 22.7599 24.6677 22.6351C24.6041 22.5102 24.5149 22.4002 24.406 22.312L17 14.907V3.31199C17 2.04699 15.895 1.72999 15.031 2.59399L9.81202 7.71899L4.40702 2.31199C4.3038 2.20205 4.17705 2.11688 4.03626 2.06285C3.89547 2.00882 3.74429 1.98733 3.59402 1.99999C3.5627 1.99852 3.53133 1.99852 3.50002 1.99999ZM5.00002 9.06299C4.44902 9.06299 4.00002 9.51099 4.00002 10.063V16.063C4.00002 16.613 4.44902 17.063 5.00002 17.063H8.43802L15 23.468C16 24.468 17 23.956 17 22.593V20.03L6.03102 9.06299H5.00002Z"
        fill="white"
      />
    </svg>
    <svg
    v-if="showButton2"
      class="fixed"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      @click="playClick"
    >
      <path
        d="M12.031 2.06299C11.71 2.06399 11.355 2.20799 11.031 2.53099L4.437 8.99999H1C0.449 8.99999 0 9.44899 0 9.99999V16C0 16.551 0.449 17 1 17H4.438L11 23.438C12 24.438 13 23.926 13 22.563V3.27999C13 2.48899 12.567 2.05799 12.031 2.06099V2.06299ZM19.281 3.06299C19.0683 3.10009 18.8734 3.20503 18.7253 3.36211C18.5772 3.51919 18.4839 3.71998 18.4593 3.93448C18.4348 4.14897 18.4803 4.36564 18.5891 4.55211C18.698 4.73858 18.8642 4.88482 19.063 4.96899C20.5507 5.71692 21.8006 6.86448 22.6726 8.28299C23.5447 9.7015 24.0043 11.3349 24 13C24 16.524 22 19.55 19.062 21.031C18.9283 21.0775 18.806 21.1519 18.7032 21.2492C18.6004 21.3465 18.5194 21.4645 18.4656 21.5955C18.4118 21.7264 18.3865 21.8673 18.3912 22.0088C18.3959 22.1503 18.4306 22.2891 18.493 22.4162C18.5554 22.5433 18.644 22.6556 18.7531 22.7459C18.8622 22.8361 18.9892 22.9022 19.1257 22.9397C19.2622 22.9772 19.4051 22.9853 19.5449 22.9635C19.6848 22.9416 19.8184 22.8903 19.937 22.813C23.53 21 26 17.288 26 13C26 8.71199 23.529 4.99999 19.937 3.18699C19.7659 3.09148 19.5704 3.04836 19.375 3.06299C19.3437 3.06152 19.3123 3.06152 19.281 3.06299ZM17.125 5.81299C16.9083 5.8403 16.7065 5.93783 16.5504 6.09065C16.3943 6.24347 16.2926 6.44319 16.2607 6.65929C16.2289 6.87538 16.2687 7.09596 16.374 7.28732C16.4793 7.47868 16.6444 7.6303 16.844 7.71899C17.799 8.23096 18.5969 8.99266 19.1528 9.92276C19.7086 10.8529 20.0015 11.9165 20 13C20.0044 14.0804 19.7161 15.1418 19.1659 16.0715C18.6158 17.0013 17.8241 17.7648 16.875 18.281C16.7432 18.3324 16.6238 18.4111 16.5247 18.512C16.4256 18.613 16.349 18.7338 16.3 18.8665C16.2511 18.9992 16.2308 19.1408 16.2406 19.2819C16.2504 19.423 16.29 19.5604 16.3568 19.6851C16.4236 19.8098 16.5162 19.9189 16.6282 20.0052C16.7403 20.0914 16.8695 20.153 17.0071 20.1856C17.1447 20.2183 17.2877 20.2214 17.4266 20.1948C17.5656 20.1681 17.6972 20.1123 17.813 20.031C19.0792 19.3445 20.1366 18.3289 20.8735 17.0914C21.6105 15.8538 21.9997 14.4403 22 13C22 9.96199 20.288 7.32099 17.781 5.96899C17.6406 5.87837 17.4797 5.82439 17.313 5.81199C17.2505 5.80609 17.1875 5.80609 17.125 5.81199V5.81299ZM14.531 9.09299C14.2985 9.12979 14.0864 9.24745 13.9321 9.42525C13.7778 9.60304 13.6912 9.82957 13.6875 10.065C13.6838 10.3003 13.7632 10.5295 13.9118 10.7121C14.0605 10.8946 14.2688 11.0189 14.5 11.063C15.357 11.286 16 12.062 16 13C16 13.938 15.357 14.714 14.5 14.938C14.3728 14.9708 14.2533 15.0284 14.1484 15.1074C14.0435 15.1864 13.9551 15.2853 13.8884 15.3984C13.8217 15.5116 13.7779 15.6368 13.7596 15.7668C13.7412 15.8969 13.7487 16.0293 13.7815 16.1565C13.8143 16.2837 13.8719 16.4031 13.9509 16.5081C14.0299 16.613 14.1288 16.7014 14.2419 16.7681C14.3551 16.8348 14.4803 16.8786 14.6103 16.8969C14.7404 16.9153 14.8728 16.9078 15 16.875C16.721 16.425 18 14.85 18 13C18 11.15 16.721 9.57499 15 9.12499C14.8781 9.09102 14.7508 9.0805 14.625 9.09399C14.5937 9.09252 14.5623 9.09152 14.531 9.09299Z"
        fill="white"
      />
    </svg>
  </div>
</template>

<style>
#skyrim {
  fill: currentColor;
  max-width: 100%;
  transform-origin: center;
  width: 100%;
}

audio {
  display: none;
}
</style>

<script setup lang="ts">
import { ref } from "vue";

const audioClick = ref<HTMLAudioElement | null>(null);
const showButton1 = ref(true);
const showButton2 = ref(false);
// Add more ref properties for additional buttons if needed

const playClick = () => {
  if (audioClick.value) {
    audioClick.value.play();
    toggleButtons();
  }
};

const toggleButtons = () => {
  showButton1.value = !showButton1.value;
  showButton2.value = !showButton2.value;
  // Add similar lines for additional buttons
};
</script>
