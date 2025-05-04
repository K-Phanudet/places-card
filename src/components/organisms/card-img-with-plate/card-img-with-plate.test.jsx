import React from 'react';
import { render, screen } from '@testing-library/react';
import { CardImgWithPlate } from './card-img-with-plate';
import '@testing-library/jest-dom';

jest.mock('../../atoms', () => ({
  CardImage: ({ src, className, alt }) => (
    <img src={src} className={className} alt={alt} data-testid="mock-card-image" />
  )
}));

jest.mock('../../molecules', () => ({
  LabeledPlate: ({ className, labelText }) => (
    <div className={className} data-testid="mock-labeled-plate">
      {labelText}
    </div>
  )
}));

describe('CardImgWithPlate', () => {
  it('renders wrapper, image, and plate label correctly', () => {
    render(
      <CardImgWithPlate
        src="test.jpg"
        plateLabel="Sample Plate"
        alt="Test Alt"
        className="custom-class"
      />
    );

    const wrapper = screen.getByTestId('card-img-with-plate-wrapper');
    const image = screen.getByTestId('mock-card-image');
    const plate = screen.getByTestId('mock-labeled-plate');

    expect(wrapper).toBeDefined();
    expect(image).toHaveAttribute('src', 'test.jpg');
    expect(image).toHaveAttribute('alt', 'Test Alt');
    expect(plate).toHaveTextContent('Sample Plate');
  });
});
