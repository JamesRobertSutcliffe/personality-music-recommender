/**
 * @jest-environment jsdom
 */

import React, { useContext, useEffect } from "react";
import { render, screen } from "@testing-library/react";
import {
  EmailProvider,
  EmailContext,
} from "../../../src/app/context/EmailContext";

describe("EmailProvider", () => {
  it("renders without crashing", () => {
    render(<EmailProvider>{null}</EmailProvider>);
  });

  it("sets and uses the context correctly", () => {
    const TestComponent = () => {
      const { userEmail, setUserEmail } = useContext(EmailContext);

      useEffect(() => {
        setUserEmail("test@example.com");
      }, []);

      return <>{userEmail}</>;
    };

    render(
      <EmailProvider>
        <TestComponent />
      </EmailProvider>
    );

    expect(screen.getByText("test@example.com").textContent).toMatch(
      /test@example.com/
    );
  });
});
