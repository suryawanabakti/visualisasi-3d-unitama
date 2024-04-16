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
        <Pagination>
            <PaginationContent>
                {/* <PaginationItem>
                    <PaginationPrevious href="#" />
                </PaginationItem> */}
                {links.map((link: any) => {
                    return (
                        <PaginationItem className="mt-3">
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

                {/* <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem> */}
                {/* <PaginationItem>
                    <PaginationNext href="#" />
                </PaginationItem> */}
            </PaginationContent>
        </Pagination>
    );
}
