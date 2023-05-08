import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import pxToRem from '../../assets/theme/pxToRem';

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

    const theme = useTheme();

    return (
        <Card sx={{ width: pxToRem(264), height: pxToRem(336), backgroundColor: theme.palette.background.primary}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    sx={{ height: pxToRem(160) }}
                    width="100%"
                    image={flagsvg}
                    alt={flagsalt}
                    onClick={() => goTo(`/details/${officialName}`)}
                />
                <CardContent 
                sx={{ height: pxToRem(176) }}
                >
                    <Typography gutterBottom variant="cardTitle" component="div">
                        {officialName}
                    </Typography>
                    <Typography variant="cardContent">
                        <span style={{fontWeight: 600}}>Population:</span> {population.toLocaleString()} <br />
                        <span style={{fontWeight: 600}}>Region: </span> {region} <br />
                        <span style={{fontWeight: 600}}>Capital:</span> {capital}
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