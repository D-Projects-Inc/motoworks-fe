// This component only exists to initialize AOS.
import { useEffect } from 'preact/hooks';
import 'aos/dist/aos.css';
import AOS from 'aos';

// AOS (Animate On Scroll):
// Usage: data-aos="{aos-option}" 
// AOS Options: 
//  FADE: "fade-up/down/left/right/up-(L/R)/down-(L/R)" | 
//  FLIP: "flip-(U/D/L/R)"
//  ZOOM: ["zoom-(in/out) / [in/out]-(U/D/L/R) / "]

export default function AOSInitialiser() {
  useEffect(
    () => {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false, // animation only once per element
      });
    }, []
  );
  return null;
};