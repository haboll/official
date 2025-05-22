
export const animateDirective = {
  mounted(el, binding) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        console.log()
        if (entry.isIntersecting) {
          el.classList.add(binding.value || 'enter-active')
          //observer.unobserve(el) // 只触发一次
        }
      })
    }, { threshold: 0.3 }) // 元素可见10%时触发 

    el.classList.add('enter-from') // 初始状态
    observer.observe(el)
  }
}