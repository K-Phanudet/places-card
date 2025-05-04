import React from "react";
import { render, screen } from '@testing-library/react';
import { CardImage } from './card-image'
import '@testing-library/jest-dom';

describe('CardImage', () => {
    it('should render card img wrapper',() => {
        const className = "class-name-card" 
        
        render(<CardImage src="img_src" className={className} data-testid="card-img-wrapper"/>)
        const element = screen.getByTestId("card-img-wrapper")
        expect(element).toHaveClass(className)
        expect(screen.getByTestId("card-img-wrapper")).toHaveClass("card-img")
    })

    it('should render img tag',() => {
        render(<CardImage src="img_src"/>)
        expect(screen.getByTestId("card-img-content")).toBeDefined()
    })
});