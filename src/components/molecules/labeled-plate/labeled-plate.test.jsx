import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LabeledPlate } from "./labeled-plate"
describe('LabeledPlate', () => {
    it('should render labeledPlate wrapper',()=>{
        render(<LabeledPlate labelText="Test" />)
        expect(screen.getByTestId("labeled-plate-wrapper")).toBeDefined()
    })
    it('should render labeledPlate text',()=>{
        render(<LabeledPlate labelText="Test" />)
        expect(screen.getByTestId("labeled-plate-text")).toBeDefined()
    })
    it('should render correct label text',()=>{
        const expectedLabel = "mock test"
        render(<LabeledPlate labelText={expectedLabel} />)
        expect(screen.getByTestId("labeled-plate-text").textContent).toEqual(expectedLabel)
    })
});
