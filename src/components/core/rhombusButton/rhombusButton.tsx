import { component$, useId, useVisibleTask$ } from '@builder.io/qwik';
import styles from "./rhombusButton.module.css"
import { gsap } from "gsap"

export default component$(() => {

  const magneticButtonUniqueId = useId()

  useVisibleTask$(() => {
    const magnet = document.querySelector(`#${magneticButtonUniqueId}`)
    const strength = 50

    magnet?.addEventListener('mousemove', moveMagnet);
    magnet?.addEventListener('mouseout', function (event) {
      gsap.to(event.currentTarget, 1, { x: 0, y: 0, ease: "power4.out" })
    });

    function moveMagnet(event: any) {
      const magnetButton = event.currentTarget
      const bounding = magnetButton.getBoundingClientRect()

      gsap.to(magnetButton, 1, {
        x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * strength,
        y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * strength,
        ease: "power4.out"
      })

      magnetButton.style.transform = 'translate(' + ((((event.clientX - bounding.left) / (magnetButton.offsetWidth))) - 0.5) * strength + 'px,' + ((((event.clientY - bounding.top) / (magnetButton.offsetHeight))) - 0.5) * strength + 'px)';
    }
  })

  return (
    <div class={styles.magnetic} id={magneticButtonUniqueId}>
      <button class={[styles.rhombusButton, styles.myButton]}>
        <span class={styles.rhombusButton_icon}>+</span>
      </button>
      <div class={[styles.magnetic_titleArea, "flex flex-col gap-8px"]}>
        <span class={styles.magnetic_titleArea_subTitle}>Take control under your investments!</span>
        <span class={styles.magnetic_titleArea_title}>Create portfolio!</span>
      </div>
    </div>
  )
})