
export const rotateBorder = {
  mounted(el, binding) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        console.log(binding.value)
        if (entry.isIntersecting) {
          el.classList.add(binding.value || 'border-wrap')
          //observer.unobserve(el) // 只触发一次
        }
      })
    }, { threshold: 0.3 }) // 元素可见30%时触发 
    observer.observe(el)
  }
}