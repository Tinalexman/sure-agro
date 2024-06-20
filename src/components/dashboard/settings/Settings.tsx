"use client";

import React, { useEffect, useState } from "react";

import { useDashboardData } from "@/src/stores/dashboardStore";

const Settings = () => {
  useEffect(() => {
    useDashboardData.setState({ page: 1 });
  }, []);

  return <div>Settings</div>;
};

export default Settings;
