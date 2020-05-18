export function debounce(method,delay) {
  let timer = null;
  return function () {
    let that = this ;
    timer && clearTimeout(timer);
    timer = setTimeout(function() {
      method.apply(that);
    }, delay);
  }
}

