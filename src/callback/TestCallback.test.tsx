import Search from './search'
import {render, fireEvent,screen } from '@testing-library/react'
describe('Search', () => {
    test('calls the onChange callback handler', () => {
      const onChange = jest.fn();
   
      render(
        <Search value="" onChange={onChange}>
          Search:
        </Search>
      );
   
      fireEvent.change(screen.getByRole('textbox'), {
        target: { value: 'JavaScript' },
      });
      fireEvent.change(screen.getByRole('textbox'), {
        target: { value: 'JavaScript' },
      });
   
      expect(onChange).toHaveBeenCalledTimes(2);
    });
  });
