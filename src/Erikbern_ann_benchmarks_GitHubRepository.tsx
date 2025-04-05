import React from 'react';
// import './CodeDisplay.css'; // Import CSS for styling

// Simple component to display the code sections
const Erikbern_ann_benchmarks_GitHubRepository_CodeDisplay = () => {
  return (
    <div className="Erikbern_ann_benchmarks_GitHubRepository">
      <div className="code-section Erikbern_ann_benchmarks_GitHubRepository">
        <h2>pgvector Module (Python)</h2>
        <pre className="code-snippet">
          {`
"""
This module supports connecting to a PostgreSQL instance and performing vector
indexing and search using the pgvector extension. The default behavior uses
the "ann" value of PostgreSQL user name, password, and database name, as well
as the default host and port values of the psycopg driver.
"""
          `}
        </pre>
      </div>

      <div className="code-section Erikbern_ann_benchmarks_GitHubRepository">
        <h2>Dockerfile Configuration</h2>
        <pre className="code-snippet">
          {`
RUN service postgresql start && \\
    psql -c "CREATE USER ann WITH ENCRYPTED PASSWORD 'ann'" && \\
    psql -c "CREATE DATABASE ann" && \\
    psql -c "GRANT ALL PRIVILEGES ON DATABASE ann TO ann" && \\
    psql -d ann -c "GRANT ALL ON SCHEMA public TO ann" && \\
    psql -d ann -c "CREATE EXTENSION vector" && \\
    psql -c "ALTER USER ann SET maintenance_work_mem = '4GB'" && \\
    psql -c "ALTER USER ann SET max_parallel_maintenance_workers = 0" && \\
    psql -c "ALTER SYSTEM SET shared_buffers = '4GB'"

USER root
          `}
        </pre>
      </div>
    </div>
  );
};

export default Erikbern_ann_benchmarks_GitHubRepository_CodeDisplay;
