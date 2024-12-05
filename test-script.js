import http from "k6/http";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";
import { sleep } from "k6";

export let options = {
  scenarios: {
    contacts: {
      executor: "ramping-vus", // Use a ramping virtual users executor
      startVUs: 0, // Start with 0 virtual users
      stages: [ // Define the stages of the test
        { duration: "20s", target: 10 }, // Ramp up to 10 VUs over 20 seconds
        { duration: "10s", target: 0 }, // Ramp down to 0 VUs over 10 seconds
      ],
      gracefulRampDown: "0s", // No time for graceful ramp down
    },
  },
  summaryTrendStats: [ // Define which statistics to include in the summary
    "avg", // Average response time
    "min", // Minimum response time
    "med", // 50th percentile response time
    "max", // Maximum response time
    "p(95)", // 95th percentile response time
    "p(99)", // 99th percentile response time
    "count", // Total number of requests
  ],
};

export default function () {
  http.get("http://localhost:3000/");
  sleep(1);
}

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
    stdout: textSummary(data, { indent: " ", enableColors: true }),
  };
}
