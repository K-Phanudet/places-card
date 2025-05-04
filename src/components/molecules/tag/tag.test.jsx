import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Tag } from "./tag"
describe('Tag', () => {
    it('should render Tag wrapper',()=>{
        render(<Tag labelText="Test" />)
        expect(screen.getByTestId("tag-wrapper")).toBeDefined()
    })
    it('given label param is undefined when render should not render label text',()=>{
        render(<Tag />)
        expect(screen.queryByTestId("tag-label")).not.toBeInTheDocument();
    })
    it('given label param is provided when render should render label text',()=>{
        const label = "mock"
        render(<Tag  label={label}/>)
        expect(screen.getByTestId("tag-label")).toBeDefined()
        expect(screen.getByTestId("tag-label").textContent).toEqual(label)
    })
});
