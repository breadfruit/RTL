import React from 'react';
import { render, screen, renderHook, fireEvent, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import App from './App'
import usePow from './hooks/usePow'
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Empty', () => {
  test('默认描述及改变描述', () => {
      render(<App />)
      expect(screen.getByTestId('app')).toBeInTheDocument()
  })

});
