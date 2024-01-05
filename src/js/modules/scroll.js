const scroll = () => {
  const observedObjects = document.querySelectorAll(".animated");

  const setAnimByClassName = (target, targetClass, animClass) => {
    if (target.classList.contains(targetClass)) {
      target.classList.add(animClass);
    }
  };

  const observer = new IntersectionObserver((entries) => {
    // перебор записей
    entries.forEach((entry) => {
      // если элемент появился
      if (entry.isIntersecting) {
        const target = entry.target;

        setAnimByClassName(target, "leftIn", "leftIn-animation");
        setAnimByClassName(target, "rightIn", "rightIn-animation");
        setAnimByClassName(target, "fadeIn", "fadeIn-animation");
      }
    });
  });

  observedObjects.forEach((el) => {
    observer.observe(el);
  });
};

export default scroll;
