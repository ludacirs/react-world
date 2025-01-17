'use client';

import React from 'react';
import { ArticleListItem } from '..';
import { ArticleListPagination } from '@/features/article';
import { getItemIndex } from '@/shared/utils/array';
import { useGetArticles } from '@/shared/api/realworld/endpoints/articles/articles';
import { getLastPage } from '@/entities/article/api/page';
import { useSearchParams } from 'next/navigation';

interface ArticleListProps {}

const LIMIT = 10;

const ArticleList = ({}: ArticleListProps) => {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page') ?? 1);
  const { data: articlesResponse } = useGetArticles(
    { limit: LIMIT, offset: (currentPage - 1) * LIMIT },
    {
      query: {
        keepPreviousData: true,
      },
    },
  );

  const { articles, articlesCount } = articlesResponse ?? {
    articles: [],
    articlesCount: 0,
  };

  const lastPage = getLastPage(LIMIT, articlesCount);

  return (
    <>
      {articles?.map((articleProps, index, array) => {
        const itemIndex = getItemIndex(index, array);

        return (
          <>
            <div key={articleProps.slug} className={`py-[1.5rem] max- border-black/10 ${style[itemIndex]}`}>
              <ArticleListItem {...articleProps} />
            </div>
          </>
        );
      })}
      <ArticleListPagination lastPage={lastPage} currentPage={currentPage} />
    </>
  );
};

export default ArticleList;

const style = {
  firstItem: 'border-y-1',
  otherItem: 'border-b-1',
  lastItem: 'border-none',
};
