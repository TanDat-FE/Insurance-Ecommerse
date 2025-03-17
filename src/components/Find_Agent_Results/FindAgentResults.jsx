import React from "react";
import Map from "@components/Find_Agent_Results/Map";
import SearchBar from "@components/Find_Agent_Results/SearchBar";
import AgentList from "@components/Find_Agent_Results/AgentList";

export default function FindAgentResults() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <SearchBar />
      <Map />
      <AgentList />
    </div>
  );
}
