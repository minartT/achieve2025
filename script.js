function openPage(page) {
  // 각 page 이름에 맞는 실제 URL을 매핑
  const urlMap = {
    web1: "https://sites.google.com/muhak.sen.ms.kr/achieve3-1?usp=sharing",
    web2: "https://sites.google.com/muhak.sen.ms.kr/achieve3-2?usp=sharing",
    web3: "https://sites.google.com/muhak.sen.ms.kr/achieve3-3?usp=sharing",
    web4: "https://sites.google.com/muhak.sen.ms.kr/achieve3-4?usp=sharing",
    web5: "https://sites.google.com/muhak.sen.ms.kr/achieve3-5?usp=sharing",
    web6: "https://sites.google.com/muhak.sen.ms.kr/achieve3-6?usp=sharing",
    web7: "https://sites.google.com/muhak.sen.ms.kr/achieve3-7?usp=sharing",
    web8: "https://sites.google.com/muhak.sen.ms.kr/achieve3-8?usp=sharing",
    web9: "https://sites.google.com/muhak.sen.ms.kr/achieve3-9?usp=sharing",
    web10: "https://sites.google.com/muhak.sen.ms.kr/achieve3-10?usp=sharing"
  };

  if (urlMap[page]) {
    window.open(urlMap[page], "_blank");
  } else {
    alert("해당 페이지의 링크가 설정되지 않았습니다.");
  }
}
