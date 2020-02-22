$ = {}

function _createModal(options) {
  const modal = document.createElement('div')
  modal.classList.add('modal-window')

  modal.insertAdjacentHTML("afterbegin", `
    <div class="modal-window__overlay">
      <div class="madal-window__window">
        <div class="madal-window__header">
          <span class="madal-window__title">Заголовок модального окна</span>
          <span class="madal-window__close">&times;</span>
        </div>
        <div class="madal-window__main">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eius nostrum nihil fugiat quis eligendi.
            Soluta
            error voluptatem quae quasi sunt. Cum, molestias quod eaque voluptatibus amet ut ipsa ratione!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eius nostrum nihil fugiat quis eligendi.
            Soluta
            error voluptatem quae quasi sunt. Cum, molestias quod eaque voluptatibus amet ut ipsa ratione!</p>
        </div>
        <div class="madal-window__footer">
          <button>Ok</button>
          <button>Censel</button>
        </div>
      </div>
    </div>
  `)

  document.body.appendChild(modal)

  return modal
}

$.modal = function (options) {
  /*
   * TODO: решить вопрос скорости анимации через настройки
   */
  const ANIMATION_SPEED = 200
  $modal = _createModal(options)

  return {
    open() {
      $modal.classList.add('open')
    },
    close() {
      $modal.classList.remove('open')
      $modal.classList.add('hide')
      setTimeout(() => {

      }, ANIMATION_SPEED)
    },
    destroy() {}
  }
}