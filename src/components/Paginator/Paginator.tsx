import React, { FC } from "react";
import { Link } from "../Link";
import { Text } from "../Text";

export const Paginator: FC = ({ currentPage, totalPages, navigateToPage }) => {
    return (
        <div className="d-flex justify-content-center">
            <div className="p-2 bd-highlight">
                {currentPage > 1 ? (
                    <Link onClick={() => navigateToPage(1)}>First</Link>
                ) : (
                    <Text size="small">First</Text>
                )}
            </div>
            <div className="p-2 bd-highlight">
                {currentPage > 1 ? (
                    <Link onClick={() => navigateToPage(currentPage - 1)}>Previous</Link>
                ) : (
                    <Text size="small">Previous</Text>
                )}
            </div>
            <div className="p-2 bd-highlight">
                <Text size="small">
                    Page {currentPage} of {totalPages}
                </Text>
            </div>
            <div className="p-2 bd-highlight">
                {currentPage < totalPages ? (
                    <Link onClick={() => navigateToPage(currentPage + 1)}>Next</Link>
                ) : (
                    <Text size="small">Next</Text>
                )}
            </div>
            <div className="p-2 bd-highlight">
                {currentPage < totalPages ? (
                    <Link onClick={() => navigateToPage(totalPages)}>Last</Link>
                ) : (
                    <Text size="small">Last</Text>
                )}
            </div>
        </div>
    );
};
