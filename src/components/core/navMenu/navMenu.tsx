import { component$ } from '@builder.io/qwik';
import styles from './navMenu.module.css'
import { NAV_CONFIG } from './config';

export default component$(() => {
  return (
    <nav class={styles.nav}>
      <ol>
        {Object.values(NAV_CONFIG).map(({ title, id }) => (
          <li key={id}>
            <a href={`#${id}`}>{title}</a>
          </li>
        ))}
      </ol>
    </nav>
  )
})