import { RatingContainer } from './styles';

const Rating = ({ rating }) => {
    const ratingColor = (rating) => {
        if (rating >= 12 && rating <= 13) return '#FFC107';
        else if (rating >= 14 && rating <= 15) return '#FFA500';
        else if (rating >= 16 && rating <= 17) return '#F44336';
        else if (rating >= 18) return '#000';
        else return '#4CAF50';
    };

    return (
        <RatingContainer
            style={{
                background: ratingColor(rating),
            }}
        >
            {rating}
        </RatingContainer>
    );
};

export default Rating;
