import test from 'tape'
import React from 'react'
import TestUtils from 'react/lib/ReactTestUtils'
import {App} from '../lib/App'

test('App should load', (t) => {
  const shallowRenderer = TestUtils.createRenderer()
  shallowRenderer.render(React.createElement(App, { className: 'test' }, 'children'))
  let component = shallowRenderer.getRenderOutput()
  t.equal(component.type, 'div', 'our component type match')
  t.end()
})
