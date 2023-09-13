import { component$ } from '@builder.io/qwik'

export default component$(() => {
  return (
    <div class="centered">
      <p>Numbers</p>
      <h1>Track assets from over 70 stock exchanges from all over the world</h1>
      <div>
        <div>
          <span>30+</span>
          <span>years of historical data</span>
        </div>
        <div>
          <span>150K+</span>
          <span>tickers to search for</span>
        </div>
        <div>
          <span>20K+</span>
          <span>ETFs</span>
        </div>
      </div>
      <button>Start tracking assets</button>
    </div>
  )
})