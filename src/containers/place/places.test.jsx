import React from 'react';
import { render, screen } from '@testing-library/react';
import { Places } from './places'; 
import '@testing-library/jest-dom';

jest.mock('../../components', () => ({
  Card: ({ imgProps, plateLabel, content, tags }) => (
    <div data-testid="mock-card">
      <img src={imgProps?.src} alt={imgProps?.alt} data-testid="mock-card-img" />
      <p data-testid="mock-card-label">{plateLabel}</p>
      <p data-testid="mock-card-content">{content}</p>
      {tags?.map((tag, i) => (
        <span key={i} data-testid="mock-card-tag">{tag}</span>
      ))}
    </div>
  )
}));

describe('Places component', () => {
  it('renders a list of cards based on placesInfo', () => {
    const mockData = [
      {
        name: 'Place A',
        img: 'place-a.jpg',
        content: 'Description of Place A',
        tags: ['Tag1', 'Tag2']
      },
      {
        name: 'Place B',
        img: 'place-b.jpg',
        content: 'Description of Place B',
        tags: ['Tag3']
      }
    ];

    render(<Places placesInfo={mockData} />);

    const cards = screen.getAllByTestId('mock-card');
    expect(cards).toHaveLength(2);

    expect(screen.getByAltText('image Place A')).toHaveAttribute('src', 'place-a.jpg');
    expect(screen.getByText('Place A')).toBeInTheDocument();
    expect(screen.getByText('Description of Place A')).toBeInTheDocument();
    expect(screen.getByText('Tag1')).toBeInTheDocument();
    expect(screen.getByText('Tag2')).toBeInTheDocument();

    expect(screen.getByAltText('image Place B')).toHaveAttribute('src', 'place-b.jpg');
    expect(screen.getByText('Place B')).toBeInTheDocument();
    expect(screen.getByText('Description of Place B')).toBeInTheDocument();
    expect(screen.getByText('Tag3')).toBeInTheDocument();
  });

  it('renders nothing if placesInfo is empty', () => {
    render(<Places placesInfo={[]} />);
    expect(screen.queryByTestId('mock-card')).not.toBeInTheDocument();
  });
});
