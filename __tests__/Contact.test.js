import {render, screen} from "@testing-library/react"
import Contact from "../src/components/Contact"
import "@testing-library/jest-dom"

// multiple tests can be written inside describe 
// instead of test we can also write it 

test("should render button inside Contact", () => {
    render(<Contact />);

    const submit = screen.getByText("Submit");

    expect(submit).toBeInTheDocument();
})