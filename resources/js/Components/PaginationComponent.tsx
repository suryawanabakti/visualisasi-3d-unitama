import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/Components/ui/pagination";
import { Link } from "@inertiajs/react";
import React from "react";

export default function PaginationComponent({
    links,
    currentPage,
}: {
    links: any;
    currentPage: number;
}) {
    return (
        <Pagination className="hidden sm:table-cell">
            <PaginationContent>
                {links.map((link: any) => {
                    return (
                        <PaginationItem className="mt-3" key={link.label}>
                            <PaginationLink
                                isActive={
                                    currentPage == link.label ? true : false
                                }
                                href={link.url}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            ></PaginationLink>
                        </PaginationItem>
                    );
                })}
            </PaginationContent>
        </Pagination>
    );
}
