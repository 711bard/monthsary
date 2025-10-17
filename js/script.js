// IntersectionObserverでフェードイン制御
const fadeElements = document.querySelectorAll(".fadein");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); // 一度表示されたら監視解除
    }
  });
});

fadeElements.forEach(el => observer.observe(el));

