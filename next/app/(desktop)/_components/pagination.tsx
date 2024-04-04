"use client";

import {
  Pagination as PaginationBody,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Pagination = ({
  currentPage,
  totalPages,
  props,
}: {
  props?: object;
  currentPage: number;
  totalPages: number;
}) => {
  const PAGE_GROUP_SIZE = 10; // 한번에 보여질 페이지 수
  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(PAGE_GROUP_SIZE);

  const handleClickPrevious = () => {
    if (startPage > 1) {
      setStartPage(startPage - PAGE_GROUP_SIZE);
      setEndPage(endPage - PAGE_GROUP_SIZE);
    }
  };

  const handleClickNext = () => {
    if (endPage < totalPages) {
      setStartPage(startPage + PAGE_GROUP_SIZE);
      setEndPage(endPage + PAGE_GROUP_SIZE);
    }
  };

  // 페이지 버튼 렌더링
  const pageButtons = [];
  for (let i = startPage; i <= endPage && i <= totalPages; i++) {
    pageButtons.push(
      <PaginationItem
        className={cn(
          "text-lg font-medium",
          currentPage === i && "font-pre font-bold text-blue-500"
        )}
        key={i}
      >
        <PaginationLink href={{ query: { ...props, page: i } }}>
          {i}
        </PaginationLink>
      </PaginationItem>
    );
  }

  return (
    <PaginationBody>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={{
              query: {
                ...props,
                page: currentPage - 10 < 1 ? 1 : currentPage - 10,
              },
            }}
            onClick={handleClickPrevious}
          />
        </PaginationItem>

        {pageButtons}

        <PaginationItem>
          <PaginationNext
            href={{
              query: {
                ...props,
                page:
                  currentPage + 10 > totalPages ? totalPages : currentPage + 10,
              },
            }}
            onClick={handleClickNext}
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationBody>
  );
};

export default Pagination;
