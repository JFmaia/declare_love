import { mount } from '@vue/test-utils'
import Carrosel from '@/components/MyCarrossel.vue'

describe('Testando o Carrosel', () => {
  it('Se existe tal frase no componente', () => {
    const wrapper = mount(Carrosel)
    expect(wrapper.html()).toContain('Oi novamente, bem aqui você saberá algumas coisas do meu coração, coisas que eu não te contei.')
  })
})
