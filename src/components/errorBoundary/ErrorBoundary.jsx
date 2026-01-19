import React from "react";
export default class NotesErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Встановлюємо fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Логування на сервер або Sentry
    console.error("Error Boundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center invert-0">
          "Something went wrong. Please reload the page." ✅
        </div>
      );
    }
    return this.props.children;
  }
}
