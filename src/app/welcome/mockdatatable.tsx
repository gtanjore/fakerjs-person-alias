// components/MockDataTable.tsx
'use client'
import React, { useState, useEffect } from 'react';
import generateMockData from '../welcome/generatemockdata';

interface Alias {
  firstname: string;
  lastname: string;
}

interface Person {
  firstname: string;
  lastname: string;
  dateofbirth: string;
  alias: Alias[];
}

function formatDate(isoDate: string): string {
  const date: Date = new Date(isoDate);
  const month: string = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day: string = String(date.getDate()).padStart(2, '0');
  const year: number = date.getFullYear();
  
  return `${month}/${day}/${year}`;
}

const MockDataTable: React.FC = () => {
  const [data, setData] = useState<Person[]>([]);

  useEffect(() => {
    const mockData = generateMockData(10); // Generate 10 records
    setData(mockData);
  }, []);

  return (
    <div>
      <h1>Mock Data Table</h1>
      <table className="usa-table usa-table--bordered usa-table--striped">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Aliases</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person, index) => (
            <tr key={index}>
              <td>{person.firstname}</td>
              <td>{person.lastname}</td>
              <td>{formatDate(person.dateofbirth)}</td>
              <td>
                {person.alias.length > 0 ? (
                  <ul>
                    {person.alias.map((alias, aliasIndex) => (
                      <li key={aliasIndex}>
                        {alias.firstname} {alias.lastname}
                      </li>
                    ))}
                  </ul>
                ) : (
                  'No aliases'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MockDataTable;