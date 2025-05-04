import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './card'
import '@testing-library/jest-dom';

jest.mock('../../organisms', () => ({
  CardImgWithPlate: ({ src, plateLabel, alt }) => (
    <div data-testid="card-img-with-plate">
      <img src={src} alt={alt} />
      <span>{plateLabel}</span>
    </div>
  )
}));

jest.mock('../../atoms', () => ({
  C14: ({ children, className }) => <p data-testid="card-content" className={className}>{children}</p>
}));

jest.mock('../../molecules', () => ({
  Tag: ({ label }) => <span data-testid="card-tag">{label}</span>
}));

describe('Card component', () => {
  it('renders with image, label, content, and tags', () => {
    render(
      <Card
        imgProps={{ src: 'test.jpg', alt: 'Test Alt' }}
        plateLabel="Test Plate"
        content="Test content"
        tags={['Tag1', 'Tag2']}
      />
    );

    expect(screen.getByTestId('card-img-with-plate')).toBeInTheDocument();
    expect(screen.getByAltText('Test Alt')).toHaveAttribute('src', 'test.jpg');
    expect(screen.getByText('Test Plate')).toBeInTheDocument();
    expect(screen.getByTestId('card-content')).toHaveTextContent('Test content');

    const tagElements = screen.getAllByTestId('card-tag');
    expect(tagElements).toHaveLength(2);
    expect(tagElements[0]).toHaveTextContent('Tag1');
    expect(tagElements[1]).toHaveTextContent('Tag2');
  });

  it('does not render image or content or tags if props are missing', () => {
    render(<Card />);

    expect(screen.queryByTestId('card-img-with-plate')).not.toBeInTheDocument();
    expect(screen.queryByTestId('card-content')).not.toBeInTheDocument();
    expect(screen.queryByTestId('card-tag')).not.toBeInTheDocument();
  });
});
