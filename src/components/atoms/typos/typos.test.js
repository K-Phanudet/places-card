import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  H1, H2, H3,
  T18, T16, T14, T12,
  C16, C14, C12, C10,
} from './typos';

describe('Typography components', () => {
  const testCases = [
    { Component: H1, tag: 'h1', className: 'heading-1', name: 'H1' },
    { Component: H2, tag: 'h2', className: 'heading-2', name: 'H2' },
    { Component: H3, tag: 'h3', className: 'heading-3', name: 'H3' },
    { Component: T18, tag: 'h1', className: 'title-18', name: 'T18' },
    { Component: T16, tag: 'h2', className: 'title-16', name: 'T16' },
    { Component: T14, tag: 'h3', className: 'title-14', name: 'T14' },
    { Component: T12, tag: 'h4', className: 'title-12', name: 'T12' },
    { Component: C16, tag: 'p', className: 'content-16', name: 'C16' },
    { Component: C14, tag: 'p', className: 'content-14', name: 'C14' },
    { Component: C12, tag: 'p', className: 'content-12', name: 'C12' },
    { Component: C10, tag: 'p', className: 'content-10', name: 'C10' },
  ];

  testCases.forEach(({ Component, tag, className, name }) => {
    test(`${name} renders correct tag and class`, () => {
      render(<Component data-testid="typography">Test {name}</Component>);
      const element = screen.getByTestId('typography');
      expect(element.tagName.toLowerCase()).toBe(tag);
      expect(element).toHaveClass(className);
      expect(element).toHaveTextContent(`Test ${name}`);
    });

    test(`${name} accepts additional className`, () => {
      render(<Component className="custom-class" data-testid="typography">Extra</Component>);
      const element = screen.getByTestId('typography');
      expect(element).toHaveClass(className);
      expect(element).toHaveClass('custom-class');
    });
  });
});
