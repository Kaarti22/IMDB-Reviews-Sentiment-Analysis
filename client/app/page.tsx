"use client";

import React, { useState } from "react";
import axios from "axios";

interface SentimentResponse {
  sentiment: string;
  confidence: number;
}

const Page = () => {
  const [review, setReview] = useState<string>("");
  const [result, setResult] = useState<SentimentResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const analyzeSentiment = async () => {
    setLoading(true);
    setResult(null);
    setError("");

    if (review.trim() === "") {
      setError("Please enter a review before analyzing.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post<SentimentResponse>(
        `${process.env.NEXT_PUBLIC_FLASK_API_URL}/predict`,
        { review },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setResult(response.data);
    } catch (err) {
      console.error("Error analyzing sentiment: ", err);
      setError("Failed to analyze sentiment. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-6"
      style={{
        backgroundImage: "url('/background_image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Card with Glassmorphism */}
      <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-white/30 shadow-lg shadow-black/30 rounded-2xl p-8 w-full max-w-2xl text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text drop-shadow-lg mb-4">
          IMDB Reviews Sentiment Analysis
        </h1>

        {/* Input Box */}
        <textarea
          className="w-full h-32 p-4 bg-white bg-opacity-20 text-slate-500 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-300"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Enter a movie review..."
        />

        {/* Analyze Button */}
        <button
          onClick={analyzeSentiment}
          className="mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-2 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>

        {/* Sentiment Result */}
        {result && (
          <h2
            className={`mt-4 text-2xl font-semibold ${
              result.sentiment === "Positive"
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            Sentiment: {result.sentiment} (Confidence:{" "}
            {(result.confidence * 100).toFixed(2)}%)
          </h2>
        )}

        {/* Display Error Message */}
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default Page;
