import { ref, nextTick } from 'vue';
import { useAudio } from '../router/useAudio';

export function usePopup(startTour) {
    const showPopup = ref(false);
    const countdownMessage = ref(10);
    const { playAudio, pauseAudio } = useAudio();

    const disableScroll = () => {
        document.body.style.overflow = "hidden";
    };

    const enableScroll = () => {
        document.body.style.overflow = "";
    };

    const startCountdown = () => {
        const interval = setInterval(() => {
            if (countdownMessage.value > 0) {
                countdownMessage.value -= 1;
            }
            if (countdownMessage.value === 0) {
                clearInterval(interval);
                showPopup.value = false;
                enableScroll();
                nextTick(() => {
                    playAudio();
                });
            }
        }, 1000);

        setTimeout(startTour, 12000);
    };

    return { showPopup, countdownMessage, disableScroll, enableScroll, startCountdown };
}
