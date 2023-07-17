import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it("should be able to add 2 numbers ", () =>{
    const button1 = container.getByTestId("number1");
    const addButton = container.getByTestId("operator-add");
    const button4 = container.getByTestId("number4");
    const equalsButton = container.getByTestId("operator-equals")
    const runningTotal = container.getByTestId("running-total")
    fireEvent.click(button1)
    fireEvent.click(addButton)
    fireEvent.click(button4)
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual("5")
  })

  it("should be able to subtract", ()=>{
    const button4 = container.getByTestId("number4");
    const subtractButton = container.getByTestId("operator-subtract");
    const button7 = container.getByTestId("number7");
    const equalsButton = container.getByTestId("operator-equals")
    const runningTotal = container.getByTestId("running-total")
    fireEvent.click(button7)
    fireEvent.click(subtractButton)
    fireEvent.click(button4)
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual("3")
  })

  it("should be able to multiply", ()=>{
    const button3 = container.getByTestId("number3");
    const multiplyButton = container.getByTestId("operator-multiply");
    const button5 = container.getByTestId("number5");
    const equalsButton = container.getByTestId("operator-equals")
    const runningTotal = container.getByTestId("running-total")
    fireEvent.click(button3)
    fireEvent.click(multiplyButton)
    fireEvent.click(button5)
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual("15") 
  })

  it("should be able to divide", ()=>{
    const button2 = container.getByTestId("number2");
    const button1 = container.getByTestId("number1");
    const divideButton = container.getByTestId("operator-divide");
    const button7 = container.getByTestId("number7");
    const equalsButton = container.getByTestId("operator-equals")
    const runningTotal = container.getByTestId("running-total")
    const subtractButton = container.getByTestId("operator-subtract");
    
    fireEvent.click(button2)
    fireEvent.click(button1)
    fireEvent.click(divideButton)
    fireEvent.click(button7)
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual("3") 
  })

  it("should be able to concatenate",()=>{
    const button1 = container.getByTestId("number1")
    const button2 = container.getByTestId("number2")
    const button3 = container.getByTestId("number3")
    const button4 = container.getByTestId("number4")
    const runningTotal = container.getByTestId("running-total")
    fireEvent.click(button1)
    fireEvent.click(button2)
    fireEvent.click(button3)
    fireEvent.click(button4)
    expect(runningTotal.textContent).toEqual("1234")
  })

  it("should be able to use multilpe operations",()=>{
    const button1 = container.getByTestId("number1")
    const button2 = container.getByTestId("number2")
    const button3 = container.getByTestId("number3")
    const button4 = container.getByTestId("number4")
    const equalsButton = container.getByTestId("operator-equals")
    const addButton = container.getByTestId("operator-add")
    const subtractButton = container.getByTestId("operator-subtract")
    const runningTotal = container.getByTestId("running-total")
    fireEvent.click(button1)
    fireEvent.click(addButton)
    fireEvent.click(button2)
    fireEvent.click(addButton)
    fireEvent.click(button3)
    fireEvent.click(subtractButton)
    fireEvent.click(button4)
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual("2")
})

  it("should clear all by pressing C", ()=>{
    const button1 = container.getByTestId("number1")
    const button2 = container.getByTestId("number2")
    const button3 = container.getByTestId("number3")
    const button4 = container.getByTestId("number4")
    const equalsButton = container.getByTestId("operator-equals")
    const addButton = container.getByTestId("operator-add")
    const subtractButton = container.getByTestId("operator-subtract")
    const runningTotal = container.getByTestId("running-total")
    const clear = container.getByTestId("clear")
    fireEvent.click(button1)
    fireEvent.click(addButton)
    fireEvent.click(button2)
    fireEvent.click(addButton)
    fireEvent.click(button3)
    fireEvent.click(subtractButton)
    fireEvent.click(button4)
    fireEvent.click(equalsButton)
    fireEvent.click(clear)
    expect(runningTotal.textContent).toEqual("0")
  })
})

