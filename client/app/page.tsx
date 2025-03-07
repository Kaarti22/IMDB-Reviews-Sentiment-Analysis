"use client";

import React, { useState } from "react";
import axios from "axios";

interface SentimentResponse {
  sentiment: string;
  confidence: number;
}

const page = () => {
  const [review, setReview] = useState<string>("");
  const [result, setResult] = useState<SentimentResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const analyzeSentiment = async () => {
    setLoading(true);
    setResult(null);

    try {
      const response = await axios.post<SentimentResponse>(
        "http://127.0.0.1:8000/predict",
        {
          review,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setResult(response.data);
    } catch (err) {
      console.error("Error analyzing sentiment: ", err);
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          IMDB Sentiment Analysis
        </h1>
        <textarea
          className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Enter a movie review..."
        />
        <button
          onClick={analyzeSentiment}
          className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>
        {result && (
          <h2
            className={`mt-4 text-2xl font-semibold ${
              result.sentiment === "Positive"
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            Sentiment: {result.sentiment} (Confidence:{" "}
            {(result.confidence * 100).toFixed(2)}%)
          </h2>
        )}
      </div>
    </div>
  );
};

export default page;
