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

export default function SimplePagination({
    links,
    currentPage,
    search,
}: {
    links: any;
    currentPage: number;
    search?: string;
}) {
    return (
        <Pagination>
            <PaginationContent>
                {currentPage > 1 && (
                    <PaginationItem className="mt-3">
                        <PaginationLink
                            href={
                                links.first + `&search=${search ? search : ""}`
                            }
                        >
                            First Page
                        </PaginationLink>
                    </PaginationItem>
                )}

                {links.prev && (
                    <PaginationItem className="mt-3">
                        <PaginationPrevious
                            href={
                                links.prev + `&search=${search ? search : ""}`
                            }
                        >
                            Prev
                        </PaginationPrevious>
                    </PaginationItem>
                )}
                {links.next && (
                    <PaginationItem className="mt-3">
                        <PaginationNext
                            href={
                                links.next + `&search=${search ? search : ""}`
                            }
                        >
                            Next
                        </PaginationNext>
                    </PaginationItem>
                )}

                <PaginationItem className="mt-3">
                    <PaginationLink
                        href={links.last + `&search=${search ? search : ""}`}
                    >
                        Last Page
                    </PaginationLink>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
