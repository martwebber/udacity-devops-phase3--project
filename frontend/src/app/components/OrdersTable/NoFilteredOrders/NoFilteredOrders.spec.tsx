import { ShallowWrapper, shallow } from 'enzyme';
import { NoFilteredOrders } from '.';
import * as React from 'react';
import { Button } from 'app/components/Button';

const mockHandleResetOrders = jest.fn();
describe('<NoFilteredOrders>', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(
      <NoFilteredOrders
        searchText=''
        handleResetOrders={mockHandleResetOrders}
      />,srcsrsrsrsrsrc/app/components/OrdersTable/NoFilteredOrders/NoFilteredOrders.spec.tsx c/app/components/OrdersTable/NoFilteredOrders/NoFilteredOrders.spec.tsx c/app/components/OrdersTable/NoFilteredOrders/NoFilteredOrders.spec.tsx c/app/components/OrdersTable/NoFilteredOrders/NoFilteredOrders.spec.tsx c/app/components/OrdersTable/NoFilteredOrders/NoFilteredOrders.spec.tsx /app/components/OrdersTable/NoFilteredOrders/NoFilteredOrders.spec.tsx 
    );
  });

  describe('when reset button is clicked', () => {
    it('should called handleResetOrders with empty string', () => {
      wrapper.find(Button).simulate('click');
      expect(mockHandleResetOrders).toBeCalledWith('');
    });
  });
});
