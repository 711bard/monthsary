window.addEventListener("load", () => {
  document.body.style.visibility = "visible";
});

document.addEventListener("DOMContentLoaded", () => {
  // =====================================
  // フェードイン：photo-card
  // =====================================
  const fadeElements = document.querySelectorAll(".fadein.photo-card");

  const photoObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          photoObserver.unobserve(entry.target); // 一度表示されたら監視解除
        }
      });
    },
    {
      threshold: 0.7, // 画面の70%に入ったら発火
    }
  );

  fadeElements.forEach((el) => photoObserver.observe(el));


  // =====================================
  // フェードイン：memory.letter内のテキスト
  // =====================================
  const target = document.querySelector(".memory.letter");
  if (target) {
    const texts = target.querySelectorAll(".text");

    const textObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            texts.forEach((el) => el.classList.add("visible"));
            textObserver.unobserve(entry.target); // 一度だけ実行
          }
        });
      },
      {
        threshold: 0.9, // 画面の80%に入ったら発火
      }
    );

    textObserver.observe(target);
  }
});
