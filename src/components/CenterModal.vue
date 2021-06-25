<template>
  <div
    class="modal fade"
    id="centerModal"
    tabindex="-1"
    aria-labelledby="modalLabel"
    aria-hidden="true"
    ref="centerModal"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5
            class="modal-title"
            id="modalLabel"
          >
            {{ title }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close">
          </button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { Modal } from 'bootstrap'

class Props {
  title!: string
}

export default class CenterModal extends Vue.with(Props) {
  modal!: Modal
  mounted(): void {
    this.modal = new Modal(this.$refs.centerModal as HTMLElement)
  }
  show(): void {
    this.modal.show()
  }
  hide(): void {
    this.modal.hide()
  }
}
</script>