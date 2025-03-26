import React, { useState, useEffect } from 'react';

const TagList = () => {
  // Initial set of tags (can be dynamic from an API or passed as props)
  const [tags, setTags] = useState(['React', 'JavaScript', 'CSS', 'Node', 'HTML', 'Elasticsearch', 'Serilog', 'ASP.NET Core', 'Azure Function', 'SIMD', 'Numpy', 'Python', 'Jacobians', 'PyTorch', 'CUDA', 'Minimum Mean Squared Error (MMSE)', 'LLM', 'Docker', 'GitHub Action', 'ML', 'Rust', 'Flux.jl', 'Deep Learning in Julia']);

  useEffect(() => {
    // Sorting tags in ascending order when the component mounts or tags change
    const sortedTags = [...tags].sort();
    setTags(sortedTags);
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <h2>Tags (Ascending Order)</h2>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default TagList;
