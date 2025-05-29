import { useState } from "react";
import Toast from "./Toast";

export default function TestToast() {
  const [showToast, setShowToast] = useState(true);

  return (
    <div>
      {showToast && (
        <Toast
          message="This is a test toast message!"
          onClose={() => setShowToast(false)}
        />
      )}
      <button
        onClick={() => setShowToast(true)}
        className="mt-10 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Show Toast Again
      </button>
    </div>
  );
}
