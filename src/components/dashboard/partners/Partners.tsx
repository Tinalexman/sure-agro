"use client";

import React, { useEffect, useState } from "react";

import { useDashboardData } from "@/src/stores/dashboardStore";

import { tUser, createRandomUsers } from "./types";
import { convertDateWithJustSlashes } from "@/src/functions/dateFunctions";
import { Loader } from "@mantine/core";

const Partners = () => {
  const [users, setUsers] = useState<tUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setUsers(createRandomUsers(10));
    setLoading(false);
  }, []);

  return (
    <div className="w-full h-full flex flex-col ">
      {!loading && (
        <div className="w-full pt-10">
          {users.length > 0 && (
            <table className="w-full">
              <tr>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Service</th>
                <th>Product</th>
                <th>Joined Date</th>
              </tr>
              {users.map((user, i) => (
                <tr key={user.id}>
                  <td>
                    <div>
                      <h2 className="text-lg text-monokai dark:text-white font-medium">
                        {user.firstName} {user.lastName}
                      </h2>
                      <p className="text-sm text-neutral-dark dark:text-neutral-light">
                        {user.email}
                      </p>
                    </div>
                  </td>
                  <td>{user.contact}</td>
                  <td>{user.service}</td>
                  <td>{user.product}</td>
                  <td>{convertDateWithJustSlashes(user.joinedDate)}</td>
                </tr>
              ))}
            </table>
          )}
        </div>
      )}
      {loading && (
        <div className="w-full h-full flex justify-center items-center">
          <Loader color="myColor.9" />
        </div>
      )}
    </div>
  );
};

export default Partners;
