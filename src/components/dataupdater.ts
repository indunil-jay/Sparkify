const elements = document.querySelectorAll(".bannerClients__client-number")!;
const items = elements ? (Array.from(elements) as HTMLElement[]) : [];
export const showAchievements = () => {
  const updateCount = (el: HTMLElement) => {
    const value = parseInt(el.dataset.value || "0", 10);
    const increment = Math.ceil(value / 1000);
    let initialValue = 0;

    const increaseCount = setInterval(() => {
      initialValue += increment;

      if (initialValue > value) {
        el.textContent = `${value}+`;
        clearInterval(increaseCount);
        return;
      }

      el.textContent = `${initialValue}+`;
    }, 1);
  };

  items.forEach((item: HTMLElement) => {
    updateCount(item);
  });
};
