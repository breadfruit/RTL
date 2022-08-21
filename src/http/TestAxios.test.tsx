import TestAxios from './TestAxios'
import { render, fireEvent, screen } from '@testing-library/react'
import axios from 'axios'

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('axios', () => {
    test('should display a loading text', () => {
        const url = "/greeting";
        render(<TestAxios url={url} />);
    
        
        mockedAxios.get.mockResolvedValue({
          data: { greeting: "hello there" },
        });
    
        fireEvent.click(screen.getByTestId("fetch-data"));
      })
})
