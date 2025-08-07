import { createTheme, Rating as BaseRating, RatingStar, ThemeProvider } from "flowbite-react";

interface RatingProps {
  rating: 1 | 2 | 3 | 4 | 5;
}

const ratingTheme = createTheme({
  rating: {
    root: {
      base: "gap-x-1",
    },
    star: {
      filled: "text-accent-secondary",
      sizes: {
        md: "w-6 h-6",
      },
    },
  },
});

const Rating = ({ rating }: RatingProps) => {
  return (
    <ThemeProvider theme={ratingTheme}>
      <BaseRating size="md">
        <RatingStar filled={rating >= 1} />
        <RatingStar filled={rating >= 2} />
        <RatingStar filled={rating >= 3} />
        <RatingStar filled={rating >= 4} />
        <RatingStar filled={rating >= 5} />
      </BaseRating>
    </ThemeProvider>
  );
};
export default Rating;
