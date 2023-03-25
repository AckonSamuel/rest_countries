import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const CountryCard = ({
    officialName,
    region,
    capital,
    flagsvg,
    flagsalt,
    population,
}) => {
    const navigate = useNavigate();

    const goTo = (sm) => {
        navigate(sm);
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="100%"
                    width="100%"
                    image={flagsvg}
                    alt={flagsalt}
                    onClick={() => goTo(`/details/${officialName}`)}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {officialName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Population: {population} <br />
                        Region: {region} <br />
                        Capital: {capital}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
};

CountryCard.propTypes = {
    officialName: PropTypes.string.isRequired,
    flagsalt: PropTypes.string.isRequired,
    flagsvg: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    population: PropTypes.number.isRequired,
    // capital: PropTypes.string.isRequired,
};

export default CountryCard;