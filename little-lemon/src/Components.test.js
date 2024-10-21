import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";

import Counter from "./components/Counter";
import Button from "./components/Button";
import Calendar from "./components/Calendar";
import BookingForm from "./forms/BookingForm";
import SetTime from "./components/SetTime";
import SetDate from "./components/SetDate";
import { useForm } from "react-hook-form";

jest.mock("miragejs", () => ({
  createServer: () => ({}),
}));

//_____________________________________________________counter

describe("counter component", () => {
  test("Counter starts at 0 - decrement button disable", () => {
    render(
      <Counter
        from="adult"
        savedData={null}
        setValue={() => {}}
        watch={() => ({})}
      />
    );

    const output = screen.getByRole("status");

    expect(output).toHaveTextContent("0");

    const decrementButton = screen.getByTestId("decrement-button");
    expect(decrementButton).toBeDisabled();
  });

  ///

  test("counter operation", () => {
    render(
      <Counter
        from="adult"
        savedData={null}
        setValue={() => {}}
        watch={() => ({})}
      />
    );

    const output = screen.getByRole("status");

    const buttons = screen.getAllByRole("button");

    fireEvent.click(buttons[1]);
    expect(output).toHaveTextContent("1");

    fireEvent.click(buttons[0]);
    expect(output).toHaveTextContent("0");
  });

  ///

  test("counter savedData", () => {
    const savedData = { guest: { adult: 2, chidlren: 1 } };
    render(
      <Counter
        from="adult"
        savedData={savedData}
        setValue={() => {}}
        watch={() => ({})}
      />
    );

    const output = screen.getByRole("status");

    expect(output).toHaveTextContent("2");
  });
});

//______________________________________________________button test

describe("button component", () => {
  test("button cases", () => {
    render(<Button btn="primary" />);

    const button = screen.getByRole("button");

    expect(button).toHaveClass("button-primary");
  });

  ///

  test("button default without btn prop", () => {
    render(<Button />);

    const button = screen.getByRole("button");

    expect(button).toHaveClass("button-primary");
  });

  ///

  test("button disabled", () => {
    render(<Button disabled={true} />);

    const button = screen.getByRole("button");

    expect(button).toHaveAttribute("disabled");
  });

  ///

  test("button completed", () => {
    render(<Button text="Click me" btn="tertiary" disabled={true} />);

    const button = screen.getByRole("button");

    expect(button).toHaveAttribute("disabled");
    expect(button).toHaveTextContent("Click me");
  });
});

//_____________________________________________________Calendar test

describe("Calendar Component", () => {
  // Mocks

  const mockSelectDate = jest.fn();
  const mockSetCalendarVisible = jest.fn();
  const mockSetValue = jest.fn();

  //

  test("should render the current month and year", () => {
    render(
      <Calendar
        selectDate={null}
        finalDate={{ day: null, month: null }}
        setCalendarVisible={mockSetCalendarVisible}
        setValue={mockSetValue}
      />
    );

    const monthElement = new Date().toLocaleString("en-US", { month: "long" });
    const yearElement = new Date().getFullYear().toString();
    const calendarPage = screen.getByTestId("calendar-page");

    expect(calendarPage).toHaveTextContent(`${monthElement} ${yearElement}`);
  });

  //

  test("should disable past days", () => {
    render(
      <Calendar
        selectDate={mockSelectDate}
        finalDate={{ day: null, month: null }}
        setCalendarVisible={mockSetCalendarVisible}
        setValue={mockSetValue}
      />
    );

    const today = new Date();

    const pastDays = screen.getAllByRole("radio").filter((input) => {
      return (
        parseInt(input.value, 10) < today.getDate() &&
        today.getMonth() === new Date().getMonth()
      );
    });

    pastDays.forEach((day) => {
      expect(day).toBeDisabled();
    });
  });

  //

  test("should navigate to the next month", () => {
    render(
      <Calendar
        selectDate={mockSelectDate}
        finalDate={{ day: null, month: null }}
        setCalendarVisible={mockSetCalendarVisible}
        setValue={mockSetValue}
      />
    );
    const nextButton = screen.getByText(">");
    fireEvent.click(nextButton);

    // next moth displayed
    const Month = new Date().getMonth();
    let date = new Date();
    date.setMonth(Month + 1);

    const nextMonthName = date.toLocaleString("en-US", { month: "long" });

    const year = new Date().getFullYear();

    const calendarPage = screen.getByTestId("calendar-page");

    expect(calendarPage).toHaveTextContent(`${nextMonthName} ${year}`);
  });

  //

  test("should call selectDate when a day is selected", () => {
    render(
      <Calendar
        selectDate={mockSelectDate}
        finalDate={{ day: null, month: null }}
        setCalendarVisible={mockSetCalendarVisible}
        setValue={mockSetValue}
      />
    );
    const dayToSelect = 15; // Scegli un giorno del mese attuale
    const dayElement = screen.getByLabelText(dayToSelect.toString());

    fireEvent.click(dayElement);

    expect(mockSelectDate).toHaveBeenCalledWith(
      expect.objectContaining({
        day: dayToSelect,
        month: new Date().getMonth(),
        year: new Date().getFullYear(),
        dayName: expect.any(String), // dayName string?
        monthName: expect.any(String), // monthName string?
      })
    );
  });

  //

  test("should close calendar when clicking outside", () => {
    render(
      <Calendar
        selectDate={mockSelectDate}
        finalDate={{ day: null, month: null }}
        setCalendarVisible={mockSetCalendarVisible}
        setValue={mockSetValue}
      />
    );
    fireEvent.mouseDown(document);

    expect(mockSetCalendarVisible).toHaveBeenCalledWith(false);
  });
});

//_____________________________________________________booking form

describe('"testing <SetTime/>"', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            times: [
              { time: "19:00", disable: true },
              { time: "19:30", disable: false },
              { time: "20:00", disable: true },
              { time: "20:30", disable: false },
              { time: "21:00", disable: true },
              { time: "21:30", disable: false },
            ],
          }),
      })
    );
  });

  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  // const savedData = null;

  // const propsUseForm = {
  //   register: jest.fn(),
  //   errors: {},
  //   watch: jest.fn((field) => {
  //     if (field === "date") return null;
  //     return undefined;
  //   }),
  //   setValue: jest.fn(),
  // };

  // const propsUseForm = {
  //   register: jest.fn(),
  //   errors: {},
  //   watch: jest.fn(() => "ciccio"),
  //   setValue: jest.fn(),
  // };

  // afterEach(() => {
  //   cleanup();
  //   jest.clearAllMocks(); // clean mocks
  // });

  //

  test("first mount no fetch", async () => {
    render(
      <BookingForm
        setFormNr={jest.fn()}
        savedData={null}
        setSavedData={jest.fn()}
      />
    );

    expect(global.fetch).not.toHaveBeenCalled();
  });

  //

  test("call fetch", async () => {
    render(
      <BookingForm
        setFormNr={jest.fn()}
        savedData={null}
        setSavedData={jest.fn()}
      />
    );

    const todayRadio = screen.getByLabelText(/today/i);
    const tomorrowRadio = screen.getByLabelText(/tomorrow/i);
    const otherRadio = screen.getByTestId("other");

    fireEvent.click(todayRadio);
    expect(global.fetch).toHaveBeenCalled();

    fireEvent.click(tomorrowRadio);

    expect(global.fetch).toHaveBeenCalled();

    fireEvent.click(otherRadio);

    const calendar = screen.getByTestId("calendar");

    expect(calendar).toBeInTheDocument();

    const calendarRadio = screen.getAllByTestId("calendar-input");

    const calendarRadioActive = calendarRadio.filter(
      (input) => !input.disabled
    );

    calendarRadioActive.forEach((input) => {
      fireEvent.click(input);
    });

    expect(global.fetch).toBeCalledTimes(calendarRadioActive.length + 2);
  });

  //

  // test("fetch call", async () => {
  //   render(
  //     <SetTime
  //       title="2. SELECT TIME"
  //       description="Select the perfect hour for your reservation."
  //       {...propsUseForm2}
  //       savedData={savedData}
  //     />
  //   );

  //   // await waitFor(() => {
  //   //   expect(console.log).toHaveBeenCalledWith("27-9-2024");
  //   // });

  //   // Usa `waitFor` per attendere che la fetch venga chiamata.
  //   await waitFor(() => {
  //     expect(global.fetch).toHaveBeenCalled(); // Assicurati che la fetch sia stata chiamata almeno una volta
  //   });

  //   // Verifica che la chiamata a fetch sia con il giusto URL
  //   expect(global.fetch).toHaveBeenCalledWith(
  //     `/littlelemon-api/reservations/27-9-2024`
  //   );
  // });
});
