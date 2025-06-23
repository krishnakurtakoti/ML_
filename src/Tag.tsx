// Tag.tsx
import React from 'react';

interface TagProps {
    value: string;
}

const Tag: React.FC<TagProps> = ({ value }) => {
    return (
        <span className="tag">{value}</span>
    );
};

export default Tag;

