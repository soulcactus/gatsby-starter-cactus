export interface CategoryProps {
    categories?: string[];
    currentCategory: number;
    handleChange: (category: string) => void;
    handleNext: () => void;
    handlePrevious: () => void;
}
