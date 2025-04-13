import React from "react";

interface Props {
  message: string;
}

export const Notification: React.FC<Props> = ({ message }) => (
  <div className="bg-yellow-100 p-2 mb-2 text-yellow-800 rounded">{message}</div>
);
