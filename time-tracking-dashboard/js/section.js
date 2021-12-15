const displayInfo = document.querySelector('#card-grid');
const buttons = document.querySelectorAll('button');

const nameFormatter = (name, isClassName = true) => {
  if (isClassName) {
    return name.split(' ').join('').toLowerCase();
  } else {
    return name.split(' ').join('-').toLowerCase();
  }
};

const checkTime = (timeframe) => {
  if (timeframe === 'weekly') {
    return 'Week';
  } else if (timeframe === 'daily') {
    return 'Day';
  } else {
    return 'Month';
  }
};

const displayData = (data, timeframe) => {
  displayInfo.innerHTML = '';
  data.forEach((getInfo) => {
    const section = `
      <section class="w-80 bg-${nameFormatter(getInfo.title)} relative overflow-hidden rounded-xl xl:w-60">
        <img 
          class="absolute -top-4 right-4" 
          src="./images/icon-${nameFormatter(getInfo.title, false)}.svg" 
          alt=${getInfo.title} 
        />
        <div class="bg-neturalBlue-800 hover:bg-blue-900 mt-9 p-6 relative flex flex-col gap-4 rounded-xl xl:mt-11 cursor-pointer">
          <div class="flex-between">
            <h2 class="title-style text-xl">${getInfo.title}</h2>
            <img src="images/icon-ellipsis.svg" alt="ellipsis" />
          </div> 
          <div class="flex-between gap-4 xl:flex-col xl:items-start">
            <p class="text-white text-3xl xl:text-5xl">
              ${getInfo.timeframes[timeframe].current}hrs
            </p>
            <p class="text-sm xl:text-xl">
              Last ${checkTime(timeframe)} - ${getInfo.timeframes[timeframe].previous}hrs
            </p>
          </div>
        </div>
      </section>
    `;
    const sectionFrag = document.createRange().createContextualFragment(section);
    displayInfo.appendChild(sectionFrag);
  });
};

let setTimeframe = 'weekly';

buttons.forEach((button) =>
  button.addEventListener('click', () => {
    buttons.forEach((button) => button.classList.remove('active-status'));
    button.classList.add('active-status');
    setTimeframe = button.textContent;

    (async function () {
      try {
        const data = await (await fetch('./data.json')).json();
        return displayData(data, setTimeframe);
      } catch (error) {
        displayInfo.innerHTML = '';
        const h2 = document.createElement('h2');
        h2.classList.add('text-white');
        h2.textContent = 'something went wrong';
        displayInfo.append(h2);
      }
    })();
  })
);

(async function () {
  try {
    const data = await (await fetch('./data.json')).json();
    return displayData(data, setTimeframe);
  } catch (error) {
    displayInfo.innerHTML = '';
    const h2 = document.createElement('h2');
    h2.classList.add('text-white');
    h2.textContent = 'something went wrong';
    displayInfo.append(h2);
  }
})();
