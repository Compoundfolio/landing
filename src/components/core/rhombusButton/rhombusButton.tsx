import { component$, useVisibleTask$ } from '@builder.io/qwik';
import styles from "./rhombusButton.module.css"
import { gsap } from "gsap"

export default component$(() => {

  useVisibleTask$(() => {
    const magnets = document.querySelectorAll('#magnetic')
    const strength = 50

    magnets.forEach((magnet) => {
      magnet.addEventListener('mousemove', moveMagnet);
      magnet.addEventListener('mouseout', function (event) {
        gsap.to(event.currentTarget, 1, { x: 0, y: 0, ease: "power4.out" })
      });
    });

    function moveMagnet(event: any) {
      const magnetButton = event.currentTarget
      const bounding = magnetButton.getBoundingClientRect()

      //console.log(magnetButton, bounding)

      gsap.to(magnetButton, 1, {
        x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * strength,
        y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * strength,
        ease: "power4.out"
      })

      //magnetButton.style.transform = 'translate(' + (((( event.clientX - bounding.left)/(magnetButton.offsetWidth))) - 0.5) * strength + 'px,'+ (((( event.clientY - bounding.top)/(magnetButton.offsetHeight))) - 0.5) * strength + 'px)';
    }

  })

  return (
    <div class={styles.magnetic} id="magnetic">
      <button class={[styles.rhombusButton, styles.myButton]}>
        <svg class={styles.rhombusButton_icon} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <g clip-path="url(#clip0_854_10267)">
            <path d="M14.25 9.74976H9.75V14.2498H8.25V9.74976H3.75V8.24976H8.25V3.74976H9.75V8.24976H14.25V9.74976Z" fill="white" />
          </g>
          <defs>
            <clipPath id="clip0_854_10267">
              <rect width="18" height="18" fill="white" transform="translate(0 -0.000244141)" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  )
})