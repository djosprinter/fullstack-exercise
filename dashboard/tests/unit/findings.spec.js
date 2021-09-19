import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Findings from '@/views/Findings.vue'

describe('Findings.vue', () => {
  it('renders props.items when passed', () => {
    const items = [
      {
        type: 'sast',
        ruleId: 'G402',
        location: {
          path: 'connectors/apigateway.go',
          positions: {
            begin: {
              line: 60
            }
          }
        },
        metadata: {
          description: 'TLS InsecureSkipVerify set true.',
          severity: 'HIGH'
        }
      }
    ]

    const wrapper = shallowMount(Findings, {
      stubs: ['router-link'],
      propsData: { items }
    })
    expect(wrapper.props().items).to.equal(items)
  })

  it('renders h1 tag', () => {
    const wrapper = shallowMount(Findings, {
      stubs: ['router-link']
    })
    expect(wrapper.find('h1').text()).equal('Findings')
  })

  it('link to scan results', () => {
    const wrapper = shallowMount(Findings, {
      stubs: ['router-link']
    })
    expect(wrapper.find('.back-to-results').attributes('to')).to.equal('/result-list')
  })
})
