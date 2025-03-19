import React from "react";
import AgentList from "./AgentList";
import Map from "./Map";
import SearchBar from "../Find_Agent_Results/SearchBar";
import Footer from "@/Pages/Footer/Footer";

export default function FindAgentResults() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <SearchBar />
      <Map />
      <AgentList />
    </div>
  );
}
