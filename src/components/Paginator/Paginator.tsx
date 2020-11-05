import React, { FC } from "react";
import { Link } from "../Link";
import { Text } from "../Text";

export const Paginator: FC = ({ currentPage, totalPages, navigateToPage }) => {
    return (
        <div className="d-flex justify-content-center">
            <div className="p-2 bd-highlight">
                {currentPage > 1 ? (
                    <Link onClick={() => navigateToPage(1)} data-testid="first-page">
                        First
                    </Link>
                ) : (
                    <Text size="small" data-testid="first-page">
                        First
                    </Text>
                )}
            </div>
            <div className="p-2 bd-highlight">
                {currentPage > 1 ? (
                    <Link
                        onClick={() => navigateToPage(currentPage - 1)}
                        data-testid="previous-page"
                    >
                        Previous
                    </Link>
                ) : (
                    <Text size="small" data-testid="previous-page">
                        Previous
                    </Text>
                )}
            </div>
            <div className="p-2 bd-highlight">
                <Text size="small">
                    Page {currentPage} of {totalPages}
                </Text>
            </div>
            <div className="p-2 bd-highlight">
                {currentPage < totalPages ? (
                    <Link onClick={() => navigateToPage(currentPage + 1)} data-testid="next-page">
                        Next
                    </Link>
                ) : (
                    <Text size="small" data-testid="next-page">
                        Next
                    </Text>
                )}
            </div>
            <div className="p-2 bd-highlight">
                {currentPage < totalPages ? (
                    <Link onClick={() => navigateToPage(totalPages)} data-testid="last-page">
                        Last
                    </Link>
                ) : (
                    <Text size="small" data-testid="last-page">
                        Last
                    </Text>
                )}
            </div>
        </div>
    );
};
