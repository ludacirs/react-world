import Link from 'next/link';
import React from 'react';

interface ReadMoreButtonProps {
  slug: string;
}

const ReadMoreButton = ({ slug }: ReadMoreButtonProps) => {
  return (
    <Link href={`/article/${slug}`} className="text-gray1200 text-[0.8rem] font-light">
      Read More..
    </Link>
  );
};

export default ReadMoreButton;
