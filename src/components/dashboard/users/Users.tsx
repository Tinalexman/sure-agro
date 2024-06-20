"use client";

import React, { useEffect, useState } from "react";

import { useDashboardData } from "@/src/stores/dashboardStore";

const Users = () => {
  useEffect(() => {
    useDashboardData.setState({ page: 3 });
  }, []);

  return <div>Settings</div>;
};

export default Users;
