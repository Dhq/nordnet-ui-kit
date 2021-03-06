import React from 'react';
import { expect, assert } from 'chai';
import { shallow } from 'enzyme';
import { mockClasses, theme } from '../../../src';
import { Component as Dropdown, styles } from '../../../src/components/dropdown/dropdown';

describe('<Dropdown />', () => {
  const classes = mockClasses(styles);
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Dropdown classes={classes} theme={theme} toggle="Dropdown" actions={[{ label: 'log', function() {} }]} />);
  });

  it('should render <div> as container', () => expect(wrapper.type()).to.equal('div'));
  it("should contain a <button> with class 'toggle'", () => assert.ok(wrapper.find('button').hasClass(classes.toggle)));
  it('should be closed by default', () => expect(wrapper.state('actionsOpen')).to.equal(false));
  it('should be open after click', () => {
    wrapper.find(`button.${classes.toggle}`).simulate('click');
    expect(wrapper.state('actionsOpen')).to.equal(true);
  });

  it(`should have the ${classes.dropdown} class`, () => {
    expect(wrapper.hasClass(classes.dropdown)).to.equal(true);
  });
});
